---
titulo: Masters de Implementacion
tipo: fuente
area: transversal
estado: en-riesgo
confianza: media
actualizado: 2026-08-31
fuentes: [X011, X012, X013, X018, X014, D167, X020, D178, V_DO_20260831]
tags: [fuentes, masters, entregables]
---

# Masters de Implementación

> **En una frase:** los cuatro Excel que son el entregable central del Add-On de Mapeo de Procesos Elite — y el foco de dos bloques del requerimiento formal.

---

## Los cuatro masters

| ID | Master | Hojas | Cubre |
|---|---|---|---|
| `X012` | **Proceso Comercial** | 7 | Pipelines y workflows de Solicitantes (24) e Inversionistas (16) + propiedades + flujograma |
| `X011` | **Cobranza** | 12 | Pipeline de Cobranza (7 etapas), 15 workflows, ~60 propiedades |
| `X013` | **Servicio / UNE** | 14 | Pipelines de Atención (4 etapas) y UNE (2), 9 workflows, catálogo de tickets TI |
| `X018` | **Documento API de Integración** | 4 | Mapeo de propiedades HubSpot ↔ Admin + 30 reglas de negocio |

Complementario: `X014` — **MONIFIC · Mapeo de Propiedades**.

### Versiones vigentes en Drive (2026-07-31)

| Documento | Drive ID |
|---|---|
| Máster Comercial corregido | `1Wr55InKsdIOTTcPcpJN5jjsuaJf1mdP8` |
| Máster Cobranza corregido | `1XvPaOypZc3lN6sqMP5amoUKpo8BRoFwT` |
| Máster Servicio/UNE revisado | *(sin ID registrado)* |
| Integración HubSpot–Admin corregida | `1NsBV6m2cIq-Dk2ZzhgkFQrewzi0Yc2cd` |
| Control Único de Cierre vigente | `1RPbXyowfWpGnsVQ_OYKyZI5-iFhy1T5j` |

Los cuatro masters revisados contienen la hoja `00_REVISION_MONIFIC`.

---

## Estructura típica de un master

| Hoja | Contenido |
|---|---|
| **Pipeline** | Por etapa: objetivo, responsable, descripción, detonantes para avanzar, propiedades obligatorias y opcionales, automatizaciones, integraciones, etapas de destino, comentarios para B&O |
| **Workflows** | Numeración, nombre completo con nomenclatura de HubSpot, link, objeto, estatus (Encendido/Apagado + Implementado) y comentarios |
| **Listado de propiedades** | Etapa, nombre, objeto, tipo de llenado (automático/manual), tipo de propiedad, carácter (obligatorio/opcional), posibles valores, comentarios de B&O |
| **Flujograma** | Referencia al diagrama |

**Nomenclatura de workflows:** `03. Negocios | 01. Solicitantes | Etapa 01: Nuevo | Nº 01 | Cambio de etapa a Evaluación | V1`

---

## Autoría — punto contractual

Monific dejó por escrito en el requerimiento formal:

> *"Los tres masters de implementación, los flujogramas y la documentación TO-BE son **entregables de BNO** derivados de su propio discovery (Add-On Mapeo de Procesos Elite); **no son insumos que Monific debía proporcionar**. Su elaboración y corrección forman parte del alcance contratado. Monific participó autorizando y corrigiendo."*

El Add-On costó **$47,250 MXN + IVA** de pago único.

→ [[Contrato y Alcance]] · [[Economia del Proyecto]]

---

## 🔴 Los dos problemas

### B01 · Discrepancia master ↔ HubSpot

El master dice una cosa y el portal dice otra. Ejemplos verificados:

| Caso | Master | HubSpot real |
|---|---|---|
| WF-014 | "Encendido" | **Desactivado** |
| Objeto de Cobranza | Existe como objeto | **0 objetos personalizados** |
| 26 propiedades | Listadas | **No existen** |
| Ruta de Scoring | Propiedad activa con valores A/B/C | **Descartada** el 2026-07-27 |
| 5 workflows | Un nombre | Otro nombre en el portal |

**Bloque B01** (+10 días hábiles): entregar el TO-BE final y una tabla por workflow que concilie master, flujograma y estado real. Criterio: **100 % conciliado, cero contradicciones**.

Nota registrada en el bloque: *"La documentación TO BE debe reflejar que cobranza vive en Tickets/pipeline de Cobranza y no como objeto separado."*

**Origen reconocido:** en la reunión del 2026-06-29 hubo acuerdo en que la discrepancia se debe a **cambios surgidos durante la implementación**, y Raquel señaló que el origen fue **falta de comunicación**.

### B12 · Contenido de otro cliente 🔵

> **B12 · Masters con contenido de otro cliente**
> Responsable: **B&O — Dirección / PM**
> Acción: *"Explicar origen, retirar contenido ajeno y entregar masters depurados/versionados."*
> Evidencia: masters limpios y control de cambios.
> Criterio: **cero contenido de terceros; aceptación escrita**.
> Riesgo: **confidencialidad** y documentación de cierre no confiable.
> Plazo: +10 días hábiles.

Detectado en **dos masters**. Es el único bloque dirigido a Dirección de B&O y el único que toca confidencialidad hacia terceros.

🔵 **Corte 2026-08-31 (`V_DO_20260831`).** Dirección de B&O declara los masters **ya depurados**. Se registra como declaración, no como cierre: el bloque pide tres cosas y la limpieza es solo una.

| Lo que pide B12 | Estado |
|---|---|
| Retirar el contenido ajeno | 🔵 Declarado hecho |
| **Explicar el origen** de cómo llegó ahí | 🔴 Pendiente |
| Entregar masters **depurados y versionados** con control de cambios | 🔴 Pendiente |
| **Aceptación escrita** de Monific | 🔴 Pendiente |

⚠️ Por tratarse de confidencialidad hacia un tercero, conviene cerrarlo con **más** formalidad que los demás bloques, no con menos: la explicación del origen es lo que demuestra que fue un error de plantilla y no una práctica. → [[Bloques de Cierre B01-B16]]

---

## Qué extrajo esta wiki de cada master

| Master | Alimentó |
|---|---|
| `X012` Comercial | [[Proceso Comercial Solicitantes]] · [[Proceso Comercial Inversionistas]] · [[Pipelines]] · [[Propiedades]] |
| `X011` Cobranza | [[Proceso de Cobranza]] · [[Pipelines]] · [[Propiedades]] |
| `X013` Servicio/UNE | [[Proceso de Servicio ATC]] · [[Proceso UNE]] · [[Pipelines]] |
| `X018` API | [[Reglas de Negocio API]] · [[Diccionario de Propiedades API]] · [[Modelo de Datos HubSpot]] |

---

## ⚠️ Advertencias al leer un master

1. **El estatus "Implementado" no significa funcionando.** Significa que existe en el portal.
2. **Los nombres de propiedad son etiquetas de CRM, no nombres internos.** El diccionario técnico sigue pendiente (gate T1).
3. **Los "Objeto de Cobranza" y "Objeto Edificio / Proyecto" no existen** como objetos personalizados. Son Ticket y Proyecto.
4. **La propiedad "Ruta de Scoring" está obsoleta.**
5. **Los comentarios de B&O en la última columna** son muy valiosos: ahí están las dudas reales ("Verificar correos", "Definir procesamiento", "Validar lógica", "No es a raquel, es karen").

---

## Los flujogramas

Seis diagramas en PDF que acompañan a los masters:

| # | Flujograma |
|---|---|
| 01 | Proceso Comercial de Inversionistas |
| 02 | Proceso de Servicio y UNE |
| 03 | Proceso de Cobranza |
| 04 | Proceso Comercial de Solicitantes |
| 05 | Integración Admin Monific y HubSpot |
| 06 | Conexión General de Procesos |

🔴 **Ninguno rindió texto extraíble** — son imágenes vectoriales. Su contenido está cubierto indirectamente por los masters y por `D167`, pero **no se verificó directamente**. → [[Preguntas Abiertas]] H-02

También existen cuatro versiones antiguas: *Cobranza a solicitantes · Flujograma de servicio · Proceso comercial inversionistas · Proceso comercial solicitantes*.

---

## Relacionado

- [[Bloques de Cierre B01-B16]] — bloques B01 y B12
- [[Contradicciones y Verificaciones]] — qué no cuadra
- [[Indice de Fuentes]] · [[Metodologia BOOST]]

## Fuentes

- `X011`, `X012`, `X013`, `X018` — Los cuatro masters
- `X014` — MONIFIC · Mapeo de Propiedades
- `D167` — Maestro Operativo: consolidación y documentos vigentes
- `X020` — Requerimiento Formal: bloques B01 y B12, aclaración de autoría
- `D178` — Minuta 2026-06-29: origen de la discrepancia
