---
titulo: Stack Tecnologico Monific
tipo: concepto
area: integracion
estado: en-progreso
confianza: media
actualizado: 2026-08-07
fuentes: [D193, X018, D167, X002, P_ANEXO, X013]
tags: [cliente, integraciones, herramientas]
---

# Stack Tecnológico Monific

> **En una frase:** el mapa de herramientas de Monific y el rol que le toca a cada una después del proyecto BOOST.

---

## Vista general

| Sistema | Rol hoy | Rol objetivo | Estado de la integración |
|---|---|---|---|
| **App / Admin Monific** | Núcleo operativo y financiero | **Fuente de verdad** de datos financieros | 🟡 Parcial — se está rehaciendo. → [[Integracion Admin Monific HubSpot]] |
| **HubSpot** | Uso parcial | **Sistema central** de marketing, ventas, servicio y cobranza | 🟡 En construcción. → [[Portal HubSpot]] |
| **Google Forms** | Formulario de solicitantes | ❌ Se sustituye por formulario HubSpot | 🔴 Sigue vivo |
| **Moonflow** | Sistema de cobranza | ❌ Se sustituye por Tickets de HubSpot | 🔴 Sustitución no acreditada |
| **Google Drive** | Expedientes y contratos | Se **queda**. HubSpot guarda solo el link | 🟡 Link manual |
| **Expediente Azul** | Carga y validación documental | Se **queda**. HubSpot recibe estatus | 🔴 Integración no implementada |
| **STP** | Cuentas CLABE de inversionistas | Se queda. Conexión informativa vía Admin | 🟡 Indirecta por backend |
| **WhatsApp Business API** | Conectado parcialmente | Envío de plantillas y flujos automáticos | 🔴 Sin plantillas activas |
| **CallPicker** | Telefonía | Registro y vinculación automática de llamadas | 🔴 Con errores de sincronización |
| **Singular + Meta Ads** | Atribución de campañas | Trazabilidad lead → inversión → CAC real | 🟡 Parcial |
| **Zendesk** | Tickets (histórico 2025) | ❌ Se sustituye por Service Hub | Histórico usado para categorizar tickets TI |
| **DocuSign** | Firma de documentos | Se queda | Folio del anexo: `7DB4EE48-05B1-4995-BCB2231FB5E44550` |

Detalle de cada uno en [[Sistemas Externos]].

---

## La arquitectura del Admin Monific

Datos técnicos confirmados en el documento de integración:

| Aspecto | Detalle |
|---|---|
| **Backend** | NestJS |
| **Base de datos** | SQL |
| **Repositorio** | GitHub (privado) |
| **Cliente HubSpot** | **SDK oficial de HubSpot** — no plugin ni conector de terceros |
| **Ambientes** | Pruebas, QA y PRE (homologado de producción) |
| **Contacto técnico** | jesus.torres@monific.com |
| **Nota** | El acceso al código está sujeto a revisión de regulaciones |

---

## Apps privadas en HubSpot

| App | ID | Estado | Acción |
|---|---|---|---|
| `trama1-monific` | 10092461 | ✅ Vigente | Reducir scopes: revocar `export-import`, `users.write` y los `highly_sensitive` sin uso documentado |
| `Migracion-monific` | 12753166 | 🔴 Legacy con token activo | Desactivar y revocar token, previa confirmación de TI de que no hay dependencias |

→ [[Higiene y Accesos]]

---

## Lo que NO se puede hacer dentro de HubSpot

Restricción técnica confirmada en la sesión del 2026-08-04:

> La suscripción actual **no incluye un entorno para ejecutar código ni cálculos avanzados** dentro de HubSpot (no hay Data Hub / acciones de código).

Consecuencias directas:

- HubSpot **no** calcula días hábiles, recurrencias ni calendarios de pago.
- El **Admin Monific** calcula y envía `fecha_proximo_recordatorio` ya resuelta; el workflow nativo solo se dispara en esa fecha (regla 29 del contrato técnico).
- Toda orquestación compleja, deduplicación y reintentos viven fuera de HubSpot.
- Cualquier alternativa nativa requeriría contratar **Data Hub**, decisión económica que quedó abierta el 2026-07-27.

---

## Volumen y límites relevantes

| Límite | Valor | Nota |
|---|---|---|
| Contactos de marketing | **7,000** | Cupo conjunto Solicitantes + Inversionistas, mensual. Toda alta debe desclasificarse el mes siguiente (INV-01) |
| Créditos HubSpot incluidos | 3,000 | Del paquete contratado |
| Propiedades de Negocio en el portal | 402, de las cuales **383 vacías** | Deuda técnica a inventariar antes de archivar (bloque B11) |
| Propiedades totales detectadas por API | 2,142 | Contra 177 esperadas por los masters |
| Llamadas API (log 2026-06-30 → 2026-07-29) | 16,279 llamadas · 766 errores 4xx · 741 rechazos | Concentrados en valores de proyecto no admitidos |

---

## Relacionado

- [[Sistemas Externos]] — ficha de cada herramienta
- [[Integracion Admin Monific HubSpot]] — la arquitectura de la conexión
- [[Portal HubSpot]] — licencias y configuración
- [[Higiene y Accesos]] — apps privadas, scopes y limpieza

## Fuentes

- `D193` — Brief de Necesidades, sección 5.1 (integraciones críticas)
- `X018` — Documento API de Integración Unificado, hoja "Accesos Documentación"
- `D167` — Maestro Operativo (2026-07-31), fuente F07 (log de integración)
- `X002` — Matriz Única de Hallazgos, hoja "Acceso y config (API)"
- `P_ANEXO` — Anexo A · Plan BOOST
- `D181` — Minuta 2026-08-04 (limitación de la suscripción)
