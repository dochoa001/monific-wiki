---
titulo: Sistemas Externos
tipo: concepto
area: integracion
estado: en-riesgo
confianza: media
actualizado: 2026-08-07
fuentes: [D193, P_ANEXO, X018, D178, X013, D167]
tags: [integracion, herramientas, terceros]
---

# Sistemas Externos

> **En una frase:** ficha de cada herramienta del ecosistema de Monific — qué hace, qué rol le toca después de BOOST y en qué estado está su conexión con HubSpot.

Vista de conjunto en [[Stack Tecnologico Monific]].

---

## Admin / App Monific

| | |
|---|---|
| **Qué es** | El backend propio de Monific. Núcleo de toda la operación |
| **Rol objetivo** | **Fuente de verdad** de todos los datos financieros |
| **Tecnología** | NestJS · SQL · GitHub · SDK oficial de HubSpot |
| **Estado** | 🟡 Integración en desarrollo por TI de Monific desde 2026-08 |

Página completa: [[Integracion Admin Monific HubSpot]]

---

## STP

| | |
|---|---|
| **Qué es** | Sistema de Transferencias y Pagos. Provee la **CLABE** de cada inversionista |
| **Rol objetivo** | Se queda. **No requiere integración directa con HubSpot** |
| **Cómo conecta** | Indirecta, vía backend. Cuando se genera la CLABE, el Admin envía `nivel_registro = 3` y `stp_account_date` |
| **Estado** | 🟡 La conexión es informativa y depende de que la integración esté viva |

Del brief: *"No requiere integración completa, pero sí una conexión informativa (actualización automática de 'Cuenta Activa' cuando se genera CLABE)."*

---

## Expediente Azul

| | |
|---|---|
| **Qué es** | Plataforma de carga y validación documental de solicitantes |
| **Rol objetivo** | **Se queda** para la carga de documentos. HubSpot recibe el estatus |
| **Integración pedida** | Unidireccional HubSpot → Expediente Azul: cuando el solicitante confirma interés, crear registro. Y actualización de estatus (Aprobado / Rechazado / En revisión) hacia HubSpot |
| **Estado** | 🔴 **No implementada.** No aparece en las 30 reglas del contrato técnico |

⚠️ **Tensión no resuelta:** el brief y el anexo contractual piden esta integración, pero el diseño operativo posterior (`D195`, 2026-01-26) trabaja con **Google Drive** como zona de carga documental, no con Expediente Azul. No hay decisión registrada sobre cuál prevalece. → [[Preguntas Abiertas]]

---

## Google Drive

| | |
|---|---|
| **Qué es** | Almacén de expedientes y contratos de solicitantes |
| **Rol objetivo** | **Se queda.** HubSpot guarda solo el link |
| **Regla clave** | *"HubSpot no lee Drive. Drive solo guarda documentos. Las decisiones se toman en HubSpot con propiedades, no con archivos."* |
| **Puente** | Un **formulario puente** de HubSpot donde el solicitante confirma que terminó de cargar. Eso sí lo ve HubSpot |
| **Estado** | 🟡 Link manual en `link_de_carpeta_en_drive` |

Estructura de carpetas en [[Proceso Comercial Solicitantes]].

También es el repositorio de trabajo del proyecto: → [[Gobernanza y Rituales]]

---

## Google Forms

| | |
|---|---|
| **Qué es** | El formulario actual de solicitantes, con automatizaciones vía Google Scripts y correo manual |
| **Rol objetivo** | ❌ **Se sustituye** por un formulario de HubSpot embebido en el sitio de Monific |
| **Estado** | 🔴 **Sigue vivo.** Pendiente desde enero de 2026 |
| **Quién lo embebe** | Monific, una vez que B&O entregue el formulario |

URL del form actual: `docs.google.com/forms/d/e/1FAIpQLSdGeyG1Zt399HllwZlOahpiHbnLcLl-wnlGoet4FuehvxasMA/viewform`

---

## Moonflow

| | |
|---|---|
| **Qué es** | El sistema de cobranza que usa Monific hoy |
| **Rol objetivo** | ❌ **Se sustituye** por el pipeline de Cobranza en Tickets de HubSpot |
| **Estado** | 🔴 Sustitución **no acreditada**. El pipeline existe pero 13 de sus 15 workflows tienen errores |

La etapa "Cobranza Activa" del pipeline es, textualmente, donde *"se concentra la sustitución directa de todas las funciones de Moonflow"*.

---

## WhatsApp Business API

| | |
|---|---|
| **Qué es** | Canal de mensajería. Conectado parcialmente a HubSpot |
| **Rol objetivo** | Envío de plantillas, flujos automáticos y notificaciones transaccionales disparadas desde workflows |
| **Estado** | 🔴 **Integrado pero limitado: no permite enviar plantillas** |
| **Bloqueo clave** | Las plantillas se generan desde el **administrador de Meta**, al que **B&O no tiene acceso** |
| **Acuerdo (2026-06-29)** | Los copies están listos. **Raquel**, que conoce Meta Business API, lo verá con Jesús, creará las plantillas y, una vez aprobadas por Meta, B&O hará los cruces en HubSpot |

Estado de las plantillas al 2026-07-28: 10 "creadas, falta confirmar aprobación de Meta".

→ [[Matriz de Comunicaciones]]

---

## CallPicker

| | |
|---|---|
| **Qué es** | Sistema de telefonía para recepción de llamadas |
| **Rol objetivo** | Registro y grabación de llamadas vinculadas automáticamente a contactos y tickets |
| **Estado** | 🔴 **Conectado con errores de sincronización**: llamadas no registradas, contactos no asociados |
| **Pedido en el brief** | Auditoría de la conexión existente y solución de los errores |

⚠️ No hay evidencia en ninguna minuta posterior de que se haya trabajado en CallPicker. Es un entregable del alcance contractual sin seguimiento visible. → [[Preguntas Abiertas]]

---

## Singular + Meta Ads

| | |
|---|---|
| **Qué es** | Plataforma de atribución móvil (Singular) y publicidad (Meta) |
| **Rol objetivo** | Trazabilidad completa lead → inversión → rendimiento → **CAC real** por cohorte |
| **Estado** | 🟡 Parcialmente conectada |
| **Impacto** | Sin esto no hay dashboard de marketing ni medición de CAC/ROI |

El anexo también menciona cuentas de **Google Ads y LinkedIn** dentro de la revisión de integraciones.

→ [[Dashboards y Reportes]]

---

## Zendesk

| | |
|---|---|
| **Qué es** | Sistema de tickets anterior |
| **Rol objetivo** | ❌ Sustituido por Service Hub |
| **Uso actual** | Su histórico de 2025 (103 tickets) fue la base para construir el catálogo de Categorías y Subcategorías de tickets TI |

→ [[Proceso de Servicio ATC]]

---

## DocuSign

| | |
|---|---|
| **Qué es** | Firma electrónica |
| **Rol** | Se usó para firmar el anexo contractual con B&O. Folio `7DB4EE48-05B1-4995-BCB2231FB5E44550` |
| **Integración con HubSpot** | No contemplada |

---

## IA de HubSpot

| | |
|---|---|
| **Estado actual** | Uso básico |
| **Objetivo del brief** | Respuestas automáticas inteligentes en atención (FAQs, helpdesk, base de conocimiento) · sugerencias de contenido en Marketing · **lead scoring predictivo** · análisis conversacional de tono, intención y satisfacción |
| **Estado** | 🔴 Sin evidencia de implementación |

⚠️ El lead scoring predictivo choca con la decisión del 2026-07-27 de **descartar el scoring numérico** en el MVP. → [[Contradicciones y Verificaciones]]

---

## Blog / CMS

| | |
|---|---|
| **Petición del brief** | Construir el blog dentro del CMS de HubSpot con arquitectura SEO, alineado a las categorías: *Educación sin miedo · Inversión a tu ritmo · Inmuebles con propósito · Casos de éxito · Tips para crecer tu dinero* |
| **Alcance contractual** | ❌ **Excluido**: *"Diseño o desarrollo de páginas web, blogs, plantillas personalizadas o módulos visuales"* |
| **Estado** | ❓ Contradicción sin resolver |

→ [[Contradicciones y Verificaciones]]

---

## Relacionado

- [[Stack Tecnologico Monific]] — la vista de conjunto
- [[Integracion Admin Monific HubSpot]] — la integración principal
- [[Matriz de Comunicaciones]] — WhatsApp y email
- [[Preguntas Abiertas]] — lo que falta decidir

## Fuentes

- `D193` — Brief de Necesidades, secciones 4.2 y 5.1
- `P_ANEXO` — Anexo A: alcance de integraciones
- `X018` — Documento API de Integración
- `D178` — Minuta 2026-06-29: acuerdo sobre WhatsApp/Meta
- `X013` — Master de Servicio/UNE: catálogo Zendesk
- `D167` — Maestro Operativo
- `D195` — Entregables del 26 de enero: rol de Drive
