import path from "node:path";
import { FileBlob, SpreadsheetFile } from "@oai/artifact-tool";

const book = path.join(process.cwd(), "Adicionales", "unificacíón de master de implementación", "MONIFIC - MAPEO DE PROPIEDADES.xlsx");
const wb = await SpreadsheetFile.importXlsx(await FileBlob.load(book));
console.log(wb.help("table.resize", { include: "index,examples,notes", maxChars: 3000 }).ndjson);
