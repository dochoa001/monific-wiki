# R03 · Ruta de incorporación · Cobranza

> **Para:** quien entra a cobranza (A.A.S. en su función de cobranza, y apoyo de Finanzas).
> **Duración:** una jornada completa.
> **Advertencia:** es el proceso **de mayor prioridad para el cliente** y el que **peor estado técnico tiene**. Esta ruta te dice las dos cosas.

---

## Antes de empezar

- [ ] Usuario activo en el portal **48427391**
- [ ] Correo y calendario conectados → **P01**
- [ ] Alguien de Finanzas a quien preguntar
- [ ] Claridad de que **hoy buena parte de la cobranza preventiva es manual**

---

## Lo primero: el estado real, sin adornos

**13 de los 15 workflows de Cobranza tienen error acreditado. Ninguno está verificado.**

Consecuencia directa y práctica para ti: **el solicitante moroso no está recibiendo los recordatorios automáticos**. Los recordatorios de T-10, T-7 y T-5 existen en el diseño, no en la operación.

Mientras dure, **la cobranza preventiva depende enteramente de tu contacto manual.** Eso no es un detalle: es tu trabajo.

---

## Bloque 1 · Los cimientos (60 min)

| # | Lee | Por qué |
|---|---|---|
| 1 | **A07 · Los cuatro objetos** | Especialmente: **cobranza vive en tickets**, uno por campaña fondeada |
| 2 | Manual de HubSpot, páginas **1 a 4** | Entrar, vocabulario, las cinco reglas |
| 3 | 🔴 **S01 · La frontera de cálculo** | **El artículo más importante de tu rol.** Léelo dos veces |

**Por qué S01 importa tanto aquí:** todos los números que manejas —días de mora, saldos, montos, tabla de cuotas, estado de pago— **los calcula Admin Monific**. HubSpot los muestra. Si no cuadran, la respuesta está en Admin.

**Ejercicio 1.** Abre un ticket de cobranza. Identifica cinco propiedades que llegaron por integración. Con **P09**, confirma el origen de cada una.

---

## Bloque 2 · El ciclo (120 min)

| # | Lee | Por qué |
|---|---|---|
| 4 | 🔴 **A02 · Semáforo de mora** | **Está marcado como bloqueado. Lee la Parte 1 completa y entiende por qué la Parte 2 no se puede aplicar todavía** |
| 5 | Manual de HubSpot, página **10** — Tu proceso · Cobranza | El recorrido |
| 6 | **P04 · Cambiar pipeline o etapa sin perder el historial** | Sobre todo la diferencia entre *Refinanciamiento* y *Cierre por Refinanciamiento* |
| 7 | **P03 · Registrar una actividad externa** | Un intento de contacto no documentado **es un intento que no cuenta** |

**Ejercicio 2.** Recorre las **siete etapas** del pipeline de Cobranza. Escribe con tus palabras la diferencia entre *Refinanciamiento* y *Cierre por Refinanciamiento*, y entre *Campaña Liquidada* y *Cierre por Incumplimiento*.

---

## Bloque 3 · Las reglas duras (60 min)

Tres reglas y ninguna admite excepción:

**1 · El corte es a las 18:00 del Día 0.**
Sin confirmación explícita en HubSpot antes de esa hora, **el sistema asume NO pago**. Si la fecha cae en día inhábil, se recorre al siguiente hábil.

**2 · Día 1 es incumplimiento. No hay periodos de gracia.**

**3 · Un refinanciamiento es la extinción de un ticket y el nacimiento de otro**, no un ajuste de plazos. Se crea un ticket nuevo (ej. `FIN-001-REFIN`).

**Ejercicio 3.** Con **P02**, crea la vista `Cobranza · Mora > 15 días · Todos`. Es la vista que abre tu día.

---

## Bloque 4 · Lo que está bloqueado y por qué (60 min)

Esta es la parte incómoda, y es la que evita que cometas un error caro.

| Qué está en disputa | Por qué importa |
|---|---|
| 🔴 **La tasa de interés moratorio** | Un documento dice 38 % anual solo para proyectos Solid; Dirección de Finanzas instruyó *"dos veces la tasa ordinaria, sin excepción"*. **No apliques ninguna hasta que se confirme contra el contrato** |
| 🔴 **El aforo mínimo** | 1.5:1 en el diseño, 2:1 según Dirección |
| 🔴 **La comisión por pago tardío** | 15 % + IVA, sin confirmación independiente |
| 🔴 **Cuándo entra el despacho ARI** | Tres cadenas coexisten: día 15/16/30/61 · semana 1-2-3 · por tipo de incumplimiento. **Un cliente con 10 días de atraso recibe tratamiento distinto según cuál se aplique** |

> **Regla mientras dure:** **no cites cifras a un cliente.** Escala a Finanzas. En una institución regulada, un cargo aplicado con la tasa equivocada es un problema mucho más grande que una respuesta demorada.

---

## Bloque 5 · Lo que no funciona técnicamente (30 min)

| Workflow | Qué debería hacer | Qué pasa |
|---|---|---|
| **WF-053** | Recordatorios activos | **No puede ejecutarse** — la secuencia no está definida. Tampoco contempla WhatsApp |
| **WF-054 / WF-055** | Recordatorios del día 15 | Comparten el mismo ID en el inventario. **Verificar antes de tocar** |
| **WF-059** | Cierre por refinanciamiento | Solo cambia la propiedad. **No notifica a Compliance, Dirección ni Finanzas**, no crea tarea de archivo, no genera registro CNBV trazable |
| **WF-061** | Ejecución de garantía | Las tres comunicaciones son **internas**. **Ningún nodo notifica al cliente** de que se ejecuta su garantía |
| **WF-064** | Cierre por incumplimiento | Instruye "activar comunicación externa" pero **no contiene nodo de envío externo** |
| **26 propiedades de cobranza** | — | **No existen en HubSpot** |

**Lo que esto significa para ti:** cuando muevas un ticket a *Cierre por Refinanciamiento*, *Ejecución de Garantía* o *Cierre por Incumplimiento*, **avisa tú** a quien corresponda. El sistema no lo hace.

---

## Tu calendario preventivo

| Momento | Quién | Qué |
|---|---|---|
| T-10 | Sistema 🔴 *no funciona* | Email |
| T-7 | Sistema 🔴 *no funciona* | Email |
| T-5 | Sistema 🔴 *no funciona* | Email + WhatsApp |
| **T-5** | **Tú** | Primer contacto manual ≤ 24 h |
| **T-3** | **Tú** | Segundo contacto ≤ 24 h |
| **T-2** | **Tú** | Contacto ≤ 12 h · **incluye obligados solidarios** |
| **Día 0** | **Tú** | Contacto ≤ 12 h · **límite 18:00** |

Si no logras contacto, **documenta el intento**. No se pausa el flujo.

**Desde Mora Moderada (día 16+), la `Nota de acuerdo de pago` es obligatoria.**

---

## El tono de cobranza

| Sí decir | No decir |
|---|---|
| "Conforme a contrato" | "Te entendemos" |
| "Se activó automáticamente" | "Vamos viendo" |
| "Para evitar mayores consecuencias" | "No pasa nada" |

**Ejercicio 4.** Escribe el guion de tu llamada de T-2 usando solo lenguaje de la columna izquierda. Que lo revise tu líder.

---

## A quién preguntar

| Si pasa esto | Pregunta a |
|---|---|
| Un monto, saldo o día de mora no cuadra | **TI, por Notion.** No lo corrijas en HubSpot |
| El cliente pregunta por tasas o penalizaciones | **Finanzas.** Están en disputa |
| Hay que involucrar al despacho | Tu líder — la cadena no está conciliada |
| Un workflow no disparó | Administrador del portal |

---

## Estado y verificación

**Estado:** 🟡 redactado · 2026-08-18
**Nota:** esta ruta es más larga que las demás **a propósito**. Cobranza sustituye a Moonflow, y sustituir un sistema con otro a medio construir exige que la persona sepa exactamente qué está a medias.

**Falta para publicar:** desbloquear **A02**; verificar los ejercicios; validación escrita de Monific.
