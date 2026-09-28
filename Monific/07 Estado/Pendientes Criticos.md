---
titulo: Pendientes Criticos
tipo: estado
area: transversal
estado: bloqueado
confianza: alta
actualizado: 2026-09-28
fuentes: [D167, X020, X002, X001, V_DO_20260831, D199, D200, D201, D202, D203, D204]
tags: [pendientes, criticos, bloqueadores]
---

# Pendientes Críticos

> **En una frase:** lo que hay que resolver sí o sí — 84 hallazgos críticos, 87 altos y seis pendientes transversales que el propio Maestro Operativo marca como "que no deben perderse".

---

## Los seis pendientes que no deben perderse

Del Maestro Operativo (`D167`, §6). Son la lista corta que gobierna el cierre:

| # | Pendiente | Estado |
|---|---|---|
| 1 | **Solicitantes:** eliminar el scoring numérico y homologar viable / no viable / parcialmente viable | ✅ Decidido 2026-07-27 · 🔴 no propagado al master |
| 2 | **Cobranza:** dejar explícita la operación semana 1 Monific, semana 2 despacho, acción legal desde semana 3 | 🔴 Sin conciliar con la cadena día 15/16/30/61 |
| 3 | **Integración:** confirmar Proyecto como eje sin contradicción con Deal de campaña y cerrar IDs/asociaciones | 🟡 Decidido; IDs pendientes (gate T3) |
| 4 | **UNE:** implementar o sustituir los seis flujos y separar SLA interno del plazo regulatorio | 🔴 Sin avance |
| 5 | **Comunicaciones:** ningún correo o WhatsApp se activa sin copy, remitente, consentimiento y destinatario aprobados | 🔵 **81 publicadas e integradas** según declaración del 2026-08-31 · 🔴 sin evidencia por asset ni aprobación escrita de Monific |
| 6 | **API:** corregir los catálogos de proyecto que provocaron rechazos 400 y definir reintento/reproceso | 🔴 ~1,125 deals fallidos |

---

## Los bloqueadores duros del cierre

Lo que, si no se resuelve, impide declarar el proyecto cerrado:

| # | Bloqueador | Por qué bloquea |
|---|---|---|
| 1 | **171 hallazgos críticos + altos abiertos** | Criterio explícito del requerimiento |
| 2 | **UNE sin acreditar** | Riesgo regulatorio; Legal y Compliance de Monific tienen veto |
| 3 | ~~0 de 81 comunicaciones~~ → **81 publicadas sin acreditar** | B08. Declarado el 2026-08-31; el bloque no cierra sin link, prueba y aprobación por asset |
| 4 | **Dashboards: 2 de 4 sin justificación de bloqueo** | B06. Comunicación y desempeño **no** dependen de la integración |
| 5 | **26 propiedades inexistentes** | Sin ellas no hay datos que mover ni medir |
| 6 | **Integración sin terminar** | De ella dependen los journeys de Inversionistas y Cobranza |
| 7 | **Capacitación y base de conocimiento sin acreditar** | Entregable contractual (bloque B09). Los materiales existen y están publicados; falta la acreditación formal |
| 8 | **Corte de horas sin conciliar** | Bloque B13. Disputa de alcance |
| 9 | 🆕 **Fecha de cierre (H5, 2026-08-28) vencida sin prórroga escrita** | Disparador directo de R-01 (rescisión). Es el bloqueador más urgente por calendario |
| 10 | 🆕 **Anexo operativo del cambio a modelo de asesoría, sin firmar** | El cambio de alcance más grande del proyecto no está documentado contractualmente. → [[Riesgos]] R-04b |
| 11 | 🆕 **Las 11 correcciones comprometidas el 2026-08-03 sin evidencia de ejecución** | Compromiso propio de B&O por escrito. → [[Analisis de Cierre BNO]] |
| 12 | 🆕 **Evidencias faltantes de Solicitantes (WF-001→024) e Inversionistas (WF-025→040)** | Solo hay capturas de WF-037 y WF-039. Servicio y Cobranza sí están completos en `outputs/` |

---

## Compromisos abiertos de las sesiones internas del 2026-08-24 y 2026-08-31

De `D200` y `D201`, las dos sesiones *"Follow up: Monific"* previas a la del 2026-09-02. **Ninguna
tuvo participación de Monific.** Se listan aquí porque una de ellas es el único mecanismo registrado
para acreditar el estado real del proyecto.

| Responsable | Compromiso | Fecha | Estado |
|---|---|---|---|
| David Ochoa | 🆕 **Confronta de cobertura total**: la última auditoría unificada de Raquel Alfie contra lo que hay en HubSpot, contra lo ya subido y contra lo pendiente, con **bitácora completa** | Sin fecha escrita (2026-08-24) | 🔴 **Abierto.** Al 2026-09-08 no hay bitácora en la wiki. **Es lo que cerraría C-32** |
| David Ochoa | Probar la integración con Miro para el flujograma homologado de Monific | Sin fecha (2026-08-31) | ✅ **Cumplido** el 2026-09-01 — 5 tableros V2 |
| Emmanuel Chulin | Convocar la alineación interna del miércoles sobre flujogramas | 2026-09-02 | ✅ **Cumplido** — es la sesión `D199` |
| Emmanuel Chulin | **Dar estatus a Raquel Alfie** tras esa alineación, *"que solo estamos esperando a su equipo de TI"* | Después del 2026-09-02 (2026-08-31) | 🔴 **Abierto y aplazado.** D-09-02-02 lo pospuso hasta cerrar ATC y UNE |
| — | 🆕 **Prueba integral 360** de las comunicaciones al cliente. Probadas **individualmente** por Jazmín Córdova *(inferencia sobre el nombre)*, nunca en flujo completo | Sin fecha (2026-08-24). David la califica de baja prioridad | 🔴 **Abierto.** Es la evidencia por asset que exige el bloque **B08** |

⚠️ **Dos hechos que conviene leer juntos.** El 2026-08-24 se declara que *"ya no hay deuda de
trabajo"* y se **elimina la reunión interna de mitad de semana**; el 2026-08-28 vence la fecha de
cierre **H5 sin prórroga escrita** (bloqueador #9). *(inferencia)* La cadencia de seguimiento bajó
justo en la semana del vencimiento. La fuente no lo relaciona; la observación es de esta ingesta.

⚠️ **Jazmín Córdova quedó liberada del proyecto el 2026-08-24** *(inferencia sobre el nombre)*,
antes de que existiera la prueba 360 de las comunicaciones que ella implementó.

→ [[minuta-2026-08-24-cierre-declarado-y-confronta-auditoria|Minuta 2026-08-24 · Cierre declarado]] · [[minuta-2026-08-31-homologacion-flujogramas-y-reprogramacion|Minuta 2026-08-31 · Homologación de flujogramas]]

---

## Compromisos abiertos de la sesión interna del 2026-09-02

De `D199`. Son **compromisos internos de B&O**, no acuerdos con Monific: en esa sesión no participó
nadie del cliente. Se listan aquí porque tres de los cuatro condicionan la comunicación con Monific.

| Responsable | Compromiso | Fecha | Estado |
|---|---|---|---|
| David Ochoa | Terminar los flujogramas de **Servicio ATC** y **UNE** — generarlos, validarlos y limpiarlos | Dicho en sesión: *"no debería de pasar ya de mañana"* → **esperado 2026-09-03**. Sin fecha escrita ni compromiso formal | 🟡 Abierto. ⚠️ Choca con lo registrado el 2026-09-01 → C-31 |
| Emmanuel Chulin | **Dar estatus a Raquel Alfie** de dónde está el proyecto | Bloqueado: solo cuando David avise que los flujogramas están listos | 🔴 Abierto. Es un **aplazamiento deliberado** de la comunicación al cliente, decidido el 2026-09-02 |
| Emmanuel Chulin | **Pedir a Monific estatus de la integración** y que reporten cualquier blocker | Sin fecha | 🔴 Abierto. Es la única preocupación que David declara: que el primer mapeo de propiedades no haya cubierto todas las necesarias |
| — | Entregar los flujogramas al cliente | Condicionada al cierre de ATC y UNE (decisión D-09-02-02) | 🟡 Aplazada por decisión propia |

⚠️ **Lee esto junto con el bloqueador #9.** La fecha de cierre H5 venció el 2026-08-28 sin prórroga
escrita, y el 2026-09-02 B&O decidió **no dar estatus al cliente** hasta terminar dos flujogramas.
*(inferencia)* Son dos hechos registrados por separado que apuntan al mismo riesgo R-01; nadie los
ha cruzado por escrito todavía.

→ [[minuta-2026-09-02-flujogramas-simplificados|Minuta 2026-09-02 · Flujogramas simplificados]]

---

## Compromisos abiertos de la sesión interna del 2026-09-08

De `D202`, la cuarta sesión seguida **sin participación de Monific**. Duró siete minutos y la mayor
parte trató otras cuentas; lo de Monific cabe en una tabla.

| Responsable | Compromiso | Fecha | Estado |
|---|---|---|---|
| Emmanuel Chulin | 🆕 **Enviar el correo pendiente al cliente** — *"se me complicó un poco la semana pasada […] ahorita me quedo con eso"* | Dicho para el mismo 2026-09-08. Sin fecha escrita | 🔴 **Abierto.** *(inferencia)* Es el estatus a Raquel Alfie que D-09-02-02 aplazó; la fuente **no nombra destinatario ni cuenta** → `PENDIENTES.md` H-32 |

⚠️ **Los dos compromisos previos sobre el estatus al cliente siguen sin cumplirse.** El de `D201`
(2026-08-31, *"dar estatus a Raquel Alfie"*) y el de `D199` (2026-09-02, condicionado a ATC y UNE)
llevan **nueve y seis días abiertos** respectivamente al 2026-09-08, y en `D202` el correo sigue
siendo un pendiente declarado. *(inferencia)* Junto con el bloqueador **#9** —H5 vencida el
2026-08-28 sin prórroga escrita— significa que **Monific no ha recibido estatus formal de B&O desde
antes del vencimiento de la fecha de cierre**. Ninguna fuente cruza los dos hechos.

⚠️ **Sobre el bloqueador #7 (capacitación).** `D202` declara *"listos los documentos para
capacitaciones"*. Eso **no cambia el estado del bloqueador**: B09 exige acreditar entrega,
asistencia y evaluación, no que el material exista. → [[Contradicciones y Verificaciones]] C-32.

→ [[minuta-2026-09-08-mapeos-cubiertos-y-espera-integracion|Minuta 2026-09-08 · Mapeos cubiertos]]

---

## Lo que Monific exige en su revisión de cierre del 2026-09-24

De `D203` y `D204`, documentos **de Monific**. Son **exigencias del cliente a B&O**, no compromisos
aceptados por B&O: al 2026-09-28 no hay respuesta de B&O registrada en esta wiki.

| Responsable según Monific | Qué pide | Fecha | Estado |
|---|---|---|---|
| B&O | 🆕 **Responder por ID en la misma Plantilla_Respuesta_BNO** —columna AJ de *Respuesta BNO*, AA de *Bloques*, Q de *Dependencias*—, con responsable nominal, fecha compromiso y enlace a prueba con resultado esperado y real. Sin matriz nueva y sin borrar el histórico | Sin fecha en la fuente: *"El correo pide responsable y fecha concreta por pendiente"* | 🔴 **Abierto** |
| B&O | 🆕 **Corregir lo que no depende de TI:** H02 (WF-045), H04 (WF-018 a Ganado), H05 (WF-033), H06 (WF-026), H07 (WF-039) de `D203` | Sin fecha | 🔴 **Abierto.** Son cambios en HubSpot vivo: requieren confirmación explícita antes de tocarlos |
| B&O | 🆕 **Índice único con URL y versión** de manuales, tableros, guías y sesiones (H14), y **tableros configurados** aunque la validación de datos espere a TI | Sin fecha | 🔴 **Abierto.** Toca los bloqueadores #4 y #7 |
| TI Monific + B&O | Un solo nombre por dato financiero (H01) antes de renombrar nada | Sin fecha | 🔴 Abierto |
| Monific Legal/Finanzas | Decidir **cuál de los tres calendarios de cobranza/ARI rige** (H08) | Sin fecha | 🔴 Abierto — **de Monific**, bloquea la configuración de B&O |
| Conjunto | Prueba de **seis recorridos** con registros controlados | Sin fecha | 🔴 Abierto |

⚠️ **Sobre el bloqueador #9.** `D203` dice que el **2026-08-20** Monific aceptó alinear el trabajo al
cierre estimado de TI a **finales de octubre**. No es una prórroga contractual —*"no se reinician
plazos"*— pero sí un acuerdo escrito de ritmo que la wiki no tenía. **El bloqueador no cambia de estado**
hasta ver los correos → [[Contradicciones y Verificaciones]] **C-35**.

⚠️ **Sobre la inferencia de la sección del 2026-09-08** (*"Monific no ha recibido estatus formal de B&O"*):
`D203` registra un **correo de B&O a Monific el 2026-09-11** con el estatus de sus entregables. La
inferencia quedó superada; se conserva con su fecha → **C-36**.

→ [[revision-cierre-2026-09-24-reporte-evidencias-monific|Revisión de cierre 2026-09-24]]

---

## Los hallazgos críticos documentados

Muestra de los 84 críticos, con su bloque y su corrección exigida. La lista completa está en el anexo "Pendientes" de `X020`.

### Solicitantes

| ID | WF | Problema | Corrección exigida |
|---|---|---|---|
| **CON-021** | WF-008 | Reinscripción apagada: si el comité aprueba **después** de entrar a Evaluación (el caso normal), el WF nunca dispara y el negocio se atora. Rompe el cruce Evaluación → Formalización | Activar reinscripción con condición `Decisión = Aprobado`. Probar dos casos: decisión al ingresar y decisión posterior |
| **CON-026** | WF-010 | La notificación al DG se envía a **todos los contactos asociados**, incluido el solicitante. Filtración de comunicación interna al cliente | Cambiar a destinatario/rol específico. **No** usar "Todos los contactos asociados" |
| **CON-037** | WF-014 | El master dice "Encendido"; HubSpot lo tiene **desactivado**. Las solicitudes rechazadas no generan tarea de carta de rechazo | Sincronizar master con la realidad de HubSpot. Activar solo tras corregir trigger, propietario y SLA |
| **CON-061** | WF-027 | Valores **hardcoded**: `Nivel de registro = "3. Cuenta STP creada"` y `CLABE STP = 1`. Si se activa, todos los negocios entrantes reciben los mismos valores fijos | Reescribir para que se llenen vía integración Admin → HubSpot. Eliminar los hardcodes |

### Cobranza

| ID | WF | Problema | Corrección exigida |
|---|---|---|---|
| **CON-104** | WF-053 | La única acción es "Inscribirse en una secuencia" con tokens `{{sequenceId}}` y `{{senderType}}` **sin resolver**. El WF **no puede ejecutarse**. Tampoco contempla WhatsApp, obligatorio según la minuta del 2026-03-05 cuando hay teléfono | Definir `sequenceId` real o rediseñar como correos individuales + WhatsApp condicional. Modelar el ciclo completo: día 1 correo, día 7 preventivo, día 13/14 correos, día 15 correo + tarea de llamada |
| **CON-109** | WF-059 | Mueve a "Cierre por refinanciamiento" pero **solo cambia la propiedad**: no notifica a Compliance/Dirección/Finanzas, no crea tarea de archivo, no genera registro CNBV | Agregar (1) notificación a Compliance + Dirección + Finanzas, (2) tarea "Archivar expediente refinanciamiento", (3) registro CNBV trazable. Replicar la condición probatoria de aprobación de comité en WF-056 y WF-064 |

### Transversales

| Problema | Impacto |
|---|---|
| **Tokens HubL sin resolver** en WF-010, WF-055, WF-058, WF-061, WF-064 | El destinatario ve el token en crudo |
| **Destinatarios personales de B&O** en 5 nodos productivos | Exposición de información y dependencia del proveedor |
| **App legacy `Migracion-monific` con token activo** | Riesgo de seguridad |
| **Scopes `highly_sensitive` sin uso documentado** | Superficie de riesgo innecesaria en una entidad regulada |
| ~~Plantilla de otro cliente en dos masters~~ | 🔵 Declarada depurada el 2026-08-31. Falta explicar el origen y versionar (bloque B12) |
| **`nombre_de_proyecto` con 172 opciones y UTF-8 inconsistente** | ~1,125 deals fallidos |
| **383 propiedades vacías** en Negocio | Ruido que distorsiona reportes |

---

## Las acciones P0 del Plan Único

Del Plan Único de Corrección v3 (2026-06-13). Son 6 acciones de máxima prioridad, repartidas así:

| Responsable | P0 |
|---|---|
| Monific – TI | 2 |
| BNO – Arquitectura | 1 |
| Compartido | 1 |
| Monific – Raquel | 1 |
| Sin asignar | 1 |

⚠️ Dos de las seis P0 son de TI de Monific, no de B&O.

---

## Los que ya se resolvieron

Para mantener el balance:

| Resuelto | Cómo |
|---|---|
| **Objeto de Cobranza inexistente** | Se validó que cobranza vive en Tickets (2026-06-29). Cerró varios tracks de auditoría |
| **Lead scoring sin sustento** | Se descartó el score numérico del MVP (2026-07-27) |
| **Contradicción `amount`** (APP-037 vs APP-055) | Prevalece APP-055: `amount` está poblado ~99.9 %. APP-037 quedó obsoleto |
| **Deal padre de campaña** | Descartado por INV-06: el conector es el objeto Proyecto |
| **12 de 20 acciones de TI (Daniel)** | Cerradas |
| **18 hallazgos** | Resueltos y validados |
| **15 hallazgos** | Descartados / no aplican |
| 🔵 **Masters con contenido de otro cliente** | Depurados según declaración del 2026-08-31. B12 no cierra hasta que haya control de cambios y aceptación escrita |
| 🔵 **81 comunicaciones** | Publicadas e integradas según la misma declaración. B08 sigue abierto por falta de evidencia por asset |

---

## Relacionado

- [[Bloques de Cierre B01-B16]] — cómo se organiza la remediación
- [[Auditorias]] — el origen de los hallazgos
- [[Workflows]] — el detalle por workflow
- [[Riesgos]] · [[Estado Actual]]

## Fuentes

- `D167` — Maestro Operativo (2026-07-31), §6 "Pendientes críticos que no deben perderse"
- `X020` — Requerimiento Formal, anexo "Pendientes" (217 filas)
- `X002` — Matriz Única de Hallazgos
- `X001` — Plan Único de Corrección v3
- `V_DO_20260831` — Declaración verbal de Dirección B&O (2026-08-31), sin documento de respaldo
- `D199` — Notas de Gemini de la sesión interna B&O del 2026-09-02 (*Flujograma - Monific*)
- `D200` — Notas de Gemini de la sesión interna B&O del 2026-08-24 (*Follow up: Monific*)
- `D201` — Notas de Gemini de la sesión interna B&O del 2026-08-31 (*Follow up: Monific*)
- `D202` — Notas de Gemini de la sesión interna B&O del 2026-09-08 (*Follow up: Monific*)
