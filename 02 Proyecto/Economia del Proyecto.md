---
titulo: Economia del Proyecto
tipo: concepto
area: transversal
estado: en-riesgo
confianza: media
actualizado: 2026-08-07
fuentes: [P_ANEXO, P_CONTRATO, D193, D148, X020]
tags: [proyecto, economia, fees, horas]
---

# Economía del Proyecto

> **En una frase:** $382,482 MXN + IVA por 6 meses, presuntamente pagados en su totalidad, más una bolsa de 30 horas mensuales que B&O decidió absorber en lugar de recotizar.

---

## Lo contratado

| Concepto | Monto |
|---|---|
| Fee mensual BOOST Elite | $55,872.00 MXN + IVA |
| Add-On de Mapeo de Procesos Elite (pago único) | $47,250.00 MXN + IVA |
| **Total por 6 meses** | **$382,482.00 MXN + IVA** |

### Esquema de pagos

| Concepto | Mes 1 | Mes 2 | Mes 3 | Mes 4 | Mes 5 | Mes 6 |
|---|---|---|---|---|---|---|
| Fee mensual | $55,872 | $55,872 | $55,872 | $55,872 | $55,872 | $55,872 |
| Add-On Mapeo | $47,250 | — | — | — | — | — |
| **Total** | **$103,122** | $55,872 | $55,872 | $55,872 | $55,872 | $55,872 |

**Condiciones:** pago inicial completo al arranque (fee + add-on). Pagos subsecuentes mensuales. B&O factura los primeros 5 días hábiles del mes; pago hasta 15 días naturales después. Mora: 5 % mensual.

---

## Estado del pago

Monific afirma en el requerimiento formal:

> *"Conforme a los registros contables y comprobantes de Monific, la contraprestación correspondiente al proyecto **ha sido cubierta**."*

El expediente incluye "evidencia de pago" en la carpeta `05 CONTRATO ALCANCE`.

⚠️ **Tensión contractual:** el contrato dice que *"no se devengará contraprestación alguna por (…) entregables no aceptados o incumplimientos parciales o totales"*. Si Monific pagó y sostiene que los entregables no están aceptados, tiene base para reclamar. → [[Contrato y Alcance]]

---

## La bolsa de 30 horas mensuales

Decisión interna de B&O del **2026-05-22** (`D148`), tomada por Caroline Bersot, Eduardo Solís, Emmanuel Chulin y Jorge García:

| Contexto | Detalle |
|---|---|
| **Problema** | Retrasos por falta de documentación de la API del Admin Monific y por las auditorías externas del cliente. Desviación de 3–4 semanas |
| **Estimación** | 12 semanas adicionales para completar integración y capacitación |
| **Decisión** | Implementar un esquema de **30 horas mensuales** de soporte y capacitación **sin costo adicional** |
| **Racional** | Evitar recotizaciones y mantener la relación a largo plazo |

⚠️ No hay evidencia en las fuentes de que este acuerdo se haya formalizado por escrito con Monific. Eduardo Solís quedó de participar en la siguiente llamada con el cliente para formalizarlo.

---

## El corte de horas — bloque B13

El requerimiento exige explícitamente:

> **B13 · Modelo operativo y corte de horas** — *"Conciliar alcance/horas y reasignar o acreditar horas no ejecutadas."*
> Evidencia: corte detallado y anexo operativo firmado. Plazo: +10 días hábiles.
> Criterio: modelo conciliado, horas resueltas, sin costos no acordados.

Es decir: Monific quiere ver en qué se fueron las horas y que las no ejecutadas se acrediten o reasignen.

---

## Costos de HubSpot (los paga Monific, no están en el alcance)

Del brief del cliente, estado a fines de 2025:

| Hub | Nivel / licencias | Precio base | Con descuento startup |
|---|---|---|---|
| Marketing Hub Professional | 3 licencias + 2,000 contactos de marketing | USD 890.00 | USD 222.50 (año 1) / 445.00 (año 2) |
| Contactos de marketing adicionales | +5,000 | USD 250.00 | USD 62.50 / 125.00 |
| Sales Hub Professional | 3 licencias (año 1) / 2 (año 2) | USD 300.00 / 200.00 | USD 75.00 / 100.00 |
| Service Hub Professional | 3 licencias | USD 300.00 | USD 75.00 / 150.00 |

- Descuento startup: **−75 % primer año, −50 % segundo año**
- Créditos HubSpot incluidos: 3,000
- **Facturación reportada: USD 435.00 mensuales** (sin impuestos)

⚠️ Cifras del brief (2025). No están validadas contra facturas y el precio total no cuadra exactamente con la suma de los descuentos indicados. Trátalas como orden de magnitud.

### La decisión pendiente: Data Hub

Las automatizaciones recurrentes de cobranza requerirían **HubSpot Data Hub** si se implementan de forma nativa. La alternativa acordada el 2026-07-27 es que el Admin envíe por API las fechas ya calculadas. Es una decisión **económica** aún no formalizada. → [[Stack Tecnologico Monific]]

---

## Relacionado

- [[Contrato y Alcance]] — cláusulas de pago y devengo
- [[Conflicto Contractual]] — la disputa sobre el cumplimiento
- [[Bloques de Cierre B01-B16]] — B13, corte de horas
- [[Portal HubSpot]] — licencias y límites

## Fuentes

- `P_ANEXO` — Anexo A · Plan BOOST, sección Inversión
- `P_CONTRATO` — Contrato, cláusula de Contraprestación
- `D193` — Brief de Necesidades, sección 4.1 (costos de HubSpot)
- `D148` — Minuta interna Cotización extra (2026-05-22)
- `X020` — Requerimiento Formal, bloque B13
