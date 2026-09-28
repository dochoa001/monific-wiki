# A04 · Propiedades obligatorias por etapa · Solicitantes

> **Para quién:** Agente de Atención a Solicitantes (A.A.S.)
> **Cuándo se usa:** al capturar, para no quedarse atorado a media etapa.
> **Formato final:** una página por las dos caras, imprimible.

**Cómo leerla:** *Auto* significa que lo llena el sistema o la integración — tú no lo capturas, pero sí lo revisas. *Manual* es tuyo.

---

## Etapa 1 · Nuevo solicitante

| Propiedad | Llenado | Tipo | Valores |
|---|---|---|---|
| **Tipo de cliente** | Auto | Selección | Inversionista · Solicitante · Ambos |
| **Canal de entrada** | Auto | Selección | Formulario Web · Chat Web · WhatsApp · Referido |
| **Fuente de lead** | Auto | Selección | Página Web · Redes Sociales · WhatsApp · Otro |
| **Viabilidad inicial** | Auto | Selección | **A: Viable · B: Parcialmente viable · C: No viable** |
| ~~Ruta de Scoring~~ | ~~Auto~~ | ~~Selección~~ | 🔴 **OBSOLETA** — ver abajo |
| **Estatus de documentación** | Auto | Selección | Pendiente · Parcial · En revisión · Completa · No viable · En pausa |
| **Fecha de creación de negocio** | Auto | Fecha | — |

**Opcionales:** Link de carpeta en Drive (URL) · Tipo de inmueble en garantía (Casa · Departamento · Oficina · Local Comercial · Terreno · Otro) · Zona de inmueble · Monto solicitado · Destino del financiamiento.

### 🔴 Ruta de Scoring está obsoleta

El master todavía trae una propiedad **Ruta de Scoring** con valores `A: ≥70 puntos / B: 40–69 / C: ≤39`. **Esa lógica se descartó** en la decisión del 2026-07-27: no se usa scoring numérico en el MVP.

Lo que decide viabilidad ahora es una sola pregunta:

| Condición | Resultado |
|---|---|
| Tiene inmueble que puede quedar en garantía | ✅ **A: Viable** |
| No tiene inmueble | ❌ **C: No viable** |
| Caso intermedio | 🟡 **B: Parcialmente viable** — decisión **manual** del asesor tras revisar avalúo, monto solicitado y capacidad de pago |

**Regla adicional:** si no hay garantía, se informa la alternativa de inversión, pero **no se crea un Negocio de Inversionista** hasta que la persona exprese interés explícito.

---

## Etapa 2 · Evaluación

| Propiedad | Llenado | Tipo | Valores |
|---|---|---|---|
| **Áreas de evaluación notificadas** | Auto | Selección múltiple | Área Jurídica · Área Técnica · Área Financiera |
| **Fecha de decisión de comité** | Auto | Fecha | — |
| **Motivo de decisión** | Manual | Texto | — |
| **Evaluación de áreas** | Manual | Selección | Aprobación Jurídica · Aprobación Técnica · Aprobación Financiera |
| **Decisión de comité** | Manual | Selección | Pendiente · Aprobado · Rechazado |
| **Plazo de financiamiento** | Manual | Número | meses |
| **Tasa anual fija** | Manual | Número | — |
| **Tipo de instrumento** | Manual | Texto | — |
| **Garantía estructurada** | Manual | Texto | — |
| **Destino autorizado** | Manual | Texto | — |

⚠️ Nota del proceso: *"Que la revisión financiera no se encuentre en el proceso no significa que no se hace; por indicaciones de Ted se puede avanzar con las primeras dos revisiones."*

🔴 **Bug conocido — CON-021.** El workflow que mueve de Evaluación a Formalización (**WF-008**) tiene la **reinscripción apagada**. Si el comité aprueba **después** de que el negocio entró a Evaluación —que es el caso normal— el workflow nunca dispara y **el negocio se queda atorado**. Hasta que se corrija, el cambio de etapa hay que hacerlo a mano.

---

## Etapa 3 · Formalización

| Propiedad | Llenado | Tipo | Valores |
|---|---|---|---|
| **Material de campaña listo** | Manual | Selección | Sí · No |
| **Tipo de rendimiento** | Manual | Selección | **RF** · **RV** |
| **Tipo de proyecto** | Manual | Selección | Solid · Estándar (Legacy) |
| **Obligados solidarios** | Manual | Texto | — |
| **Estatus de formalización** | Manual | Selección | En curso · Finalizado |

**Opcional:** Link material de campaña (URL).

🔴 **Regla que debe implementarse y no está probada:** en esta etapa debe crearse o asociarse el objeto **Proyecto** usando `numero_de_proyecto`. Los workflows actuales no lo acreditan.

---

## Etapa 4 · Proceso de firma

**SLA habitual: 15 días hábiles.**

| Propiedad | Llenado | Tipo | Valores |
|---|---|---|---|
| **Tipo de instrumento** | Manual | Selección | Hipotecario · Fiduciaria · Cesión de derechos · Pagaré con aval |
| **Notario asignado** | Manual | Texto | — |
| **Folio inscripción a registro** | Manual | Texto | — |
| **Número de fideicomiso** | Manual | Número | — |
| **Link del expediente** | Manual | URL | — |
| **Contrato firmado** | Manual | Selección | **Sí · No** |
| **Fecha de firma de contrato** | Manual | Fecha | — |

**Opcional:** Link de contrato (URL).

---

## Etapa 5 · Cierre ganado

| Propiedad | Llenado | Tipo |
|---|---|---|
| **Fecha de cierre ganado** | Auto | Fecha |

🔴 **El gate doble.** El negocio solo debe pasar a Ganado cuando `Contrato firmado = Sí` **Y** Admin Monific confirma que la campaña fue publicada. **Los workflows actuales no acreditan este gate.** Por ahora, verificar ambas condiciones a mano antes de mover.

---

## Etapa 6 · Cierre perdido

| Propiedad | Llenado | Tipo |
|---|---|---|
| **Fecha de cierre perdido** | Auto o manual | Fecha |
| **Motivo documentado** | Manual | Selección (9 opciones) |

**Opcionales:** Link carta de rechazo (URL) · Detalles del rechazo (texto).

### Los nueve motivos de cierre perdido

1. ~~Score A: sin garantía inmobiliaria~~ 🔴
2. ~~Score A: sin autorización del propietario~~ 🔴
3. ~~Score A: zona no operable~~ 🔴
4. ~~Score A: monto fuera de rango~~ 🔴
5. Comité: proyección financiera no viable
6. Comité: valuación / aforo insuficiente (< 1.5) ⚠️
7. Comité: requisitos de deuda y riesgo
8. Sin respuesta del solicitante (> 15 días)
9. Documentación no entregada / no viable

🔴 **Los primeros cuatro empiezan con "Score A:" y ese lenguaje quedó obsoleto** con el descarte del scoring. Los motivos siguen siendo válidos —sin garantía, sin autorización del propietario, zona no operable, monto fuera de rango— pero **hay que reescribir las etiquetas** antes de crear el dropdown.

⚠️ El motivo 6 dice "< 1.5" y ese umbral está en disputa (Dirección indicó 2:1). Ver **A02 · Semáforo de mora**, bloqueo 2.

---

## El seguimiento, en fechas

| Momento | Qué pasa |
|---|---|
| Días **2, 3, 7 y 15** | Seguimiento del expediente, escalando tareas vencidas |
| Día **15** | Pasa a pausa / seguimiento |
| Formalización > 5 días | Notificación de negocio estancado |
| Proceso de firma > 5 días | Segundo escalón de notificación |
| Respuesta a carta de observaciones | 5 días hábiles (default) |

**Cadencias:** máximo 2 intentos activos de contacto humano · máximo 1 llamada por día · WhatsApp solo informativo · **email de pausa = stop total**.

---

## Estado y verificación

**Estado:** 🟡 redactado · 2026-08-18
**Fuente:** Master de Implementación Proceso Comercial, hoja *"Listado de prop. Solicitantes"* (41 propiedades en 6 etapas); Maestro Operativo (2026-07-31); minuta del 2026-07-27.

⚠️ **Estos son nombres visibles en el CRM, no nombres internos.** El diccionario técnico está pendiente del gate T1 y **los nombres internos no se pueden cambiar una vez creada la propiedad**. Ver **S02 · Diccionario de propiedades**.

**Falta para publicar:**

1. Verificar propiedad por propiedad en el portal 48427391: que exista, que el tipo coincida, que las opciones coincidan.
2. **Retirar `Ruta de Scoring`** y reescribir las etiquetas de los motivos 1 a 4 de cierre perdido.
3. Resolver el umbral de aforo del motivo 6.
4. Corregir CON-021 (reinscripción de WF-008) o documentar el paso manual como oficial.
5. Validación escrita de Monific.
