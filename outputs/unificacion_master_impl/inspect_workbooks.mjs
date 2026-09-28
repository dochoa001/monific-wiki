import fs from "node:fs/promises";
import path from "node:path";
import { FileBlob, SpreadsheetFile } from "@oai/artifact-tool";

const workspace = process.cwd();
const base = path.join(workspace, "Adicionales");
const outDir = path.join(workspace, "outputs", "unificacion_master_impl", "previews_source");
await fs.mkdir(outDir, { recursive: true });

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

const all = await walk(base);
const targetDir = all.find((p) => p.toLowerCase().endsWith("master de implementación_ proceso comercial - monific.xlsx"))
  ? path.dirname(all.find((p) => p.toLowerCase().endsWith("master de implementación_ proceso comercial - monific.xlsx")))
  : path.dirname(all.find((p) => p.toLowerCase().includes("master de implementaci") && p.toLowerCase().endsWith(".xlsx")));
const keyword = process.argv[2]?.toLowerCase();
const targets = all.filter((p) => path.dirname(p) === targetDir && p.toLowerCase().endsWith(".xlsx") && (!keyword || path.basename(p).toLowerCase().includes(keyword)));

for (const file of targets) {
  const wb = await SpreadsheetFile.importXlsx(await FileBlob.load(file));
  const sheets = wb.worksheets.items;
  console.log(`\nWORKBOOK: ${path.basename(file)}`);
  console.log(`PATH: ${file}`);
  console.log(`SHEETS: ${sheets.map((s) => s.name).join(" | ")}`);
  const summary = await wb.inspect({
    kind: "sheet,table,definedName",
    maxChars: 8000,
    tableMaxRows: 6,
    tableMaxCols: 18,
    tableMaxCellChars: 120,
  });
  console.log(summary.ndjson);
  const matches = await wb.inspect({
    kind: "match",
    searchTerm: "^OK",
    options: { useRegex: true, maxResults: 500 },
    maxChars: 20000,
    summary: "Celdas que comienzan con OK",
  });
  console.log("OK_MATCHES:");
  console.log(matches.ndjson);
  for (const sheet of sheets) {
    const used = sheet.getUsedRange(true);
    const address = used?.address ?? "A1";
    const region = await wb.inspect({
      kind: "region",
      sheetId: sheet.name,
      range: address,
      maxChars: 12000,
      tableMaxRows: 40,
      tableMaxCols: 25,
      tableMaxCellChars: 140,
    });
    console.log(`SHEET_REGION ${sheet.name} ${address}:`);
    console.log(region.ndjson);
    try {
      const preview = await wb.render({ sheetName: sheet.name, autoCrop: "all", scale: 1, format: "png" });
      const safeBook = path.basename(file, path.extname(file)).replace(/[^a-z0-9_-]+/gi, "_");
      const safeSheet = sheet.name.replace(/[^a-z0-9_-]+/gi, "_");
      await fs.writeFile(path.join(outDir, `${safeBook}__${safeSheet}.png`), new Uint8Array(await preview.arrayBuffer()));
    } catch (error) {
      console.log(`RENDER_ERROR ${sheet.name}: ${error.message}`);
    }
  }
}
