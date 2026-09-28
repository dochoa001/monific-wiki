---
titulo: Propiedades
tipo: concepto
area: transversal
estado: en-riesgo
confianza: alta
actualizado: 2026-08-07
fuentes: [X002, X017, X018, X011, X012, X013, X001, X020]
tags: [hubspot, propiedades, datos]
---

# Propiedades

> **En una frase:** el portal tiene 2,142 propiedades, los masters esperan 177, y de las 31 que B&O comprometió, **26 no existían** al 2026-06-17.

---

## La brecha, en números

| Dato | Valor |
|---|---|
| Propiedades esperadas por los masters | 177 |
| Propiedades detectadas por API en el portal | **2,142** |
| Propiedades de B&O revisadas nominalmente | 31 |
| **Propiedades de B&O que no existen** | **26** |
| Propiedades de Negocio | 402 |
| — de ellas, **vacías** | **383** |
| Objetos personalizados | **0** |

**Lectura:** no es que falten campos en general — hay exceso. El problema es que **los campos concretos que el diseño necesita no están creados**, mientras arrastra 383 propiedades muertas.

---

## Las 26 propiedades que faltan

Verificadas por API el 2026-06-17. Todas del segmento **Cobranza**, salvo indicación:

| Nombre | Nombre interno | Tipo |
|---|---|---|
| Fecha y hora de atención del ticket | `fecha_y_hora_de_atencion_del_ticket` | Fecha y hora *(tickets)* |
| ID Campaña | `id_campana` | Texto |
| Propietario de campaña | `propietario_de_campana` | Usuario HubSpot |
| Link de expediente en Drive | `link_de_expediente_en_drive` | URL |
| Condiciones especiales del proyecto | `condiciones_especiales_del_proyecto` | Texto multilínea |
| Nota de acuerdo de pago | `nota_de_acuerdo_de_pago` | Texto multilínea |
| Número de intentos de contacto | `numero_de_intentos_de_contacto` | Número |
| Razón del retraso | `razon_del_retraso` | Selección única ⚠️ *opciones por definir* |
| Notas de gestión de cobranza | `notas_de_gestion_de_cobranza` | Texto multilínea |
| Fecha de aprobación de reestructura | `fecha_de_aprobacion_de_reestructura` | Fecha |
| Responsable de aprobación | `responsable_de_aprobacion` | Usuario HubSpot |
| Motivo de reestructura | `motivo_de_reestructura` | Selección única ⚠️ |
| Nota de decisión del comité | `nota_de_decision_del_comite` | Texto multilínea |
| Condiciones especiales del acuerdo | `condiciones_especiales_del_acuerdo` | Texto multilínea |
| Link al contrato de refinanciamiento | `link_al_contrato_de_refinanciamiento` | URL |
| Días de mora al ingresar | `dias_de_mora_al_ingresar` | Número |
| Número de expediente jurídico | `numero_de_expediente_juridico` | Texto |
| Abogado externo asignado | `abogado_externo_asignado` | Texto |
| Monto vencido acumulado al ingreso | `monto_vencido_acumulado_al_ingreso` | Moneda |
| Monto recuperado | `monto_recuperado` | Moneda |
| Observaciones del proceso de garantía | `observaciones_del_proceso_de_garantia` | Texto multilínea |
| Conciliación validada por D.F. | `conciliacion_validada_por_d_f` | Sí/No |
| Calificación del proyecto CNBV | `calificacion_del_proyecto_cnbv` | Selección única ⚠️ |
| Monto vencido acumulado al cierre | `monto_vencido_acumulado_al_cierre` | Moneda |
| Número de expediente jurídico | `numero_de_expediente_juridico` | ⚠️ **Duplicado detectado** — revisar antes de crear |
| Observaciones del proceso legal | `observaciones_del_proceso_legal` | Texto multilínea |

⚠️ Tres propiedades tienen sus **opciones de dropdown "por definir con BNO"**. No se pueden crear sin esa definición.

Bloque de remediación: **B07** (+10 días hábiles) — *"Crear y verificar objeto, grupo, tipo, valores e internal name sin duplicar. Evidencia por propiedad: captura, internal name, tipo, grupo y sensibilidad. 31/31 verificadas y sin duplicados."*

---

## Menciones adicionales de propiedades faltantes

Detectadas en hallazgos, sin verificación nominal completa:

| Nombre | Nombre interno | Segmento |
|---|---|---|
| Monific Last Synced At | `monific_last_synced_at` | Solicitantes |
| Fecha cuenta STP | `stp_account_date` | Inversionistas |
| Fecha primera inversión | `date_first_investment` | Inversionistas |
| Saldo actual | `current_account_balance` | Inversionistas |
| Saldo invertido | `invested_balance` | Inversionistas |
| Valor cuenta | `account_value` | Inversionistas |
| Ganado actual | `current_profit` | Inversionistas |
| Deal padre / Negocio principal | `deal_padre` | Inversionistas ⚠️ *ver nota abajo* |
| Monto máximo de campaña | `maximum_campaign_amount` | Solicitantes |
| Monto mínimo de campaña | `minimum_campaign_amount` | Solicitantes |
| Estatus última campaña | `estatus_ultima_campana` | Solicitantes |
| Fechas/material de campaña | `fechas_material_campana` | Solicitantes |

⚠️ **`deal_padre` está en tensión con la decisión INV-06** del Maestro Operativo: *"No existe Deal padre de campaña"*. El plan de corrección (PLAN-042) pedía evaluarlo; la decisión canónica posterior lo descarta y usa el objeto Proyecto. → [[Contradicciones y Verificaciones]]

---

## Los 383 campos vacíos

Hallazgo **APP-045 / PLAN-045**, bloque **B11**:

> B&O debe generar la lista de las 383 propiedades vacías de Negocio incluyendo, por cada una: nombre, internal name, ¿se usa en algún workflow activo?, ¿se usa en algún reporte?, ¿la escribe `trama1`? Archivar las que no.

**Criterio de aceptación:** *"Ningún campo usado se archiva."* Evidencia: export antes/después, inventario, impacto y plan de reversa.

---

## 🔴 El bug que rompe la integración: `nombre_de_proyecto`

El problema técnico más caro del proyecto:

| Aspecto | Detalle |
|---|---|
| **Propiedad** | `nombre_de_proyecto` — Negocio — Casillas de verificación múltiples con **172 opciones** |
| **Síntoma** | `POST /crm/objects/v3/deals` devuelve **400** |
| **Causa raíz** | Inconsistencia de codificación UTF-8: tildes y eñes con variantes. La app envía la **etiqueta** en lugar del **valor interno** |
| **Impacto** | ~**1,125 deals** fallidos entre el 1 de mayo y el corte. 741 rechazos concentrados aquí en el log jun–jul |
| **Corrección** | (1) Normalizar el catálogo a UTF-8 consistente · (2) que la app envíe por `internalValue` en **todos** los dropdowns de Negocio · (3) fusionar duplicados con/sin tilde · (4) reprocesar los deals fallidos · (5) documentar la convención canónica |

Acciones: PLAN-002, PLAN-038, PLAN-046, PLAN-052, PLAN-056.

**Regla resultante:** el catálogo de HubSpot es la fuente de verdad y debe usarse siempre el valor interno, nunca la etiqueta. Debe entrar al onboarding técnico de TI Monific.

---

## Otros problemas de propiedades

| Hallazgo | Problema | Acción |
|---|---|---|
| PLAN-010 / PLAN-040 | **17 propiedades de monto** distintas y solapadas en Negocio | Definir la canónica, documentar cuál puebla la app y archivar el resto |
| PLAN-032 | `nombre_completo_` duplica `firstname` + `lastname` | Archivar o derivar por fórmula |
| PLAN-024 / PLAN-035 | `nivel_registro` avanza hardcodeado por workflow, sin validar el nivel previo | Reescribir con condiciones: Nivel 2 si dirección+residencia · Nivel 3 si clave STP **y** nivel previo = 2 · Nivel 4 si primera inversión |
| PLAN-033 | Contactos sin `nivel_registro` | Backfill a 1 para los que tienen KYC; excluir leads no-app |
| PLAN-008 / PLAN-016 | `clave_de_desarrollador` con población baja (3.16 %) | Investigar por qué, siendo que la regla es creación automática |
| PLAN-037 vs PLAN-055 | Contradicción sobre `amount`: 0.14 % vs 99.9 % poblado | ✅ Resuelto: prevalece PLAN-055. PLAN-037 quedó obsoleto (medido antes de que la app poblara `amount`) |

→ [[Higiene y Accesos]]

---

## Nombres internos: la regla que no se puede romper

De la sesión técnica del 2026-08-04:

> El **nombre en CRM** es la etiqueta visible. El **nombre interno** es el identificador técnico que consume la integración. **Una vez creada la propiedad, su nombre interno no se puede modificar.**
> Para dropdowns y selección múltiple, la integración debe usar **exactamente los valores internos** definidos en el mapeo, no las etiquetas visibles.

Por eso el gate **T1** exige un diccionario canónico con: etiqueta, internal name, objeto, tipo, opciones internas, fuente y obligación.

⚠️ En el Maestro Operativo, la mayoría de las fichas de workflow marca los nombres internos como *"propuesta, pendiente de confirmar en T1"*. **No los des por buenos.**

→ [[Diccionario de Propiedades API]]

---

## Propiedades por proceso

El detalle de qué propiedad usa cada etapa vive en la página del proceso:

- [[Proceso Comercial Solicitantes]] — 41 propiedades en 6 etapas
- [[Proceso Comercial Inversionistas]] — 24 propiedades + las financieras de Contacto
- [[Proceso de Cobranza]] — ~60 propiedades en 7 etapas
- [[Proceso de Servicio ATC]] — 26 propiedades en 4 etapas
- [[Proceso UNE]] — 14 propiedades

Y el mapeo técnico completo en [[Diccionario de Propiedades API]].

---

## Relacionado

- [[Diccionario de Propiedades API]] — mapeo HubSpot ↔ Admin Monific
- [[Modelo de Datos HubSpot]] — llaves y asociaciones
- [[Higiene y Accesos]] — limpieza del portal
- [[Bloques de Cierre B01-B16]] — bloques B07 y B11

## Fuentes

- `X002` — Matriz Única de Hallazgos: hoja "Verificación 31 propiedades"
- `X017` — Relación de propiedades a crear (26 faltantes + menciones adicionales)
- `X018` — Documento API de Integración: mapeo completo
- `X011`, `X012`, `X013` — Masters: listados de propiedades por proceso
- `X001` — Plan Único de Corrección v3 (2026-06-13)
- `X020` — Requerimiento Formal: bloques B07 y B11
