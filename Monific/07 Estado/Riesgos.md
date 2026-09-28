---
titulo: Riesgos
tipo: estado
area: transversal
estado: en-riesgo
confianza: media
actualizado: 2026-08-31
fuentes: [D181, X020, P_NOTIF, D167, X024, P_CONTRATO, D195, D190]
tags: [riesgos, gestion]
---

# Riesgos

> **En una frase:** el mapa de lo que puede salir mal, ordenado por severidad, con lo que ya se propuso para controlarlo.

Marco de lectura: probabilidad × impacto. Los riesgos técnicos vienen de la sesión del 2026-08-04; los contractuales y operativos son síntesis de las fuentes.

---

## 🔴 Riesgos críticos

### R-01 · Rescisión del contrato
| | |
|---|---|
| **Probabilidad** | Media |
| **Impacto** | Muy alto |
| **Descripción** | Monific se reservó expresamente el derecho de ejercer la rescisión (aviso de 30 días) y reclamar daños directos comprobables. La notificación del 2026-06-18 declara explícitamente que **no** es todavía ese aviso |
| **Disparadores** | Incumplimiento de los plazos de los bloques · falta de evidencia verificable · vencimiento del Gantt sin cierre |
| 🔴 **Al 2026-08-31** | **El tercer disparador se cumplió.** H5 venció el 2026-08-28 sin cierre declarado y sin acuerdo escrito de prórroga. La probabilidad sube de Media a **Media-alta** mientras no exista ese acuerdo |
| **Control** | Entregar el plan correctivo con responsables nominales y fechas absolutas; cerrar primero los bloques de +10 días (B01, B07, B12, B13) que son los más baratos y visibles |
| → | [[Conflicto Contractual]] |

### R-02 · Incumplimiento regulatorio por UNE
| | |
|---|---|
| **Probabilidad** | Media-alta |
| **Impacto** | Muy alto |
| **Descripción** | Los seis flujos UNE no están acreditados. Una reclamación formal hoy no genera expediente, folio ni control de plazo. Monific es una entidad supervisada por CNBV |
| **Agravante** | Legal y Compliance de Monific tienen veto sobre el cierre por este riesgo |
| **Control** | Bloque B15. Decidir dónde se calculan los 30 días hábiles (Admin vs. HubSpot) y separar SLA interno de plazo regulatorio |
| → | [[Proceso UNE]] · [[Marco Regulatorio]] |

### R-03 · Confidencialidad — ARI y destinatarios de B&O
| | |
|---|---|
| **Probabilidad** | Confirmada (ya está ocurriendo) |
| **Impacto** | Alto |
| **Descripción** | El despacho externo ARI está dentro del equipo Legal compartido, con visibilidad del pipeline interno. Cinco nodos productivos envían correos a personal de B&O, incluida una persona que **ya no trabaja ahí** |
| **Control** | Bloques B14 y B16. Equipo dedicado para ARI, retirar destinatarios personales, usar roles internos |
| → | [[Higiene y Accesos]] |

### R-04 · La ruta crítica depende del cliente
| | |
|---|---|
| **Probabilidad** | Alta |
| **Impacto** | Alto |
| **Descripción** | El cierre depende de tres cosas que B&O no controla: (1) que TI de Monific desarrolle la integración, (2) que Monific entregue copies y plantillas de Meta, (3) que Monific valide por escrito cada bloque |
| **Contexto** | El hito H3 (integración confirmada) estaba planeado para el 2026-08-12 y el desarrollo arrancó el 2026-08-04 |
| **Control** | Documentar cada dependencia por escrito con fecha; invocar la cláusula de colaboración del cliente y acordar prórrogas por escrito. Monific ya **exigió** que las dependencias se separen expresamente (2026-06-25) y Emmanuel confirmó haber creado ese apartado. La hoja "Dependencias Cliente" de `X003` va en esa dirección |
| → | [[Plan de Cierre y Gantt]] · [[Contrato y Alcance]] |

### R-04b · Bloqueo regulatorio del acceso técnico — **materializado**
| | |
|---|---|
| **Probabilidad** | Confirmada |
| **Impacto** | Muy alto — ya costó ~3 meses de proyecto |
| **Descripción** | Monific, por una **auditoría de la CNBV**, debe certificar el acceso a terceros antes de otorgarlo. B&O pidió acceso a GitHub y entornos el 2026-05-07; se le negó el 2026-05-08 por información sensible; el 2026-05-27 consta que la integración *"sigue bloqueada por auditoría de la CNBV"* y que el proceso está en manos del equipo legal de Monific |
| **Consecuencia** | B&O cambió a modelo de asesoría técnica el 2026-06-08 y la integración pasó a ser responsabilidad de ejecución de TI de Monific |
| **Control aplicado** | Sesiones de revisión de código con pantalla compartida; modelo formalizado por Raquel el 2026-06-09 (B&O capacita, Monific ejecuta y controla accesos) |
| **Control pendiente** | 🔴 El **anexo operativo** que Raquel propuso para formalizar este modelo por escrito, sujeto a revisión legal de ambas partes, **no consta firmado**. Sin él, el cambio de alcance más importante del proyecto no está documentado contractualmente |
| → | [[Integracion Admin Monific HubSpot]] · [[Conflicto Contractual]] · [[Marco Regulatorio]] |

---

## 🟠 Riesgos altos

### R-05 · Propiedades duplicadas o históricas con usos distintos
| | |
|---|---|
| **Probabilidad** | **Alta** (declarada en la sesión técnica) |
| **Impacto** | Alto |
| **Descripción** | 2,142 propiedades en el portal, 17 propiedades de monto solapadas, `clave_desarrollador` vs `clave_de_desarrollador`, `nombre_completo_` duplicando firstname+lastname |
| **Control** | Inventario, propietario del dato y regla de consolidación **antes** de sincronizar. Acción A-03 asignada a Monific |
| → | [[Propiedades]] |

### R-06 · Nombres internos y valores de dropdown distintos entre sistemas
| | |
|---|---|
| **Probabilidad** | Media |
| **Impacto** | Alto |
| **Descripción** | Los nombres internos son **inmutables** tras crearse. Si se crean mal, hay que recrear la propiedad y migrar datos. Ya hay señales: `plaza_meses` parece un typo de `plazo_meses` |
| **Control** | Validar la matriz de equivalencias antes del desarrollo y **congelar identificadores aprobados**. Es el gate T1 |
| → | [[Diccionario de Propiedades API]] |

### R-07 · Asociaciones incorrectas por IDs
| | |
|---|---|
| **Probabilidad** | Media |
| **Impacto** | Alto |
| **Descripción** | Solo se conocen los IDs del pipeline de Inversiones. Faltan los de Solicitantes, Cobranza, Atención y UNE. Sin ellos las asociaciones fallan o se hacen por nombre |
| **Control** | Gate T3: entregar `objectTypeId`, `pipelineId`, `stageId`, `associationTypeId`/labels y registros de prueba |
| → | [[Modelo de Datos HubSpot]] |

### R-08 · Concentración de conocimiento en Raquel Alfie
| | |
|---|---|
| **Probabilidad** | Confirmada |
| **Impacto** | Alto |
| **Descripción** | *"Somos 11 personas y yo llevo casi todo"*. Raquel es Champion, autora de la documentación, auditora, validadora, nivel 2 y nivel 3 de escalamiento de ATC, y responsable de comunicación a inversionistas en incumplimientos |
| **Consecuencia** | Su ausencia detiene el proyecto y la operación |
| **Control** | No hay control propuesto en las fuentes. Es un riesgo del cliente que conviene nombrar |
| → | [[Raquel Alfie]] · [[Roles Operativos]] |

### R-09 · Asignación de tareas a personas, no a equipos
| | |
|---|---|
| **Probabilidad** | Alta |
| **Impacto** | Medio-alto |
| **Descripción** | HubSpot obliga a asignar tareas a una persona. Todo el flujo de solicitantes y la cobranza preventiva recaen en **Guillermo**. Si se va, hay que tocar workflows a mano |
| **Control** | B&O propuso un mecanismo para identificar y actualizar asignaciones ante movimientos de personal. Acordado que **no bloquea** el avance. El bloque B04 exige round-robin para Servicio |
| → | [[Roles Operativos]] |

### R-10 · Documentación con datos alucinados por IA
| | |
|---|---|
| **Probabilidad** | Confirmada |
| **Impacto** | Alto |
| **Descripción** | Buena parte de la documentación del cliente se elaboró con IA. La auditoría se hizo cruzando el master vía API con IA, **sin revisar flujo por flujo**. Hay cifras que no cuadran entre documentos y propiedades que "existen" en un master y no en HubSpot |
| **Control** | Priorizar la evidencia técnica directa (export/API) sobre la declarativa. Empezar por los 103 hallazgos que B&O ya reconoció |
| → | [[Contradicciones y Verificaciones]] · [[Auditorias]] |

---

## 🟡 Riesgos medios

### R-11 · Carga excesiva o límites de API
Sincronizaciones masivas nocturnas + 16,279 llamadas al mes ya observadas. **Control:** procesamiento por lotes, horario de baja demanda, reintentos y log de errores.

### R-12 · Reglas de negocio no comprendidas por desarrollo
TI de Monific desarrolla sobre un documento que no escribió. **Control:** compartir videos y diagramas de proceso; hacer sesión funcional cuando sea necesario. B&O ya lo ofreció el 2026-08-04.

### R-13 · Falta de cadencia de seguimiento
La sesión recurrente de 15–20 min quedó **por confirmar** por Raquel vía WhatsApp. Sin cadencia, los bloqueos se detectan tarde. **Control:** definir reunión corta recurrente y canal único de bloqueos y decisiones.

### R-14 · Baja adopción por capacitación incompleta
Bloque B09 abierto. Sin base de conocimiento ni programa completo, el equipo de Monific queda dependiente de B&O. Riesgo declarado en el propio requerimiento: *"dependencia de BNO y baja adopción"*.

### R-15 · Pérdida de datos al archivar propiedades
383 propiedades vacías por archivar. **Control:** el bloque B11 exige inventario previo, análisis de impacto y **plan de reversa**. Criterio: ningún campo usado se archiva.

### R-16 · Dos calendarios conviviendo
El Gantt v2 de B&O (por fases, cierre 2026-08-28) y el calendario del requerimiento (por bloques, contado desde la aceptación del plan) no están conciliados. **Control:** conciliarlos explícitamente y hacer que Monific acepte por escrito uno de los dos.

### R-17 · Decisión pendiente sobre Data Hub
Sin Data Hub, HubSpot no calcula días hábiles ni recurrencias. La alternativa (calcular en el Admin) funciona pero añade carga a TI. Es una decisión económica sin resolver desde el 2026-07-27.

---

## Riesgos ya materializados

| Riesgo | Cuándo | Consecuencia |
|---|---|---|
| Falta de documentación de la API del Admin | Feb–may 2026 | Retraso de 3–4 semanas reconocido internamente |
| **Bloqueo regulatorio del acceso al código** (auditoría CNBV) | May–jun 2026 | B&O nunca pudo revisar el código; la integración pasó a TI de Monific. Ver R-04b |
| **Pausa formal del frente API** por revisión con Gobierno | 7 al 22 de mayo 2026 | Dos semanas perdidas en la ruta crítica |
| Salida de la PM sin handover formalizado | Jun 2026 | Argumento adicional en el requerimiento formal |
| Cambio del modelo de integración a asesoría | 2026-06-08 | Cambió la naturaleza de un entregable central sin evidencia de formalización escrita con el cliente |
| Catálogo `nombre_de_proyecto` mal codificado | May–jul 2026 | ~1,125 deals fallidos, 741 rechazos por API |
| Escalada a requerimiento contractual formal | 2026-06-18 | El proyecto pasó de implementación a remediación bajo presión legal |

---

## Relacionado

- [[Pendientes Criticos]] — lo que hay que resolver
- [[Conflicto Contractual]] — el riesgo legal
- [[Contradicciones y Verificaciones]] — el riesgo de datos
- [[Plan de Cierre y Gantt]] — los hitos en riesgo
- [[Preguntas Abiertas]] — lo que falta decidir

## Fuentes

- `D181` — Minuta 2026-08-04: tabla de riesgos técnicos declarada por ambos equipos
- `X020` — Requerimiento Formal: columna "Riesgo si no se corrige" de cada bloque
- `P_NOTIF` — Notificación contractual: reserva de derechos
- `D167` — Maestro Operativo: pendientes críticos
- `X024` — Gantt v2: notas de tentatividad
- `P_CONTRATO` — Contrato: cláusulas de rescisión e indemnización
- `D195` — Entregables del 26 de enero: alertas rojas operativas
