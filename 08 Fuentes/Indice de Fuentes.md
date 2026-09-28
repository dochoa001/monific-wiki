---
titulo: Indice de Fuentes
tipo: indice
area: transversal
estado: verificado
confianza: alta
actualizado: 2026-09-28
fuentes: []
tags: [fuentes, indice]
---

# Índice de Fuentes

> **En una frase:** el mapa entre los IDs que cita la wiki (`D167`, `X020`, `P_CONTRATO`…) y los documentos originales.

**Los extractos de texto plano viven en `08 Fuentes/_extractos/<ID>.txt`.** Son `.txt`, así que Obsidian no los indexa como notas — pero se pueden buscar con `grep` o con la búsqueda global.

**Los archivos originales no se tocan nunca.**

---

## Convención de IDs

| Prefijo | Tipo | Cómo se extrajo |
|---|---|---|
| `D###` | Word (`.docx`) y texto (`.txt`) | Descompresión del `.docx` y limpieza de `word/document.xml` con PowerShell |
| `X###` | Excel (`.xlsx`, `.xlsm`) | COM de Excel: `UsedRange` de cada hoja, primeras 400 filas × 40 columnas |
| `P_XXX` | PDF | COM de Word (conversión PDF → texto) |
| `V_XXX_AAAAMMDD` | **Declaración verbal** | No se extrae: se registra. Es lo que una persona dijo en sesión, sin documento de respaldo |

⚠️ **Las fuentes `V_` no son evidencia.** Registran quién dijo qué y cuándo, para que la wiki no quede desactualizada mientras llega el respaldo documental. Nunca sustituyen el criterio de cierre del proyecto (URL/ID + export fechado + caso de prueba + validación escrita). Una página que cite una fuente `V_` debe marcar el dato como **🔵 declarado**.

💡 **Si el PDF viene acompañado de su HTML de origen, extrae del HTML.** Sale texto limpio con un `perl -0777` que borre `<style>`/`<script>`, convierta los cierres de bloque en saltos de línea y desescape las entidades. Es lo que se hizo con `P_RESCIERRE`.

⚠️ **Los `.zip` también son fuentes.** El barrido del 2026-08-07 los saltó y `D198` quedó fuera cuatro días. Al ingerir, descomprime antes de inventariar.

⚠️ **No hay Python ni Node en este equipo.** Los scripts que funcionaron están descritos al final de esta página.

---

## 🌟 Fuentes ancla

Las ocho que sostienen el núcleo de la wiki:

| ID | Documento | Fecha | Por qué importa |
|---|---|---|---|
| **`D167`** | Maestro Operativo de Procesos y Workflows Monific–BNO | 2026-07-31 | El más reciente y completo. Consolida los 4 masters, el inventario de HubSpot, las fichas de los 70 flujos y las decisiones canónicas INV-01 a INV-14 |
| **`X018`** | Documento API de Integración Unificado | — | El contrato técnico: mapeo de propiedades + 30 reglas de negocio |
| **`X020`** | Requerimiento Formal BNO | 2026-06-18 | Cifras oficiales del conflicto, bloques B01–B16 y los 217 pendientes |
| **`X002`** | Matriz Única de Hallazgos BNO | 2026-06-18 | Los 284 hallazgos y la verificación por API |
| **`P_ANEXO`** | Anexo A · Resumen Ejecutivo / Plan BOOST | 2025-11-19 | El alcance contratado |
| **`P_CONTRATO`** | Contrato Monific–B&O | 2026-01-05 | Los términos legales |
| **`D193`** | Brief de Necesidades | 2025 | Los objetivos originales del cliente |
| **`D195`** | Entregables pendientes del 26 de enero | 2026-01-26 | Formulario, árbol de decisiones, flujo de cobranza y SLAs |
| **`D198`** | Historial y contexto de cierre Monific × B&O | **2026-08-03** | ⭐ **La fuente más reciente del proyecto.** Clasifica los 70 pendientes por naturaleza, acota a ~10 los defectos atribuibles a B&O y fija la ruta de cierre |

---

## Fuentes declarativas

| ID | Quién | Fecha | Qué declaró |
|---|---|---|---|
| **`V_DO_20260831`** | David Ochoa · Dirección B&O | 2026-08-31 | Las 81 comunicaciones publicadas e integradas en HubSpot (B08); masters depurados del contenido de otro cliente (B12); dashboards bloqueados por la integración (B06). **Sin documento de respaldo** |

---

## Análisis de cierre (2026-08-03)

Extraídos del `.zip` `01. Adicionales/auditoria final/Monific-Auditoria.zip` el 2026-08-11.

| ID | Documento | Formato original | Cómo se extrajo |
|---|---|---|---|
| **`D198`** | Historial y contexto de cierre, v1.0, por Emmanuel Chulin | `.md` (42,528 bytes, 675 líneas) | Copia directa — ya era texto |
| **`P_RESCIERRE`** | Resumen ejecutivo de cierre | `.pdf` (249,122 bytes) + `_resumen_ejecutivo.html` | ⚠️ **Extraído del HTML acompañante**, no del PDF: el HTML es la fuente de la que se imprimió el PDF y da texto limpio sin COM de Word |

Ambos son del **2026-08-03**, posteriores al Maestro Operativo `D167` (2026-07-31). → [[Analisis de Cierre BNO]]

---

## Documentos contractuales

| ID | Documento | Estado |
|---|---|---|
| `P_CONTRATO` | Contrato Monific – BOM – ES – 16ene26 | ✅ Extraído |
| `P_ANEXO` | Monific · Anexo Resumen Ejecutivo · 16ene26 | ✅ |
| `P_SLA` | **SLA B&O a Monific** | 🔴 **Sin texto** — PDF de imagen |
| `P_KICKOFF` | Monific Kick Off 2026 | 🔴 **Sin texto** — presentación en imágenes |
| — | Complete_with_Docusign_Monific_-_Anexo_Resum.pdf | Duplicado del anexo |
| `X019` | Gantt – Monific (1) | ✅ |
| `X024` | Propuesta Gantt v2 (actualizado 16-jul) | ✅ |

→ [[Documentos Contractuales]]

---

## Conflicto y auditorías

| ID | Documento | Corte |
|---|---|---|
| `P_NOTIF` | Notificación contractual de inconformidades y requerimiento formal | 2026-06-18 |
| `P_BOOST_EXP` | Correo 2/3 — Expediente documental de solo lectura | 2026-06-18 |
| `P_BOOST_ACC` | Correo 3/3 — Carpeta editable para respuestas y evidencias | 2026-06-18 |
| `X020` / `P_REQFORMAL` | Requerimiento Formal BNO (xlsx / pdf) | 2026-06-18 |
| `X002` / `X008` / `P_MATRIZ` | Matriz Única de Hallazgos BNO (2 copias xlsx + pdf) | 2026-06-18 |
| `P_EXPREQ` | Expediente Requerimiento BNO | 2026-06-18 |
| `X001` | 01. Plan de Corrección (Plan Único v3) | 2026-06-13 |
| `X003` / `X015` | Respuesta BNO con validación CON-021 (2 copias) | — |
| `X004` | Plantilla de Respuesta BNO (vacía) | — |
| `X017` | Relación de propiedades a crear BNO (derivado) | — |

---

## Masters de implementación

| ID | Documento |
|---|---|
| `X012` | Master de Implementación · Proceso Comercial |
| `X011` | Master de Implementación · Cobranza |
| `X013` | Master de Implementación · Servicio / UNE |
| `X018` | 04. Documento API de Integración Unificado |
| `X014` | MONIFIC · Mapeo de Propiedades |
| `X016` | Master_Cobranza_reparado_temporal | 🔴 **No abre** |

⚠️ Los tres archivos sin extensión en `drive-download-...143843Z-1-001` (Master Comercial, Cobranza y Servicio/UNE unificados) **no se pudieron procesar** por falta de extensión. Sus equivalentes están en `01. Adicionales/unificacíón de master de implementación/`.

→ [[Masters de Implementacion]]

---

## Comunicaciones

| ID | Documento |
|---|---|
| `D001` / `D192` | 03. Matriz completa de comunicación (2 copias) — **la fuente de verdad de las 81** |
| `X021` | 01. Auditoría Comunicaciones |
| `D191` | 02. Brecha Comunicaciones |
| `X005` / `X022` | 04. Tracker Matriz Comunicaciones | 🔴 **No abre** |
| `X006` | 05. Plantillas WhatsApp Meta |
| `X009` | Plantillas · WhatsApp Meta · HS |
| `X007` | Matriz Comunicación vs. HubSpot (2026-07-28) |
| `X010` | Relación ID-HubSpot-CTA (2026-07-08) |

---

## Documentos de proceso y entregables

| ID | Documento |
|---|---|
| `D193` | 0.3 Brief de Necesidades |
| `D194` | 00. Presentación Plan HubSpot Técnico |
| `D195` | Entregables pendientes del 26 de enero |
| `D196` | REPORTES MONIFIC – HUBSPOT ⚠️ *sin contrastar* |
| `D166` | 00_LEER_PRIMERO — instrucción vigente de cierre |
| `D167` | Maestro Operativo (2026-07-31) |
| `P_INTTEC` | Monific-HubSpot-Integración-Técnica |
| `X023` | Directorio Responsables Monific |

---

## Minutas de reunión

Numeradas según el archivo original. → [[Minutas]]

| # | Fecha | ID |
|---|---|---|
| 1 | 2026-01-22 | `D168` |
| 2 | 2026-01-26 | `D179` |
| 3 | 2026-02-03 | `D182` |
| 4 | 2026-02-24 | `D183` |
| 5 | 2026-02-26 | `D184` |
| 6 | 2026-03-02 | `D185` |
| 7 | 2026-03-05 | `D186` |
| 8 | 2026-03-10 | `D187` |
| 9 | 2026-03-12 | `D188` |
| 10 | 2026-03-19 | `D169` |
| 11 | 2026-04-15 | `D170` |
| 12 | 2026-04-22 | `D171` |
| 13 | 2026-05-06 | `D172` |
| 14 | 2026-05-08 | `D173` |
| 15 | 2026-05-15 | `D174` |
| 16 | 2026-05-27 | `D175` |
| 17 | 2026-06-05 | `D176` |
| 18 | 2026-06-16 | `D177` |
| 19 | 2026-06-29 | `D178` |
| 20 | 2026-07-27 | `D180` |
| 21 | 2026-08-04 | `D181` |

---

## Notas de Gemini (transcripciones automáticas)

⚠️ Contienen errores de reconocimiento de voz. Ver [[Contradicciones y Verificaciones]] C-16.

| ID | Reunión | Fecha |
|---|---|---|
| `D137` | Debrief Monific (interno B&O) | 2025-12-01 |
| `D145` | Kickoff interno (Rodrigo Yeo) | 2025-12-08 |
| `D149` | Monific × B&O · Sesión de Kickoff | 2026-01-07 |
| `D154` | Presentación Flujograma de Ventas | 2026-02-24 |
| `D142` | Interna · Presentación de Mapeos | 2026-02-25 |
| `D159` | Presentación Master de Implementación de Ventas | 2026-02-26 |
| `D164` | Sesión inicial #1 · Alineación Técnica | 2026-03-02 |
| `D151` | Presentación Flujograma de Cobranza | 2026-03-05 |
| `D141` | Interna · Master de Cobranzas | 2026-03-09 |
| `D156` | Presentación Master de Cobranza | 2026-03-10 |
| `D147` | Mapeo propiedades integración (interna) | 2026-03-11 |
| `D152` | Presentación Flujograma de Servicios | 2026-03-12 |
| `D157` | Presentación Master de Servicios | 2026-03-19 |
| `D161` | Recurrente | 2026-04-15 |
| `D162` | Recurrente | 2026-04-22 |
| `D160` | Previa sesión Integración | 2026-05-04 |
| `D163` | Recurrente | 2026-05-06 |
| `D139` | Integración · Validación final de campos | 2026-05-06 |
| `D143` | Interna · Integración | 2026-05-11 |
| `D197` | Recurrente | 2026-05-15 |
| `D148` | Cotización extra (interna B&O) | 2026-05-22 |
| `D134` | Capacitación Ventas 1 | 2026-06-04 |
| `D135` | Capacitación Ventas 2 | 2026-06-05 |
| `D133` | Alineación interna · horas consultoría | 2026-06-08 |
| `D165` | Sesión Inicial · Integración Monific V2 | 2026-06-16 |
| `D138` | Emmanuel / David · Alineación interna | 2026-06-19 |
| **`D200`** | **Follow up: Monific** · Emmanuel Chulin / David Ochoa, **interna B&O** | **2026-08-24** |
| **`D201`** | **Follow up: Monific** · Emmanuel Chulin / David Ochoa, **interna B&O** | **2026-08-31** |
| **`D199`** | **Flujograma - Monific** · Emmanuel Chulin / David Ochoa, **interna B&O** | **2026-09-02** |
| **`D202`** | **Follow up: Monific** · Emmanuel Chulin / David Ochoa, **interna B&O** | **2026-09-08** |

⚠️ **`D200`, `D201` y `D202` tampoco tienen extracto en `_extractos/`**, por la misma razón que
`D199`. Son **Google Docs nativos** propiedad de `echulin@black-n-orange.com`, leídos íntegros
(notas + transcripción verbatim) por el MCP de Google Drive:

| ID | `fileId` del documento | Acceso directo | Leído el | Destilado en |
|---|---|---|---|---|
| `D200` | `1MSSn3_G6kh6SZOdti6St5I-HDnloT8C0sGi6Q5F8olY` | `1l-5EH8UhUD3z5ebQNhFHXw9lNc7tDve1` | 2026-09-08 | [[minuta-2026-08-24-cierre-declarado-y-confronta-auditoria\|Minuta 2026-08-24 · Cierre declarado]] |
| `D201` | `1gCF3s9d5Yd2zPoG9AS1plyTA7jXM80YRUVnS41RIj_8` | `1jcUXrjb-pNVcngNwup_hXdH3DP36O2yF` | 2026-09-08 | [[minuta-2026-08-31-homologacion-flujogramas-y-reprogramacion\|Minuta 2026-08-31 · Homologación de flujogramas]] |
| `D202` | `1x1isqcGqXkxrZvHq28B6xgwQeJecEJBpeB-bdNtiY9g` | `1XYmdjvCiHOG8EZZGZaEVHoIFJPdryKQC` | 2026-09-09 | [[minuta-2026-09-08-mapeos-cubiertos-y-espera-integracion\|Minuta 2026-09-08 · Mapeos cubiertos]] |

⚠️ **Lo que hay en la carpeta es un acceso directo, no el documento.** Los tres aparecen como
`application/vnd.google-apps.shortcut` (tercera columna): **leerlos por ese ID devuelve `{}`**, no un
error. Hay que resolver el atajo al `fileId` real (segunda columna) buscando el documento por
título. Es la causa de que un barrido anterior los diera por ilegibles. → `PENDIENTES.md` H-29.

⚠️ **Los atajos no viven en la carpeta declarada.** Verificado el 2026-09-09: los tres están en
`Follow up: Monific (recurring)` (`1iyTgm51VNaR8YQmCGEb9do4fa68UJUwt`), cuyo padre es la carpeta
personal de grabaciones de Meet (`1Sid8bu8k5TT0Em_3AH27FNVfx5O6G1d-`) — **no**
`Monific - Meetings` (`1UD0CQTOjVnE0tnnGffGbjhI4nmIAdkbH`), que es lo único que declara
`cliente.yaml`. El barrido por `parentId` de la carpeta declarada **no es recursivo** y **no
devuelve nada posterior al 2026-06-19**. La sesión del 2026-09-02 (`D199`) está en la misma
situación, en su propia carpeta `Flujograma - Monific - 2026/09/02 15:02 CST`
(`1y22RLVv0QxxOrxRy3USGgo851FTfZHtm`). → amplía `PENDIENTES.md` H-21.

⚠️ **La serie "Follow up: Monific" está sin ingerir casi completa.** Además de `D200`, `D201` y
`D202`, existen al menos **13 sesiones más** con el mismo título entre 2026-06-22 y 2026-08-19 que
**no tienen ID de fuente** en esta wiki. → `PENDIENTES.md` H-30.

⚠️ **`D199` no tiene extracto en `_extractos/`.** Es un **Google Doc nativo compartido** —no vive en
ninguna de las carpetas declaradas en `cliente.yaml` (`fuentes.transcripciones_drive`)— y se leyó
íntegro (notas + transcripción verbatim) por el MCP de Google Drive el 2026-09-07, con
`fileId = 1IOALVo3D3ARHimBhq-byJF7iVPUDvPFUDsYXjd7NwEo`. Propietario: `echulin@black-n-orange.com`.
Destilado en [[minuta-2026-09-02-flujogramas-simplificados|Minuta 2026-09-02 · Flujogramas simplificados]].
Los dos huecos que deja —el extracto y la carpeta fuera de `cliente.yaml`— están en `PENDIENTES.md`.

**Chats de reunión (texto corto):** `D136`, `D140`, `D144`, `D146`, `D150`, `D153`, `D155`, `D158`.

---

## 🆕 Revisión de cierre de Monific (2026-09-24)

Documentos **de autoría del cliente** (propietaria `raquel@monific.com`), leídos al 100 % por el MCP
de Drive el 2026-09-28. Viven en `00_VIGENTE_LEER_PRIMERO / 2026-09-24_REVISION_DE_CIERRE`
(`1gS8pZt2egHXr57yBdaOOFYUZJhaNZyGL`, padre `19lEJ0onEcGE4jAs4gUyarqIhV4CGE-CT`), la carpeta del
cliente donde B&O es lector → [[Gobernanza y Rituales]]. **Esa carpeta no está declarada en
`cliente.yaml`** → `PENDIENTES.md` H-37.

| ID | Documento | `fileId` | Tamaño | Fecha | Página |
|---|---|---|---|---|---|
| **`D203`** | *01_REPORTE_EVIDENCIAS_HUBSPOT_MONIFIC_BNO_2026-09-24.docx* — 14 hallazgos, estado por bloque, registro de fuentes S01–S31 | `1b7mgi8Dpjo8Qzv50trfrqrjCOboF5y3U` | 215,040 b | **2026-09-24** | [[revision-cierre-2026-09-24-reporte-evidencias-monific\|Revisión de cierre 2026-09-24]] |
| **`D204`** | *00_LEER_PRIMERO_REVISION_2026-09-24.txt* — instrucción de cómo responder | `1-WkPPcmjNzPbNETLACXS3LJaXpZXceLv` | 4,860 b | **2026-09-24** | ídem |

⚠️ **Sin extracto en `_extractos/`**, igual que `D199`–`D202` → `PENDIENTES.md` H-33. El texto se
leyó por MCP (el `.docx` lo convierte el propio conector) y está destilado en la página de fuente.

⚠️ **Evidencia del cliente, no de B&O.** Export por API con límites declarados (configuración del
2026-09-22, `FINALIZADO_CON_LIMITACIONES`, sin pruebas nuevas). Cítese como 🟡 **Documentado**, nunca
como ✅ Verificado.

El reporte cita documentos que esta wiki **no tiene**: correos del 2026-08-20 (calendario a fines de
octubre) y del 2026-09-11 (estatus de B&O y respuesta de Monific), un manual interno de Cobranza de
septiembre y flujogramas de integración de septiembre. → `PENDIENTES.md` H-35.

## Correos

| ID | Documento | Contenido |
|---|---|---|
| **`D190`** | **Intercambio_Correos_BNO_ordenado** | ⭐ **100 correos ordenados, 2025-10-23 → 2026-06-29.** Versión limpia. Analizado → [[Correspondencia]] |
| `D189` | intercambio correos BNO | Misma cadena sin ordenar, mismo rango. 198k caracteres |

⚠️ Export hecho **desde el buzón de Raquel Alfie** (los correos de B&O aparecen como *"Para: mí"*). Es evidencia recopilada por Monific para el expediente.

🔴 **Cobertura: termina el 2026-06-29.** Julio y agosto no están en ninguna fuente.

---

## Flujogramas (sin texto extraíble)

Los seis PDF de flujogramas son **imágenes vectoriales**. Su contenido no pudo leerse.

| ID | Flujograma | Estado |
|---|---|---|
| — | 01 · Proceso Comercial de Inversionistas | 🔴 Sin texto |
| — | 02 · Proceso de Servicio y UNE | 🔴 Sin texto |
| — | 03 · Proceso de Cobranza | 🔴 Sin texto |
| — | 04 · Proceso Comercial de Solicitantes | 🔴 Sin texto |
| `P_FLU05` | 05 · Integración Admin Monific y HubSpot | 🔴 Casi vacío |
| `P_FLU06` | 06 · Conexión General de Procesos | 🟡 Texto parcial |

Versiones antiguas, también sin texto: `P_OLD_COB`, `P_OLD_SERV`, `P_OLD_INV`, `P_OLD_SOL`.

🟡 **Mitigado:** los flujogramas originales viven en **Miro** — `miro.com/app/board/uXjVG7nRR_I=` (dato localizado en `D190`, correo de David Ochoa del 2026-02-24). Ahí se pueden consultar en su forma editable. → [[Preguntas Abiertas]] H-02

---

## Credenciales

| Archivo | Contenido |
|---|---|
| `D002` | Clave de acceso personal de HubSpot |
| `D003` | Clave de servicio de HubSpot |

⚠️ **Nunca copies el contenido de estos archivos a una página de la wiki.** Viven en `http://127.0.0.1:8787/Monific/ (proxy local; las claves ya no viven en el proyecto)`, fuera de esta carpeta.

---

## Cómo extraer una fuente nueva

No hay Python ni Node en este equipo. Estos son los métodos que funcionaron:

### Word (`.docx`)

Descomprimir el `.docx` (es un ZIP), leer `word/document.xml` y limpiar:

```powershell
Add-Type -AssemblyName System.IO.Compression.FileSystem
$zip = [System.IO.Compression.ZipFile]::OpenRead($path)
$entry = $zip.Entries | Where-Object { $_.FullName -eq 'word/document.xml' }
$xml = (New-Object System.IO.StreamReader($entry.Open(), [Text.Encoding]::UTF8)).ReadToEnd()
$zip.Dispose()
$xml = $xml -replace '</w:p>', "`n" -replace '</w:tr>', "`n" -replace '</w:tc>', ' | '
$xml = $xml -replace '<[^>]+>', '' -replace '&amp;','&' -replace '&lt;','<' -replace '&gt;','>'
```

### Excel (`.xlsx`, `.xlsm`)

COM de Excel, iterando hojas y volcando `UsedRange.Value2`. **Cuidado:** el array de `Value2` es **relativo** (índice 1..n desde `GetLowerBound`), no absoluto. Usar `GetLowerBound(0)` y `GetLowerBound(1)`.

### PDF

COM de Word: `$word.Documents.Open($path)` y leer `$doc.Content.Text`.

**Tres trampas encontradas:**

1. **Rutas largas** (> 260 caracteres) fallan al escribir. Usar nombres cortos tipo `D001.txt` y un manifiesto aparte.
2. **Word cuelga** con algunos PDF. Solución: lanzar cada archivo en un proceso `powershell.exe` separado con `Start-Process -PassThru`, acceder a `$p.Handle` **antes** de `WaitForExit(ms)` (si no, cuelga indefinidamente), y matar WINWORD al vencer el timeout.
3. **Argumentos con espacios o acentos** en `Start-Process -ArgumentList` se rompen. Pasar solo rutas ASCII sin espacios.

Los scripts completos quedaron en el scratchpad de la sesión del 2026-08-07 (no versionados). Si hace falta reconstruirlos, esta descripción es suficiente.

---

## Relacionado

- [[Correspondencia]] · [[Minutas]] · [[Masters de Implementacion]] · [[Documentos Contractuales]]
- [[Analisis de Cierre BNO]] — la página que sintetiza `D198` y `P_RESCIERRE`
- [[Contradicciones y Verificaciones]] — los huecos de extracción
- `CLAUDE.md` §6.1 — el flujo de ingesta

## Fuentes

Esta página **es** el índice de fuentes.
