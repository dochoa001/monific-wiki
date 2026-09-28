import fs from "node:fs/promises";
import path from "node:path";
import { FileBlob, SpreadsheetFile } from "@oai/artifact-tool";

const workspace = process.cwd();
const base = path.join(workspace, "Adicionales");
const outDir = path.join(workspace, "outputs", "unificacion_master_impl");
await fs.mkdir(outDir, { recursive: true });

const COLORS = {
  green: "#C6EFCE",
  greenText: "#006100",
  yellow: "#FFF2CC",
  yellowText: "#7F6000",
  red: "#F4CCCC",
  redText: "#9C0006",
  blue: "#D9EAF7",
  blueText: "#0B5394",
  gray: "#E7E6E6",
  headerGreen: "#70AD47",
  headerBlack: "#111111",
  headerOrange: "#F58220",
  white: "#FFFFFF",
};

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) files.push(...await walk(full));
    else files.push(full);
  }
  return files;
}

function cleanText(value) {
  return String(value ?? "").trim();
}

function norm(value) {
  return cleanText(value).normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
}

function slug(value) {
  return cleanText(value).normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "_").replace(/^_+|_+$/g, "").replace(/_+/g, "_");
}

function humanizeInternal(value) {
  return cleanText(value).replace(/_+/g, " ").replace(/\b\w/g, (m) => m.toUpperCase());
}

function truncate(value, max = 520) {
  const text = cleanText(value);
  return text.length <= max ? text : `${text.slice(0, max - 1)}…`;
}

function statusStyle(status) {
  const text = norm(status);
  if (text.includes("rechaz") || text.includes("elimin") || text.includes("no implementar")) return { fill: COLORS.red, font: { color: COLORS.redText, bold: true } };
  if (text.includes("pendiente") || text.includes("parcial") || text.includes("validar") || text.includes("mantener off")) return { fill: COLORS.yellow, font: { color: COLORS.yellowText, bold: true } };
  if (text.includes("api") || text.includes("extern")) return { fill: COLORS.blue, font: { color: COLORS.blueText, bold: true } };
  return { fill: COLORS.green, font: { color: COLORS.greenText, bold: true } };
}

function setHeader(range, fill) {
  range.format = {
    fill,
    font: { color: COLORS.white, bold: true },
    horizontalAlignment: "center",
    verticalAlignment: "center",
    wrapText: true,
    borders: { preset: "all", style: "thin", color: "#B7B7B7" },
  };
}

function styleData(range) {
  range.format.wrapText = true;
  range.format.verticalAlignment = "top";
  range.format.borders = { preset: "all", style: "thin", color: "#D9D9D9" };
}

const files = await walk(base);
const masterPath = files.find((p) => path.basename(p).toLowerCase().includes("master de implementaci") && p.toLowerCase().endsWith(".xlsx"));
const sourceDir = path.dirname(masterPath);
const mappingPath = files.find((p) => path.dirname(p) === sourceDir && path.basename(p).toLowerCase().includes("mapeo de propiedades"));
const auditPath = files.find((p) => path.dirname(p) === sourceDir && path.basename(p).startsWith("OK_") && p.toLowerCase().endsWith(".xlsx"));
if (!masterPath || !mappingPath || !auditPath) throw new Error("No se localizaron los tres archivos fuente.");

const [master, mapping, audit] = await Promise.all([
  SpreadsheetFile.importXlsx(await FileBlob.load(masterPath)),
  SpreadsheetFile.importXlsx(await FileBlob.load(mappingPath)),
  SpreadsheetFile.importXlsx(await FileBlob.load(auditPath)),
]);

// -------- Auditoría: conservar la respuesta más reciente por ID --------
const auditSheet = audit.worksheets.getItem("Respuesta BNO");
const auditValues = auditSheet.getUsedRange(true).values;
const auditHeaders = auditValues[1];
const auditRecords = auditValues.slice(2).map((row, idx) => ({
  ...Object.fromEntries(auditHeaders.map((h, i) => [h ?? `col_${i + 1}`, row[i] ?? null])),
  _row: idx + 3,
}));
const auditGroups = new Map();
for (const record of auditRecords) {
  if (!/^CON-\d+$/i.test(cleanText(record.ID))) continue;
  if (!auditGroups.has(record.ID)) auditGroups.set(record.ID, []);
  auditGroups.get(record.ID).push(record);
}
const latestAudit = {};
for (const [id, items] of auditGroups) {
  items.sort((a, b) => {
    const ad = Number(a["BNO: Fecha real"] ?? -1);
    const bd = Number(b["BNO: Fecha real"] ?? -1);
    if (bd !== ad) return bd - ad;
    return a._row - b._row;
  });
  latestAudit[id] = items[0];
}

const relationSheet = audit.worksheets.getItem("Relación de flujos");
const relation = relationSheet.getUsedRange(true).values;
const relationHeaders = relation[0];
const flowAudit = new Map();
for (const row of relation.slice(1)) {
  const entry = Object.fromEntries(relationHeaders.map((h, i) => [h, row[i] ?? null]));
  const name = cleanText(entry["Workflow real en HubSpot"]);
  if (!name) continue;
  const ids = cleanText(entry["CON sin responder (J vacia)"] ?? entry["CON sin responder (J vacía)"] ?? row[6]).match(/CON-\d+/g) ?? [];
  flowAudit.set(norm(name), { ...entry, ids, records: ids.map((id) => latestAudit[id]).filter(Boolean) });
}

function genericWorkflowDecision(name, info) {
  const lname = norm(name);
  const records = info?.records ?? [];
  const ids = info?.ids ?? [];
  const results = records.map((r) => cleanText(r["BNO: ¿Resuelto?"]));
  const validations = records.map((r) => cleanText(r["Monific: ¿Aceptado?"]));
  const isSequence = lname.includes("secuencia");
  const isCommunication = isSequence || lname.includes("correo") || lname.includes("notific");
  let status = "Implementado según auditoría";
  let decision = "Usar acciones nativas: trigger, reinscripción, cambio de etapa, tarea o actualización de propiedad.";
  if (isSequence) {
    status = "Rechazado por licencia; sustituir";
    decision = "No automatizar inscripción a secuencias desde workflows: requiere Enterprise. Sustituir por email automatizado de marketing o tarea para inscripción manual.";
  } else if (isCommunication) {
    status = results.includes("Parcial") ? "Pendiente de aprobación" : "Implementado; pendiente de aprobación";
    decision = "La automatización es viable; mantener apagada hasta aprobar copy, canal, remitente y destinatario exacto.";
  } else if (results.includes("No")) {
    status = "Rechazado / rediseñar";
  } else if (results.includes("Parcial") || validations.includes("Pendiente")) {
    status = "Parcial / pendiente de validación";
  }
  const actions = records.map((r) => r["BNO: Acción realizada"]).filter(Boolean).map((v) => truncate(v, 180));
  const notes = `${ids.length ? `Auditoría: ${ids.join(", ")}. ` : ""}${actions.length ? actions.join(" | ") : "Sin observación adicional."}`;
  return { status, decision, notes };
}

const investorDecisions = {
  "cambio de etapa a activo": ["Configurado; mantener OFF", "Activar solo cuando la API registre monto de primera inversión ≥ $1,000. HubSpot compara el valor y cambia la etapa; no calcula el monto.", "CON-057. Depende de datos reales enviados por Monific."],
  "cambio de etapa a congelado": ["Configurado; mantener OFF", "Activar cuando la API mantenga saldo actual, saldo invertido y fechas de actividad. HubSpot aplica los criterios de 15/90 días únicamente con datos sincronizados.", "CON-060/069. No usar valores fijos."],
  "actualizar propiedades de negocio": ["Rechazado como está; sustituir por API", "Eliminar valores hardcodeados. La API debe escribir los datos reales en Contacto y en el Negocio activo del inversionista.", "CON-061. Sin Data Hub no se deben transformar ni calcular valores dentro de HubSpot."],
  "notificar a cliente": ["Pendiente de aprobación", "Mantener OFF hasta aprobar plantilla de WhatsApp, número remitente, consentimiento y contacto titular.", "CON-063. No es falla crítica; falta definición de comunicación."],
  "notificar a asesor en la asignacion": ["Implementado según auditoría", "Notificación interna nativa al propietario o equipo asignado.", "Confirmar que el destinatario sea un rol/equipo y no una persona fija."],
  "notificar a asesor de negocio estancado": ["Pendiente de rediseño", "Crear un workflow nativo nuevo con entrada a etapa, espera y comprobación de saldo/actividad sincronizados. No activar el flujo no localizado.", "CON-067. No se localizó el workflow auditado."],
  "cambio de etapa a cierre": ["Configurado; mantener OFF", "Mover a cierre solo por evento o propiedad confirmada por la API; nunca por fecha o monto inventado en HubSpot.", "Depende de la integración Monific."],
  "definir propiedades de inversion": ["Rechazado como está; sustituir por API", "La API escribe fecha y monto reales. HubSpot solo conserva los datos y puede disparar notificaciones.", "CON-071/076. Evitar duplicados y sobrescrituras."],
  "realizar envio de secuencia": ["Rechazado por licencia; sustituir", "La inscripción automática a secuencias mediante workflows requiere Enterprise. Usar email automatizado aprobado o tarea de inscripción manual.", "CON-073/074. Mantener apagado."],
  "actualizar datos de entrada en etapa": ["Eliminado por duplicidad", "No recrear. Consolidar la actualización en la API y en un solo workflow de propiedades de inversión.", "CON-076. La auditoría indica que se eliminó el duplicado."],
  "cambio de etapa a activo congelado": ["Pendiente; mantener OFF", "Reactivar solo cuando la API confirme una nueva inversión y actualice fecha/monto. No detonar únicamente por estar en Congelado.", "CON-077."],
  "definir campos de entrada": ["Pendiente de validación", "Registrar motivo y fecha de congelado con propiedades nativas. Mantener OFF hasta confirmar la corrección en HubSpot.", "CON-080. La evidencia de auditoría es contradictoria; requiere revisión puntual."],
  "notificaciones de reactivacion": ["Pendiente de aprobación", "Sustituir el correo inexistente y enviar solo al contacto titular. Mantener OFF hasta aprobar copy y asociación.", "CON-081/082."],
  "notificaciones internas": ["Implementado; mantener OFF", "Notificación interna nativa al propietario/equipo. No cambiar el negocio fuera de la etapa Cierre.", "CON-083/084. Configuración aceptada, activación aún pendiente."],
  "notificaciones a cliente": ["Pendiente; mantener OFF", "Enviar únicamente al contacto titular. No usar Todos los contactos asociados. Requiere asociación/rol aprobado.", "CON-086."],
};

function investorDecision(name, info) {
  const lname = norm(name);
  if (lname.includes("etapa 03") && lname.includes("cambio de etapa a activo")) {
    const [status, decision, notes] = investorDecisions["cambio de etapa a activo congelado"];
    return { status, decision, notes };
  }
  for (const [key, value] of Object.entries(investorDecisions)) {
    if (lname.includes(key)) {
      const [status, decision, notes] = value;
      return { status, decision, notes };
    }
  }
  return genericWorkflowDecision(name, info);
}

function updateWorkflowSheet(sheetName, investor = false) {
  const sheet = master.worksheets.getItem(sheetName);
  const used = sheet.getUsedRange(true);
  const rows = used.values;
  const lastRow = rows.length;
  const lastCol = investor ? "H" : "H";
  if (investor) sheet.getRange("F1:H1").values = [["Estatus final", "Decisión compatible con licencia", "Auditoría / pendientes"]];
  else sheet.getRange("F1:H1").values = [["Estatus final", "Decisión compatible con licencia", "Auditoría / pendientes"]];
  setHeader(sheet.getRange("F1:H1"), COLORS.headerGreen);
  const output = [];
  for (let r = 1; r < lastRow; r++) {
    const name = cleanText(rows[r]?.[1]);
    if (!name) {
      output.push([null, null, null]);
      continue;
    }
    const info = flowAudit.get(norm(name));
    if (info?.Estado) sheet.getCell(r, 4).values = [[String(info.Estado).toUpperCase() === "ON" ? "Encendido" : "Apagado"]];
    const decision = investor ? investorDecision(name, info) : genericWorkflowDecision(name, info);
    output.push([decision.status, decision.decision, decision.notes]);
  }
  sheet.getRange(`F2:H${lastRow}`).values = output;
  styleData(sheet.getRange(`F2:H${lastRow}`));
  for (let r = 2; r <= lastRow; r++) {
    const value = sheet.getRange(`F${r}`).values?.[0]?.[0];
    if (value) sheet.getRange(`F${r}`).format = statusStyle(value);
  }
  sheet.getRange("A1:H1").format.rowHeight = 32;
  sheet.getRange(`A1:H${lastRow}`).format.verticalAlignment = "top";
  sheet.getRange("B:B").format.columnWidth = 56;
  sheet.getRange("F:F").format.columnWidth = 28;
  sheet.getRange("G:G").format.columnWidth = 62;
  sheet.getRange("H:H").format.columnWidth = 50;
  sheet.freezePanes.freezeRows(1);
}

updateWorkflowSheet("Workflows - Solicitantes", false);
updateWorkflowSheet("Workflows - Inversionistas", true);

// -------- Pipeline: aclarar qué se ejecuta dentro y fuera de HubSpot --------
function fillPipelineComments(sheetName, comments) {
  const sheet = master.worksheets.getItem(sheetName);
  const rows = sheet.getUsedRange(true).values;
  for (let r = 1; r < rows.length; r++) {
    const stage = cleanText(rows[r]?.[0]);
    if (!stage) continue;
    const found = Object.entries(comments).find(([key]) => norm(stage).includes(norm(key)));
    if (found) sheet.getCell(r, 10).values = [[found[1]]];
  }
  sheet.getRange(`K2:K${rows.length}`).format.wrapText = true;
  sheet.getRange(`K2:K${rows.length}`).format.verticalAlignment = "top";
  sheet.getRange("K:K").format.columnWidth = 55;
}

fillPipelineComments("Pipeline Solicitantes", {
  "Nuevo solicitante": "IMPLEMENTABLE. Usar workflows nativos para tareas, propiedades y cambio de etapa. Si la cuenta no incluye scoring, la API/formulario debe enviar viabilidad_inicial o ruta_de_scoring. Secuencias automáticas: sustituir por email automatizado o tarea manual.",
  "Evaluación": "IMPLEMENTABLE. Reinscripción, decisión, tareas y trazabilidad con acciones nativas. Correos y destinatarios permanecen sujetos a aprobación.",
  "Formalización": "IMPLEMENTABLE. Cambios de etapa, tareas y notificaciones internas nativas. No usar código ni cálculos dentro de HubSpot.",
  "Proceso de firma": "IMPLEMENTABLE. Datos jurídicos manuales; fecha y estatus mediante propiedades/workflows nativos. Comunicaciones pendientes de aprobación.",
  "Cierre Ganado": "IMPLEMENTABLE. La API/Admin Monific confirma publicación y fondeo; HubSpot registra la fecha y notifica.",
  "Cierre Perdido": "IMPLEMENTABLE. Requiere motivo y origen trazables antes del cierre. Contenido de carta pendiente de aprobación.",
});

fillPipelineComments("Pipeline Inversionistas", {
  "Perfil Activo": "CONDICIONADO A API. La app debe enviar nivel, saldos, fecha y monto reales. Mantener workflows financieros apagados hasta tener integración probada.",
  "Inversionista Activo": "CONDICIONADO A API. HubSpot puede comparar propiedades sincronizadas y cambiar etapa; no debe calcular saldos, rendimientos ni fechas.",
  "Congelado": "IMPLEMENTABLE CON DATOS API. Motivo y fecha se registran en HubSpot; reactivación solo por nueva inversión confirmada. Correos al titular pendientes.",
  "Cierre": "IMPLEMENTABLE. Conservar la etapa Cierre; notificaciones solo al titular y equipo autorizado. No reabrir automáticamente el negocio.",
});

// -------- Diccionario de propiedades --------
const internalByLabel = new Map(Object.entries({
  "tipo de cliente": "tipo_de_cliente",
  "canal de entrada": "canal_de_entrada",
  "fuente de lead": "fuente_de_lead",
  "viabilidad inicial": "viabilidad_inicial",
  "ruta de scoring": "ruta_de_scoring",
  "estatus de documentacion": "estado_de_documentacion",
  "fecha de creacion de negocio": "createdate",
  "link de carpeta en drive": "link_drive",
  "tipo de inmueble en garantia": "tipo_de_inmueble_en_garantia",
  "zona de inmueble": "zona_de_inmueble",
  "monto solicitado": "monto_solicitado",
  "destino del financiamiento": "destino_del_financiamiento",
  "areas de evaluacion notificadas": "areas_de_evaluacion_notificadas",
  "fecha de decision de comite": "fecha_de_decision",
  "motivo de decision": "motivo_decision",
  "evaluacion de areas": "evaluacion_de_areas",
  "decision de comite": "decision_comite",
  "plazo de financiamiento": "plazo_de_financiamiento",
  "tasa anual fija": "tasa_anual_fija",
  "tipo de instrumento": "tipo_de_instrumento",
  "garantia estructurada": "garantia_estructurada",
  "destino autorizado": "destino_autorizado",
  "material de campana listo": "material_de_campana_listo",
  "tipo de rendimiento": "tipo_de_rendimiento",
  "tipo de proyecto": "tipo_de_proyecto",
  "obligados solidarios": "obligados_solidarios",
  "estatus de formalizacion": "estatus_de_formalizacion",
  "link material de campana": "link_material_de_campana",
  "notario asignado": "notario_asignado",
  "folio inscripcion a registro": "folio_inscripcion_a_registro",
  "numero de fideicomiso": "numero_de_fideicomiso",
  "link del expediente": "link_de_expediente_en_drive",
  "contrato firmado": "contrato_firmado",
  "fecha de firma de contrato": "fecha_firma_contrato",
  "link de contrato": "link_contrato",
  "fecha de cierre ganado": "fecha_de_cierre_ganado",
  "fecha de cierre perdido": "fecha_de_cierre_perdido",
  "motivo documentado": "motivo_documentado",
  "link carta de rechazo": "link_carta_rechazo",
  "detalles de rechazo": "detalles_rechazo",
  "estatus de conversion": "estatus_de_conversion",
  "codigo referido": "codigo_de_referido",
  "nombre de broker": "nombre_de_broker",
  "nivel de registro": "nivel_registro",
  "fecha de registro": "registration_date_completed",
  "clabe stp": "clabe_stp",
  "propietario": "hubspot_owner_id",
  "fecha de primera inversion": "date_first_investment",
  "monto de primera inversion": "monto_primera_inversion",
  "saldo disponible": "current_account_balance",
  "fecha de inicio de campana": "fecha_inicio_campana",
  "fecha de cierre de campana": "fecha_cierre_campana",
  "fecha de ultima actividad": "last_session_app",
  "fecha de congelado": "fecha_congelado",
  "fecha de reactivacion": "fecha_reactivacion",
  "motivo de congelado": "motivo_congelado",
  "estatus de ultima campana": "estatus_ultima_campana",
  "fecha de cierre": "closedate",
  "monto total recibido": "monto_total_recibido",
}));

const confirmedInternals = new Set([
  "origen_cambio", "fecha_cambio", "link_drive", "monto_solicitado", "decision_comite", "motivo_decision", "fecha_de_decision",
  "monific_last_synced_at", "stp_account_date", "date_first_investment", "current_account_balance", "invested_balance", "account_value", "current_profit",
  "email", "firstname", "lastname", "phone", "monific_user_id", "tipo_de_cliente", "nivel_registro", "motivo_de_interes", "codigo_de_referido",
  "clave_desarrollador", "name", "clave_de_desarrollador", "representante_legal", "numero_de_proyecto", "dealname", "tipo_de_rendimiento",
  "monto_solicitado_empresa", "monto_fondeado_proyecto", "nivel_de_fondeo__financiamiento", "move_id", "amount", "move_type", "nombre_de_proyecto", "closedate",
  "estado_de_pago", "monto_esperado_pago", "monto_total_deuda", "monto_pagado_acumulado", "saldo_pendiente_mes_corriente", "monto_deudas_pasadas",
  "saldo_insoluto_total", "total_de_mensualidades", "mensualidades_restantes", "id_de_campana_financiamiento",
]);

function propertyRule(fillType, label, object) {
  const mode = norm(fillType);
  const lname = norm(label);
  if (object === "Contacto" && ["nivel de registro", "fecha de primera inversion", "saldo disponible", "fecha de ultima actividad"].some((x) => lname.includes(x))) {
    return "La app actualiza por API. HubSpot almacena el valor y lo usa como trigger; no calcula ni transforma.";
  }
  if (mode.includes("automatic")) {
    if (lname.includes("fecha de cierre") || lname.includes("fecha de creacion")) return "Workflow o propiedad nativa registra la fecha al ocurrir el evento. No sobreescribir una fecha real enviada por la app.";
    return "Workflow nativo o API actualiza la propiedad. Evitar valores hardcodeados.";
  }
  if (mode.includes("manual")) return "Captura manual en HubSpot y validación antes de avanzar de etapa.";
  return "Definir fuente única. Si proviene de Monific, actualizar por API; si es operativa, capturar en HubSpot.";
}

function updatePropertyMaster(sheetName) {
  const sheet = master.worksheets.getItem(sheetName);
  const values = sheet.getUsedRange(true).values;
  const lastRow = values.length;
  sheet.getRange("I1:L1").values = [["Nombre interno", "Estatus final", "Regla implementable", "Observación de auditoría"]];
  setHeader(sheet.getRange("I1:L1"), COLORS.headerBlack);
  const out = [];
  for (let r = 1; r < lastRow; r++) {
    const label = cleanText(values[r]?.[1]);
    const object = cleanText(values[r]?.[2]);
    const fillType = cleanText(values[r]?.[3]);
    if (!label) { out.push([null, null, null, null]); continue; }
    const key = norm(label);
    const internal = internalByLabel.get(key) ?? slug(label);
    const confirmed = confirmedInternals.has(internal);
    let status = fillType.toLowerCase().includes("manual") ? "Implementable - captura manual" : "Implementable - workflow/API";
    if (!confirmed) status = "Implementable; validar nombre interno";
    const rule = propertyRule(fillType, label, object);
    const note = confirmed ? "Nombre interno respaldado por el mapeo/auditoría." : "VALIDAR EN HUBSPOT antes de crear o integrar; no duplicar una propiedad existente.";
    out.push([internal, status, rule, note]);
  }
  sheet.getRange(`I2:L${lastRow}`).values = out;
  styleData(sheet.getRange(`I2:L${lastRow}`));
  for (let r = 2; r <= lastRow; r++) {
    const value = sheet.getRange(`J${r}`).values?.[0]?.[0];
    if (value) sheet.getRange(`J${r}`).format = statusStyle(value);
  }
  sheet.getRange("I:I").format.columnWidth = 30;
  sheet.getRange("J:J").format.columnWidth = 30;
  sheet.getRange("K:K").format.columnWidth = 60;
  sheet.getRange("L:L").format.columnWidth = 52;
  sheet.freezePanes.freezeRows(1);
}

updatePropertyMaster("Listado de prop. Solicitantes");
updatePropertyMaster("Listado de prop. Inversionistas");

// -------- Hoja de criterios en el master --------
const criteria = master.worksheets.add("Criterios implementación");
criteria.getRange("A1:D1").merge();
criteria.getRange("A1").values = [["Criterios de implementación compatibles con la licencia actual"]];
criteria.getRange("A1:D1").format = { fill: COLORS.headerGreen, font: { color: COLORS.white, bold: true, size: 14 }, horizontalAlignment: "center", verticalAlignment: "center" };
criteria.getRange("A3:D3").values = [["Tema", "Decisión", "Estatus", "Referencia"]];
setHeader(criteria.getRange("A3:D3"), COLORS.headerGreen);
const criteriaRows = [
  ["Objeto Proyecto", "Usar el objeto Proyecto predeterminado que ya existe en la cuenta. Mantenerlo separado de Negocios para no mezclar información.", "Implementable", "Confirmación del usuario / configuración actual de HubSpot"],
  ["Código, webhooks y formato de datos", "No ejecutar código, webhooks ni transformaciones dentro de HubSpot. Monific realiza lógica, cálculos, fechas y reintentos en su backend y actualiza HubSpot por API.", "Rechazado por licencia", "https://knowledge.hubspot.com/workflows/choose-your-workflow-actions"],
  ["Secuencias automáticas", "No inscribir contactos en secuencias mediante workflows. Sustituir por email automatizado aprobado o tarea de inscripción manual.", "Rechazado por licencia", "https://knowledge.hubspot.com/sequences/enroll-contacts-in-a-sequence"],
  ["Workflows nativos", "Se permiten triggers, reinscripción, esperas, ramas, edición de propiedades, tareas, cambios de etapa y notificaciones disponibles en la suscripción.", "Implementable", "https://knowledge.hubspot.com/workflows/create-workflows"],
  ["Datos financieros", "La app es la fuente. HubSpot almacena saldos, montos y fechas reales; no los calcula ni los reemplaza por valores fijos.", "API externa", "Auditoría OK / CON-061, CON-071, CON-103"],
  ["Correos y WhatsApp", "Mantener flujos apagados hasta aprobar copy, remitente, consentimiento, canal y destinatario titular.", "Pendiente de aprobación", "Bloque B08 de la auditoría"],
  ["Flujograma", "Se conserva sin cambios por instrucción del usuario.", "Sin cambios", "Archivo master original"],
];
criteria.getRange(`A4:D${3 + criteriaRows.length}`).values = criteriaRows;
styleData(criteria.getRange(`A4:D${3 + criteriaRows.length}`));
for (let r = 4; r <= 3 + criteriaRows.length; r++) criteria.getRange(`C${r}`).format = statusStyle(criteria.getRange(`C${r}`).values[0][0]);
criteria.getRange("A:A").format.columnWidth = 30;
criteria.getRange("B:B").format.columnWidth = 92;
criteria.getRange("C:C").format.columnWidth = 28;
criteria.getRange("D:D").format.columnWidth = 65;
criteria.getRange(`A1:D${3 + criteriaRows.length}`).format.wrapText = true;
criteria.showGridLines = false;
criteria.freezePanes.freezeRows(3);

// -------- Mapeo API: completar columnas y propiedades faltantes --------
const mapSheet = mapping.worksheets.getItem("1. Mapeo de Propiedades");
const originalMapValues = mapSheet.getUsedRange(true).values;
const baseRows = originalMapValues.length;
mapSheet.getRange("N1:O1").values = [["REGLA DE USO", "ESTATUS / LIMITANTE"]];
mapSheet.getRange("N2:O2").values = [["Regla adecuada", "Decisión final"]];
setHeader(mapSheet.getRange("N1:O2"), COLORS.headerOrange);

const knownKey = new Set();
for (let r = 2; r < baseRows; r++) {
  const label = cleanText(originalMapValues[r]?.[0]);
  const internal = cleanText(originalMapValues[r]?.[1]);
  const object = cleanText(originalMapValues[r]?.[2]);
  if (internal && object) knownKey.add(`${norm(object)}|${internal.toLowerCase()}`);
  if (!label && internal) mapSheet.getCell(r, 0).values = [[humanizeInternal(internal)]];
  if (internal && object) {
    const finalLabel = cleanText(mapSheet.getCell(r, 0).values?.[0]?.[0]) || humanizeInternal(internal);
    mapSheet.getCell(r, 7).values = [[finalLabel]];
    mapSheet.getCell(r, 8).values = [[internal]];
    mapSheet.getCell(r, 9).values = [[cleanText(originalMapValues[r]?.[3])]];
    mapSheet.getCell(r, 10).values = [[new Set(["email", "firstname", "lastname", "phone", "name", "dealname", "amount", "closedate", "createdate", "hubspot_owner_id"]).has(internal) ? "Sí" : "No"]];
    mapSheet.getCell(r, 11).values = [[originalMapValues[r]?.[6] ?? 0]];
    mapSheet.getCell(r, 12).values = [["Monific → HubSpot"]];
    const rule = `Monific envía ${internal} por API; HubSpot almacena el valor${object === "Negocio" ? " en el negocio correspondiente" : ""}. Sin cálculos ni transformaciones internas.`;
    mapSheet.getCell(r, 13).values = [[rule]];
    mapSheet.getCell(r, 14).values = [["Implementable por API"]];
  }
}

// Normalizar identificadores heredados de Tickets y dejar una sola clave canónica de campaña.
for (let r = 2; r < baseRows; r++) {
  const internal = cleanText(mapSheet.getCell(r, 1).values?.[0]?.[0]);
  if (internal.normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim() === "id_de_campana") {
    mapSheet.getCell(r, 1).values = [["id_de_campana"]];
    mapSheet.getCell(r, 8).values = [["id_de_campana"]];
    mapSheet.getCell(r, 13).values = [["Campo heredado. No crear uno nuevo; migrar y usar id_de_campana_financiamiento como clave canónica del Ticket."]];
    mapSheet.getCell(r, 14).values = [["Rechazado por duplicidad; migrar"]];
  }
  if (internal.trim() === "id_del_proyecto") {
    mapSheet.getCell(r, 1).values = [["id_del_proyecto"]];
    mapSheet.getCell(r, 8).values = [["id_del_proyecto"]];
  }
}

// Completar las dos filas existentes del objeto Proyecto predeterminado.
for (let r = 2; r < baseRows; r++) {
  const object = cleanText(originalMapValues[r]?.[2]);
  const label = cleanText(originalMapValues[r]?.[0]);
  if (norm(object) === "proyecto" || norm(label).includes("proyecto") && !cleanText(originalMapValues[r]?.[1])) {
    const isId = norm(label).startsWith("id");
    const internal = isId ? "hs_object_id" : "hs_name";
    mapSheet.getCell(r, 1).values = [[internal]];
    mapSheet.getCell(r, 2).values = [["Proyecto"]];
    mapSheet.getCell(r, 3).values = [[isId ? "Número" : "Texto"]];
    mapSheet.getCell(r, 5).values = [["Solicitantes / Inversionistas"]];
    mapSheet.getCell(r, 6).values = [[1]];
    mapSheet.getCell(r, 7).values = [[label]];
    mapSheet.getCell(r, 8).values = [[internal]];
    mapSheet.getCell(r, 9).values = [[isId ? "Número" : "Texto"]];
    mapSheet.getCell(r, 10).values = [["Sí"]];
    mapSheet.getCell(r, 11).values = [[1]];
    mapSheet.getCell(r, 12).values = [[isId ? "HubSpot → Monific" : "Monific → HubSpot"]];
    mapSheet.getCell(r, 13).values = [[isId ? "HubSpot genera el ID del Proyecto; Monific lo guarda como referencia para actualizaciones y asociaciones." : "Monific crea o actualiza el Proyecto predeterminado sin mezclarlo con Negocios."]];
    mapSheet.getCell(r, 14).values = [["Implementable - objeto estándar"]];
    knownKey.add(`proyecto|${internal}`);
  }
}

const masterPropertyRows = [];
for (const sheetName of ["Listado de prop. Solicitantes", "Listado de prop. Inversionistas"]) {
  const sheet = master.worksheets.getItem(sheetName);
  const values = sheet.getUsedRange(true).values;
  for (let r = 1; r < values.length; r++) {
    const label = cleanText(values[r]?.[1]);
    const object = cleanText(values[r]?.[2]);
    if (!label || !object) continue;
    const internal = cleanText(values[r]?.[8]) || internalByLabel.get(norm(label)) || slug(label);
    const key = `${norm(object)}|${internal.toLowerCase()}`;
    if (knownKey.has(key)) continue;
    knownKey.add(key);
    const type = cleanText(values[r]?.[4]) || "Texto";
    const options = cleanText(values[r]?.[6]);
    const segment = sheetName.includes("Inversionistas") ? "Inversionistas" : "Solicitantes";
    const required = norm(values[r]?.[5]).includes("obligatorio") ? 1 : 0;
    const fillType = cleanText(values[r]?.[3]);
    const direction = norm(fillType).includes("manual") ? "Solo HubSpot" : "Monific → HubSpot / workflow";
    const confirmed = confirmedInternals.has(internal);
    masterPropertyRows.push([
      label, internal, object, type, options || null, segment, required,
      label, internal, type, "No", required, direction,
      propertyRule(fillType, label, object),
      confirmed ? "Implementable" : "Implementable; validar nombre interno",
    ]);
  }
}

const apiExtras = [
  ["Origen del cambio", "origen_cambio", "Negocio", "Texto", null, "Transversal", 1, "HubSpot/API", "Trazabilidad obligatoria: registrar API, workflow o usuario que hizo el cambio.", "Implementable"],
  ["Fecha del cambio", "fecha_cambio", "Negocio", "Selector de fecha", null, "Transversal", 1, "HubSpot/API", "Registrar fecha real del cambio de etapa sin cálculos avanzados.", "Implementable"],
  ["Fecha cuenta STP", "stp_account_date", "Contacto", "Selector de fecha", null, "Inversionistas", 0, "Monific → HubSpot", "La app envía la fecha real de activación STP.", "Implementable por API"],
  ["Monto de primera inversión", "monto_primera_inversion", "Contacto", "Número", null, "Inversionistas", 0, "Monific → HubSpot", "La app envía el monto real; HubSpot lo usa como condición de etapa.", "Implementable; validar nombre interno"],
  ["Monto de primera inversión", "monto_primera_inversion", "Negocio", "Número", null, "Inversionistas", 0, "Monific → HubSpot", "La API replica el monto en el negocio activo. No usar valor fijo.", "Implementable; validar nombre interno"],
  ["Fecha de primera inversión", "date_first_investment", "Negocio", "Selector de fecha", null, "Inversionistas", 0, "Monific → HubSpot", "La API replica la fecha real; no usar fecha de ejecución del workflow.", "Implementable por API"],
  ["Saldo invertido", "invested_balance", "Negocio", "Número", null, "Inversionistas", 0, "Monific → HubSpot", "La API actualiza el saldo; HubSpot solo evalúa el valor.", "Implementable por API"],
  ["Última sincronización Monific", "monific_last_synced_at", "Contacto", "Selector de fecha", null, "Transversal", 0, "Monific → HubSpot", "Actualizar en cada sincronización exitosa.", "Implementable por API"],
  ["Última sincronización Monific", "monific_last_synced_at", "Negocio", "Selector de fecha", null, "Transversal", 0, "Monific → HubSpot", "Actualizar en cada sincronización exitosa del negocio.", "Implementable por API"],
  ["Fuente técnica", "technical_source", "Negocio", "Texto", null, "Transversal", 0, "Monific → HubSpot", "Registrar api, batch o manual para auditoría.", "Implementable; validar nombre interno"],
  ["ID Campaña", "id_campana", "Ticket", "Texto", null, "Cobranza", 1, "Monific → HubSpot", "Clave externa para localizar y actualizar el ticket de cobranza.", "Implementable; validar nombre interno"],
  ["Fecha de primer pago", "fecha_primer_pago", "Ticket", "Selector de fecha", null, "Cobranza", 0, "Monific → HubSpot", "La app envía la fecha real del primer pago.", "Implementable; validar nombre interno"],
  ["Fecha de último pago", "fecha_ultimo_pago", "Ticket", "Selector de fecha", null, "Cobranza", 0, "Monific → HubSpot", "La app actualiza con el pago conciliado más reciente.", "Implementable; validar nombre interno"],
  ["Saldo pagado mes corriente", "saldo_pagado_mes_corriente", "Ticket", "Número", null, "Cobranza", 0, "Monific → HubSpot", "La app calcula; HubSpot almacena.", "Implementable; validar nombre interno"],
  ["Tabla de cuotas", "tabla_cuotas", "Ticket", "Texto multilínea", null, "Cobranza", 0, "Monific → HubSpot", "Enviar resumen legible o URL; no calcular cuotas en HubSpot.", "Implementable; validar nombre interno"],
  ["Fecha próximo recordatorio", "fecha_proximo_recordatorio", "Ticket", "Selector de fecha", null, "Cobranza", 0, "Monific → HubSpot", "El backend calcula fecha y día hábil; el workflow solo espera o filtra por esta fecha.", "Implementable; validar nombre interno"],
  ["Número de proyecto", "numero_de_proyecto", "Negocio", "Texto", null, "Solicitantes", 1, "Monific → HubSpot", "Clave externa única del Negocio campaña/proyecto estándar.", "Implementable"],
  ["Deal padre", "deal_padre", "Negocio", "Texto", null, "Inversionistas", 0, "No usar", "No crear ni alimentar esta propiedad. Asociar el Negocio directamente con el objeto Proyecto predeterminado.", "Rechazado por diseño; usar Proyecto"],
  ["Descripción del proyecto", "hs_description", "Proyecto", "Texto multilínea", null, "Solicitantes / Inversionistas", 0, "Monific → HubSpot", "Actualizar la descripción en el objeto Proyecto predeterminado.", "Implementable - objeto estándar"],
  ["Fecha de creación del proyecto", "hs_createdate", "Proyecto", "Selector de fecha", null, "Solicitantes / Inversionistas", 1, "HubSpot → Monific", "HubSpot registra la fecha de creación del Proyecto.", "Implementable - objeto estándar"],
  ["Fecha estimada de cierre", "hs_close_date", "Proyecto", "Selector de fecha", null, "Solicitantes / Inversionistas", 0, "Monific → HubSpot", "Monific envía la fecha estimada; no calcularla dentro de HubSpot.", "Implementable - objeto estándar"],
  ["Número de proyecto", "numero_de_proyecto", "Proyecto", "Texto", null, "Solicitantes / Inversionistas", 1, "Monific → HubSpot", "Clave externa única para actualizar y asociar el Proyecto.", "Implementable - objeto estándar"],
  ["Clave de desarrollador", "clave_desarrollador", "Proyecto", "Texto", null, "Solicitantes", 1, "Monific → HubSpot", "Usar para asociar el Proyecto con la Empresa desarrolladora.", "Implementable - objeto estándar"],
  ["Tipo de rendimiento", "tipo_de_rendimiento", "Proyecto", "Dropdown", "Fijo\nVariable", "Solicitantes", 0, "Monific → HubSpot", "Monific envía el valor definido para el Proyecto.", "Implementable - objeto estándar"],
  ["Monto solicitado", "monto_solicitado_empresa", "Proyecto", "Número", null, "Solicitantes", 0, "Monific → HubSpot", "Monific calcula y envía el monto; HubSpot lo almacena.", "Implementable - objeto estándar"],
  ["Monto fondeado", "monto_fondeado_proyecto", "Proyecto", "Número", null, "Solicitantes", 0, "Monific → HubSpot", "Monific calcula y envía el monto fondeado.", "Implementable - objeto estándar"],
  ["Nivel de fondeo", "nivel_de_fondeo__financiamiento", "Proyecto", "Dropdown", "1. Activo\n2. Fondeado\n3. Liquidado", "Solicitantes", 0, "Monific → HubSpot", "Monific actualiza el estado financiero del Proyecto.", "Implementable - objeto estándar"],
];

for (const [label, internal, object, type, options, segment, required, direction, rule, status] of apiExtras) {
  const key = `${norm(object)}|${internal.toLowerCase()}`;
  if (knownKey.has(key)) continue;
  knownKey.add(key);
  masterPropertyRows.push([label, internal, object, type, options, segment, required, label, internal, type, "No", required, direction, rule, status]);
}

const appendStart = baseRows + 1;
if (masterPropertyRows.length) {
  mapSheet.getRange(`A${appendStart}:O${appendStart + masterPropertyRows.length - 1}`).values = masterPropertyRows;
  styleData(mapSheet.getRange(`A${appendStart}:O${appendStart + masterPropertyRows.length - 1}`));
}
const mapLast = appendStart + masterPropertyRows.length - 1;
styleData(mapSheet.getRange(`A3:O${Math.max(mapLast, baseRows)}`));
for (let r = 3; r <= Math.max(mapLast, baseRows); r++) {
  const status = mapSheet.getRange(`O${r}`).values?.[0]?.[0];
  if (status) mapSheet.getRange(`O${r}`).format = statusStyle(status);
}
mapSheet.getRange("A:A").format.columnWidth = 32;
mapSheet.getRange("B:B").format.columnWidth = 30;
mapSheet.getRange("C:C").format.columnWidth = 20;
mapSheet.getRange("D:D").format.columnWidth = 23;
mapSheet.getRange("E:E").format.columnWidth = 34;
mapSheet.getRange("F:F").format.columnWidth = 20;
mapSheet.getRange("G:G").format.columnWidth = 16;
mapSheet.getRange("H:L").format.columnWidth = 24;
mapSheet.getRange("M:M").format.columnWidth = 27;
mapSheet.getRange("N:N").format.columnWidth = 70;
mapSheet.getRange("O:O").format.columnWidth = 34;
mapSheet.getRange(`A1:O${Math.max(mapLast, baseRows)}`).format.wrapText = true;
mapSheet.freezePanes.freezeRows(2);

// -------- Reglas de negocio: corregir inconsistencias y restricciones --------
const rulesSheet = mapping.worksheets.getItem("2. Checklist de Reglas de Negoc");
const ruleValues = rulesSheet.getUsedRange(true).values;
const ruleLast = ruleValues.length;
rulesSheet.getRange("M1:N1").values = [["Estatus final", "Limitante / decisión"]];
setHeader(rulesSheet.getRange("M1:N1"), COLORS.headerOrange);

const ruleOverrides = {
  4: { fields: "nivel_registro (3)\nstp_account_date", status: "Implementable por API", note: "La app envía el nivel y la fecha STP. HubSpot no genera la fecha." },
  5: { fields: "nivel_registro (4)\ndate_first_investment\nmonto_primera_inversion", status: "Implementable por API", note: "Evento único de primera inversión confirmado por Monific." },
  6: { fields: "current_account_balance", status: "Implementable por API", note: "Batch diario repetible; no es un evento de una sola vez." },
  7: { fields: "invested_balance", status: "Implementable por API", note: "Batch diario repetible; la app calcula el valor." },
  8: { fields: "account_value", status: "Implementable por API", note: "Batch diario repetible; la app calcula el valor." },
  9: { fields: "current_profit", status: "Implementable por API", note: "Batch diario repetible; la app calcula el valor." },
  13: { action: "Crear Deal de inversión y asociarlo al Contacto y al objeto Proyecto predeterminado", fields: "dealname\namount\nmonto_invertido\nnumero_de_proyecto\nmove_type (PURCHASE)\nclosedate\ntechnical_source\nmove_id\nmonific_last_synced_at", status: "Implementable por API", note: "El Deal de inversión permanece separado y se asocia al Proyecto mediante numero_de_proyecto." },
  15: { action: "Crear Deals SOLD/PURCHASE y asociarlos al objeto Proyecto predeterminado", fields: "dealname\namount\nmonto_invertido\nnumero_de_proyecto\nmove_type\nclosedate\ntechnical_source\nmove_id", status: "Implementable por API", note: "No crear un Deal padre de campaña; usar la asociación con Proyecto." },
  16: { action: "Crear Deal SOLD y asociarlo al objeto Proyecto predeterminado", fields: "dealname\namount\nmonto_invertido\nnumero_de_proyecto\nmove_type (SOLD)\nclosedate\ntechnical_source\nmove_id", status: "Implementable por API", note: "La venta permanece como Negocio de inversión separado y asociado al Proyecto." },
  20: { name: "Sincronización de Proyectos de Fondeo", action: "Crear o actualizar Proyecto y asociarlo a Empresa", fields: "hs_name\nhs_description\nhs_close_date\nnumero_de_proyecto\nclave_desarrollador\ntipo_de_rendimiento\nmonto_solicitado_empresa\nplazo_estimado_proyecto\nmonto_fondeado_proyecto\nnivel_de_fondeo__financiamiento\nmonific_last_synced_at", status: "Implementable - objeto estándar", note: "La campaña vive en Proyecto predeterminado, no en Negocio. Deduplicar por numero_de_proyecto." },
  21: { action: "Crear Ticket de Cobranza y asociarlo al Contacto, al Negocio solicitante y al Proyecto predeterminado", status: "Implementable por API", note: "El Proyecto ya existe como objeto predeterminado; no crearlo como Negocio." },
  25: { name: "Crear o actualizar Proyecto", action: "Crear o actualizar un registro en el objeto Proyecto predeterminado", fields: "hs_name\nhs_description\nhs_close_date\nnumero_de_proyecto\nclave_desarrollador\ntipo_de_rendimiento\nmonto_solicitado_empresa\nmonto_fondeado_proyecto\nplazo_estimado_proyecto\nnivel_de_fondeo__financiamiento\nmonific_last_synced_at", status: "Implementable - objeto estándar", note: "Proyecto se mantiene como objeto independiente; no mezclar con Negocios." },
  26: { name: "Asociar Proyecto con Negocio solicitante", action: "Crear asociación Proyecto-a-Negocio por API usando numero_de_proyecto", fields: "numero_de_proyecto\nhs_object_id del Proyecto\nID del negocio solicitante", status: "Implementable por API", note: "Mantener la información del Proyecto separada del proceso comercial." },
  27: { name: "Asociar Proyecto con Negocio inversionista", action: "Crear asociación Proyecto-a-Negocio por API usando numero_de_proyecto", fields: "numero_de_proyecto\nhs_object_id del Proyecto\nID del negocio de inversión", status: "Implementable por API", note: "No asociar por nombre; usar identificador estable." },
  28: { name: "Asociar Proyecto con Empresa", action: "Crear asociación Proyecto-a-Empresa por API usando clave_desarrollador", fields: "clave_desarrollador\nhs_object_id del Proyecto\nID de la empresa", status: "Implementable por API", note: "Proyecto y Empresa permanecen como objetos separados." },
};

for (let r = 1; r < ruleLast; r++) {
  const rawId = ruleValues[r]?.[0];
  if (rawId === null || rawId === undefined || rawId === "") continue;
  const id = Number(rawId);
  if (!Number.isFinite(id) || id <= 0) continue;
  let status = "Implementable por API";
  let note = "La lógica, validación, deduplicación y reintentos ocurren en Monific; HubSpot recibe datos finales.";
  const override = ruleOverrides[id];
  if (override?.name) rulesSheet.getCell(r, 1).values = [[override.name]];
  if (override?.action) rulesSheet.getCell(r, 5).values = [[override.action]];
  if (override?.fields) rulesSheet.getCell(r, 7).values = [[override.fields]];
  if ([6, 7, 8, 9].includes(id)) rulesSheet.getCell(r, 11).values = [["Sincronización recurrente; no es un evento de una sola vez."]];
  if (override?.status) status = override.status;
  if (override?.note) note = override.note;
  rulesSheet.getCell(r, 12).values = [[status]];
  rulesSheet.getCell(r, 13).values = [[note]];
}

const newRules = [
  [29, "Programación de recordatorios de cobranza", "Backend Monific", "Cálculo diario de fechas y días hábiles", "Ticket activo y saldo pendiente > 0", "Actualizar fecha_proximo_recordatorio", "HubSpot", "id_campana\nfecha_proximo_recordatorio\nsaldo_pendiente_mes_corriente", "Batch diario", "Workflow nativo se activa en la fecha ya calculada", "Registrar error y reintentar; no perder la fecha anterior", "Sustituye lógica de calendario no disponible sin Data Hub", "Implementable por API", "HubSpot no calcula días hábiles ni recurrencias complejas."],
  [30, "Control de duplicados y reintentos", "Backend Monific", "Cada envío a HubSpot", "Existe clave externa move_id, numero_de_proyecto o id_campana", "Crear o actualizar de forma idempotente", "HubSpot", "move_id\nnumero_de_proyecto\nid_campana\nmonific_last_synced_at", "Tiempo real + batch de respaldo", "Sin registros duplicados y con trazabilidad", "Log, reintento y conciliación batch", "La lógica vive fuera de HubSpot", "Implementable por API", "No requiere código personalizado dentro de HubSpot."],
];
rulesSheet.getRange(`A${ruleLast + 1}:N${ruleLast + newRules.length}`).values = newRules;
styleData(rulesSheet.getRange(`A2:N${ruleLast + newRules.length}`));
for (let r = 2; r <= ruleLast + newRules.length; r++) {
  const status = rulesSheet.getRange(`M${r}`).values?.[0]?.[0];
  if (status) rulesSheet.getRange(`M${r}`).format = statusStyle(status);
}
rulesSheet.getRange("A:A").format.columnWidth = 9;
rulesSheet.getRange("B:B").format.columnWidth = 40;
rulesSheet.getRange("C:C").format.columnWidth = 25;
rulesSheet.getRange("D:G").format.columnWidth = 42;
rulesSheet.getRange("H:H").format.columnWidth = 52;
rulesSheet.getRange("I:I").format.columnWidth = 22;
rulesSheet.getRange("J:L").format.columnWidth = 42;
rulesSheet.getRange("M:M").format.columnWidth = 28;
rulesSheet.getRange("N:N").format.columnWidth = 52;
rulesSheet.getRange(`A1:N${ruleLast + newRules.length}`).format.wrapText = true;
rulesSheet.freezePanes.freezeRows(1);

// -------- Resumen de decisiones en el mapeo --------
const mapSummary = mapping.worksheets.add("Resumen de decisiones");
mapSummary.getRange("A1:D1").merge();
mapSummary.getRange("A1").values = [["Decisiones para integración Monific ↔ HubSpot"]];
mapSummary.getRange("A1:D1").format = { fill: COLORS.headerOrange, font: { color: COLORS.white, bold: true, size: 14 }, horizontalAlignment: "center" };
mapSummary.getRange("A3:D3").values = [["Componente", "Decisión final", "Estatus", "Responsable"]];
setHeader(mapSummary.getRange("A3:D3"), COLORS.headerOrange);
const summaryRows = [
  ["Fuente de datos", "Monific es la fuente para saldos, inversiones, pagos, fechas y cálculos.", "Implementable por API", "TI Monific"],
  ["Objeto Proyecto", "Usar el objeto Proyecto predeterminado ya existente y mantenerlo separado de Negocios.", "Implementable - objeto estándar", "BNO / TI Monific"],
  ["Transformaciones", "Cálculos, deduplicación, días hábiles, hashes y reintentos viven en el backend Monific.", "Implementable por API", "TI Monific"],
  ["Workflows HubSpot", "Solo acciones nativas: triggers, cambios de etapa, tareas, esperas, ramas y notificaciones disponibles.", "Implementable", "BNO"],
  ["Secuencias", "No automatizar inscripción desde workflows sin Enterprise. Usar email automatizado o tarea manual.", "Rechazado por licencia; sustituir", "BNO / Monific"],
  ["Correos y WhatsApp", "Configurar y activar después de aprobar contenido, remitente, consentimiento y destinatario.", "Pendiente de aprobación", "Monific"],
  ["Nombres internos no confirmados", "Las filas marcadas deben validarse en HubSpot antes de crear propiedades para evitar duplicados.", "Pendiente de validación", "BNO"],
];
mapSummary.getRange(`A4:D${3 + summaryRows.length}`).values = summaryRows;
styleData(mapSummary.getRange(`A4:D${3 + summaryRows.length}`));
for (let r = 4; r <= 3 + summaryRows.length; r++) mapSummary.getRange(`C${r}`).format = statusStyle(mapSummary.getRange(`C${r}`).values[0][0]);
mapSummary.getRange("A:A").format.columnWidth = 30;
mapSummary.getRange("B:B").format.columnWidth = 90;
mapSummary.getRange("C:C").format.columnWidth = 34;
mapSummary.getRange("D:D").format.columnWidth = 25;
mapSummary.getRange(`A1:D${3 + summaryRows.length}`).format.wrapText = true;
mapSummary.showGridLines = false;
mapSummary.freezePanes.freezeRows(3);

// -------- Exportar --------
const masterOut = path.join(outDir, "Master_de_Implementacion_Comercial_Unificado.xlsx");
const mappingOut = path.join(outDir, "Mapeo_API_Monific_HubSpot_Final.xlsx");
await (await SpreadsheetFile.exportXlsx(master)).save(masterOut);
await (await SpreadsheetFile.exportXlsx(mapping)).save(mappingOut);
console.log(JSON.stringify({ masterOut, mappingOut, appendedProperties: masterPropertyRows.length, auditIds: Object.keys(latestAudit).length }, null, 2));
