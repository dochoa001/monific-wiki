---
titulo: Bloques de Cierre B01-B16
tipo: estado
area: transversal
estado: bloqueado
confianza: alta
actualizado: 2026-08-31
fuentes: [X020, X003, X004, D167, V_DO_20260831]
tags: [cierre, remediacion, requerimiento]
---

# Bloques de Cierre B01–B16

> **En una frase:** los dieciséis paquetes de trabajo en los que Monific organizó todo lo que Black & Orange debe entregar para cerrar el proyecto.

Cada uno de los 217 pendientes exigibles pertenece a un bloque. Los plazos corren **desde la aceptación escrita del plan por Monific**, no desde una fecha fija.

---

## Tablero de avance — corte 2026-08-31

Tres estados, y la diferencia entre ellos es la que define el conflicto: **hecho ≠ evidenciado ≠ aceptado.**

| Bloque | Trabajo | Evidencia cargada | Aceptado por Monific |
|---|---|---|---|
| **B01** Documentación TO-BE | 🟡 Parcial | 🔴 No | 🔴 No |
| **B02** WF Solicitantes | 🟡 Parcial | 🔴 **Solo WF-037** de 24 | 🔴 No |
| **B03** WF Inversionistas | 🟡 Parcial | 🔴 **Solo WF-039** de 16 | 🔴 No |
| **B04** WF Servicio/UNE | 🟡 Parcial | ✅ **WF-041→049 completo** en `outputs/wf039-wf049-evidencias/` | 🔴 No |
| **B05** WF Cobranza | 🟡 Parcial | ✅ **WF-050→064 completo** en `outputs/wf050-wf064-cobranza/` | 🔴 No |
| **B06** Dashboards | 🔴 0 de 4 | 🔴 No | 🔴 No |
| **B07** Propiedades | 🟡 5 de 31 · relación preparada en `outputs/relacion_propiedades_bno/` | 🔴 No | 🔴 No |
| **B08** Comunicaciones | 🔵 **Declarado completo** (2026-08-31) | 🔴 No | 🔴 No |
| **B09** Base de conocimiento | 🔵 **Materiales construidos y publicados** | 🟡 Parcial — existe el sitio, falta el paquete formal | 🔴 No |
| **B10** Definiciones para TI | 🟡 Parcial — gate T1–T7 abierto | 🔴 No | 🔴 No |
| **B11** Higiene nativa | 🔴 Sin avance | 🔴 No | 🔴 No |
| **B12** Masters de otro cliente | 🔵 **Declarado depurado** (2026-08-31) | 🔴 No | 🔴 No |
| **B13** Corte de horas | 🔴 Sin conciliar | 🔴 No | 🔴 No |
| **B14** Segregación ARI | 🔴 Sin avance | 🔴 No | 🔴 No |
| **B15** UNE | 🔴 Sin avance | 🔴 No | 🔴 No |
| **B16** Destinatarios y tokens | 🟡 Tokens HubL posiblemente resueltos vía B08; **destinatarios personales sin retirar** | 🔴 No | 🔴 No |

**Resumen:** ningún bloque está aceptado. Dos tienen evidencia completa (B04, B05) y esperan validación. Tres cambiaron de estado por declaración y no por acreditación (B08, B09, B12). La columna que gobierna el cierre es la tercera, y está vacía entera.

⚠️ **Lo que esto significa:** el proyecto tiene más trabajo hecho del que puede demostrar. El cuello de botella dejó de ser la ejecución y pasó a ser la **carga de evidencia en `02_RESPUESTA_BNO`**.

---

## Los 16 bloques

| ID | Requerimiento ejecutivo | Responsable | Plazo | Riesgo si no se corrige |
|---|---|---|---|---|
| **B01** | Documentación TO-BE y conciliación master ↔ HubSpot | B&O — Arquitectura / PM | +10 | Cierre con documentación no confiable |
| **B02** | Workflows de Solicitantes WF-001–024 | B&O — Implementación / Arquitectura | +20 | Caída del embudo, errores y falta de trazabilidad |
| **B03** | Workflows de Inversionistas WF-025–040 | B&O — Implementación / Arquitectura | +20 | Estados financieros y comunicaciones erróneos |
| **B04** | Workflows de Servicio/UNE WF-041–049 | B&O — Implementación | +20 | SLA incorrecto y atención sin trazabilidad |
| **B05** | Workflows de Cobranza WF-050–064 | B&O — Implementación / Arquitectura | +25 | Mora sin gestión, pérdida económica y de trazabilidad |
| **B06** | Dashboards ejecutivos en tiempo real | B&O — Implementación | +25 | Decisiones sin información y entregable contractual incompleto |
| **B07** | 31 propiedades comprometidas; 26 faltantes | B&O — Implementación | +10 | Workflows y reportes sin campos de respaldo |
| **B08** | 81 comunicaciones omnicanal | B&O — Implementación | +30 | Usuarios sin avisos, copies inconsistentes y exposición de datos |
| **B09** | Base de conocimiento y capacitación | B&O — Capacitación / Implementación | +30 | Dependencia de B&O y baja adopción |
| **B10** | Definiciones de arquitectura para TI | B&O — Arquitectura / Integraciones | +15 | Integración bloqueada y retrabajo |
| **B11** | Higiene y seguridad de configuración nativa | B&O — Implementación | +20 | Pérdida de datos y automatizaciones |
| **B12** | Masters con contenido de otro cliente | B&O — Dirección / PM | +10 | Confidencialidad y documentación de cierre no confiable |
| **B13** | Modelo operativo y corte de horas | B&O — Dirección / PM | +10 | Bloqueo de cierre y disputa de alcance |
| **B14** | Segregación del despacho externo ARI | B&O — Implementación / Dirección | +15 | Visibilidad cruzada y riesgo de confidencialidad/regulatorio |
| **B15** | Flujo UNE roto de punta a punta | B&O — Implementación | +20 | Riesgo de incumplimiento del proceso UNE |
| **B16** | Destinatarios productivos de B&O y tokens HubL | B&O — Implementación / Seguridad | +15 | Exposición de información y dependencia del proveedor |

*Plazos en días hábiles.*

### Agrupados por plazo

| Plazo | Bloques |
|---|---|
| **+10** | B01 · B07 · B12 · B13 |
| **+15** | B10 · B14 · B16 |
| **+20** | B02 · B03 · B04 · B11 · B15 |
| **+25** | B05 · B06 |
| **+30** | B08 · B09 |

---

## Detalle de cada bloque

### B01 · Documentación TO-BE y conciliación
**Acción:** entregar el TO-BE final y una tabla por workflow que concilie master, flujograma y estado real.
**Evidencia:** documento versionado, enlaces/export y tabla con fecha y usuario.
**Criterio:** 100 % del alcance conciliado, **cero contradicciones**.
📌 Nota registrada: *"La documentación TO BE debe reflejar que cobranza vive en Tickets/pipeline de Cobranza y no como objeto separado."*
→ [[Masters de Implementacion]]

### B02 · Workflows de Solicitantes
**Acción:** corregir triggers, reinscripción, exclusión mutua, destinatarios, trazabilidad y fallback.
**Evidencia:** canvas/export, bitácora y pruebas de aprobado/rechazado.
**Criterio:** los casos críticos pasan punta a punta; **ningún negocio queda atorado**.
→ [[Proceso Comercial Solicitantes]]

### B03 · Workflows de Inversionistas
**Acción:** eliminar hardcodes y duplicados; corregir fondeo, cierre y destinatarios.
**Evidencia:** export y casos de fondeo, congelado y cierre.
**Criterio:** sin activación sin fondeo; el cierre no se revierte; **solo el titular recibe comunicación**.
→ [[Proceso Comercial Inversionistas]]

### B04 · Workflows de Servicio/UNE
**Acción:** round-robin, SLA de respuesta humana, roles dinámicos y cierre con evidencia.
**Evidencia:** configuración de equipos, canvas y pruebas con timestamps.
**Criterio:** distribución equitativa; SLA humano; **cierre bloqueado sin resolución**.
→ [[Proceso de Servicio ATC]]

### B05 · Workflows de Cobranza
**Acción:** reimplementar el ciclo día 1/7/13/14/15, resolver secuencias y trazabilidad jurídica.
**Evidencia:** canvas, secuencias resueltas y prueba con datos mock.
**Criterio:** ciclo operativo; las etapas terminales notifican, crean tarea y registran evidencia.
→ [[Proceso de Cobranza]]

⚠️ El ciclo "día 1/7/13/14/15" de este bloque **no coincide** con el ciclo T-10/T-7/T-5 de `D195` ni con la cadena ARI de día 15/16/30/61. → [[Contradicciones y Verificaciones]]

### B06 · Dashboards
**Acción:** construir dashboards de inversión, cobranza, comunicación y desempeño.
**Evidencia:** links, capturas, fuentes y prueba con datos reales.
**Criterio:** **cuatro dashboards poblados, accionables y aceptados por dirección/operación**.
→ [[Dashboards y Reportes]]

🔵 **Corte 2026-08-31:** Dirección declara el bloque bloqueado por la integración. Es cierto para **inversión** y **cobranza**, que necesitan datos del Admin. **No** lo es para **comunicación** —construible ahora que las 81 piezas están publicadas— ni para **desempeño**, que se alimenta de actividad nativa del portal. Reportar los cuatro como bloqueados debilita la dependencia real de los dos primeros. → [[Estado Actual]]

### B07 · Propiedades
**Acción:** crear y verificar objeto, grupo, tipo, valores e internal name sin duplicar.
**Evidencia:** por propiedad — captura, internal name, tipo, grupo y sensibilidad.
**Criterio:** **31/31 verificadas y sin duplicados**.
→ [[Propiedades]]

### B08 · Comunicaciones
**Acción:** crear 77, corregir 4 y actualizar el tracker con triggers, tokens y destinatarios.
**Evidencia:** link por asset, trigger, destinatario, prueba y aprobación.
**Criterio:** **81 implementadas, cero no iniciadas, aprobadas por Monific**.
→ [[Matriz de Comunicaciones]]

🔵 **Corte 2026-08-31:** Dirección declara las **81 publicadas e integradas** en HubSpot. Es el cambio más grande desde el requerimiento: el bloque pasó de 0 % a declarado completo. Falta lo que lo convierte en cierre — **link por asset, trigger, destinatario, prueba de envío y aprobación escrita**. Mientras el tracker siga diciendo 77 en estado "Crear", la declaración y el documento se contradicen. → [[Estado Actual]]

### B09 · Base de conocimiento y capacitación
**Acción:** entregar manuales, guías y videos; completar el programa correctivo o equivalente.
**Evidencia:** materiales, asistencia, ejercicios, grabaciones y evaluación.
**Criterio:** base completa; equipo capacitado; **transferencia validada por escrito**.
→ [[Metodologia BOOST]]

### B10 · Definiciones de arquitectura para TI
**Acción:** documentar niveles, mapeo financiero, Deal padre, Mercado Secundario, catálogo y asociaciones.
**Evidencia:** ADR, diccionario, payloads, eventos y casos límite.
**Criterio:** **TI puede implementar sin reabrir discovery ni adivinar reglas**.
→ [[Integracion Admin Monific HubSpot]] — es el gate T1–T7

### B11 · Higiene y seguridad nativa
**Acción:** consolidar pipelines, crear association label e inventariar las 383 propiedades antes de archivar.
**Evidencia:** export antes/después, inventario, impacto y **plan de reversa**.
**Criterio:** **ningún campo usado se archiva**; pipelines y asociación normalizados.
→ [[Higiene y Accesos]]

### B12 · Masters con contenido de otro cliente
**Acción:** explicar el origen, retirar el contenido ajeno y entregar masters depurados y versionados.
**Evidencia:** masters limpios y control de cambios.
**Criterio:** **cero contenido de terceros; aceptación escrita**.
⚠️ Es el único bloque dirigido a **Dirección** de B&O, no a implementación. Toca confidencialidad.
→ [[Masters de Implementacion]]

🔵 **Corte 2026-08-31:** Dirección declara los masters **depurados**. Falta la parte que el bloque exige además de la limpieza: **explicar el origen** del contenido ajeno y entregar los masters versionados con control de cambios, para aceptación escrita. Por tocar confidencialidad de un tercero, este bloque conviene cerrarlo con más formalidad que los demás, no con menos.

### B13 · Modelo operativo y corte de horas
**Acción:** conciliar alcance/horas y reasignar o acreditar horas no ejecutadas.
**Evidencia:** corte detallado y **anexo operativo firmado**.
**Criterio:** modelo conciliado; horas resueltas; **sin costos no acordados**.
→ [[Economia del Proyecto]]

### B14 · Segregación de ARI
**Acción:** crear equipo dedicado, retirar ARI de Legal y limitar notificaciones a los nodos pactados.
**Evidencia:** membresías, visibilidad y destinatarios antes/después.
**Criterio:** **ARI sin acceso al pipeline interno**; solo notificaciones pactadas.
→ [[Higiene y Accesos]] · [[Roles Operativos]]

### B15 · Flujo UNE
**Acción:** activar UNE; generar expediente/folio; notificar a Compliance; bloquear el cierre sin documentación.
**Evidencia:** caso Tipo E completo, folio, notificación y captura del pipeline.
**Criterio:** **toda reclamación genera expediente y folio**; cierre controlado.
→ [[Proceso UNE]]

### B16 · Destinatarios y tokens
**Acción:** retirar destinatarios personales de B&O, usar roles internos y corregir tokens HubL.
**Evidencia:** export antes/después, búsqueda con **cero coincidencias** y pruebas de render/envío.
**Criterio:** cero nodos a personal de B&O, cero tokens sin resolver.
→ [[Higiene y Accesos]]

---

## Cómo se responde

B&O responde en la **Plantilla de Respuesta** (carpeta `02` del expediente), una fila por pendiente, llenando solo las columnas marcadas para B&O:

| Columna | Qué va |
|---|---|
| BNO: Estado | Sí / No / Parcial |
| BNO: Responsable nominal | Nombre y apellido |
| BNO: Acción realizada | Qué se hizo |
| BNO: Fecha compromiso | Fecha absoluta |
| BNO: Dependencia/bloqueo | Si depende de Monific o de un tercero |
| BNO: Evidencia | URL/ID + export/captura fechada |
| BNO: Caso de prueba | El caso reproducible |
| BNO: Resultado de prueba | Resultado real |

Luego Monific llena: fecha de validación, responsable de validación y **¿Aceptado?**

El soporte se sube a `02 › Evidencias_BNO`.

---

## Estado de la respuesta

- `X004` — **Plantilla de Respuesta BNO**: estructura vacía, lista para llenar.
- `X003` — **Respuesta BNO con validación de CON-021**: contiene además un Gantt de remediación, un timeline de cierre de auditoría, un resumen semanal y una hoja de **dependencias del cliente**.

⚠️ No hay evidencia en las fuentes de que la plantilla completa con los 217 pendientes se haya entregado.

**Al 2026-08-31 esto no ha cambiado**, y con B08 y B12 declarados completos es lo único que separa a esos bloques del cierre. Es la tarea de mayor rendimiento del proyecto en este momento: no produce trabajo nuevo, convierte en acreditable el que ya existe.

---

## Relacionado

- [[Conflicto Contractual]] — de dónde vienen estos bloques
- [[Pendientes Criticos]] — los hallazgos individuales
- [[Plan de Cierre y Gantt]] — el plan de B&O y su relación con estos plazos
- [[Auditorias]] — el origen de los hallazgos

## Fuentes

- `X020` — Requerimiento Formal BNO (2026-06-18), §5 a §8 y anexo "Pendientes"
- `X003` — Respuesta BNO, hoja "Bloques B01-B16"
- `X004` — Plantilla de Respuesta BNO
- `D167` — Maestro Operativo: criterio de cierre
- `V_DO_20260831` — Declaración verbal de Dirección B&O (2026-08-31): B08 y B12 completos, B06 bloqueado. Sin documento de respaldo
