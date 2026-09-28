---
titulo: Dashboards y Reportes
tipo: concepto
area: transversal
estado: bloqueado
confianza: media
actualizado: 2026-08-31
fuentes: [D193, P_ANEXO, X020, D196, D195]
tags: [hubspot, dashboards, reportes, kpi]
---

# Dashboards y Reportes

> **En una frase:** cuatro dashboards ejecutivos son entregable contractual explícito y **ninguno está construido**.

🔴 Bloque **B06** del requerimiento formal. Riesgo declarado: *"Decisiones sin información y entregable contractual incompleto."*

---

## Lo que obliga el contrato

Del Anexo A:

> **Dashboards ejecutivos:** configuración de paneles de **inversión, cobranza, comunicación y desempeño comercial**.
>
> En consecuencia, los dashboards deberán:
> - Contener **métricas accionables**
> - Reflejar información **en tiempo real**
> - Ser **utilizables por dirección y operación**

Además, la definición contractual de **MVP Operativo** incluye: *"Visualizar métricas críticas en dashboards ejecutivos en tiempo real."*

→ [[Contrato y Alcance]] · [[Proyecto BOOST]]

---

## Los cinco dashboards que pidió el cliente

Del brief (`D193`, sección 5.2):

### 1 · Conversión de inversionistas
- Total de registros → perfiles en proceso → cuentas activas → primeras inversiones → reinversiones
- % de conversión por etapa y por fuente (Meta Ads, orgánico, referidos…)
- **CAC y LTV en tiempo real**
- Score promedio por segmento

### 2 · Solicitantes
- Leads → interesados → aprobados → fondeados → activos
- Tiempos promedio de respuesta / análisis / aprobación
- % de morosidad y pagos puntuales
- Monto total en cobranza activa y recuperada

### 3 · Marketing
- Desempeño de campañas (CTR, CPL, CAC)
- Integración directa con **Singular y Meta Ads**
- Segmentación por cohortes
- **Control automático de los 7,000 contactos de marketing activos**

### 4 · Atención al cliente (Service Hub)
- Tiempos de respuesta por canal (WhatsApp, correo, teléfono)
- Tasa de satisfacción post-ticket
- Alertas automáticas si un ticket queda sin respuesta > 24 h
- Clasificación automática de casos con IA

### 5 · Financiero
- Rendimientos pagados vs. comprometidos
- Monto total invertido, fondeado y por fondear
- Seguimiento de pagos de solicitantes (puntuales, retrasados, vencidos)

⚠️ El brief pide **cinco**; el anexo contractual compromete **cuatro** (inversión, cobranza, comunicación y desempeño comercial). El mapeo entre ambas listas no está resuelto. → [[Contradicciones y Verificaciones]]

---

## Los KPIs que deberían medirse

| Objetivo | Indicador | Meta |
|---|---|---|
| Conversión registro → inversión | % de cuentas activas que invierten | ≥ 35 % |
| Conversión lead solicitante → fondeo | % de leads aprobados que obtienen financiamiento | ≥ 25 % |
| Eficiencia de atención | Tiempo medio de primera respuesta | < 10 min |
| Retención de inversionistas | % de reinversión en campañas nuevas | ≥ 70 % |
| Cumplimiento de pagos | % de pagos puntuales | ≥ 90 % |
| Control de base de marketing | Total de contactos activos | ≤ 7,000 |
| CAC optimizado | Costo promedio por inversión efectiva | ≤ $250 MXN |
| ROI de campañas | Ingresos / inversión publicitaria | ≥ 4× |

Más los KPIs operativos de SLA: → [[SLAs y Escalamientos]]

---

## Por qué no se pueden construir todavía

> 🔵 **Leer con la corrección del 2026-08-31 al final de esta sección:** el bloqueo aplica a dos de los cuatro dashboards, no a los cuatro.

Dependencias reales, no excusas:

| Bloqueo | Detalle |
|---|---|
| **Sin datos financieros en HubSpot** | `current_account_balance`, `invested_balance`, `account_value`, `current_profit` **no existen** como propiedades. Sin ellas no hay dashboard de inversión ni financiero |
| **Sin datos de cobranza** | 26 propiedades de cobranza no existen. Sin `dias_de_mora`, `saldo_insoluto_total` ni `estado_de_pago` no hay dashboard de cobranza |
| ~~Sin comunicaciones activas~~ | 🔵 **Levantado el 2026-08-31:** las 81 se declaran publicadas e integradas, así que el dashboard de comunicación **ya tiene qué medir** |
| **Sin integración con Singular/Meta** | Trazabilidad de CAC parcialmente conectada |
| **383 propiedades vacías** | Ruido que distorsiona cualquier reporte |
| **Catálogo `nombre_de_proyecto` roto** | ~1,125 deals fallidos → los reportes de monto y proyecto están incompletos |

**Conclusión:** los dashboards son consecuencia, no causa. Se desbloquean cuando la integración entregue datos reales (fase F4 del Gantt).

### ⚠️ Corrección al 2026-08-31: la conclusión anterior aplica a dos de los cuatro, no a los cuatro

| Dashboard | ¿Bloqueado? | Por qué |
|---|---|---|
| **Inversión** | 🔴 Sí | Necesita `current_account_balance`, `invested_balance`, `account_value` y `current_profit`, que no existen. Dependen del Admin |
| **Cobranza** | 🔴 Sí | Necesita `dias_de_mora`, `saldo_insoluto_total` y `estado_de_pago`. El Admin es fuente de verdad de cobranza |
| **Comunicación** | 🟢 **No** | Con las 81 piezas declaradas publicadas, mide aperturas, clics y envíos con datos nativos de HubSpot |
| **Desempeño** | 🟢 **No** | Se alimenta de actividad nativa del portal: tareas, tickets, SLA, propietarios |

**Por qué importa la distinción.** Reportar B06 completo como *"bloqueado por el cliente"* cuando dos de los cuatro no lo están le da a Monific un argumento para desestimar la dependencia en los otros dos —que sí es real y sí es del cliente. Entregar comunicación y desempeño cuesta poco y **protege el argumento** de inversión y cobranza. → [[Bloques de Cierre B01-B16]] · [[Estado Actual]]

---

## El documento de reportes

Existe un entregable *"REPORTES MONIFIC - HUBSPOT"* (`D196`, 66k caracteres) que documenta los reportes diseñados. ⚠️ No se ha contrastado su contenido contra lo construido en el portal — es un **hueco de esta wiki**. → [[Preguntas Abiertas]]

---

## Bloque de remediación B06

> **Construir dashboards de inversión, cobranza, comunicación y desempeño.**
> **Evidencia:** links, capturas, fuentes y prueba con datos reales.
> **Criterio de aceptación:** cuatro dashboards poblados, accionables y **aceptados por dirección/operación**.
> **Plazo:** +25 días hábiles.

---

## Relacionado

- [[SLAs y Escalamientos]] — los KPIs operativos
- [[Propiedades]] — los campos que faltan para medir
- [[Integracion Admin Monific HubSpot]] — de dónde vendrán los datos
- [[Bloques de Cierre B01-B16]] — bloque B06

## Fuentes

- `D193` — Brief de Necesidades, sección 5.2 y 5.4
- `P_ANEXO` — Anexo A: dashboards como entregable y definición de MVP
- `X020` — Requerimiento Formal: bloque B06
- `D196` — REPORTES MONIFIC - HUBSPOT (⚠️ pendiente de contrastar)
- `D195` — Entregables del 26 de enero: KPIs de control por proceso
