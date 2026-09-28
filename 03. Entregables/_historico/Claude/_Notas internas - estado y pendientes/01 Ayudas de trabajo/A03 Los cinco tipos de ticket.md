# A03 · Los cinco tipos de ticket, A a E

> **Para quién:** Ejecutivo de Atención a Clientes (E.A.C.)
> **Cuándo se usa:** **durante** la interacción, con el cliente en línea. No al cerrar.
> **Formato final:** una página, imprimible.

De este campo dependen **la ruta del ticket y los avisos que se disparan**. Elegirlo tarde o mal desvía el caso completo.

---

## La tabla

| Tipo | Es esto | Ruta | Quién cierra |
|---|---|---|---|
| **A** | Problema **técnico** | Escala a TI · folio `TI-YYYY-MM-NNN` | E.A.C. o TI, **con confirmación del cliente** |
| **B** | Información o **dudas de inversión** | Resuelve el E.A.C. con apoyo de la biblioteca de conocimiento | E.A.C. |
| **C** | Es un **solicitante** (no inversionista) | Se deriva al especialista en solicitantes | El especialista en solicitantes |
| **D** | **Queja o inconformidad** | Gestión con contención emocional | **Director Comercial** |
| **E** | **Reclamación formal UNE** | 🔴 **Ticket separado en el pipeline UNE** | Director Comercial, con dictamen |

---

## Cómo se elige, en una pregunta

```
¿El cliente está presentando una reclamación FORMAL,
por escrito, con el Formato UNE?
        │
        ├── Sí ──────────────────────────────► TIPO E
        │
        └── No
             │
             ¿Está molesto / inconforme con Monific?
             │
             ├── Sí ─────────────────────────► TIPO D
             │
             └── No
                  │
                  ¿Es un solicitante de financiamiento?
                  │
                  ├── Sí ────────────────────► TIPO C
                  │
                  └── No
                       │
                       ¿Algo falla técnicamente?
                       │
                       ├── Sí ───────────────► TIPO A
                       └── No ───────────────► TIPO B
```

---

## Ejemplos reales, que es lo que de verdad se usa

| El cliente dice | Tipo | Por qué |
|---|---|---|
| *"La app no me deja entrar, ya reinicié el teléfono"* | **A** | Falla técnica → escala a TI con categoría *Acceso y Autenticación* |
| *"¿Cada cuánto me pagan los rendimientos?"* | **B** | Duda de producto. Se responde y se cierra |
| *"¿Qué necesito para que me presten con mi local?"* | **C** | Es solicitante, no inversionista. Se deriva |
| *"Llevo tres semanas esperando mi retiro y nadie me contesta"* | **D** | Es una inconformidad, aunque debajo haya un problema técnico. **Cierra el Director Comercial** |
| *"Adjunto el Formato UNE llenado. Presento reclamación."* | **E** | Reclamación formal → **ticket nuevo en pipeline UNE** |

⚠️ **El caso que más se equivoca es el cuarto.** Cuando hay un problema técnico *y* el cliente está molesto, el reflejo es marcarlo A. Pero si el cliente está expresando inconformidad con Monific, es **D** — y D tiene cierre por Dirección. Se puede escalar a TI en paralelo; lo que no se puede es perder la traza de la queja.

---

## La regla de separación del Tipo E

> **Una reclamación formal UNE no se mezcla con el ticket de servicio.** Genera un **ticket separado**, con folio, fechas, tareas, dictamen y cierre regulatorio.
> **Nueva reclamación = ticket nuevo.** Los tickets UNE cerrados **no se reabren**.

Un ticket Tipo D puede convertirse en Tipo E. Cuando eso pasa, **no se cambia el tipo del ticket existente**: se crea el ticket UNE aparte y se deja referencia cruzada.

**Los tickets de servicio sí se pueden reabrir** si llega un comentario nuevo sobre la misma cadena de correos. Los UNE, no.

---

## Quién lo captura y cuándo

| Canal de entrada | Cómo se clasifica |
|---|---|
| **Chat Web** | **Automático** |
| **WhatsApp** | Manual — lo captura el E.A.C. |
| **Correo electrónico** | Manual — lo captura el E.A.C. |
| **Formulario** | Manual |

`Tipo de ticket` es propiedad **obligatoria en tres etapas**: *Nuevo Ticket*, *En Atención* y *Cerrado*. Que sea obligatoria al cierre no significa que se llene al cierre — significa que no puede cerrarse sin ella.

---

## Estado y verificación

**Estado:** 🟡 redactado · 2026-08-18
**Fuente:** Master de Implementación Servicio/UNE, hojas *"Pipeline Servicio"* y *"Listado prop. Servicio"*; minuta de revisión del pipeline de Servicio.
**Propiedad que usa:** `Tipo de ticket` (Ticket · automático o manual · selección individual · **obligatoria**).

**Falta para publicar:**

1. Verificar que el dropdown exista en el portal con las cinco opciones y en este orden.
2. Verificar que la clasificación automática por Chat Web efectivamente funcione — no está probada.
3. 🔴 **WF-045** (tarea Tipo C) tiene como regla de diseño la frase *"Implementado con validación"*, que es texto de plantilla. **No se puede construir un caso de prueba contra ella.** La ruta del Tipo C no es verificable hasta que se escriba la regla real.
4. ⚠️ La ruta del **Tipo B** depende de que la biblioteca de conocimiento de HubSpot tenga artículos. No está verificado que los tenga. Si está vacía, esta ruta no funciona como está diseñada.
5. Validación escrita de Monific.
