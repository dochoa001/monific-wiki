---
titulo: Gobernanza y Rituales
tipo: concepto
area: transversal
estado: en-progreso
confianza: media
actualizado: 2026-08-11
fuentes: [D149, P_ANEXO, D166, D181, D178, P_NOTIF, D198]
tags: [proyecto, gobernanza, comunicacion]
---

# Gobernanza y Rituales

> **En una frase:** cómo se trabaja el día a día del proyecto — canales, cadencia de reuniones, dónde se depositan los entregables y quién decide qué.

---

## Canales de comunicación

| Canal | Uso | Notas |
|---|---|---|
| **Correo electrónico** | Comunicación formal y envío de documentos | Canal contractual. Monific: contacto@monific.com · B&O: roberta@black-n-orange.com con copia a legal@blno.group y administracion@blno.group |
| **WhatsApp (grupo)** | Comunicación rápida o urgente | **No** es canal formal. Se usa mucho en la práctica: Raquel confirma agendas y decisiones por ahí |
| **ClickUp** | Gestión del proyecto | Acceso dado a Raquel en el kickoff. Fases: onboarding, mapeo, capacitaciones. ⚠️ No aparece mencionado en las minutas posteriores a marzo — probablemente cayó en desuso |
| **Google Drive** | Entregables y evidencias | Estructura formalizada por Monific en julio de 2026 (ver abajo) |
| **Videollamada** | Sesiones de trabajo | Grabadas y transcritas; de ahí salen las minutas |

---

## Cadencia de reuniones

### Lo contratado

| Fase | Cadencia |
|---|---|
| Mes 1 (arranque) | Hasta **1 reunión semanal de 1 hora** |
| Meses 2 al 6 | **Semanal de hasta 30 min** + **mensual de 1 hora** para plan de trabajo y prioridades |

Reuniones adicionales por mutuo acuerdo.

### Lo que pasó realmente

| Periodo | Cadencia real |
|---|---|
| Ene–mar 2026 | **2 sesiones semanales de mapeo**: martes 14:00 y jueves 16:00 (acordado en el kickoff a propuesta de Ricardo Gómez, aceptado por Raquel) |
| Abr–jun 2026 | Recurrentes semanales/quincenales, más presentaciones de entregables |
| Jul–ago 2026 | Sesiones de alineación puntuales |
| Propuesto 2026-08-04 | **Sesión recurrente breve de 15–20 min** para seguimiento de la integración. Frecuencia **por confirmar** por Raquel con Daniel y Jesús, vía WhatsApp |

Horario de trabajo de B&O: lunes a viernes, 9:00–18:00, hora del centro de México. Periodo vacacional del 20 de diciembre al 6 de enero.

---

## Estructura de Drive vigente

Instrucción de Monific del 2026-07-31. **Es la regla actual y sustituye cualquier flujo anterior:**

| Carpeta | Permiso B&O | Uso |
|---|---|---|
| `00_VIGENTE_LEER_PRIMERO` | Lector | Instrucción vigente y reglas de versión |
| `01_PARA_CORREGIR_BNO` | Lector | Masters revisados e insumos. B&O consulta pero **no reemplaza** los originales |
| `02_RESPUESTA_BNO` | **Editor** | **Único lugar** donde B&O deposita masters corregidos, respuestas y evidencias |
| `90_CONTRATO_SOLO_LECTURA` | Lector | Contrato y referencias que no se modifican |
| `99_HISTORICO_NO_USAR` | — | No es fuente de trabajo |

**Reglas asociadas:**

1. El **CONTROL ÚNICO CIERRE BNO** es la única lista de seguimiento.
2. Los cuatro masters revisados contienen la hoja `00_REVISION_MONIFIC`.
3. **No crear una matriz adicional.**
4. Cada bloque se cierra únicamente con: documento corregido + evidencia de configuración + caso de prueba reproducible + validación escrita de Monific.
5. Si una entrega llega por correo o por otra carpeta, **debe registrarse en el bloque correspondiente del Control Único** con su URL/ID y resultado de prueba.

### Documentos vigentes de consulta

| Documento | Drive ID |
|---|---|
| Máster Comercial corregido 31-jul | `1Wr55InKsdIOTTcPcpJN5jjsuaJf1mdP8` |
| Máster Cobranza corregido 31-jul | `1XvPaOypZc3lN6sqMP5amoUKpo8BRoFwT` |
| Integración HubSpot–Admin corregida 31-jul | `1NsBV6m2cIq-Dk2ZzhgkFQrewzi0Yc2cd` |
| Control Único vigente | `1RPbXyowfWpGnsVQ_OYKyZI5-iFhy1T5j` |
| Drive de Monific (raíz) | `11DJFkFD5a3UUkJUOWrNEeI4bEuKKzn6P` |

⚠️ El Control Único tiene un ID nuevo porque el archivo anterior no permitió reemplazo directo. **La versión nueva sustituye expresamente a la anterior** y B&O debe responder únicamente en ella.

### El formato de evidencia exigido por pendiente

Monific exige que cada pendiente se responda con **siete campos**, sobre los mismos másteres y el Control Único:

| # | Campo |
|---|---|
| 1 | Qué se corrigió |
| 2 | Qué versión se sustituye |
| 3 | URL o ID de la configuración |
| 4 | Evidencia **antes y después** |
| 5 | Caso de prueba |
| 6 | Resultado esperado y resultado real |
| 7 | Fecha de ejecución |

### El código de color vigente

| Color | Significado literal según Monific |
|---|---|
| **Azul claro** | **NUEVO** — no existía en el mapa ni estaba contemplado. **No significa que ya esté configurado en HubSpot** |
| **Amarillo claro** | **ACTUALIZADO** — se corrigió la definición documental, pero sigue pendiente de implementación, evidencia o prueba |

> *"Ninguna fila nueva se considera implementada ni verificada sólo por haber sido incorporada al documento."*
> *"Ningún punto se considera cerrado únicamente por aparecer en el documento o por existir en HubSpot."*

Es la formulación del cliente de la regla **configurado ≠ verificado**. → [[Analisis de Cierre BNO]]

---

## Quién decide qué

| Decisión | Quién |
|---|---|
| Aprobación final de cualquier entregable | **[[Raquel Alfie]]** — Champion del proyecto |
| Responsabilidad integral de la cuenta por B&O | **[[Emmanuel Chulin]]** (Gerente de Operaciones) desde junio de 2026 |
| Implementación en HubSpot | [[David Ochoa]] |
| Integración técnica del lado Monific | [[Jesus Torres]] (CTO) y Daniel Torres (Desarrollo) |
| Soporte técnico de integración por B&O | Jazmín Córdova (Tecnología) y Ricardo Gómez |
| Escalamiento de bloqueos técnicos | Se canaliza **por medio de Raquel**; si aplica, se convoca sesión especializada con Ricardo/Jazmín (acuerdo D-07 del 2026-08-04) |
| Veto regulatorio sobre el cierre | Legal y Compliance de Monific |

---

## Regla transversal sobre comunicaciones

**Ningún correo ni WhatsApp se activa** sin que Monific apruebe previamente:

1. Copy
2. Remitente
3. Destinatarios
4. Consentimiento / canal

Esta regla aparece en el Maestro Operativo y explica por qué tantos workflows de comunicación están apagados. → [[Matriz de Comunicaciones]]

---

## Relacionado

- [[Equipo Monific]] · [[Equipo Black and Orange]] · [[Directorio de Contactos]]
- [[Plan de Cierre y Gantt]] — el flujo de entrega de evidencias
- [[Conflicto Contractual]] — la disputa sobre la titularidad de la cuenta

## Fuentes

- `D149` — Sesión de Kickoff (2026-01-07): canales y cadencia
- `P_ANEXO` — Anexo A: reuniones y sesiones de trabajo
- `D166` — Instrucción vigente de cierre (`00_LEER_PRIMERO.txt`, 2026-07-31)
- `D167` — Maestro Operativo, §3 Drive y forma de trabajo
- `D181` — Minuta 2026-08-04: acuerdos de escalamiento y sesión recurrente
- `D178` — Minuta 2026-06-29
- `P_NOTIF` — Notificación contractual: cláusula de notificaciones
- `D198` — Historial y contexto de cierre (2026-08-03), §1: formato de siete campos, código de color e IDs de Drive vigentes
