# A02 · Semáforo de mora

> **Para quién:** Cobranza (A.A.S.) y Finanzas.
> **Cuándo se usa:** cada vez que un pago se atrasa.
> **Formato final:** una página, imprimible.

## 🔴 Este artículo NO se puede publicar todavía

La mitad de la tabla depende de cifras que **están en disputa entre documentos y dirección**. Publicarla como está significaría que alguien cobre un interés equivocado a un cliente de una institución regulada por CNBV.

**Lo que sí está cerrado y se puede usar hoy** está en la primera mitad. **Lo que está bloqueado** está marcado y explicado en la segunda.

---

# Parte 1 · Lo que sí está cerrado

## El calendario preventivo, antes del vencimiento

| Momento | Quién | Qué pasa | Canal |
|---|---|---|---|
| **T-10** | Sistema | Recordatorio automático | Email |
| **T-7** | Sistema | Recordatorio automático | Email |
| **T-5** | Sistema | Recordatorio automático | Email + WhatsApp |
| **T-5** | A.A.S. | Primer contacto manual, ≤ 24 h | Llamada / WhatsApp |
| **T-3** | A.A.S. | Segundo contacto manual, ≤ 24 h | Llamada / WhatsApp |
| **T-2** | A.A.S. | Contacto ≤ 12 h · **se incluye a obligados solidarios** | Llamada |
| **Día 0** | A.A.S. | Contacto ≤ 12 h · **hora límite 18:00** | Llamada |

**Compromiso del sistema:** los recordatorios de T-10, T-7 y T-5 se cumplen **al 100 %, sin excepción**.
**Compromiso del A.A.S.:** si no logra contacto, **documenta el intento**. No se pausa el flujo.

## La regla dura del Día 0

> **Sin confirmación explícita de pago en HubSpot antes de las 18:00 del Día 0, el sistema asume NO pago.**

Propiedad que decide: `Pago_Confirmado` (Sí / No).

Si la fecha límite cae en día inhábil, **se recorre al siguiente día hábil**.

## El Día 1

> **Día 1 = incumplimiento. No hay periodos de gracia.**

La detección es automática. Ese mismo día se notifica formalmente al solicitante **y a los obligados solidarios**.

## Los cuatro estados de pago

Estos valores sí están definidos y llegan desde Admin Monific:

| Valor de `estado_de_pago` | Semáforo del proyecto |
|---|---|
| **Al corriente** | 🟢 Verde |
| **Mora temprana** | 🟡 Amarillo |
| **Mora moderada** | 🟡 Amarillo |
| **Mora grave** | 🔴 Rojo |

Y `Estatus de cobranza` añade un quinto: **Bloqueado**.

## Lo único que está atado a un día concreto

**Desde Mora Moderada, día 16 en adelante, la `Nota de acuerdo de pago` es obligatoria.** Es el único corte día-a-estado que aparece documentado sin contradicción.

---

# Parte 2 · 🔴 Lo que está bloqueado

## Bloqueo 1 · Los tramos de días no están conciliados

Existen **tres cadenas de escalamiento que conviven** sin que nadie haya decidido cuál gana:

| Versión | Fuente | Qué dice |
|---|---|---|
| **A** | Maestro Operativo (2026-07-31) | Día **15**: aviso a ARI para preparar tabla de adeudo · Día **16**: ARI copiado en la escalación · Día **30**: ARI inicia cobranza formal con Finanzas · Día **61+**: ejecución legal |
| **B** | Correo interno de Cobranza | Semana **1** Monific · Semana **2** despacho · Acción legal desde semana **3** |
| **C** | Diseño del 2026-01-26 | Escalamiento por *tipo* de incumplimiento, con SLAs por fase (≤24 h asignación, ≤48 h validación de garantía, ≤72 h uso de reserva) |

**A y B no son compatibles.** En A el despacho entra el día 15–16; en B entra el día 8. Un cliente que se atrasa 10 días recibe tratamiento distinto según cuál se aplique.

El propio Maestro Operativo registra el pendiente: *"Cobranza: dejar explícita la operación semana 1 Monific, semana 2 despacho y acción legal desde semana 3."*

**Para desbloquear:** decisión de Dirección sobre cuál cadena aplica, por escrito.

## Bloqueo 2 · Las cifras financieras están en disputa

| Dato | Documento de diseño | Instrucción de Dirección |
|---|---|---|
| **Interés moratorio** | 38 % anual, solo proyectos Solid | **Vianey Correa, Dir. Finanzas (2026-03-05):** *"para todos los casos **sin excepción y sin casos especiales** es **dos veces la tasa ordinaria**"* |
| **Aforo mínimo** | ≥ 1.5 : 1 | **Karen Gómez / Raquel (2026-04-17):** *"idealmente **2:1**"* |
| **Comisión por pago tardío** | 15 % + IVA | Sin confirmación independiente |

**Prevalece la instrucción de Dirección**, pero **todo debe confirmarse contra el contrato de financiamiento real** antes de escribirlo en una ayuda de trabajo. Un dato mal puesto aquí se convierte en un cobro mal hecho.

**Para desbloquear:** confirmación contra el contrato de financiamiento vigente, con visto bueno de Legal y Finanzas.

## Bloqueo 3 · Los workflows que ejecutarían esto están rotos

Aunque se resolvieran los dos bloqueos anteriores, la automatización no correría. **13 de los 15 workflows de Cobranza tienen error acreditado.** Los tres que más pesan para esta ayuda:

| Workflow | Qué debería hacer | Qué pasa |
|---|---|---|
| **WF-053** | Recordatorios activos | Su única acción es "inscribirse en una secuencia" con el identificador **sin resolver**. **No puede ejecutarse.** Tampoco contempla WhatsApp, que se declaró obligatorio cuando el solicitante tiene teléfono |
| **WF-054 / WF-055** | Recordatorios antes y por vencimiento del día 15 | Aparecen con **el mismo ID** en el inventario. O es un error de transcripción o dos entradas apuntan al mismo workflow. **Verificar antes de tocar nada** |
| **WF-061** | Ejecución de garantía | Sus tres comunicaciones son **internas**. Ningún nodo notifica al cliente de que se está ejecutando su garantía |

**Consecuencia práctica hoy:** el solicitante moroso **no recibe los recordatorios preventivos automáticos**. La columna "Sistema" de la Parte 1 es diseño, no realidad. Mientras dure, la cobranza preventiva depende **enteramente del contacto manual del A.A.S.**

---

## Lo que sí puede enseñarse hoy en capacitación

1. El calendario preventivo T-10 → Día 0, **advirtiendo que los tres recordatorios automáticos no están funcionando**.
2. La regla de las 18:00 y el "sin confirmación = no pago".
3. Que Día 1 es incumplimiento y no hay gracia.
4. Que la `Nota de acuerdo de pago` es obligatoria desde el día 16.
5. Que **Admin Monific calcula los días de mora y los montos; HubSpot solo los muestra** → ver **S01 · La frontera de cálculo**.

## Lo que NO debe enseñarse hasta desbloquear

- Cualquier tasa, comisión o porcentaje de aforo.
- Qué día entra ARI.
- Cualquier promesa de que los recordatorios salen solos.

---

## Estado y verificación

**Estado:** 🔴 **bloqueado** · 2026-08-18
**Fuente:** Master de Implementación Cobranza, Maestro Operativo (2026-07-31), diseño del 2026-01-26, minutas del 2026-03-05, 2026-04-17 y 2026-07-27, Documento API (reglas 21–24 y 29).

**Para desbloquear hacen falta tres decisiones y una corrección:**

| # | Qué | Quién decide |
|---|---|---|
| 1 | Cuál cadena de escalamiento aplica (A, B o C) | Dirección de Monific |
| 2 | Tasa moratoria y comisión por pago tardío, confirmadas contra contrato | Finanzas + Legal |
| 3 | Aforo mínimo: 1.5:1 o 2:1 | Dirección + Riesgo |
| 4 | Reparar WF-053, WF-054 y WF-055 y verificar con caso reproducible | Bloque de remediación B05 |

Y después: validación escrita de Monific.
