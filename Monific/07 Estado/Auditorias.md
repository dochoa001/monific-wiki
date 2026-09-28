---
titulo: Auditorias
tipo: estado
area: transversal
estado: en-riesgo
confianza: alta
actualizado: 2026-09-28
fuentes: [X002, X020, X021, X001, X003, D178, D190, D203, D204]
tags: [auditoria, hallazgos, evidencia]
---

# Auditorías

> **En una frase:** cuatro auditorías del cliente más una verificación técnica por API produjeron los 284 hallazgos que sostienen el requerimiento formal.

---

## Las cuatro auditorías

| # | Fecha de envío | Auditoría | Hallazgos | Qué revisó |
|---|---|---|---|---|
| **1ª** | **2026-05-20** | Auditoría de workflows (+ dictamen de B&O) | **112** sobre **58 workflows** | Configuración general. Se usa la versión con la columna de dictamen de B&O llena |
| **2ª** | **2026-06-09** | Re-validación | **109**, de ellos **43 críticos** | Actualización del mismo mapa; añade hallazgos nuevos de ARI/equipos e indica qué fila de la 1ª pasada actualiza |
| **3ª** | **2026-06-14** | Bitácora técnica | **57** (`APP-001` a `APP-057`) | API, propiedades, apps privadas |
| **4ª** | **2026-06-15** | Auditoría de Comunicaciones | AS-IS + las **81** comunicaciones TO-BE | 43 nodos AS-IS documentados, 70 workflows revisados |

**Total consolidado: 284 hallazgos** + 81 comunicaciones.

### De dónde salió cada una

Las cuatro las hizo **Monific**, no B&O, y su origen está documentado en la correspondencia:

- La **1ª** nació de un recorrido propio de Raquel entre el 18 y el 20 de mayo.
- La **2ª** fue una actualización explícita de la misma, *"no un frente adicional"*.
- La **3ª** vino acompañada de 6 documentos, incluido el Plan Único de Corrección (51 acciones) y el *"Listado de 31 propiedades a crear por BNO"*.
- La **4ª** nació de un encargo puntual: aprobar el copy de WF-004 y WF-007. Raquel concluyó que *"el contenido de una plantilla no puede aprobarse de forma aislada, porque los disparadores, propiedades, remitentes, destinatarios y tokens se cruzan entre workflows"* y auditó el portal completo.

→ [[Correspondencia]]

---

## La verificación por API (2026-06-17) — la evidencia más fuerte

Extracción directa desde HubSpot, solo lectura, *"sin depender de interpretaciones manuales ni de información declarada por BNO"*.

| Hallazgo confirmado | Dato |
|---|---|
| Estado real de los workflows | 96 totales · 57 ON · 39 OFF · solo 9 comunican al cliente |
| Propiedades comprometidas no creadas | **26 de 31** |
| Objeto de Cobranza | **No existe** (0 objetos personalizados) |
| Accesos activos no regularizados | Usuarios de B&O y externos con acceso |
| Lógica interna auditada | **4,848 nodos** de los 96 workflows |
| Propiedades totales | 2,142 |

Esta es la capa de evidencia que **no admite discusión**. Todo lo declarativo se contrasta contra esto.

---

## La conciliación de las cifras

Cómo se llega de 284 a 217:

```
284  Hallazgos consolidados (universo)
 −18  Resueltos (TI Monific + validados)
 −15  Descartados / no aplican
────
251  Abiertos
      ├── 217  exigibles directamente a B&O
      ├──   2  controles informativos (CON-216, CON-217 — funcionan según diseño)
      └──  32  abiertos no exigidos directamente a B&O
```

**Los 217 por prioridad:** 84 críticos · 87 altos · 37 medios · 9 bajos.

**Reconocidos por escrito por B&O:** 103 (94 de ellos dentro de los 217).

---

## Cómo se clasifica cada hallazgo

La matriz usa una columna de **Validación Monific (Raquel)** que determina si cuenta como abierto o cerrado:

| Suma a "siguen mal / abiertos" | Suma a "resueltos / validados" | Neutrales |
|---|---|---|
| Sigue mal (abierto) | Validado (resuelto) | Descartado por acuerdo de alcance |
| Sigue mal — BNO reconoció que aplica | Resuelto (con pendiente menor) | No aplica / informativo |
| Sigue mal — verificado por API | Resuelto pendiente de confirmar | Sin evidencia objetiva — revisar |
| BNO documentó resuelto pero sigue mal | Resuelto por TI Monific (Daniel) | |
| Bloqueado — pendiente decisión Monific | | |
| En curso (BNO) | | |
| Pendiente — BNO debe definir | | |
| Pendiente — TI Monific | | |

---

## ⚠️ El método de auditoría del cliente

Dato clave para calibrar la confianza. Hay dos declaraciones de **[[Raquel Alfie]]**, y la de los correos es mucho más precisa.

### Lo que dijo al enviar la 1ª auditoría (2026-05-20)

> *"Entre el 18 y el 20 de mayo hice un recorrido sobre los workflows de HubSpot de los pipelines de Solicitantes, Inversionistas, Servicio al Cliente y Cobranza. Para acelerar la revisión **utilicé una extensión de Claude in Chrome** como apoyo, y varios workflows también los revisé manualmente uno por uno.*
>
> ***Importante: no lo veo como un dictamen cerrado ni como una 'auditoría final'**, sino como un mapa de trabajo para ayudarnos a cerrar los WF como nos pidieron ustedes.*
>
> *Como parte del recorrido fue automatizado, es normal que haya cosas que **necesiten contexto adicional, ya estén resueltas desde otro ángulo, o que ustedes consideren falsos positivos**. De hecho, antes de mandarlo hice una depuración porque **el primer borrador había salido con 163 hallazgos** y había muchas cosas que no valían la pena conservar.*
>
> *También quiero reconocer que **sí hay avances importantes**, especialmente en Ventas, Servicio y Cobranza. **No quiero que este documento se lea como algo negativo del proyecto.** Al contrario, son unos picudos y estamos súper agradecidos."*

Y pidió expresamente a B&O usar la columna *"Comentario / Decisión final"* para **confirmar lo que aplica, descartar lo que no, marcar lo resuelto y señalar lo que requiera conversación**.

### Lo que dijo en la reunión del 2026-06-29

> *"Su auditoría se hizo cruzando el documento máster vía API con IA, **sin revisar flujo por flujo**."*

### Cómo leerlo

- Los hallazgos con **evidencia por API** (estado ON/OFF, existencia de propiedades, nodos) son sólidos y verificables. Esa capa no admite discusión.
- Los hallazgos **declarativos** (interpretación de lógica de negocio, discrepancias master ↔ realidad) pueden contener falsos positivos — **la propia autora lo anticipó por escrito**.
- El embudo fue **163 → 112** hallazgos tras depuración manual. Es razonable esperar que una segunda depuración conjunta reduzca más.
- Raquel reconoció que **el origen de la discrepancia master ↔ flujos fue falta de comunicación**, no solo culpa del proveedor.
- Ya ocurrió al menos una vez: los tracks que reportaban *"falta del objeto de cobranza"* quedaron **validados desde Tickets** y se cerraron.

⚠️ **Tensión no resuelta:** la 1ª auditoría se envió como *"mapa de trabajo, no dictamen"*. Un mes después, sus hallazgos forman parte de un **requerimiento contractual formal con reserva de derechos**. El cambio de estatus del documento no se discutió por escrito.

**Regla de trabajo:** contrastar caso por caso, empezando por los 103 que B&O ya reconoció.

---

## Los indicadores en vivo (tablero de la matriz)

| Indicador | Avance |
|---|---|
| Hallazgos abiertos | 249 / 284 (87.7 %) |
| Hallazgos resueltos o validados | 18 / 284 (6.3 %) |
| Defectos que B&O reconoció y siguen abiertos | 103 / 284 (36.3 %) |
| Acciones de TI (Daniel) cerradas | 12 / 20 (60 %) |
| Comunicaciones construidas | **0 / 81 (0 %)** |

⚠️ Estos números son de seguimiento operativo en vivo y varían mientras Raquel valida filas. Las cifras **oficiales** del corte son las de la conciliación 284 → 217.

---

## El Plan Único de Corrección

Documento paralelo a la matriz, versión 3 del **2026-06-13**, con **51 acciones vigentes** (`PLAN-001` a `PLAN-057`).

| Responsable | Total | P0 | P1 | P2/P3 |
|---|---|---|---|---|
| **Monific – TI** | **27** | 2 | 10 | 15 |
| BNO – Arquitectura | 6 | 1 | 5 | 0 |
| Sin asignar | 6 | 1 | 0 | 5 |
| Compartido (BNO define + TI ejecuta) | 5 | 1 | 1 | 3 |
| BNO – Implementación HubSpot | 5 | 0 | 1 | 4 |
| Monific – Raquel | 2 | 1 | 0 | 1 |

⚠️ **Dato relevante:** más de la mitad de las acciones (27 de 51) son responsabilidad de **TI de Monific**. Es una distribución muy distinta a la del requerimiento formal, que atribuye 217 pendientes a B&O. Son dos listas con criterios diferentes que conviven sin conciliación. → [[Contradicciones y Verificaciones]]

Acciones eliminadas de la v2: PLAN-007/022/023 (dirección de onboarding, vive fuera de HubSpot), PLAN-050/051/054 (bidireccionalidad de campañas, no aplica), PLAN-058 (Apps Script), PLAN-059/060 (capacitación y conciliación de horas, quitados del plan).

---

## Los anexos donde vive el contenido

La matriz es **control y evidencia**, no contenido. Regla explícita para B&O:

| Qué necesitas | Dónde está |
|---|---|
| Textos y plantillas de las 81 comunicaciones | *"03. Matriz completa de comunicación"*, Parte II "Biblioteca de plantillas y textos" (`D001`) |
| Formulario nuevo de solicitantes + árbol de decisiones + SLAs | *"Entregables del 26 de enero"* (`D195`) |
| Datos de la auditoría por API (4,848 nodos, 2,142 propiedades) | Excel de extracción |

> *"Si no encuentras el texto/insumo de algo en este archivo, está en el anexo indicado. No hay nada en las auditorías viejas que no esté reflejado aquí o señalado como anexo."*

---

## Documentos de auditoría disponibles

| ID | Documento |
|---|---|
| `X002` / `X008` | Matriz Única de Hallazgos BNO — corte 2026-06-18 (11 hojas) |
| `X020` | Requerimiento Formal BNO — corte 2026-06-18 |
| `X021` | 01. Auditoría Comunicaciones |
| `D191` | 02. Brecha Comunicaciones |
| `X001` | 01. Plan de Corrección (Plan Único v3) |
| `X003` | Respuesta B&O con validación de CON-021 y Gantt de remediación |
| `X004` | Plantilla de Respuesta BNO (vacía) |
| `P_EXPREQ` | Expediente del requerimiento |
| `X017` | Relación de propiedades a crear (derivado) |

---

## 🆕 La revisión de cierre de Monific (2026-09-24)

Primer corte de evidencia **del cliente** posterior al requerimiento del 2026-06-18. Monific volvió a
leer el portal `48427391` por API —configuración de los workflows el **2026-09-22**, export terminado
el **2026-09-24**, `FINALIZADO_CON_LIMITACIONES`— y lo contrastó con masters, minutas, correos y la
Plantilla_Respuesta_BNO.

| Qué | Valor según Monific |
|---|---|
| Hallazgos | **14** (H01–H14): **5 críticos** (H01, H02, H04, H08, H11) y 9 altos |
| Workflows leídos | **105**, 85 encendidos |
| Veredicto sobre B&O | *"No hay sustento suficiente para aceptar el cierre integral"* |
| Avances reconocidos | Los **seis workflows UNE** existen; **WF-039** ya no reabre Activo; pruebas de COB-003 y COB-010 |
| Cómo responder | En la **misma** Plantilla_Respuesta_BNO, por ID; sin matriz nueva |

⚠️ **Cambio de método respecto de junio.** Esta vez el cliente **retira varias de sus propias
afirmaciones anteriores** —"los seis UNE no existen", "26 faltantes" como cifra vigente, "las 81
comunicaciones están ausentes"— y separa expresamente *error comprobado* de *no demostrado*. Es
documento del cliente, con límites declarados y **no reproducido por B&O**. → [[Contradicciones y Verificaciones]] C-34.

→ Detalle completo: [[revision-cierre-2026-09-24-reporte-evidencias-monific|Revisión de cierre 2026-09-24]]

---

## Relacionado

- [[Conflicto Contractual]] — cómo se usan estas cifras
- [[Bloques de Cierre B01-B16]] — cómo se organiza la remediación
- [[Pendientes Criticos]] — los 84 críticos
- [[Contradicciones y Verificaciones]] — qué no cuadra
- [[Higiene y Accesos]] — los hallazgos técnicos
- [[revision-cierre-2026-09-24-reporte-evidencias-monific|Revisión de cierre 2026-09-24]] — el corte de evidencia más reciente del cliente

## Fuentes

- `X002` — Matriz Única de Hallazgos, hojas LÉEME, Tablero y Hallazgos consolidados
- `X020` — Requerimiento Formal, §3 y §4
- `X021` — Auditoría de Comunicaciones
- `X001` — Plan Único de Corrección v3
- `X003` — Respuesta B&O
- `D178` — Minuta 2026-06-29: método de auditoría de Raquel
- `D190` — Correspondencia: fechas de envío, método declarado y depuración 163 → 112
- `D203` — Reporte de evidencias HubSpot de Monific, 2026-09-24
- `D204` — Instrucción *Leer primero* de la revisión de cierre, 2026-09-24
