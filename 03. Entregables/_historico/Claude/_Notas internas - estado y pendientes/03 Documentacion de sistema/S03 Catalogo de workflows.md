# S03 · Catálogo de workflows

> **Para quién:** administrador del portal.
> **Por qué es crítico:** hay **96 workflows en el portal** y la relación con los numerados del master **no es evidente**. Sin este catálogo, nadie puede saber qué se dispara al mover un registro — y eso hace que cualquier cambio sea a ciegas.

---

## La regla de lectura, antes que nada

> **"ON/OFF" es el estado observado en el inventario. NO es el estado de validación.**
> Estar encendido, tener captura o aparecer en el inventario **no cierra nada**.

| Estado | Significa | Qué falta |
|---|---|---|
| ✅ **Verificado** | Configuración, prueba y resultado coinciden con lo acordado | Nada |
| 🟡 **Pendiente** | Existe o está documentado, pero falta prueba, validación o ajuste menor | Evidencia reproducible + validación de Monific |
| 🔴 **Con errores** | Contradicción, limitante, nombre distinto, configuración riesgosa o ausencia | Corregir/sustituir + probar + validar |

---

## El corte al 2026-07-31

| Universo | Total | ✅ | 🟡 | 🔴 |
|---|---|---|---|---|
| Solicitantes (WF-001 – 024) | 24 | **0** | 17 | 7 |
| Inversionistas (WF-025 – 040) | 16 | **0** | 13 | 3 |
| Servicio (WF-041 – 049) | 9 | **0** | 9 | 0 |
| Cobranza (WF-050 – 064) | 15 | **0** | 2 | 13 |
| UNE (UNE-01 – 06) | 6 | **0** | 0 | 6 |
| **TOTAL** | **70** | **0** | **41** | **29** |

**Cero workflows verificados.**

⚠️ Matiz importante: **no todos los 29 rojos acreditan un defecto.** Seis están marcados por no haber sido localizados en la auditoría, por estar ya resueltos, o por llevar la etiqueta *"(tentativo)"*. De los 29, B&O sostiene que **~10 son defectos de configuración propios**; el resto es limitación de plataforma, definición pendiente de Monific, o alcance nuevo. **Esa clasificación es postura de B&O y no está validada por el cliente.**

---

## 🔴 Los 32 workflows sin mapear

El portal contiene **96** workflows. Los masters numeran **64**. **32 no mapean a ningún master** y no están explicados en ningún documento.

**Requieren decisión: adoptar, archivar o eliminar.** Mientras tanto, son 32 automatizaciones que pueden dispararse sin que nadie sepa qué hacen.

De los 64 numerados, **59 coinciden exactamente por nombre** y **5 tienen diferencia de nombre**. El Maestro Operativo declara 5 pero **solo documenta 4**:

| ID | Nombre en el maestro | Nombre real en HubSpot | ID HubSpot |
|---|---|---|---|
| WF-004 | `… Nº 04 \| Enviar secuencia desde contacto \| V1` | `… + 15 días \| V1` | `1807994268` |
| WF-021 | `… Notificaciones internas al asesor \| V1` | `… Notificaciones a asesor asignado \| V1` | `1808816250` |
| WF-055 | `… Etapa 02 \| Nº 03 \| Recordatorios por vencimiento 15 \| V1` | `… Etapa 02 \| Nº 02 \| Recordatorios antes del 15 mes \| V1` | `1820860318` |
| WF-060 | `… Mover a cierre por Ejecución de garantía \| V1` | `… Mover a ejecución de garantía \| V1` | `1820907946` |

Corrección cosmética, de minutos. **La quinta diferencia no está identificada en ninguna ficha.**

---

## Tablero · Solicitantes

| ID | Nombre corto | HubSpot | Estado |
|---|---|---|---|
| WF-001 | Cambio de etapa a Evaluación | ON · `1808075841` | 🟡 |
| WF-002 | Tarea de creación de Drive | ON · `1807993705` | 🟡 |
| WF-003 | Actualizar estatus y enviar secuencia | ON · `1808076077` | 🔴 |
| WF-004 | Enviar secuencia desde contacto | ON · `1807994268` | 🔴 |
| WF-005 | Enviar requerimiento de documentación | ON · `1807927723` | 🟡 |
| WF-006 | Tareas internas para asesor | ON · `1808080923` | 🟡 |
| WF-007 | Enviar secuencia desde contacto + 2 días | OFF · `1809267363` | 🔴 |
| WF-008 | Cambio de etapa a Formalización | ON · `1807924876` | 🟡 **CON-021** |
| WF-009 | Cambio de etapa a perdido | ON · `1807927041` | 🟡 |
| WF-010 | Correo interno a involucrados | ON · `1808160659` | 🔴 **CON-026** |
| WF-011 | Correo interno a DG | ON · `1807927091` | 🔴 |
| WF-012 | Fijar fecha de decisión del comité | ON · `1807992844` | 🟡 |
| WF-013 | Tarea de carta de aceptación | ON · `1807930283` | 🟡 |
| WF-014 | Tarea de carta de rechazo | ON · `1808048197` | 🟡 **CON-037** |
| WF-015 | Cambio de etapa a proceso de firma | ON · `1808166282` | 🟡 |
| WF-016 | Notificación interna a involucrados | ON · `1808311603` | 🟡 |
| WF-017 | Notificación a superior por estancado | ON · `1808313453` | 🟡 |
| WF-018 | Cambio de etapa a ganado | ON · `1808711272` | 🟡 |
| WF-019 | Editar campo para secuencia | ON · `1808890551` | 🟡 |
| WF-020 | Enviar secuencia | ON · `1808682771` | 🔴 |
| WF-021 | Notificaciones al asesor | ON · `1808816250` | 🔴 |
| WF-022 | Enviar a perdido | ON · `1808890501` | 🟡 |
| WF-023 | Establecer fecha de cierre | ON · `1808853378` | 🟡 |
| WF-024 | Establecer propiedades de perdido | ON · `1808747845` | 🟡 |

**Los cuatro bugs con nombre:**

| Hallazgo | WF | Problema |
|---|---|---|
| **CON-021** | WF-008 | **Reinscripción apagada.** Si el comité aprueba después de entrar a Evaluación (el caso normal), el workflow nunca dispara y el negocio se atora |
| **CON-026** | WF-010 | La notificación al DG se envía a **todos los contactos asociados**, incluido el solicitante. **Filtración de comunicación interna al cliente** |
| **CON-037** | WF-014 | El master dice "Encendido"; HubSpot lo tiene **desactivado**. Las solicitudes rechazadas no generan tarea de carta de rechazo |
| **CON-061** | WF-027 | Valores *hardcoded*: `Nivel de registro = "3. Cuenta STP creada"` y `CLABE STP = 1` |

🔴 **Fuera del rango:** el formulario de alta y su workflow no están en WF-001 a WF-024 y siguen pendientes. Los workflows `1640673709`, `1832556831` y `1834467729` **no demuestran el recorrido completo de alta**.

---

## Tablero · Inversionistas

| ID | Nombre corto | HubSpot | Estado |
|---|---|---|---|
| WF-025 | Cambio de etapa a activo | ON · `1808818247` | 🟡 |
| WF-026 | Cambio de etapa a congelado | ON · `1808819073` | 🟡 |
| WF-027 | Actualizar propiedades de negocio | ON · `1808747892` | 🟡 **CON-061** |
| WF-028 | Notificar a cliente | ON · `1808892052` | 🔴 **debe apagarse** |
| WF-029 | Notificar a asesor en la asignación | ON · `1808890225` | 🟡 |
| WF-030 | Notificar a asesor de negocio estancado | ON · `1808890880` | 🟡 |
| WF-031 | Cambio de etapa a cierre | ON · `1808852539` | 🟡 |
| WF-032 | Cambio de etapa a congelado | ON · `1808890239` | 🟡 |
| WF-033 | Definir propiedades de inversión | ON · `1808890885` | 🟡 |
| WF-034 | Realizar envío de secuencia | OFF · `1808851292` | 🔴 |
| WF-035 | Actualizar datos de entrada en etapa | OFF · `1808852554` | 🔴 |
| WF-036 | Cambio de etapa a activo | ON · `1808815771` | 🟡 |
| WF-037 | Definir campos de entrada | ON · `1808817955` | 🔴 **debe apagarse** |
| WF-038 | Notificaciones de reactivación | OFF · `1808853523` | 🟡 |
| WF-039 | Notificaciones internas | OFF · `1808890376` | 🔴 **trigger y campos erróneos** |
| WF-040 | Notificaciones a cliente | OFF · `1808818002` | 🟡 **OFF hasta corrección** |

**Decisión INV-14:** WF-028 y WF-037 **deben apagarse**. WF-039 tiene trigger y campos erróneos. WF-040 es comunicación al titular. **Los cuatro permanecen OFF hasta corrección y aceptación.**

🔴 **WF-065 a WF-069** (fuera de la numeración canónica) ejecutan **solo `set_property`**: el inversionista **no recibe ningún mensaje en las 5 etapas de cierre**.

---

## Tablero · Servicio

| ID | Nombre corto | HubSpot | Estado |
|---|---|---|---|
| WF-041 | Asignar propietario de ticket | ON · `1822143749` | 🟡 |
| WF-042 | Notificación por SLA vencido | ON · `1822144532` | 🟡 |
| WF-043 | Mover ticket a atención | ON · `1822143856` | 🟡 |
| WF-044 | Definir primera respuesta | ON · `1822145171` | 🟡 |
| WF-045 | Tarea Tipo C | ON · `1822136840` | 🟡 ⚠️ *regla vacía* |
| WF-046 | Escalar a TI | ON · `1822136495` | 🟡 |
| WF-047 | Propiedades de entrada | ON · `1822136886` | 🟡 |
| WF-048 | Vencimiento 48 horas | ON · `1822137249` | 🟡 |
| WF-049 | Propiedades de entrada | ON · `1822136625` | 🟡 |

⭐ **Es el bloque en mejor estado: ningún error acreditado, las nueve observaciones son preventivas.** Por eso se propone como **el primer bloque a cerrar con evidencia**, para demostrar el método antes de entrar a Cobranza.

⚠️ **WF-045** tiene como regla de diseño la frase *"Implementado con validación"*, que es **texto de plantilla**. No se puede construir un caso de prueba contra ella.

---

## Tablero · Cobranza — el bloque más dañado

| ID | Nombre corto | HubSpot | Estado |
|---|---|---|---|
| WF-050 | Asignar propietario de cobranza | ON · `1820379477` | 🔴 |
| WF-051 | Enviar tarea de campaña RV | ON · `1820380176` | 🔴 |
| WF-052 | Cambio de etapa a cobranza activa | ON · `1820465005` | 🔴 |
| WF-053 | Recordatorios activos | OFF · `1820860306` | 🔴 **CON-104** |
| WF-054 | Recordatorios antes del 15 del mes | OFF · `1820860318` | 🔴 |
| WF-055 | Recordatorios por vencimiento 15 | OFF · `1820860318` | 🔴 ⚠️ **mismo ID que WF-054** |
| WF-056 | Cambio de etapa a liquidado | ON · `1820907893` | 🔴 |
| WF-057 | Cambio de etapa a ejecución | ON · `1820915286` | 🔴 |
| WF-058 | Propiedades de entrada | ON · `1820913996` | 🔴 |
| WF-059 | Mover a cierre por refinanciamiento | ON · `1820912802` | 🔴 **CON-109** |
| WF-060 | Mover a ejecución de garantía | ON · `1820907946` | 🔴 |
| WF-061 | Propiedades y notificaciones | ON · `1820908035` | 🔴 |
| WF-062 | Propiedades de entrada | ON · `1820906657` | 🔴 |
| WF-063 | Propiedades de entrada | ON · `1822135185` | 🟡 |
| WF-064 | Propiedades de entrada | ON · `1822086313` | 🟡 |

⚠️ **WF-054 y WF-055 comparten el ID `1820860318`.** O es error de transcripción o dos entradas apuntan al mismo workflow. **Verificar antes de tocar nada.**

**Los problemas concretos:**

| Hallazgo | Problema |
|---|---|
| **CON-104** | WF-053: la única acción es "inscribirse en una secuencia" con tokens **sin resolver**. **El workflow no puede ejecutarse.** Tampoco contempla WhatsApp, declarado obligatorio cuando el solicitante tiene teléfono |
| **CON-109** | WF-059: mueve a "Cierre por refinanciamiento" pero **solo cambia la propiedad**. No notifica a Compliance, Dirección ni Finanzas, no crea tarea de archivo, no genera el registro CNBV trazable |
| Cobranza preventiva rota | WF-053 y WF-054 sin identificador de secuencia. **El solicitante moroso no recibe recordatorios preventivos** |
| Ejecución sin aviso | WF-061: las tres comunicaciones son **internas**. Ningún nodo notifica al cliente sobre la ejecución de su garantía |
| Cierre por incumplimiento | WF-064: el cuerpo instruye "activar comunicación externa" pero **no contiene nodo de envío externo** |

---

## Tablero · UNE

| ID | Flujo | HubSpot | Estado |
|---|---|---|---|
| UNE-01 | Crear / registrar ticket UNE | **No acreditado** | 🔴 |
| UNE-02 | Definir folio y fechas regulatorias | No acreditado | 🔴 |
| UNE-03 | Acuse de recepción | No acreditado | 🔴 |
| UNE-04 | Tarea de dictamen | No acreditado | 🔴 |
| UNE-05 | Escalamiento por vencimiento | No acreditado | 🔴 |
| UNE-06 | Cierre con dictamen | No acreditado | 🔴 |

---

## Los bugs transversales

| Problema | Dónde | Impacto |
|---|---|---|
| **Tokens HubL sin resolver** | WF-010, WF-055, WF-058, WF-061, WF-064 | **No renderizan.** El destinatario ve el token en crudo |
| **Identificador de secuencia sin definir** | WF-053 y otros | **El workflow no puede ejecutarse** |
| **Destinatarios "todos los contactos asociados"** | WF-010 | Filtra comunicación interna al cliente |
| 🔴 **Destinatarios personales de B&O** | 3 nodos a una persona, 2 a otra **que ya no trabaja en la empresa** | Exposición y dependencia del proveedor. Ver **S06** |
| **Valores hardcoded** | WF-027 | Todos los negocios recibirían valores fijos |
| **Reinscripción apagada** | WF-008 | El negocio se atora |
| **Estado master ≠ estado HubSpot** | WF-014 y otros | El master dice una cosa, el portal otra |

---

## Qué se necesita para cerrar un workflow

Evidencia mínima por ficha:

1. **URL o ID** del workflow
2. **Export** posterior a la corrección
3. **Captura fechada** de trigger y acciones
4. **Caso de prueba** con dato de entrada, resultado esperado y resultado real
5. **Validación escrita de Monific**

⚠️ Limitante declarada: *"el historial de ejecución de cinco workflows críticos no estuvo disponible por la consulta API utilizada"*. Parte del "no verificado" es **límite de instrumentación de la auditoría**, no ausencia de configuración.

---

## Bloques de remediación

| Bloque | Alcance | Plazo |
|---|---|---|
| **B02** | Solicitantes: triggers, reinscripción, exclusión mutua, destinatarios, trazabilidad, fallback | +20 días hábiles |
| **B03** | Inversionistas: eliminar hardcodes y duplicados, corregir fondeo, cierre y destinatarios | +20 |
| **B04** | Servicio: round-robin, SLA humano, roles dinámicos, cierre con evidencia | +20 |
| **B05** | Cobranza: reimplementar el ciclo, resolver secuencias, trazabilidad jurídica | +25 |
| **B15** | Flujo UNE de punta a punta | +20 |
| **B16** | Destinatarios productivos de B&O y tokens HubL | +15 |

---

## Estado y verificación

**Estado:** 🟡 catálogo al corte del 2026-07-31 · 2026-08-18
**Fuente:** Maestro Operativo (2026-07-31), tablero y fichas de los 70 flujos; Matriz Única de Hallazgos, hojas *"WF estado real (96)"* y *"WF lógica (detalle API)"*; requerimiento formal; auditoría de comunicaciones; historial de cierre del 2026-08-03.

**Falta para publicar:**

1. **Resolver los 32 workflows sin mapear:** adoptar, archivar o eliminar, con decisión escrita.
2. Identificar la quinta diferencia de nombre.
3. Aclarar el ID compartido de WF-054 / WF-055.
4. Escribir la regla de diseño real de WF-045 y WF-059 — hoy es texto de plantilla.
5. Añadir, por cada workflow, **qué lo dispara y sobre qué objeto** — es lo que hace seguro el procedimiento **P04**.
6. Validación escrita de Monific.

**Formato final recomendado:** hoja de cálculo, no documento de texto.
