# 18 · Ventas Solicitantes

**Tu trabajo: llevar a un solicitante del formulario a la campaña publicada.**

---

## Tu pipeline

| Etapa | Qué se logra aquí |
|---|---|
| **1 · Nuevo solicitante** | Acompañar la carga de documentos hasta completar el expediente |
| **2 · Evaluación** | Revisión jurídica, técnica y financiera, y decisión del comité |
| **3 · Formalización** | Armar el proyecto y el material de campaña |
| **4 · Proceso de firma** | El acto notarial. Suele tomar 15 días hábiles |
| **5 · Cierre ganado** | Campaña publicada y abierta a fondeo |
| **6 · Cierre perdido** | Cierre con motivo documentado |

---

## La pregunta que define viabilidad

Una sola:

> **¿Tiene un inmueble que pueda quedar en garantía?**

| Respuesta | Resultado |
|---|---|
| Sí | **A · Viable** |
| No | **C · No viable** |
| Es un caso intermedio | **B · Parcialmente viable** — decides tú, revisando avalúo, monto y capacidad de pago |

Si no hay garantía, se le informa la alternativa de invertir — pero **no se le crea un negocio de inversionista** hasta que la persona lo pida explícitamente.

---

## Qué capturar en cada etapa

Solo lo importante. El resto lo llena el sistema.

**Nuevo solicitante**
Viabilidad inicial · Estatus de documentación · Link de carpeta en Drive · Tipo de inmueble en garantía · Zona · Monto solicitado · Destino del financiamiento

**Evaluación**
Evaluación de áreas · Decisión de comité · Motivo de decisión · Plazo · Tasa anual fija · Tipo de instrumento · Garantía estructurada · Destino autorizado

**Formalización**
Material de campaña listo · Tipo de rendimiento (RF o RV) · Tipo de proyecto · Obligados solidarios · Estatus de formalización

**Proceso de firma**
Tipo de instrumento (hipotecario, fiduciaria, cesión de derechos, pagaré con aval) · Notario asignado · Folio de inscripción · Número de fideicomiso · Link del expediente · **Contrato firmado** · Fecha de firma

**Cierre perdido**
Motivo documentado · Link de la carta de rechazo

---

## Los documentos viven en Drive, las decisiones en HubSpot

> **HubSpot no lee Drive.** Drive guarda los archivos; HubSpot guarda el estado.

Por eso existe el **formulario puente**: el solicitante confirma ahí que terminó de cargar, y eso sí lo ve HubSpot.

**Tu trabajo:** crear la carpeta, pegar el link en el negocio, y **mantener actualizado el `Estatus de documentación`**. Ese campo es el que mueve el proceso, no los archivos.

Estructura de la carpeta:

```
01. Proyecto        título, libertad de gravamen, avalúo, predial,
                    agua, material gráfico, brochure
02. Garante         identificación, CURP, constancia fiscal,
                    comprobante de domicilio, opinión de cumplimiento,
                    estado de cuenta, historial crediticio
03. Obligado        los mismos del garante
    solidario
```

Para persona moral, el bloque 02 cambia a: acta constitutiva, asamblea reciente, poder notarial, constancia fiscal, comprobante de domicilio, opinión de cumplimiento, estado de cuenta y organigrama.

---

## Tus tiempos

| Momento | Compromiso |
|---|---|
| Primer contacto humano | **≤ 24 h hábiles** |
| Validación PLD *(Compliance)* | ≤ 48 h hábiles |
| Revisión legal *(Legal)* | ≤ 72 h hábiles |
| Respuesta al solicitante tras el análisis | **≤ 24 h hábiles** |
| Proceso de firma | 15 días hábiles |

**Seguimiento del expediente:** días **2, 3, 7 y 15**. Al día 15 pasa a pausa.

**Cadencia:** máximo 2 intentos activos, máximo 1 llamada al día, WhatsApp solo informativo. Después de un correo de pausa, alto total.

---

## Las tres cartas

Están en Drive, listas para prellenar:

| Carta | Cuándo |
|---|---|
| **Aprobados** | Monto, tasa, plazo, instrumento y pasos siguientes |
| **Con observaciones** | Qué falta y fecha límite (5 días hábiles por defecto) |
| **Rechazados** | Cuatro versiones según el motivo |

Guarda siempre el link de la carta en el negocio. Es lo que deja trazabilidad de qué se le dijo al solicitante.

---

## Cuándo escalar

Habla con Ops si: los documentos están completos y no hay respuesta en 72 h · el monto es alto o la estructura es atípica · el análisis lleva más de 5 días hábiles · hay conflicto entre áreas.

**Legal y Finanzas no se autoasignan casos.** Si necesitas que entren, se pide.

---

## Tus tres vistas

1. `Solicitantes · Atorados · Míos` — sin actividad en 7 días
2. `Solicitantes · Documentación incompleta · Míos`
3. `Solicitantes · En firma · Míos` — ordenada por fecha, para vigilar los 15 días
