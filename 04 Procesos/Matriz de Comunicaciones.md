---
titulo: Matriz de Comunicaciones
tipo: proceso
area: transversal
estado: en-riesgo
confianza: alta
actualizado: 2026-08-31
fuentes: [X021, X007, X010, D001, X006, X009, X020, D178, D198, V_DO_20260831]
tags: [comunicaciones, email, whatsapp, marketing]
---

# Matriz de Comunicaciones

> **En una frase:** las 81 comunicaciones que el proyecto debe entregar — **declaradas publicadas e integradas el 2026-08-31**, pero sin una sola evidencia cargada.

🔵 **Corte declarativo 2026-08-31 (`V_DO_20260831`).** Dirección de B&O declara las 81 publicadas e integradas en HubSpot. Es el cambio más grande del bloque B08 desde el requerimiento: pasó de 0 % a declarado completo.

⚠️ **Toda cifra "0 publicadas" de esta página es anterior a esa declaración** y se conserva como registro histórico del corte del 2026-07-28. Lo que **no** cambió:

- No hay **inventario de los 81 assets** con ID, canal, trigger, destinatario y fecha (hueco H-15).
- El tracker documental sigue marcando **77 en estado "Crear"**, así que el documento y la realidad declarada se contradicen. Mientras eso siga así, Monific tiene motivo para rechazar el bloque por inconsistencia documental, no por falta de trabajo.
- No hay **aprobación escrita de Monific** de ninguna pieza, que es el criterio de cierre de B08.

→ [[Estado Actual]] · [[Bloques de Cierre B01-B16]]

**Fuente de verdad del universo:** documento *"03. Matriz completa de comunicación"* (`D001`), que contiene también la biblioteca de plantillas y textos.

---

## El universo: 81 comunicaciones

| Área | Objetivo | A crear | A corregir |
|---|---|---|---|
| **Solicitantes (SOL)** | 22 | 22 | 0 |
| **Inversionistas (INV)** | 15 | 15 | 0 |
| **Atención (ATC)** | 7 | 5 | 2 *(ATC-001 acuse, ATC-007 cierre de ticket)* |
| **Cobranza (COB)** | 33 | 31 | 2 *(COB-010 confirmación de pago, COB-011 incumplimiento día 1)* |
| **PDF institucional** | 4 | 4 | 0 |
| **TOTAL** | **81** | **77** | **4** |

El bloque de Cobranza incluye el subflujo **ARI (COB-030 a COB-033)**, que **cierra una omisión del Maestro Operativo** y resuelve la contradicción de cadencia a favor de días 15/16/30/61:

| ID | Momento | Contenido |
|---|---|---|
| COB-030 | Día 15, previo a mora temprana | Preparación de tabla de adeudos |
| COB-031 | Día 16+ · mora temprana | Inicio de cobranza amistosa con apoyo del despacho externo |
| COB-032 | Días 30 a 60 · mora moderada o grave | Cobranza formal |
| COB-033 | Día 61+ | Prejudicial/judicial y ejecución de garantía |

→ [[Proceso de Cobranza]] · [[Contradicciones y Verificaciones]] C-06

---

## El estado real — tres cortes distintos

| Corte | Fuente | Hallazgo |
|---|---|---|
| **2026-06-16** | `X021` auditoría de comunicaciones | 43 nodos AS-IS documentados en HubSpot · 70 workflows revisados · **0 de las 81 implementadas** |
| **2026-07-08** | `X010` verificación de assets | 46 correos existen en HubSpot · **todos en borrador**, ninguno publicado |
| **2026-07-28** | `X007` matriz vs. API | 56 de 81 existen como asset · 46 "creado, falta publicar" · 10 "creada, falta aprobación Meta" · 21 no verificado · 4 no |

**Conclusión estable en los tres cortes:** *ninguna comunicación por correo puede considerarse en producción.*

⚠️ **La matriz declara 77 de 81 en estado "Crear".** Es la **especificación** para construirlas, no la evidencia de haberlas construido (`D198`, análisis del 2026-08-03).

---

## Qué resuelve la matriz y qué no

Análisis línea por línea de `D001` (602 líneas) contra los requisitos del Control Único, hecho por B&O el 2026-08-03 (`D198`).

| Requisito del Control Único | Estado | Detalle verificado |
|---|---|---|
| Copy aprobado por comunicación | ✅ **Cubierto** | Asunto, preheader, cuerpo, CTA y variante B en las 81 piezas |
| Trigger y destinatario explícitos | ✅ **Cubierto** | Los 81 |
| Bloque regulatorio CNBV no editable | ✅ **Cubierto** | *Coded template* con leyenda de institución autorizada y de no garantía del Gobierno Federal, más versión de texto plano obligatoria |
| **Cadena del despacho ARI** | ✅ **Cubierto** — cierra una omisión del Maestro Operativo | COB-030 a COB-033 en días 15 / 16 / 30 / 61 |
| Reglas de supresión y frecuencia | ✅ **Cubierto** | 10 reglas · horario 8:00–19:00 CDMX · máximo 1 pieza por objetivo cada 24 h |
| Gate de Legal/Compliance | ✅ **Cubierto** | Vía propiedad `compliance_aprobado` = Sí como bloqueo de envío |
| Remitente por dominio operativo | 🟡 **Parcial** | Solo 2 alias. Cobranza, garantía y jurídico quedan bajo el alias de Solicitantes; ATC sin remitente |
| **Vínculo comunicación → workflow** | 🔴 **Ausente** | **Cero apariciones de `WF-`** en 602 líneas |
| **URL o ID del asset publicado** | 🔴 **Ausente** | Cero apariciones de *"publicado"*. Los 81 códigos son internos de la matriz |
| **Consentimiento y tipos de suscripción** | 🔴 **Ausente** | La palabra no aparece nunca. `whatsapp_opt_in` y `compliance_aprobado` se mencionan una vez cada uno y **no están en los bundles de propiedades** (`PB-SOL-*`, `PB-INV-*`, `PB-ATC`, `PB-COB-*`) → no entran a T1 → no son programables. Tampoco hay manejo de baja/*unsubscribe*, obligatorio en HubSpot |
| **Comunicaciones UNE** | 🔴 **Ausente** | Solo 2 menciones incidentales; **ninguna pieza UNE definida** |
| Cupo de 7,000 contactos de marketing | 🔴 **Ausente** | 0 menciones, con 45 piezas que llevan email |

**Desbalance de Cobranza:** 33 comunicaciones contra 15 workflows existentes, sin mapeo ni indicación de cuáles faltan.

**Remitentes definidos:** `solicitantes@monific.com` (comercial, documentación, evaluación, formalización, cobranza preventiva, mora, incumplimiento, garantía, jurídicos) y `contacto@monific.com` (onboarding, fondeo, inversiones, rendimientos, reactivación, ATC). *Fallback:* si no se puede usar el alias, asignar por equipo al A.A.S. o al A.A.I.

**Distribución por canal:** Email 42 · Notificación interna 15 · WhatsApp 10 · PDF 4 · Tarea interna 2 · Tarea 1 · Combinados 7. **45 piezas incluyen email y 11 incluyen WhatsApp** — esta última cifra cuadra con las 11 plantillas de WhatsApp que exige el Control Único.

---

## Los tres defectos internos de la matriz

### A · Los triggers de Inversionistas están corridos una fila

La sección 4 (matriz resumen) y la tabla de detalle se contradicen entre INV-008 e INV-014. **La tabla de detalle es la coherente**, porque el trigger corresponde al nombre de la pieza.

| ID | Pieza | Trigger en sección 4 (❌) | Trigger en detalle (✅) |
|---|---|---|---|
| INV-008 | Saldo disponible por rendimiento o pago aplicado | Inversión confirmada | Pago o rendimiento aplicado |
| INV-009 | Reactivación 30 días | Pago/rendimiento aplicado | **30 días sin invertir** |
| INV-010 | Reactivación 90 días | **Solicitud de retiro recibida** | **90 días sin invertir** |
| INV-011 | Reactivación 180 días | 30 días sin invertir | **180 días sin invertir** |
| INV-012 | Reactivación 360 días | 90 días sin invertir | **360 días sin invertir** |
| INV-013 | Reinversión post-campaña | 180 días sin invertir | Campaña liquidada y capital liberado |
| INV-014 | Retención por cierre de cuenta | 360 días sin invertir | Solicitud de cierre de cuenta |
| INV-015 | Acompañamiento posterior a recuperación | Proyecto liquidado | Distribución por garantía o recuperación |

🔴 **El error se propaga:** la sección 11 (*"Flujos críticos"*) repite la versión equivocada. Está mal en **2 de 3 lugares** del documento.

### B · Canal y estado inconsistentes en Inversionistas

Seis piezas son **Email** en una tabla y **WhatsApp** en la otra: INV-006, INV-007, INV-008, INV-009, INV-010 e INV-013. Además **INV-005** aparece como *"Crear"* en la sección 4 y como *"Mantener interno"* en la tabla de detalle.

### C · ~14 tokens que no existen en HubSpot

De 66 tokens distintos usados en el copy, estos apuntan a *namespaces* inexistentes y **requieren propiedades de HubSpot alimentadas por el Admin Monific**:

| Namespace | Tokens |
|---|---|
| `app.*` | `available_balance` (3 usos) · `deep_link_opportunities` · `deep_link_add_funds` · `deep_link_login` |
| `payment.*` | `fecha_limite` (3) · `monto` (3) · `periodo` (2) · `fecha_limite_reporte` (2) · `capital` · `rendimiento` · `fecha` · `detalle` |
| Otros | `investment.amount` (2) · `withdrawal.amount` (1) · `email.preheader` (no es el token nativo de *preview text*) |

Más tres tablas dinámicas que HubSpot no genera sin contenido programable: `{{tabla_adeudos}}`, `{{tabla_calendario_pagos}}`, `{{tabla_aplicacion_pagos}}`.

✅ **Precisión:** los 11 tokens `{{module.*}}` **sí son válidos** — son campos de módulo HubL dentro de una *coded template*.

⚠️ **Convención mixta:** `deal.link_drive` y `deal.observaciones_documentales` en español conviven con `deal.days_past_due`, `deal.next_due_amount` y `deal.guarantee_type` en inglés. **Ninguno está confirmado como nombre interno real.** → [[Diccionario de Propiedades API]]

---

## Cuatro conflictos con las decisiones canónicas del 31 de julio

Indican que la matriz **es anterior a la actualización de Inversionistas del 2026-07-31 o no la incorporó**. Deben resolverse antes de usarla como respuesta formal.

| # | Tema | Decisión vigente | Qué dice la matriz | Acción |
|---|---|---|---|---|
| 1 | **Retiros** | INV-11: retiros y UNE quedan **fuera** del ciclo de Inversionistas | Conserva `withdrawal.amount` en el bundle TK-INV y un trigger de solicitud de retiro en INV-010 | Eliminar token y trigger |
| 2 | **Contactos de marketing** | INV-01 / WF-028: tope conjunto de 7,000, desclasificar cada alta al mes siguiente | Cero menciones, con 45 piezas de email | Diseñar el control |
| 3 | **`nivel_registro`** | Niveles 1 a 4; el 4 solo por primera compra confirmada | INV-001 usa el valor `registro_simple` | Homologar catálogo |
| 4 | **Cadencia de reactivación** | WF-027: sin Data Hub, HubSpot no calcula ni transforma valores | INV-009 a INV-012 dependen de `days_since_last_investment`, un campo calculado | O el Admin envía el dato, o la cadencia no es construible. Entra a T2 |

**Compromisos que aparecen solo en la matriz y no en el Maestro Operativo** (requieren confirmación):

- 🔴 **SLA de primera atención de ATC = 5 minutos** (ATC-003). El maestro no lo establece. → [[SLAs y Escalamientos]]
- 🔴 Cadencia preventiva de cobranza **T-10, T-7, T-5, T-2, D0**, más fina que la que implementan los workflows existentes (WF-054/055 operan alrededor del día 15 y WF-057 en mora ≥ 61). → [[Proceso de Cobranza]]

---

## Canales

| Canal | Dónde vive | Nota |
|---|---|---|
| **Email** | Marketing Emails de HubSpot | La mayoría. Todos en borrador |
| **WhatsApp** | Plantillas aprobadas por Meta, conectadas a HubSpot | 🔴 B&O **no tiene acceso** al administrador de Meta. Monific (Raquel con Jesús) crea las plantillas; una vez aprobadas por Meta, B&O hace los cruces |
| **Notificación interna** | Lógica de workflow | No vive en Marketing Emails; se valida en Automatizaciones |
| **Tarea interna** | Lógica de workflow | Igual |
| **PDF institucional** | Cartas prellenables | 4 documentos con validación previa al envío |

---

## Los problemas críticos del AS-IS

Detectados en la auditoría del 2026-06-16:

| Problema | Detalle |
|---|---|
| 🔴 **Inversionista nuevo sin comunicación** | WF-065 a WF-069 ejecutan solo `set_property`. El cliente **no recibe ningún mensaje** en las 5 etapas de cierre |
| 🔴 **Cobranza preventiva rota** | WF-053 y WF-054: nodos de inscripción a secuencia **sin `sequenceId`**. El solicitante moroso no recibe recordatorios preventivos |
| 🔴 **Ejecución de garantía sin aviso al cliente** | WF-061: las tres comunicaciones son internas. Ningún nodo notifica al cliente sobre la ejecución de su garantía |
| 🔴 **Cierre por incumplimiento** | WF-064: el cuerpo instruye "activar comunicación externa" pero el workflow **no contiene nodo de envío externo** |
| 🔴 **Tokens HubL en texto plano** | `CONTACT.FIRSTNAME` (WF-010) y `{{enrolled_object.subject/content/monto_total}}` (WF-055, WF-058, WF-061, WF-064) **no renderizan** |
| 🔴 **Destinatarios externos a Monific** | 3 nodos a David Ochoa (B&O) · 2 a Caroline Bersot (B&O) · 2 al equipo Legal compartido con ARI |

→ [[Higiene y Accesos]]

---

## El estado de los CTA

Cada comunicación necesita un destino de botón. La verificación del 2026-06-30 clasificó así:

| Tipo de CTA | Situación |
|---|---|
| **RESPONDER** | Responder al mensaje. Sin asset ni dependencia. ✅ Resoluble ya |
| **DRIVE** | `cta_url = {{deal.link_drive}}`. No depende de Monific. Precondición: tarea al A.A.S. para crear/compartir la carpeta |
| **APP** | URLs fijas confirmadas: `https://app.monific.com/wallet` y `https://app.monific.com/invertir` ✅ |
| **AGENDA** | Página de reuniones (Meetings) de HubSpot. 🔴 **Pendiente B&O:** crear la página de agenda del A.A.S. y del A.A.I. |
| **FORMULARIO** | Formulario de HubSpot. 🔴 **Pendiente B&O:** entregar el formulario |
| **PDF** | Carta institucional prellenable. 🔴 **Pendiente B&O:** implementarla conectada al CRM |
| **POR DEFINIR** | 🔴 Destino sin asset definido. B&O debe indicar la página de estatus/contenido |
| **INTERNO** | Notificación/tarea interna. Depende de roles y equipos configurados por B&O |

🔴 Varios CTA quedaron como **placeholder `#`** (SOL-011, SOL-016, SOL-021…) o **vacíos**.

---

## Muestra del catálogo — Solicitantes

| ID | Comunicación | Canal | Trigger |
|---|---|---|---|
| SOL-001 | Confirmación de solicitud recibida | Email | Formulario / negocio nuevo |
| SOL-002 | Solicitud de documentación inicial | Email | Califica pre-revisión |
| SOL-003 | Recordatorio documentación día 3 | Email | 3 días sin carga completa |
| SOL-004 | Recordatorio documentación día 6 | Email | 6 días sin carga completa |
| SOL-005 | No-show o sin respuesta | Email | — |
| SOL-006 | Dudas sobre requisitos | Email | — |
| SOL-007 | Pausa voluntaria | Email | — |
| SOL-008 | Carpeta Drive creada | **WhatsApp** | — |
| SOL-009 | Expediente completo | Email | — |
| SOL-010 | Expediente con observaciones | Email | — |
| SOL-011 | No viable documental | Email | — |
| SOL-012 | Avance a evaluación financiera | Email | — |
| SOL-013 | Solicitud de evaluación interna | Notificación interna | — |
| SOL-014 | Notificación a Dirección General | Notificación interna | — |
| SOL-015 | Aceptación preliminar | Email | — |
| SOL-016 | Rechazo inmediato | Email | — |
| SOL-017 | Rechazo formal | **PDF + Email** | — |
| SOL-018 | Inicio de formalización | Email | — |
| SOL-019 | Formalización detenida | Email | — |
| SOL-020 | Contrato firmado | Email | — |
| SOL-021 | Cierre perdido por no firma | Email | — |
| SOL-022 | Escalamiento expediente sin Drive | Tarea interna | — |

El catálogo completo de las 81, con copy, asunto y tokens, vive en `D001` — *"03. Matriz completa de comunicación"*, Parte II "Biblioteca de plantillas y textos".

---

## La regla que bloquea todo

> **Ningún correo ni WhatsApp se activa sin copy, remitente, consentimiento y destinatario aprobados por Monific.**

Es un pendiente crítico transversal del Maestro Operativo. Y crea una dependencia cruzada incómoda:

- El **copy está excluido del alcance** contractual de B&O ([[Contrato y Alcance]]).
- Monific debía entregar copies y plantillas aprobados en la fase **F2** del Gantt (27–31 jul). 🔴 Sin evidencia de entrega.
- Las **plantillas de WhatsApp** solo puede crearlas Monific porque B&O no tiene acceso a Meta Business.

---

## Bloque de remediación B08

> **Crear 77, corregir 4 y actualizar el tracker con triggers, tokens y destinatarios.**
> **Evidencia:** link por asset, trigger, destinatario, prueba y aprobación.
> **Criterio:** 81 implementadas, cero no iniciadas, aprobadas por Monific.
> **Plazo:** +30 días hábiles *(el más largo de todos los bloques, junto con B09)*.
> **Riesgo si no se corrige:** usuarios sin avisos, copies inconsistentes y exposición de datos.

---

## Documentos de trabajo relacionados

| Documento | ID | Qué aporta |
|---|---|---|
| 03. Matriz completa de comunicación | `D001` / `D192` | El catálogo maestro con los textos |
| 01. Auditoría Comunicaciones | `X021` | El inventario AS-IS de HubSpot |
| 02. Brecha Comunicaciones | `D191` | El análisis de brecha |
| 04. Tracker Matriz Comunicaciones | — | 🔴 **No se pudo abrir** (posible protección o corrupción) |
| Relación ID-HubSpot-CTA | `X010` | Mapeo ID ↔ asset ↔ CTA verificado contra la API |
| Matriz Comunicación vs. HubSpot | `X007` | Verificación en vivo del estado publicado/borrador |
| Plantillas WhatsApp Meta | `X006`, `X009` | Las plantillas de WhatsApp y sus variables |

---

## Relacionado

- [[Proceso Comercial Solicitantes]] · [[Proceso Comercial Inversionistas]] · [[Proceso de Cobranza]] · [[Proceso de Servicio ATC]]
- [[Analisis de Cierre BNO]] — el análisis del 2026-08-03 que produjo esta lectura de la matriz
- [[Workflows]] — dónde se disparan
- [[Higiene y Accesos]] — destinatarios externos y tokens
- [[Bloques de Cierre B01-B16]] — bloque B08

## Fuentes

- `X021` — 01. Auditoría Comunicaciones (corte 2026-06-16)
- `X007` — Matriz Comunicación vs. HubSpot (2026-07-28)
- `X010` — Relación ID-HubSpot-CTA (2026-07-08)
- `D001` / `D192` — 03. Matriz completa de comunicación
- `X006`, `X009` — Plantillas WhatsApp Meta
- `X020` — Requerimiento Formal: bloque B08
- `D178` — Minuta 2026-06-29: acuerdo sobre plantillas de WhatsApp
- `D198` — Historial y contexto de cierre (2026-08-03), §8 y §9: análisis de las 602 líneas de la matriz, defectos internos A/B/C y conflictos con las decisiones canónicas
- `V_DO_20260831` — Declaración verbal de Dirección B&O (2026-08-31): las 81 publicadas e integradas. Sin documento de respaldo
