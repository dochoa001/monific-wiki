# P09 · Auditar el historial de una propiedad

> **Para quién:** todo el equipo, y especialmente quien supervise.
> **Cuándo se usa:** antes de preguntarle a alguien *"¿tú cambiaste esto?"*

Casi siempre la respuesta está a tres clics, y averiguarla primero evita una conversación incómoda que no hacía falta.

---

## El procedimiento

1. Abre el registro (contacto, negocio o ticket).
2. Busca la propiedad en la ficha de la izquierda.
3. Pasa el cursor sobre ella → aparece el icono de **historial** (un reloj).
4. Ábrelo.

Verás, por cada cambio:

| Dato | Para qué sirve |
|---|---|
| **Valor anterior → valor nuevo** | Qué cambió exactamente |
| **Fecha y hora** | Cuándo |
| **Quién o qué lo cambió** | ← **la columna importante** |

### Si no ves el icono

Es porque la propiedad no está en la ficha. Usa **Ver todas las propiedades** en el registro, búscala ahí y abre su historial desde esa vista.

---

## Cómo leer la columna "quién"

Esta es la parte que de verdad importa en Monific, porque hay **cuatro orígenes posibles** y significan cosas muy distintas:

| Lo que dice | Qué pasó | Qué haces |
|---|---|---|
| **Un nombre de persona** | Alguien lo capturó a mano | Pregúntale — con el dato, no con la sospecha |
| **Un workflow** | Una automatización lo escribió | Revisa el workflow, no a la persona → **S03** |
| **Integración / API / `trama1-monific`** | **Lo escribió Admin Monific** | 🔴 **No lo corrijas en HubSpot.** Ver abajo |
| **Importación** | Vino de una carga masiva | Busca de qué archivo |

---

## 🔴 Si el cambio vino de la integración, no lo toques

Si el historial dice que el valor lo escribió la integración, **corregirlo a mano en HubSpot no arregla nada**: la siguiente sincronización lo va a sobrescribir con el mismo valor equivocado, y en el intervalo dos sistemas dirán cosas distintas.

> **Admin Monific calcula. HubSpot registra.** Si un monto, un saldo, una fecha o los días de mora no cuadran, **la respuesta está en Admin, no en el CRM**.

**Qué hacer:** reportar a TI por Notion, con el nombre de la propiedad, el valor que muestra HubSpot, el valor que debería tener y la captura del historial.

Detalle completo en **S01 · La frontera de cálculo**.

---

## Los tres casos en que esto se usa de verdad

**1 · "El monto no cuadra con Admin."**
Abre el historial de la propiedad. Si el último cambio es de la integración, es un tema de Admin. Si es de una persona, alguien lo pisó a mano — y eso también hay que saberlo.

**2 · "El negocio se movió de etapa y nadie sabe por qué."**
Abre el historial de la etapa. Va a decirte si fue un workflow. Varias etapas de Monific tienen workflows atados a la entrada.

**3 · "Este campo se llenó solo con un valor raro."**
Puede ser un valor *hardcoded*. Es un problema real y documentado en este portal: **WF-027** escribe `Nivel de registro = "3. Cuenta STP creada"` y `CLABE STP = 1` **fijos**. Si se activa, todos los negocios reciben los mismos valores.

---

## Lo que este procedimiento no puede hacer

| No sirve para | Alternativa |
|---|---|
| Ver el historial de **ejecución de un workflow** | Se consulta en el propio workflow, en *Historial* |
| Ver quién **leyó** un registro | HubSpot no lo registra |
| Recuperar un valor de una propiedad **archivada** | Hay que restaurarla primero |
| Auditar cambios de configuración del portal | Es el registro de auditoría de la cuenta, otra pantalla |

⚠️ Limitación conocida de este portal: durante la auditoría, **el historial de ejecución de cinco workflows críticos no estuvo disponible** por la consulta usada. Por eso el proyecto exige prueba reproducible y no basta con la captura de que algo existe.

---

## Por qué esto es una habilidad, no una curiosidad

Este portal arrastra **2,142 propiedades**, de las cuales **383 de Negocio están vacías**, y **17 propiedades de monto distintas y solapadas**. En un entorno así, saber de dónde viene un dato es lo que separa "el CRM está mal" de "este campo específico lo escribe este proceso específico".

Y es la habilidad que permite hacer el inventario que exige el bloque B11: por cada propiedad, si se usa en un workflow activo, si se usa en un reporte y si la escribe la integración.

---

## Estado y verificación

**Estado:** ✅ verificable sin dependencias · 2026-08-18
**Fuente:** auditoría por API del portal 48427391 (2026-06-17); Maestro Operativo (limitación del historial de ejecución); hallazgo CON-061 (valores hardcoded en WF-027); requerimiento formal, bloque B11.

**Falta para publicar:**

1. Ejecutar el procedimiento sobre una propiedad escrita por la integración y capturar cómo se ve exactamente el origen en este portal.
2. Confirmar qué nombre muestra la app privada `trama1-monific` en la columna de origen.
3. Validación escrita de Monific.
