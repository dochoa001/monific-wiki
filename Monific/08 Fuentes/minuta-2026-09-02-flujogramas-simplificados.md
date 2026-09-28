---
titulo: Minuta 2026-09-02 — Flujogramas simplificados
tipo: fuente
area: transversal
estado: historico
confianza: media
actualizado: 2026-09-07
fuentes: [D199]
tags: [fuentes, comercial, integracion]
fecha_reunion: 2026-09-02
participantes: [Emmanuel Chulin, David Ochoa]
---

# Minuta 2026-09-02 — Flujogramas simplificados

> **En una frase:** sesión **interna de B&O** en la que se valida la simplificación de los flujogramas y se decide **no entregarlos al cliente hasta que estén listos ATC y UNE** — decisión que explica el aplazamiento con el que arranca el paquete de contexto del 2026-09-04.

| | |
|---|---|
| **Fecha** | 2026-09-02, 15:02 CST · duración 00:17:03 |
| **Participantes Monific** | **Ninguno.** Sesión interna de B&O |
| **Participantes B&O** | Emmanuel Chulin · David Ochoa |
| **Canal** | Google Meet con Notas de Gemini (resumen + transcripción verbatim) |
| **Fuente** | `D199` |

⚠️ **Es una sesión interna.** Nada de lo aquí acordado está validado por Monific. Todo lo que
describe el flujo es **propuesta TO-BE**, no configuración verificada — sigue aplicando la regla
del proyecto: configurado ≠ verificado (`AGENTS.md` §3.4).

⚠️ **Transcripción automática de voz.** El documento escribe "hotspot"/"Hostpot" por **HubSpot**,
"WFlow" por **WF-###**, "piline" por **pipeline**, "admin modifica" por **Admin Monific** y
"propuesta Esta tob" por **propuesta TO-BE**. Normalizado aquí al vocabulario controlado
(`AGENTS.md` §12). → [[Contradicciones y Verificaciones]] C-16.

---

## Decisiones tomadas

| ID | Decisión | Impacto | Estado |
|---|---|---|---|
| D-09-02-01 | **Se adopta la estructura simplificada de los flujogramas.** Emmanuel Chulin confirma que la propuesta "hace sentido con lo que hoy ya tenemos dentro del portal" y con lo ya acordado con el cliente | Fija el formato con el que los procesos se presentarán al cliente | Acordado (interno B&O) |
| D-09-02-02 | **Se aplaza la entrega de los flujogramas al cliente** hasta que estén terminados los de **Servicio ATC** y **UNE**. Emmanuel dará estatus a Raquel Alfie solo cuando David le avise que están listos | Retrasa deliberadamente la comunicación de estatus a Monific | Acordado (interno B&O) |

🟡 **Documentado** en `D199`. Ninguna de las dos tiene respaldo distinto de las notas de la sesión.

---

## Compromisos

| Responsable | Compromiso | Fecha | Estado |
|---|---|---|---|
| David Ochoa (B&O) | Terminar los flujogramas de **Servicio ATC** y **UNE**: generarlos, validarlos y limpiar lo que sobra | Dicho en sesión: *"no debería de pasar ya de mañana"* → **esperado 2026-09-03**. Sin compromiso formal ni fecha escrita | Abierto al corte de esta ingesta |
| Emmanuel Chulin (B&O) | **Dar estatus a Raquel Alfie** sobre dónde está el proyecto | Condicionado: **después** de recibir los flujogramas terminados de David | Abierto |
| Emmanuel Chulin (B&O) | **Pedir a Monific estatus de la integración** y detectar bloqueos para darles seguimiento | Sin fecha | Abierto |
| Emmanuel Chulin (B&O) | Mostrar a David el **"flujo de diseño"** que estaba probando (asunto interno de B&O, no del proyecto Monific) | Sin fecha | Abierto |

→ Volcados a [[Pendientes Criticos]].

---

## El flujo simplificado de Solicitantes, tal como se narró

🟡 **Documentado** en `D199` — es la descripción verbal de David Ochoa sobre pantalla compartida.
**No hay export, captura ni ID de tablero en la fuente.** Se registra porque es el nivel de detalle
más reciente del proceso, no como configuración acreditada.

| # | Paso | Salidas |
|---|---|---|
| 1 | Llega de cualquier medio digital y **se registra en HubSpot por un formulario** | Se crea y se actualiza el contacto |
| 2 | **¿Tiene inmueble en garantía?** (se pregunta en el formulario de la web) | **No** → directo a perdido · **Sí** → pasa a evaluación |
| 3 | El **área comercial** evalúa y dicta viabilidad | **No viable** → se tipifica el motivo y se pierde · **Viable o con garantía** → sigue |
| 4 | Se crea el **Negocio de Solicitantes** y se envían las notificaciones **WF-001 → WF-007** | — |
| 5 | El comercial (o quien se asigne) **arma el link del expediente**; el solicitante lo llena y recibe recordatorios hasta completarlo | — |
| 6 | Se notifica que la carga terminó; el **asesor revisa** que todo esté correcto | **Parcial** → decidir entre descartar o mandar recordatorio · **No probatoria** → carta de rechazo (automatización) → perdido · **Completa** → sigue |
| 7 | **Revisión WF-008 → WF-014**: notificación a **tres personas o equipos clave**; el asesor documenta y registra la decisión del **comité** | **Rechazada** → perdido · **Aprobada** → cambia de etapa |
| 8 | En HubSpot **se crea el objeto Proyecto** con apoyo del asesor comercial | — |
| 9 | El asesor **envía el proyecto a firma con jurídico**: validación de contratos finales y gestión de firma, **WF-018 → WF-022** | Se notifican `fecha de cierre` y `contrato firmado` |
| 10 | Notificación al solicitante por correo (*comunicación aprobada*); **Marketing autoriza la campaña** y crea el proyecto; el **Admin Monific** lo recibe y lo publica | ⚠️ La fuente añade: *"eso no es del lado de HubSpot porque no hay integración para eso"*. No queda claro en la fuente si "eso" es todo el paso 10 o solo la publicación |
| 11 | Se comprueba **contrato firmado** y **campaña firmada** | **No** → cierre negativo y ⚠️ *"se va de nuevo a la etapa seis"* (así en la fuente; la mecánica no se explica) · **Sí** → **cierre ganado** |
| 12 | Desde cierre ganado, **dos ramas en paralelo**: *campaña abierta para fondeo* → entra **Inversionistas**; *con inversión confirmada* → entra **Cobranza** | — |

**Pipeline:** el flujo se apoya en **seis etapas** (etapa 1 a etapa 6). La fuente no da sus nombres.

🔵 **Declarado** en la misma sesión: `fecha de cierre` y `contrato firmado` *"son propiedades que
existen"*. Sin `internal name` ni verificación por API en la fuente. → [[Propiedades]].

> ⚠️ *(inferencia)* El flujo narrado cita **WF-001–007, WF-008–014 y WF-018–022**, y **no menciona
> WF-015–017 ni WF-023–024**, que [[Proceso Comercial Solicitantes]] sí incluye en el rango
> WF-001–024. Puede ser efecto de la simplificación o un hueco real. **No se resuelve aquí**:
> verificar al propagar.

---

## Cómo se construyó la simplificación

David Ochoa explica que pidió a una IA reconstruir la estructura de los flujogramas existentes
"sin hacer algo muy complejo" y que fuera legible tanto para él como para el cliente. Las fuentes
que dice haber usado, según sus propias notas en el documento de trabajo:

| Fuente citada en sesión | A qué corresponde en la wiki |
|---|---|
| Flujograma **versión 1** — "el Miro ese grandote" | `miro.com/app/board/uXjVG7nRR_I=` → [[Indice de Fuentes]] |
| El **operativo maestro** | `D167` — Maestro Operativo de Procesos y Workflows |
| El archivo "que nos pasó el cliente recientemente" | ⚠️ **Sin identificar.** No se nombra el documento en la fuente |
| Las minutas | Las 21 de [[Minutas]] |
| **La wiki de Monific** | Esta wiki |
| Los archivos de **flujograma versión 2** elaborados por B&O | → los tableros V2 del `log.md` del 2026-09-01 |
| La **propuesta TO-BE** compartida por el cliente | ⚠️ **Sin identificar** con un ID de fuente |

Al corte de la sesión ya estaban entregados por esa vía **Solicitantes, Inversionistas y Cobranza**;
faltaban **ATC y UNE**, "en proceso de generación y validación".

---

## La preocupación abierta: la integración

David Ochoa lo dice explícitamente y dos veces: **la integración es su única preocupación**.

- Depende de que el Admin Monific **alimente correctamente** a HubSpot.
- Depende de que el **primer mapeo de propiedades** haya cubierto todas las que se necesitan.
  *"Si no saliera algo ahí ya me voy a preocupar."*
- Emmanuel Chulin propone **pedir estatus al cliente** y que Monific reporte cualquier blocker; y
  anticipa que, si falta algo, *"nos tocará también hablar y negociar con cliente"*.

🟡 **Documentado.** Encaja con el gate T1–T7 y con el bloqueador de [[Pendientes Criticos]] #6
(*integración sin terminar*). → [[Integracion Admin Monific HubSpot]] · [[Diccionario de Propiedades API]].

---

## Contradicciones detectadas

**Una, registrada como C-31 en [[Contradicciones y Verificaciones]]. No se resuelve aquí.**

| Versión | Dice | Fecha | Fuente |
|---|---|---|---|
| A | El juego de flujogramas **V2 quedó completo con 5 tableros**, incluido uno de **ATC + UNE** (`miro.com/app/board/uXjVHr71yws=`) | 2026-09-01 | `log.md`, entrada *Flujogramas V2 — se completan ATC/UNE y el mapa de integración API* |
| B | **Faltan los flujogramas de atención (ATC) y UNE**, "en proceso de generación y validación", y por eso se aplaza la entrega al cliente | 2026-09-02 | `D199` |

> *(inferencia)* Puede no ser contradicción sino **dos artefactos distintos**: el V2 son tableros de
> Miro, y lo del 2026-09-02 es una simplificación posterior que **usa los archivos V2 como insumo**
> —David los lista entre sus fuentes—. La fuente **nunca dice "Miro" ni "V2"** para lo que muestra en
> pantalla, así que no hay con qué decidirlo. **Ambas versiones se conservan con su fecha.**

---

## Fuera de alcance de esta wiki

El primer tercio de la sesión trata **herramientas internas de B&O** —sincronizar contexto de
trabajo entre equipos, y una herramienta llamada **Conductor** que exige macOS— además de logística
de equipo y viajes. **No es contenido del proyecto Monific y no se destila.** Los datos personales y
de contacto de los asistentes no se reproducen aquí (`AGENTS.md` §3.10).

---

## Páginas que esta fuente debe actualizar

⚠️ **Propagación no ejecutada en esta pasada: son más de 6 páginas, y eso es decisión humana**
(`sincronizar` §5). El texto de abajo ya está orientado para que quien propague no tenga que volver
a la fuente. Registrado también en `PENDIENTES.md`.

| Página | Qué hay que escribir |
|---|---|
| [[Proceso Comercial Solicitantes]] | Integrar el flujo simplificado de 12 pasos y sus 6 etapas de pipeline como **propuesta TO-BE simplificada del 2026-09-02**. Anotar la duda de WF-015–017 y WF-023–024, y el punto del paso 10 (qué queda fuera de HubSpot por falta de integración). Añadir `D199` a `fuentes:` |
| [[Proceso de Servicio ATC]] | Registrar que al 2026-09-02 su flujograma se declara **pendiente de generar y validar**, y que su falta es la razón del aplazamiento de la entrega al cliente. Referir C-31: la wiki ya registra un tablero V2 de ATC+UNE del 2026-09-01 |
| [[Proceso UNE]] | Lo mismo que ATC. Es el proceso con riesgo regulatorio, así que el aplazamiento pesa más aquí |
| [[Proceso Comercial Inversionistas]] · [[Proceso de Cobranza]] | Anotar que su versión simplificada ya estaba entregada al 2026-09-02 (sin ID ni URL en la fuente), y la entrada desde el cierre ganado de Solicitantes (paso 12) |
| [[Integracion Admin Monific HubSpot]] | Añadir el compromiso de pedir estatus y blockers al cliente, y que la preocupación declarada es la **completitud del primer mapeo de propiedades**. No cambia el gate T1–T7 |
| [[Estado Actual]] | El estatus a Raquel Alfie quedó **deliberadamente aplazado** el 2026-09-02. Relevante para el hueco H-20 (prórroga sin acuerdo escrito): el cliente no recibió estatus en esos días por decisión de B&O |
| [[Plan de Cierre y Gantt]] | La entrega de flujogramas al cliente queda condicionada al cierre de ATC y UNE |
| [[Propiedades]] | Marcar 🔵 la declaración de que `fecha de cierre` y `contrato firmado` existen. Faltan `internal name` y verificación por API |
| [[Cronologia del Proyecto]] | Añadir el hito 2026-09-02 |

---

## Relacionado

- [[Proceso Comercial Solicitantes]] — el proceso que esta sesión describe paso a paso
- [[Contradicciones y Verificaciones]] — C-31, la discrepancia sobre ATC/UNE que esta sesión abre
- [[Pendientes Criticos]] — donde viven los cuatro compromisos que salieron de aquí
- [[Integracion Admin Monific HubSpot]] — la única preocupación declarada en la sesión
- [[Indice de Fuentes]] — el registro de `D199`

## Fuentes

- `D199` — *Flujograma - Monific: 2026/09/02 15:02 CST - Notas de Gemini* (Google Doc,
  `fileId = 1IOALVo3D3ARHimBhq-byJF7iVPUDvPFUDsYXjd7NwEo`, ~17 KB, propietario
  `echulin@black-n-orange.com`). Leído íntegro por el MCP de Google Drive el 2026-09-07: pestaña de
  notas **y** pestaña de transcripción verbatim completa. **Sin extracto en
  `08 Fuentes/_extractos/`** — ver `PENDIENTES.md`.
