---
titulo: Portal HubSpot
tipo: entidad
area: transversal
estado: en-progreso
confianza: alta
actualizado: 2026-08-07
fuentes: [D193, X002, X020, D181, P_ANEXO]
tags: [hubspot, portal, licencias]
---

# Portal HubSpot

> **En una frase:** la cuenta 48427391 de Monific — qué hubs tiene, qué límites impone y qué no puede hacer.

---

## Ficha

| | |
|---|---|
| **Portal ID** | **48427391** |
| **Data hosting** | `na1` |
| **Hubs activos** | Marketing, Sales y Service — todos **Professional** |
| **Créditos HubSpot incluidos** | 3,000 |
| **Clave de servicio** | En `http://127.0.0.1:8787/Monific/ (proxy local; las claves ya no viven en el proyecto)` (fuera de esta wiki) — ⚠️ **nunca pegar tokens en una página** |

---

## Licencias

| Hub | Nivel / licencias | Precio base | Con descuento startup |
|---|---|---|---|
| Marketing Hub Professional | 3 licencias + 2,000 contactos de marketing | USD 890.00 | USD 222.50 (año 1) / 445.00 (año 2) |
| Contactos de marketing adicionales | +5,000 | USD 250.00 | USD 62.50 / 125.00 |
| Sales Hub Professional | 3 licencias (año 1) / 2 (año 2) | USD 300.00 / 200.00 | USD 75.00 / 100.00 |
| Service Hub Professional | 3 licencias | USD 300.00 | USD 75.00 / 150.00 |

Descuento: **−75 % primer año, −50 % segundo año**. Facturación reportada: **USD 435.00 mensuales** sin impuestos.

⚠️ Cifras del brief del cliente (2025), no validadas contra facturas. → [[Economia del Proyecto]]

---

## Lo que el portal NO puede hacer

Restricción confirmada en la sesión técnica del 2026-08-04:

> La suscripción actual **no incluye entorno de código ni cálculos avanzados** dentro de HubSpot (no hay Data Hub ni acciones de código personalizadas).

**Consecuencias directas:**

| Necesidad | Solución adoptada |
|---|---|
| Calcular días hábiles y recurrencias de cobranza | El Admin Monific los calcula y envía `fecha_proximo_recordatorio` ya resuelta (regla 29) |
| Generar serie de folios UNE y calcular 30 días hábiles | 🔴 Sin decisión. Opciones: cálculo en el Admin o usar el ID nativo del ticket |
| Deduplicación, reintentos, orquestación | Todo vive fuera de HubSpot, en el backend de Monific |

La alternativa nativa exigiría contratar **Data Hub** — decisión económica abierta desde el 2026-07-27.

---

## Límites operativos

| Límite | Valor | Regla |
|---|---|---|
| **Contactos de marketing** | **7,000** | Cupo **conjunto** Solicitantes + Inversionistas, mensual. Toda alta de marketing debe desclasificarse el mes siguiente (decisión INV-01) |
| Contactos de marketing esperados | Inversionistas activos o con cuenta activa + solicitantes activos en cobranza (máx. 25 actuales / 100 proyectados) | Del brief |

El cliente pidió expresamente automatizaciones que desuscriban contactos inactivos (> 90 días sin interacción) e inscriban nuevos leads activos, con control en tiempo real para no exceder el cupo.

---

## Estado del portal — snapshot por API (2026-06-17)

Extracción directa, solo lectura:

| Indicador | Valor |
|---|---|
| Workflows totales | **96** |
| — activos (ON) | 57 (59 %) |
| — apagados (OFF) | 39 |
| — que comunican al cliente | **9 (9 %)** |
| Nodos de workflow auditados | **4,848** |
| Propiedades totales detectadas | **2,142** |
| Propiedades esperadas por los masters | 177 |
| De las 31 propiedades comprometidas por B&O | **5 creadas · 26 no existen** |
| **Objetos personalizados** | **0** — el objeto de Cobranza no existe |
| Propiedades de Negocio | 402, de ellas **383 vacías** |
| Pipelines de Negocio | 5 |
| Accesos activos no regularizados | Usuarios de B&O y externos con acceso |

→ [[Auditorias]] · [[Higiene y Accesos]]

---

## Tráfico de la integración

Log del 2026-06-30 al 2026-07-29 (fuente F07 del Maestro Operativo):

| Métrica | Valor |
|---|---|
| Llamadas totales | **16,279** |
| Errores 4xx | **766** |
| Rechazos | **741**, concentrados en **valores de proyecto no admitidos** |

Causa raíz identificada: el dropdown `nombre_de_proyecto` tiene **172 opciones** con inconsistencias de codificación UTF-8 (tildes y eñes). La app envía etiquetas en lugar de valores internos → error 400. Se estiman **~1,125 deals fallidos** que deben reprocesarse.

→ [[Integracion Admin Monific HubSpot]] · [[Propiedades]]

---

## Objetos en uso

| Objeto | Uso | Estado |
|---|---|---|
| **Contacto** | Personas: inversionistas, solicitantes, representantes legales | Existente |
| **Empresa** | Desarrolladores / personas morales | Existente |
| **Negocio** | Solicitantes e Inversionistas | Existente |
| **Ticket** | Cobranza, Atención y UNE | **Nuevo en la integración** |
| **Proyecto (Projects)** | Objeto **estándar** activado recientemente. Conector central | **Nuevo en la integración** |

→ [[Modelo de Datos HubSpot]]

---

## Accesos

Del kickoff: Monific dio acceso a **Leticia** (B&O) para que ella diera acceso al resto del equipo de implementación.

🔴 Hallazgo abierto: al 2026-06-17 seguían existiendo usuarios de B&O y externos con acceso al portal no regularizado. → [[Higiene y Accesos]]

---

## Relacionado

- [[Modelo de Datos HubSpot]] · [[Pipelines]] · [[Workflows]] · [[Propiedades]]
- [[Higiene y Accesos]] — apps privadas y scopes
- [[Stack Tecnologico Monific]] — el resto del ecosistema
- [[Economia del Proyecto]] — costos de licencia

## Fuentes

- `D193` — Brief de Necesidades, sección 4.1
- `X002` — Matriz Única de Hallazgos: hojas "Tablero", "WF estado real (96)", "Acceso y config (API)"
- `X020` — Requerimiento Formal, §3
- `D181` — Minuta 2026-08-04: limitación de la suscripción
- `D167` — Maestro Operativo, fuente F07 (log de integración)
- `P_ANEXO` — Anexo A
