import fs from "node:fs/promises";
import path from "node:path";
import { FileBlob, SpreadsheetFile } from "@oai/artifact-tool";

const workspace = process.cwd();
const base = path.join(workspace, "Adicionales");
const output = path.join(workspace, "outputs", "unificacion_master_impl", "extracted.json");

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

function matrixFor(sheet) {
  const used = sheet.getUsedRange(true);
  if (!used) return [];
  return used.values;
}

const files = await walk(base);
const folderMarker = files.find((p) => path.basename(p).toLowerCase().includes("master de implementaci") && p.endsWith(".xlsx"));
const folder = path.dirname(folderMarker);
const selected = files.filter((p) => path.dirname(p) === folder && p.endsWith(".xlsx"));
const priorPropertyBook = path.join(workspace, "outputs", "relacion_propiedades_bno", "Relacion_propiedades_a_crear_BNO.xlsx");
try {
  await fs.access(priorPropertyBook);
  selected.push(priorPropertyBook);
} catch {}
const data = {};

for (const file of selected) {
  const wb = await SpreadsheetFile.importXlsx(await FileBlob.load(file));
  const book = { path: file, sheets: {} };
  for (const sheet of wb.worksheets.items) {
    book.sheets[sheet.name] = matrixFor(sheet);
  }
  data[path.basename(file)] = book;
}

await fs.writeFile(output, JSON.stringify(data, null, 2), "utf8");
console.log(output);
