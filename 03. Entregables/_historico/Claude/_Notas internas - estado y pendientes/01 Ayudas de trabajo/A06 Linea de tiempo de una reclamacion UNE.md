# A06 · Línea de tiempo de una reclamación UNE

> **Para quién:** Director Comercial (D.C.), Director de Cumplimiento Legal (D.C.L.), Dirección.
> **Cuándo se usa:** el día que entra una reclamación formal. **No se estima de memoria: es un plazo regulatorio.**
> **Formato final:** una página, imprimible, en la pared.

## 🔴 Advertencia de estado

**Los seis flujos UNE figuran como "No acreditado" en el inventario de HubSpot.** Ninguno está implementado.

Esta línea de tiempo es **el diseño acordado y la obligación regulatoria** — no es una descripción de lo que el portal hace hoy. Hoy, **todos estos plazos dependen de que una persona los recuerde**.

Por eso es el primer artículo de la lista de prioridad: es el único proceso del proyecto con **plazo regulatorio externo**. Un incumplimiento aquí no es un problema de conversión, es un problema ante CNBV/CONDUSEF.

---

## La línea de tiempo

```
DÍA 0                    DÍA 5      DÍA 8    DÍA 10                    DÍA 30 hábil
  │                        │          │        │                            │
  ▼                        ▼          ▼        ▼                            ▼
Entra la              Recordatorio  Recorda-  Vence la tarea          LÍMITE REGULATORIO
reclamación             a D.C.      torio     de dictamen             para entregar
  │                                  a D.C.      │                     el dictamen
  ├─ Se crea ticket en pipeline UNE              │                            │
  ├─ Se asigna a D.C.                            └─ Si sigue abierto:         │
  ├─ Se genera FOLIO                                escalamiento a superior   │
  ├─ Se calcula fecha límite (+30 días hábiles)     + tarea urgente           │
  ├─ Se registra trimestre de reporte                                         │
  └─ ACUSE al cliente con folio y plazo                                       ▼
                                                                     Cierre con dictamen
                                                                     → reporte trimestral
```

**Los dos relojes son distintos y no deben confundirse:**

| Reloj | Plazo | Qué es |
|---|---|---|
| **Interno** | 10 días para el dictamen | Compromiso operativo de Monific consigo misma |
| **Regulatorio** | **30 días hábiles** | Obligación ante CNBV / CONDUSEF |

Los 10 días existen precisamente **para que los 30 nunca se agoten**. El Maestro Operativo registra como pendiente crítico: *"separar SLA interno del plazo regulatorio"*.

---

## Cómo entra una reclamación

El cliente sigue el proceso de **3 pasos** publicado en el sitio de Monific: llena el PDF **"Formato UNE"** y lo envía a **une@monific.com**. En ese momento se genera el ticket.

---

## Qué debe pasar en cada momento

| Momento | Qué | Automático o manual | Responsable |
|---|---|---|---|
| **Día 0** | Se crea el ticket en el pipeline **UNE** (no en Atención) | Auto | Sistema |
| **Día 0** | Se asigna a **D.C.** | Auto | Sistema |
| **Día 0** | Se genera el **Folio UNE** | Auto ⚠️ *ver bloqueo* | Sistema |
| **Día 0** | Se calcula **fecha límite = recepción + 30 días hábiles** | Auto ⚠️ *ver bloqueo* | Sistema |
| **Día 0** | Se registra el **trimestre de reporte CNBV** | Auto | Sistema |
| **Día 0** | **Acuse al cliente** por correo, con folio y plazo de 30 días | Auto | Sistema |
| **Día 0** | Se crea tarea de dictamen con vencimiento a **10 días** | Auto | Sistema |
| **Día 5** | Recordatorio a D.C. | Auto | Sistema |
| **Día 8** | Segundo recordatorio a D.C. | Auto | Sistema |
| **Día 10** | Vence la tarea. Si sigue abierta → **escalar a superior + tarea urgente** | Auto | Sistema |
| **≤ Día 30 hábil** | Emitir dictamen, adjuntarlo y mover a Cerrado | **Manual** | D.C. |

---

## Las tres reglas que no se negocian

**1 · El ticket UNE es separado.**
Una reclamación formal **nunca** se mezcla con el ticket de servicio. Si un ticket Tipo D se convierte en Tipo E, se crea un ticket UNE nuevo y se deja referencia cruzada. No se cambia el tipo del ticket existente.

**2 · Nueva reclamación = ticket nuevo.**
**Los tickets UNE cerrados no se reabren.** Si el cliente vuelve, llena el formulario otra vez y se genera otro ticket. (Los tickets de *servicio* sí se reabren; los UNE, no.)

**3 · No se puede cerrar sin dictamen.**
El cierre exige `Resultado del dictamen` (Aprobado / Rechazado) **y** el archivo del dictamen adjunto. Sin ambos, el ticket no se mueve.

---

## Los 17 campos que hay que capturar a mano

Se llenan en la etapa **Abierto** y **todos son obligatorios**. Ver el procedimiento completo en **P08 · Registrar una reclamación UNE completa**.

| Del reclamante | Del domicilio | Del caso | Del dictamen |
|---|---|---|---|
| Nombre del reclamante | Domicilio | Monto reclamado | Resultado del dictamen |
| CURP | Código postal | Hechos | Dictamen (archivo) |
| | Municipio o alcaldía | Producto o servicio involucrado | Estatus del ticket |
| | Colonia | Formato UNE (archivo) | |
| | Ciudad | | |
| | Estado | | |

**Opcionales:** notas de consulta con D.C.L. · documentos de soporte adicionales.

---

## 🔴 Los bloqueos, en orden de gravedad

### 1 · HubSpot no puede calcular 30 días hábiles ni generar la serie de folios

La suscripción del portal **no incluye Data Hub ni acciones de código**. La regla de diseño lo dice literal: *"Sin Data Hub no generar serie ni calcular 30 días hábiles."*

Hay una contradicción abierta entre documentos:

| Fuente | Dice |
|---|---|
| Master de Servicio/UNE | Folio auto-generado `UNE-YYYY-MM-NNN` y fecha límite calculada automáticamente |
| Minuta de revisión del pipeline | *"elimina la necesidad de generar folios manualmente, HubSpot los generará automáticamente"* |
| Regla de diseño UNE-02 y limitación del portal | **HubSpot no puede hacer ninguna de las dos cosas** |

**Las dos salidas posibles:**

| Opción | Qué implica |
|---|---|
| **A** — Admin Monific calcula folio y fecha límite y los envía por API | Coherente con la regla 29 de cobranza y con toda la doctrina del proyecto. **Es la salida recomendada** |
| **B** — Usar el ID nativo del ticket como folio y aceptar cálculo aproximado | **No cumple el plazo hábil real.** Inaceptable en un proceso regulatorio |

**No hay decisión registrada.** Es lo primero que hay que cerrar.

### 2 · Los seis flujos no existen

| ID | Flujo | Estado |
|---|---|---|
| UNE-01 | Crear / registrar ticket UNE | 🔴 *"No existe workflow documentado en el master fuente"* |
| UNE-02 | Definir folio y fechas regulatorias | 🔴 Bloqueado por el punto 1 |
| UNE-03 | Acuse de recepción | 🔴 Falta definir copy, remitente, consentimiento y destinatario |
| UNE-04 | Tarea de dictamen | 🔴 *"No usar tarea recurrente ni destinatario fijo"* |
| UNE-05 | Escalamiento por vencimiento | 🔴 *"La fecha debe llegar calculada desde Monific"* |
| UNE-06 | Cierre con dictamen | 🔴 — |

### 3 · Todo el proceso recae en una persona

El master asigna las reclamaciones UNE a **Raquel Alfie**, quien además es nivel 2 y nivel 3 del escalamiento de atención. Sin un respaldo nominal definido, una ausencia suya durante el plazo de dictamen es un riesgo regulatorio directo.

---

## Qué hacer HOY, mientras esto se resuelve

Hasta que los seis flujos existan y estén verificados:

1. **Lleva el control del plazo fuera de HubSpot.** Un calendario compartido con la fecha límite de cada folio, calculada a mano en días hábiles.
2. **Asigna un respaldo nominal del D.C.** por escrito.
3. **Registra igual el ticket en el pipeline UNE**, aunque el folio y las fechas se capturen a mano. La trazabilidad importa aunque la automatización no exista.
4. **Los recordatorios de día 5 y 8 ponlos como tarea manual** el mismo día que entra la reclamación.

---

## Estado y verificación

**Estado:** 🔴 **bloqueado** · 2026-08-18
**Fuente:** Master de Implementación Servicio/UNE, hojas *"Pipeline UNE"* y *"Listado prop. UNE"*; Maestro Operativo (2026-07-31), fichas UNE-01 a UNE-06; requerimiento formal, bloque **B15**; minuta de revisión del pipeline de Servicio.

**Qué exige el bloque B15:** *"Activar UNE; generar expediente/folio; notificar a Compliance; bloquear el cierre sin documentación."* Evidencia mínima: caso Tipo E completo, folio, notificación y captura del pipeline. Criterio de aceptación: toda reclamación genera expediente y folio; cierre controlado. Plazo: +20 días hábiles.

**Para desbloquear:**

| # | Qué | Quién |
|---|---|---|
| 1 | Decidir si el folio y los 30 días hábiles los calcula el Admin (opción A) o se usa el ID nativo (opción B) | Monific TI + Dirección |
| 2 | Implementar o sustituir los seis flujos UNE-01 a UNE-06 | Bloque B15 |
| 3 | Definir copy, remitente y consentimiento del acuse (UNE-03) | Monific |
| 4 | Asignar respaldo nominal del D.C. | Dirección |
| 5 | Probar un caso Tipo E de punta a punta con evidencia | B&O + Monific |
| 6 | Validación de **Legal y Compliance** — el requerimiento formal la exige explícitamente para dar por cerrado el proyecto | Monific |
