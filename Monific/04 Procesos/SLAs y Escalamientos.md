---
titulo: SLAs y Escalamientos
tipo: concepto
area: transversal
estado: en-progreso
confianza: media
actualizado: 2026-08-07
fuentes: [D195, D167, X011, X013, X020]
tags: [proceso, sla, escalamiento]
---

# SLAs y Escalamientos

> **En una frase:** todos los tiempos comprometidos del proyecto en un solo lugar, y quién empuja a quién cuando no se cumplen.

**Principios operativos declarados:**

1. El solicitante nunca empuja el proceso → **lo empuja Monific**.
2. El SLA no es promesa al cliente, es **compromiso interno**.
3. Todo incumplimiento **genera señal**, no "se compensa después".

⚠️ Estos SLAs vienen mayoritariamente de `D195`, un documento de diseño elaborado con apoyo de IA. Son el diseño objetivo, **no** una línea base medida.

---

## Solicitantes

### Lead recibido → primer contacto

| Etapa | Disparador | Objetivo | Responsable | Canal | Si no se cumple |
|---|---|---|---|---|---|
| Lead recibido | Formulario 1 enviado | Inmediato | Sistema | Email auto | — |
| **Primer contacto humano** | Lead pide link o agenda llamada | **≤ 24 h hábiles** | A.A.S. (Guillermo) | Email / WhatsApp / Llamada | Escala a Ops |
| No respuesta del lead | Email 1 enviado | Día 3 | Sistema | Email auto | — |
| Cierre por inacción | Sin respuesta | Día 6 | Sistema | Email pausa | Se congela el lead |

**Escalamiento:** > 24 h sin contacto humano cuando el lead sí pidió link → alerta a Ops / [[Raquel Alfie]]. Reincidencia (> 2 veces/mes) → se documenta como incumplimiento operativo.

### Documentación completa → análisis

| Subetapa | Objetivo | Responsable | Qué revisa |
|---|---|---|---|
| Validación PLD | **≤ 48 h hábiles** | Compliance / PLD | Listas, alertas, perfil |
| Revisión legal | **≤ 72 h hábiles** | Legal | Propiedad, titularidad, estructura |

⚠️ Nota literal: *"Que la revisión financiera no se encuentre en el proceso no significa que no se hace; por indicaciones de Ted se puede avanzar con las primeras dos revisiones."*

### Análisis terminado → respuesta

| Evento | Objetivo | Responsable |
|---|---|---|
| Análisis completo | Día 0 | Ops |
| **Respuesta al solicitante** | **≤ 24 h hábiles** | A.A.S. |

### Cadencias

- Máx. **2 intentos activos** de contacto humano
- Máx. **1 llamada por día**
- WhatsApp solo informativo, no insistente
- **Email de pausa = stop total**
- Recordatorios solo **antes** del análisis; nunca durante el análisis legal/financiero; nunca después de una pausa

### Escalamiento a Legal

Responsable: Ops. Cuándo: documentos completos confirmados · lead estratégico o monto relevante · riesgo de cuello de botella · **análisis > 5 días hábiles** · caso borderline · monto alto o estructura atípica · conflicto entre áreas.
**Legal y Finanzas no se autoasignan casos.**

### 🚨 Alerta roja

Cualquiera de estas: lead con docs completos sin respuesta > 72 h · incumplimiento de SLA 2 veces en el mes · solicitud viable congelada sin razón · comunicación contradictoria al solicitante · riesgo PLD sin resolución clara.
**Acción:** el caso se congela · Dirección decide · se documenta el incidente.

### Otros tiempos del proceso

| Etapa | Tiempo |
|---|---|
| Seguimiento del expediente | Días **2, 3, 7 y 15**, escalando tareas vencidas |
| Día 15 | Pasa a pausa/seguimiento |
| Respuesta a carta de observaciones | 5 días hábiles (default) |
| Proceso de firma ante notario | **15 días hábiles** (SLA habitual) |
| Notificación de negocio estancado | Formalización > 5 días · Proceso de firma > 5 días (dos escalones) |

---

## Cobranza

### Fase 1 · Preventiva (sin incumplimiento)

| Actor | Compromiso |
|---|---|
| **Sistema** | Recordatorios automáticos en **T-10, T-7 y T-5**. Cumplimiento 100 %, sin excepción |
| **A.A.S. (Guillermo)** | Desde T-5: primer contacto manual ≤ 24 h · desde T-3: segundo contacto ≤ 24 h · **T-2 y Día 0: contacto ≤ 12 h** |

Si no logra contacto, se documenta el intento; **no se pausa el flujo**.

### Fase 2 · Día 0 (fecha límite efectiva)

- Hora límite de validación: **18:00**
- Propiedad clave: `Pago_Confirmado` = Sí / No
- **Regla dura:** sin confirmación explícita en HubSpot → el sistema asume **NO pago**

### Fase 3 · Día 1 (evento de incumplimiento)

- Detección: automática
- Aplicación de penalizaciones: **inmediata** (comisión 15 % + IVA e interés moratorio). 🔴 La tasa moratoria está en disputa: 38 % anual según `D195` vs. *"dos veces la tasa ordinaria, sin excepción"* según la Directora de Finanzas → [[Contradicciones y Verificaciones]] C-21
- Notificación formal a solicitante y obligados solidarios: **mismo día**

### Fase 4 · Post-incumplimiento

| Situación | SLA |
|---|---|
| Rendimientos **con** garantía | Asignación a Ted ≤ 24 h · validación de garantía (Emiliano + Vianey) ≤ 48 h · uso de reserva ≤ 72 h · solicitud de reposición y bloqueo del solicitante: inmediatos |
| Rendimientos **sin** garantía | Primera negociación ≤ 5 días hábiles · definición (regulariza / no) ≤ 15 días |
| Capital pre-vencimiento | Revaluación de aforo ≤ 10 días · solicitud de refuerzo/prepago inmediata · respuesta del solicitante ≤ 10 días |
| Capital vencido | Decisión de ejecución ≤ 5 días · inicio legal según contrato, sin pausa operativa |

### La cadena ARI

| Día | Acción |
|---|---|
| 15 | Aviso a ARI para preparar la tabla de adeudo |
| 16 | ARI copiado en la escalación |
| 30 | ARI inicia cobranza formal junto con Finanzas |
| 60/61 | Paso a Ejecución de Garantía |
| 61+ | Ejecución legal |

❓ Convive con la versión "semana 1 Monific · semana 2 despacho · legal desde semana 3". Sin conciliar. → [[Contradicciones y Verificaciones]]

### Matriz de responsabilidad en cobranza

| Fase | Responsable |
|---|---|
| Automatización | HubSpot |
| Cobranza preventiva | Guillermo (A.A.S.) |
| Confirmación Día 0 | Guillermo |
| Incumplimiento | Sistema |
| Garantías | Ted / Emiliano / Vianey |
| Comunicación a inversionistas | Raquel |
| Legal | Legal externo (ARI) / interno |

---

## Atención a clientes (ATC)

| Evento | SLA |
|---|---|
| Primera respuesta en canales inmediatos | **< 5 min** |
| Respuesta excelente | < 2 min |
| Conversaciones abiertas > 24 h | < 1 % |
| Asignación del ticket al E.A.C. de turno | **≤ 5 min** |
| Vencimiento de ticket escalado a TI | **48 horas** (WF-048) |

### Por nivel de cliente

| Nivel | SLA de contacto humano |
|---|---|
| 1 — Lead | ≤ 24 h |
| 2 — Perfil en proceso | ≤ 24 h |
| 3 — STP activa | ≤ 24 h |
| 4 — Inversionista activo | 1 contacto / 60 días |
| VIP | 1 contacto / 30 días |

### Escalamiento ATC

🟢 Nivel 0 Sistema → 🟡 Nivel 1 E.A.C. → 🔵 Nivel 2 Responsable ATC *(hoy Raquel)* → 🔴 Nivel 3 Raquel

Detalle en [[Proceso de Servicio ATC]].

---

## UNE

| Evento | Plazo |
|---|---|
| **Dictamen** | **30 días hábiles** — plazo regulatorio CNBV/CONDUSEF |
| Tarea de dictamen al propietario | Vence a **10 días** |
| Recordatorios | Días **5 y 8** |
| Escalamiento | Al vencer la fecha límite: notificar a superior + tarea urgente |

⚠️ **Pendiente crítico:** separar el SLA interno del plazo regulatorio. Hoy se confunden.

---

## Inversionistas

| Evento | Regla |
|---|---|
| Detenido en el mismo paso KYC | Alerta interna a las **48 h** |
| Cuenta STP activa sin invertir | WhatsApp o tarea de llamada a los **7 días** |
| Inactividad | Sin reinversión en **> 90 días** = segmentación de inactivo |
| **Congelado — Regla A** | 15 días sin depósito después de STP |
| **Congelado — Regla B** | Cero inversiones activas + saldo 0 + 90 días sin actividad |
| Reactivación de leads inactivos | Campañas cada 90 días |

---

## KPIs de control de SLA

| Área | KPI |
|---|---|
| Solicitantes | % leads con primer contacto < 24 h · tiempo promedio docs completos → respuesta · % solicitudes en pausa · % SLA incumplidos por área · tiempo promedio por etapa |
| Cobranza | Días de atraso · monto vencido · total recuperado · % pagos puntuales |
| ATC | Tiempo de respuesta por canal · tasa de satisfacción post-ticket · alertas si un ticket queda sin respuesta > 24 h |

🔴 Ninguno de estos KPIs tiene dashboard construido. Bloque **B06**. → [[Dashboards y Reportes]]

---

## Relacionado

- [[Proceso Comercial Solicitantes]] · [[Proceso de Cobranza]] · [[Proceso de Servicio ATC]] · [[Proceso UNE]]
- [[Roles Operativos]] — quién responde por cada SLA
- [[Dashboards y Reportes]] — dónde deberían medirse

## Fuentes

- `D195` — Entregables del 26 de enero: SLAs de solicitantes, cobranza y ATC
- `D167` — Maestro Operativo: cadena ARI, seguimiento del expediente
- `X011` — Master de Cobranza
- `X013` — Master de Servicio/UNE
- `X020` — Requerimiento Formal: bloques B04 y B06
