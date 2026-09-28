---
titulo: Proceso de Servicio ATC
tipo: proceso
area: servicio
estado: en-progreso
confianza: media
actualizado: 2026-09-01
fuentes: [D167, X013, D195, X020, D198]
tags: [proceso, servicio, tickets, atencion]
---

# Proceso de Servicio ATC

> **En una frase:** el ciclo de atención a clientes por ticket, desde la entrada por cualquier canal hasta el cierre documentado, con escalamiento a TI cuando aplica.

**Objeto HubSpot:** Ticket · **Pipeline:** Atención · **Workflows:** WF-041 a WF-049

**Flujograma TO-BE (V2, 2026-09-01):** `miro.com/app/board/uXjVHr71yws=` — tablero en la cuenta de
Miro de B&O (compartido con [[Proceso UNE]]: ATC arriba, UNE abajo). Estos dos procesos no tenían
flujograma en el Miro del cliente; el V2 se construyó desde los masters y el Maestro Operativo.
Propuesta pendiente de validación de Monific.

🟡 Es el bloque **en mejor estado relativo**: 9 workflows, ninguno con error acreditado, todos pendientes de prueba. Ninguno verificado.

⭐ **Es el único proceso sin rojos de los cinco.** Sus 9 fichas están en amarillo y todas las observaciones son preventivas, no correctivas. Por eso B&O lo propone como **el primer bloque a cerrar con evidencia**, para demostrar el método antes de entrar a Cobranza (`D198`, 2026-08-03). El detalle observación por observación está en → [[Analisis de Cierre BNO]]

⚠️ Excepción: **WF-045** tiene como regla de diseño la frase *"Implementado con validación"*, que es texto de plantilla. No se puede construir un caso de prueba contra ella. → [[Contradicciones y Verificaciones]] C-29

---

## El pipeline

| Etapa | Objetivo | Responsable |
|---|---|---|
| **Nuevo Ticket** | Recibir, identificar y clasificar toda interacción entrante; crear el ticket y asignarlo al E.A.C. de turno en **máximo 5 minutos** | HubSpot (auto) · soporte E.A.C. |
| **En Atención** | Gestionar la consulta según su tipo hasta resolverla, incluyendo escalamiento a TI y el proceso formal UNE, con trazabilidad completa | E.A.C. |
| **Escalado a TI** | Resolver tickets Tipo A que requieren intervención de TI, con confirmación del cliente antes del cierre | E.A.C. · TI |
| **Cerrado** | Registrar el cierre con trazabilidad y métricas de SLA automáticas | E.A.C. · D.C. para Tipo D |

---

## Los cinco tipos de ticket

| Tipo | Descripción | Ruta |
|---|---|---|
| **A** | Problema técnico | Escala a TI · folio `TI-YYYY-MM-NNN` |
| **B** | Info / dudas de inversión | Resuelve E.A.C. |
| **C** | Solicitante | Resuelve E.A.C. (WF-045, 🟡 marcado "En duda" en el master) |
| **D** | Queja / inconformidad | Cierre por Director Comercial |
| **E** | **Reclamación formal UNE** | 🔴 Ticket separado en pipeline UNE — **nunca** se mezcla con el ticket de servicio → [[Proceso UNE]] |

La clasificación es **automática si entra por Chat Web** y **manual si entra por WhatsApp o correo**.

---

## Canales de entrada

WhatsApp · Chat Web · Correo electrónico · Formulario

---

## SLAs oficiales

### Canales inmediatos (Inbox de HubSpot)

| Evento | SLA | Responsable |
|---|---|---|
| Primera respuesta | **< 5 min** | E.A.C. |
| Respuesta excelente | < 2 min | E.A.C. |
| Conversaciones abiertas > 24 h | < 1 % del total | E.A.C. |

> *"Si el volumen supera la capacidad, se responde primero y se profundiza después. **Nunca silencio.**"*

### Seguimiento CRM por nivel

| Nivel | SLA de contacto humano | Regla |
|---|---|---|
| 1 — Lead | ≤ 24 h | Contacto obligatorio |
| 2 — Perfil en proceso | ≤ 24 h | Lead caliente |
| 3 — STP activa | ≤ 24 h | Lead caliente |
| 4 — Inversionista activo | 1 contacto / 60 días | Relación viva |
| **VIP** | 1 contacto / 30 días | Atención preferencial |

Fórmula de control: **asignados en CRM vs. contactados.**

---

## Qué hace y qué no hace ATC

| ✅ SÍ hace | ❌ NO hace |
|---|---|
| Explica proyectos con información pública aprobada | Prometer fechas |
| Contiene emocionalmente al cliente | Prometer rendimientos |
| Da contexto de plazos, procesos y riesgos | Opinar sobre decisiones legales |
| Sugiere alternativas | Inventar explicaciones |
| Activa flujos de HubSpot | Escalar por incomodidad |
| Documenta | |

**Frase permitida:** *"Déjame validar el estatus y te confirmo."*

### Cadencias

- Leads / usuarios activos: máx. 2 contactos activos por semana · máx. 1 llamada por día · WhatsApp solo informativo · email para seguimiento formal
- Usuarios inactivos: contacto humano ≤ 48 h · si no hay respuesta → pausa automática · reactivación solo con propuesta concreta

---

## Modelo de escalamiento

| Nivel | Quién | Cuándo |
|---|---|---|
| 🟢 **0 — Sistema** | HubSpot | Recordatorios, pausas, cierres por inacción, reasignaciones, seguimientos. **Nunca escala** |
| 🟡 **1 — E.A.C.** | Ejecutivo | Resuelve sin pedir permiso: dudas operativas, quejas leves, atrasos explicables, recomendaciones, clientes indecisos |
| 🔵 **2 — Responsable ATC** | *Por ahora [[Raquel Alfie]]* | El cliente insiste > 3 veces · riesgo de abandono · mensaje hostil · inconsistencia operativa |
| 🔴 **3 — Raquel** | Dirección | Riesgo reputacional · cliente VIP amenaza salida · **posible UNE / CNBV** · impacto colectivo · decisión estratégica |

⚠️ Los niveles 2 y 3 recaen hoy en la misma persona. → [[Riesgos]]

---

## Los workflows

| WF | Nombre | Etapa | Estado |
|---|---|---|---|
| WF-041 | Asignar propietario de ticket | Nuevo | ON · 🟡 |
| WF-042 | Notificación por SLA vencido | Nuevo | ON · 🟡 |
| WF-043 | Mover ticket a atención | Nuevo | ON · 🟡 |
| WF-044 | Definir primera respuesta | Nuevo | ON · 🟡 |
| WF-045 | Tarea Tipo C | En atención | ON · 🟡 (master: *"En duda"*) |
| WF-046 | Escalar a TI | En atención | ON · 🟡 |
| WF-047 | Propiedades de entrada | Escalado TI | ON · 🟡 |
| WF-048 | Vencimiento 48 horas | Escalado TI | ON · 🟡 |
| WF-049 | Propiedades de entrada | Cerrado | ON · 🟡 |

**Bloque de remediación B04** (+20 días hábiles): implementar **round-robin**, SLA de respuesta humana, roles dinámicos y cierre con evidencia.

---

## Propiedades

**Nuevo Ticket:** Canal de entrada · Propietario del ticket · Fecha y hora de creación · Estatus del ticket · **Tipo de ticket** (A–E) · Referencia a ticket anterior

**En Atención:** Tiempo de primera respuesta *(calculada)* · Fecha y hora de atención · Resolución detallada · Proceso UNE activo (Sí/No) · Notas de consulta legal

**Escalado a TI:** **Folio ticket TI** *(auto `TI-YYYY-MM-NNN`)* · Fecha y hora de escalamiento · Descripción del problema técnico · Categoría y subcategoría · Estatus ticket TI · Notas de seguimiento · Responsable TI asignado

**Cerrado:** Fecha de cierre · Tipo de ticket · Tiempo de primera respuesta · **Tiempo de resolución total** *(calculada)*

🔴 `fecha_y_hora_de_atencion_del_ticket` es una de las 26 propiedades que **no existen** en HubSpot.

---

## Catálogo de tickets TI

Basado en el histórico de **Zendesk 2025** (103 tickets). Es la base del dropdown de Categoría/Subcategoría:

| # | Categoría | Tickets |
|---|---|---|
| 1 | Gestión de Datos de Cuenta *(cambio de correo, documentos de identidad, teléfono, beneficiarios)* | 27 |
| 2 | Alta / Baja de Cuenta *(baja, duplicados, persona moral, alta en Admin)* | 12 |
| 3 | Acceso y Autenticación *(contraseña, MFA, token/sesión, SMS, biométricos)* | 11 |
| 4 | Retiros y Movimientos | 12 |
| 5 | Asociaciones y Referidos | 12 |
| 6 | Bonificaciones y Promociones | 14 |
| 7 | Comisiones | 3 |
| 8 | Problemas Técnicos en App | 5 |
| 9 | Consultas e Información | 4 |
| 10 | Cambios en Inversión | 1 |
| 11 | Configuración y Administración Interna | 2 |

**Lectura útil:** el 26 % del volumen es gestión de datos de cuenta y el 12 % accesos. Son candidatos naturales a autoservicio o base de conocimiento.

---

## Relacionado

- [[Proceso UNE]] — la ruta del ticket Tipo E
- [[SLAs y Escalamientos]] — todos los SLAs del proyecto
- [[Roles Operativos]] — E.A.C., D.C., TI
- [[Matriz de Comunicaciones]] — las 7 comunicaciones ATC
- [[Workflows]] · [[Pipelines]]

## Fuentes

- `D167` — Maestro Operativo: fichas WF-041 a WF-049
- `X013` — Master de Implementación Servicio/UNE: pipeline, propiedades y catálogo TI
- `D195` — Entregables del 26 de enero: SLAs, guidelines y modelo de escalamiento de ATC
- `X020` — Requerimiento Formal: bloque B04
- `D198` — Historial y contexto de cierre (2026-08-03), §10.1: las 9 observaciones preventivas y la propuesta de cerrar Servicio primero
