# S02 · Diccionario de propiedades

> **Para quién:** TI de Monific y quien administre el portal.
> **Por qué es crítico:** sin esto nadie puede crear un reporte ni depurar un dato. Y es el **gate T1** de la integración: mientras no esté cerrado, TI no puede programar endpoints definitivos sin adivinar.

---

## Las tres reglas que no se pueden romper

### 1 · El nombre interno es inmutable

> El **nombre en CRM** es la etiqueta visible. El **nombre interno** es el identificador técnico que consume la integración. **Una vez creada la propiedad, su nombre interno no se puede modificar.**

Consecuencia: **cada error de tipeo al crear una propiedad es permanente.** Ya hay dos casos vivos en este portal:

| Caso | Problema |
|---|---|
| `plaza_meses` | Parece typo de `plazo_meses`. **Decidir antes de crearla** |
| `clave_desarrollador` vs `clave_de_desarrollador` | Existen las dos, en objetos distintos, separadas solo por un guion bajo. Es exactamente la trampa que T1 debe resolver |

### 2 · Los dropdowns se envían por valor interno, nunca por etiqueta

El catálogo de HubSpot es la fuente de verdad. **Siempre `internalValue`, nunca la etiqueta visible.**

Esta regla no es teórica: **es la causa del bug más caro del proyecto** (ver abajo). Debe entrar al onboarding técnico de cualquiera que toque la integración.

### 3 · Las propiedades son exclusivas de cada objeto

El teléfono de un Contacto y el de una Empresa son campos distintos aunque se llamen igual. No se comparten, no se heredan.

---

## Cómo leer el diccionario

| Columna | Significado |
|---|---|
| **Nombre en CRM** | Etiqueta visible |
| **Nombre interno** | Identificador técnico · **inmutable** |
| **Tipo** | Texto, número, fecha, dropdown, etc. |
| **Opciones** | Valores posibles (solo dropdowns) |
| **¿Existe?** | Si está creada en el portal hoy |
| **Origen** | Manual · workflow · **API** |

⚠️ **Este mapeo es propuesta de B&O.** TI de Monific debe confirmar que cada propiedad exista en el Admin, aunque use otra nomenclatura (acción A-02 del 2026-08-04). **Hasta esa confirmación, trátalo como propuesta, no como contrato cerrado.**

---

## Contacto

| Nombre en CRM | Nombre interno | Tipo | Opciones | ¿Existe? |
|---|---|---|---|---|
| Email | `email` | Texto | — | ✅ |
| Monific User Id | `monific_user_id` | Texto | — | ✅ |
| Firstname | `firstname` | Texto | — | ✅ |
| Lastname | `lastname` | Texto | — | ✅ |
| Phone | `phone` | Teléfono | — | ✅ |
| Tipo de cliente | `tipo_de_cliente` | Dropdown | Individual · Empresarial | ✅ |
| Nivel de registro | `nivel_registro` | Dropdown | 1 · 2 · 3 · 4 | ✅ |
| Motivo de interés | `motivo_de_interes` | Dropdown | Solicitar Financiamiento · Invertir en proyectos | ✅ |
| Código de referido | `codigo_de_referido` | Texto | — | ❌ |
| Clave desarrollador | `clave_desarrollador` | Texto | — | ❌ |
| Fecha de registro completado | `registration_date_completed` | Fecha | — | ❌ |
| Fecha de cuenta STP activa | `stp_account_date` | Fecha | — | ❌ |
| Fecha de primer fondeo en Wallet | `date_first_funding_wallet` | Fecha | — | ❌ |
| Fecha de primera inversión | `date_first_investment` | Fecha | — | ❌ |
| Saldo actual en cuenta | `current_account_balance` | Número | — | ❌ |
| Fecha de última sesión en la app | `last_session_app` | Fecha | — | ❌ |
| Saldo invertido | `invested_balance` | Número | — | ❌ |
| Valor de la cuenta | `account_value` | Número | — | ❌ |
| Ganado actual | `current_profit` | Número | — | ❌ |

**Llave de localización del contacto en toda la integración: `email`.**

Las cuatro propiedades financieras llegan por **batch nocturno** (01:00, 02:00, 03:00 y 03:00). Ver **S01**.

---

## Empresa

| Nombre en CRM | Nombre interno | Tipo | ¿Existe? |
|---|---|---|---|
| Name | `name` | Texto | ❌ |
| Clave de desarrollador | `clave_de_desarrollador` | Texto | ❌ |
| Representante legal | `representante_legal` | Texto | ❌ |
| Motivo de interés | `motivo_de_interes` | Dropdown | ❌ |
| Monific Last Synced At | `monific_last_synced_at` | Fecha | ✅ |

---

## Negocio · Solicitantes

| Nombre en CRM | Nombre interno | Tipo | Opciones | ¿Existe? |
|---|---|---|---|---|
| Número de proyecto | `numero_de_proyecto` | Texto | — | ❌ |
| Dealname | `dealname` | Texto | — | ❌ |
| Tipo de rendimiento | `tipo_de_rendimiento` | Dropdown | Fijo · Variable | ❌ |
| Monto solicitado empresa | `monto_solicitado_empresa` | Número | — | ❌ |
| Monto fondeado proyecto | `monto_fondeado_proyecto` | Número | — | ❌ |
| Nivel de fondeo financiamiento | `nivel_de_fondeo__financiamiento` | Dropdown | 1. Activo · 2. Fondeado · 3. Liquidado | ❌ |

## Negocio · Inversionistas

| Nombre en CRM | Nombre interno | Tipo | Opciones | ¿Existe? |
|---|---|---|---|---|
| Move Id | `move_id` | Texto | — | ✅ |
| Dealname | `dealname` | Texto | — | ✅ |
| Amount | `amount` | Número | — | ✅ |
| Move Type | `move_type` | Dropdown | **PURCHASE · SOLD · LIQUIDATION** | ✅ |
| Nombre de proyecto | `nombre_de_proyecto` | 🔴 *ver abajo* | 172 opciones | ✅ |
| Closedate | `closedate` | Fecha | — | ✅ |

---

## Ticket · Cobranza

| Nombre en CRM | Nombre interno | Tipo | Opciones | ¿Existe? |
|---|---|---|---|---|
| Id de campaña | `id_de_campana` | Texto | — | ❌ ⚠️ **heredado** |
| **Id de campaña financiamiento** | `id_de_campana_financiamiento` | Texto | — | ❌ **← clave canónica** |
| Id del proyecto | `id_del_proyecto` | Texto | — | ❌ |
| Plazo en meses | `plaza_meses` | Número | — | ❌ ⚠️ *typo aparente* |
| Fecha de primer pago | `fecha_primer_pago` | Fecha | — | ❌ |
| Fecha de último pago | `fecha_ultimo_pago` | Fecha | — | ❌ |
| Fecha próximo pago | `fecha_proximo_pago` | Fecha | — | ❌ |
| Tabla completa de cuotas | `tabla_cuotas` | Texto | — | ❌ |
| Estado de pago | `estado_de_pago` | Dropdown | Al corriente · Mora temprana · Mora moderada · Mora grave | ❌ |
| Monto esperado pago | `monto_esperado_pago` | Número | — | ❌ |
| Monto total deuda | `monto_total_deuda` | Número | — | ❌ |
| Monto pagado acumulado | `monto_pagado_acumulado` | Número | — | ❌ |
| Saldo pendiente mes corriente | `saldo_pendiente_mes_corriente` | Número | — | ❌ |
| Monto deudas pasadas | `monto_deudas_pasadas` | Número | — | ❌ |
| Saldo insoluto total | `saldo_insoluto_total` | Número | — | ❌ |
| Total de mensualidades | `total_de_mensualidades` | Número | — | ❌ |
| Mensualidades restantes | `mensualidades_restantes` | Número | — | ❌ |

⚠️ **Regla sobre `id_de_campana`:** *"Campo heredado. No crear uno nuevo; migrar y usar `id_de_campana_financiamiento` como clave canónica del Ticket."*

---

## Proyecto (objeto estándar)

| Nombre en CRM | Nombre interno | Dirección | Regla |
|---|---|---|---|
| Nombre del proyecto | `hs_name` | Monific → HubSpot | Crear/actualizar sin mezclar con Negocios |
| **Id de proyecto** | `hs_object_id` | **HubSpot → Monific** | HubSpot lo genera; Monific lo guarda |
| Descripción | `hs_description` | Monific → HubSpot | — |
| Fecha de creación | `hs_createdate` | **HubSpot → Monific** | HubSpot la registra |
| Fecha estimada de cierre | `hs_close_date` | Monific → HubSpot | *No calcularla en HubSpot* |
| **Número de proyecto** | `numero_de_proyecto` | Monific → HubSpot | **Clave externa única** |
| Clave de desarrollador | `clave_desarrollador` | Monific → HubSpot | Asocia Proyecto ↔ Empresa |
| Tipo de rendimiento | `tipo_de_rendimiento` | Monific → HubSpot | Fijo · Variable |
| Monto solicitado | `monto_solicitado_empresa` | Monific → HubSpot | Monific calcula |
| Monto fondeado | `monto_fondeado_proyecto` | Monific → HubSpot | Monific calcula |
| Nivel de fondeo | `nivel_de_fondeo__financiamiento` | Monific → HubSpot | 1. Activo · 2. Fondeado · 3. Liquidado |

---

## Las llaves de negocio

| Llave | Objeto | Para qué |
|---|---|---|
| `email` | Contacto | Localización en toda la integración |
| `monific_user_id` | Contacto | UUID único. Un onboarding por usuario |
| `clave_de_desarrollador` | Empresa / Proyecto | Asociar Proyecto ↔ Empresa |
| **`numero_de_proyecto`** | Proyecto / Negocio | **Clave externa única.** Deduplicación y asociación |
| `move_id` | Negocio | Cada movimiento de inversión. Idempotencia |
| **`id_de_campana_financiamiento`** | Ticket | **Clave canónica del Ticket de Cobranza** |

---

## 🔴 El bug que rompe la integración: `nombre_de_proyecto`

Es el problema técnico más caro del proyecto, y es un problema **de diccionario**.

| Aspecto | Detalle |
|---|---|
| **Propiedad** | `nombre_de_proyecto` — Negocio — casillas de verificación múltiples con **172 opciones** |
| **Síntoma** | `POST /crm/objects/v3/deals` devuelve **400** |
| **Causa raíz** | Codificación UTF-8 inconsistente: tildes y eñes con variantes. La app envía **la etiqueta** en lugar del **valor interno** |
| **Impacto** | ~**1,125 deals fallidos** entre el 1 de mayo y el corte. En el log jun–jul, **741 de 766 errores 4xx** se concentran aquí |

**Corrección, en cinco pasos:**

1. Normalizar el catálogo a UTF-8 consistente
2. Que la app envíe por `internalValue` en **todos** los dropdowns de Negocio
3. Fusionar duplicados con y sin tilde
4. Reprocesar los deals fallidos
5. Documentar la convención canónica

---

## Las 26 propiedades que no existen

Verificadas por API el 2026-06-17. De 31 propiedades comprometidas por B&O, **solo 5 estaban creadas**. Todas las faltantes son del segmento **Cobranza**, salvo la primera:

| Nombre | Nombre interno | Tipo |
|---|---|---|
| Fecha y hora de atención del ticket | `fecha_y_hora_de_atencion_del_ticket` | Fecha y hora *(tickets)* |
| ID Campaña | `id_campana` | Texto |
| Propietario de campaña | `propietario_de_campana` | Usuario HubSpot |
| Link de expediente en Drive | `link_de_expediente_en_drive` | URL |
| Condiciones especiales del proyecto | `condiciones_especiales_del_proyecto` | Texto multilínea |
| Nota de acuerdo de pago | `nota_de_acuerdo_de_pago` | Texto multilínea |
| Número de intentos de contacto | `numero_de_intentos_de_contacto` | Número |
| **Razón del retraso** | `razon_del_retraso` | Dropdown ⚠️ *opciones por definir* |
| Notas de gestión de cobranza | `notas_de_gestion_de_cobranza` | Texto multilínea |
| Fecha de aprobación de reestructura | `fecha_de_aprobacion_de_reestructura` | Fecha |
| Responsable de aprobación | `responsable_de_aprobacion` | Usuario HubSpot |
| **Motivo de reestructura** | `motivo_de_reestructura` | Dropdown ⚠️ *opciones por definir* |
| Nota de decisión del comité | `nota_de_decision_del_comite` | Texto multilínea |
| Condiciones especiales del acuerdo | `condiciones_especiales_del_acuerdo` | Texto multilínea |
| Link al contrato de refinanciamiento | `link_al_contrato_de_refinanciamiento` | URL |
| Días de mora al ingresar | `dias_de_mora_al_ingresar` | Número |
| Número de expediente jurídico | `numero_de_expediente_juridico` | Texto ⚠️ *aparece duplicado en la relación* |
| Abogado externo asignado | `abogado_externo_asignado` | Texto |
| Monto vencido acumulado al ingreso | `monto_vencido_acumulado_al_ingreso` | Moneda |
| Monto recuperado | `monto_recuperado` | Moneda |
| Observaciones del proceso de garantía | `observaciones_del_proceso_de_garantia` | Texto multilínea |
| Conciliación validada por D.F. | `conciliacion_validada_por_d_f` | Sí/No |
| **Calificación del proyecto CNBV** | `calificacion_del_proyecto_cnbv` | Dropdown ⚠️ *opciones por definir* |
| Monto vencido acumulado al cierre | `monto_vencido_acumulado_al_cierre` | Moneda |
| Observaciones del proceso legal | `observaciones_del_proceso_legal` | Texto multilínea |

⚠️ **Tres propiedades tienen sus opciones "por definir con BNO". No se pueden crear sin esa definición** — y crearlas con opciones provisionales es peor, porque después no se pueden renombrar.

---

## Los 383 campos vacíos

**383 de las 402 propiedades de Negocio están vacías.** El bloque **B11** exige inventariarlas antes de archivar nada, con cuatro datos por propiedad:

1. Nombre y nombre interno
2. ¿Se usa en algún workflow activo?
3. ¿Se usa en algún reporte?
4. ¿La escribe la integración `trama1`?

**Criterio de aceptación: *"ningún campo usado se archiva"*.** Evidencia: export antes/después, inventario, impacto y **plan de reversa**.

---

## Otros problemas conocidos

| Problema | Acción |
|---|---|
| **17 propiedades de monto** distintas y solapadas en Negocio | Definir la canónica, documentar cuál puebla la app, archivar el resto |
| `nombre_completo_` duplica `firstname` + `lastname` | Archivar o derivar por fórmula |
| `nivel_registro` avanza *hardcodeado* por workflow, sin validar el nivel previo | Reescribir con condiciones: Nivel 2 si dirección+residencia · Nivel 3 si clave STP **y** nivel previo = 2 · Nivel 4 si primera inversión |
| Contactos sin `nivel_registro` | Backfill a 1 para los que tienen KYC; excluir leads no-app |
| `clave_de_desarrollador` con población de solo **3.16 %** | Investigar: la regla dice creación automática |
| `deal_padre` | ⚠️ **Descartada** por la decisión INV-06: *"no existe Deal padre de campaña"*. Se usa el objeto Proyecto |

---

## Qué falta para cerrar el gate T1

> **T1 · Diccionario canónico:** etiqueta, internal name, objeto, tipo, **opciones internas**, fuente y obligación.

Faltan tres cosas:

1. **Las opciones internas de los dropdowns.** El mapeo lista las etiquetas ("Al corriente", "Mora temprana"…) pero **no sus valores internos**. Sin eso, la integración enviará etiquetas y fallará — exactamente el bug de `nombre_de_proyecto`, otra vez.
2. **La columna de obligatoriedad.** No está en el mapeo.
3. **La confirmación de TI de Monific** de que cada campo existe en el Admin (acción A-02).

---

## Estado y verificación

**Estado:** 🟡 propuesta hasta cerrar T1 · 2026-08-18
**Fuente:** Documento API de Integración Unificado, hoja *"1. Mapeo de Propiedades"*; relación de propiedades a crear; Matriz Única de Hallazgos, hoja *"Verificación 31 propiedades"*; minuta del 2026-08-04.

**Falta para publicar:**

1. Cerrar los tres puntos del gate T1.
2. Definir las opciones de los tres dropdowns pendientes.
3. Decidir `plaza_meses` vs `plazo_meses` **antes** de crear la propiedad.
4. Resolver la ambigüedad `clave_desarrollador` / `clave_de_desarrollador`.
5. Crear y verificar las 26 propiedades faltantes (bloque B07), con evidencia por propiedad: captura, internal name, tipo, grupo y sensibilidad.
6. Validación escrita de Monific.

**Formato final recomendado:** hoja de cálculo derivada del master, no documento de texto. Se filtra, se ordena y se mantiene; un documento de texto se vuelve obsoleto sin que nadie lo note.
