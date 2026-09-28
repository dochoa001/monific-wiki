# P07 · Cerrar un ticket con resolución

> **Para quién:** E.A.C., E.R.S. y Director Comercial.
> **Cuándo:** el caso está resuelto **y el cliente lo sabe**.

## Qué cuenta como resolución documentada

Un ticket cerrado sin resolución escrita es un ticket que nadie puede auditar, contar ni aprender de él. La `Resolución detallada` es obligatoria, y "resuelto" no es una resolución.

**Tres cosas, siempre:**

| # | Qué | Ejemplo |
|---|---|---|
| 1 | **Cuál era el problema**, en los términos del cliente | *Cliente no podía ver el calendario de pagos de su proyecto en la app.* |
| 2 | **Qué se hizo** | *TI detectó que el proyecto no tenía calendario cargado en Admin. Se cargó el 17-ago.* |
| 3 | **Cómo se confirmó** | *Cliente confirmó por WhatsApp el 17-ago 16:40 que ya lo ve correctamente.* |

Sin el punto 3, el ticket no se cierra. **La confirmación del cliente es parte del cierre**, no una cortesía.

---

## Quién cierra cada tipo

| Tipo | Quién cierra | Condición |
|---|---|---|
| **A** resuelto en primer nivel | E.A.C. | Documentado |
| **A** resuelto por TI | E.A.C. | **Con confirmación del cliente** |
| **B** | E.A.C. | Documentado |
| **C** | **E.R.S.** (Ejecutivo de Relación con Solicitantes) | El especialista contacta al cliente y cierra |
| **D** | **Director Comercial** | — |
| **E** | E.A.C. cierra el ticket **de servicio** tras orientar al cliente | El ticket **UNE** es aparte y lo cierra el D.C. con dictamen |

⚠️ **El Tipo E confunde.** El E.A.C. atiende al cliente, le explica cómo presentar la reclamación formal y, cuando ya no tiene dudas, cierra **el ticket de servicio**. Eso **no cierra la reclamación**: el ticket UNE vive su propio ciclo de 30 días hábiles. Ver **A06**.

---

## El procedimiento

1. Confirma con el cliente que el problema quedó resuelto.
2. Abre el ticket y llena **Resolución detallada** con las tres cosas de arriba.
3. Verifica que **Tipo de ticket** esté correcto — es obligatorio también en el cierre.
4. Si venía de TI, confirma que `Estatus ticket TI` = **Resuelto**.
5. Mueve el ticket a **Cerrado**. Es manual.
6. HubSpot registra solo: **Fecha de cierre**, **Tiempo de primera respuesta** y **Tiempo de resolución total**.

Si el ticket era **Tipo E**, además se notifica al D.C. para el registro en el **reporte trimestral** de CNBV/CONDUSEF.

---

## Reapertura

| Pipeline | ¿Se reabre? |
|---|---|
| **Atención** | ✅ Sí, si llega un comentario nuevo **sobre la misma cadena de correos** |
| **UNE** | ❌ **Nunca.** Nueva reclamación = ticket nuevo |

---

## Antes de cerrar, dos preguntas

**¿El cliente lo sabe?** Cerrar sin avisar convierte un caso resuelto en una queja.

**¿Esto va a volver a pasar?** Si es la tercera vez que cierras el mismo problema, la resolución no es cerrar el ticket: es avisar que hay algo sistémico. El 26 % de los tickets es gestión de datos de cuenta y el 12 % accesos — ese volumen es candidato a autoservicio, y esa señal sale de que alguien la levante.

---

## 🔴 Dos huecos conocidos en esta etapa

**1 · La propiedad `Tipo de cierre` no existe.**
La descripción de la etapa dice que *"la propiedad **Tipo de cierre** diferencia cada escenario"*, pero **esa propiedad no está en el listado de propiedades del master**. O se crea, o los seis escenarios de cierre no se pueden distinguir en ningún reporte.

**2 · `Fecha y hora de atención del ticket` no existe en HubSpot.**
Es una de las 26 propiedades comprometidas que la auditoría por API no encontró. Sin ella, el cálculo de tiempos de la etapa *En Atención* queda incompleto.

**3 · El master tiene un error de plantilla en esta etapa.** El listado de propiedades de *Cerrado* dice *"Objeto de cobranza"* cuando debe decir *"Objeto de Ticket"*. Es cosmético, pero es del mismo tipo de error que motivó el requerimiento formal — conviene corregirlo antes de que alguien lo tome literal.

---

## Estado y verificación

**Estado:** 🟡 redactado · 2026-08-18
**Fuente:** Master de Implementación Servicio/UNE, hoja *"Pipeline Servicio"*, etapa *Cerrado*; relación de propiedades faltantes verificada por API (2026-06-17).
**Workflow implicado:** WF-049 (propiedades de entrada, etapa Cerrado) — 🟡 pendiente de prueba.

**Falta para publicar:**

1. Decidir si se crea `Tipo de cierre` y con qué opciones.
2. Crear `Fecha y hora de atención del ticket` (bloque B07).
3. Corregir la referencia a *"Objeto de cobranza"* en el master.
4. Ejecutar un cierre real de cada tipo y capturar.
5. Validación escrita de Monific.
