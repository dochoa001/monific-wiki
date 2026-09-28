---
titulo: Glosario
tipo: concepto
area: transversal
estado: en-progreso
confianza: alta
actualizado: 2026-08-07
fuentes: [D167, X018, X011, X012, X013, D195, D193]
tags: [glosario, inicio]
---

# Glosario

> **En una frase:** el vocabulario del proyecto — siglas, roles, objetos y términos que aparecen en todas las fuentes.

Este es el **vocabulario controlado** que exige [`CLAUDE.md`](../CLAUDE.md) §8.

---

## Organizaciones y personas

| Término | Significado |
|---|---|
| **Monific** | Monific S.A. de C.V., Institución de Financiamiento Colectivo. El cliente. → [[Monific]] |
| **Black & Orange / B&O / BNO** | Black and Orange Marketing Digital, S.A.P.I. de C.V. El proveedor. Monific lo escribe "BNO" en documentos formales. → [[Equipo Black and Orange]] |
| **Arkkode** | Empresa de Ricardo Gómez, que participó en la fase de mapeo como ingeniero de procesos. |
| **ARI** | Despacho legal externo de cobranza de Monific. En HubSpot es un equipo con ID `87069491` (registrado como "Legal externo/ARI"). ⚠️ En una fuente aparece asociado a "Fulmentfi". → [[Roles Operativos]] |

## Roles operativos

| Sigla | Rol |
|---|---|
| **A.A.S.** | Agente de Atención a Solicitantes |
| **A.A.I.** | Agente de Atención a Inversionistas |
| **E.A.C.** | Ejecutivo de Atención a Clientes |
| **D.C.** | Director Comercial |
| **D.C.L.** | Director de Cumplimiento Legal |
| **D.F.** | Dirección Financiera |
| **D.G.** | Dirección General |
| **E.E.J.** | Equipo de Evaluación Jurídica |
| **MKT** | Marketing |
| **TI** | Tecnologías de Información de Monific |

Detalle en [[Roles Operativos]].

## Regulación

| Término | Significado |
|---|---|
| **CNBV** | Comisión Nacional Bancaria y de Valores. Regulador de Monific. |
| **IFC** | Institución de Financiamiento Colectivo. La figura jurídica de Monific bajo la Ley Fintech. |
| **UNE** | Unidad Especializada de Atención a Usuarios. Canal obligatorio de reclamaciones formales, con plazo regulatorio de 30 días hábiles para dictamen. → [[Proceso UNE]] |
| **PLD** | Prevención de Lavado de Dinero. |
| **KYC** | *Know Your Customer*. En Monific son 4 pasos: identificación, CURP, domicilio y firma de contrato. |
| **CONDUSEF** | Comisión Nacional para la Protección y Defensa de los Usuarios de Servicios Financieros. Receptora del reporte trimestral UNE. |

## Negocio

| Término | Significado |
|---|---|
| **Solicitante** | Persona física o moral que pide financiamiento con garantía inmobiliaria. |
| **Inversionista** | Persona que invierte en campañas. |
| **Obligado solidario** | Tercero que responde por la deuda del solicitante. Se le copia en la cobranza desde T-2. |
| **Proyecto** | Un inmueble/desarrollo financiado. Puede dividirse en varias campañas. Llave: `numero_de_proyecto`. |
| **Campaña** | Tramo de fondeo de un proyecto. Cada campaña fondeada genera **un** Ticket de Cobranza. Códigos tipo `FIN-001`, `REFIN-001`. |
| **RF / RV** | Rendimiento Fijo / Rendimiento Variable. RF tiene calendario y monto exacto; RV solo recordatorio y reporte de ingresos. |
| **Aforo** | Relación valor de garantía / monto financiado. Un proyecto **Solid** exige aforo ≥ 1.5 : 1 más garantía real. |
| **Solid vs Estándar (Legacy)** | Solid = aforo ≥ 1.5 con garantía real, penalizaciones automáticas. Legacy = primeros proyectos, garantías menos robustas. |
| **Garantía líquida** | Reserva de efectivo que cubre el rendimiento si el solicitante incumple. |
| **STP** | Sistema de Transferencias y Pagos. Provee la CLABE de cada inversionista. Cuenta STP activa = nivel 3 de registro. |
| **Mercado primario / secundario** | Primario: compra directa de participaciones en campaña. Secundario: compraventa de participaciones entre inversionistas. |
| **Nivel de registro** | Escala 1–4 del inversionista. Nivel 4 = primera compra confirmada. Propiedad canónica: `nivel_registro`. |
| **Congelado** | Estado del inversionista inactivo. Reglas en [[Proceso Comercial Inversionistas]]. |

## HubSpot

| Término | Significado |
|---|---|
| **Portal 48427391** | La cuenta de HubSpot de Monific. |
| **Negocio (Deal)** | Objeto usado para Solicitantes e Inversionistas. |
| **Ticket** | Objeto usado para Cobranza, Atención y UNE. |
| **Proyecto (Projects)** | Objeto **estándar** de HubSpot activado recientemente. Conector entre Negocios, Tickets, Contactos y Empresas. ❌ No es un objeto personalizado. |
| **Workflow (WF)** | Automatización. En esta wiki se numeran WF-001 a WF-064 y UNE-01 a UNE-06. → [[Workflows]] |
| **Secuencia** | Herramienta de Sales Hub para cadencias 1-a-1. Varios workflows dependen de secuencias sin `sequenceId` resuelto. 🔴 |
| **Propiedad** | Campo. Tiene *nombre en CRM* (etiqueta visible) y *nombre interno* (identificador técnico, inmutable tras crearse). |
| **Data Hub** | Add-on de HubSpot necesario para lógica de calendario/recurrencia avanzada. **No contratado.** Por eso las fechas se calculan en el Admin y llegan por API. |
| **App privada** | Integración con token. Las relevantes: `trama1-monific` (vigente) y `Migracion-monific` (legacy, a desactivar). → [[Higiene y Accesos]] |
| **Association label** | Etiqueta de asociación personalizada. Pendiente: "Representante Legal" entre Empresa y Contacto. |

## Del proyecto BOOST

| Término | Significado |
|---|---|
| **BOOST** | Nombre del plan contratado. → [[Proyecto BOOST]] |
| **Learn / Do / Teach / Repeat** | Las cuatro fases de la metodología. → [[Metodologia BOOST]] |
| **MVP Operativo** | Definición contractual: pipelines activos, automatizaciones sin intervención manual paralela, dashboards en tiempo real y seguimiento de tickets. |
| **Master de Implementación** | Excel entregable por proceso con pipeline, propiedades, workflows y flujograma. Son cuatro. → [[Masters de Implementacion]] |
| **AS-IS / TO-BE** | Mapeo del proceso actual / diseño del proceso objetivo. |
| **Mapeo de Procesos Elite** | Add-on contratado ($47,250 MXN) que produce los masters y flujogramas. |
| **CON-###** | Identificador de hallazgo de auditoría (ej. CON-021). |
| **APP-### / PLAN-###** | Identificadores de la bitácora técnica y del Plan Único de Corrección. |
| **B01–B16** | Los 16 bloques ejecutivos del requerimiento formal. → [[Bloques de Cierre B01-B16]] |
| **P1–P7 / T1–T7** | Puntos del Control Único de Cierre (P) y del gate técnico previo a programar endpoints (T). |
| **Control Único de Cierre** | La única lista de seguimiento válida según instrucción de Monific de 2026-07-31. |

## Sistemas externos

| Sistema | Para qué | → |
|---|---|---|
| **Admin Monific** | Backend propio. Fuente de verdad de datos financieros. | [[Integracion Admin Monific HubSpot]] |
| **Expediente Azul** | Carga y validación documental de solicitantes. | [[Sistemas Externos]] |
| **Moonflow** | Sistema de cobranza a sustituir. | [[Sistemas Externos]] |
| **Google Drive** | Expedientes y contratos de solicitantes. | [[Proceso Comercial Solicitantes]] |
| **Google Forms** | Formulario actual de solicitantes, a sustituir por formulario HubSpot. | [[Proceso Comercial Solicitantes]] |
| **CallPicker** | Telefonía. Integración con errores. | [[Sistemas Externos]] |
| **Singular + Meta Ads** | Atribución de campañas y CAC. | [[Sistemas Externos]] |
| **Zendesk** | Sistema de tickets previo (datos 2025 usados para categorizar tickets TI). | [[Proceso de Servicio ATC]] |
| **DocuSign** | Firma del anexo contractual (folio `7DB4EE48-05B1-4995-BCB2231FB5E44550`). | [[Documentos Contractuales]] |

---

## Relacionado

- [[Mapa General]] · [[Resumen Ejecutivo]]

## Fuentes

- `D167` — Maestro Operativo de Procesos y Workflows (2026-07-31)
- `X018` — Documento API de Integración Unificado
- `X011`, `X012`, `X013` — Masters de Implementación (Cobranza, Comercial, Servicio/UNE)
- `D195` — Entregables pendientes del 26 de enero
- `D193` — Brief de Necesidades
