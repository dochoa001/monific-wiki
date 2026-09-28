---
titulo: Pipelines
tipo: concepto
area: transversal
estado: en-progreso
confianza: media
actualizado: 2026-08-07
fuentes: [X011, X012, X013, D167, X018, X001]
tags: [hubspot, pipelines, etapas]
---

# Pipelines

> **En una frase:** los cinco pipelines del proyecto, sus etapas y el desorden de pipelines heredados que hay que limpiar.

---

## Vista general

| Pipeline | Objeto | Etapas | Proceso |
|---|---|---|---|
| **Solicitantes** | Negocio | 6 | [[Proceso Comercial Solicitantes]] |
| **Inversionistas** | Negocio | 4 | [[Proceso Comercial Inversionistas]] |
| **Cobranza** | Ticket | 7 | [[Proceso de Cobranza]] |
| **Atención a Clientes** | Ticket | 4 | [[Proceso de Servicio ATC]] |
| **UNE** | Ticket | 2 | [[Proceso UNE]] |

Además existe el pipeline técnico **Inversiones** (`708176204`) donde la integración crea los movimientos.

---

## Pipeline · Solicitantes

| # | Etapa | Objetivo | Responsable |
|---|---|---|---|
| 1 | **Nuevo solicitante** | Acompañar la carga de documentos hasta completar expediente | Sistema · A.A.S. |
| 2 | **Evaluación** | Evaluación técnica, jurídica y financiera + decisión de Comité | A.A.S. · Legal/PLD · Riesgo/Finanzas · Técnica |
| 3 | **Formalización** | Formalizar el proyecto aprobado y armar la campaña | A.A.S. · Marketing |
| 4 | **Proceso de firma** | Acto notarial. SLA habitual: 15 días hábiles | E.E.J. |
| 5 | **Cierre Ganado** | Campaña publicada y proyecto disponible para fondeo | Sistema |
| 6 | **Cierre Perdido** | Cierre negativo con motivo y comunicación institucional | Sistema · A.A.S. |

**Gate de salida:** el Negocio pasa a Ganado solo con `contrato firmado = Sí` **Y** confirmación del Admin de campaña publicada. 🔴 No probado.

---

## Pipeline · Inversionistas

| # | Etapa | Objetivo |
|---|---|---|
| 1 | **Perfil Activo** | Activar el perfil de registro y empujar hacia la primera inversión, eliminando fricciones del KYC |
| 2 | **Inversionista Activo** | Convertir la cuenta STP activa en primera inversión y mantener reinversión frecuente |
| 3 | **Congelado** | Documentar la inactividad e intentar reactivación |
| 4 | **Cierre** | Registrar el cierre de campaña, comunicar el resultado y empujar reinversión de saldos liberados |

Responsable de todas: **A.A.I.**

**Reglas de congelado (INV-12):** Regla A = 15 días sin depósito tras STP · Regla B = cero inversiones activas + saldo 0 + 90 días sin actividad. Nunca congelar solo por no hacer login si hay inversiones activas.

---

## Pipeline · Cobranza

| # | Etapa | Objetivo |
|---|---|---|
| 1 | **Nuevo Registro** | Alta de la campaña con su calendario completo, tras confirmarse la inversión efectiva |
| 2 | **Cobranza Activa** | Gestión sana con recordatorios automáticos y escalamiento por niveles de mora. Sustituye a Moonflow |
| 3 | **Refinanciamiento** | Formalizar la reestructura con aprobación de comité y trazabilidad CNBV |
| 4 | **Ejecución de Garantía** | Mora crítica > 60 días. Transición a cierre negativo con decisión de comité |
| 5 | **Cierre por Refinanciamiento** | Cierre positivo: el solicitante cumplió las nuevas condiciones |
| 6 | **Campaña Liquidada** | Cierre exitoso al último pago |
| 7 | **Cierre por Incumplimiento** | Cierre forzoso, proceso jurídico, notificación a inversionistas, bloqueo del solicitante |

**Entrada:** un Ticket por campaña fondeada, deduplicado por `id_de_campana_financiamiento`.
**Transición automática documentada:** a los 60/61 días de mora se pasa a Ejecución de Garantía. La salida de esa etapa es manual.

---

## Pipeline · Atención a Clientes

| # | Etapa | Objetivo |
|---|---|---|
| 1 | **Nuevo Ticket** | Recibir, clasificar y asignar al E.A.C. de turno en máximo 5 minutos |
| 2 | **En Atención** | Gestionar hasta resolver, incluyendo escalamiento a TI y proceso UNE |
| 3 | **Escalado a TI** | Tickets Tipo A que requieren TI, con confirmación del cliente antes del cierre |
| 4 | **Cerrado** | Cierre con trazabilidad y métricas de SLA automáticas |

Tipos de ticket: **A** técnico · **B** info/inversión · **C** solicitante · **D** queja · **E** reclamación UNE.

---

## Pipeline · UNE

| # | Etapa | Objetivo |
|---|---|---|
| 1 | **Abierto** | Registrar la reclamación, asignar y gestionar dentro del SLA regulatorio de 30 días hábiles |
| 2 | **Cerrado** | Cierre con dictamen documentado, disponible para el reporte trimestral CNBV/CONDUSEF |

Responsable: **D.C.** con soporte de **D.C.L.**

🔴 Ninguno de los seis flujos UNE está acreditado. Hallazgo **CON-144** listado como bug directo de B&O.

---

## Pipeline técnico · Inversiones

Usado por la integración para representar movimientos:

| Etapa | ID | `move_type` |
|---|---|---|
| Inversión activa | `1035451748` | PURCHASE |
| Venta | `1059885878` | SOLD |
| Liquidación | `1319443839` | LIQUIDATION |

Pipeline ID: `708176204`. El mercado secundario usa el pipeline "Default", etapa `1056454416`.

---

## 🔴 El desorden de pipelines

Hallazgo **APP-036 / PLAN-036**:

> Hay **5 pipelines de Negocio** en el portal. *"Consolidar a un pipeline único de Mercado Primario; archivar/eliminar 'Pipeline Inversionistas' (vacío) y pipelines redundantes. Documentar mapeo pipeline↔etapa en master."*

Prioridad P2. Responsable: B&O – Implementación HubSpot.

Es parte del bloque **B11 · Higiene y seguridad de configuración nativa**: *"Consolidar pipelines, crear association label e inventariar 383 propiedades antes de archivar"*.

→ [[Higiene y Accesos]]

---

## 🔴 Los IDs que faltan

El gate técnico **T3** exige entregar los IDs reales antes de programar endpoints:

`objectTypeId` · `pipelineId` · `stageId` · `associationTypeId` / labels · registros de prueba

Solo se conocen los del pipeline Inversiones. Los de Solicitantes, Cobranza, Atención y UNE **están pendientes**.

→ [[Plan de Cierre y Gantt]] · [[Integracion Admin Monific HubSpot]]

---

## Relacionado

- [[Workflows]] — las automatizaciones por etapa
- [[Propiedades]] — los campos por etapa
- [[Modelo de Datos HubSpot]] — cómo se conectan los objetos
- Los cuatro procesos: [[Proceso Comercial Solicitantes]] · [[Proceso Comercial Inversionistas]] · [[Proceso de Cobranza]] · [[Proceso de Servicio ATC]] · [[Proceso UNE]]

## Fuentes

- `X012` — Master de Implementación Proceso Comercial: pipelines Solicitantes e Inversionistas
- `X011` — Master de Implementación Cobranza: pipeline de Cobranza
- `X013` — Master de Implementación Servicio/UNE: pipelines de Atención y UNE
- `D167` — Maestro Operativo: modelo y transiciones
- `X018` — Documento API: IDs del pipeline Inversiones
- `X001` — Plan Único de Corrección: PLAN-036
