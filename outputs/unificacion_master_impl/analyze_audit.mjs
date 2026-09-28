import fs from "node:fs/promises";
import path from "node:path";

const file = path.join(process.cwd(), "outputs", "unificacion_master_impl", "extracted.json");
const data = JSON.parse(await fs.readFile(file, "utf8"));
const auditName = Object.keys(data).find((k) => k.startsWith("OK_"));
const audit = data[auditName].sheets;
const rows = audit["Respuesta BNO"];
const headers = rows[1];
const records = rows.slice(2).map((row, idx) => Object.fromEntries(headers.map((h, i) => [h ?? `col_${i + 1}`, row[i] ?? null]))).map((r, idx) => ({...r, _row: idx + 3}));

const groups = new Map();
for (const record of records) {
  const id = record.ID;
  if (!id || !/^CON-\d+$/i.test(String(id))) continue;
  if (!groups.has(id)) groups.set(id, []);
  groups.get(id).push(record);
}

const latest = {};
for (const [id, items] of groups) {
  items.sort((a, b) => {
    const ad = Number(a["BNO: Fecha real"] ?? -1);
    const bd = Number(b["BNO: Fecha real"] ?? -1);
    if (bd !== ad) return bd - ad;
    return a._row - b._row;
  });
  latest[id] = items[0];
}

const flowRows = audit["Relación de flujos"];
const flowHeaders = flowRows[0];
const flows = flowRows.slice(1).filter((r) => r[0]).map((row) => {
  const base = Object.fromEntries(flowHeaders.map((h, i) => [h, row[i] ?? null]));
  const ids = String(row[6] ?? "").match(/CON-\d+/g) ?? [];
  base.audit = ids.map((id) => latest[id]).filter(Boolean).map((r) => ({
    id: r.ID,
    tema: r.Tema,
    resuelto: r["BNO: ¿Resuelto?"],
    accion: r["BNO: Acción realizada"],
    comentario: r["BNO: Comentario"],
    resultado: r["BNO: Resultado de prueba"],
    aceptado: r["Monific: ¿Aceptado?"],
    dependencia: r["BNO: Dependencia o bloqueo"],
  }));
  return base;
});

const notable = Object.values(latest).filter((r) => {
  const hayRespuesta = r["BNO: ¿Resuelto?"] || r["BNO: Acción realizada"] || r["Monific: ¿Aceptado?"];
  const tema = String(r.Tema ?? "").toLowerCase();
  return hayRespuesta && (tema.includes("propiedad") || tema.includes("inversion") || tema.includes("solicit") || tema.includes("configur") || tema.includes("comunic"));
}).map((r) => ({
  id: r.ID,
  tema: r.Tema,
  pendiente: r["Pendiente crítico"],
  requerida: r["Acción requerida (Monific)"],
  resuelto: r["BNO: ¿Resuelto?"],
  accion: r["BNO: Acción realizada"],
  comentario: r["BNO: Comentario"],
  dependencia: r["BNO: Dependencia o bloqueo"],
  resultado: r["BNO: Resultado de prueba"],
  aceptado: r["Monific: ¿Aceptado?"],
  row: r._row,
}));

const distribution = {};
for (const r of Object.values(latest)) {
  const key = `${r["BNO: ¿Resuelto?"] ?? "Sin respuesta"} | ${r["Monific: ¿Aceptado?"] ?? "Sin validación"}`;
  distribution[key] = (distribution[key] ?? 0) + 1;
}

const result = { auditName, uniqueIds: Object.keys(latest).length, distribution, flows, notable };
const out = path.join(process.cwd(), "outputs", "unificacion_master_impl", "audit_summary.json");
await fs.writeFile(out, JSON.stringify(result, null, 2), "utf8");
console.log(JSON.stringify({out, uniqueIds: result.uniqueIds, distribution}, null, 2));
