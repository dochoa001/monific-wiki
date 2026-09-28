# Wiki de Monific — instrucciones canónicas para agentes

**Estructura v1.0 — 2026-08-20** · misma versión registrada en `cliente.yaml`

Este es el **archivo canónico** de esta wiki: el contrato de trabajo entre cualquier agente y estas
páginas. Lo leen de forma nativa Codex, Cursor, Copilot y otros. `CLAUDE.md` solo lo importa y añade
lo específico de Claude Code. **No dupliques nada entre los dos.**

Léelo completo **antes** de leer, escribir o modificar cualquier página. Aplica igual a Claude Code,
Codex, ChatGPT, Gemini o cualquier agente: no hay instrucciones distintas por modelo.

---

## 1. Qué es esta wiki y para quién

Base de conocimiento viva sobre el proyecto **BOOST** (implementación de HubSpot) que **Black &
Orange (B&O)** ejecuta para **Monific**, una Institución de Financiamiento Colectivo mexicana
regulada por la **CNBV**.

No es un repositorio de archivos. Es una **síntesis interconectada y mantenida** que sustituye la
consulta dispersa de ~100 documentos originales (minutas, masters de implementación, auditorías,
contratos, correos).

**Objetivo de uso:** que cualquier persona o IA obtenga en minutos el contexto completo del cliente,
sus procesos, lo implementado, lo pendiente y lo que está en disputa — sin abrir un solo archivo fuente.

**Dónde vive:** dentro del Google Drive del cliente, sincronizado con Drive para escritorio. Es a la
vez el vault de Obsidian del equipo. La bóveda es la raíz `Black and Orange/`, no esta carpeta — §4.

**Doble audiencia:** el equipo de B&O, que la consulta en Obsidian, y los **agentes de IA**, que la
usan como contexto para construir cosas nuevas (workflows, integraciones, propiedades, comunicaciones).

### Las tres capas

| Capa | Dónde vive | Quién la modifica |
|---|---|---|
| **Fuentes crudas** | `drive-download-*/`, `*.xlsx`, `*.pdf` en la raíz, y `08 Fuentes/_extractos/*.txt` | **Nadie.** Son inmutables. Solo se leen |
| **Wiki** | Carpetas `00 Inicio/` … `99 Plantillas/` | El agente. El humano lee, dirige y corrige |
| **Esquema** | `AGENTS.md`, `cliente.yaml`, `CLAUDE.md` | Humano y agente en conjunto, deliberadamente |

---

## 2. Orden de lectura para agentes

No leas la wiki completa. En este orden tienes el contexto suficiente para trabajar:

1. **`cliente.yaml`** — datos canónicos: portal `48427391`, dominios, objetos, cifras de avance.
2. **`index.md`** — el mapa maestro: el 100 % de las páginas con su ruta y una línea de descripción.
3. **[[Mapa General]]** y **[[Resumen Ejecutivo]]** — quién es el cliente y dónde está el proyecto.
4. **La sección relevante a tu tarea** (ver §5).
5. **Últimas entradas de `log.md`** — qué cambió y por qué.

Complementos según el caso: `PENDIENTES.md`, [[Estado Actual]], [[Pendientes Criticos]],
[[Contradicciones y Verificaciones]].

---

## 3. Reglas no negociables

1. **Nunca modifiques las fuentes crudas.** Ni los `drive-download-*`, ni los `.xlsx/.pdf/.docx`, ni
   los `_extractos/*.txt`.
2. **Toda afirmación lleva fuente.** Cada página termina con `## Fuentes` listando los IDs de extracto
   (`D167`, `X020`, `P_CONTRATO`…). **Si no puedes citar, no lo escribas.**
3. **Distingue hecho de suposición.** Usa los marcadores de confianza (§7).
4. **Configurado ≠ verificado.** Que un workflow exista o esté encendido en HubSpot **no** significa
   que funcione. Solo se marca verificado con **caso reproducible + validación escrita de Monific**.
   Esta regla viene del propio proyecto y gobierna toda la wiki.
5. **Las contradicciones se registran, no se resuelven a la fuerza.** Van a
   [[Contradicciones y Verificaciones]] con ambas versiones, sus fuentes y sus fechas. Gana el
   documento más reciente **solo si** es explícitamente sustitutivo.
6. **Fechas absolutas siempre.** `2026-08-07`, nunca "la semana pasada".
7. **No inventes** nombres internos de propiedades, IDs de workflow ni endpoints. Si no está en una
   fuente, escribe `[pendiente de confirmar]` y regístralo en `PENDIENTES.md`.
8. **Actualiza `index.md` y `log.md` en cada sesión que toque la wiki.** Sin excepción.
9. **Español neutro.** Es el idioma del cliente y de todas las fuentes.
10. **Los datos sensibles no se copian a la wiki.** Las claves viven en
    `http://127.0.0.1:8787/Monific/ (proxy local; las claves ya no viven en el proyecto)`. Nunca pegues tokens, claves ni credenciales en una página.
11. **No inicialices git aquí.** Esta carpeta vive en Google Drive y sincronizar `.git` genera copias
    de conflicto. El historial lo cubren el versionado nativo de Drive y `log.md`.
12. **No contradigas `cliente.yaml`.** Es la fuente de verdad de los datos canónicos. Si un dato
    cambia, se actualiza **ahí primero**.

---

## 4. Enlaces — wikilinks, por ADR-004

> ⚠️ **Desviación deliberada del prompt de wiki de cliente.** Ese prompt pide enlaces markdown
> relativos y prohíbe wikilinks. Aquí **gana el ADR-004 de la Wiki general** (2026-08-12): la bóveda
> de Obsidian es la raíz `Black and Orange/` y los enlaces son wikilinks. Con enlaces markdown, los
> cruces entre la wiki de agencia y las de cuenta quedaban invisibles en el grafo y sus roturas
> fallaban en silencio.

- **Dentro de esta wiki:** wikilink corto, sin ruta y sin `.md` → `[[Proceso de Cobranza]]`. Los
  nombres de archivo **son únicos en toda la wiki**, así el enlace corto resuelve.
- **Hacia otra wiki de la bóveda:** wikilink con ruta completa desde la raíz y alias legible →
  `[[<Cuenta>/<carpeta-wiki>/<pagina>|<pagina> · <Cuenta>]]`.
- Antes de crear una página, **verifica que el nombre sea único en toda la bóveda**.
- Un `[[enlace]]` hacia una página que aún no existe es una nota de trabajo válida — pero úsalo con
  intención, no por descuido.

---

## 5. Estructura de carpetas

```
Wiki Monific/
├── AGENTS.md              ← este archivo, canónico para cualquier agente
├── CLAUDE.md              ← @AGENTS.md + las skills de Claude Code
├── cliente.yaml           ← ficha maestra machine-readable
├── LEEME.md               ← guía para humanos
├── index.md               ← MAPA MAESTRO: todas las páginas con ruta y descripción
├── log.md                 ← bitácora, más reciente arriba
├── PENDIENTES.md          ← información faltante o por confirmar
├── MANTENIMIENTO.md       ← rutinas, Obsidian y trabajo en equipo sobre Drive
├── scripts/               ← verificar-enlaces.ps1
├── .claude/skills/        ← nueva-pagina · actualizar · documentar · auditoria · sincronizar
│
├── 00 Inicio/             Mapa general, resumen ejecutivo, glosario
├── 01 Cliente/            Quién es Monific: negocio, personas objetivo, regulación, stack
├── 02 Proyecto/           BOOST: contrato, alcance, cronología, gobernanza, conflicto
├── 03 Personas/           Directorio, equipos, roles operativos, fichas individuales
├── 04 Procesos/           Los 5 procesos de negocio + SLAs + comunicaciones
├── 05 HubSpot/            Qué está construido: pipelines, workflows, propiedades, dashboards
├── 06 Integracion/        Admin Monific ↔ HubSpot: reglas API, diccionario, sistemas externos
├── 07 Estado/             Dónde estamos: auditorías, pendientes, riesgos, contradicciones
├── 08 Fuentes/            Índice de fuentes + extractos de texto plano (_extractos/)
└── 99 Plantillas/         Plantillas para páginas nuevas
```

`index.md` es el **MOC principal**; [[Mapa General]] y los índices de cada área son los **sub-MOCs**.

---

## 6. Anatomía de una página

```markdown
---
titulo: Proceso de Cobranza
tipo: proceso            # proceso | entidad | persona | concepto | fuente | estado | indice
area: cobranza           # comercial | cobranza | servicio | une | integracion | transversal
estado: en-riesgo        # verificado | en-progreso | en-riesgo | bloqueado | historico
confianza: media         # alta | media | baja
actualizado: 2026-08-20
fuentes: [D167, X011, D195]
tags: [cobranza, hubspot, tickets]
aliases: []              # solo si el tema se conoce por otros nombres
responsable:             # OPCIONAL — persona de MONIFIC dueña del tema, no de B&O
---

# Proceso de Cobranza

> **En una frase:** qué es esto y por qué importa.

## Contenido de la página
...

## Relacionado
- [[Nombre exacto de otra página]] — por qué se relaciona

## Fuentes
- `D167` — Maestro Operativo de Procesos y Workflows (2026-07-31)
- `X011` — Master de Implementación Cobranza
```

El frontmatter YAML es lo que hace que **Dataview** funcione. Respétalo siempre.

**Contrato común de las wikis de B&O:** las claves `titulo`, `tags`, `actualizado`, `estado` y
`fuentes` son obligatorias en las 8 wikis. `aliases` se rellena **cuando el tema tiene otros
nombres** — un array vacío en cada página es ruido, no información. `tipo`, `area` y `confianza` son
propias de Monific. `responsable` es **opcional y con semántica de cliente**: el responsable del
engagement por parte de B&O está en `cliente.yaml` (`engagement.responsable_bno`), no repetido en
cada página.

> La sección de cierre se llama **`## Relacionado`** en las 8 wikis. Las páginas que todavía usan
> `## Enlaces relacionados` se van migrando al tocarlas.

---

## 7. Marcadores de confianza

Se usan **inline**, junto a la afirmación, no al final del párrafo:

| Marcador | Significado |
|---|---|
| ✅ **Verificado** | Confirmado en HubSpot por API/export **y** validado por escrito por Monific |
| 🟡 **Documentado** | Está en un master, minuta o entregable, pero sin prueba reproducible |
| 🔵 **Declarado** | Alguien del equipo dijo que está hecho, **sin documento, export ni URL**. Cita una fuente `V_` del [[Indice de Fuentes]] con quién lo dijo y cuándo. **No cierra ningún bloque**: registra el avance para que la wiki no quede desactualizada mientras llega el respaldo |
| 🔴 **Con problema** | Contradicción, bug, ausencia o configuración riesgosa acreditada |
| ⚠️ **Sin confirmar** | Aparece en una sola fuente, probablemente redactada con IA. Trátalo con pinzas |
| ❓ **Contradicción** | Dos fuentes se contradicen. Debe estar en [[Contradicciones y Verificaciones]] |

Son los mismos códigos que usa el proyecto real (ver [[Estado Actual]]), para que la wiki hable el
idioma del cliente.

---

## 8. Taxonomía de tags — cerrada

Máximo ~15. Antes de usar uno nuevo, **decláralo aquí**; si no está, no existe. `kebab-case`,
singular, sin acentos, sin `#`.

`hubspot` · `pipeline` · `propiedades` · `workflow` · `integracion` · `api` · `cobranza` ·
`comercial` · `servicio` · `une` · `capacitacion` · `contrato` · `auditoria` · `estado` · `fuentes`

Modificadores admitidos junto a los anteriores: `bloqueante` · `riesgo-regulatorio` · `indice`.

---

## 9. Interconexión — cero notas huérfanas

- Toda página necesita **al menos un enlace entrante y uno saliente**. Sin enlaces entrantes es un bug.
- Al crear una página, enlázala desde el índice de su área **y** desde [[index]].
- `## Relacionado` con 2–5 enlaces, **cada uno con una línea que explique la relación**.
- **Enlace contextual:** la primera vez que una página menciona algo documentado en otra, enlázalo
  ahí mismo en el texto.
- **Un hecho, un lugar.** Si un dato vive en dos páginas, una lo tiene y la otra lo enlaza.

Verifica con `scripts/verificar-enlaces.ps1`.

---

## 10. Operaciones

### 10.1 Ingesta — llega una fuente nueva

1. **Extrae el texto** a `08 Fuentes/_extractos/` con un ID nuevo (`D###` docx/txt, `X###` Excel,
   `P_###` PDF). En este entorno **no hay Python ni Node**: usa **PowerShell + COM de Office**
   (Word/Excel) o descomprime el `.docx` y limpia el XML. Los scripts que funcionaron están descritos
   en [[Indice de Fuentes]].
   ⚠️ **Descomprime los `.zip` antes de inventariar.** Un `.zip` en `01. Adicionales/` escondió `D198`
   —la fuente más reciente del proyecto— durante cuatro días.
2. **Lee el extracto completo** antes de escribir nada.
3. **Discute los hallazgos con el humano** antes de reescribir páginas maestras. No hagas cambios
   grandes en silencio.
4. **Actualiza las páginas afectadas** (una fuente típica toca de 3 a 10). Añade el ID al array
   `fuentes:` y actualiza `actualizado:`.
5. **Registra contradicciones nuevas** en [[Contradicciones y Verificaciones]].
6. **Añade la fuente** a [[Indice de Fuentes]].
7. **Sincroniza `cliente.yaml`** si cambió un dato canónico.
8. **Actualiza `index.md`** con páginas nuevas o renombradas, y limpia `PENDIENTES.md`.
9. **Añade una entrada a `log.md`**, arriba.

**Documentos nativos de Google** (`.gdoc`/`.gsheet`): el archivo local solo contiene la URL y el ID,
no el texto. Léelos por el **MCP de Google Drive** extrayendo el ID. Si no hay vía API, lístalos en
`PENDIENTES.md` pidiendo su exportación.

**Grabaciones de audio o video:** no intentes transcribirlas. Trabaja con sus transcripciones en texto
y en la wiki referencia la grabación por nombre y ubicación.

### 10.2 Consulta — el humano pregunta algo

1. Lee `index.md` primero. Localiza las páginas candidatas.
2. Lee esas páginas. Solo baja a `_extractos/` si la wiki no alcanza — y si eso pasa, **es señal de
   que falta una página**: créala.
3. Responde **con citas** a páginas (`[[Página]]`) y a IDs de fuente.
4. **Si la respuesta tiene valor duradero, archívala como página nueva.** Una comparación, un
   análisis, una tabla que costó trabajo: no la dejes morir en el chat.

### 10.3 Lint — revisión de salud

Corre `scripts/verificar-enlaces.ps1` y luego revisa:

- **Enlaces rotos** y **huérfanas** (excepto `index.md` y los MOC).
- **Rancio:** `actualizado:` con más de 60 días en páginas de `07 Estado/`, o más de 90 en el resto.
- **Contradicciones no registradas.**
- **Conceptos sin página:** términos que aparecen en 3+ páginas y no tienen la suya.
- **Frontmatter inválido** o tags fuera de §8.
- **Datos que contradigan `cliente.yaml`.**
- **Copias de conflicto de Drive** y cualquier `.git` en el árbol.
- **Huecos de datos** conocidos (p. ej. flujogramas 01–04 nunca extraídos).

Entrega el resultado como lista priorizada y **pregunta antes de corregir en masa**.

### 10.4 Archivar como obsoleto

**No se borra historial.** Se marca `estado: historico`, se añade al inicio una nota de qué la
reemplaza y se enlaza la página vigente. Se retira de los índices activos pero se conserva en
[[index]].

### 10.5 Documentar una pieza recién construida — ciclo cerrado

Si construyes o modificas algo para Monific —workflow, propiedad, comunicación, dashboard,
integración— **antes de dar la tarea por terminada**:

1. Página desde [[Plantilla Pagina]] o la plantilla de pieza técnica según el tipo.
2. IDs y nombres internos exactos **en tabla**: portal ID, ID del workflow, `internal name` de
   propiedades y objetos, object type ID, IDs de pipeline y etapas, endpoints, scopes y **nombres**
   de variables de entorno.
3. Marca la confianza con el código de §7. Recuerda: **configurado ≠ verificado**.
4. Enlázala en los MOCs, actualiza [[index]] y registra en `log.md`.

---

## 11. Convenciones de escritura

- **Enlaza generosamente**, con intención.
- **Densidad sobre extensión.** Tablas antes que párrafos. Bullets antes que prosa. El lector es un
  LLM o alguien con prisa.
- **Números y fechas explícitos.** "217 pendientes exigibles al 2026-06-18", no "muchos pendientes".
- **Sin marketing.** Esta wiki describe la realidad del proyecto, incluida la incómoda.
- **Diagramas en Mermaid** cuando un flujo lo pida. Obsidian los renderiza nativo.
- Nombres de archivo: evita `/ \ : * ? " < > |`, que rompen en Drive y en Windows.

---

## 12. Vocabulario controlado

Usa siempre estos términos. Están definidos en [[Glosario]] y en `cliente.yaml`.

| Usar | No usar |
|---|---|
| Monific | el cliente, MoneyTick |
| Black & Orange (B&O) | BNO en prosa (sí en citas literales de Monific) |
| Solicitante | acreditado, deudor, desarrollador (salvo cita) |
| Inversionista | usuario, cliente |
| Admin Monific | ERP, backend, admin.monific |
| Negocio | Deal (salvo en contexto de API) |
| Ticket | caso |
| Proyecto (objeto HubSpot) | Edificio, campaña padre, Deal padre |
| Campaña | tramo, fondeo |

---

## 13. Advertencia crítica sobre la calidad de las fuentes

Buena parte de la documentación original **fue redactada por el cliente con ayuda de IA**. Hay páginas
enteras con datos plausibles pero falsos. Señales detectadas:

- Cifras que no cuadran entre documentos (workflows, propiedades, hallazgos).
- Nombres de propiedades que "existen" en un master y no existen en HubSpot: **26 de 31 verificadas
  por API no existían**.
- Estados "Implementado" en masters que la API contradice.
- Nombres de personas mal transcritos por reconocimiento de voz (Manuel/Emmanuel, Memo/Guillermo,
  Yasmin/Jazmín).
- Al menos dos masters contenían **plantilla de otro cliente** (hallazgo B12).

**Regla:** ante dos fuentes que se contradicen, prevalece la que tenga **evidencia técnica directa**
(export/API de HubSpot) sobre la declarativa (master, minuta, correo). Y **ambas quedan registradas**.

---

## 14. Regla fija

Todo cambio actualiza **cuatro cosas**: el campo `actualizado:` de las páginas tocadas, los MOCs
afectados, [[index]] y `log.md`. Sin excepción.
