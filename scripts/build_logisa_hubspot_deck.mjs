import fs from "node:fs/promises";
import path from "node:path";
import { Presentation, PresentationFile } from "file:///C:/Users/david/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/@oai/artifact-tool/dist/artifact_tool.mjs";

const ROOT = "C:/Users/david/Documents/Monific";
const OUT_DIR = path.join(ROOT, "outputs");
const FINAL = path.join(OUT_DIR, "Presentacion-Logisa-HubSpot.pptx");
const WORK = path.join(process.env.TEMP || "C:/Users/david/AppData/Local/Temp", "codex-presentations", "logisa-hubspot-client");
const TMP = path.join(WORK, "tmp");
const PREVIEW = path.join(TMP, "preview");
const LAYOUT = path.join(TMP, "layout");
const QA = path.join(TMP, "qa");
const BRAND = "C:/Users/david/Documents/Natgas/.codex-analysis/black-orange-design-system-20260605/Black & Orange Design System MX";

const C = {
  orange: "#FE8301",
  yellow: "#FFED02",
  pink: "#ED8BFA",
  gray: "#EBEAE8",
  black: "#000000",
  white: "#FFFFFF",
  muted: "#575555",
  line: "#D8D5D1",
};

const size = { width: 1280, height: 720 };
const page = { left: 68, top: 54, width: 1144, height: 612 };

async function writeBlob(filePath, blob) {
  await fs.writeFile(filePath, new Uint8Array(await blob.arrayBuffer()));
}

async function readImage(filePath) {
  const bytes = await fs.readFile(filePath);
  return bytes.buffer.slice(bytes.byteOffset, bytes.byteOffset + bytes.byteLength);
}

function addBox(slide, x, y, w, h, fill = C.white, line = C.black, r = "rounded-lg") {
  return slide.shapes.add({
    geometry: "roundRect",
    position: { left: x, top: y, width: w, height: h },
    fill,
    line: { style: "solid", fill: line, width: 1.4 },
    borderRadius: r,
  });
}

function addText(slide, text, x, y, w, h, opts = {}) {
  const t = slide.shapes.add({
    geometry: "textbox",
    position: { left: x, top: y, width: w, height: h },
    fill: "none",
    line: { style: "solid", fill: "none", width: 0 },
  });
  t.text = text;
  t.text.style = {
    typeface: opts.font || "Inter",
    fontSize: opts.size || 20,
    bold: opts.bold || false,
    italic: opts.italic || false,
    color: opts.color || C.black,
    alignment: opts.align || "left",
  };
  return t;
}

function addTitle(slide, eyebrow, title, subtitle) {
  addText(slide, eyebrow, page.left, 36, 420, 24, { size: 12, bold: true, color: C.muted });
  addText(slide, title, page.left, 75, 820, 84, { size: 38, font: "Fraunces", color: C.black });
  if (subtitle) addText(slide, subtitle, page.left, 158, 900, 54, { size: 18, color: C.muted });
}

async function addLogo(slide, dark = false) {
  const logo = dark ? "bno-full-logo-white.png" : "bno-full-logo.png";
  const blob = await readImage(path.join(BRAND, "assets", "logo", logo));
  slide.images.add({
    blob,
    contentType: "image/png",
    alt: "Black & Orange",
    fit: "contain",
    position: { left: 1018, top: 46, width: 150, height: 42 },
  });
}

function addFooter(slide, idx) {
  addText(slide, "Logisa + Opton | HubSpot", page.left, 672, 320, 18, { size: 10, color: C.muted });
  addText(slide, String(idx).padStart(2, "0"), 1160, 672, 52, 18, { size: 10, color: C.muted, align: "right" });
}

function addStageRow(slide, x, y, stages, accent = C.orange, compact = false) {
  const gap = compact ? 8 : 10;
  const h = compact ? 42 : 50;
  const w = (page.width - (stages.length - 1) * gap) / stages.length;
  stages.forEach((s, i) => {
    const bx = x + i * (w + gap);
    addBox(slide, bx, y, w, h, i < 5 ? C.white : C.gray, C.black, "rounded-md");
    addText(slide, s, bx + 10, y + 9, w - 20, h - 12, { size: compact ? 11 : 12, bold: i < 5, color: C.black, align: "center" });
    if (i < 5) {
      slide.shapes.add({
        geometry: "rect",
        position: { left: bx, top: y + h - 6, width: w, height: 6 },
        fill: accent,
        line: { style: "solid", fill: accent, width: 0 },
      });
    }
  });
}

function bulletList(slide, items, x, y, w, rowH = 36, accent = C.orange) {
  items.forEach((item, i) => {
    const cy = y + i * rowH + 8;
    slide.shapes.add({
      geometry: "ellipse",
      position: { left: x, top: cy, width: 10, height: 10 },
      fill: accent,
      line: { style: "solid", fill: accent, width: 0 },
    });
    addText(slide, item, x + 22, y + i * rowH, w - 22, rowH, { size: 17, color: C.black });
  });
}

function pipelineCard(slide, title, count, detail, x, y, w, h, accent) {
  addBox(slide, x, y, w, h, C.white, C.black, "rounded-lg");
  addText(slide, count, x + 24, y + 20, 80, 56, { size: 44, font: "Fraunces", color: accent });
  addText(slide, title, x + 116, y + 20, w - 140, 30, { size: 22, bold: true });
  addText(slide, detail, x + 116, y + 56, w - 140, 56, { size: 15, color: C.muted });
}

async function main() {
  await fs.mkdir(OUT_DIR, { recursive: true });
  await fs.mkdir(PREVIEW, { recursive: true });
  await fs.mkdir(LAYOUT, { recursive: true });
  await fs.mkdir(QA, { recursive: true });

  const p = Presentation.create({ slideSize: size });

  // 1
  {
    const s = p.slides.add();
    s.background.fill = C.gray;
    const squiggle = await readImage(path.join(BRAND, "assets", "squiggle", "squiggle-7.png"));
    s.images.add({ blob: squiggle, contentType: "image/png", alt: "Squiggle", fit: "contain", position: { left: 690, top: 88, width: 520, height: 410 } });
    addText(s, "Logisa + Opton", 76, 94, 620, 42, { size: 20, bold: true });
    addText(s, "Estructura HubSpot", 76, 160, 700, 86, { size: 58, font: "Fraunces" });
    addText(s, "Pipelines, propiedades clave y automatizaciones existentes para ordenar la conversación con el cliente.", 80, 284, 650, 80, { size: 22, color: C.muted });
    addBox(s, 80, 430, 330, 58, C.black, C.black, "rounded-full");
    addText(s, "Presentación de trabajo", 112, 448, 270, 22, { size: 16, bold: true, color: C.white, align: "center" });
    await addLogo(s);
  }

  // 2
  {
    const s = p.slides.add();
    s.background.fill = C.white;
    addTitle(s, "PANORAMA GENERAL", "Dos unidades, seis pipelines", "La estructura separa Logisa y Opton para que cada unidad gestione oportunidades según su proceso comercial.");
    pipelineCard(s, "Logisa", "5", "IM Proyectos, IM Adm. de Inf., IM Post Venta, Proyectos y Licitaciones.", 80, 258, 520, 146, C.orange);
    pipelineCard(s, "Opton", "1", "Pipeline comercial enfocado en AAP y UPS: producto, propuesta, negociación y cierre.", 680, 258, 520, 146, C.pink);
    addBox(s, 80, 470, 1120, 94, C.gray, C.black, "rounded-lg");
    addText(s, "Lectura ejecutiva", 108, 492, 240, 24, { size: 18, bold: true });
    addText(s, "Logisa requiere más separación por tipo de servicio. Opton concentra el flujo en un solo pipeline, con propiedades que distinguen AAP y UPS.", 108, 524, 1000, 34, { size: 19 });
    await addLogo(s);
    addFooter(s, 2);
  }

  // 3
  {
    const s = p.slides.add();
    s.background.fill = C.gray;
    addTitle(s, "PIPELINES LOGISA", "Diferencia entre los pipelines existentes", "Los pipelines comparten etapas comerciales, pero cambian por origen, tipo de operación y propiedades necesarias.");
    const rows = [
      ["IM - Proyectos", "Proyectos de infraestructura: alcance, desarrollo interno, propuesta y negociación."],
      ["IM - Servicios - Adm. de Inf.", "Servicios administrados: proveedores, SLA, métricas, contratos y mesa de ayuda."],
      ["IM - Servicios - Post Venta", "Servicios posteriores a venta: mantenimiento preventivo, correctivo y pólizas."],
      ["Proyectos", "Pipeline general de proyectos: tipo de contratación, fuente, tamaño, fechas y monto."],
      ["Licitaciones", "Oportunidades públicas o privadas: junta de aclaraciones, apertura técnica/económica y fallo."],
    ];
    rows.forEach((r, i) => {
      const y = 220 + i * 76;
      addBox(s, 86, y, 1090, 56, C.white, C.black, "rounded-md");
      addText(s, r[0], 112, y + 13, 300, 26, { size: 18, bold: true });
      addText(s, r[1], 410, y + 13, 710, 26, { size: 16, color: C.muted });
      slideAccent(s, 86, y, 10, 56, i === 4 ? C.yellow : C.orange);
    });
    await addLogo(s);
    addFooter(s, 3);
  }

  // 4
  {
    const s = p.slides.add();
    s.background.fill = C.white;
    addTitle(s, "ETAPAS LOGISA", "Flujo principal y cierres", "Las primeras etapas ordenan la operación; las etapas finales documentan el resultado de cada oportunidad.");
    const main = ["Carga / datos", "Validar alcance", "Desarrollo interno", "Propuesta preliminar", "Negociación"];
    const closing = ["Ganado", "Perdido", "Cancelado", "No fit", "No participado", "Estudio de Mercado", "Icebox"];
    addText(s, "Flujo comercial", 78, 225, 260, 24, { size: 20, bold: true });
    addStageRow(s, 78, 265, main, C.orange);
    addText(s, "Resultados y seguimiento", 78, 380, 340, 24, { size: 20, bold: true });
    addStageRow(s, 78, 420, closing, C.yellow, true);
    addBox(s, 78, 545, 1080, 54, C.gray, C.black, "rounded-lg");
    addText(s, "Nota: Licitaciones usa etapas propias al inicio: Carga de datos manuales, Junta de Aclaraciones y Apertura Técnica y Económica.", 104, 562, 1020, 22, { size: 17 });
    await addLogo(s);
    addFooter(s, 4);
  }

  // 5
  {
    const s = p.slides.add();
    s.background.fill = C.gray;
    addTitle(s, "PIPELINE OPTON", "Un solo pipeline para AAP y UPS", "Opton concentra la operación en un flujo corto y usa propiedades para separar necesidades de producto.");
    addStageRow(s, 80, 238, ["Validación del producto", "Propuesta técnica y económica", "Negociación", "Ganado", "Perdido", "Cancelado", "No fit", "Estudio de Mercado", "Icebox"], C.pink, true);
    addBox(s, 90, 340, 510, 230, C.white, C.black, "rounded-lg");
    addText(s, "AAP", 118, 406, 100, 36, { size: 30, font: "Fraunces", color: C.orange });
    bulletList(s, ["Aplicación y tipo de equipo", "Capacidad TR y medio de refrigeración", "Voltaje, compresor e inyección"], 122, 444, 420, 42, C.orange);
    addBox(s, 680, 340, 510, 230, C.white, C.black, "rounded-lg");
    addText(s, "UPS", 708, 406, 100, 36, { size: 30, font: "Fraunces", color: C.pink });
    bulletList(s, ["Aplicación del UPS", "Capacidad, fases, factor de forma y voltaje", "Tiempo de respaldo y comentarios"], 712, 444, 420, 42, C.pink);
    await addLogo(s);
    addFooter(s, 5);
  }

  // 6
  {
    const s = p.slides.add();
    s.background.fill = C.white;
    addTitle(s, "PROPIEDADES LOGISA", "Información clave a capturar", "Las propiedades ayudan a clasificar la necesidad, validar alcance y preparar la operación comercial.");
    const blocks = [
      ["Datos generales", ["Correo, nombre, apellido, teléfono y empresa", "Unidad de negocio", "Sector y ubicación del proyecto"]],
      ["Proyectos", ["Tipo de proyecto", "Etapa del proyecto", "Descripción breve y documentación adjunta"]],
      ["Adm. de Inf.", ["Gestión de proveedores", "SLA, contratos, métricas y reportes", "Mesa de ayuda y descripción de equipos"]],
      ["Post Venta", ["Tipo de servicio", "Un sitio o sitios múltiples", "Descripción de equipos a atender"]],
      ["Gestión comercial", ["Categoría y tamaño de proyecto", "Tipo de Data Center", "Monto, moneda, descuentos, fechas y forma de pago"]],
      ["Cierres", ["Motivos de perdido, cancelado y no fit", "Tiempo de compra posterior", "Icebox y estudio de mercado"]],
    ];
    blocks.forEach((b, i) => {
      const col = i % 3;
      const row = Math.floor(i / 3);
      const x = 80 + col * 382;
      const y = 225 + row * 170;
      addBox(s, x, y, 338, 132, i === 0 ? C.gray : C.white, C.black, "rounded-lg");
      addText(s, b[0], x + 20, y + 18, 290, 24, { size: 19, bold: true });
      addText(s, b[1].join("\n"), x + 20, y + 54, 296, 58, { size: 13.5, color: C.muted });
    });
    await addLogo(s);
    addFooter(s, 6);
  }

  // 7
  {
    const s = p.slides.add();
    s.background.fill = C.gray;
    addTitle(s, "PROPIEDADES OPTON", "AAP y UPS en el mismo flujo", "Las propiedades clave separan el tipo de solución y dan base para reportes comerciales.");
    const left = ["Segmento Opton: AAP o UPS", "Tipo de aplicación", "Capacidad requerida", "Voltaje y configuración técnica", "Cita o solicitud de cotización"];
    const right = ["Monto y moneda", "Fecha de cierre / entrega", "Garantía", "Apoyo de arranque", "Motivos de perdido, cancelado o no fit"];
    addBox(s, 90, 242, 500, 268, C.white, C.black, "rounded-lg");
    addText(s, "Entrada de oportunidad", 122, 270, 360, 30, { size: 24, font: "Fraunces" });
    bulletList(s, left, 124, 325, 410, 34, C.orange);
    addBox(s, 690, 242, 500, 268, C.white, C.black, "rounded-lg");
    addText(s, "Seguimiento y cierre", 722, 270, 360, 30, { size: 24, font: "Fraunces" });
    bulletList(s, right, 724, 325, 410, 34, C.pink);
    addBox(s, 90, 550, 1100, 46, C.yellow, C.black, "rounded-full");
    addText(s, "Reportes esperados: oportunidades por segmento, producto, aplicación, asesor, etapa, monto y motivo de descarte.", 132, 563, 1020, 20, { size: 16, bold: true, align: "center" });
    await addLogo(s);
    addFooter(s, 7);
  }

  // 8
  {
    const s = p.slides.add();
    s.background.fill = C.black;
    addText(s, "AUTOMATIZACIONES", 80, 76, 400, 24, { size: 12, bold: true, color: C.gray });
    addText(s, "Automatizaciones existentes importantes", 80, 125, 800, 100, { size: 50, font: "Fraunces", color: C.white });
    addBox(s, 86, 285, 500, 220, C.white, C.white, "rounded-lg");
    addText(s, "Lo que sí existe", 122, 320, 320, 30, { size: 26, font: "Fraunces", color: C.black });
    bulletList(s, ["Automatizaciones de homologación de datos", "Normalización para mantener campos consistentes", "Apoyo a la calidad de información"], 126, 376, 390, 42, C.orange);
    addBox(s, 680, 285, 500, 220, C.gray, C.gray, "rounded-lg");
    addText(s, "Lo que no existe", 716, 320, 320, 30, { size: 26, font: "Fraunces", color: C.black });
    bulletList(s, ["No hay automatizaciones de notificación", "No hay automatizaciones por cambio de etapa", "No hay alertas operativas asociadas al avance"], 720, 376, 390, 42, C.pink);
    await addLogo(s, true);
    addFooter(s, 8);
  }

  // 9
  {
    const s = p.slides.add();
    s.background.fill = C.white;
    const doodle = await readImage(path.join(BRAND, "assets", "doodles", "reading 1 (1).png"));
    s.images.add({ blob: doodle, contentType: "image/png", alt: "Ilustración", fit: "contain", position: { left: 780, top: 150, width: 320, height: 340 } });
    addText(s, "CONCLUSIÓN", 80, 78, 220, 24, { size: 12, bold: true, color: C.muted });
    addText(s, "Puntos para alinear con el cliente", 80, 128, 660, 90, { size: 48, font: "Fraunces" });
    bulletList(s, [
      "Confirmar que los seis pipelines siguen vigentes.",
      "Validar qué propiedades son obligatorias por etapa.",
      "Acordar qué reportes necesita cada unidad.",
      "Definir si se crearán automatizaciones de notificación o cambio de etapa.",
    ], 95, 285, 610, 48, C.orange);
    await addLogo(s);
    addFooter(s, 9);
  }

  await fs.writeFile(path.join(TMP, "source-notes.txt"), [
    "Fuentes usadas:",
    "- Datos proporcionados por el usuario en el chat: lista de pipelines, etapas y nota sobre automatizaciones.",
    "- Google Sheet: Mapeo de propiedades y procesos - Logisa. ID 1Zslg-UsCA0D9_KuvwLQUwRgOK4-xfUyLTVRY8K-8o44.",
    "- Manual de marca Black & Orange usado previamente en Natgas: Black & Orange Design System MX.",
  ].join("\n"));
  await fs.writeFile(path.join(TMP, "slide-plan.txt"), [
    "Presentación nueva de 9 slides.",
    "Estilo: Black & Orange Design System MX.",
    "Paleta: negro, blanco, cool gray, fiery orange, yellow, pink.",
    "Tipografías: Fraunces para títulos, Inter para cuerpo.",
    "Estructura: portada, panorama, pipelines Logisa, etapas Logisa, Opton, propiedades Logisa, propiedades Opton, automatizaciones, cierre.",
  ].join("\n"));

  for (const [i, slide] of p.slides.items.entries()) {
    const stem = `slide-${String(i + 1).padStart(2, "0")}`;
    await writeBlob(path.join(PREVIEW, `${stem}.png`), await p.export({ slide, format: "png", scale: 1 }));
    await fs.writeFile(path.join(LAYOUT, `${stem}.layout.json`), await (await slide.export({ format: "layout" })).text());
  }
  await writeBlob(path.join(PREVIEW, "contact-sheet.webp"), await p.export({ format: "webp", montage: true, scale: 1 }));

  await fs.writeFile(path.join(QA, "visual-qa.txt"), [
    "QA visual:",
    "- Se generaron 9 slides y una vista de contacto.",
    "- Se usaron elementos editables: texto, formas e imágenes.",
    "- Se dejó el contenido en bloques resumidos para evitar saturación.",
    "- Pendiente de revisión humana final sobre preferencia de detalle por slide.",
  ].join("\n"));

  const pptx = await PresentationFile.exportPptx(p);
  await pptx.save(FINAL);
  const stat = await fs.stat(FINAL);
  console.log(JSON.stringify({ final: FINAL, bytes: stat.size, preview: path.join(PREVIEW, "contact-sheet.webp"), workspace: WORK }, null, 2));
}

function slideAccent(slide, x, y, w, h, fill) {
  slide.shapes.add({
    geometry: "rect",
    position: { left: x, top: y, width: w, height: h },
    fill,
    line: { style: "solid", fill, width: 0 },
  });
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
