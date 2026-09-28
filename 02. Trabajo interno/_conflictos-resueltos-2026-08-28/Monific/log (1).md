# Bitácora de la Wiki Monific

Registro append-only, **más reciente arriba** (orden cronológico inverso). Nunca se eliminan entradas.

Formato de encabezado (mantenerlo estable para poder hacer `grep "^## \[" log.md | head -5`):

```
## [AAAA-MM-DD] tipo | Título corto
```

Tipos: `ingesta` · `consulta` · `lint` · `refactor` · `decision` · `meta`

> **Nota de la homologación del 2026-08-20.** Hasta esa fecha esta bitácora se escribía *al final*.
> Se cambió a *más reciente arriba* para homologar con las otras siete wikis de B&O —seis ya lo
> hacían así— y con el contrato de wiki de cliente. **Las entradas por debajo de la primera siguen en
> su orden original**: no se reordenaron para no arriesgar el contenido. Toda entrada nueva va arriba.

---

## [2026-08-21] meta | Skill `/sincronizar` y guardián de sincronía con Drive

Quinta skill de esta wiki: `/sincronizar`, más el script `scripts/verificar-sincronia-drive.ps1`.
Cierra el hueco entre lo que hay en el Drive del cliente y lo que está destilado aquí.

**Qué hace.** Lee las minutas y los recursos nuevos por el MCP de Google Drive, los destila, los
propaga a las páginas afectadas con wikilinks ([[Wiki general/60-operacion/decisiones/adr-004-boveda-raiz|ADR-004]]) y verifica que el espejo local↔Drive quedó
completo. La carpeta de minutas es la que ya estaba declarada en `fuentes.transcripciones_drive` y
`fuentes.drive_folder_id` de `cliente.yaml`. La skill no inventa rutas: lee esos dos campos.

**Qué NO hace: escribir en Drive por API.** El espejo ya existe y lo mantiene Drive para escritorio.
Se verificó durante la instalación: `cliente.yaml` y `MANTENIMIENTO.md` de esta wiki están en Drive con el
mismo tamaño y la misma marca de tiempo al milisegundo que en local. Dos escritores sobre el mismo
archivo no producen una fusión, producen una copia de conflicto: la regla dura de
`MANTENIMIENTO.md`.

**Frontera.** La skill escribe solo en local y solo dentro de esta wiki, así que [[Wiki general/60-operacion/decisiones/adr-002-no-construir-wikis-de-cliente|ADR-002]] sigue intacto
en tiempo de ejecución. La sesión que la instaló sí cruzó capas, y cumple las cuatro condiciones de
[[Wiki general/60-operacion/decisiones/adr-005-homologacion-transversal|ADR-005]]: instrucción directa y explícita del usuario, alcance declarado y acotado (dos archivos por
wiki, sin sobrescribir ninguno), registro en la bitácora de cada wiki, y cierre al terminar.

**Tres decisiones de diseño**, tomadas con el usuario:

- Cuando Drive trae una versión más nueva, se **fusiona, no se sobrescribe**. Es una wiki conjunta y
  una edición local que aún no había subido no se puede perder. La versión de Drive entra como
  fuente, con su nota `> ⚠️` de qué cambió, igual que cualquier contradicción.
- La skill **actúa sola** salvo cinco frenos: contradicción con lo documentado, más de 6 páginas
  tocadas, cambio de un dato canónico de `cliente.yaml`, divergencia real local↔Drive, o datos de terceros
  ajenos al proyecto.
- **Solo lo declarado.** Lee las carpetas de `fuentes` y nada más. Ni la carpeta de credenciales, ni
  audio, ni video.

**Estado del espejo al instalar:** Drive para escritorio estaba **apagado** (instalado, versión
129.0.1.0). Había trabajo local sin subir. Correr el guardián antes de la próxima sesión.

---

## [2026-08-20] meta | Homologación a la estructura v1.0

Sesión transversal de homologación de las 8 wikis de B&O. En esta wiki:

**Inversión de la relación AGENTS / CLAUDE**

El contrato de B&O y el estándar abierto piden que **`AGENTS.md` sea el archivo canónico** —lo leen
de forma nativa Codex, Cursor y Copilot— y que `CLAUDE.md` solo lo importe. Aquí estaba **al revés**:
`AGENTS.md` era un puntero de 17 líneas hacia `CLAUDE.md`.

- `AGENTS.md` — ahora canónico, con la **estructura v1.0**. Recoge íntegro lo que vivía en
  `CLAUDE.md` (las tres capas, las 10 reglas no negociables, estructura, anatomía de página,
  marcadores de confianza, las tres operaciones, convenciones, vocabulario controlado y la
  advertencia sobre la calidad de las fuentes) y añade lo que faltaba: orden de lectura para agentes,
  taxonomía de tags **cerrada**, reglas de interconexión, flujo de archivado, ciclo cerrado para
  documentar piezas construidas, cómo leer `.gdoc`/`.gsheet` por API, y la regla fija.
- `CLAUDE.md` — reescrito como `@AGENTS.md` + solo las 4 skills. Cero duplicación.

**Capa de contrato (nueva)**

- `cliente.yaml` — ficha maestra machine-readable: portal `48427391`, regulador CNBV, los 5 procesos,
  el vocabulario de objetos con sus sinónimos prohibidos, las cifras de avance del corte
  (70 workflows / 0 verificados, 26 de 31 propiedades inexistentes, 0 de 81 comunicaciones,
  0 de 4 dashboards), la convención de IDs de fuente y la ubicación de credenciales.
- `PENDIENTES.md` · `MANTENIMIENTO.md` — no existían.
- `.claude/skills/` — `/nueva-pagina`, `/actualizar`, `/documentar`, `/auditoria`.
- `scripts/verificar-enlaces.ps1` — valida wikilinks contra toda la bóveda.
- `.claude/settings.json` — `additionalDirectories` a las 4 carpetas fuente del cliente.
- 3 plantillas nuevas en `99 Plantillas/`: pieza técnica, campaña de pauta, brief de contenido.

**Limpieza**

- **`.git` eliminado.** Había un `.git` **vacío** en `Monific/`: cero commits, cero refs, sin remoto.
  Era la cáscara que deja Drive al intentar sincronizar un repo, que es justo el problema que el
  contrato advierte. No se perdió historial porque no había ninguno.

**Verificado y sin hueco**

- Las minutas de la wiki llegan al **2026-08-07**, más allá de la transcripción más reciente de la
  carpeta `Monific - Meetings` de Drive (**2026-06-19**). **No hay sesiones sin documentar** por ese
  lado: las fuentes posteriores entraron por `Adicionales/` y correos.

**Hueco que sí queda abierto y es el que más pesa**

No hay **guía de voz y tono del cliente**. El entregable B08 son **81 comunicaciones** y **ninguna
está publicada**; redactarlas sin guía de voz obliga a improvisar el tono de Monific. El vocabulario
controlado de `AGENTS.md` §12 no lo sustituye. Registrado en `PENDIENTES.md`.

**Desviación deliberada del contrato de wiki de cliente:** los enlaces siguen siendo wikilinks, no
enlaces markdown, por `adr-004-boveda-raiz` de la Wiki general. Documentado en `AGENTS.md` §4.

## [2026-08-07] ingesta | Construcción inicial de la wiki a partir de ~100 fuentes

**Qué se hizo**

- Se extrajo texto plano de todas las fuentes disponibles en `Wiki Monific/`, `Adicionales/` y `outputs/`:
  - 65 `.docx` + 3 `.txt` → IDs `D001`–`D197` (solo se conservaron los relevantes; se descartó ruido de `node_modules`).
  - 21 de 24 `.xlsx/.xlsm` → IDs `X001`–`X024`.
  - 13 de 22 `.pdf` → IDs `P_*`.
- Extracción hecha con PowerShell: descompresión de `word/document.xml` para los `.docx`, y COM de Office (Excel/Word) para hojas de cálculo y PDF. No hay Python ni Node en este equipo.
- Se creó la estructura de carpetas `00 Inicio` … `99 Plantillas`.
- Se escribió `CLAUDE.md` (esquema), `AGENTS.md`, `LEEME.md`, `index.md`, este `log.md` y las tres plantillas.
- Se poblaron las páginas de las 8 secciones temáticas.

**Fuentes ancla usadas para el núcleo de la wiki**

| ID | Documento | Por qué es ancla |
|---|---|---|
| `D167` | Maestro Operativo de Procesos y Workflows (corte 2026-07-31) | Documento más reciente y completo; consolida los 4 masters, el inventario de HubSpot y las decisiones canónicas de Inversionistas |
| `X018` | Documento API de Integración Unificado | Contrato técnico: mapeo de propiedades + 30 reglas de negocio |
| `X020` | Requerimiento Formal BNO (corte 2026-06-18) | Cifras oficiales del conflicto y bloques B01–B16 |
| `X002` | Matriz Única de Hallazgos (corte 2026-06-18) | 284 hallazgos + verificación por API |
| `P_ANEXO` | Anexo A — Resumen Ejecutivo / Plan BOOST | Alcance contractual |
| `P_CONTRATO` | Contrato Monific–B&O (2026-01-05) | Términos legales |
| `D193` | Brief de Necesidades | Objetivos originales del cliente |
| `D195` | Entregables pendientes del 26 de enero | Diseño de formulario, cobranza y SLAs |

**Problemas encontrados en la extracción**

- 🔴 3 archivos Excel no se pudieron abrir (posible protección o corrupción): `04. Tracker Matriz Comunicaciones.xlsx` (dos copias) y `Master_Cobranza_reparado_temporal.xlsx`.
- 🔴 Los **Flujogramas 01–04** en PDF no rindieron texto: son imágenes vectoriales/rasterizadas. Su contenido está cubierto indirectamente por los masters y `D167`, pero no se leyeron directamente.
- 🔴 `SLA B&O a Monific.pdf`, `Monific Kick Off 2026.pdf` y los 4 flujogramas antiguos rindieron texto vacío (documentos basados en imagen). **Hueco de conocimiento pendiente.**
- ⚠️ `Monific-HubSpot-Integracion-Tecnica.pdf` colgaba a Word repetidamente; se logró extraer al aislarlo en un proceso con timeout.

**Contradicciones detectadas y registradas**

Ver [[Contradicciones y Verificaciones]]. Las principales: conteo de workflows (64 canónicos vs 96 en portal vs 70 auditados), estado real vs declarado de propiedades (26 de 31 no existen), el objeto de Cobranza (masters lo tratan como objeto personalizado; la API confirma que no existe y la decisión vigente es usar Tickets), y los nombres de varias personas mal transcritos.

**Resultado**

56 páginas de contenido + 3 plantillas + 5 archivos de control. 106 extractos de fuente. 20 contradicciones registradas, 25 preguntas abiertas, 7 datos por verificar y 10 huecos de conocimiento documentados.

---

## [2026-08-07] lint | Primera revisión de salud

**Qué se revisó:** enlaces rotos, páginas huérfanas, frontmatter y densidad de enlaces.

| Chequeo | Resultado |
|---|---|
| Enlaces rotos | ✅ Ninguno real. Los detectados están dentro de bloques de código o comillas en `CLAUDE.md` y las plantillas — no generan nodos fantasma en Obsidian |
| Páginas huérfanas | ✅ Ninguna. Los archivos de control (`CLAUDE`, `AGENTS`, `LEEME`, `log`) quedaron enlazados desde `index.md` |
| Frontmatter | ✅ Completo en las 56 páginas de contenido. Los 4 archivos de control no lo llevan **por diseño** |
| Páginas más enlazadas | [[Contradicciones y Verificaciones]] (46) · [[Conflicto Contractual]] (27) · [[Higiene y Accesos]] (27) · [[Proceso Comercial Solicitantes]] (25) · [[Proceso de Cobranza]] (23) |

**Lectura:** que la página más enlazada sea la de contradicciones confirma el diagnóstico — el problema central del proyecto no es de conocimiento, es de **verificación**.

**Recomendaciones para la próxima sesión**

1. Cerrar el hueco **H-01**: el `SLA B&O a Monific.pdf` no se pudo leer y es un documento contractual.
2. Ingerir `D189`/`D190` (312k caracteres de correos): pueden contener la respuesta de B&O al requerimiento y compromisos no registrados.
3. Ingerir `D196` (REPORTES MONIFIC – HUBSPOT) y contrastarlo contra el portal.
4. Ver los flujogramas como imagen y describirlos, ya que no rinden texto.
5. Pedir a Monific el `04. Tracker Matriz Comunicaciones.xlsx` sin protección.

---

## [2026-08-07] ingesta | Correspondencia completa Monific × B&O (100 correos)

**Origen:** el usuario pidió verificar la wiki contra el correo de trabajo. **No fue posible conectarse al buzón** —el Outlook local solo tiene una cuenta personal y no hay conector de email en la sesión—, así que se procesó la fuente equivalente que ya estaba en el proyecto: `D190` / `D189`, el intercambio de correos que Monific recopiló como evidencia. Cierra el hueco **H-07**.

**Alcance de la fuente:** 100 correos, **2025-10-23 → 2026-06-29**. Export desde el buzón de Raquel Alfie.

### Correcciones de fondo

| Qué decía la wiki | Qué dicen los correos |
|---|---|
| El contrato se firmó el **2026-01-05** | El 5 de enero es la **fecha del documento**; la firma vía DocuSign ocurrió el **19–20 de enero**. El kickoff (7-ene) fue **antes** de firmar |
| *"No hay evidencia de que B&O haya entregado el plan correctivo"* | ❌ **Falso.** Roberta acusó el **18-jun a las 13:53** (2 h después) y Emmanuel entregó plan + Gantt el **24-jun**, un día antes del plazo, reportando **~160 puntos atendidos** |
| B&O abandonó la integración unilateralmente el 8-jun | La causa fue una **auditoría de la CNBV**: Monific debía certificar el acceso a terceros. Pidió accesos el 7-may, se los negaron el 8-may, y el 27-may consta *"la integración sigue bloqueada por auditoría de la CNBV"* |
| La integración nunca funcionó | **Sí funcionó desde el 2026-03-09**: TI de Monific arregló la sincronización y resincronizó con corte al 8-mar. Lo pendiente es la ampliación a Tickets y Proyecto |
| El proyecto arranca en dic-2025 | La venta arranca el **2025-10-23**; Monific aprueba presupuesto el **19-nov** |

### Contradicciones resueltas

- **C-15** ✅ *Fulmentfi* es el **dominio de ARI Abogados**. Contactos: Francisco Rodríguez (direccion@fulmentfi.com) y Evelyn Montes (emontes@fulmentfi.com).
- **C-17** ✅ *Leticia* es de **Black & Orange** (leticia@black-n-orange.com, recibió el acceso de partner).
- **C-19** ✅ Fecha de firma real: 19–20 de enero de 2026.

### Contradicciones nuevas

- **C-21** 🔴 Interés moratorio: `D195` dice 38 % anual; la **Directora de Finanzas** dice *"dos veces la tasa ordinaria, sin excepción"* (2026-03-05).
- **C-22** 🔴 Aforo: 1.5 : 1 en `D195` vs. **2 : 1** según Karen Gómez y Raquel (2026-04-17).
- **C-23** 🔴 La validación **PLD quedó excluida del pipeline de Inversionistas** por decisión explícita de Raquel, pese a que Emiliano la pidió.
- **C-24** 🔴 *Tipo de instrumento*: el Director Legal pidió valores distintos y selección múltiple, y **eliminar** tres propiedades que el master conserva como obligatorias.
- **C-25** 🔴 La propiedad canónica es **"Resultado pre-evaluación"** con **cuatro** valores (incluye *Pendiente de información*), no tres.
- **C-26** 🔴 Sí hubo integración operativa desde marzo de 2026.

### Otros hallazgos

- **Método de auditoría, con precisión:** Raquel usó *"una extensión de Claude in Chrome"* más revisión manual parcial. El primer borrador traía **163 hallazgos** que ella depuró a 112. Lo envió explícitamente como *"mapa de trabajo, no dictamen cerrado"*, advirtiendo que podía haber **falsos positivos** y reconociendo *"avances importantes"*. Un mes después esos hallazgos sostienen un requerimiento contractual — el cambio de estatus del documento no se discutió por escrito.
- **Las seis decisiones formales de Monific del 2026-06-10** (scoring, propiedad maestra, fallback de propietario, remitente estándar, "Legal" ≠ ARI, plantillas) anteceden a lo que se cerró el 27-jul.
- **Los flujogramas viven en Miro** (`miro.com/app/board/uXjVG7nRR_I=`) — mitiga el hueco H-02.
- **Personas nuevas:** Ana Gabriela Meneses y Eduard Garcia (B&O), Cyntia (Legal/PLD Monific), el equipo de TI completo (6 personas), y Karen Gómez identificada como **Directora de RH y Operaciones**.
- **Tensión económica anticipada:** Raquel exigió el corte de horas el **2026-06-09**, nueve días antes del requerimiento formal, y declaró que **no autorizaría costos adicionales** sin conciliación previa.

### Páginas tocadas

[[Correspondencia]] *(nueva)* · [[Cronologia del Proyecto]] · [[Conflicto Contractual]] · [[Contradicciones y Verificaciones]] · [[Directorio de Contactos]] · [[Auditorias]] · [[Riesgos]] · [[Integracion Admin Monific HubSpot]] · [[Preguntas Abiertas]] · [[Indice de Fuentes]] · [[Mapa General]] · `index.md`

### Huecos que quedan y solo se cierran con acceso al buzón

| ID | Hueco |
|---|---|
| **H-11** | 🔴 Correos de **julio y agosto de 2026** — plan correctivo definitivo, Gantt v2, homologación de masters, sesión con TI |
| **H-12** | 🔴 Conversaciones de **WhatsApp** del grupo del proyecto |
| **H-13** | 🔴 La **respuesta punto por punto de B&O a los 217 pendientes** |

---

---

## [2026-08-11] ingesta | `D198` y `P_RESCIERRE` — el análisis de cierre del 2026-08-03

**Origen**

Lint de la wiki a petición del humano. La revisión estructural salió limpia (0 enlaces rotos, 0 huérfanas, 57/57 páginas en `index.md`, frontmatter completo, 106/106 extractos citados), pero detectó **una fuente nunca ingerida**: `Adicionales/auditoria final/Monific-Auditoria.zip`. El barrido del 2026-08-07 recorrió `Wiki Monific/`, `Adicionales/` y `outputs/` pero **no descomprimió los `.zip`**.

**Qué se extrajo**

| ID | Documento | Método |
|---|---|---|
| `D198` | HISTORIAL_Y_CONTEXTO_CIERRE_MONIFIC_BNO_2026-08-03.md (42,528 bytes, 675 líneas) | Copia directa — ya era Markdown |
| `P_RESCIERRE` | RESUMEN_EJECUTIVO_CIERRE_MONIFIC_BNO_2026-08-03.pdf (249,122 bytes) | Extraído del `_resumen_ejecutivo.html` acompañante con `perl -0777`, no del PDF |

Ambos del **2026-08-03**, por Emmanuel Chulin. Son **posteriores a `D167`** (Maestro Operativo, 2026-07-31), que hasta hoy era la fuente ancla más reciente.

**Hallazgos que cambian la lectura del proyecto**

1. ⭐ **Clasificación de los 70 pendientes por naturaleza.** De los 29 rojos, B&O sostiene que **~10 son defectos de configuración propios**; 15 están bloqueados por definición de Monific, 12 son construcción nueva fuera del alcance, 9 son limitación de plataforma, 6 son rojos sin defecto probado y 4 son homologación cosmética. Es la tesis central del cierre y está **sin validar por el cliente**.
2. 🔴 **Seis rojos no acreditan defecto:** WF-051/052/060 solo "no localizados", WF-035 ya resuelto según la propia auditoría, WF-039 con contradicción interna, y tres hallazgos marcados "(tentativo)".
3. 🔴 **32 workflows del portal sin mapear** (96 − 64). La wiki decía "~26".
4. 🔴 **La matriz de comunicación es especificación, no evidencia:** 77 de 81 en estado "Crear", cero apariciones de `WF-`, cero IDs de asset, cero menciones de consentimiento, ninguna pieza UNE.
5. 🔴 **Tres defectos internos de la matriz:** triggers de INV-008 a INV-014 corridos una fila (mal en 2 de 3 lugares), canal inconsistente en 6 piezas, ~14 tokens de namespaces inexistentes.
6. 🔴 **Cuatro conflictos** entre la matriz y las decisiones canónicas del 31-jul.
7. ⭐ **Servicio/ATC es el único proceso sin rojos** y B&O lo propone como primer bloque a cerrar con evidencia.
8. 🔴 **No existe minuta de la sesión del 2026-08-03**, que sí ocurrió según este documento.

**Páginas tocadas**

- **Nueva:** `07 Estado/Analisis de Cierre BNO.md` — la clasificación, los 10 defectos, los 6 rojos sin defecto, las 11 correcciones y los 12 puntos de decisión.
- [[Matriz de Comunicaciones]] — tres secciones nuevas: qué resuelve y qué no, los tres defectos internos, los cuatro conflictos con las decisiones canónicas. Más la cadena ARI COB-030 a COB-033.
- [[Workflows]] — los 32 sin mapear, la tabla de nombres desalineados, la advertencia sobre los rojos sin defecto y las fichas sin regla verificable.
- [[Contradicciones y Verificaciones]] — **C-27 a C-30** nuevas. C-07 precisada de ~26 a 32.
- [[Preguntas Abiertas]] — **P-29 a P-35** nuevas, **H-14** nuevo, V-04 precisada.
- [[Gobernanza y Rituales]] — el formato de siete campos de evidencia y el código de color azul/amarillo.
- [[Cronologia del Proyecto]] · [[Estado Actual]] · [[Proceso de Servicio ATC]] · [[Indice de Fuentes]] · [[Mapa General]] · `index.md`.

**Lección para el esquema**

`CLAUDE.md` §6.1 y [[Indice de Fuentes]] ahora advierten que **los `.zip` también son fuentes** y hay que descomprimirlos antes de inventariar. También queda registrado que, cuando un PDF viene con su HTML de origen, conviene extraer del HTML.

**Pendiente de decisión del humano**

La clasificación de `D198` es **postura de B&O, no acuerdo**. Si Monific la validó o la rechazó en la sesión del 3-ago, esa fuente no está en la wiki y cambiaría el estado de siete páginas.
