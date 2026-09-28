---
titulo: Preguntas Abiertas
tipo: estado
area: transversal
estado: en-progreso
confianza: alta
actualizado: 2026-08-11
fuentes: [D181, D180, D167, X020, X018, D190, D198]
tags: [preguntas, decisiones, pendientes]
---

# Preguntas Abiertas

> **En una frase:** lo que nadie ha decidido todavía y hay que decidir — con quién debe responder cada cosa.

Cuando una pregunta se responda, muévela a la página que corresponda y regístralo en `log.md`.

---

## Decisiones técnicas que bloquean la integración

| # | Pregunta | Quién decide | Bloquea |
|---|---|---|---|
| **P-01** | ¿Cuáles son los **valores internos** de cada dropdown? El mapeo lista etiquetas, no valores internos. Es exactamente el bug que provocó ~1,125 deals fallidos | B&O (entrega) + TI Monific (confirma) | Gate T1 · toda la integración |
| **P-02** | ¿Cuáles son los **IDs reales** de pipelines y etapas de Solicitantes, Cobranza, Atención y UNE? Solo se conocen los de Inversiones | B&O | Gate T3 · asociaciones |
| **P-03** | ¿`plaza_meses` o `plazo_meses`? El nombre interno es **inmutable** tras crearse | B&O + TI Monific | Creación de la propiedad |
| **P-04** | ¿Qué opciones tienen `razon_del_retraso`, `motivo_de_reestructura` y `calificacion_del_proyecto_cnbv`? Marcadas "por definir con BNO" | B&O + Monific | Bloque B07 |
| **P-05** | ¿Se contrata **Data Hub** o el Admin calcula las fechas? Abierto desde 2026-07-27 | Monific (decisión económica) | Cobranza y UNE |
| **P-06** | ¿Dónde se calculan los **30 días hábiles** y el folio de UNE? En el Admin o con el ID nativo del ticket | Monific + B&O | Bloque B15 |
| **P-07** | ¿Cuál es el **horario definitivo** de las sincronizaciones masivas? La propuesta es 01:00 diaria | TI Monific (A-06) | Integración |
| **P-08** | ¿Cuál es el nombre técnico del **identificador de posición/movimiento original** para el mercado secundario? INV-10 lo deja pendiente de TI | TI Monific | Mercado secundario |
| **P-09** | ¿Qué propiedad de monto es la **canónica**? Hay 17 solapadas en Negocio | B&O + TI Monific | Reportes y dashboards |

---

## Decisiones de proceso

| # | Pregunta | Quién decide |
|---|---|---|
| **P-10** | ¿Cómo se concilian los **cuatro calendarios de cobranza** (T-10/T-7/T-5 · día 15/16/30/61 · semana 1/2/3 · día 1/7/13/14/15)? | Monific (Cobranza + Legal) + B&O |
| **P-11** | ¿**Expediente Azul** se queda o lo sustituye Google Drive? El brief pide integrarlo; el diseño operativo no lo usa | Monific |
| **P-12** | ¿El **blog en HubSpot** está dentro o fuera? El brief lo pide, el contrato lo excluye | Monific + B&O (dirección) |
| **P-13** | ¿Son **cuatro o cinco dashboards**? El brief pide cinco, el anexo compromete cuatro | Monific + B&O |
| **P-14** | ¿Qué pasa con **CallPicker**? Es alcance contractual y no hay seguimiento visible desde el brief | B&O + Monific |
| **P-15** | ¿Queda el **lead scoring predictivo con IA** fuera del MVP o fuera del proyecto? | Monific |
| **P-16** | ¿Quién ocupa nominalmente cada **rol operativo** (A.A.I., E.A.C.)? Solo Guillermo está identificado | Monific |
| **P-17** | ¿Cómo se resuelve la **asignación de tareas a personas** cuando hay rotación? B&O propuso un mecanismo sin definir | B&O |

---

## Decisiones contractuales y de gobernanza

| # | Pregunta | Quién decide |
|---|---|---|
| **P-18** | ¿Se concilian el **Gantt v2** y el **calendario por bloques** del requerimiento, o conviven dos planes? Hay además un **tercer Gantt**, el que B&O adjuntó el 2026-06-24 | Monific + B&O |
| **P-19** | ¿Monific **aceptó por escrito** el plan correctivo del 2026-06-24? El 25-jun dijo expresamente que no aceptaba cierres. De esa aceptación dependen los plazos +10/+15/+20/+25/+30 | Monific |
| **P-20** | 🔴 ¿Se firmó el **anexo operativo** que Raquel propuso el 2026-06-09 para formalizar el modelo técnico (B&O capacita / Monific ejecuta y controla accesos)? Es el cambio de alcance más importante del proyecto y no consta firmado | B&O + Monific |
| **P-21** | ¿Se formalizó la **bolsa de 30 horas mensuales** con el cliente? La minuta del 2026-05-27 dice que *"el paquete de soporte se activa a partir de julio 2026, sin costo adicional de desarrollo"* — ¿es lo mismo? | B&O + Monific |
| **P-22** | ¿Cuál es el **corte de horas** y qué pasa con las no ejecutadas? Bloque B13, exigido desde el 2026-06-09 | B&O |
| **P-23** | ¿Con qué **frecuencia** serán las sesiones recurrentes de seguimiento? Raquel iba a confirmarlo por WhatsApp tras el 2026-08-04 | Raquel + TI Monific |
| **P-26** | ¿Se hizo la **validación SPF/DKIM** de `solicitantes@monific.com` como remitente estándar? Pendiente de B&O desde el 2026-06-15 | B&O |
| **P-27** | ¿Se documentó el **mapeo de valores antiguos → nuevos** de la propiedad consolidada *"Resultado pre-evaluación"*? Sin él, los workflows que dependen de las propiedades anteriores se rompen en la transición | B&O |
| **P-28** | ¿Se creó finalmente el **equipo dedicado para ARI** en HubSpot? Caroline dijo que lo crearía el 2026-06-01; el bloque B14 sigue exigiéndolo | B&O |

*(P-24 y P-25 se resolvieron con la correspondencia: Fulmentfi es el dominio de ARI Abogados y Leticia es de B&O.)*

---

## Abiertas por el análisis de cierre del 2026-08-03

| # | Pregunta | Quién decide | Bloquea |
|---|---|---|---|
| **P-29** | 🔴 ¿Se **ejecutaron las 11 correcciones** que B&O se comprometió a dejar incorporadas antes de la sesión del 2026-08-03? Ninguna fuente posterior lo acredita | B&O (entrega evidencia) | El criterio de cierre de los 10 defectos |
| **P-30** | ¿Cuál es el **quinto workflow con nombre desalineado**? El Maestro Operativo declara 5 diferencias y solo documenta 4 (WF-004, WF-021, WF-055, WF-060) | B&O | Homologación de nombres |
| **P-31** | ¿Qué se hace con los **32 workflows del portal sin mapear**: adoptar, archivar o eliminar? | Monific + B&O | Higiene del portal · conteo de cierre |
| **P-32** | ¿Sigue vigente el **SLA de primera atención de ATC de 5 minutos**? B&O lo señala como compromiso *"que aparece solo en la matriz"* (ATC-003) y que el Maestro Operativo no establece — pero ya venía de `D195` (2026-01-26). El hueco real es que **`D167` lo perdió** | Monific | [[SLAs y Escalamientos]] |
| **P-33** | ¿Qué **alias de remitente** usan Cobranza y ATC? Hoy quedan bajo `solicitantes@monific.com`, contra la regla de remitentes separados por dominio operativo del propio documento | Monific | Bloque B08 |
| **P-34** | ¿Monific **valida la clasificación de los 70 pendientes por naturaleza**? B&O la declara *"sujeta a validación conjunta"*. De ella depende que 15 bloqueados y 12 de construcción nueva se separen de los 10 defectos | Monific + B&O | Todo el criterio de cierre |
| **P-35** | ¿La **cadencia preventiva T-10/T-7/T-5/T-2/D0** de la matriz sustituye a la que implementan los workflows (día 15 y mora ≥ 61), o conviven? | Monific (Cobranza) | Bloque B05 |

→ [[Analisis de Cierre BNO]]

---

## Datos que hay que verificar antes de usar

| # | Dato | Por qué dudar | Cómo verificar |
|---|---|---|---|
| **V-01** | Interés moratorio **38 % anual** | 🔴 **Contradicho por la Directora de Finanzas:** *"para todos los casos sin excepción es **dos veces la tasa ordinaria**"* (2026-03-05). Ver C-21 | Contrastar contra el contrato de financiamiento. Prevalece la instrucción de Vianey |
| **V-01b** | Comisión por pago tardío 15 % + IVA | Viene de un documento de diseño hecho con IA | Contrastar contra el contrato de financiamiento |
| **V-02** | Umbral de aforo **1.5 : 1** para proyectos "Solid" | 🔴 **Karen Gómez y Raquel hablan de 2 : 1** como criterio de respaldo del activo (2026-04-17). Ver C-22 | Confirmar con Riesgo/Finanzas si son dos umbrales distintos (originación vs. alerta) o uno solo |
| **V-03** | WF-054 y WF-055 comparten el ID `1820860318` | Posible error de transcripción | Consultar el portal |
| **V-04** | Los **32** workflows del portal fuera de la numeración canónica *(cifra precisada el 2026-08-03; antes se decía ~26)* | No hay inventario de qué son | Export completo y clasificación |
| **V-05** | Costos de licencias de HubSpot (USD 435/mes) | Cifras del brief 2025, la suma no cuadra exactamente | Contrastar con facturas |
| **V-06** | Monific "gana comisiones por ambos lados" | Una sola fuente (debrief interno) | Confirmar con el cliente |
| **V-07** | Estados "Implementado" de los masters | La API los contradice en varios casos | Export por workflow |

---

## Huecos de esta wiki

Documentos que existen pero no se pudieron leer o no se han analizado:

| # | Hueco | Impacto | Cómo cerrarlo |
|---|---|---|---|
| **H-01** | **SLA B&O a Monific.pdf** sin texto extraíble | Alto — es un documento contractual. Se entregó en el kickoff del 2026-01-07 | Convertir a texto o transcribir manualmente |
| **H-02** | **Flujogramas 01–06** sin texto extraíble | 🟡 **Mitigado** — los originales viven en **Miro**: `miro.com/app/board/uXjVG7nRR_I=` | Consultarlos en Miro y describirlos |
| **H-03** | **Monific Kick Off 2026.pdf** sin texto extraíble | Bajo | Verlo como imagen |
| **H-04** | **04. Tracker Matriz Comunicaciones.xlsx** no abre | Medio — es el tracker vivo de comunicaciones | Pedir copia sin protección |
| **H-05** | **Master_Cobranza_reparado_temporal.xlsx** no abre | Bajo — hay versión buena | — |
| **H-06** | **REPORTES MONIFIC - HUBSPOT** (`D196`) extraído pero no contrastado | Medio — es la definición de reportes y de la lógica de scoring | Leer y contrastar contra el portal |
| ~~**H-07**~~ | ~~Intercambio de correos B&O~~ | ✅ **Cerrado el 2026-08-07** → [[Correspondencia]] | — |
| **H-08** | **Auditoría comunicaciones · brecha** (`D191`) sin analizar en detalle | Bajo | Ingesta |
| **H-09** | **Capacitaciones de Ventas 1 y 2** (`D134`, `D135`) sin analizar | Medio — evidencia del bloque B09 | Ingesta |
| **H-10** | **Minutas de mapeo de feb–may** sin analizar una por una | Bajo — el resultado está en los masters | Ingesta selectiva |
| **H-11** | 🔴 **Correos de julio y agosto de 2026** | **Alto** — cubren el plan correctivo definitivo, el Gantt v2, la homologación de masters y la sesión con TI. La correspondencia disponible termina el 2026-06-29 | Exportar del buzón real de dochoa@black-n-orange.com |
| **H-12** | 🔴 **Conversaciones de WhatsApp** del grupo del proyecto | Medio-alto — las partes las citan constantemente (*"retomando lo comentado previamente por WhatsApp"*); ahí se tomaron decisiones de agenda y operativas | Exportar el chat del grupo |
| **H-13** | **La respuesta punto por punto de B&O a los 217 pendientes** | Alto — es el núcleo del cierre. Emmanuel dijo el 24-jun que la estaban cargando. 🟡 **Parcialmente cubierto** por `D198` (2026-08-03), que responde sobre las 70 fichas del Maestro Operativo, no sobre los 217 hallazgos | Exportar la plantilla llena de `02_RESPUESTA_BNO` |
| **H-14** | **Evidencia de ejecución de las 11 correcciones** comprometidas para antes del 2026-08-03 | **Alto** — sin ella los 10 defectos siguen abiertos | Export de configuración con captura antes/después por workflow. Ver P-29 |

---

## Cómo trabajar esta página

- Cada pregunta debería tener **un dueño y una fecha objetivo**. Hoy no los tiene: eso también es un hallazgo.
- Cuando se responda una, muévela a la página de destino, cítala con su fuente y bórrala de aquí.
- Cuando surja una nueva en una sesión, añádela con el mismo formato.

---

## Relacionado

- [[Contradicciones y Verificaciones]] — lo que no cuadra
- [[Riesgos]] — lo que puede salir mal
- [[Pendientes Criticos]] — lo que hay que hacer
- [[Indice de Fuentes]] — qué documento es cada ID

## Fuentes

- `D181` — Minuta 2026-08-04: puntos abiertos para la siguiente sesión
- `D180` — Minuta 2026-07-27: pendientes y riesgos a validar
- `D167` — Maestro Operativo: gate T1–T7 y pendientes críticos
- `X020` — Requerimiento Formal
- `X018` — Documento API de Integración
- `D198` — Historial y contexto de cierre (2026-08-03): los 12 puntos de decisión de la sesión y las 11 correcciones comprometidas
