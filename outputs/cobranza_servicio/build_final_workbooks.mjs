import fs from "node:fs/promises";
import path from "node:path";
import { FileBlob, SpreadsheetFile } from "@oai/artifact-tool";

const workspace = process.cwd();
const workDir = path.join(workspace, "outputs", "cobranza_servicio");
const sourceDir = path.join(workspace, "Adicionales", "unificacíón de master de implementación");
const deliveryDir = path.join(workspace, "Entregables codex");
await fs.mkdir(deliveryDir, { recursive: true });

const cobranzaPath = path.join(workDir, "Master_Cobranza_reparado_temporal.xlsx");
const servicioPath = path.join(sourceDir, "Master_de_Implementación_Servicio_MonificVF.xlsx");
const auditPath = path.join(workspace, "outputs", "unificacion_master_impl", "audit_summary.json");

const [cobranza, servicio, audit] = await Promise.all([
  SpreadsheetFile.importXlsx(await FileBlob.load(cobranzaPath)),
  SpreadsheetFile.importXlsx(await FileBlob.load(servicioPath)),
  fs.readFile(auditPath, "utf8").then(JSON.parse),
]);

const COLORS = {
  green: "#C6EFCE", greenText: "#006100", yellow: "#FFF2CC", yellowText: "#7F6000",
  red: "#F4CCCC", redText: "#9C0006", blue: "#D9EAF7", blueText: "#0B5394",
  gray: "#E7E6E6", white: "#FFFFFF", black: "#111111", orange: "#F58220", header: "#70AD47",
};

const clean = (v) => String(v ?? "").trim();
const norm = (v) => clean(v).normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
const slug = (v) => clean(v).normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "_").replace(/^_+|_+$/g, "").replace(/_+/g, "_");

function header(range, fill = COLORS.header) {
  range.format = { fill, font: { color: COLORS.white, bold: true }, horizontalAlignment: "center", verticalAlignment: "center", wrapText: true, borders: { preset: "all", style: "thin", color: "#B7B7B7" } };
}
function body(range) {
  range.format.wrapText = true;
  range.format.verticalAlignment = "top";
  range.format.borders = { preset: "all", style: "thin", color: "#D9D9D9" };
}
function statusFormat(status) {
  const s = norm(status);
  if (s.includes("rechaz") || s.includes("no implement") || s.includes("no viable")) return { fill: COLORS.red, font: { color: COLORS.redText, bold: true } };
  if (s.includes("pendiente") || s.includes("parcial") || s.includes("validar") || s.includes("mantener off") || s.includes("documentar")) return { fill: COLORS.yellow, font: { color: COLORS.yellowText, bold: true } };
  if (s.includes("api") || s.includes("extern")) return { fill: COLORS.blue, font: { color: COLORS.blueText, bold: true } };
  return { fill: COLORS.green, font: { color: COLORS.greenText, bold: true } };
}

const flowById = new Map(audit.flows.map((f) => [clean(f["WF (auditoria)"]), f]));
const auditNote = (id) => {
  const f = flowById.get(id);
  if (!f) return `${id}: no localizado en la relación de flujos de la auditoría; requiere validación puntual.`;
  return `${id} | Estado auditado: ${f.Estado} | ${clean(f.Justificacion)}${clean(f["CON sin responder (J vacia)"]) ? ` | Hallazgos: ${clean(f["CON sin responder (J vacia)"])}` : ""}`;
};

function serviceWorkflowDecision(id) {
  const decisions = {
    "WF-041": ["Implementado con corrección", "Asignar al equipo de Atención mediante rotación nativa. Si el horario no puede gobernar la rotación, asignar al equipo y reasignar manualmente.", "No fijar una persona permanente."],
    "WF-042": ["Implementado con corrección", "Usar SLA/espera nativa y notificar al superior del propietario o a un equipo; no a una persona fija.", "El destinatario debe ser rol/equipo."],
    "WF-043": ["Implementado", "Mover a En Atención solo cuando exista primera respuesta/actividad del agente.", "Evitar mover por simple creación."],
    "WF-044": ["Implementado con validación", "Usar fecha nativa de primera respuesta cuando esté disponible; si no, guardar fecha/hora al detectar la primera actividad.", "No calcular tiempos con código."],
    "WF-045": ["Pendiente de definir", "Crear tarea para Ventas Solicitantes solo si Tipo C y existe propietario/equipo destinatario. El ticket sigue en Servicio; si nace una oportunidad, crear un Negocio asociado.", "No aparece relacionado en la auditoría."],
    "WF-046": ["Implementado con corrección", "Mover a Escalado TI y conservar al E.A.C. como responsable de seguimiento; registrar responsable TI como dato manual.", "TI opera en Notion; HubSpot es bitácora."],
    "WF-047": ["Pendiente de validación", "Al entrar a Escalado TI registrar fecha/hora y solicitar categoría, subcategoría y descripción. El folio usa ID nativo o llega por API.", "No aparece relacionado en la auditoría."],
    "WF-048": ["Implementado con corrección", "Esperar 48 horas y notificar al superior/equipo si el ticket sigue abierto. No usar destinatarios personales fijos.", "La recurrencia cada 8 horas no se documenta como implementada."],
    "WF-049": ["Implementado con corrección", "Al cerrar registrar fecha y exigir resolución. Las métricas usan campos nativos; si no existen, las entrega la API.", "UNE se maneja en su pipeline separado."],
  };
  const [status, rule, extra] = decisions[id];
  return { status, rule, note: `${auditNote(id)} ${extra}` };
}

function cobranzaWorkflowDecision(id) {
  const decisions = {
    "WF-050": ["Implementado con corrección", "Asignar al equipo de Cobranza, no a Atención. Usar propietario/equipo, no una persona fija."],
    "WF-051": ["Pendiente de validación", "Crear una tarea única al propietario de Cobranza con fecha de vencimiento; confirmar contenido y responsable."],
    "WF-052": ["Pendiente de validación", "Mover a Cobranza Activa solo cuando la API confirme campaña vigente y saldo pendiente mayor a cero."],
    "WF-053": ["Rechazado por limitante; sustituir por API", "HubSpot no debe calcular recurrencias mensuales ni días hábiles. Monific envía fecha_proximo_recordatorio, monto y fecha; el workflow solo dispara el aviso aprobado."],
    "WF-054": ["Rechazado por limitante; sustituir por API", "La API calcula el recordatorio previo al día 15. HubSpot espera la fecha recibida y crea tarea/notificación aprobada."],
    "WF-055": ["Implementado con corrección", "Activar con dias_de_mora enviado por Monific y valor mayor o igual a 31; HubSpot no calcula la mora."],
    "WF-056": ["Pendiente de corrección por contradicción", "El master define mover a Campaña Liquidada con saldo insoluto 0, mensualidades restantes 0 y conciliación validada; la relación de auditoría apunta a Cierre por Refinanciamiento. Corregir nombre/mapeo antes de activar."],
    "WF-057": ["Implementado con corrección", "Mover a Ejecución de Garantía con mora confirmada por API y autorización documentada; no solo por tiempo en etapa."],
    "WF-058": ["Implementado con corrección", "Completar propiedades de refinanciamiento y notificar a rol/equipo aprobado. No usar destinatarios fijos."],
    "WF-059": ["Implementado con validación", "Consolidar con WF-056 si ambos realizan el mismo movimiento para evitar doble ejecución."],
    "WF-060": ["Pendiente de validación", "Mover a Ejecución de Garantía solo con decisión y autorización documentadas; validar si duplica WF-057."],
    "WF-061": ["Implementado con corrección", "Registrar entrada a garantía y notificar a equipos autorizados; reemplazar nombres personales por roles/equipos."],
    "WF-062": ["Implementado con validación", "Cerrar por refinanciamiento con fecha, acuerdo y contrato completos. No reabrir automáticamente."],
    "WF-063": ["Implementado con corrección", "Mover a Campaña Liquidada cuando la API confirme saldo insoluto 0, mensualidades restantes 0 y conciliación validada."],
    "WF-064": ["Implementado con corrección", "Cerrar por incumplimiento solo con expediente, motivo, monto vencido y autorización documentados."],
  };
  const [status, rule] = decisions[id];
  return { status, rule, note: auditNote(id) };
}

function updateWorkflowSheet(book, sheetName, ids, decisionFn) {
  const sheet = book.worksheets.getItem(sheetName);
  const values = sheet.getUsedRange(true).values;
  sheet.getRange("F1:H1").values = [["Estatus final conciliado", "Regla implementable en HubSpot", "Auditoría / pendientes"]];
  header(sheet.getRange("F1:H1"));
  const out = [];
  for (let i = 1; i < values.length; i++) {
    const id = ids[i - 1];
    if (!clean(values[i]?.[1]) || !id) { out.push([null, null, null]); continue; }
    const f = flowById.get(id);
    if (f?.Estado) sheet.getCell(i, 4).values = [[String(f.Estado).toUpperCase() === "ON" ? "Encendido" : "Apagado"]];
    const d = decisionFn(id);
    out.push([d.status, d.rule, d.note]);
  }
  if (out.length) sheet.getRange(`F2:H${values.length}`).values = out;
  body(sheet.getRange(`A1:H${values.length}`));
  header(sheet.getRange("A1:H1"));
  for (let r = 2; r <= values.length; r++) {
    const s = sheet.getRange(`F${r}`).values?.[0]?.[0];
    if (s) sheet.getRange(`F${r}`).format = statusFormat(s);
  }
  sheet.getRange("B:B").format.columnWidth = 58;
  sheet.getRange("F:F").format.columnWidth = 31;
  sheet.getRange("G:G").format.columnWidth = 68;
  sheet.getRange("H:H").format.columnWidth = 58;
  sheet.freezePanes.freezeRows(1);
}

updateWorkflowSheet(servicio, "WF atención al cliente", ["WF-041","WF-042","WF-043","WF-044","WF-045","WF-046","WF-047","WF-048","WF-049"], serviceWorkflowDecision);
updateWorkflowSheet(cobranza, "Wf Cobranza", ["WF-050","WF-051","WF-052","WF-053","WF-054","WF-055","WF-056","WF-057","WF-058","WF-059","WF-060","WF-061","WF-062","WF-063","WF-064"], cobranzaWorkflowDecision);

function replaceInSheet(book, sheetName, replacements) {
  const sheet = book.worksheets.getItem(sheetName);
  const used = sheet.getUsedRange(true);
  const vals = used.values;
  let changed = false;
  for (let r = 0; r < vals.length; r++) for (let c = 0; c < (vals[r]?.length ?? 0); c++) {
    if (typeof vals[r][c] !== "string") continue;
    let v = vals[r][c];
    for (const [from, to] of replacements) v = v.replace(new RegExp(from, "gi"), to);
    if (v !== vals[r][c]) { vals[r][c] = v; changed = true; }
  }
  if (changed) used.values = vals;
}

replaceInSheet(cobranza, "Listado prop. Cobranza", [["Objeto de Cobranza", "Ticket"], ["Objeto Edificio \/ Proyecto", "Proyecto"]]);
replaceInSheet(cobranza, "Pipeline Cobranza", [["Objeto de cobranza", "Objeto de Ticket"], ["Objeto Edificio \/ Proyecto", "Objeto Proyecto"]]);
replaceInSheet(servicio, "Pipeline Servicio", [["Objeto de cobranza", "Objeto de Ticket"]]);

const internalNames = new Map(Object.entries({
  "nombre":"firstname", "apellido":"lastname", "correo electronico":"email", "telefono":"phone", "rfc solicitante":"rfc", "id solicitante":"monific_user_id",
  "id proyecto":"hs_object_id", "nombre del proyecto":"hs_name", "tipo de proyecto":"tipo_de_proyecto", "fecha de inversion efectiva":"fecha_de_inversion_efectiva", "fecha de vencimiento":"fecha_de_vencimiento",
  "id campana":"id_de_campana_financiamiento", "historial de pago":"historial_de_pago", "monto total":"monto_total_deuda", "plazo en meses":"total_de_mensualidades",
  "fecha del primer pago":"fecha_primer_pago", "fecha del ultimo pago":"fecha_ultimo_pago", "numero de cuotas totales":"total_de_mensualidades", "tabla completa de cuotas":"tabla_cuotas",
  "canal de entrada":"canal_de_entrada", "propietario del ticket":"hubspot_owner_id", "fecha y hora de creacion":"createdate", "estatus del ticket":"hs_pipeline_stage",
  "estatus de ticket":"hs_pipeline_stage", "tipo de ticket":"tipo_de_ticket", "referencia a ticket anterior":"referencia_ticket_anterior", "tiempo de primera respuesta":"tiempo_de_primera_respuesta",
  "fecha y hora de atencion del ticket":"fecha_y_hora_de_atencion_del_ticket", "resolucion detallada":"resolucion_detallada", "proceso une activo":"proceso_une_activo",
  "notas de consulta legal":"notas_de_consulta_legal", "folio ticket ti":"folio_ticket_ti", "fecha y hora escalamiento ti":"fecha_y_hora_escalamiento_ti",
  "descripcion de problema tecnico":"descripcion_de_problema_tecnico", "categoria ticket ti":"categoria_ticket_ti", "subcategoria ticket ti":"subcategoria_ticket_ti",
  "estatus ticket ti":"estatus_ticket_ti", "notas de seguimiento ti":"notas_de_seguimiento_ti", "responsable ti asignado":"responsable_ti_asignado", "fecha de cierre":"closedate",
  "tiempo de resolucion total":"tiempo_de_resolucion_total", "folio une":"folio_une", "fecha de ingreso":"fecha_de_ingreso", "fecha limite de dictamen":"fecha_limite_de_dictamen",
  "trimestre de reporte":"trimestre_de_reporte", "propietario":"hubspot_owner_id", "nombre del reclamante":"nombre_del_reclamante", "curp":"curp", "domicilio":"domicilio",
  "codigo postal":"codigo_postal", "municipio o alcaldia":"municipio_o_alcaldia", "colonia":"colonia", "ciudad":"ciudad", "estado":"estado", "monto reclamado":"monto_reclamado",
  "hechos":"hechos", "producto o servicio involucrado":"producto_o_servicio_involucrado", "formato une":"formato_une", "resultado del dictamen":"resultado_del_dictamen",
  "dictamen":"dictamen", "notas de consulta con d c l":"notas_consulta_dcl", "documentos de soporte adicionales":"documentos_soporte_adicionales", "tiempo de resolucion":"tiempo_de_resolucion_total",
}));

function propertyDecision(label, object, fill, type, segment) {
  const n = norm(label), o = norm(object), f = norm(fill), t = norm(type);
  if (n.includes("folio une") || n.includes("folio ticket ti")) return ["Rechazado como autogenerado; sustituir", "Usar ID nativo del Ticket como folio o recibir el folio formateado desde la API. Sin Data Hub no generar series YYYY-MM-NNN dentro de HubSpot."];
  if (n.includes("fecha limite de dictamen")) return ["Implementable por API", "Monific calcula 30 días hábiles y envía la fecha. HubSpot solo almacena, recuerda y alerta."];
  if (n.includes("trimestre de reporte")) return ["Implementable por API o manual", "La API envía el trimestre; como alternativa se captura manualmente. No usar código personalizado en HubSpot."];
  if (n.includes("tiempo de primera respuesta") || n.includes("tiempo de resolucion")) return ["Implementable con propiedad nativa; validar", "Usar métrica/SLA nativo de Tickets. Si la licencia no la expone, Monific calcula y envía el valor; no crear cálculo personalizado."];
  if (n.includes("referencia a ticket anterior")) return ["Implementable por API o asociación manual", "La API localiza el Ticket anterior y guarda su ID/URL; sin integración se documenta manualmente."];
  if (n.includes("categoria ticket ti") || n.includes("subcategoria ticket ti")) return ["Implementable con validación manual", "Crear dos listas desplegables según la hoja Cat&Subcat. Sin lógica avanzada, el agente valida que la combinación sea correcta."];
  if (segment === "cobranza" && f.includes("automatic")) return ["Implementable por API", "Monific envía el valor financiero o la fecha ya calculada. HubSpot almacena y lo usa como criterio; no calcula saldos, mora ni cuotas."];
  if (o.includes("proyecto")) return ["Implementable por API - Proyecto separado", "Crear/actualizar en el objeto Proyecto predeterminado y asociar al Ticket. No duplicar estos datos en Negocios ni en Tickets."];
  if (f.includes("automatic")) return ["Implementable con regla nativa", "Usar propiedad estándar, etapa, workflow o API según origen. Confirmar el nombre interno antes de crear para evitar duplicados."];
  if (t.includes("archivo")) return ["Implementable manual", "Adjuntar o guardar URL del documento en el Ticket; definir permisos y responsable de carga."];
  return ["Implementable manual", "Captura obligatoria en el Ticket antes de avanzar de etapa; usar validación de propiedades de etapa."];
}

function updatePropertySheet(book, sheetName, segment) {
  const sheet = book.worksheets.getItem(sheetName);
  const vals = sheet.getUsedRange(true).values;
  sheet.getRange("I1:L1").values = [["Nombre interno propuesto", "Estatus final", "Regla implementable", "Auditoría / observación"]];
  header(sheet.getRange("I1:L1"), COLORS.orange);
  const out = [];
  for (let i = 1; i < vals.length; i++) {
    const label = clean(vals[i]?.[1]);
    if (!label) { out.push([null,null,null,null]); continue; }
    const object = clean(vals[i]?.[2]);
    const internal = internalNames.get(norm(label)) || slug(label);
    const [status, rule] = propertyDecision(label, object, vals[i]?.[3], vals[i]?.[4], segment);
    const confirmed = internalNames.has(norm(label));
    out.push([internal, status, rule, confirmed ? "Nombre alineado con el master/auditoría; validar existencia antes de crear." : "Nombre propuesto: validar contra HubSpot para no duplicar una propiedad existente."]);
  }
  sheet.getRange(`I2:L${vals.length}`).values = out;
  body(sheet.getRange(`A1:L${vals.length}`));
  header(sheet.getRange("A1:L1"), COLORS.black);
  for (let r = 2; r <= vals.length; r++) {
    const s = sheet.getRange(`J${r}`).values?.[0]?.[0];
    if (s) sheet.getRange(`J${r}`).format = statusFormat(s);
  }
  sheet.getRange("B:B").format.columnWidth = 34;
  sheet.getRange("C:H").format.columnWidth = 24;
  sheet.getRange("I:I").format.columnWidth = 34;
  sheet.getRange("J:J").format.columnWidth = 34;
  sheet.getRange("K:K").format.columnWidth = 70;
  sheet.getRange("L:L").format.columnWidth = 55;
  sheet.freezePanes.freezeRows(1);
}

updatePropertySheet(cobranza, "Listado prop. Cobranza", "cobranza");
updatePropertySheet(servicio, "Listado prop. Servicio", "servicio");
updatePropertySheet(servicio, "Listado prop. UNE", "une");

function pipelineComments(book, sheetName, comments) {
  const sheet = book.worksheets.getItem(sheetName);
  const vals = sheet.getUsedRange(true).values;
  for (let i = 1; i < vals.length; i++) {
    const stage = norm(vals[i]?.[0]);
    const found = Object.entries(comments).find(([k]) => stage.includes(norm(k)));
    if (found) sheet.getCell(i, 10).values = [[found[1]]];
  }
  sheet.getRange(`K1:K${vals.length}`).format.wrapText = true;
  sheet.getRange("K:K").format.columnWidth = 70;
}

pipelineComments(servicio, "Pipeline Servicio", {
  "Nuevo Ticket": "IMPLEMENTABLE CON AJUSTES. Chat clasifica solo mediante opción explícita, no por interpretación libre. WhatsApp/correo se tipifican manualmente. Rotación y SLA usan funciones nativas disponibles; destinatarios por rol/equipo.",
  "En Atención": "IMPLEMENTABLE. El Ticket permanece en Servicio. Para Tipo C se crea una tarea y, si hay oportunidad, un Negocio asociado. La reclamación formal genera otro Ticket en el pipeline UNE; no se mezcla con este Ticket.",
  "Escalado a TI": "PARCIAL. HubSpot es bitácora y Notion es la operación de TI. Folio formateado y recurrencia cada 8 horas requieren API o seguimiento manual; dentro de HubSpot usar ID nativo, fecha de escalamiento y alertas puntuales.",
  "Cerrado": "IMPLEMENTABLE. Corregido a Objeto Ticket. Exigir resolución y registrar fecha de cierre. Métricas con propiedades nativas o valores enviados por API.",
});
pipelineComments(servicio, "Pipeline UNE", {
  "Abierto": "PARCIAL. Mantener UNE como pipeline separado. Folio formateado, trimestre y fecha de 30 días hábiles llegan por API o se capturan manualmente. HubSpot asigna, crea tarea y envía recordatorios nativos aprobados.",
  "Cerrado": "IMPLEMENTABLE. Cerrar solo con dictamen, resultado y fecha. Tiempo de resolución usa propiedad nativa o API. Una nueva reclamación crea un Ticket nuevo.",
});
pipelineComments(cobranza, "Pipeline Cobranza", {
  "Nuevo Registro": "IMPLEMENTABLE POR API. Crear Ticket de Cobranza y asociarlo con Contacto, Negocio solicitante y Proyecto predeterminado. No crear un objeto Cobranza separado.",
  "Cobranza Activa": "PARCIAL. Saldos, cuotas, pagos, mora y siguiente fecha de recordatorio los calcula Monific. HubSpot solo almacena y dispara tareas/notificaciones aprobadas.",
  "Refinanciamiento": "IMPLEMENTABLE. Requiere decisión, condiciones y responsables documentados. Evitar workflows duplicados de salida.",
  "Ejecución Garantía": "IMPLEMENTABLE CON CONTROL. Entrada solo con mora y autorización confirmadas. Notificar por rol/equipo y conservar expediente completo.",
  "Cierre por Refinanciamiento": "IMPLEMENTABLE. Exigir acuerdo/contrato, fecha y conciliación antes de cerrar.",
  "Campaña Liquidada": "IMPLEMENTABLE POR API. La API confirma saldo insoluto 0, mensualidades restantes 0 y conciliación validada.",
  "Cierre Incumplimiento": "IMPLEMENTABLE CON CONTROL. Exigir motivo, expediente, monto vencido y autorización; no cerrar por tiempo automático.",
});

function buildUneWorkflows() {
  const sheet = servicio.worksheets.getItem("WF UNE");
  const rows = [
    ["UNE-01", "Crear/registrar Ticket UNE", "Ticket", "Pendiente de implementación", "Crear Ticket en pipeline UNE desde formulario/correo aprobado, asociar contacto y asignar a D.C.", "No existe workflow documentado en el master fuente.", "Implementable con herramientas nativas/API"],
    ["UNE-02", "Definir folio y fechas regulatorias", "Ticket", "Rechazado dentro de HubSpot; sustituir", "Usar ID nativo como folio o recibir folio, trimestre y fecha límite calculados por la API.", "Sin Data Hub no generar serie ni calcular 30 días hábiles.", "Responsable: TI Monific"],
    ["UNE-03", "Acuse de recepción", "Ticket", "Pendiente de aprobación", "Enviar correo aprobado con folio y plazo, desde el buzón autorizado.", "Definir copy, remitente, consentimiento y destinatario.", "HubSpot nativo"],
    ["UNE-04", "Tarea de dictamen", "Ticket", "Pendiente de implementación", "Crear tarea al propietario con vencimiento a 10 días; recordatorios puntuales en días 5 y 8.", "No usar tarea recurrente ni destinatario fijo.", "HubSpot nativo"],
    ["UNE-05", "Escalamiento por vencimiento", "Ticket", "Pendiente de implementación", "Si sigue abierto al vencer la fecha, notificar a superior/equipo y crear tarea urgente.", "La fecha debe llegar calculada desde Monific.", "HubSpot nativo + API"],
    ["UNE-06", "Cierre con dictamen", "Ticket", "Pendiente de implementación", "Permitir cierre solo con dictamen, resultado y fecha; registrar fecha de cierre.", "Nueva reclamación = Ticket nuevo.", "HubSpot nativo"],
  ];
  sheet.getRange("A1:G1").values = [["ID", "Workflow", "Objeto", "Estatus final", "Regla implementable", "Auditoría / pendiente", "Ejecución"]];
  sheet.getRange(`A2:G${rows.length + 1}`).values = rows;
  header(sheet.getRange("A1:G1"), COLORS.orange);
  body(sheet.getRange(`A1:G${rows.length + 1}`));
  for (let r = 2; r <= rows.length + 1; r++) sheet.getRange(`D${r}`).format = statusFormat(sheet.getRange(`D${r}`).values[0][0]);
  sheet.getRange("A:A").format.columnWidth = 14; sheet.getRange("B:B").format.columnWidth = 36; sheet.getRange("C:C").format.columnWidth = 16;
  sheet.getRange("D:D").format.columnWidth = 34; sheet.getRange("E:E").format.columnWidth = 72; sheet.getRange("F:F").format.columnWidth = 58; sheet.getRange("G:G").format.columnWidth = 26;
  sheet.freezePanes.freezeRows(1);
}
buildUneWorkflows();

function addSummary(book, area, rows) {
  const existing = book.worksheets.getItemOrNull?.("Resumen Auditoría");
  if (existing) existing.delete?.();
  const sheet = book.worksheets.add("Resumen Auditoría");
  sheet.getRange("A1:D1").merge();
  sheet.getRange("A1").values = [[`Master ${area} conciliado con auditoría`]];
  sheet.getRange("A1:D1").format = { fill: COLORS.orange, font: { color: COLORS.white, bold: true, size: 14 }, horizontalAlignment: "center" };
  sheet.getRange("A3:D3").values = [["Tema", "Decisión final", "Estatus", "Responsable / validación"]];
  header(sheet.getRange("A3:D3"), COLORS.black);
  sheet.getRange(`A4:D${rows.length + 3}`).values = rows;
  body(sheet.getRange(`A4:D${rows.length + 3}`));
  for (let r = 4; r <= rows.length + 3; r++) sheet.getRange(`C${r}`).format = statusFormat(sheet.getRange(`C${r}`).values[0][0]);
  sheet.getRange("A:A").format.columnWidth = 30; sheet.getRange("B:B").format.columnWidth = 95; sheet.getRange("C:C").format.columnWidth = 36; sheet.getRange("D:D").format.columnWidth = 34;
  sheet.showGridLines = false; sheet.freezePanes.freezeRows(3);
}

addSummary(cobranza, "Cobranza", [
  ["Modelo de datos", "Cobranza vive en Tickets. Proyecto permanece como objeto predeterminado separado y se asocia al Ticket.", "Implementable", "BNO / TI Monific"],
  ["Datos financieros", "Monific calcula y envía saldos, pagos, cuotas, mora y fechas. HubSpot no realiza operaciones lógicas avanzadas.", "Implementable por API", "TI Monific"],
  ["Recordatorios", "WF-053 y WF-054 permanecen apagados hasta recibir fecha_proximo_recordatorio y aprobar mensajes/canales.", "Rechazado por limitante; sustituir por API", "TI Monific / Monific"],
  ["Workflows duplicados", "Validar y consolidar WF-056/WF-059 y WF-057/WF-060 para evitar dobles cambios de etapa.", "Pendiente de validación", "BNO"],
  ["Comunicaciones", "Correos y WhatsApp se activan solo con copy, remitente, consentimiento y destinatario aprobados.", "Pendiente de aprobación", "Monific"],
  ["Fuente de conciliación", "Se usó OK_Respuesta_BNO_validacion_CON-021.xlsx; el estado auditado gobierna al master.", "Conciliado", "BNO"],
]);

addSummary(servicio, "Servicio y UNE", [
  ["Modelo de datos", "Servicio y UNE viven en Tickets, cada uno en su pipeline. Si surge una oportunidad, se crea un Negocio asociado; no se mueve el Ticket.", "Implementable", "BNO"],
  ["Clasificación", "Chat usa una opción explícita; WhatsApp/correo se clasifican manualmente. No se promete interpretación por texto libre.", "Implementable", "Servicio"],
  ["Integración TI", "HubSpot conserva la bitácora; TI trabaja en Notion. No se asume sincronización automática no documentada.", "Implementable con proceso manual", "Servicio / TI"],
  ["UNE", "Se documentaron seis workflows faltantes. Folio formateado y fecha de 30 días hábiles requieren API o captura manual.", "Pendiente de implementación", "BNO / TI Monific"],
  ["Métricas", "Usar propiedades nativas de SLA/Tickets; si la licencia no las expone, Monific calcula y envía los valores.", "Pendiente de validar licencia", "BNO"],
  ["Comunicaciones", "Correos y WhatsApp se activan solo con copy, remitente, consentimiento y destinatario aprobados.", "Pendiente de aprobación", "Monific"],
  ["Fuente de conciliación", "Se usó OK_Respuesta_BNO_validacion_CON-021.xlsx; el estado auditado gobierna al master.", "Conciliado", "BNO"],
]);

const cobranzaOut = path.join(deliveryDir, "Master_de_Implementacion_Cobranza_Unificado.xlsx");
const servicioOut = path.join(deliveryDir, "Master_de_Implementacion_Servicio_UNE_Unificado.xlsx");
await (await SpreadsheetFile.exportXlsx(cobranza)).save(cobranzaOut);
await (await SpreadsheetFile.exportXlsx(servicio)).save(servicioOut);
console.log(JSON.stringify({ cobranzaOut, servicioOut }, null, 2));
