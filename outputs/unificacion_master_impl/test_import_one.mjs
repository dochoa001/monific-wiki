import { FileBlob, SpreadsheetFile } from "@oai/artifact-tool";
const file = process.argv[2];
try {
  const wb = await SpreadsheetFile.importXlsx(await FileBlob.load(file));
  console.log(`OK ${wb.worksheets.items.map((s) => s.name).join(" | ")}`);
} catch (error) {
  console.log(`ERROR_NAME ${error.name}`);
  console.log(`ERROR_MESSAGE ${error.message}`);
  console.log(`ERROR_CAUSE ${error.cause?.message ?? ""}`);
  process.exitCode = 1;
}
