# P04 · Cambiar pipeline o etapa sin perder el historial

> **Para quién:** todo el equipo que mueve negocios o tickets.
> **Por qué existe:** es el error más común del CRM, y tiene solución de dos clics.

---

## Primero: no pierdes el historial. Nunca.

El miedo es infundado, y conviene decirlo antes que nada:

> **Mover un registro de etapa o de pipeline no borra nada.** Las notas, correos, llamadas, tareas y archivos siguen ahí. El cambio de etapa se registra como un evento más en la línea de tiempo, con fecha y con quién lo hizo.

Lo que **sí** puede pasar es otra cosa, y es lo que hay que cuidar: **disparar automatizaciones que no querías**, o **dejar propiedades huérfanas** porque el pipeline nuevo usa campos distintos.

---

## El procedimiento

### Cambiar de etapa dentro del mismo pipeline

1. Abre el registro.
2. En la barra de etapas de arriba, haz clic en la etapa destino.
3. Si la etapa exige propiedades obligatorias, HubSpot las pide en ese momento. **Llénalas ahí**, no después.

También se puede arrastrar la tarjeta en la vista de tablero.

### Cambiar de pipeline

1. Abre el registro.
2. En la ficha de la izquierda, busca la propiedad **Pipeline**.
3. Cámbiala.
4. **Selecciona la etapa destino** — al cambiar de pipeline, HubSpot pone la primera etapa por defecto y casi nunca es la que quieres.

---

## Los tres chequeos antes de mover

**1 · ¿Qué se va a disparar?**
Varias etapas de Monific tienen workflows atados a la entrada. Mover un registro "para probar" puede mandarle un correo a un cliente real.

**2 · ¿El pipeline destino usa las mismas propiedades?**
No. Solicitantes, Inversionistas, Cobranza, Atención y UNE tienen catálogos distintos. Lo que llenaste en uno puede no existir en el otro.

**3 · ¿De verdad es un cambio de pipeline, o es un registro nuevo?**
Esta es la que más se equivoca. Ver abajo.

---

## Los casos de Monific donde NO se mueve: se crea uno nuevo

| Situación | ❌ No hagas | ✅ Haz |
|---|---|---|
| Un ticket Tipo D se vuelve reclamación formal UNE | Cambiar el tipo a E y mover el ticket al pipeline UNE | **Crear un ticket nuevo** en el pipeline UNE y dejar referencia cruzada |
| Se aprueba un refinanciamiento en comité | Ajustar plazos en el ticket de cobranza existente | Mover el actual a *Cierre por Refinanciamiento* y **crear un ticket nuevo** (ej. `FIN-001-REFIN`) |
| El inversionista reinvierte | Reabrir el negocio cerrado | **Nuevo negocio** de movimiento. La reinversión es una compra normal |
| Un inversionista congelado vuelve a invertir | Crear otro onboarding | **Mover el mismo** negocio de vuelta a *Inversionista Activo*. No se duplica el onboarding |

**La regla detrás de las tres primeras:** *un refinanciamiento es la extinción de un ticket y el nacimiento de otro, no un ajuste de plazos.* Y las reclamaciones UNE **no se reabren jamás**.

---

## Cuidado con las dos etapas de refinanciamiento

El pipeline de Cobranza tiene dos cosas que suenan igual y no lo son:

| Etapa | Qué es |
|---|---|
| **Refinanciamiento** | Etapa **de gestión**: se está formalizando la reestructura, con aprobación de comité |
| **Cierre por Refinanciamiento** | Etapa **terminal**: el solicitante cumplió las nuevas condiciones pactadas |

Mover a la segunda cuando querías la primera cierra la campaña antes de tiempo.

---

## Si moviste algo por error

1. **Regrésalo a la etapa anterior de inmediato.** El historial no se perdió.
2. **Revisa qué se disparó.** Abre la línea de tiempo del registro: si salió un correo o se creó una tarea, ahí está.
3. **Si salió comunicación a un cliente, avisa a tu líder.** No lo tapes — en una institución regulada, un correo mal enviado se maneja, no se esconde.
4. Borra las tareas que se hayan creado de más.

---

## Cómo ver quién movió qué

Toda la trazabilidad está en la línea de tiempo del registro, y además cada propiedad guarda su propio historial → **P09 · Auditar el historial de una propiedad**.

---

## Estado y verificación

**Estado:** ✅ verificable sin dependencias · 2026-08-18
**Fuente:** Master de Implementación Cobranza (etapas de refinanciamiento); Documento API, reglas 21–24; Maestro Operativo, decisiones INV-06, INV-09 y INV-13; Master Servicio/UNE (regla de no reapertura).

**Falta para publicar:**

1. Ejecutar un cambio de etapa y uno de pipeline en el portal, con capturas.
2. Documentar, por cada etapa, **qué workflow se dispara al entrar** — hoy no existe esa tabla y es justo lo que haría este procedimiento seguro. Depende de **S03 · Catálogo de workflows**.
3. Validación escrita de Monific.
