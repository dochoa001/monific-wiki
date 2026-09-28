import fs from "node:fs/promises";
import path from "node:path";
import { FileBlob, SpreadsheetFile } from "@oai/artifact-tool";

const workspace = process.cwd();
const sourceDir = path.join(workspace, "Adicionales", "unificacíón de master de implementación");
const outDir = path.join(workspace, "outputs", "cobranza_servicio");
const previewDir = path.join(outDir, "previews_source_cobranza");
await fs.mkdir(previewDir, { recursive: true });

const sources = {
  cobranza: path.join(outDir, "Master_Cobranza_reparado_temporal.xlsx"),
  servicio: path.join(sourceDir, "Master_de_Implementación_Servicio_MonificVF.xlsx"),
};

const result = {};
for (const [key, file] of Object.entries(sources)) {
  const wb = await SpreadsheetFile.importXlsx(await FileBlob.load(file));
  result[key] = { path: file, sheets: {} };
  console.log(`${key}: ${wb.worksheets.items.map((s) => s.name).join(" | ")}`);
  for (const sheet of wb.worksheets.items) {
    const used = sheet.getUsedRange(true);
    result[key].sheets[sheet.name] = used ? used.values : [];
    if (key === "cobranza") {
      try {
        const preview = await wb.render({ sheetName: sheet.name, autoCrop: "all", scale: 0.7, format: "png" });
        const safe = sheet.name.replace(/[^a-z0-9_-]+/gi, "_");
        await fs.writeFile(path.join(previewDir, `cobranza__${safe}.png`), new Uint8Array(await preview.arrayBuffer()));
      } catch (error) {
        console.log(`RENDER_ERROR ${sheet.name}: ${error.message}`);
      }
    }
  }
}

const output = path.join(outDir, "source_data.json");
await fs.writeFile(output, JSON.stringify(result, null, 2), "utf8");
console.log(output);
