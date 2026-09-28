---
titulo: Plan de Cierre y Gantt
tipo: concepto
area: transversal
estado: en-riesgo
confianza: media
actualizado: 2026-08-31
fuentes: [X024, D180, D181, D167, X020, X003, V_DO_20260831]
tags: [proyecto, plan, gantt, cierre]
---

# Plan de Cierre y Gantt

> **En una frase:** el plan vigente para cerrar el proyecto — Gantt v2 del 2026-07-16 con cierre proyectado al 2026-08-28, cuya ruta crítica depende de TI de Monific.

⚠️ **El plan tiene fechas tentativas declaradas.** Las fases F4 y F5 dependen de la homologación del master y de la ventana de TI de Monific. Al 2026-08-07 la integración apenas arrancó (sesión del 2026-08-04), así que la fecha de cierre del 2026-08-28 está en riesgo.

---

## Gantt v2 — Plan de remediación y cierre

**Responsable:** Emmanuel Chulin · **Actualizado:** 2026-07-16 · **Días hábiles L–V**

### F0 · Estabilización y cierre de correctivos directos B&O

| ID | Actividad | Resp. | Fechas |
|---|---|---|---|
| 0.1 | Consolidar evidencias y estatus final en el documento de auditoría | B&O | 16–17 jul |
| 0.2 | Cerrar bugs directos sin dependencia de cliente (CON-012 doble correo · CON-144 pipeline UNE) | B&O | 16–21 jul |
| 0.3 | QA / regresión de los correctivos | B&O | 21–22 jul |

### F1 · Homologación del master de implementación *(gate)*

| ID | Actividad | Resp. | Fechas |
|---|---|---|---|
| 1.1 | Mesa de trabajo B&O ↔ Monific: reconciliar cambios aprobados vs. mapeo original | Ambos | 16–22 jul |
| 1.2 | Congelar versión homologada + baseline de alcance | Ambos | 22 jul |
| **H1** | 🎯 **HITO — Master homologado** (destraba la integración de TI) | Ambos | **22 jul** |

### F2 · Definiciones de comunicación del cliente

| ID | Actividad | Resp. | Fechas |
|---|---|---|---|
| 2.1 | Monific entrega copies/plantillas aprobados (correo + WhatsApp), catálogos, destinatarios, consentimiento/canal | **Monific** | 27–31 jul |
| **H2** | 🎯 **HITO — Definiciones de comunicación recibidas** | Monific | **31 jul** |
| 2.2 | B&O monta copies en flujos (CON-063/074/081/104) y activa recordatorios de cobranza (CON-280) | B&O | 3–5 ago |
| 2.3 | Pruebas de envío/recepción (secuencias, correo, WhatsApp) | B&O | 6–7 ago |

### F3 · Decisiones sobre workflows condicionados

| ID | Actividad | Resp. | Fechas |
|---|---|---|---|
| 3.1 | Definir con Monific activar / apagar / eliminar los WF condicionados (CON-059/083/132/136/077) | Ambos | 23–24 jul |
| 3.2 | Aplicar decisión en HubSpot + documentar | B&O | 27–28 jul |
| **HB** | 🎯 **HITO — Cierre del alcance directo B&O** | Ambos | **7 ago** |

### F4 · Integración Admin Monific → HubSpot *(carril TI · ~3 semanas · tentativo)*

| ID | Actividad | Resp. | Fechas |
|---|---|---|---|
| 4.1 | B&O: especificación de integración (INT-01…06) + propiedades destino en HubSpot | B&O | 16–22 jul |
| 4.2 | **TI Monific: desarrollo del envío / mapeo de datos** (montos, fechas, niveles reales) | **TI Monific** | 23 jul – 12 ago |
| **H3** | 🎯 **HITO — Integración TI confirmada** (tentativo) | TI Monific | **12 ago** |
| 4.3 | B&O: validación de datos recibidos | B&O | 13–14 ago |

### F5 · Activación del journey de Inversionistas *(depende de F4 · tentativo)*

| ID | Actividad | Resp. | Fechas |
|---|---|---|---|
| 5.1 | Pruebas en entorno controlado con datos reales | B&O | 17–18 ago |
| 5.2 | Activación escalonada de flujos (congelado, cierre, primera inversión, nivel de registro, reactivación) | B&O | 19–20 ago |
| 5.3 | Monitoreo post-activación | B&O | 21–24 ago |
| **H4** | 🎯 **HITO — Activación de Inversionistas aprobada** (tentativo) | Monific | **24 ago** |

### F6 · Cierre, capacitación y entrega

| ID | Actividad | Resp. | Fechas |
|---|---|---|---|
| 6.1 | Generación de bases de conocimiento | B&O | 17–21 ago |
| 6.2 | Capacitaciones pendientes por rol (Comercial / Cobranza / Servicio / TI) | B&O | 25–26 ago |
| 6.3 | Walkthrough de cierre + aprobación del cliente | Ambos | 26–27 ago |
| 6.4 | Entrega de documentación de cierre y bitácora de cambios | B&O | 28 ago |
| **H5** | 🎯 **HITO — Cierre formal del proyecto** | Ambos | **28 ago** |

---

## Ruta crítica declarada

```
0.1 / 1.1 → H1 (master, 22-jul) → 4.2 TI (~3 sem) → H3 (12-ago) → 4.3 → 5.1-5.3 → 6.3 → H5 (cierre 28-ago)
```

**El cuello de botella es 4.2: el desarrollo de TI de Monific.** B&O no lo controla.

---

## Estado real de la ruta al 2026-08-31

| Hito | Fecha plan | Estado observado |
|---|---|---|
| H1 · Master homologado | 22 jul | 🟡 Monific revisó hasta el 30-jul y entregó comentarios el 31-jul (`D180`). El Maestro Operativo tiene corte 31-jul |
| H2 · Definiciones de comunicación | 31 jul | 🟡 Sin evidencia de entrega formal, pero al 31-ago las comunicaciones se declaran publicadas, lo que implica que el copy llegó por alguna vía |
| HB · Cierre de alcance directo B&O | 7 ago | 🔴 Sin evidencia |
| H3 · Integración TI confirmada | 12 ago | 🔴 **Vencido.** Sin confirmación en fuentes |
| H4 · Activación de Inversionistas | 24 ago | 🔴 **Vencido.** Depende de H3 |
| H5 · Cierre formal | 28 ago | 🔴 **VENCIDO al 2026-08-31**, sin cierre declarado y sin prórroga escrita |

⚠️ **Actualización 2026-08-31.** Los tres últimos hitos del plan están vencidos y **no hay acuerdo escrito que los reemplace**. Un Gantt propio incumplido sin prórroga pactada es el disparador que R-01 describe: conviene pactar el nuevo calendario por escrito antes de que el vencimiento se convierta en argumento del cliente. → [[Riesgos]]

---

## El otro calendario: los plazos del requerimiento formal

El requerimiento de Monific (2026-06-18) fija plazos por bloque ejecutivo, contados **desde la aceptación escrita del plan por Monific** — no desde una fecha fija:

| Plazo | Bloques |
|---|---|
| +10 días hábiles | B01, B07, B12, B13 |
| +15 | B10, B14, B16 |
| +20 | B02, B03, B04, B11, B15 |
| +25 | B05, B06 |
| +30 | B08, B09 |

❓ **Hay dos calendarios conviviendo**: el Gantt v2 de B&O (por fases) y el calendario por bloques del requerimiento. No hay evidencia de que se hayan conciliado. → [[Contradicciones y Verificaciones]]

→ [[Bloques de Cierre B01-B16]]

---

## Qué tiene que pasar para declarar cierre

Del Maestro Operativo (`D167`, §6):

1. B&O corrige los cuatro masters y completa P1–P7 en el Control Único.
2. La sesión técnica cierra T1–T7: modelo, diccionario, payloads, IDs, asociaciones y pruebas.
3. B&O carga en `02_RESPUESTA_BNO` la versión que sustituye a la anterior, con URL/ID, export y caso reproducible.
4. Monific prueba el caso, registra resultado real y acepta o devuelve **solo el bloque que falle**.
5. Solo tras la validación escrita el workflow pasa de amarillo/rojo a verde.
6. Con todos los críticos en verde, el maestro se actualiza a versión de cierre aceptado y se congela.

### Criterio de evidencia (no negociable)

> Documento corregido **+** URL/ID **+** export o captura fechada **+** caso de prueba reproducible **+** resultado esperado **+** resultado real **+** validación escrita de Monific.

---

## El gate técnico T1–T7

Antes de programar endpoints definitivos hay que cerrar:

| ID | Qué |
|---|---|
| **T1** | Diccionario canónico: etiqueta, internal name, objeto, tipo, opciones internas, fuente y obligación |
| **T2** | Payload por evento: request, response, formato, nullability, zona horaria y ejemplo realista |
| **T3** | IDs reales: `objectTypeId`, `pipelineId`, `stageId`, `associationTypeId`/labels y registros de prueba |
| **T4** | Inconsistencias corregidas: Deal de campaña vs. Proyecto, nombres, catálogos, estados y asociaciones |
| **T5** | Modelo confirmado: fuente de verdad, altas, actualizaciones, cardinalidad, deduplicación y huérfanos |
| **T6** | Casos de aceptación: positivo, negativo, duplicado, retry, reingreso, asociación, huérfano y catálogo |
| **T7** | Evidencia HubSpot: URL/ID, export y prueba — no basta captura de existencia |

→ [[Integracion Admin Monific HubSpot]]

---

## Flujo de trabajo en Drive (instrucción vigente)

Regla establecida por Monific el 2026-07-31 (`D166`):

| Carpeta | Permiso B&O | Uso |
|---|---|---|
| `00_VIGENTE_LEER_PRIMERO` | Lector | Instrucción vigente y reglas de versión |
| `01_PARA_CORREGIR_BNO` | Lector | Masters revisados e insumos que B&O necesita |
| `02_RESPUESTA_BNO` | **Editor** | Único lugar donde B&O deposita versiones corregidas, evidencias y Control Único |
| `90_CONTRATO_SOLO_LECTURA` | Lector | Contrato y referencias |
| `99_HISTORICO_NO_USAR` | — | No es fuente de trabajo |

Reglas: **no crear matrices adicionales**; el **Control Único de Cierre** es la única lista de seguimiento; si una entrega llega por correo u otra carpeta, debe registrarse en el bloque correspondiente del Control Único con su URL/ID y resultado de prueba.

---

## Relacionado

- [[Bloques de Cierre B01-B16]] — el desglose exigido
- [[Conflicto Contractual]] — por qué existe este plan
- [[Estado Actual]] — qué se ha logrado
- [[Cronologia del Proyecto]]

## Fuentes

- `X024` — Propuesta Gantt v2 Monific (2026-07-16)
- `D180` — Minuta 2026-07-27
- `D181` — Minuta 2026-08-04
- `D167` — Maestro Operativo (2026-07-31), §3 y §6
- `D166` — Instrucción vigente de cierre (`00_LEER_PRIMERO.txt`)
- `X020` — Requerimiento Formal, §7 calendario por bloques
- `X003` — Respuesta B&O / bloques B01–B16 con Gantt de remediación
- `V_DO_20260831` — Declaración verbal de Dirección B&O (2026-08-31), sin documento de respaldo
