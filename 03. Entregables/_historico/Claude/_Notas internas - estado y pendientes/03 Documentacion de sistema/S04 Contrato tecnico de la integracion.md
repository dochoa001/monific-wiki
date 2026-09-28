# S04 · Contrato técnico de la integración

> **Para quién:** TI de Monific (Jesús Torres, Daniel Torres) y quien administre el portal.
> **Qué es:** el puente **Admin Monific → HubSpot**. Es la pieza que ha condicionado el proyecto desde mayo y que arrancó formalmente el 2026-08-04.
> **Por qué está en esta base:** el documento técnico ya existe. Lo que faltaba era dejarlo donde TI lo encuentre.

---

## La arquitectura, en cinco líneas

| Aspecto | Detalle |
|---|---|
| **Dirección** | **Unidireccional** Admin → HubSpot en la fase inicial (decisión D-02) |
| **Excepciones** | HubSpot → Monific solo para `hs_object_id` y `hs_createdate` del **Proyecto** |
| **Cliente** | **SDK oficial de HubSpot** en el repositorio de Monific. No es plugin ni conector de terceros |
| **Backend** | NestJS · base SQL · GitHub |
| **App privada** | `trama1-monific` (ID `10092461`) |
| **Quién desarrolla** | **TI de Monific.** B&O da especificación y soporte |

```
App Web / Mobile
      ↓
Admin Monific (NestJS + SQL)
      ↓  tiempo real  ·  batch nocturno
SDK oficial de HubSpot  ─ app privada trama1-monific ─►  Portal 48427391
                                                          Contactos · Empresas
                                                          Negocios · Tickets · Proyecto
                                                              │
                        hs_object_id  ◄──────────────────────┘
```

---

## Los cuatro modos de ejecución

| Modo | Cuándo | Ejemplos |
|---|---|---|
| **Tiempo real** | Eventos del ciclo de vida del usuario | Creación de contacto, avance de nivel, alta de ticket de cobranza, registro de pago |
| **Batch nocturno** | Datos que cambian de forma continua | **01:00** saldo disponible · **02:00** dinero invertido · **03:00** valor de cuenta y ganado actual · **12:00 AM** movimientos de inversión |
| **Batch manual o programado** | Catálogos | Empresas, representantes legales, proyectos de fondeo |
| **Reconciliación (fallback)** | Red de seguridad | `POST /hubspot/investors/deals/sync` reprocesa lo que falló en tiempo real |

⚠️ El horario de 01:00 es **propuesta de B&O**, pendiente de validación técnica de Monific (acción A-06). Objetivo: evitar saturación de llamadas API.

---

## Endpoints conocidos

| Endpoint | Qué hace |
|---|---|
| `POST /hubspot/developers/companies/sync` | Crear / actualizar Empresa desarrolladora |
| `POST /hubspot/developers/contacts/sync` | Sincronizar representante legal y asociarlo a la Empresa |
| `POST /hubspot/developers/deals/sync` | Sincronizar Proyectos de fondeo |
| `POST /hubspot/investors/deals/sync` | Reconciliación batch de inversiones (fallback) |

---

## Los mecanismos de robustez

| Mecanismo | Cómo funciona |
|---|---|
| **Idempotencia** | Claves externas: `move_id`, `numero_de_proyecto`, `id_campana`. Crear o actualizar **sin duplicar** |
| **Hash MD5** | Si los datos son idénticos al último envío, se hace **SKIP** |
| **Tolerancia a fallos** | *"Si HubSpot falla, el registro en la app Monific continúa."* El error se registra en el log del servidor |
| **Reintentos** | Los fallos de API se reintentan en el siguiente batch |
| **Reconciliación** | El batch de fallback detecta y corrige discrepancias, marcando `dedup=true` |
| **Trazabilidad** | `monific_last_synced_at` en cada sincronización — sirve además como **evidencia de frecuencia real ante CNBV** |
| **`technical_source`** | Se envía siempre como `"batch"` por código en los deals de inversión |

---

## Las asociaciones que hay que crear

| Asociación | Llave | Regla | Estado |
|---|---|---|---|
| Proyecto ↔ Negocio solicitante | `numero_de_proyecto` | 26 | 🔴 Pendiente |
| Proyecto ↔ Negocio inversionista | `numero_de_proyecto` — **no por nombre** | 27 | 🔴 Pendiente |
| Proyecto ↔ Empresa | `clave_desarrollador` | 28 | 🔴 Pendiente |
| Ticket ↔ Contacto, Negocio y Proyecto | `id_de_campana_financiamiento` + `id_del_proyecto` | 21 | 🔴 Pendiente |
| Empresa ↔ Contacto (representante legal) | `companyToContact` | 12 | 🔴 Falta el **association label** *"Representante Legal"* (bloque B11) |

⚠️ La regla 27 dice literalmente *"se asocia un proyecto al negocio por medio del `nombre_de_proyecto`"* en su columna de condición, pero la decisión final aclara *"no asociar por nombre; usar identificador estable"*. **Prevalece `numero_de_proyecto`.**

---

## Eventos del ciclo de vida de Cobranza

| Regla | Evento | Acción |
|---|---|---|
| **21** | Confirmación de la inversión efectiva | Crear Ticket de Cobranza y asociarlo a Contacto, Negocio solicitante y Proyecto. Etapa *Nuevo Registro* |
| **22** | Pago ordinario o parcial conciliado | Actualizar saldos. Permite que HubSpot **detenga la secuencia de recordatorios** al detectar la cuota cubierta |
| **23** | Última cuota y liquidación de capital | Saldos a 0, etapa *Campaña Liquidada*, notificaciones de liberación de garantía |
| **24** | Aprobación de refinanciamiento en comité | Mover a *Cierre por Refinanciamiento* y **crear un ticket nuevo** (ej. `FIN-001-REFIN`) |
| **29** | Programación de recordatorios | El backend calcula diariamente días hábiles y actualiza `fecha_proximo_recordatorio`. **El workflow nativo se activa en la fecha ya calculada** |

**La regla 29 es el patrón a replicar** para todo lo que HubSpot no puede calcular — incluidos el folio UNE y los 30 días hábiles. Ver **S01** y **A06**.

---

## 🔴 Los problemas en producción

Log del **2026-06-30 al 2026-07-29**:

| Métrica | Valor |
|---|---|
| Llamadas | **16,279** |
| Errores 4xx | **766** |
| Rechazos | **741**, concentrados en *valores de proyecto no admitidos* |

| Problema | Causa | Corrección |
|---|---|---|
| `POST /deals` → **400** | `nombre_de_proyecto` enviado **como etiqueta**, con inconsistencias UTF-8 en 172 opciones | Enviar `internalValue` en todos los dropdowns · normalizar catálogo · **reprocesar ~1,125 deals** |
| `POST /contacts` → **409** | Duplicados | Implementar **upsert por email**: buscar primero y hacer `PATCH`; reservar `POST` solo si no existe |
| `POST .../groups` recurrente | Crea grupos de propiedades **en cada corrida** | Hacerlo idempotente: `GET` antes de `POST`, o mover la creación a un setup único |
| Búsqueda de empresas falla | Filtro `name` con valor **vacío** | Validar antes de armar el body. **Impacta directamente la asociación empresa-contacto** |

---

## El gate técnico T1–T7

Antes de programar endpoints definitivos hay que cerrar siete puntos. Nacieron de un correo de Daniel Torres pidiendo diccionario, payloads, IDs, modelo, inconsistencias, aceptación y evidencia.

| ID | Qué | Dónde vive |
|---|---|---|
| **T1** | Diccionario canónico: etiqueta, internal name, objeto, tipo, **opciones internas**, fuente y obligación | **S02** |
| **T2** | Payload por evento: request, response, formato, nullability, zona horaria y ejemplo realista | Pendiente |
| **T3** | IDs reales: `objectTypeId`, `pipelineId`, `stageId`, `associationTypeId`/labels y registros de prueba | Parcial |
| **T4** | Inconsistencias corregidas: Deal de campaña vs. Proyecto, nombres, catálogos, estados y asociaciones | Pendiente |
| **T5** | Modelo confirmado: fuente de verdad, altas, actualizaciones, cardinalidad, deduplicación y huérfanos | Pendiente |
| **T6** | Casos de aceptación: positivo, negativo, duplicado, retry, reingreso, asociación, huérfano y catálogo | Pendiente |
| **T7** | Evidencia HubSpot: URL/ID, export y prueba — **no basta captura de existencia** | Pendiente |

🔴 **Ninguno está cerrado.** El bloque **B10** exige entregarlos, con criterio explícito: *"TI puede implementar sin reabrir discovery ni adivinar reglas."* Plazo: +15 días hábiles.

### IDs conocidos

| Pipeline | ID | Etapas conocidas |
|---|---|---|
| **Inversiones** | `708176204` | Inversión activa `1035451748` · Venta `1059885878` · Liquidación `1319443839` |
| **Default** | — | Mercado secundario `1056454416` |
| Solicitantes, Cobranza, Atención, UNE | — | 🔴 IDs pendientes (gate T3) |

---

## Riesgos declarados

| Riesgo | Prob. | Impacto | Control |
|---|---|---|---|
| Nombres internos o valores de dropdown distintos entre sistemas | Media | Alto | Validar matriz de equivalencias antes de desarrollar; congelar identificadores aprobados |
| **Propiedades duplicadas o históricas con usos distintos** | **Alta** | Alto | Inventario, propietario de dato y regla de consolidación antes de sincronizar |
| Asociaciones incorrectas por IDs | Media | Alto | Definir llaves únicas y pruebas de asociación |
| Carga excesiva o límites de API | Media | Medio/Alto | Lotes, horario de baja demanda, reintentos y log |
| **Ausencia de entorno de código en HubSpot** | **Confirmada** | Alto | Lógica externa con monitoreo y trazabilidad |
| Reglas comerciales no comprendidas por desarrollo | Media | Alto | Compartir diagramas y hacer sesión funcional |

---

## Contexto que conviene conocer

**Sí hubo integración funcionando.** Desde el **2026-03-09** existe una integración operativa que sincroniza registro, compra y venta de participaciones, construida por TI de Monific, con resincronización histórica al 8 de marzo.

Lo pendiente es **la ampliación**: incorporar los objetos **Ticket** y **Proyecto**, las propiedades financieras de Contacto y las 30 reglas del contrato técnico.

**Por qué tardó:** B&O nunca tuvo acceso al código porque **una auditoría de la CNBV obligaba a Monific a certificar el acceso a terceros antes de otorgarlo**. No fue desidia ni negativa arbitraria: fue una restricción regulatoria. Desde el 2026-06-08, B&O opera en **modelo de asesoría técnica** — orienta pero no manipula el código; Monific conserva el control de accesos, repositorios, despliegues y ejecución técnica.

---

## Estado y verificación

**Estado:** 🟡 gate T1–T7 abierto · 2026-08-18
**Fuente:** Documento API de Integración Unificado (el contrato técnico); minuta del 2026-08-04 (decisiones D-01 a D-08, plan A-01 a A-08, riesgos); minutas del 2026-07-27, 2026-06-29, 2026-06-16 y 2026-06-08; Maestro Operativo (gate T1–T7); log de integración jun–jul 2026; requerimiento formal, bloque B10.

**Falta para publicar:**

1. Cerrar los siete puntos del gate T1–T7.
2. Confirmar horario y periodicidad de los batches (acción A-06).
3. Corregir los cuatro errores del log en producción.
4. Crear el association label *"Representante Legal"*.
5. Validación escrita de Monific.

**Nota:** el documento técnico completo existe. Este artículo es **el índice y el resumen ejecutable**, no un sustituto — su función es que TI encuentre el contrato y sepa qué falta de él.
