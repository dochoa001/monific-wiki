---
titulo: Analisis de Cierre BNO
tipo: estado
area: transversal
estado: en-progreso
confianza: alta
actualizado: 2026-08-11
fuentes: [D198, P_RESCIERRE, D167, D001, D166]
tags: [cierre, hallazgos, clasificacion, defensa, sesion]
---

# Análisis de Cierre BNO

> **En una frase:** la lectura que B&O hace de los 70 pendientes antes de la sesión del 2026-08-03 — y su tesis central: **de los 29 rojos, ~10 son defectos de configuración atribuibles a B&O**; el resto es plataforma, definición pendiente de Monific, alcance nuevo o hallazgo sin defecto acreditado.

**Qué es esta fuente.** Documento de contexto (`D198`) y resumen ejecutivo (`P_RESCIERRE`) preparados por [[Emmanuel Chulin]] con fecha de corte **2026-08-03**, para responder a la estructura documental que Monific impuso el 31 de julio. Es el **documento más reciente del proyecto**, posterior al Maestro Operativo (`D167`, 2026-07-31).

⚠️ **Es la postura de B&O, no un acuerdo.** La clasificación está declarada *"sujeta a validación conjunta en la sesión"*. Léela como argumento con evidencia, no como hecho cerrado. → [[Auditorias]]

---

## La clasificación de los 70 pendientes por naturaleza

Un semáforo rojo agrupa hoy nueve tipos de problema con esfuerzo de corrección radicalmente distinto. Separarlos es lo que permite un criterio de cierre verificable por grupo.

| # | Naturaleza | Fichas | % |
|---|---|---|---|
| 1 | Bloqueado por **definición o aprobación de Monific** (copy, remitente, consentimiento, catálogo de proyecto, cadencia ARI, canal UNE) | 15 | 21 % |
| 2 | Configuración correcta; **solo falta evidencia o prueba** documentada | 14 | 20 % |
| 3 | **Construcción nueva** no contemplada en el alcance (6 UNE, formulario, Ticket por campaña, modelo de movimientos) | 12 | 17 % |
| 4 | 🔴 **Corrección de configuración atribuible a B&O** | **10** | **14 %** |
| 5 | **Limitación de plataforma** (secuencias por licencia, ausencia de Data Hub) | 9 | 13 % |
| 6 | **Marcado en rojo sin defecto probado** | 6 | 9 % |
| 7 | **Homologación de nombres** (cosmético) | 4 | 6 % |
| | **Total** | **70** | **100 %** |

🟡 **Documentado** por B&O sobre las 70 fichas del Maestro Operativo. Sin validación de Monific al 2026-08-11.

---

## Los 10 defectos de configuración atribuibles a B&O

| # | Workflow | Defecto | Naturaleza |
|---|---|---|---|
| 1 | **WF-056** | Etapa destino equivocada: debe mover a *Campaña Liquidada* y mueve a *Cierre por refinanciamiento* (CON-109) | Funcional |
| 2 | **WF-039** | Usa `contrato_firmado`, `folio_inscripcion` y `link_del_expediente` — **campos de Solicitantes** — dentro de Inversionistas | Funcional |
| 3 | **WF-061** | Nombres personales fijos (Vianey / Raquel) en las notificaciones; deben ser roles o equipos (CON-111, CON-148, CON-150, CON-281) | Configuración |
| 4 | **WF-050** | Asigna el propietario al equipo equivocado: Atención en lugar de Cobranza (CON-101) | Configuración |
| 5 | **WF-058** | Notificación *"Decisión de Refinanciamiento"* **sin destinatarios** (CON-193, marcado tentativo) | Configuración |
| 6 | **WF-057** | Ejecuta garantía por tiempo en etapa (`mora >= 61`), sin la autorización documentada que exige la regla | Lógica |
| 7 | **WF-054** | Réplica de WF-053 (CON-280, CON-105, CON-189, CON-190) | Duplicado |
| 8 | **WF-037** | Encendido debiendo permanecer apagado | Estado |
| 9 | **WF-028** | Encendido debiendo permanecer apagado | Estado |
| 10 | **WF-010 · WF-011** | Comunicaciones internas activas sin copy, remitente ni destinatario aprobados | Estado |

El más limpio del inventario es **WF-056**: el destino es objetivamente distinto al especificado. → [[Workflows]]

---

## Los 6 rojos que no acreditan defecto

Un pendiente en rojo sin defecto acreditado **no puede cerrarse con evidencia**, porque no hay nada que demostrar.

| ID | Motivo del rojo | Situación real |
|---|---|---|
| **WF-051** | *"No localizado en la relación de flujos de la auditoría"* | No es un defecto probado |
| **WF-052** | *"No localizado en la relación de flujos de la auditoría"* | No es un defecto probado |
| **WF-060** | *"No localizado en la relación de flujos de la auditoría"* | No es un defecto probado |
| **WF-035** | Marcado en rojo | Su propio rastro dice *"la auditoría indica que se eliminó el duplicado"* — **ya resuelto** |
| **WF-039** | Marcado en rojo | Su propio rastro dice *"configuración aceptada, activación aún pendiente"* — contradice el texto de su misma ficha |
| **WF-058 · WF-059 · WF-061** | Hallazgos marcados literalmente **"(tentativo)"** | Requieren confirmación antes de exigir corrección |

**3 de los 13 rojos de Cobranza** están marcados por no haber sido encontrados en la auditoría, no por tener un defecto. → [[Contradicciones y Verificaciones]] C-27

---

## Lo que no se corrige: se construye

Este bloque pesa más que los bugs.

| Ausencia | Evidencia |
|---|---|
| **Los 6 flujos UNE no existen** | Las seis fichas declaran *"no se acreditó correspondencia canónica en el inventario de HubSpot"* y *"no existe workflow documentado en el máster fuente"* → [[Proceso UNE]] |
| **Formulario definitivo de Solicitantes** | Los tres candidatos (`1640673709`, `1832556831`, `1834467729`) *"no demuestran este recorrido completo"* |
| **WF-055 no tiene objeto propio en HubSpot** | Su ficha lo mapea al ID `1820860318`, el mismo de WF-054 → C-08 |
| **Ticket por campaña asociado a Proyecto** | Deduplicado por ID externo — sin demostrar |
| **Cadena completa del despacho ARI** | Días 15/16/30/61 — sin demostrar en workflows |
| **Diccionario de propiedades (gate T1)** | Casi todas las fichas de Solicitantes e Inversionistas dicen `[nombre interno pendiente de contrato técnico]` → [[Diccionario de Propiedades API]] |
| **32 workflows del portal sin mapear** | 96 en el portal − 64 canónicos. No explicados en ningún documento |

**El diccionario de propiedades es el cuello de botella real:** sin nombres internos confirmados, ~14 tokens del copy nuevo no resuelven y una parte del inventario no es programable. Es la dependencia que gobierna el calendario de cierre.

---

## El proceso limpio: Servicio / ATC

**Es el único bloque sin rojos:** 9 fichas en amarillo, 0 en rojo, y todas las observaciones son preventivas.

| ID | Observación |
|---|---|
| WF-041 | Asignar al equipo de Atención por rotación nativa; si el horario no puede gobernar la rotación, asignar al equipo y reasignar manualmente |
| WF-042 | Usar SLA/espera nativa y notificar al superior del propietario o a un equipo; no a una persona fija |
| WF-043 | Mover a *En Atención* solo cuando exista primera respuesta o actividad del agente |
| WF-044 | Usar fecha nativa de primera respuesta cuando esté disponible |
| WF-046 | Conservar al E.A.C. como responsable de seguimiento; registrar responsable de TI como dato manual |
| WF-047 | Al entrar a *Escalado TI* registrar fecha/hora y solicitar categoría, subcategoría y descripción |
| WF-048 | Esperar 48 horas y notificar al superior o equipo. No usar destinatarios personales fijos |
| WF-049 | Al cerrar, registrar fecha y exigir resolución. Métricas con campos nativos |

**Táctica de cierre propuesta:** cerrar Servicio con evidencia primero, para demostrar el método antes de entrar a Cobranza. → [[Proceso de Servicio ATC]]

---

## La ruta de cierre

### Las 11 correcciones antes de la sesión

| # | Acción | Bloque | Esfuerzo |
|---|---|---|---|
| 1 | Corregir el corrimiento de triggers INV-008 a INV-014 en la matriz y eliminar el trigger de retiro | Matriz | Bajo |
| 2 | Homologar los 4 nombres de workflow desalineados (WF-004, WF-021, WF-055, WF-060) e identificar el quinto que el documento declara pero no documenta | Maestro 03 | Bajo |
| 3 | Apagar WF-010, WF-011, WF-028 y WF-037 con evidencia antes/después | Configuración | Bajo |
| 4 | Reemplazar los nombres personales de WF-061 por roles o equipos | Configuración | Bajo |
| 5 | Agregar destinatarios a WF-058 | Configuración | Bajo |
| 6 | Corregir la etapa destino de WF-056 a *Campaña Liquidada* | Configuración | Medio |
| 7 | Eliminar de WF-039 los tres campos heredados de Solicitantes | Configuración | Medio |
| 8 | Corregir la asignación de equipo de WF-050 | Configuración | Bajo |
| 9 | Cerrar el bloque completo de Servicio con evidencia de sus 9 fichas | Servicio | Medio |
| 10 | Agregar la columna `WF-xxx` a las cuatro tablas de workflows de la matriz de comunicación | Matriz | Medio |
| 11 | Entregar como requerimiento formal la lista de los ~14 tokens que dependen de Admin | Matriz | Bajo |

⚠️ **Sin evidencia de ejecución.** El documento declara la intención al 2026-08-03; ninguna fuente posterior acredita que las 11 se hayan hecho. → [[Preguntas Abiertas]] P-29

### Los 12 puntos que requieren decisión de Monific

| # | Punto | Por qué no se resuelve antes |
|---|---|---|
| 1 | **Deal vs. Proyecto** como objeto madre de campaña | Decisión de arquitectura; bloquea todo Inversionistas |
| 2 | **Diccionario de propiedades (T1)** con internal names confirmados | Sin esto no hay nada programable ni tokens resolubles |
| 3 | **Catálogo de valores de proyecto** admitidos por la API | Explica los 741 rechazos de 766 errores en 16,279 llamadas |
| 4 | Contradicción de ID entre **WF-054 y WF-055** | El documento reporta el mismo workflow en dos estados opuestos |
| 5 | Los **3 rojos no localizados** (WF-051, WF-052, WF-060) | Sin defecto acreditado no hay criterio de cierre posible |
| 6 | Confirmar que **WF-035 ya está resuelto** según la propia auditoría | Contradicción interna del documento |
| 7 | Alcance de los **6 flujos UNE** y sus comunicaciones | Construcción nueva, no corrección |
| 8 | Diseño del **control de 7,000 contactos de marketing** | Definición de negocio previa al diseño |
| 9 | Origen del dato de **reactivación 30/90/180/360** | Requiere que Admin lo envíe |
| 10 | Confirmar el **SLA de 5 minutos de ATC** | Aparece solo en la matriz de comunicación |
| 11 | Alias de remitente para **Cobranza y ATC** | Definición de dominio operativo |
| 12 | Los **32 workflows del portal sin mapear** | Requiere decisión: adoptar, archivar o eliminar |

### Las cuatro confirmaciones respondidas

| # | Solicitud de Monific | Respuesta de B&O |
|---|---|---|
| 1 | Recepción y acceso a la estructura | **Confirmado.** Estructura revisada de punta a punta: 00_LEER_PRIMERO, maestro 03, Control Único 05 y matriz de comunicación |
| 2 | Trabajar sobre estas versiones sin crear una matriz adicional | **Confirmado.** Las respuestas se harán sobre los mismos másteres y el Control Único, en `02_RESPUESTA_BNO`, con el formato de siete campos |
| 3 | Sesión del lunes 2026-08-03, 15:00 h | **Confirmada**, con agenda acotada a los 12 puntos de decisión |
| 4 | Correcciones incorporadas antes de la reunión | Las 11 acciones, cada una con evidencia antes/después, caso de prueba, resultado esperado y real, URL o ID de configuración y fecha de ejecución |

---

## El argumento de fondo que B&O plantea

> De las 70 fichas, **15 están bloqueadas por definición o aprobación de Monific** y **12 corresponden a construcción nueva** no contemplada en el alcance original. Conviene que la sesión los separe explícitamente de los 10 defectos de configuración: cada grupo necesita un criterio de cierre distinto, y **mezclarlos es lo que ha hecho que los mismos temas vuelvan a revisión**.

Es la misma tesis que sostiene [[Conflicto Contractual]] desde el lado de B&O, ahora cuantificada ficha por ficha.

---

## Límite declarado del análisis

⚠️ El propio documento acota su alcance:

> *"El análisis se realizó sobre los archivos entregados por Monific. **No incluye verificación en vivo del portal de HubSpot**: los estados encendido/apagado al corte son los declarados por el maestro operativo y se reconfirmarán en el portal al ejecutar cada corrección."*

Es coherente con la regla **configurado ≠ verificado**. Ninguna afirmación de esta página cuenta como evidencia de cierre.

Método aplicado, según el anexo del documento: hash SHA-256 para verificar duplicidad de archivos, extracción estructurada de las 70 fichas por campo, parseo de las 81 filas de la matriz, inventario de tokens por namespace y búsqueda exhaustiva de cadenas en las 602 líneas de la matriz.

---

## Relacionado

- [[Workflows]] — el tablero de los 70 flujos que este análisis clasifica
- [[Matriz de Comunicaciones]] — el análisis de las 81 comunicaciones que acompaña a este
- [[Auditorias]] — el método del cliente que produjo los 29 rojos
- [[Contradicciones y Verificaciones]] — C-27 a C-30, abiertas por esta fuente
- [[Estado Actual]] · [[Pendientes Criticos]] · [[Preguntas Abiertas]]
- [[Conflicto Contractual]] — la disputa que este documento busca acotar

## Fuentes

- `D198` — Historial y contexto de cierre Monific × B&O (2026-08-03), v1.0, por Emmanuel Chulin
- `P_RESCIERRE` — Resumen ejecutivo de cierre (2026-08-03), mismo análisis en formato ejecutivo
- `D167` — Maestro Operativo (2026-07-31): las 70 fichas que este documento clasifica
- `D001` — 03. Matriz completa de comunicación: las 81 piezas analizadas
- `D166` — 00_LEER_PRIMERO: la estructura documental que motiva la respuesta
