# Cómo usar la Wiki Monific

Guía para humanos. Si eres un LLM, tu documento es [`CLAUDE.md`](./CLAUDE.md).

---

## Qué es esto

Una base de conocimiento en Markdown sobre el proyecto **BOOST** (Monific × Black & Orange). Sustituye la consulta de ~100 documentos dispersos: minutas, masters de implementación, auditorías, contratos y correos.

Está pensada para dos usos:

1. **Contexto de IA.** Pegar una página (o la wiki entera) en cualquier LLM para que entienda el proyecto sin explicárselo.
2. **Consulta humana en Obsidian.** Navegar por enlaces, ver el grafo, encontrar la respuesta rápido.

---

## Cómo abrirla en Obsidian

1. Obsidian → **Abrir carpeta como bóveda** → selecciona `Wiki Monific`.
2. Empieza por **[[Mapa General]]** (`00 Inicio/`).
3. Activa la **vista de grafo** para ver cómo se conecta todo.

### Plugins recomendados

| Plugin | Para qué |
|---|---|
| **Dataview** | Tablas dinámicas a partir del frontmatter (`estado`, `area`, `actualizado`). Ver ejemplos en [[Mapa General]]. |
| **Templater** o Plantillas nativas | Usar `99 Plantillas/` al crear páginas. |
| **Mermaid** (nativo) | Los diagramas de flujo ya se renderizan sin instalar nada. |

---

## Por dónde empezar según lo que necesites

| Necesito… | Ve a |
|---|---|
| Entender el proyecto en 5 minutos | [[Resumen Ejecutivo]] |
| Ver todo lo que hay | [[index]] |
| Saber qué es Monific y cómo gana dinero | [[Monific]] · [[Modelo de Negocio]] |
| Entender un proceso de negocio | `04 Procesos/` |
| Saber qué está construido en HubSpot | `05 HubSpot/` |
| Entender la integración con el Admin | [[Integracion Admin Monific HubSpot]] |
| Saber en qué punto está el proyecto | [[Estado Actual]] · [[Pendientes Criticos]] |
| Entender el conflicto con el cliente | [[Conflicto Contractual]] |
| Saber quién es quién | [[Directorio de Contactos]] |
| Ver qué datos no son de fiar | [[Contradicciones y Verificaciones]] |
| Encontrar el documento original de algo | [[Indice de Fuentes]] |

---

## Cómo se mantiene viva

La wiki la escribe la IA; tú la diriges. Tres operaciones:

### 1. Ingesta — llegó un documento nuevo

Deja el archivo en la carpeta y dile al agente:

> «Ingesta este documento a la wiki: <ruta>. Sigue el flujo de CLAUDE.md §6.1.»

El agente extrae el texto, lo lee, actualiza las páginas afectadas, registra contradicciones nuevas y anota en `log.md`.

### 2. Consulta — tienes una pregunta

> «Según la wiki, ¿cuál es el estado real de los workflows de cobranza y qué falta para cerrarlos?»

Si la respuesta es valiosa, pídele que la archive:

> «Guarda eso como página nueva en 07 Estado/.»

### 3. Lint — revisión de salud

Cada pocas semanas:

> «Corre un lint de la wiki según CLAUDE.md §6.3.»

Devuelve enlaces rotos, páginas huérfanas, contenido rancio, contradicciones sin registrar y conceptos que merecen su propia página.

---

## Reglas que conviene que conozcas

- **Las fuentes crudas no se tocan.** Los `drive-download-*`, los `.xlsx`, los `.pdf` y los `08 Fuentes/_extractos/*.txt` son inmutables. La IA solo lee de ahí.
- **Configurado ≠ verificado.** La wiki hereda el criterio del proyecto: que algo exista en HubSpot no prueba que funcione.
- **Mucha documentación original se hizo con IA** y contiene datos alucinados. Por eso cada afirmación lleva marcador de confianza (✅ 🟡 🔴 ⚠️ ❓) y su fuente.
- **Cada página cita sus fuentes** con IDs (`D167`, `X020`, `P_CONTRATO`) que resuelves en [[Indice de Fuentes]].

---

## Sugerencia de orden (opcional)

Las carpetas `drive-download-*` en la raíz funcionan pero ensucian la bóveda. Si quieres, puedes moverlas todas a una sola carpeta `_originales/`. La wiki no depende de esas rutas: los extractos de texto ya viven en `08 Fuentes/_extractos/`, y [[Indice de Fuentes]] documenta el mapeo. Si haces el movimiento, avisa al agente para que actualice [[Indice de Fuentes]].

---

## Control de versiones

Dentro de esta carpeta **no hay `.git`**: vive en Drive, y sincronizar objetos de git genera copias de conflicto. Desde el 2026-09-28 la carpeta completa `50. Monific/` tiene un **espejo privado en GitHub**, `https://github.com/dochoa001/monific-wiki`, de uso interno de B&O: el historial vive fuera de Drive y se publica con `02. Trabajo interno/03. Scripts/publicar-github.ps1`. Cómo funciona y sus reglas: `MANTENIMIENTO.md` §6.
