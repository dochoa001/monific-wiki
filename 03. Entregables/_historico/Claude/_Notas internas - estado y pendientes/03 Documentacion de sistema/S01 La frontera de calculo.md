# S01 · La frontera de cálculo

> **Para quién:** todo el equipo, y obligatorio para TI y para quien administre el portal.
> **Por qué es el artículo más rentable de esta base:** un artículo corto que previene desconfianza en el dato en **tres procesos a la vez**.

---

## La regla, en una línea

> **Admin Monific calcula. HubSpot registra, orquesta y deja trazabilidad.**

HubSpot **no inventa montos, no calcula saldos, no calcula fechas y no cuenta días hábiles**. Todo llega resuelto por API.

---

## Por qué existe esta frontera

No es una preferencia de diseño: es una **limitación de la suscripción**.

> La suscripción actual **no incluye entorno de código ni cálculos avanzados** dentro de HubSpot. No hay Data Hub ni acciones de código personalizadas.

Confirmado en la sesión técnica del 2026-08-04. Ver **S07 · Lo que el portal no puede hacer**.

---

## Qué calcula cada quién

| Dato | ¿Quién lo calcula? | Qué hace HubSpot |
|---|---|---|
| **Días de mora** | Admin Monific | Los muestra |
| **Saldos, montos, deuda, saldo insoluto** | Admin Monific | Los muestra |
| **Calendario de pagos y tabla de cuotas** | Admin Monific | La muestra |
| **Fecha del próximo recordatorio** | Admin Monific (regla 29) | Dispara el workflow en la fecha ya calculada |
| **Estado de pago** (al corriente / mora temprana / moderada / grave) | Admin Monific | Lo muestra y lo usa como condición |
| **Nivel de registro 1 a 4** | Admin Monific | Lo muestra y lo usa como condición |
| **CLABE STP** | STP → Admin | La muestra |
| **Folio UNE y 30 días hábiles** | 🔴 **Sin decidir** | No puede — ver abajo |
| **Folio de ticket TI** | 🔴 **Sin decidir** | No puede generar series |
| — | — | — |
| **Etapa del pipeline** | **HubSpot** | La mueve según reglas |
| **Asignación de propietario** | **HubSpot** | Round-robin, según horario |
| **Tareas y recordatorios** | **HubSpot** | Los crea y los vence |
| **Comunicaciones aprobadas** | **HubSpot** | Las envía |
| **Tiempo de primera respuesta y de resolución** | **HubSpot** | Los cronometra |
| **Trazabilidad e historial** | **HubSpot** | Lo guarda |

---

## La consecuencia práctica: qué hacer cuando un dato no cuadra

Esta es la parte que hay que enseñar en las tres áreas.

```
Un número no coincide con lo que esperabas
        │
        ├── ¿Es un monto, un saldo, una fecha o días de mora?
        │        │
        │        └── SÍ ──► El problema está en ADMIN MONIFIC
        │                    · No lo corrijas en HubSpot: se va a sobrescribir
        │                    · Reporta a TI por Notion
        │                    · Adjunta el historial de la propiedad (ver P09)
        │
        └── ¿Es una etapa, una tarea, una asignación o un correo?
                 │
                 └── SÍ ──► El problema está en HUBSPOT
                             · Reporta al administrador del portal
```

**La razón de no corregirlo a mano:** la siguiente sincronización sobrescribe tu corrección con el mismo valor equivocado. En el intervalo, dos sistemas dicen cosas distintas — que es peor que uno diciendo algo equivocado de forma consistente.

---

## Por qué esto importa tanto en Monific

Sin esta frontera clara, pasa lo siguiente, y ya pasó:

1. Alguien ve un dato raro, lo corrige en HubSpot y **se sobrescribe**.
2. Concluye que "el CRM está mal".
3. Empieza a desconfiar de **todos** los datos, no solo de ese.
4. Vuelve a operar con su hoja de cálculo paralela.

Ese es el mecanismo exacto por el que una implementación de CRM se abandona. Y aquí es especialmente probable, porque **cobranza sustituye a Moonflow** y el equipo tiene un sistema anterior al que volver.

---

## Cómo llegan los datos

| Modo | Cuándo | Ejemplos |
|---|---|---|
| **Tiempo real** | Eventos del ciclo de vida | Creación de contacto, avance de nivel, alta de ticket de cobranza, registro de pago |
| **Batch nocturno** | Datos que cambian continuamente | **01:00** saldo disponible · **02:00** dinero invertido · **03:00** valor de cuenta y ganado actual · **12:00 AM** movimientos de inversión |
| **Batch manual o programado** | Catálogos | Empresas, representantes legales, proyectos |
| **Reconciliación** | Red de seguridad | Reprocesa lo que falló en tiempo real |

⚠️ **Consecuencia operativa del batch nocturno:** los saldos que ves durante el día son **los del corte de la madrugada**. Si un inversionista depositó a las 11:00, su saldo en HubSpot no lo refleja hasta el batch siguiente. **No le digas a un cliente que no depositó porque HubSpot no lo muestra.**

⚠️ El horario de 01:00 es **propuesta de B&O**, pendiente de validación técnica de Monific.

---

## La dirección del flujo

**Unidireccional: Admin Monific → HubSpot** (decisión D-02 del 2026-08-04).

**Dos únicas excepciones**, ambas del objeto Proyecto:

| Campo | Dirección | Por qué |
|---|---|---|
| `hs_object_id` | HubSpot → Monific | HubSpot lo genera; Monific lo guarda como referencia |
| `hs_createdate` | HubSpot → Monific | HubSpot registra la fecha de creación |

**No se contempla, por ahora, que HubSpot actualice el Admin de Monific.**

---

## 🔴 Los dos huecos de la frontera

Hay dos cosas que **nadie calcula hoy**, porque HubSpot no puede y no se ha decidido que las haga el Admin:

| Hueco | Impacto |
|---|---|
| **Folio UNE + 30 días hábiles** | Proceso regulatorio. Ver **A06** y **P08** |
| **Folio de ticket TI con consecutivo** | Sin él no se cruza HubSpot con Notion. Ver **P06** |

**La salida coherente para ambos es la misma:** que el Admin los calcule y los envíe, igual que hace con `fecha_proximo_recordatorio` en la regla 29 de cobranza. Es la única opción que respeta la frontera. La alternativa —usar el ID nativo del ticket y aproximar los días— **no cumple el plazo hábil real**.

---

## Estado y verificación

**Estado:** ✅ doctrina cerrada · 2026-08-18
**Fuente:** Documento API de Integración Unificado (reglas 21–24 y 29); minutas del 2026-07-27, 2026-08-04 (decisiones D-01 a D-08) y 2026-06-29; Maestro Operativo (2026-07-31).

**Falta para publicar:**

1. Confirmar el horario definitivo de los batches nocturnos (acción A-06).
2. Cerrar la decisión sobre folio UNE y folio TI.
3. Validación escrita de Monific.

**Nota:** este artículo es la base conceptual de **A02**, **A05**, **P09** y de las cinco rutas de incorporación. Conviene publicarlo temprano, aunque los dos huecos sigan abiertos — que existan los huecos es parte de lo que hay que saber.
