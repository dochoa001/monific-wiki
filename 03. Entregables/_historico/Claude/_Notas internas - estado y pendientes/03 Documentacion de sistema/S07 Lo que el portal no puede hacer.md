# S07 · Lo que el portal no puede hacer

> **Para quién:** todo el equipo, y especialmente quien pida funcionalidades nuevas.
> **Por qué existe:** para que no se vuelva a pedir lo que ya se sabe que no se puede, y para que se entienda por qué varias cosas llegan por API en vez de resolverse dentro de HubSpot.

---

## La ficha del portal

| | |
|---|---|
| **Portal ID** | **48427391** |
| Alojamiento de datos | `na1` |
| Hubs activos | Marketing, Sales y Service — **todos Professional** |
| Créditos HubSpot incluidos | 3,000 |
| Objetos personalizados | **0** |

---

## La restricción de fondo

> La suscripción actual **no incluye entorno de código ni cálculos avanzados** dentro de HubSpot: **no hay Data Hub ni acciones de código personalizadas**.

Confirmado en la sesión técnica del 2026-08-04. Todo lo de abajo se deriva de aquí.

---

## Lo que NO puede hacer, y qué se hace en su lugar

| No puede | Por qué | Solución adoptada |
|---|---|---|
| **Calcular días hábiles** | Requiere lógica personalizada | El Admin calcula `fecha_proximo_recordatorio` y la envía ya resuelta (regla 29) |
| **Generar series de folios** (`UNE-2026-08-001`) | Requiere código | 🔴 **Sin decidir.** Afecta UNE y tickets TI |
| **Calcular montos, saldos, mora** | Es dato financiero de una IFC regulada | Los calcula el Admin |
| **Deduplicar, reintentar, orquestar** | Requiere lógica | Todo vive en el backend de Monific |
| **Ejecutar código personalizado en workflows** | No hay Operations/Data Hub | Lógica externa, con monitoreo y trazabilidad |
| **Asignar una tarea a un equipo** | Limitación del producto: las tareas van a **una persona** | Round-robin y reasignación manual. Ver **S06** |
| **Leer archivos de Google Drive** | No hay integración de contenido | HubSpot guarda **el link**. Las decisiones se toman con propiedades, no con archivos |

---

## Las tres consecuencias que más se sienten

### 1 · "HubSpot no lee Drive"

> *"Drive solo guarda documentos. Las decisiones se toman en HubSpot con propiedades, no con archivos."*

Por eso existe el **formulario puente**: el solicitante confirma que terminó de cargar sus documentos, y **ese formulario sí lo ve HubSpot**. Sin él, nadie sabría que el expediente está completo.

### 2 · Las tareas van a personas, no a equipos

HubSpot obliga a asignar tareas a **una persona**. Se acordó que no bloquea el avance, pero deja deuda operativa: **si Guillermo se va, hay que tocar workflows a mano**.

Se pidió a B&O proponer un mecanismo para identificar y actualizar asignaciones cuando haya movimientos de personal. El bloque **B04** exige implementar **round-robin** en el pipeline de Servicio.

### 3 · Los folios no se generan solos

Es el mismo problema en dos lugares — UNE y tickets TI — y en ambos hay documentos que prometen lo contrario. Ver **A06**, **P06** y **P08**.

---

## Lo que sí puede, y a veces se olvida

Para que la lista no quede sesgada:

- Mover etapas según condiciones
- Asignar por round-robin según horario activo
- Cronometrar SLAs
- Crear, vencer y escalar tareas
- Enviar correo y WhatsApp aprobados
- Guardar historial completo de cada propiedad
- Reportar sobre cualquier propiedad que exista

---

## Los límites de volumen

| Límite | Valor |
|---|---|
| **Contactos de marketing** | **7,000 al mes**, cupo **conjunto** Solicitantes + Inversionistas |
| Regla asociada (INV-01) | Toda alta de marketing debe **desclasificarse el mes siguiente** |

El cliente pidió automatizaciones que desuscriban contactos inactivos (> 90 días sin interacción) e inscriban nuevos leads activos, con control en tiempo real para no exceder el cupo.

⚠️ **Consecuencia práctica:** no uses listas de marketing para organizar tu trabajo diario. Usa **vistas guardadas** → **P02**.

---

## El estado real del portal, por si sirve de contexto

Snapshot por API del 2026-06-17:

| Indicador | Valor |
|---|---|
| Workflows totales | **96** — 57 activos, 39 apagados |
| Workflows que comunican al cliente | **9 (9 %)** |
| Propiedades totales | **2,142** |
| Propiedades esperadas por los masters | 177 |
| Propiedades de Negocio | 402 — de ellas **383 vacías** |
| Pipelines de Negocio | 5 |
| **Objetos personalizados** | **0** |

**Lectura:** no faltan campos en general — **hay exceso**. Lo que falta son los campos concretos que el diseño necesita, mientras el portal arrastra 383 propiedades muertas.

---

## Si alguien pide algo que está en esta lista

No es un "no". Son tres preguntas:

1. **¿Se puede resolver en el Admin y enviarlo por API?** Es la salida estándar y la que respeta la frontera de cálculo.
2. **¿Se puede aproximar con lo nativo?** A veces sí, aceptando una limitación explícita.
3. **¿Justifica contratar Data Hub?** Es una decisión económica abierta desde el 2026-07-27, no una imposibilidad.

---

## Estado y verificación

**Estado:** ✅ restricción confirmada · 2026-08-18
**Fuente:** minuta del 2026-08-04 (limitación de la suscripción); auditoría por API del portal 48427391 (2026-06-17); minuta del 2026-07-27; decisión INV-01; requerimiento formal, bloque B04.

**Falta para publicar:**

1. Confirmar los hubs y el nivel de licencia contra la factura vigente — las cifras de licenciamiento del brief son de 2025 y no están validadas contra facturas.
2. Validación escrita de Monific.
