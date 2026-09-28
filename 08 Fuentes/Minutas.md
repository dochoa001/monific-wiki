---
titulo: Minutas
tipo: indice
area: transversal
estado: verificado
confianza: alta
actualizado: 2026-08-07
fuentes: [D168, D179, D182, D183, D184, D185, D186, D187, D188, D169, D170, D171, D172, D173, D174, D175, D176, D177, D178, D180, D181]
tags: [fuentes, minutas, indice]
---

# Minutas

> **En una frase:** las 21 minutas numeradas del proyecto y las decisiones que salieron de cada una.

Las notas automáticas de Gemini están listadas aparte en [[Indice de Fuentes]].

⚠️ Todas provienen de transcripción automática de voz. Los nombres propios están frecuentemente mal escritos. → [[Contradicciones y Verificaciones]] C-16

---

## Tabla completa

| # | Fecha | ID | Tema | Decisiones clave |
|---|---|---|---|---|
| 1 | 2026-01-22 | `D168` | Sesión de trabajo | — |
| 2 | 2026-01-26 | `D179` | Sesión de trabajo | Origen de los **"Entregables del 26 de enero"**: formulario nuevo, árbol de decisiones, flujo de cobranza y SLAs |
| 3 | 2026-02-03 | `D182` | Sesión de trabajo | — |
| 4 | 2026-02-24 | `D183` | **Presentación del Flujograma de Ventas** | — |
| 5 | 2026-02-26 | `D184` | **Presentación del Master de Implementación de Ventas** | — |
| 6 | 2026-03-02 | `D185` | **Sesión inicial #1 · Alineación técnica** | — |
| 7 | 2026-03-05 | `D186` | **Presentación del Flujograma de Cobranza** | Se declara **WhatsApp obligatorio** cuando el solicitante tiene teléfono (citado en CON-104) |
| 8 | 2026-03-10 | `D187` | **Presentación del Master de Cobranza** | — |
| 9 | 2026-03-12 | `D188` | **Presentación del Flujograma de Servicios** | — |
| 10 | 2026-03-19 | `D169` | **Presentación del Master de Servicios** | — |
| 11 | 2026-04-15 | `D170` | Recurrente | — |
| 12 | 2026-04-22 | `D171` | Recurrente | — |
| 13 | 2026-05-06 | `D172` | Recurrente + validación de campos | — |
| 14 | 2026-05-08 | `D173` | Sesión de trabajo | — |
| 15 | 2026-05-15 | `D174` | **Revisión de pipelines de Cobranza y Servicio** | Se presentan etapas, automatizaciones y dependencias de la integración. Ejecución de garantía se activa a los **61 días de mora** |
| 16 | 2026-05-27 | `D175` | Sesión de trabajo | — |
| 17 | 2026-06-05 | `D176` | **Plan de capacitación** | Documento de Raquel con las sesiones y su audiencia interna (Ted, Vianey, Jesús, Emiliano, Karen) |
| 18 | 2026-06-16 | `D177` | **Transición de cuenta e integración técnica** | B&O anuncia la salida de Caroline y que Emmanuel asume. Asisten Jesús Torres y Daniel por Monific |
| 19 | 2026-06-29 | `D178` | **Reunión de cierre** | ⭐ Cuatro decisiones clave (ver abajo) |
| 20 | 2026-07-27 | `D180` | **Alineación de proyecto** | ⭐ Tres decisiones que desbloquearon el proyecto (ver abajo) |
| 21 | 2026-08-04 | `D181` | **Sesión técnica de integración con TI** | ⭐ D-01 a D-08 y plan A-01 a A-08 |

---

## ⭐ Las tres minutas que hay que leer

### `D178` — 2026-06-29 · Reunión de cierre

**Asistentes:** Raquel Alfie (Monific) · Emmanuel Chulin y David Ochoa (B&O)

Es la primera reunión tras el requerimiento formal. Emmanuel asume el rol de consultor que lleva el proyecto al cierre.

| Tema | Acuerdo |
|---|---|
| **Discrepancia master ↔ flujos** | Hay acuerdo en que existe, atribuible a cambios durante la implementación. B&O se lleva la tarea de homologar. **Raquel señaló que el origen fue falta de comunicación** |
| **Objeto de cobranza** | Se sustituyó por **Tickets**. Varios puntos de auditoría que reportaban "falta del objeto de cobranza" quedan **validados desde Tickets** |
| **Comunicaciones** | Raquel explica que su auditoría cruzó el master vía API **con IA, sin revisar flujo por flujo**. La mayoría de los correos ya están cargados. B&O construyó una plantilla autoadministrable |
| **WhatsApp** | Las plantillas se generan en el administrador de **Meta**, al que **B&O no tiene acceso**. Los copies están listos. Raquel las creará con Jesús |
| **Integración** | Por restricciones del banco y del manejo de la bolsa, **B&O no puede ejecutar la conexión directa** |
| **Capacitaciones** | Van después de la integración, con lo básico en paralelo. Raquel de acuerdo |
| **Puntos de David** | Faltan enlaces de CTA en varias comunicaciones · faltan personas/roles en algunos equipos creados |

→ [[Conflicto Contractual]] · [[Modelo de Datos HubSpot]]

### `D180` — 2026-07-27 · Alineación de proyecto

**Asistentes:** Raquel Alfie (Monific) · David Ochoa y Emmanuel Chulin (B&O) · 34 minutos

| Tema | Decisión |
|---|---|
| **Lead scoring** | ❌ **No se implementará score numérico** en el MVP. Se conservan estados operativos |
| **Viabilidad** | Con inmueble para garantía = **viable**. Sin inmueble = **no viable** y posible canalización a inversionista. *Parcialmente viable* queda a cargo del asesor tras revisar avalúo, monto y capacidad de pago |
| **Formulario** | El formulario de HubSpot sustituye al Google Form. Monific lo insertará en su web |
| **Objeto Proyecto** | ✅ Se confirma como réplica/intermediario de los proyectos del Admin. El **ID único del Admin** es la llave de asociación |
| **Fuente de verdad** | El **Admin** es la fuente de verdad de historial de pago, último y siguiente pago, montos y demás datos de cobranza |
| **Mora** | A los **60 días** el ticket pasa a ejecución de garantía/alerta. La salida es manual o por cierre. Si se regulariza, puede volver a cobranza activa |
| **Data Hub** | Las automatizaciones recurrentes de cobranza lo requieren si son nativas. Alternativa: que el Admin envíe las fechas por API |
| **Asignación de tareas** | HubSpot obliga a asignar a personas, no equipos. B&O propondrá un mecanismo. **No bloquea** |

**Compromisos:** Monific revisa los masters hasta el 30-jul y entrega comentarios el 31-jul. Primera sesión de integración propuesta para el 2026-08-03.

→ [[Modelo de Negocio]] · [[Proceso Comercial Solicitantes]]

### `D181` — 2026-08-04 · Sesión técnica con TI

**Asistentes:** Raquel, Daniel y Jesús (Monific) · Emmanuel Chulín, David, Jazmín y Ricardo (B&O)

Primera sesión formal con el equipo que va a construir la integración.

**Decisiones D-01 a D-08 y plan de acción A-01 a A-08** → detalle completo en [[Integracion Admin Monific HubSpot]].

Lo esencial:

- Se incorporan **Tickets y Projects** al modelo
- **Flujo unidireccional** Admin → HubSpot en la fase inicial
- Sincronización recurrente diaria propuesta a las **01:00**
- La suscripción **no permite ejecutar código** dentro de HubSpot
- Los nombres internos de propiedades **no se pueden editar** una vez creadas
- Bloqueos técnicos se canalizan **por medio de Raquel**
- Sesión recurrente de 15–20 min: **frecuencia por confirmar**

También incluye una **tabla de riesgos** consensuada. → [[Riesgos]]

---

## Cómo leer las minutas

- Las minutas 18–21 tienen **transcripción íntegra anexa**, no solo resumen. Ahí están los matices.
- Las minutas 1–17 son más resumidas.
- Las notas de Gemini (`D133`–`D165`) tienen la transcripción completa de las reuniones grabadas.
- Los "chats" (`D136`, `D140`, `D144`…) son el chat de la videollamada; casi siempre irrelevantes.

---

## Relacionado

- [[Cronologia del Proyecto]] — la línea de tiempo que sale de aquí
- [[Indice de Fuentes]] — todas las fuentes
- [[Contradicciones y Verificaciones]] — errores de transcripción

## Fuentes

Las 21 minutas listadas. Extractos en `08 Fuentes/_extractos/`.
