import fs from "node:fs/promises";
import path from "node:path";
import { FileBlob, SpreadsheetFile } from "@oai/artifact-tool";

const workspace = process.cwd();
const delivery = path.join(workspace, "Entregables codex");
const previewDir = path.join(workspace, "outputs", "cobranza_servicio", "previews_final");
await fs.mkdir(previewDir, { recursive: true });

const books = [
  { key: "cobranza", path: path.join(delivery, "Master_de_Implementacion_Cobranza_Unificado.xlsx"), checks: [
    ["Resumen Auditoría", "A1:D9"], ["Wf Cobranza", "A1:H16"], ["Listado prop. Cobranza", "A1:L62"], ["Pipeline Cobranza", "A1:K8"],
  ]},
  { key: "servicio", path: path.join(delivery, "Master_de_Implementacion_Servicio_UNE_Unificado.xlsx"), checks: [
    ["Resumen Auditoría", "A1:D10"], ["WF atención al cliente", "A1:H10"], ["WF UNE", "A1:G7"], ["Listado prop. Servicio", "A1:L27"], ["Listado prop. UNE", "A1:L27"], ["Pipeline Servicio", "A1:K5"], ["Pipeline UNE", "A1:K3"],
  ]},
];

const safe = (v) => String(v).replace(/[^a-z0-9_-]+/gi, "_");
const selected = process.argv[2];
const results = [];
for (const book of books.filter((b) => !selected || b.key === selected)) {
  const wb = await SpreadsheetFile.importXlsx(await FileBlob.load(book.path));
  const errors = await wb.inspect({ kind: "match", searchTerm: "#REF!|#DIV/0!|#VALUE!|#NAME\\?|#N/A", options: { useRegex: true, maxResults: 300 }, maxChars: 3000, summary: "final formula error scan" });
  results.push({ book: book.key, errorScan: errors.ndjson });
  for (const [sheetName, range] of book.checks) {
    const preview = await wb.render({ sheetName, range, scale: 0.9, format: "png" });
    const out = path.join(previewDir, `${book.key}__${safe(sheetName)}.png`);
    await fs.writeFile(out, new Uint8Array(await preview.arrayBuffer()));
    const inspect = await wb.inspect({ kind: "region", sheetId: sheetName, range, maxChars: 4500, tableMaxRows: 20, tableMaxCols: 12, tableMaxCellChars: 120 });
    await fs.writeFile(path.join(previewDir, `${book.key}__${safe(sheetName)}.inspect.ndjson`), inspect.ndjson, "utf8");
  }
}
console.log(JSON.stringify(results, null, 2));
