# P08 · Registrar una reclamación UNE completa

> **Para quién:** Director Comercial (D.C.), con soporte del D.C.L.
> **Cuánto toma:** 20 minutos bien hechos. Un error aquí es un riesgo regulatorio.

## 🔴 Advertencia: el pipeline UNE no está acreditado

**Ninguno de los seis flujos UNE existe en el portal.** Este procedimiento describe **cómo debe hacerse**, y hoy **casi todo tiene que hacerse a mano**. Cada paso indica si es automático en el diseño y qué hacer mientras no lo sea.

Contexto y plazos completos en **A06 · Línea de tiempo de una reclamación UNE**.

---

## Cómo llega

El cliente sigue el proceso de **3 pasos** publicado en el sitio de Monific: llena el PDF **"Formato UNE"** y lo envía a **une@monific.com**.

---

## El procedimiento

### Paso 1 · Crear el ticket en el pipeline UNE

**No en Atención. No reutilizando el ticket de servicio.** Pipeline **UNE**, etapa **Abierto**.

Si el caso venía de un ticket Tipo D, deja **referencia cruzada** en ambos: en el de servicio, que derivó a UNE; en el de UNE, de qué ticket viene.

> *Diseño:* automático al recibir el correo o el formulario.
> *Hoy:* **manual.**

### Paso 2 · Generar folio y fechas

| Campo | Valor | Estado |
|---|---|---|
| **Folio UNE** | `UNE-YYYY-MM-NNN` | 🔴 A mano — HubSpot no puede generar series |
| **Fecha de ingreso** | La de recepción del correo, no la de captura | 🔴 A mano |
| **Fecha límite de dictamen** | Ingreso **+ 30 días hábiles** | 🔴 A mano — **cuéntalos en calendario** |
| **Trimestre de reporte** | Según fecha de recepción | 🔴 A mano |
| **Propietario** | D.C. | 🔴 A mano |

⚠️ **Los 30 días son hábiles, no naturales.** Sin Data Hub, HubSpot no los calcula. Cuéntalos contra el calendario oficial de días inhábiles y **anota la fecha límite también fuera de HubSpot** — en el calendario compartido del área.

### Paso 3 · Capturar los 17 campos obligatorios

Todos son manuales y todos son obligatorios.

**Del reclamante**
- Nombre del reclamante
- CURP

**Del domicilio**
- Domicilio
- Código postal
- Municipio o alcaldía
- Colonia
- Ciudad
- Estado

**Del caso**
- Monto reclamado
- Hechos
- Producto o servicio involucrado
- Formato UNE *(archivo adjunto)*

**Del dictamen** — se llenan al cerrar, ver paso 6
- Resultado del dictamen *(Aprobado / Rechazado)*
- Dictamen *(archivo adjunto)*
- Estatus del ticket *(Abierto / Cerrado)*

**Opcionales, pero úsalos**
- Notas de consulta con D.C.L.
- Documentos de soporte adicionales

> **Sobre "Hechos":** es el campo que va a leer un revisor de CNBV. Escríbelo como narración cronológica y neutral: qué pasó, cuándo, qué dice el cliente. Sin valoración ni defensa. La postura de Monific va en el dictamen, no aquí.

### Paso 4 · Enviar el acuse

Correo al cliente desde el buzón autorizado, con **el folio** y **el plazo de 30 días**.

> *Diseño:* automático (UNE-03).
> *Hoy:* **manual.** ⚠️ El copy, el remitente y el consentimiento **están sin definir**. Antes del primer acuse hay que cerrarlos con Legal.

### Paso 5 · Crear la tarea de dictamen y sus recordatorios

| Cuándo | Qué |
|---|---|
| Al enviar el acuse | Tarea al D.C., vencimiento a **10 días** |
| **Día 5** | Recordatorio |
| **Día 8** | Recordatorio |
| **Día 10** | Vence. Si sigue abierto → **escalar a superior + tarea urgente** |

> *Hoy:* **crea las tres a mano el mismo día que entra la reclamación.** Es el paso que más se olvida y el que protege el plazo de 30 días.

### Paso 6 · Cerrar con dictamen

**El cierre exige las dos cosas:**

1. `Resultado del dictamen` = Aprobado o Rechazado
2. `Dictamen` = archivo adjunto

Después: mover manualmente a **Cerrado**. HubSpot registra `Fecha de cierre` y `Tiempo de resolución`.

> **Sin dictamen no hay cierre.** La regla de diseño UNE-06 es *"permitir cierre solo con dictamen, resultado y fecha"*. Mientras el bloqueo no exista técnicamente, **es una regla de disciplina**: no muevas el ticket sin el archivo.

---

## Las tres reglas que no se negocian

1. **Ticket separado.** Una reclamación UNE nunca comparte ticket con un caso de servicio.
2. **Nueva reclamación = ticket nuevo.** Los tickets UNE cerrados **no se reabren**. Si el cliente vuelve, llena el formulario otra vez.
3. **Los dos relojes son distintos.** 10 días es el compromiso interno para el dictamen; **30 días hábiles** es la obligación regulatoria. Los 10 existen para que los 30 nunca se agoten.

---

## Antes de que entre la primera reclamación

Checklist para que esto no dependa de la memoria de una persona:

- [ ] Calendario compartido con la fecha límite de cada folio, calculada en días hábiles
- [ ] **Respaldo nominal del D.C.** designado por escrito — hoy todo el proceso recae en una sola persona
- [ ] Copy, remitente y consentimiento del acuse aprobados por Legal
- [ ] Consecutivo de folios llevado en un lugar único, para no repetir número
- [ ] Carpeta de expedientes UNE con permisos restringidos

---

## Estado y verificación

**Estado:** 🔴 **bloqueado** · 2026-08-18
**Fuente:** Master de Implementación Servicio/UNE, hojas *"Pipeline UNE"* y *"Listado prop. UNE"*; Maestro Operativo, fichas UNE-01 a UNE-06; requerimiento formal, bloque **B15**.

**Falta para publicar:**

1. Decidir dónde se calculan folio y fecha límite — recomendación: **el Admin Monific los calcula y los envía por API**, igual que la regla 29 de cobranza.
2. Implementar los seis flujos UNE-01 a UNE-06.
3. Definir copy, remitente y consentimiento del acuse.
4. Probar un caso Tipo E completo con evidencia: folio, notificación y captura del pipeline.
5. **Validación de Legal y Compliance** — el requerimiento formal la exige explícitamente para dar por cerrado el proyecto.

**Mientras tanto:** este procedimiento **sí debe entregarse al D.C.**, marcado como operación manual. Es preferible a que no exista: el plazo regulatorio corre exista o no la automatización.
