---
titulo: Proceso Comercial Inversionistas
tipo: proceso
area: comercial
estado: en-riesgo
confianza: media
actualizado: 2026-09-01
fuentes: [D167, X012, X018, D193, X020]
tags: [proceso, inversionistas, negocios, pipeline]
---

# Proceso Comercial Inversionistas

> **En una frase:** del registro en la app a inversionista activo — un proceso donde HubSpot **no origina nada**, solo refleja lo que ocurre en la app de Monific.

**Objeto HubSpot:** Negocio · **Pipeline:** Inversionistas · **Workflows:** WF-025 a WF-040

**Flujograma TO-BE (V2, 2026-09-01):** `miro.com/app/board/uXjVHsUCRO8=` — tablero en la cuenta de
Miro de B&O, construido desde el V1 del cliente (`miro.com/app/board/uXjVG7nRR_I=`, feb-2026) más las
decisiones INV-01 a INV-14. El V1 queda como histórico; propuesta pendiente de validación de Monific.

🔴 De los 16 workflows, **13 pendientes y 3 con error**. Ninguno verificado. Además, 9 de los 16 están **apagados** esperando la integración.

---

## La regla que gobierna todo

> **La app/Admin Monific confirma registro, KYC, CLABE, saldos, fechas y montos. HubSpot crea y mueve el Negocio, asigna asesor y dispara tareas o comunicaciones aprobadas. HubSpot no debe inventar montos ni calcular saldos. La API es la fuente de datos financieros.**

Corolario (decisión **INV-02**): la cuenta, contraseña, KYC y CLABE se crean **solo en la app/web de Monific**. Un formulario de HubSpot únicamente capta interés de marketing.

---

## Los cuatro niveles de registro

`nivel_registro` es el **estado canónico** (decisión INV-03). El nivel solo sube, nunca retrocede.

| Nivel | Evento que lo dispara | Propiedades que llegan |
|---|---|---|
| **1** | Usuario completa validación de identidad (CURP) y datos personales | `firstname`, `lastname`, `phone`, `monific_user_id`, `tipo_de_cliente`, `codigo_de_referido`, `referido_por`, `motivo_de_interes` |
| **2** | Usuario proporciona dirección completa (residente en México) | `nivel_registro = 2` |
| **3** | Creación exitosa de cuenta **STP** | `nivel_registro = 3`, `stp_account_date` |
| **4** | **Confirmación de la primera compra de participaciones** | `nivel_registro = 4`, `date_first_investment`, `monto_primera_inversion` |

El evento de nivel 4 se envía **una sola vez**.

🔴 **Bug conocido:** hay cuentas activas con varios Deals que no llegan a nivel 4. Debe corregirse (INV-03).
🔴 **Anomalía:** la app parece escribir Nivel 3 directo sin pasar por Nivel 2, lo que distorsiona el reporte de embudo (PLAN-012, PLAN-024).

---

## Las etapas del pipeline

| Etapa | Objetivo | Responsable |
|---|---|---|
| **Perfil Activo** | Activar el perfil y empujar hacia la primera inversión eliminando fricciones del KYC | A.A.I. |
| **Inversionista Activo** | Convertir la cuenta STP activa en primera inversión y mantener reinversión frecuente | A.A.I. |
| **Congelado** | Documentar la inactividad e intentar reactivación | A.A.I. |
| **Cierre** | Registrar el cierre de la campaña, comunicar el resultado y empujar la reinversión de saldos liberados | A.A.I. |

---

## Las 14 decisiones canónicas (INV-01 a INV-14)

Del Maestro Operativo del 2026-07-31. **Esta sección sustituye cualquier documento anterior que la contradiga.**

| ID | Decisión |
|---|---|
| **INV-01** | Cupo de marketing **conjunto** Solicitantes + Inversionistas: máximo 7,000 contactos al mes. Toda alta debe desclasificarse el mes siguiente |
| **INV-02** | Cuenta, contraseña, KYC y CLABE solo en app/web Monific. El formulario HubSpot capta interés de marketing |
| **INV-03** | `nivel_registro` gobierna. Nivel 4 solo con primera compra confirmada. `state`/`estatus_conversion` es espejo o se retira. Corregir el bug de cuentas activas que no llegan a nivel 4 |
| **INV-04** | Al activarse STP se crea o actualiza **un solo Negocio de onboarding** por `monific_user_id`. Niveles 1–3 reciben seguimiento A.A.I. |
| **INV-05** | `current_account_balance` ≥ $1,000 genera recordatorio para invertir; si hay intención clara, tarea A.A.I. **No** cambia por sí solo a nivel 4 ni define plazo de congelado |
| **INV-06** | Una persona = un Contacto. Una relación = un onboarding. Cada PURCHASE/SOLD/LIQUIDATION = un movimiento separado por `move_id`. Proyecto conecta. **No existe Deal padre de campaña** |
| **INV-07** | Si no hay inversiones activas pero hay saldo positivo, el onboarding permanece **Activo** |
| **INV-08** | Pagos y rendimientos quedan **fuera de HubSpot**, bajo operación manual de Monific. Solo la cartera totalmente liquidada inicia seguimiento hasta la siguiente compra |
| **INV-09** | La reinversión es una compra normal. HubSpot infiere reactivación por el estado previo y **no duplica** el onboarding |
| **INV-10** | Mercado secundario: además de `move_id` debe enviarse el identificador real de la posición/movimiento original del Admin. ⚠️ Su nombre técnico está pendiente de TI |
| **INV-11** | Retiros y UNE quedan **fuera** del ciclo de Inversionistas. No crear tickets de retiro ni mezclar UNE |
| **INV-12** | **Congelado.** Regla A: 15 días sin depósito después de STP. Regla B: cero inversiones activas + saldo 0 + 90 días sin actividad. **Nunca** congelar solo por no hacer login si hay inversiones activas. Una nueva compra reactiva. `motivo_congelado` es dropdown |
| **INV-13** | **Cierres.** Movimiento cierra por SOLD/LIQUIDATION · Proyecto por fin de campaña/proyecto · onboarding solo por baja definitiva. Liquidación total inicia seguimiento, no cierre de relación |
| **INV-14** | **WF-028 y WF-037 deben apagarse.** WF-039 (`1808890376`) tiene trigger y campos erróneos. WF-040 (`1808818002`) es comunicación al titular. Los cuatro permanecen OFF hasta corrección y aceptación |

⚠️ **INV-12 contradice el master.** El master de Inversionistas define Congelado como *"no ha realizado ninguna inversión activa en los últimos 90 días"*, sin las dos reglas A/B ni la salvaguarda del login. Prevalece INV-12. → [[Contradicciones y Verificaciones]]

---

## Cómo se representan las inversiones

Cada movimiento es un Negocio separado en el pipeline **Inversiones** (`708176204`):

| `move_type` | Etapa | Nombre del Negocio |
|---|---|---|
| `PURCHASE` | `1035451748` — Inversión activa | "Inversión de maria@email.com en Torre Polanco" |
| `SOLD` | `1059885878` — Venta | "Venta de pedro@email.com en Torre Polanco" |
| `LIQUIDATION` | `1319443839` — Liquidación | "Liquidación de ana@email.com en Torre Polanco" |

El mercado secundario usa el pipeline "Default", etapa `1056454416`.

Clave de deduplicación: **`move_id`**. Asociación al Proyecto: **`numero_de_proyecto`**.

→ [[Reglas de Negocio API]] · [[Modelo de Datos HubSpot]]

---

## Los workflows

| Rango | Cubre | Estado |
|---|---|---|
| WF-025 – WF-030 | Etapa Perfil | 🟡 5 pendientes · 🔴 WF-028 con error (debe apagarse) |
| WF-031 – WF-035 | Etapa Activo | 🟡 3 pendientes · 🔴 WF-034, WF-035 con error |
| WF-036 – WF-038 | Etapa Congelado | 🟡 2 pendientes · 🔴 WF-037 con error (debe apagarse) |
| WF-039 – WF-040 | Etapa Cierre | 🔴 WF-039 con error · 🟡 WF-040 pendiente |

Tablero completo en [[Workflows]].

🔴 **Hallazgo de la auditoría de comunicaciones:** WF-065 a WF-069 ejecutan solo `set_property`; **el inversionista no recibe ningún mensaje en las 5 etapas de cierre**.

---

## Propiedades del proceso

**Contacto (creación):** Estatus de conversión · Tipo de Cliente · Canal de entrada · Fuente de Lead · Código referido · Nombre de Broker

**Negocio — Perfil Activo:** Nivel de Registro · Fecha de registro · CLABE STP · Propietario · Fecha de creación de Negocio

**Negocio — Inversionista Activo:** Fecha de primera inversión · Monto de primera inversión · Saldo disponible · Fecha de inicio de campaña · Fecha de cierre de campaña · Fecha de última actividad

**Negocio — Congelado:** Fecha de congelado · Fecha de reactivación · Motivo de congelado

**Negocio — Cierre:** Estatus de última campaña · Fecha de cierre · Monto total recibido · Saldo disponible

**Propiedades financieras de Contacto que llegan por batch nocturno:** `current_account_balance` (01:00) · `invested_balance` (02:00) · `account_value` (03:00) · `current_profit` (03:00). 🔴 Ninguna existía en HubSpot al 2026-06-17.

→ [[Propiedades]] · [[Diccionario de Propiedades API]]

---

## El embudo de marketing que pidió el cliente

Detalle completo en [[Buyer Persona Inversionista]]. Resumen del estado:

| Fase del embudo | Automatización pedida | Estado |
|---|---|---|
| Registro simple | Nurture email + WhatsApp, lead scoring, etiquetado | 🔴 0 de 15 comunicaciones INV activas |
| Perfil en proceso | Emails dinámicos por paso KYC, alerta a las 48 h | 🔴 |
| Cuenta STP activa | Flujos de activación, WhatsApp a los 7 días sin invertir | 🔴 |
| Inversionista activo | Fidelización, segmentación, referidos en la 2ª inversión | 🔴 |

**Todo el journey está condicionado a la integración** (fase F5 del Gantt, tentativa para el 2026-08-24).

---

## Relacionado

- [[Buyer Persona Inversionista]] — quién es
- [[Reglas de Negocio API]] — cómo llegan los datos
- [[Workflows]] · [[Pipelines]] · [[Propiedades]]
- [[Matriz de Comunicaciones]] — las 15 comunicaciones INV
- [[Plan de Cierre y Gantt]] — la fase F5

## Fuentes

- `D167` — Maestro Operativo (2026-07-31): fichas WF-025 a WF-040 y actualización canónica INV-01 a INV-14
- `X012` — Master de Implementación Proceso Comercial
- `X018` — Documento API de Integración: reglas 1–19, pipelines e IDs de etapa
- `D193` — Brief de Necesidades, sección 3.1
- `X021` — Auditoría de comunicaciones (WF-065 a WF-069)
