import fs from "node:fs/promises";
import path from "node:path";
import { FileBlob, SpreadsheetFile } from "@oai/artifact-tool";

const base = path.join(process.cwd(), "outputs", "unificacion_master_impl");
const previewDir = path.join(base, "previews_final");
await fs.mkdir(previewDir, { recursive: true });

const books = [
  { name: "master", path: path.join(base, "Master_de_Implementacion_Comercial_Unificado.xlsx") },
  { name: "mapeo", path: path.join(base, "Mapeo_API_Monific_HubSpot_Final.xlsx") },
];

function safe(value) {
  return String(value).replace(/[^a-z0-9_-]+/gi, "_");
}

for (const book of books) {
  const wb = await SpreadsheetFile.importXlsx(await FileBlob.load(book.path));
  console.log(`BOOK ${book.name}: ${wb.worksheets.items.map((s) => s.name).join(" | ")}`);
  const errors = await wb.inspect({
    kind: "match",
    searchTerm: "#REF!|#DIV/0!|#VALUE!|#NAME\\?|#N/A",
    options: { useRegex: true, maxResults: 300 },
    maxChars: 3000,
    summary: "final formula error scan",
  });
  console.log(`ERROR_SCAN ${book.name}: ${errors.ndjson}`);

  if (book.name === "master") {
    for (const sheet of wb.worksheets.items) {
      const used = sheet.getUsedRange(true);
      const address = used?.address ?? "A1";
      const check = await wb.inspect({ kind: "region", sheetId: sheet.name, range: address, maxChars: 2500, tableMaxRows: 6, tableMaxCols: 12, tableMaxCellChars: 100 });
      console.log(`CHECK ${sheet.name} ${address}: ${check.ndjson}`);
      const renderRange = sheet.name === "Flujograma" ? "A1" : address;
      try {
        const preview = await wb.render({ sheetName: sheet.name, range: renderRange, scale: 0.8, format: "png" });
        await fs.writeFile(path.join(previewDir, `${book.name}__${safe(sheet.name)}.png`), new Uint8Array(await preview.arrayBuffer()));
      } catch (error) {
        console.log(`RENDER_ERROR ${sheet.name}: ${error.message}`);
      }
    }
  } else {
    const map = wb.worksheets.getItem("1. Mapeo de Propiedades");
    const mapRows = map.getUsedRange(true).values.length;
    const projectCheck = await wb.inspect({ kind: "match", searchTerm: "Proyecto", sheetId: "1. Mapeo de Propiedades", options: { maxResults: 50 }, maxChars: 5000 });
    console.log(`PROJECT_CHECK: ${projectCheck.ndjson}`);
    const ranges = [
      ["Instrucciones para el Llenado", "A1:A46"],
      ["1. Mapeo de Propiedades", `A1:O${Math.min(40, mapRows)}`],
      ["1. Mapeo de Propiedades", `A41:O${Math.min(80, mapRows)}`],
      ["1. Mapeo de Propiedades", `A81:O${Math.min(120, mapRows)}`],
      ["1. Mapeo de Propiedades", `A121:O${mapRows}`],
      ["2. Checklist de Reglas de Negoc", "A1:N10"],
      ["2. Checklist de Reglas de Negoc", "A11:N20"],
      ["2. Checklist de Reglas de Negoc", "A21:N30"],
      ["2. Checklist de Reglas de Negoc", "A31:N36"],
      ["Accesos  Documentación", "A1:D10"],
      ["Resumen de decisiones", "A1:D10"],
    ];
    let index = 1;
    for (const [sheetName, range] of ranges) {
      try {
        const preview = await wb.render({ sheetName, range, scale: 0.8, format: "png" });
        await fs.writeFile(path.join(previewDir, `${book.name}__${String(index).padStart(2, "0")}__${safe(sheetName)}.png`), new Uint8Array(await preview.arrayBuffer()));
      } catch (error) {
        console.log(`RENDER_ERROR ${sheetName} ${range}: ${error.message}`);
      }
      index++;
    }
  }
}
