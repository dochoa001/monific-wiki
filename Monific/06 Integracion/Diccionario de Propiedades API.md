---
titulo: Diccionario de Propiedades API
tipo: concepto
area: integracion
estado: en-progreso
confianza: alta
actualizado: 2026-08-07
fuentes: [X018, X017, X002, D181]
tags: [integracion, api, propiedades, mapeo]
---

# Diccionario de Propiedades API

> **En una frase:** el mapeo campo a campo entre HubSpot y el Admin Monific — la base del gate técnico T1.

**Fuente:** `X018` — *Documento API de Integración Unificado*, hoja "1. Mapeo de Propiedades".

⚠️ **Estado:** este es el mapeo propuesto por B&O. TI de Monific debe confirmar que cada propiedad exista en el Admin, aunque use otra nomenclatura (acción A-02 del 2026-08-04). **Hasta esa confirmación, trátalo como propuesta, no como contrato cerrado.**

---

## Cómo leer la tabla

| Columna | Significado |
|---|---|
| **Nombre en CRM** | Etiqueta visible en HubSpot |
| **Nombre interno** | Identificador técnico. **Inmutable una vez creada la propiedad** |
| **¿Existe?** | Si la propiedad ya está en la API/portal actual |
| **Dirección** | Casi siempre Monific → HubSpot |

**Regla de dropdowns:** la integración debe enviar **valores internos**, no etiquetas visibles.

---

## Contacto

| Nombre en CRM | Nombre interno | Tipo | Opciones | ¿Existe? |
|---|---|---|---|---|
| Email | `email` | Texto | — | ✅ |
| Monific User Id | `monific_user_id` | Texto | — | ✅ |
| Firstname | `firstname` | Texto | — | ✅ |
| Lastname | `lastname` | Texto | — | ✅ |
| Phone | `phone` | Teléfono | — | ✅ |
| Tipo De Cliente | `tipo_de_cliente` | Dropdown | Individual · Empresarial | ✅ |
| Nivel Registro | `nivel_registro` | Dropdown | 1 · 2 · 3 · 4 | ✅ |
| Motivo De Interes | `motivo_de_interes` | Dropdown | Solicitar Financiamiento · Invertir en proyectos | ✅ |
| Codigo De Referido | `codigo_de_referido` | Texto | — | ❌ |
| Clave Desarrollador | `clave_desarrollador` | Texto | — | ❌ |
| Fecha de registro completado | `registration_date_completed` | Fecha | — | ❌ |
| Fecha de cuenta STP activa | `stp_account_date` | Fecha | — | ❌ |
| Fecha de primer fondeo en Wallet | `date_first_funding_wallet` | Fecha | — | ❌ |
| Fecha de primera inversión | `date_first_investment` | Fecha | — | ❌ |
| Saldo actual en cuenta | `current_account_balance` | Número | — | ❌ |
| Fecha de última sesión en la app | `last_session_app` | Fecha | — | ❌ |
| Saldo invertido | `invested_balance` | Número | — | ❌ |
| Valor de la cuenta | `account_value` | Número | — | ❌ |
| Ganado actual | `current_profit` | Número | — | ❌ |

**Llave de localización:** `email`.

---

## Empresa

| Nombre en CRM | Nombre interno | Tipo | ¿Existe? |
|---|---|---|---|
| Name | `name` | Texto | ❌ |
| Clave De Desarrollador | `clave_de_desarrollador` | Texto | ❌ |
| Representante Legal | `representante_legal` | Texto | ❌ |
| Motivo De Interes | `motivo_de_interes` | Dropdown | ❌ |
| Monific Last Synced At | `monific_last_synced_at` | Fecha | ✅ |

⚠️ **Duplicación de nombre interno:** existe `clave_desarrollador` (Contacto y Proyecto) y `clave_de_desarrollador` (Empresa). Son distintas por el guion bajo. Es exactamente el tipo de trampa que el gate T1 debe resolver.

---

## Negocio

### Solicitantes

| Nombre en CRM | Nombre interno | Tipo | Opciones | ¿Existe? |
|---|---|---|---|---|
| Numero De Proyecto | `numero_de_proyecto` | Texto | — | ❌ |
| Dealname | `dealname` | Texto | — | ❌ |
| Tipo De Rendimiento | `tipo_de_rendimiento` | Dropdown | Fijo · Variable | ❌ |
| Monto Solicitado Empresa | `monto_solicitado_empresa` | Número | — | ❌ |
| Monto Fondeado Proyecto | `monto_fondeado_proyecto` | Número | — | ❌ |
| Nivel De Fondeo Financiamiento | `nivel_de_fondeo__financiamiento` | Dropdown | 1. Activo · 2. Fondeado · 3. Liquidado | ❌ |

### Inversionistas

| Nombre en CRM | Nombre interno | Tipo | Opciones | ¿Existe? |
|---|---|---|---|---|
| Move Id | `move_id` | Texto | — | ✅ |
| Dealname | `dealname` | Texto | — | ✅ |
| Amount | `amount` | Número | — | ✅ |
| Move Type | `move_type` | Dropdown | **PURCHASE · SOLD · LIQUIDATION** | ✅ |
| Nombre De Proyecto | `nombre_de_proyecto` | Texto | — | ✅ |
| Closedate | `closedate` | Fecha | — | ✅ |

🔴 `nombre_de_proyecto` es, en el portal real, un campo de **casillas de verificación múltiples con 172 opciones** y codificación UTF-8 inconsistente. Causa de ~1,125 deals fallidos. → [[Propiedades]]

---

## Ticket · Cobranza

| Nombre en CRM | Nombre interno | Tipo | Opciones | ¿Existe? |
|---|---|---|---|---|
| Id De Campaña | `id_de_campana` | Texto | — | ❌ ⚠️ **heredado** |
| **Id De Campana Financiamiento** | `id_de_campana_financiamiento` | Texto | — | ❌ **← clave canónica** |
| Id Del Proyecto | `id_del_proyecto` | Texto | — | ❌ |
| Plazo en meses | `plaza_meses` | Número | — | ❌ ⚠️ *nombre interno con typo aparente* |
| Fecha de primer pago | `fecha_primer_pago` | Fecha | — | ❌ |
| Fecha de último pago | `fecha_ultimo_pago` | Fecha | — | ❌ |
| Fecha próximo pago | `fecha_proximo_pago` | Fecha | — | ❌ |
| Tabla completa de Cuotas | `tabla_cuotas` | Texto | — | ❌ |
| Estado De Pago | `estado_de_pago` | Dropdown | Al corriente · Mora temprana · Mora moderada · Mora grave | ❌ |
| Monto Esperado Pago | `monto_esperado_pago` | Número | — | ❌ |
| Monto Total Deuda | `monto_total_deuda` | Número | — | ❌ |
| Monto Pagado Acumulado | `monto_pagado_acumulado` | Número | — | ❌ |
| Saldo Pendiente Mes Corriente | `saldo_pendiente_mes_corriente` | Número | — | ❌ |
| Monto Deudas Pasadas | `monto_deudas_pasadas` | Número | — | ❌ |
| Saldo Insoluto Total | `saldo_insoluto_total` | Número | — | ❌ |
| Total De Mensualidades | `total_de_mensualidades` | Número | — | ❌ |
| Mensualidades Restantes | `mensualidades_restantes` | Número | — | ❌ |

⚠️ **Regla sobre `id_de_campana`:** *"Campo heredado. No crear uno nuevo; migrar y usar `id_de_campana_financiamiento` como clave canónica del Ticket."*

⚠️ `plaza_meses` parece un typo de `plazo_meses`. Como los nombres internos son inmutables tras crearse, **hay que decidir antes de crear la propiedad**. → [[Preguntas Abiertas]]

---

## Proyecto (objeto estándar)

| Nombre en CRM | Nombre interno | Tipo | Dirección | Regla |
|---|---|---|---|---|
| Nombre del proyecto | `hs_name` | Texto | Monific → HubSpot | Crear/actualizar sin mezclar con Negocios |
| **Id de proyecto** | `hs_object_id` | Número | **HubSpot → Monific** | HubSpot lo genera; Monific lo guarda como referencia |
| Descripción del proyecto | `hs_description` | Texto multilínea | Monific → HubSpot | — |
| Fecha de creación | `hs_createdate` | Fecha | **HubSpot → Monific** | HubSpot la registra |
| Fecha estimada de cierre | `hs_close_date` | Fecha | Monific → HubSpot | *No calcularla dentro de HubSpot* |
| **Número de proyecto** | `numero_de_proyecto` | Texto | Monific → HubSpot | **Clave externa única** para actualizar y asociar |
| Clave de desarrollador | `clave_desarrollador` | Texto | Monific → HubSpot | Asociar Proyecto ↔ Empresa desarrolladora |
| Tipo de rendimiento | `tipo_de_rendimiento` | Dropdown | Monific → HubSpot | Fijo · Variable |
| Monto solicitado | `monto_solicitado_empresa` | Número | Monific → HubSpot | Monific calcula y envía |
| Monto fondeado | `monto_fondeado_proyecto` | Número | Monific → HubSpot | Monific calcula y envía |
| Nivel de fondeo | `nivel_de_fondeo__financiamiento` | Dropdown | Monific → HubSpot | 1. Activo · 2. Fondeado · 3. Liquidado |

También aparece `plazo_estimado_proyecto` en las reglas 20 y 25, sin ficha propia en el mapeo. ⚠️

---

## Otras propiedades mencionadas en reglas sin ficha de mapeo

| Nombre interno | Aparece en | Nota |
|---|---|---|
| `referido_por` | Regla 2 | *"Si tiene código de referidos, trae el correo"* |
| `monto_primera_inversion` | Regla 5 | — |
| `monto_invertido` | Reglas 13, 15, 16, 17 | ⚠️ Convive con `amount`. Hay 17 propiedades de monto solapadas en Negocio |
| `technical_source` | Reglas 13, 15, 16 | Siempre `"batch"` por código |
| `correo_representante`, `telefono_representante` | Regla 12 | — |
| `fecha_proximo_recordatorio` | Regla 29 | Calculada por el backend |
| `saldo_pagado_mes_corriente` | Reglas 22–24 | ⚠️ No está en el mapeo de Ticket |
| `deal_padre` | PLAN-042 | ⚠️ Descartada por INV-06 |

---

## Lo que falta para cerrar el gate T1

> **T1 · Diccionario canónico:** etiqueta, internal name, objeto, tipo, **opciones internas**, fuente y obligación.

Faltan tres cosas:

1. **Las opciones internas de los dropdowns.** El mapeo lista las etiquetas ("Al corriente", "Mora temprana"…) pero no sus valores internos. Sin eso, la integración enviará etiquetas y fallará — exactamente el bug de `nombre_de_proyecto`.
2. **La columna de obligatoriedad.** No está en el mapeo.
3. **La confirmación de TI de Monific** de que cada campo existe en el Admin (acción A-02).

Además, tres propiedades faltantes tienen sus **opciones "por definir con BNO"**: `razon_del_retraso`, `motivo_de_reestructura` y `calificacion_del_proyecto_cnbv`.

---

## Relacionado

- [[Reglas de Negocio API]] — cómo se usan estos campos
- [[Propiedades]] — el estado real en el portal
- [[Integracion Admin Monific HubSpot]] — el gate T1–T7
- [[Modelo de Datos HubSpot]] — las llaves

## Fuentes

- `X018` — Documento API de Integración Unificado, hoja "1. Mapeo de Propiedades"
- `X017` — Relación de propiedades a crear (verificación de existencia)
- `X002` — Matriz Única de Hallazgos, hoja "Verificación 31 propiedades"
- `D181` — Minuta 2026-08-04: reglas de nomenclatura y valores internos
