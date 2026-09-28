---
titulo: Reglas de Negocio API
tipo: concepto
area: integracion
estado: en-progreso
confianza: alta
actualizado: 2026-08-07
fuentes: [X018, D167, D181]
tags: [integracion, api, reglas]
---

# Reglas de Negocio API

> **En una frase:** las 30 reglas del contrato técnico — cada una con su disparador, condición, acción y manejo de errores.

**Fuente:** `X018` — *Documento API de Integración Unificado*, hoja "2. Checklist de Reglas de Negocio".

**Formato obligatorio de toda regla:** `Trigger (evento)` + `Condiciones` + `Acción`. *"Si falta uno de estos elementos, la regla no es válida."*

---

## Contacto (reglas 1–10)

| # | Regla | Trigger | Condición | Acción | Ejecución |
|---|---|---|---|---|---|
| **1** | Creación inicial de Inversionista | Registro de usuario (email + contraseña) | Email no existe en HubSpot | Crear Contacto con `email`, `phone`, `motivo_de_interes = "Invertir en proyectos"` | Tiempo real |
| **2** | Actualización de datos y KYC (Nivel 1) | Usuario completa validación de identidad (CURP) y datos personales | Contacto existente (búsqueda por `email`) | Actualizar: `firstname`, `lastname`, `phone`, `monific_user_id`, `tipo_de_cliente = "Individual"`, `nivel_registro = 1`, `codigo_de_referido`, `referido_por` | Tiempo real |
| **3** | Actualización de dirección (Nivel 2) | Usuario proporciona dirección completa | Contacto existente y **residente en México** | `nivel_registro = 2` | Tiempo real |
| **4** | Activación de cuenta STP (Nivel 3) | Creación exitosa de cuenta STP | Contacto existente | `nivel_registro = 3`, `stp_account_date` | Tiempo real |
| **5** | Inversionista Activo (Nivel 4) | **Confirmación de la primera compra** | `nivel_registro ≠ 4` | `nivel_registro = 4`, `date_first_investment`, `monto_primera_inversion` | Tiempo real · **evento único** |
| **6** | Obtener saldo disponible | Actualización del saldo | Contacto existente, saldo ≥ 0 | `current_account_balance` | **Batch 01:00** |
| **7** | Obtener dinero invertido | Actualización del invertido | Contacto existente, valor ≥ 0 | `invested_balance` | **Batch 02:00** |
| **8** | Obtener valor de cuenta | Actualización del valor | Contacto existente, valor > 0 | `account_value` | **Batch 03:00** |
| **9** | Obtener dinero ganado | Actualización de ganancias | Contacto existente, valor > 0 | `current_profit` | **Batch 03:00** |
| **10** | Creación de contacto de empresa (solicitante) | Registro de usuario con empresa vinculada | Email no existe | Crear Contacto con `clave_desarrollador`, `company`, `motivo_de_interes = "Solicitar Financiamiento"` | Tiempo real |

**Reglas transversales:** el nivel **solo sube, nunca retrocede**. `monific_user_id` es el UUID único que se asienta en el nivel 1. `email` es la llave de localización de todas las reglas.

**Manejo de errores:** *"Si HubSpot falla, el registro en la app Monific continúa. El error se registra en el log del servidor para creación manual o reintento posterior."*

---

## Empresa (reglas 11–12)

| # | Regla | Trigger | Condición | Acción | Ejecución |
|---|---|---|---|---|---|
| **11** | Creación / actualización de Desarrollador | `POST /hubspot/developers/companies/sync` | El desarrollador debe tener al menos una campaña de fondeo activa (`funded > 0`) | Crear o actualizar Empresa con `name`, `clave_de_desarrollador`, `representante_legal`, `motivo_de_interes`, `monific_last_synced_at` | Batch manual o programado |
| **12** | Sincronización de Representante Legal | `POST /hubspot/developers/contacts/sync` | Usuarios que sean representantes legales de desarrolladores con campañas activas | Crear/actualizar Contacto y **asociarlo a la Empresa** vía `companyToContact` | Batch |

**Deduplicación:** por nombre de empresa o `clave_de_desarrollador`. **Hash MD5**: si no hay cambios, SKIP.

⚠️ **Regla de roles:** *"Monific estipula que un usuario solo tiene un rol: o es inversionista o representante legal, nunca ambos."*

---

## Negocio (reglas 13–19)

| # | Regla | Trigger | Acción | Ejecución |
|---|---|---|---|---|
| **13** | Compra en Mercado Primario | Compra confirmada (fondos debitados y participaciones asignadas), monto > 0 | Crear Deal de inversión, asociarlo a Contacto y a Proyecto. Pipeline `708176204`, etapa `1035451748` | Batch 12:00 AM |
| **14** | Cambio de nombre por etapa | Cambio de etapa del negocio | `PURCHASE` → "Inversión de {email} en {proyecto}" · `SOLD` → "Venta de…" · `LIQUIDATION` → "Liquidación de…" | Batch 12:00 AM |
| **15** | Compra en Mercado Secundario | Compra en secundario, monto > 0 | Crear Deals SOLD/PURCHASE asociados al Proyecto. Pipeline Default, etapa `1056454416` | Batch |
| **16** | Venta en Mercado Secundario | Venta en secundario, monto > 0 | Crear Deal SOLD asociado al Proyecto | Batch |
| **17** | Actualizar negocio origen al vender en secundario | Venta en secundario | Actualizar el deal de compra original (`move_id`, `amount`, `monto_invertido`) | Batch |
| **18** | Liquidación de participaciones | Distribución de rendimientos o cierre de campaña, monto > 0 | Deal en etapa `1319443839` del pipeline de Inversiones | Batch |
| **19** | **Reconciliación batch (fallback)** | `POST /hubspot/investors/deals/sync` | Actualizar o crear Deals pendientes/fallidos usando `move_id` como clave (`dedup=true`) | Batch |

**Notas técnicas:**
- `amount` siempre es valor absoluto con 2 decimales
- `technical_source` se envía siempre como `"batch"` por código
- La regla 19 es *"la red de seguridad técnica de Monific para garantizar que ninguna operación se pierda"*. Usa hash MD5; pipeline y etapa **no se modifican** en actualizaciones
- ⚠️ La regla 15 dice en sus notas *"Todos los Deals creados se asocian al mismo Deal de Campaña (padre)"* pero su decisión final dice *"No crear un Deal padre de campaña; usar la asociación con Proyecto"*. Prevalece la decisión final. → [[Contradicciones y Verificaciones]]

---

## Proyecto (reglas 20, 25–28)

| # | Regla | Trigger | Acción | Ejecución |
|---|---|---|---|---|
| **20** | Sincronización de Proyectos de Fondeo | `POST /hubspot/developers/deals/sync` | Crear o actualizar Proyecto y asociarlo a Empresa. Clave de deduplicación: **`numero_de_proyecto`** | Batch |
| **25** | Crear o actualizar Proyecto | Se crea una campaña en la app | Crear/actualizar registro en el objeto Proyecto | Batch |
| **26** | Asociar Proyecto ↔ Negocio solicitante | — | Asociación por `numero_de_proyecto` | Batch |
| **27** | Asociar Proyecto ↔ Negocio inversionista | — | Asociación por `numero_de_proyecto` (**no por nombre**) | Batch |
| **28** | Asociar Proyecto ↔ Empresa | — | Asociación por `clave_desarrollador` | Batch |

**Campos del Proyecto:** `hs_name`, `hs_description`, `hs_close_date`, `numero_de_proyecto`, `clave_desarrollador`, `tipo_de_rendimiento`, `monto_solicitado_empresa`, `monto_fondeado_proyecto`, `plazo_estimado_proyecto`, `nivel_de_fondeo__financiamiento`, `monific_last_synced_at`.

> *"La campaña vive en Proyecto predeterminado, no en Negocio. Deduplicar por `numero_de_proyecto`."*

---

## Ticket · Cobranza (reglas 21–24)

| # | Regla | Trigger | Condición | Acción |
|---|---|---|---|---|
| **21** | Vinculación de Campaña de Cobranza | Confirmación de la **inversión efectiva** (desembolso autorizado) | Proyecto fondeado al 100 % o campaña cerrada exitosamente | Crear Ticket de Cobranza y asociarlo a Contacto, Negocio solicitante y Proyecto. Etapa "Nuevo Registro". *Si el Proyecto no existe, crearlo primero* |
| **22** | Registro de pago (ordinario o parcial) | Pago conciliado por el Admin | Ticket existente y activo | Actualizar saldos. **Permite que HubSpot detenga la secuencia de recordatorios** al detectar la cuota cubierta |
| **23** | Cierre exitoso (campaña liquidada) | Pago de la última cuota y liquidación de capital | `saldo_insoluto_total = 0` | Saldos a 0, etapa "Campaña Liquidada". Detona notificaciones de liberación de garantía |
| **24** | Cierre por refinanciamiento | Aprobación en comité para reestructurar | Ticket en mora grave o en reestructura | Mover a "Cierre por Refinanciamiento" y **disparar la regla 21** para crear un Ticket nuevo (ej. `FIN-001-REFIN`) |

> **Sobre la regla 24:** *"Un refinanciamiento no es un ajuste de plazos sobre el mismo ticket, es la extinción de uno y el nacimiento de un nuevo proyecto a nivel datos."*
> **Riesgo declarado:** si falla el cierre, la campaña refinanciada se crea pero el ticket viejo queda abierto → requiere alerta.

> **Sobre la regla 21:** *"Es el inicio de la vida de la deuda. Cada campaña de un proyecto (ej. FIN 001) genera su propio Ticket de Cobranza."*

---

## Backend (reglas 29–30)

| # | Regla | Trigger | Acción | Por qué existe |
|---|---|---|---|---|
| **29** | Programación de recordatorios de cobranza | Cálculo diario de fechas y días hábiles. Ticket activo con saldo > 0 | Actualizar `fecha_proximo_recordatorio`. El workflow nativo se activa en la fecha ya calculada | **Sustituye la lógica de calendario no disponible sin Data Hub.** HubSpot no calcula días hábiles ni recurrencias complejas |
| **30** | Control de duplicados y reintentos | Cada envío a HubSpot | Crear o actualizar de forma **idempotente** usando `move_id`, `numero_de_proyecto` o `id_campana` + `monific_last_synced_at` | *"La lógica vive fuera de HubSpot."* No requiere código personalizado dentro |

---

## Los criterios de calidad que exige el documento

Del propio contrato técnico:

- ❌ No usar descripciones genéricas: *"Cuando se actualice el estatus, enviar información"*
- ✅ Usar definiciones específicas: *"Cuando la etapa del negocio cambie a 'Admitido', crear un registro en el sistema externo"*
- Cada regla debe describir **un único flujo**
- **Todas** las reglas deben tener manejo de errores definido
- Evitar reglas duplicadas o contradictorias
- **Criterio de aceptación:** el mapeo alineado con todas las reglas, reglas claras y ejecutables, cero ambigüedades

---

## Relacionado

- [[Integracion Admin Monific HubSpot]] — la arquitectura
- [[Diccionario de Propiedades API]] — el mapeo campo a campo
- [[Modelo de Datos HubSpot]] — objetos y llaves
- [[Proceso de Cobranza]] — cómo se usan las reglas 21–24

## Fuentes

- `X018` — Documento API de Integración Unificado, hoja "2. Checklist de Reglas de Negocio"
- `D167` — Maestro Operativo: decisiones canónicas que ajustan reglas
- `D181` — Minuta 2026-08-04: contexto de la presentación de las reglas a TI
