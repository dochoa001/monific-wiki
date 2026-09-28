---
titulo: Higiene y Accesos
tipo: concepto
area: transversal
estado: en-riesgo
confianza: alta
actualizado: 2026-08-31
fuentes: [X001, X002, X021, X020, D167]
tags: [hubspot, seguridad, accesos, limpieza]
---

# Higiene y Accesos

> **En una frase:** la deuda técnica y de seguridad del portal — apps con permisos de más, usuarios que ya no deberían estar, y flujos productivos que escriben a correos personales del proveedor.

Tres bloques del requerimiento tocan esta página: **B11** (higiene nativa), **B14** (segregación de ARI) y **B16** (destinatarios y tokens).

---

## ⚠️ Dos cosas distintas que se llaman "token"

Se confunden con facilidad y viven en bloques diferentes. La distinción importa porque una es un problema de **redacción** y la otra de **seguridad**.

| | **Tokens HubL** | **Tokens de acceso (claves)** |
|---|---|---|
| **Qué son** | Campos de personalización `{{ }}` dentro de correos y notificaciones | Credenciales de las apps privadas que leen y escriben en el portal |
| **Bloque** | **B16** | **B11** |
| **El problema** | Sin resolver en WF-010, WF-055, WF-058, WF-061 y WF-064: el destinatario ve el token en crudo. Caso extremo: **WF-053** con `{{sequenceId}}` y `{{senderType}}` sin resolver, lo que impide que el workflow se ejecute | `Migracion-monific` legacy con token **activo**, y `trama1-monific` con scopes `highly_sensitive` sin uso documentado |
| **Cómo se acredita** | Búsqueda con **cero coincidencias** + prueba de render/envío | Captura de baja, revocación y memo de Compliance |
| **Riesgo** | Comunicación mal formada al cliente final | Superficie de ataque y acceso a datos sensibles en entidad supervisada por CNBV |

🔵 **Corte 2026-08-31:** con las 81 comunicaciones declaradas publicadas e integradas, es probable que los tokens HubL se hayan corregido de paso. **Sin verificar.** Los tokens de acceso son otro tema y **no han cambiado**.

---

## Apps privadas

| App | ID | Estado | Acción requerida |
|---|---|---|---|
| **`trama1-monific`** | `10092461` | ✅ Vigente — es la integración productiva | Mantener. Atender "Actualización disponible" (migración a la nueva plataforma de apps de HubSpot) de forma planificada |
| **`Migracion-monific`** | `12753166` | 🔴 **Legacy con token de acceso activo** | Desactivar en Settings → Private Apps y **revocar el token**. Antes: TI Monific confirma con `grep` en repositorios y entornos productivos que no hay dependencias. Después: memo formal de Compliance documentando fecha de baja, revocación y ausencia de dependencias |

Acciones: PLAN-001, PLAN-005, PLAN-011.

### Scopes a revocar en `trama1-monific`

Token identificado como `pat-na1-9af48**` (⚠️ nunca copiar tokens completos a la wiki).

**Revocar:**
- `export-import` — la integración usa upserts individuales, no export masivo
- `crm.objects.users.write` — no se usa
- Todos los scopes `highly_sensitive` sin uso documentado: `crm.objects.deals.highly_sensitive.read`, `crm.objects.contacts.sensitive.read`, `crm.objects.companies.highly_sensitive.read`

**Mantener:** `crm.objects.{contacts,companies,deals}` en lectura/escritura estándar.

Validar que la integración siga funcionando con scopes `sensitive` (no `highly_sensitive`). Si B&O necesita alguno después, debe justificarlo por escrito.

Acciones: PLAN-004, PLAN-019, PLAN-028, PLAN-043.

---

## Usuarios y accesos

🔴 Hallazgo de la auditoría por API (2026-06-17):

> *"Accesos activos no regularizados: aún existen usuarios de BNO y usuarios externos con acceso a la cuenta."*

Se debe hacer un inventario y depuración de usuarios del portal antes del cierre del proyecto. No hay evidencia de que se haya ejecutado.

---

## 🔴 Destinatarios personales de B&O en flujos productivos

Detectado en la auditoría de comunicaciones:

| Destinatario | Nodos |
|---|---|
| David Ochoa (B&O) | 3 |
| Caroline Bersot (B&O — **ya no trabaja en la empresa**) | 2 |
| Equipo Legal compartido con ARI | 2 |

**Bloque B16** (+15 días hábiles):
> Retirar destinatarios personales de B&O, usar roles internos y corregir tokens HubL.
> **Evidencia:** export antes/después, búsqueda con cero coincidencias y pruebas de render/envío.
> **Criterio:** cero nodos a personal de B&O, cero tokens sin resolver.
> **Riesgo:** exposición de información y dependencia del proveedor.

Es el ejemplo más gráfico del riesgo: **una persona que ya no está en la empresa proveedora sigue recibiendo correos de flujos productivos del cliente regulado.**

---

## 🔴 Segregación de ARI

**Bloque B14** (+15 días hábiles):

> Crear equipo dedicado, retirar ARI de Legal y limitar notificaciones a los nodos pactados.
> **Evidencia:** membresías, visibilidad y destinatarios antes/después.
> **Criterio:** ARI sin acceso al pipeline interno; solo notificaciones pactadas.
> **Riesgo:** visibilidad cruzada y riesgo de confidencialidad/regulatorio.

Equipo actual en HubSpot: "Legal externo/ARI", ID `87069491`.

⚠️ La auditoría menciona *"equipo Legal compartido con ARI (Fulmentfi)"*. No queda claro si Fulmentfi es la razón social de ARI o una tercera entidad. → [[Contradicciones y Verificaciones]]

→ [[Marco Regulatorio]] · [[Roles Operativos]]

---

## 🔴 Limpieza de propiedades

**383 de las 402 propiedades de Negocio están vacías.**

**Bloque B11** (+20 días hábiles):
> Consolidar pipelines, crear association label e **inventariar 383 propiedades antes de archivar**.
> **Criterio:** ningún campo usado se archiva; pipelines y asociación normalizados.
> **Evidencia:** export antes/después, inventario, impacto y **plan de reversa**.

El inventario debe incluir por cada propiedad: nombre, internal name, ¿se usa en workflow activo?, ¿se usa en reporte?, ¿la escribe `trama1`?

Acciones relacionadas:
- PLAN-036 — consolidar los 5 pipelines de Negocio a uno de Mercado Primario
- PLAN-015 — crear el **association label** "Representante Legal" entre Empresa y Contacto
- PLAN-010 / PLAN-040 — racionalizar las 17 propiedades de monto solapadas
- PLAN-032 — archivar `nombre_completo_`
- PLAN-002 / PLAN-056 — normalizar el catálogo de `nombre_de_proyecto` (172 opciones con duplicados por tildes)

→ [[Propiedades]] · [[Pipelines]]

---

## Errores recurrentes en el log

| Hallazgo | Problema | Corrección |
|---|---|---|
| APP-003 / APP-017 / APP-044 | `POST .../groups` intenta crear grupos de propiedades **en cada corrida** | Hacerlo idempotente: `GET` antes de `POST`, o mover la creación a un setup único |
| APP-006 / APP-018 | `POST /crm-search-public/v3/companies/search` envía filtro sobre `name` con valor **vacío** | Validar antes de armar el body u omitir el filtro. **Impacta directamente la asociación empresa-contacto** |
| APP-038 | `POST /deals` → **400** por dropdown `nombre_de_proyecto` | Enviar por `internalValue` en todos los dropdowns. Reprocesar ~1,125 deals |
| APP-027 | Errores **409** por duplicados de contacto | Implementar **upsert por email**: buscar primero y hacer `PATCH`; reservar `POST` solo si no existe |

---

## Resumen del Plan Único de Corrección

Versión 3 del 2026-06-13 · **51 acciones vigentes**:

| Responsable | Total | P0 | P1 | P2/P3 |
|---|---|---|---|---|
| Monific – TI | 27 | 2 | 10 | 15 |
| BNO – Arquitectura | 6 | 1 | 5 | 0 |
| Sin asignar | 6 | 1 | 0 | 5 |
| Compartido (BNO define + TI ejecuta) | 5 | 1 | 1 | 3 |
| BNO – Implementación HubSpot | 5 | 0 | 1 | 4 |
| Monific – Raquel | 2 | 1 | 0 | 1 |
| **TOTAL** | **51** | **6** | **17** | **28** |

⚠️ Dato relevante para el conflicto: **más de la mitad de las acciones del Plan Único (27 de 51) son responsabilidad de TI de Monific**, no de B&O. Esa distribución convive con los 217 pendientes exigibles a B&O del requerimiento formal — son dos listas con criterios distintos. → [[Contradicciones y Verificaciones]]

---

## Relacionado

- [[Propiedades]] · [[Pipelines]] · [[Portal HubSpot]]
- [[Integracion Admin Monific HubSpot]] — la app `trama1`
- [[Marco Regulatorio]] — por qué la segregación de ARI es regulatoria
- [[Bloques de Cierre B01-B16]] — bloques B11, B14, B16

## Fuentes

- `X001` — Plan Único de Corrección v3 (2026-06-13): 51 acciones PLAN-001 a PLAN-057
- `X002` — Matriz Única de Hallazgos: hojas "Acceso y config (API)" y "Auditoría API 17-jun"
- `X021` — Auditoría de comunicaciones: destinatarios externos
- `X020` — Requerimiento Formal: bloques B11, B14, B16
- `D167` — Maestro Operativo, fuente F07
