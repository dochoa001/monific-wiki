---
titulo: Roles Operativos
tipo: concepto
area: transversal
estado: en-riesgo
confianza: media
actualizado: 2026-08-07
fuentes: [X011, X012, X013, D195, D167, X020]
tags: [personas, roles, procesos]
---

# Roles Operativos

> **En una frase:** los roles funcionales que aparecen en los procesos y workflows — quién hace qué en cada etapa, independientemente del nombre de la persona.

Los masters de implementación usan siglas. Este es el diccionario.

---

## Roles del cliente

| Sigla | Rol | Qué hace | Aparece en |
|---|---|---|---|
| **A.A.S.** | Agente de Atención a Solicitantes | Crea la carpeta de Drive, acompaña la carga de documentos, fija `Estado de documentación`, gestiona la formalización, ejecuta cobranza preventiva manual | [[Proceso Comercial Solicitantes]] · [[Proceso de Cobranza]] |
| **A.A.I.** | Agente de Atención a Inversionistas | Acompaña el KYC, empuja la primera inversión, gestiona congelado y reactivación, comunica cierres de campaña | [[Proceso Comercial Inversionistas]] |
| **E.A.C.** | Ejecutivo de Atención a Clientes | Recibe, clasifica y resuelve tickets; escala a TI; cierra con resolución documentada | [[Proceso de Servicio ATC]] |
| **D.C.** | Director Comercial | Responsable del pipeline UNE y del cierre de tickets Tipo D (quejas) | [[Proceso UNE]] |
| **D.C.L.** | Director de Cumplimiento Legal | Soporte del proceso UNE, emisión de dictámenes | [[Proceso UNE]] · [[Marco Regulatorio]] |
| **D.F.** | Dirección Financiera | Valida la conciliación al liquidar una campaña | [[Proceso de Cobranza]] |
| **D.G.** | Dirección General | Recibe notificaciones internas en la etapa de Evaluación (WF-011) | [[Proceso Comercial Solicitantes]] |
| **E.E.J.** | Equipo de Evaluación Jurídica | Conduce el proceso de firma ante notario | [[Proceso Comercial Solicitantes]] |
| **MKT** | Marketing | Elabora folleto y material de campaña en la etapa de Formalización | [[Proceso Comercial Solicitantes]] |
| **TI** | Tecnologías de Información de Monific | Resuelve tickets Tipo A escalados; desarrolla la integración | [[Proceso de Servicio ATC]] · [[Integracion Admin Monific HubSpot]] |
| **Compliance / PLD** | Cumplimiento | Validación PLD en ≤ 48 h hábiles | [[SLAs y Escalamientos]] |

---

## Quién ocupa cada rol hoy

| Rol | Persona conocida | Confianza |
|---|---|---|
| A.A.S. | **Guillermo ("Memo")** | 🟡 Aparece en todos los diseños de proceso pero no está en el directorio oficial |
| A.A.I. | Sin asignación nominal confirmada | ⚠️ |
| E.A.C. | Equipo de 2 personas según el brief | ⚠️ |
| D.C. | [[Raquel Alfie]] | 🟡 |
| D.C.L. | Miguel Emiliano Chacón (Director Legal) | 🟡 |
| D.F. | Vianey Correa | 🟡 |
| D.G. | [[Ted Senado]] | ✅ |
| Responsable ATC nivel 2 | *"Por el momento Raquel lo asume"* | 🟡 Dato explícito de `D195` |
| TI | [[Jesus Torres]] (CTO) y Daniel Torres | ✅ |

⚠️ **Nota registrada en la minuta del 2026-01-07:** Raquel dijo que Monific son ~11 personas y que ella "lleva casi todo". La concentración de roles en una sola persona es un riesgo operativo del proyecto. → [[Riesgos]]

---

## El despacho externo: ARI

| | |
|---|---|
| **Qué es** | Despacho legal externo que gestiona la cobranza judicial de Monific |
| **En HubSpot** | Equipo "Legal externo/ARI", ID `87069491` |
| **Cuándo interviene** | Día 15: aviso para preparar la tabla de adeudo · Día 16: copia en la escalación · Día 30: cobranza formal junto con Finanzas · Día 61+: ejecución legal |
| **Estado** | 🔴 Los workflows actuales **no acreditan** esta cadena ni la recepción por ARI |
| **Riesgo** | 🔴 ARI está dentro del equipo Legal compartido → visibilidad cruzada del pipeline interno. Bloque **B14**: crear equipo dedicado, retirar ARI de Legal y limitar notificaciones a los nodos pactados |

⚠️ En la auditoría de comunicaciones aparece la mención *"equipo Legal compartido con ARI (Fulmentfi)"*. No queda claro si Fulmentfi es el nombre corporativo de ARI o una tercera entidad. → [[Contradicciones y Verificaciones]]

⚠️ Cobranza pidió explícitamente (correo interno de Miguel Emiliano, fuente F09 del Maestro Operativo) que se explicite: **semana 1 Monific, semana 2 despacho, acción legal desde semana 3**. Esta cadencia convive con la de día 15/16/30/61 sin conciliación clara.

---

## El problema de asignar tareas a personas

Registrado en la minuta del 2026-07-27:

> HubSpot obliga a asignar tareas a **una persona**, no a un equipo. Los flujos deben quedar claramente mapeados. B&O propondrá un mecanismo para identificar y actualizar asignaciones cuando haya movimientos de personal.

Se acordó que **no bloquea el avance**, pero es deuda operativa: si Guillermo se va, hay que tocar workflows a mano.

Relacionado: el bloque **B04** exige implementar **round-robin** en el pipeline de Servicio para distribución equitativa.

---

## Roles de Black & Orange

| Rol contractual | Persona |
|---|---|
| Project Manager / Consultor Principal | [[Caroline Bersot]] → [[Emmanuel Chulin]] (desde jun-2026) |
| Implementador HubSpot | [[David Ochoa]] |
| Ingeniero de Procesos | Ricardo Gómez (Arkkode) |
| Tecnología / integración | Jazmín Córdova, Ricardo Gómez, Sebastián |
| Éxito del cliente | Jorge García |
| Comercial | Eduardo Solís |
| Legal / firma | Roberta Arias |

→ [[Equipo Black and Orange]]

---

## Relacionado

- [[Directorio de Contactos]] — nombres y correos
- [[SLAs y Escalamientos]] — qué tiempo tiene cada rol
- [[Higiene y Accesos]] — equipos y permisos en HubSpot
- [[Proceso de Cobranza]] — el rol de ARI

## Fuentes

- `X011`, `X012`, `X013` — Masters de Implementación: columna "Responsable" de cada pipeline
- `D195` — Entregables del 26 de enero: matriz de responsabilidad y modelo de escalamiento
- `D167` — Maestro Operativo: cadena ARI y áreas por workflow
- `X020` — Requerimiento Formal: bloques B04 y B14
- `D180` — Minuta 2026-07-27: asignación de tareas a personas
