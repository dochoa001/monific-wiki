---
titulo: Resumen Ejecutivo
tipo: indice
area: transversal
estado: en-riesgo
confianza: alta
actualizado: 2026-08-07
fuentes: [D167, X020, X002, P_ANEXO, P_CONTRATO, P_NOTIF, D181, D180, X024]
tags: [inicio, resumen]
---

# Resumen Ejecutivo

> **En una frase:** Black & Orange implementa HubSpot como sistema central de Monific (fintech de crowdfunding inmobiliario); el diseño está documentado con mucho detalle, la ejecución está incompleta y el cliente abrió una disputa contractual formal en junio de 2026 que sigue sin cerrarse.

Lee esto y ya tienes el 80 % del contexto.

---

## 1. El cliente

**Monific S.A. de C.V., Institución de Financiamiento Colectivo** — plataforma mexicana de crowdfunding inmobiliario regulada por la **CNBV** bajo la Ley Fintech. Conecta dos lados:

- **Inversionistas**: invierten desde $1,000 MXN en proyectos inmobiliarios, con rendimiento fijo o variable. → [[Buyer Persona Inversionista]]
- **Solicitantes**: personas físicas o morales que buscan capital con garantía inmobiliaria (hasta $60 MDP, hasta 50 % del valor del inmueble). → [[Buyer Persona Solicitante]]

Es una empresa pequeña: ~11 personas. Ser una entidad regulada condiciona todo — trazabilidad, UNE, reportes CNBV. → [[Marco Regulatorio]]

---

## 2. El proyecto

**Plan BOOST** — 6 meses, arranque enero 2026. Objetivo: convertir HubSpot en la fuente única de verdad comercial y operativa, sustituyendo Google Forms, Moonflow, WhatsApp suelto y procesos manuales.

| Dato | Valor |
|---|---|
| Contrato — fecha del documento | 2026-01-05 |
| Contrato — **firma efectiva** (DocuSign) | **2026-01-19/20** |
| Kickoff con cliente | 2026-01-07 — ⚠️ *antes de la firma* |
| Duración contratada | 6 meses |
| Inversión total | $382,482 MXN + IVA ($55,872/mes × 6 + $47,250 de Mapeo de Procesos Elite) |
| Portal HubSpot | 48427391 |
| Hubs | Marketing, Sales y Service — todos Professional |
| Champion del cliente | Raquel Alfie, Directora Comercial y de Operaciones |

Metodología **Learn → Do → Teach → Repeat**. → [[Metodologia BOOST]] · [[Contrato y Alcance]]

---

## 3. Lo que se diseñó

Cinco procesos mapeados AS-IS y TO-BE, con pipelines, propiedades, workflows y comunicaciones:

| Proceso | Objeto HubSpot | Workflows | Estado |
|---|---|---|---|
| [[Proceso Comercial Solicitantes]] | Negocio | WF-001 a WF-024 | 🟡 documentado, no verificado |
| [[Proceso Comercial Inversionistas]] | Negocio | WF-025 a WF-040 | 🟡 documentado, no verificado |
| [[Proceso de Servicio ATC]] | Ticket | WF-041 a WF-049 | 🟡 documentado, no verificado |
| [[Proceso de Cobranza]] | Ticket | WF-050 a WF-064 | 🔴 mayoría con errores |
| [[Proceso UNE]] | Ticket | UNE-01 a UNE-06 | 🔴 sin acreditar |

Más: **81 comunicaciones** objetivo (email, WhatsApp, notificación interna, PDF institucional) y una **integración unidireccional** Admin Monific → HubSpot con 30 reglas de negocio.

→ [[Workflows]] · [[Matriz de Comunicaciones]] · [[Reglas de Negocio API]]

---

## 4. Lo que realmente está funcionando

Esta es la parte incómoda. Verificación directa por API de HubSpot (2026-06-17, solo lectura):

| Indicador | Resultado |
|---|---|
| Workflows en el portal | 96 (57 encendidos, 39 apagados) |
| Workflows que comunican al cliente | **9 de 96** |
| De las 31 propiedades comprometidas por B&O | **26 no existían** |
| Objeto personalizado de Cobranza | **No existe** |
| Comunicaciones implementadas de las 81 | **0** (56 existen como asset, todas en borrador) |
| Workflows marcados como ✅ verificados en el corte 2026-07-31 | **0 de 70** |

El principio rector del proyecto: **estar encendido no es estar probado**. Nada se marca verde sin caso reproducible y validación escrita de Monific.

→ [[Estado Actual]] · [[Auditorias]]

---

## 5. El conflicto

El **2026-06-18** Monific envió a Black & Orange una **notificación contractual de inconformidades y requerimiento formal de subsanación**. No es una renegociación económica: el cliente afirma haber pagado en su totalidad y exige el cumplimiento.

Cifras oficiales del requerimiento:

- **284** hallazgos consolidados en 4 auditorías
- **251** abiertos
- **217** exigibles directamente a B&O — de ellos **84 críticos** y **87 altos**
- **103** hallazgos reconocidos por escrito por la propia B&O

El requerimiento organiza el cierre en **16 bloques ejecutivos (B01–B16)** con plazos de 10 a 30 días hábiles y un criterio de cierre muy duro: acción terminada + evidencia verificable + prueba de funcionamiento + documentación + validación escrita de Monific.

Monific se reserva expresamente el derecho de rescisión (cláusula de aviso de 30 días) y de reclamar daños.

→ [[Conflicto Contractual]] · [[Bloques de Cierre B01-B16]] · [[Pendientes Criticos]]

---

## 6. Dónde estamos hoy (2026-08-07)

| Fecha | Hito |
|---|---|
| 2026-06-18 | Requerimiento formal de subsanación |
| 2026-07-16 | Gantt v2 de remediación — cierre proyectado 2026-08-28 |
| 2026-07-27 | Se cierra el criterio de viabilidad (garantía sí/no, sin lead scoring numérico); se confirma el objeto Proyecto |
| 2026-07-31 | Corte del **Maestro Operativo** — documento consolidado de pre-cierre |
| 2026-08-04 | Primera sesión técnica con TI de Monific; se acuerda modelo unidireccional y catálogo de propiedades a validar |

El proyecto pasó de "implementación" a **"remediación y cierre"**. La ruta crítica actual es:

```
Homologación de masters → definiciones para TI → integración Admin→HubSpot
→ activación del journey de Inversionistas → capacitación → cierre formal
```

Con una dependencia dura: **TI de Monific desarrolla la integración**, B&O da soporte técnico y las especificaciones. Los tiempos de esa fase son tentativos.

→ [[Plan de Cierre y Gantt]] · [[Estado Actual]]

---

## 7. Las cinco cosas que hay que saber antes de tocar nada

1. **El Admin de Monific es la fuente de verdad financiera.** HubSpot almacena, orquesta y deja trazabilidad — nunca calcula montos, saldos ni fechas.
2. **El objeto Proyecto es el conector.** Un Proyecto puede tener varias campañas. No existe "Deal padre de campaña". La llave es `numero_de_proyecto`.
3. **Cobranza vive en Tickets**, uno por campaña fondeada, asociado a Proyecto. No hay objeto personalizado de Cobranza. ❓ Los masters dicen otra cosa — ver [[Contradicciones y Verificaciones]].
4. **Ninguna comunicación se enciende sin aprobación previa** de copy, remitente, destinatario y consentimiento por parte de Monific.
5. **La suscripción actual de HubSpot no permite ejecutar código ni cálculos avanzados** (no hay Data Hub / entorno de código). Toda la lógica compleja se resuelve fuera y llega por API.

---

## Relacionado

- [[Mapa General]] — navegación completa
- [[Estado Actual]] — la foto detallada
- [[Contradicciones y Verificaciones]] — qué no creerse de las fuentes

## Fuentes

- `D167` — Maestro Operativo de Procesos y Workflows Monific–BNO, corte 2026-07-31
- `X020` — Requerimiento Formal BNO, corte 2026-06-18
- `X002` — Matriz Única de Hallazgos BNO, corte 2026-06-18
- `P_ANEXO` — Anexo A · Resumen Ejecutivo / Plan BOOST (2025-11-19)
- `P_CONTRATO` — Contrato Monific–B&O (2026-01-05)
- `P_NOTIF` — Notificación contractual de inconformidades (2026-06-18)
- `D181` — Minuta 2026-08-04, sesión técnica de integración
- `D180` — Minuta 2026-07-27, alineación de proyecto
- `X024` — Propuesta Gantt v2 (2026-07-16)
