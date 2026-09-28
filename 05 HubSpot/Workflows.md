---
titulo: Workflows
tipo: concepto
area: transversal
estado: en-riesgo
confianza: alta
actualizado: 2026-08-11
fuentes: [D167, X002, X011, X012, X013, X020, D198]
tags: [hubspot, workflows, automatizacion]
---

# Workflows

> **En una frase:** el tablero completo de los 64 workflows numerados y los 6 flujos UNE, con su ID real en HubSpot y su estado al corte del 2026-07-31.

---

## Regla de lectura — importante

> **"ON/OFF" es el estado observado en el inventario de HubSpot. NO es el estado de validación.**
> Estar encendido, tener captura o aparecer en el inventario **no cierra nada**. Solo se marca ✅ con caso reproducible y validación escrita de Monific.

| Estado | Significado | Qué falta |
|---|---|---|
| ✅ **Verificado** | Configuración, prueba y resultado coinciden con lo acordado | Nada |
| 🟡 **Pendiente** | Existe o está documentado, pero falta prueba, validación o ajuste menor | Evidencia reproducible + validación Monific |
| 🔴 **Con errores** | Contradicción, limitante, nombre distinto, configuración riesgosa o ausencia | Corregir/sustituir + probar + validar |

---

## Resultado del corte (2026-07-31)

| Universo | Total | ✅ Verde | 🟡 Amarillo | 🔴 Rojo |
|---|---|---|---|---|
| Solicitantes | 24 | **0** | 17 | 7 |
| Inversionistas | 16 | **0** | 13 | 3 |
| Servicio | 9 | **0** | 9 | 0 |
| Cobranza | 15 | **0** | 2 | 13 |
| UNE | 6 | **0** | 0 | 6 |
| **TOTAL** | **70** | **0** | **41** | **29** |

**Cero workflows verificados.**

Conciliación con el portal: el portal contiene **96 workflows** en total; **59 de los 64** numerados coinciden exactamente por nombre y **5 presentan diferencia de nombre**. → [[Contradicciones y Verificaciones]]

🔴 **32 workflows del portal no mapean a ningún máster** (96 − 64). No están explicados en ningún documento. Requieren decisión: adoptar, archivar o eliminar (`D198`, 2026-08-03).

### Los nombres desalineados

El Maestro Operativo **declara 5 diferencias de nombre pero solo documenta 4**. La quinta no está identificada en ninguna ficha.

| ID | Nombre en el maestro | Nombre real en HubSpot | ID HubSpot |
|---|---|---|---|
| WF-004 | `… Nº 04 \| Enviar secuencia desde contacto \| V1` | `… Nº 04 \| Enviar secuencia desde contacto + 15 días \| V1` | `1807994268` |
| WF-021 | `… Nº 04 \| Notificaciones internas al asesor \| V1` | `… Nº 04 \| Notificaciones a asesor asignado \| V1` | `1808816250` |
| WF-055 | `… Etapa 02 \| Nº 03 \| Recordatorios por vencimiento 15 \| V1` | `… Etapa 02 \| Nº 02 \| Recordatorios antes del 15 mes \| V1` | `1820860318` |
| WF-060 | `… Etapa 03 \| Nº 01 \| Mover a cierre por Ejecución de garantía \| V1` | `… Etapa 03 \| Nº 01 \| Mover a ejecución de garantía \| V1` | `1820907946` |

Corrección cosmética, de minutos. → [[Analisis de Cierre BNO]]

⚠️ **No todos los 29 rojos acreditan un defecto.** Seis están marcados por no haber sido localizados en la auditoría, por estar ya resueltos o por llevar la etiqueta *"(tentativo)"*. Y de los 29, B&O sostiene que **~10 son defectos de configuración propios**; el resto es plataforma, definición de Monific o alcance nuevo. → [[Analisis de Cierre BNO]]

---

## Tablero · Solicitantes (WF-001 – WF-024)

| ID | Nombre corto | HubSpot | Estatus |
|---|---|---|---|
| WF-001 | Cambio de etapa a Evaluación | ON · `1808075841` | 🟡 |
| WF-002 | Tarea de creación de Drive | ON · `1807993705` | 🟡 |
| WF-003 | Actualizar estatus y enviar secuencia | ON · `1808076077` | 🔴 |
| WF-004 | Enviar secuencia desde contacto | ON · `1807994268` | 🔴 |
| WF-005 | Enviar a solicitante requerimiento de documentación | ON · `1807927723` | 🟡 |
| WF-006 | Tareas internas para asesor | ON · `1808080923` | 🟡 |
| WF-007 | Enviar secuencia desde contacto + 2 días | OFF · `1809267363` | 🔴 |
| WF-008 | Cambio de etapa a Formalización | ON · `1807924876` | 🟡 **CON-021** |
| WF-009 | Cambio de etapa a perdido | ON · `1807927041` | 🟡 |
| WF-010 | Correo interno a involucrados y actualizar campos | ON · `1808160659` | 🔴 **CON-026** |
| WF-011 | Correo interno a DG | ON · `1807927091` | 🔴 |
| WF-012 | Fijar "Fecha de decisión del comité" | ON · `1807992844` | 🟡 |
| WF-013 | Crear tarea de la carta de aceptación | ON · `1807930283` | 🟡 |
| WF-014 | Crear tarea de la carta de rechazo | ON · `1808048197` | 🟡 **CON-037** |
| WF-015 | Cambio de etapa a proceso de firma | ON · `1808166282` | 🟡 |
| WF-016 | Notificación interna a involucrados | ON · `1808311603` | 🟡 |
| WF-017 | Notificación interna a superior estancado | ON · `1808313453` | 🟡 |
| WF-018 | Cambio de etapa a ganado | ON · `1808711272` | 🟡 |
| WF-019 | Editar campo para secuencia | ON · `1808890551` | 🟡 |
| WF-020 | Enviar secuencia | ON · `1808682771` | 🔴 |
| WF-021 | Notificaciones internas al asesor | ON · `1808816250` | 🔴 |
| WF-022 | Enviar a perdido | ON · `1808890501` | 🟡 |
| WF-023 | Establecer fecha de cierre | ON · `1808853378` | 🟡 |
| WF-024 | Establecer propiedades de perdido | ON · `1808747845` | 🟡 |

**Nota sobre WF-001 y WF-002:** ambos operan al inicio pero no hacen lo mismo. WF-001 cambia el Negocio a Evaluación; WF-002 crea la tarea para preparar la carpeta de Drive. El segundo aporta el expediente que el primero necesita para avanzar.

🔴 **Fuera del rango:** el formulario y su workflow de alta están fuera de WF-001 a WF-024 y siguen pendientes. Los workflows `1640673709`, `1832556831` y `1834467729` no demuestran el recorrido completo.

---

## Tablero · Inversionistas (WF-025 – WF-040)

| ID | Nombre corto | HubSpot | Estatus |
|---|---|---|---|
| WF-025 | Cambio de etapa a activo | ON · `1808818247` | 🟡 |
| WF-026 | Cambio de etapa a congelado | ON · `1808819073` | 🟡 |
| WF-027 | Actualizar propiedades de negocio | ON · `1808747892` | 🟡 **CON-061** (hardcodes) |
| WF-028 | Notificar a cliente | ON · `1808892052` | 🔴 **INV-14: debe apagarse** |
| WF-029 | Notificar a asesor en la asignación | ON · `1808890225` | 🟡 |
| WF-030 | Notificar a asesor de negocio estancado | ON · `1808890880` | 🟡 |
| WF-031 | Cambio de etapa a cierre | ON · `1808852539` | 🟡 |
| WF-032 | Cambio de etapa a congelado | ON · `1808890239` | 🟡 |
| WF-033 | Definir propiedades de inversión | ON · `1808890885` | 🟡 |
| WF-034 | Realizar envío de secuencia | OFF · `1808851292` | 🔴 |
| WF-035 | Actualizar datos de entrada en etapa | OFF · `1808852554` | 🔴 |
| WF-036 | Cambio de etapa a activo | ON · `1808815771` | 🟡 |
| WF-037 | Definir campos de entrada | ON · `1808817955` | 🔴 **INV-14: debe apagarse** |
| WF-038 | Notificaciones de reactivación | OFF · `1808853523` | 🟡 |
| WF-039 | Notificaciones internas | OFF · `1808890376` | 🔴 **INV-14: trigger y campos erróneos** |
| WF-040 | Notificaciones a cliente | OFF · `1808818002` | 🟡 **INV-14: comunicación al titular, OFF hasta corrección** |

🔴 **WF-065 a WF-069** (fuera de la numeración canónica) ejecutan solo `set_property`: el inversionista **no recibe ningún mensaje** en las 5 etapas de cierre.

---

## Tablero · Servicio (WF-041 – WF-049)

| ID | Nombre corto | HubSpot | Estatus |
|---|---|---|---|
| WF-041 | Asignar propietario de ticket | ON · `1822143749` | 🟡 |
| WF-042 | Notificación por SLA vencido | ON · `1822144532` | 🟡 |
| WF-043 | Mover ticket a atención | ON · `1822143856` | 🟡 |
| WF-044 | Definir primera respuesta | ON · `1822145171` | 🟡 |
| WF-045 | Tarea Tipo C | ON · `1822136840` | 🟡 *(master: "En duda")* ⚠️ regla de diseño vacía |
| WF-046 | Escalar a TI | ON · `1822136495` | 🟡 |
| WF-047 | Propiedades de entrada | ON · `1822136886` | 🟡 |
| WF-048 | Vencimiento 48 horas | ON · `1822137249` | 🟡 |
| WF-049 | Propiedades de entrada | ON · `1822136625` | 🟡 |

El bloque **en mejor estado**: sin errores acreditados, todos pendientes de prueba.

---

## Tablero · Cobranza (WF-050 – WF-064)

| ID | Nombre corto | HubSpot | Estatus |
|---|---|---|---|
| WF-050 | Asignar propietario de cobranza | ON · `1820379477` | 🔴 |
| WF-051 | Enviar tarea de campaña RV | ON · `1820380176` | 🔴 |
| WF-052 | Cambio de etapa a cobranza activa | ON · `1820465005` | 🔴 |
| WF-053 | Recordatorios activos | OFF · `1820860306` | 🔴 **CON-104: `sequenceId` sin resolver** |
| WF-054 | Recordatorios antes del 15 del mes | OFF · `1820860318` | 🔴 |
| WF-055 | Recordatorios por vencimiento 15 | OFF · `1820860318` | 🔴 ⚠️ **mismo ID que WF-054** |
| WF-056 | Cambio de etapa a liquidado | ON · `1820907893` | 🔴 |
| WF-057 | Cambio de etapa a ejecución | ON · `1820915286` | 🔴 |
| WF-058 | Propiedades de entrada | ON · `1820913996` | 🔴 |
| WF-059 | Mover a cierre por refinanciamiento | ON · `1820912802` | 🔴 **CON-109** |
| WF-060 | Mover a cierre por ejecución de garantía | ON · `1820907946` | 🔴 |
| WF-061 | Propiedades y notificaciones | ON · `1820908035` | 🔴 |
| WF-062 | Propiedades de entrada | ON · `1820906657` | 🔴 |
| WF-063 | Propiedades de entrada | ON · `1822135185` | 🟡 |
| WF-064 | Propiedades de entrada | ON · `1822086313` | 🟡 |

⚠️ **WF-054 y WF-055 comparten el ID `1820860318`** en el inventario del Maestro Operativo. O es un error de transcripción o dos entradas apuntan al mismo workflow. **Verificar antes de tocar nada.** → [[Contradicciones y Verificaciones]]

---

## Tablero · UNE (UNE-01 – UNE-06)

| ID | Flujo | HubSpot | Estatus |
|---|---|---|---|
| UNE-01 | Crear / registrar Ticket UNE | **No acreditado** | 🔴 |
| UNE-02 | Definir folio y fechas regulatorias | No acreditado | 🔴 |
| UNE-03 | Acuse de recepción | No acreditado | 🔴 |
| UNE-04 | Tarea de dictamen | No acreditado | 🔴 |
| UNE-05 | Escalamiento por vencimiento | No acreditado | 🔴 |
| UNE-06 | Cierre con dictamen | No acreditado | 🔴 |

Son flujos adicionales del master Servicio/UNE. **No sustituyen a los 64 numerados** y requieren implementación o sustitución verificable. → [[Proceso UNE]]

---

## Los bugs transversales

| Problema | Dónde | Impacto |
|---|---|---|
| **Tokens HubL sin resolver** | WF-010 (`CONTACT.FIRSTNAME`), WF-055, WF-058, WF-061, WF-064 (`{{enrolled_object.*}}`) | No renderizan. El destinatario ve el token en crudo |
| **`sequenceId` sin definir** | WF-053, WF-104 y otros con "Inscribirse en una secuencia" | El workflow **no puede ejecutarse** |
| **Destinatarios "todos los contactos asociados"** | WF-010 | Filtra comunicación interna al cliente |
| **Destinatarios personales de B&O** | 3 nodos a David Ochoa, 2 a Caroline Bersot | Exposición y dependencia del proveedor |
| **Valores hardcoded** | WF-027 (`Nivel de registro = "3"`, `CLABE STP = 1`) | Todos los negocios recibirían valores fijos |
| **Reinscripción apagada** | WF-008 | El negocio se atora si el comité aprueba después de entrar a Evaluación |
| **Estado master ≠ estado HubSpot** | WF-014 y otros | El master dice "Encendido", el portal dice desactivado |

---

## Lo que cierra un workflow

Del Maestro Operativo, evidencia mínima por ficha:

> URL/ID del workflow · export posterior a la corrección · captura fechada de trigger y acciones · caso de prueba con dato de entrada, resultado esperado y resultado real · **validación escrita de Monific**.

⚠️ Limitante declarada: *"El historial de ejecución de cinco workflows críticos no estuvo disponible por la consulta API utilizada; por eso se exige prueba reproducible."* Parte del *"no verificado"* es límite de instrumentación de la auditoría, no ausencia de configuración.

⚠️ **WF-045 y WF-059 no tienen regla de diseño verificable:** ambas fichas traen como regla la frase *"Implementado con validación"*, que es texto de plantilla. **No se puede construir un caso de prueba contra ella.** → [[Contradicciones y Verificaciones]] C-29

**Las 12 reglas sustitutivas de Inversionistas** (WF-025 a WF-040) —las que exigen declarar *"qué versión se sustituye"* en la respuesta— están consolidadas en `D198` §5 y desarrolladas en [[Proceso Comercial Inversionistas]] como decisiones INV-01 a INV-14.

---

## Bloques de remediación asociados

| Bloque | Alcance | Plazo |
|---|---|---|
| **B02** | WF-001–024 Solicitantes: triggers, reinscripción, exclusión mutua, destinatarios, trazabilidad, fallback | +20 días hábiles |
| **B03** | WF-025–040 Inversionistas: eliminar hardcodes y duplicados, corregir fondeo, cierre y destinatarios | +20 |
| **B04** | WF-041–049 Servicio/UNE: round-robin, SLA humano, roles dinámicos, cierre con evidencia | +20 |
| **B05** | WF-050–064 Cobranza: reimplementar ciclo día 1/7/13/14/15, resolver secuencias, trazabilidad jurídica | +25 |
| **B15** | Flujo UNE de punta a punta | +20 |
| **B16** | Destinatarios productivos de B&O y tokens HubL | +15 |

→ [[Bloques de Cierre B01-B16]]

---

## Relacionado

- [[Pipelines]] · [[Propiedades]] · [[Matriz de Comunicaciones]]
- [[Analisis de Cierre BNO]] — la clasificación de los 70 por naturaleza y los 10 defectos atribuibles a B&O
- [[Estado Actual]] · [[Pendientes Criticos]]
- [[Contradicciones y Verificaciones]]

## Fuentes

- `D167` — Maestro Operativo (2026-07-31): tablero general y fichas de los 70 flujos
- `X002` — Matriz Única de Hallazgos: hojas "WF estado real (96)" y "WF lógica (detalle API)"
- `X011`, `X012`, `X013` — Masters de Implementación: listados de workflows por proceso
- `X020` — Requerimiento Formal: hallazgos CON y bloques B02–B05, B15, B16
- `X021` — Auditoría de comunicaciones: WF-065 a WF-069 y tokens
- `D198` — Historial y contexto de cierre (2026-08-03): los 32 sin mapear, los nombres desalineados, la taxonomía de los 9 tipos de error y los rojos sin defecto acreditado
