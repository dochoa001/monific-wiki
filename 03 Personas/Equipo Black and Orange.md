---
titulo: Equipo Black and Orange
tipo: entidad
area: transversal
estado: en-progreso
confianza: alta
actualizado: 2026-08-07
fuentes: [X023, D149, D177, D178, D181, P_NOTIF, P_ANEXO]
tags: [personas, bno, proveedor]
---

# Equipo Black and Orange

> **En una frase:** el equipo del proveedor, cómo cambió a mitad del proyecto y por qué ese cambio se volvió un punto del conflicto.

**Razón social:** Black and Orange Marketing Digital, S.A.P.I. de C.V. · Partner de HubSpot.

---

## Equipo actual (desde junio de 2026)

| Persona | Rol | Desde |
|---|---|---|
| [[Emmanuel Chulin]] | Gerente de Operaciones · **responsable de la cuenta y del cierre** | jun-2026 |
| [[David Ochoa]] | Especialista Inbound · **implementador HubSpot** | Desde el inicio |
| **Jorge García** | Gerente de Éxito del Cliente / Team Lead | Desde el inicio |
| **Jazmín Córdova** | Lead de Desarrollo Web / Tecnología | Desde ~may-2026 |
| **Ricardo Gómez** (Arkkode) | Especialista en procesos · soporte de integración | Desde el inicio (mapeo) |
| **Sebastián** | Desarrollador | Visto en jun-2026 |
| **Eduardo Solís** | Comercial / dirección | Desde el origen |
| **Roberta Arias Álvarez Pérez** | Apoderada legal · firmante del contrato | — |

---

## Quién estuvo antes

| Persona | Rol | Periodo |
|---|---|---|
| [[Caroline Bersot]] | Consultora Inbound · **PM del proyecto** | ene-2026 → ~jun-2026 |
| **Josué Torres** | Mapeo de procesos | fase de mapeo |
| **Rodrigo Yeo** | Kickoff interno | dic-2025 |
| **Leticia** | Directora de Operaciones — recibió el acceso a HubSpot | ene-2026 |

---

## La transición que se volvió un problema

**Lo que pasó:**

- **2026-06-16** — En sesión con el cliente, B&O informa que Caroline dejó de colaborar con la empresa y que **Emmanuel Chulín asumiría la cuenta y se presentaría formalmente al día siguiente**.
- **2026-06-18** — En la notificación contractual, Monific reclama: *"A la fecha no hemos recibido dicha presentación ni una comunicación directa que confirme quién asumirá la responsabilidad integral de la cuenta y del cierre contractual."* El **primer requerimiento** de la lista es confirmar quién es el responsable integral.
- **2026-06-29** — Emmanuel ya aparece liderando la reunión de cierre como consultor responsable, con David en la parte técnica.
- **2026-08-04** — Emmanuel se presenta formalmente ante el equipo técnico de Monific (Daniel y Jesús), a quienes no conocía.

⚠️ El comentario de Raquel en la minuta del 2026-07-27 es revelador: *"al final, no sé por qué se fue Caroline. Y no voy a indagar en eso porque sé que no se trata la junta de hoy"*.

**Lectura:** la salida de la PM a mitad de proyecto, sin handover formalizado, coincidió temporalmente con la escalación del conflicto y le dio a Monific un argumento adicional.

---

## Roles contractuales vs. personas

El Anexo A comprometió estos perfiles:

| Perfil contratado | Responsabilidad | Persona |
|---|---|---|
| Project Manager y Consultor Principal | Dirección estratégica, priorización, toma de decisiones, acompañamiento | Caroline Bersot → Emmanuel Chulin |
| Implementador experto en HubSpot | Reconfiguración del portal, pipelines, objetos, propiedades, workflows | David Ochoa |
| Ingeniero de Procesos | Levantamiento AS-IS y diseño TO-BE (Add-On de Mapeo) | Ricardo Gómez |

---

## Cambio de modelo operativo (2026-06-08)

Decisión interna documentada en `D133`:

> Se decidió **abandonar la integración directa** por un modelo de **asesoría técnica**, debido a complicaciones con el acceso técnico.
> *"El equipo brindará orientación técnica sin realizar modificaciones directas, requiriendo que los responsables guíen la revisión del código."*

Esto cambió la naturaleza de un entregable central del proyecto. ⚠️ No hay evidencia en las fuentes de que este cambio se haya formalizado por escrito con Monific como una modificación de alcance. → [[Conflicto Contractual]]

---

## Punto sensible: destinatarios de B&O en flujos productivos

🔴 La auditoría de comunicaciones detectó nodos de workflow que envían correos a personal de B&O desde flujos de producción:

- 3 nodos a **David Ochoa**
- 2 nodos a **Caroline Bersot**
- 2 nodos al equipo Legal compartido con ARI

Es el bloque **B16** del requerimiento: retirar destinatarios personales de B&O, usar roles internos y corregir tokens HubL. Riesgo declarado: *"exposición de información y dependencia del proveedor"*.

→ [[Higiene y Accesos]]

---

## Fichas individuales

- [[Emmanuel Chulin]]
- [[David Ochoa]]
- [[Caroline Bersot]]

---

## Relacionado

- [[Directorio de Contactos]] · [[Equipo Monific]]
- [[Conflicto Contractual]] — la queja sobre la transición
- [[Gobernanza y Rituales]] — cómo se trabaja

## Fuentes

- `X023` — Directorio Responsables (hoja B&O)
- `D149` — Kickoff (2026-01-07): equipo original
- `D177` — Minuta 2026-06-16: anuncio de la transición
- `D178` — Minuta 2026-06-29: Emmanuel asume el cierre
- `D181` — Minuta 2026-08-04: presentación al equipo técnico
- `D133` — Alineación interna (2026-06-08): cambio a modelo de asesoría
- `P_NOTIF` — Notificación contractual: reclamo por la transición
- `P_ANEXO` — Anexo A: perfiles contratados
- `X021` — Auditoría de comunicaciones: destinatarios externos
