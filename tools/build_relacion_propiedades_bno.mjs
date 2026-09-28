import fs from "node:fs/promises";
import path from "node:path";
import { SpreadsheetFile, Workbook } from "@oai/artifact-tool";

const outputDir = "C:/Users/david/Documents/Monific/outputs/relacion_propiedades_bno";
const outputPath = path.join(outputDir, "Relacion_propiedades_a_crear_BNO.xlsx");

const rows = [
  ["Fecha y hora de atención del ticket", "fecha_y_hora_de_atencion_del_ticket", "Registra la fecha y hora en que el ticket recibió atención humana o gestión efectiva.", "Fecha y hora", "", "tickets"],
  ["ID Campaña", "id_campana", "Identificador único de la campaña de cobranza asociada al registro.", "Texto", "", "cobranza"],
  ["Propietario de campaña", "propietario_de_campana", "Responsable asignado a la campaña de cobranza.", "Usuario HubSpot", "", "cobranza"],
  ["Link de expediente en Drive", "link_de_expediente_en_drive", "URL del expediente de cobranza almacenado en Drive.", "URL", "", "cobranza"],
  ["Condiciones especiales del proyecto", "condiciones_especiales_del_proyecto", "Detalle de condiciones especiales del proyecto que afectan la gestión de cobranza.", "Texto multilínea", "", "cobranza"],
  ["Nota de acuerdo de pago", "nota_de_acuerdo_de_pago", "Notas del acuerdo de pago pactado con el deudor o responsable.", "Texto multilínea", "", "cobranza"],
  ["Número de intentos de contacto", "numero_de_intentos_de_contacto", "Cantidad acumulada de intentos de contacto realizados durante la gestión.", "Número", "", "cobranza"],
  ["Razón del retraso", "razon_del_retraso", "Motivo principal informado o identificado para el retraso de pago.", "Selección única", "Por definir con BNO", "cobranza"],
  ["Notas de gestión de cobranza", "notas_de_gestion_de_cobranza", "Bitácora o resumen de gestiones realizadas en el proceso de cobranza.", "Texto multilínea", "", "cobranza"],
  ["Fecha de aprobación de reestructura", "fecha_de_aprobacion_de_reestructura", "Fecha en que fue aprobada la reestructura.", "Fecha", "", "cobranza"],
  ["Responsable de aprobación", "responsable_de_aprobacion", "Persona responsable de aprobar la reestructura o acuerdo.", "Usuario HubSpot", "", "cobranza"],
  ["Motivo de reestructura", "motivo_de_reestructura", "Motivo por el cual se aprobó o solicitó la reestructura.", "Selección única", "Por definir con BNO", "cobranza"],
  ["Nota de decisión del comité", "nota_de_decision_del_comite", "Resumen de la decisión tomada por comité y su justificación.", "Texto multilínea", "", "cobranza"],
  ["Condiciones especiales del acuerdo", "condiciones_especiales_del_acuerdo", "Condiciones específicas del acuerdo de cobranza, pago o reestructura.", "Texto multilínea", "", "cobranza"],
  ["Link al contrato de refinanciamiento", "link_al_contrato_de_refinanciamiento", "URL del contrato de refinanciamiento asociado al caso.", "URL", "", "cobranza"],
  ["Días de mora al ingresar", "dias_de_mora_al_ingresar", "Número de días de mora al momento de ingresar al proceso o etapa correspondiente.", "Número", "", "cobranza"],
  ["Número de expediente jurídico", "numero_de_expediente_juridico", "Identificador del expediente jurídico asociado al caso.", "Texto", "", "cobranza"],
  ["Abogado externo asignado", "abogado_externo_asignado", "Nombre del abogado externo responsable del caso.", "Texto", "", "cobranza"],
  ["Monto vencido acumulado al ingreso", "monto_vencido_acumulado_al_ingreso", "Monto total vencido acumulado al momento de ingreso al proceso.", "Moneda", "", "cobranza"],
  ["Monto recuperado", "monto_recuperado", "Monto recuperado durante la gestión de cobranza.", "Moneda", "", "cobranza"],
  ["Observaciones del proceso de garantía", "observaciones_del_proceso_de_garantia", "Notas relevantes sobre el proceso de garantía.", "Texto multilínea", "", "cobranza"],
  ["Conciliación validada por D.F.", "conciliacion_validada_por_d_f", "Indica si la conciliación fue validada por Dirección Financiera.", "Sí/No", "Sí; No", "cobranza"],
  ["Calificación del proyecto CNBV", "calificacion_del_proyecto_cnbv", "Calificación o clasificación del proyecto para referencia CNBV.", "Selección única", "Por definir con BNO", "cobranza"],
  ["Monto vencido acumulado al cierre", "monto_vencido_acumulado_al_cierre", "Monto total vencido acumulado al cierre del proceso.", "Moneda", "", "cobranza"],
  ["Número de expediente jurídico", "numero_de_expediente_juridico", "Duplicado detectado en la auditoría: revisar contra la propiedad del mismo nombre antes de crearla.", "Texto", "Posible duplicado: revisar antes de crear", "cobranza"],
  ["Observaciones del proceso legal", "observaciones_del_proceso_legal", "Notas relevantes sobre el avance, riesgos o cierre del proceso legal.", "Texto multilínea", "", "cobranza"],
];

const additionalRows = [
  ["Fecha de última sincronización / Monific Last Synced At", "monific_last_synced_at", "Debe registrar la última fecha y hora de sincronización con Monific.", "Fecha y hora", "", "solicitantes"],
  ["Fecha cuenta STP", "stp_account_date", "Fecha en que se creó la cuenta STP del contacto.", "Fecha", "", "inversionistas"],
  ["Fecha primera inversión", "date_first_investment", "Fecha en que el inversionista realizó su primera inversión.", "Fecha", "", "inversionistas"],
  ["Saldo actual", "current_account_balance", "Saldo actual del inversionista según backend Monific.", "Moneda", "", "inversionistas"],
  ["Saldo invertido", "invested_balance", "Saldo invertido del inversionista según backend Monific.", "Moneda", "", "inversionistas"],
  ["Valor cuenta", "account_value", "Valor total de la cuenta del inversionista.", "Moneda", "", "inversionistas"],
  ["Ganado actual", "current_profit", "Ganancia actual del inversionista.", "Moneda", "", "inversionistas"],
  ["Deal padre / Negocio principal", "deal_padre", "Relación o propiedad para identificar el negocio principal asociado.", "Relación / Texto", "", "inversionistas"],
  ["Monto máximo de campaña", "maximum_campaign_amount", "Monto máximo de campaña de fondeo.", "Moneda", "", "solicitantes"],
  ["Monto mínimo de campaña", "minimum_campaign_amount", "Monto mínimo de campaña de fondeo.", "Moneda", "", "solicitantes"],
  ["Estatus última campaña", "estatus_ultima_campana", "Estatus de la última campaña asociada al negocio.", "Selección única", "Por definir con BNO", "solicitantes"],
  ["Fechas/material de campaña", "fechas_material_campana", "Fechas y material asociado a la campaña de fondeo.", "Texto multilínea", "", "solicitantes"],
];

await fs.mkdir(outputDir, { recursive: true });

const workbook = Workbook.create();
const sheet = workbook.worksheets.add("Propiedades a crear");
sheet.showGridLines = false;

sheet.getRange("A1:F1").values = [[
  "Nombre de la propiedad",
  "Nombre interno",
  "Descripción",
  "tipo de campo",
  "Opciones (si aplica)",
  "Segmento (inversionistas, solicitantes, cobranza, tickets)",
]];
sheet.getRangeByIndexes(1, 0, rows.length, 6).values = rows;

const usedRange = sheet.getRangeByIndexes(0, 0, rows.length + 1, 6);
usedRange.format = {
  font: { color: "#111827" },
  borders: { preset: "all", style: "thin", color: "#D9E2EC" },
  wrapText: true,
  verticalAlignment: "top",
};
sheet.getRange("A1:F1").format = {
  fill: "#0F766E",
  font: { bold: true, color: "#FFFFFF" },
  horizontalAlignment: "center",
  verticalAlignment: "middle",
  wrapText: true,
};
sheet.getRange("A1:F1").format.rowHeightPx = 44;
sheet.getRange(`A2:F${rows.length + 1}`).format.rowHeightPx = 54;
sheet.getRange("A:A").format.columnWidthPx = 240;
sheet.getRange("B:B").format.columnWidthPx = 245;
sheet.getRange("C:C").format.columnWidthPx = 430;
sheet.getRange("D:D").format.columnWidthPx = 135;
sheet.getRange("E:E").format.columnWidthPx = 210;
sheet.getRange("F:F").format.columnWidthPx = 160;
sheet.freezePanes.freezeRows(1);
sheet.tables.add(`A1:F${rows.length + 1}`, true, "PropiedadesACrear");

const control = workbook.worksheets.add("Control");
control.showGridLines = false;
control.getRange("A1:B1").values = [["Control", "Detalle"]];
control.getRange("A2:B6").values = [
  ["Fuente", "Matriz_Unica_Hallazgos_BNO_CORTE_2026-06-18.xlsx, hoja Verificación 31 propiedades"],
  ["Filtro aplicado", "Resultado (API 17-jun) = NO EXISTE"],
  ["Total filas incluidas", rows.length],
  ["Aviso", "El archivo fuente marca un nombre interno duplicado: numero_de_expediente_juridico."],
  ["Uso recomendado", "Validar objeto y opciones con BNO antes de cargar propiedades en HubSpot."],
];
control.getRange("A1:B1").format = {
  fill: "#0F766E",
  font: { bold: true, color: "#FFFFFF" },
};
control.getRange("A1:B6").format = {
  borders: { preset: "all", style: "thin", color: "#D9E2EC" },
  wrapText: true,
  verticalAlignment: "top",
};
control.getRange("A:A").format.columnWidthPx = 170;
control.getRange("B:B").format.columnWidthPx = 620;
control.getRange("A1:B1").format.rowHeightPx = 30;
control.getRange("A2:B6").format.rowHeightPx = 48;

const summary = workbook.worksheets.add("Resumen auditoría");
summary.showGridLines = false;
summary.getRange("A1:B1").values = [["Dato revisado", "Resultado"]];
summary.getRange("A2:B7").values = [
  ["Propiedades esperadas por los masters", "177"],
  ["Propiedades detectadas por API", "2,142"],
  ["Propiedades BNO revisadas nominalmente", "31"],
  ["Propiedades BNO que no existen", "26"],
  ["Custom objects en el portal", "0; la auditoría indica que el objeto de Cobranza no existe"],
  ["Conclusión", "Sí hay una brecha mayor mencionada por la auditoría, pero estos archivos solo traen nombre verificable para 26 faltantes BNO y algunas menciones adicionales en hallazgos."],
];
summary.getRange("A1:B1").format = {
  fill: "#0F766E",
  font: { bold: true, color: "#FFFFFF" },
};
summary.getRange("A1:B7").format = {
  borders: { preset: "all", style: "thin", color: "#D9E2EC" },
  wrapText: true,
  verticalAlignment: "top",
};
summary.getRange("A:A").format.columnWidthPx = 250;
summary.getRange("B:B").format.columnWidthPx = 650;
summary.getRange("A2:B7").format.rowHeightPx = 50;

const extra = workbook.worksheets.add("Menciones adicionales");
extra.showGridLines = false;
extra.getRange("A1:F1").values = [[
  "Nombre de la propiedad",
  "Nombre interno",
  "Descripción",
  "tipo de campo",
  "Opciones (si aplica)",
  "Segmento (inversionistas, solicitantes, cobranza, tickets)",
]];
extra.getRangeByIndexes(1, 0, additionalRows.length, 6).values = additionalRows;
extra.getRangeByIndexes(0, 0, additionalRows.length + 1, 6).format = {
  borders: { preset: "all", style: "thin", color: "#D9E2EC" },
  wrapText: true,
  verticalAlignment: "top",
};
extra.getRange("A1:F1").format = {
  fill: "#334155",
  font: { bold: true, color: "#FFFFFF" },
  horizontalAlignment: "center",
  verticalAlignment: "middle",
  wrapText: true,
};
extra.getRange("A:A").format.columnWidthPx = 260;
extra.getRange("B:B").format.columnWidthPx = 230;
extra.getRange("C:C").format.columnWidthPx = 420;
extra.getRange("D:D").format.columnWidthPx = 140;
extra.getRange("E:E").format.columnWidthPx = 210;
extra.getRange("F:F").format.columnWidthPx = 160;
extra.freezePanes.freezeRows(1);
extra.tables.add(`A1:F${additionalRows.length + 1}`, true, "MencionesAdicionales");

const preview = await workbook.render({
  sheetName: "Propiedades a crear",
  range: "A1:F27",
  scale: 1,
  format: "png",
});
await fs.writeFile(path.join(outputDir, "preview_propiedades.png"), new Uint8Array(await preview.arrayBuffer()));

const errors = await workbook.inspect({
  kind: "match",
  searchTerm: "#REF!|#DIV/0!|#VALUE!|#NAME\\?|#N/A",
  options: { useRegex: true, maxResults: 100 },
  summary: "final formula error scan",
});
console.log(errors.ndjson);

const tableCheck = await workbook.inspect({
  kind: "table",
  range: "Propiedades a crear!A1:F27",
  include: "values",
  tableMaxRows: 5,
  tableMaxCols: 6,
});
console.log(tableCheck.ndjson);

const xlsx = await SpreadsheetFile.exportXlsx(workbook);
await xlsx.save(outputPath);
console.log(outputPath);
