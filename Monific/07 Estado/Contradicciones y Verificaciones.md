---
titulo: Contradicciones y Verificaciones
tipo: estado
area: transversal
estado: en-progreso
confianza: alta
actualizado: 2026-09-28
fuentes: [D167, X002, X011, X012, X018, X020, D178, D180, D181, D190, P_CONTRATO, D193, P_ANEXO, D198, D001, D199, D200, D201, D202, D203, D204]
tags: [contradicciones, calidad, verificacion]
---

# Contradicciones y Verificaciones

> **En una frase:** el registro de todo lo que no cuadra entre fuentes — porque buena parte de la documentación original se elaboró con IA y contiene datos plausibles pero falsos.

**Regla de resolución:** prevalece la fuente con **evidencia técnica directa** (export/API de HubSpot) sobre la declarativa (master, minuta, correo). Ambas quedan registradas con su fecha.

---

## 🔴 Resueltas — decisión tomada, propagación pendiente

### C-01 · El objeto de Cobranza

| Fuente | Dice | Fecha |
|---|---|---|
| Master de Cobranza (`X011`) | Las propiedades pertenecen a un **"Objeto de Cobranza"** y a un **"Objeto Edificio / Proyecto"** | ~mar 2026 |
| Verificación por API (`X002`) | **0 objetos personalizados** en el portal | 2026-06-17 |
| Reunión con Raquel (`D178`) | *"El objeto de cobranza se sustituyó por el objeto de tickets"* — validado | 2026-06-29 |
| Maestro Operativo (`D167`) | *"Ticket por campaña asociado a Proyecto. No se crea objeto Cuota"* | 2026-07-31 |

✅ **Resolución: cobranza vive en Tickets.** El master aún no lo refleja — es parte del bloque B01.
→ [[Proceso de Cobranza]] · [[Modelo de Datos HubSpot]]

### C-02 · El lead scoring de solicitantes

| Fuente | Dice | Fecha |
|---|---|---|
| Brief (`D193`) | Pide *"lead scoring automático basado en respuestas del formulario"* | 2025 |
| Master de Solicitantes (`X012`) | Propiedad **"Ruta de Scoring"** con valores `A ≥70 · B 40–69 · C ≤39`, y motivos de cierre perdido tipo "Score A: sin garantía inmobiliaria" | ~feb 2026 |
| Minuta (`D180`) | *"No se implementará un score numérico en esta primera etapa"* | 2026-07-27 |
| Maestro Operativo (`D167`) | *"No se usa scoring numérico"* | 2026-07-31 |

✅ **Resolución: sin scoring numérico.** Solo viable / parcialmente viable / no viable.
🔴 **Pendiente:** el master conserva la propiedad y los motivos de rechazo con nomenclatura de score.
→ [[Proceso Comercial Solicitantes]]

### C-03 · El "Deal padre de campaña"

| Fuente | Dice |
|---|---|
| Regla 15 del contrato técnico (`X018`), columna Notas | *"Todos los Deals creados se asocian al mismo Deal de Campaña (padre)"* |
| Regla 15, columna Decisión final | *"No crear un Deal padre de campaña; usar la asociación con Proyecto"* |
| PLAN-042 (`X001`) | Pide evaluar si HubSpot soporta asociación deal-deal o si requiere propiedad `deal_padre` |
| Decisión INV-06 (`D167`) | *"Proyecto conecta. **No existe Deal padre de campaña**"* |

✅ **Resolución: no hay Deal padre. El conector es el objeto Proyecto**, con llave `numero_de_proyecto`.
🔴 **Pendiente:** `deal_padre` sigue apareciendo en la lista de propiedades a crear (`X017`).

### C-04 · La contradicción de `amount`

| Hallazgo | Dice |
|---|---|
| APP-037 | `amount` poblado en **0.14 %** de los deals |
| APP-055 | `amount` poblado en **~99.9 %** |

✅ **Resuelta por el propio Plan Único (PLAN-057):** prevalece APP-055. APP-037 quedó obsoleto, *"probablemente medido antes de que la app poblara amount"*. Sin acción correctiva; solo cierre documental.

### C-05 · Las reglas de congelado de inversionistas

| Fuente | Dice |
|---|---|
| Master de Inversionistas (`X012`) | *"El inversionista no ha realizado ninguna inversión activa en los últimos 90 días"* |
| Decisión INV-12 (`D167`) | **Regla A:** 15 días sin depósito después de STP. **Regla B:** cero inversiones activas + saldo 0 + 90 días sin actividad. *"Nunca congelar solo por no login si hay inversiones activas"* |

✅ **Resolución: prevalece INV-12**, que es más precisa y añade una salvaguarda que el master no tenía.

### C-15 · ¿Quién es "Fulmentfi"? — ✅ RESUELTA por la correspondencia

**Fulmentfi es el dominio de ARI Abogados.** No es una tercera entidad.

El 2026-05-29 Raquel entregó los contactos del despacho para integrarlos a los workflows:

- **Francisco Rodríguez** — direccion@fulmentfi.com
- **Evelyn Montes** — emontes@fulmentfi.com

Caroline confirmó: *"Los agregamos en HubSpot el lunes **solo como visualizadores** y creamos un equipo. Es el equipo que recibirá las notificaciones vía WF."*

→ [[Roles Operativos]] · [[Correspondencia]]

### C-17 · ¿De qué lado está Leticia? — ✅ RESUELTA

**Leticia es de Black & Orange.** El 2026-01-07 Caroline pidió a Raquel gestionar el acceso de partner al portal para **leticia@black-n-orange.com**, y en los correos de junio aparece como destinataria del lado del proveedor.

→ [[Directorio de Contactos]]

### C-19 · La fecha del contrato — ✅ RESUELTA (y era más grave de lo que parecía)

| Fuente | Dice |
|---|---|
| Texto del contrato (`P_CONTRATO`) | *"se firma el presente Contrato el día 05 de enero de 2026"* |
| Notificación de Monific (`P_NOTIF`) | *"El Contrato de prestación de servicios de fecha 5 de enero de 2026"* |
| **Correspondencia (`D190`)** | 2026-01-06 Legal B&O envía el contrato para revisión · 08 al 16-ene negociación legal · **2026-01-19** Emiliano: *"Estamos de acuerdo, envíanos el vínculo para firmar de Ted"* · **2026-01-20** Raquel: *"Me da gusto que ya se firmó el contrato"* |

✅ **Resolución: el 5 de enero es la fecha del documento; la firma efectiva vía DocuSign ocurrió el 19–20 de enero de 2026.**

⚠️ **Consecuencia relevante:** el **kickoff se celebró el 7 de enero, antes de la firma**, y las sesiones de mapeo arrancaron el 21–22 de enero. Si algún plazo contractual se cuenta desde la firma, la referencia correcta es el 19–20 de enero, no el 5.

→ [[Cronologia del Proyecto]] · [[Contrato y Alcance]]

---

## 🔴 Nuevas — abiertas por la correspondencia

### C-21 · El interés moratorio: 38 % anual vs. dos veces la tasa ordinaria

| Fuente | Dice | Fecha |
|---|---|---|
| `D195` (diseño hecho con IA) | *"Interés Moratorio (**38 % anual**)"* aplicado automáticamente a proyectos Solid | 2026-01-26 |
| **Vianey Correa, Directora de Finanzas** (`D190`) | *"el interés moratorio para todos los casos **sin excepción y sin casos especiales es dos veces la tasa ordinaria**"* | 2026-03-05 |

⚠️ **No son lo mismo.** El 38 % es una tasa fija; "dos veces la ordinaria" es una fórmula que varía por proyecto. Y Vianey dice explícitamente *"sin excepción y sin casos especiales"*, lo que además contradice que la penalización aplique **solo** a proyectos Solid.

**Prevalece la instrucción de la Directora de Finanzas**, pero debe confirmarse contra el contrato de financiamiento antes de configurar nada. → [[Proceso de Cobranza]] · [[Preguntas Abiertas]] V-01

### C-22 · El aforo: 1.5 : 1 vs. 2 : 1

| Fuente | Dice |
|---|---|
| `D195` | Proyecto **Solid** = *"Aforo ≥ **1.5 : 1** + Garantía Real"*. Revaluación exige aforo ≥ 1.5 : 1 |
| **Karen Gómez, Directora de RH y Operaciones** (`D190`, 2026-04-17) | *"Que el proyecto cuente con un activo que respalde el monto solicitado (**idealmente 2:1**)"* |
| Raquel (respuesta a Karen) | Confirma que *"activo que respalde el monto solicitado (**relación 2:1**)"* se captura en los campos Valor inmueble y Monto solicitado, y que el aforo es criterio del Comité |

⚠️ Puede que 2:1 sea el criterio comercial de originación y 1.5:1 el umbral de alerta en cobranza — pero **nadie lo ha escrito así**. → [[Modelo de Negocio]] · [[Proceso de Cobranza]]

### C-23 · La validación PLD desapareció del pipeline

| Fuente | Dice |
|---|---|
| `D195` | Validación PLD ≤ 48 h hábiles como subetapa del análisis |
| **Emiliano, Director Legal** (`D190`, 2026-04-16) | *"**Falta el paso de validación de PLD o KYC**"* al revisar las propiedades de los pipelines |
| Raquel (respuesta) | *"ya metí todos los que pides **menos PLD en inversionistas**, pero no por temas de quererlo saltar, sino porque este es más comercial"* |

⚠️ Quedó **integrado en Solicitantes pero explícitamente excluido de Inversionistas**. En una entidad regulada eso merece confirmación de Compliance. → [[Marco Regulatorio]] · [[Proceso Comercial Inversionistas]]

### C-24 · "Tipo de instrumento": los valores no coinciden

| Fuente | Valores |
|---|---|
| Master de Solicitantes (`X012`) | Hipotecario · Fiduciaria · Cesión de derechos · Pagaré con aval — **selección individual** |
| **Emiliano** (`D190`, 2026-04-16) | Hipotecario · Fiduciario · **Convenio de mediación** · Otra · No aplica — **selección múltiple** |

Emiliano además pidió **eliminar** tres propiedades del master: *notario asignado*, *fecha de inscripción a registro* y *número de fideicomiso*. El master las conserva como obligatorias.

⚠️ Es una instrucción directa del Director Legal que el master no recogió. → [[Proceso Comercial Solicitantes]] · [[Propiedades]]

### C-25 · "Resultado pre-evaluación": tres valores o cuatro

| Fuente | Valores |
|---|---|
| Master y decisión del 2026-07-27 | Viable · Parcialmente viable · No viable (**3**) |
| **Decisión 2 de Monific** (`D190`, 2026-06-10) | *"Propiedad maestra única **'Resultado pre-evaluación'** con los valores: Viable / Parcialmente viable / No viable / **Pendiente de información**"* (**4**) |

La decisión del 10 de junio también encargó a B&O *"documentar el mapeo de los valores antiguos a los nuevos, para garantizar que los workflows existentes no se rompan en la transición"* — pendiente que sigue abierto.

⚠️ El nombre canónico de la propiedad es **"Resultado pre-evaluación"**, no "Viabilidad inicial" ni "Ruta de Scoring". → [[Proceso Comercial Solicitantes]] · [[Propiedades]]

### C-26 · La integración sí llegó a funcionar en marzo

| Fuente | Dice |
|---|---|
| Narrativa general del proyecto | La integración nunca funcionó; está bloqueada desde mayo |
| **Jesús Torres** (`D190`, 2026-03-09) | *"Logramos identificar y solucionar los problemas que existían en la sincronización. **A partir de ahora, en la app web los flujos de registro, compra y venta de participaciones se reportarán correctamente hacia HubSpot.** Adicionalmente, realizamos una **resincronización** de solicitantes, contactos y compras de participaciones, incluyendo liquidaciones, con fecha de corte al 8 de marzo de 2026."* |

⚠️ **Hubo una integración funcionando desde marzo de 2026.** Lo que está pendiente es la *nueva* integración con Tickets y Proyecto, más las propiedades financieras. Matiza mucho la afirmación de que "la integración no existe". → [[Integracion Admin Monific HubSpot]]

---

## 🟠 Abiertas — sin decisión registrada

### C-06 · Los tres calendarios de cobranza

Tres cadencias distintas conviven sin conciliación:

| Fuente | Cadencia |
|---|---|
| `D195` (flujo operativo) | **T-10 · T-7 · T-5** automáticos, luego T-5/T-3/T-2/Día 0 manuales |
| `D167` (cadena ARI) | **Día 15** aviso a ARI · **16** copia · **30** cobranza formal · **61+** ejecución legal |
| Correo de Cobranza (fuente F09) | **Semana 1** Monific · **semana 2** despacho · **legal desde semana 3** |
| Bloque B05 (`X020`) | *"Reimplementar ciclo **día 1/7/13/14/15**"* |

⚠️ Cuatro versiones. Puede que describan momentos distintos del ciclo (preventivo vs. mora vs. escalamiento legal), pero **nadie lo ha dicho por escrito**. Es un pendiente crítico explícito del Maestro Operativo.
→ [[Proceso de Cobranza]] · [[SLAs y Escalamientos]]

### C-07 · El conteo de workflows

| Fuente | Cifra |
|---|---|
| Maestro Operativo | **64** workflows numerados + 6 flujos UNE = 70 |
| Portal HubSpot (API) | **96** workflows totales |
| Auditoría de comunicaciones | **70** workflows revisados |
| Coincidencia por nombre | 59 de los 64 coinciden exactamente · **5 con diferencia de nombre** |

⚠️ **Cifra precisada el 2026-08-03 (`D198`): son 32**, no ~26 — 96 en el portal menos 64 canónicos. Incluyen WF-065 a WF-069 y los tres del formulario (`1640673709`, `1832556831`, `1834467729`). No hay inventario de qué son ni si deben conservarse; requieren decisión de adoptar, archivar o eliminar.
→ [[Workflows]] · [[Analisis de Cierre BNO]]

### C-27 · Rojos que no acreditan defecto

Seis de los 29 rojos del Maestro Operativo no describen un problema comprobado:

| ID | Lo que dice su propia ficha |
|---|---|
| WF-051 · WF-052 · WF-060 | *"No localizado en la relación de flujos de la auditoría; requiere validación puntual"* — ausencia de evidencia, no defecto |
| WF-035 | *"La auditoría indica que se eliminó el duplicado"* — **ya resuelto**, y sigue en rojo |
| WF-039 | *"Configuración aceptada, activación aún pendiente"* — contradice el texto de su misma ficha |
| WF-058 · WF-059 · WF-061 | Hallazgos marcados literalmente **"(tentativo)"** |

⚠️ **3 de los 13 rojos de Cobranza** están marcados por no haber sido encontrados, no por tener un defecto. Un rojo sin defecto acreditado **no tiene criterio de cierre posible**: no hay nada que demostrar.
→ [[Analisis de Cierre BNO]] · [[Auditorias]]

### C-28 · El tablero contradice las fichas individuales

| Elemento | Tablero | Ficha individual |
|---|---|---|
| WF-028 | 🔴 Rojo | 🟡 Amarillo |
| WF-037 | 🔴 Rojo | 🟡 Amarillo |
| Conteo de rojos de Inversionistas | **5** | **3** en el resumen |

⚠️ El mismo documento (`D167`) se contradice consigo mismo. La cifra de 29 rojos depende de cuál de las dos vistas se tome.
→ [[Workflows]]

### C-29 · Dos fichas sin regla de diseño verificable

**WF-045** y **WF-059** traen como regla de diseño la frase *"Implementado con validación"*. Es texto de plantilla, no una regla.

⚠️ **No se puede construir un caso de prueba contra ella**, y por lo tanto no se pueden cerrar con el criterio de evidencia que exige Monific.
→ [[Workflows]] · [[Proceso de Servicio ATC]]

### C-30 · La matriz de comunicación contradice las decisiones canónicas del 31 de julio

Cuatro puntos en los que `D001` va contra `D167`: conserva retiros en el ciclo de Inversionistas, ignora el cupo de 7,000 contactos de marketing, usa el valor `registro_simple` para `nivel_registro` y hace depender la reactivación de un campo calculado que HubSpot no puede generar sin Data Hub.

⚠️ Indican que **la matriz es anterior a la actualización del 2026-07-31 o no la incorporó.** Deben resolverse antes de usarla como respuesta formal. Detalle completo en → [[Matriz de Comunicaciones]]

### C-08 · WF-054 y WF-055 comparten ID

En el inventario del Maestro Operativo, ambos aparecen con el ID `1820860318`.

⚠️ **Verificar antes de tocar nada.** O es un error de transcripción o dos entradas del master apuntan al mismo workflow real.

### C-09 · El blog en HubSpot

| Fuente | Dice |
|---|---|
| Brief (`D193`) | *"Que se construya dentro del CMS de HubSpot (…) que ustedes diseñen e implementen la arquitectura SEO del blog"* |
| Anexo contractual (`P_ANEXO`) | **Excluido:** *"Diseño o desarrollo de páginas web, blogs, plantillas personalizadas o módulos visuales"* |

⚠️ El brief pide algo que el contrato excluye explícitamente. No hay evidencia de que se haya resuelto ni de que se haya cotizado aparte.
→ [[Proyecto BOOST]]

### C-10 · Expediente Azul vs. Google Drive

| Fuente | Dice |
|---|---|
| Brief (`D193`) y anexo | Integración unidireccional HubSpot → Expediente Azul, con actualización de estatus |
| Diseño operativo (`D195`, 2026-01-26) | El solicitante carga en **Google Drive**; Expediente Azul no aparece en el flujo |
| Contrato técnico (`X018`) | Expediente Azul **no aparece** en ninguna de las 30 reglas |

⚠️ ¿Se sustituyó Expediente Azul por Drive, o conviven? Sin decisión registrada.
→ [[Sistemas Externos]]

### C-11 · Cuatro o cinco dashboards

El brief pide cinco (inversionistas, solicitantes, marketing, ATC, financiero). El anexo compromete cuatro (inversión, cobranza, comunicación, desempeño comercial). El mapeo entre ambas listas no está hecho.
→ [[Dashboards y Reportes]]

### C-12 · La cláusula de aceptación del contrato

En la misma cláusula de Duración conviven:

> *"En caso de no realizar ninguna corrección en dicho plazo, los Servicios se entenderán como entregados."*
> *"**Ningún entregable se considerará aceptado de forma tácita.**"*

⚠️ Las dos frases se tensionan. Monific invoca la segunda. Es una cuestión de interpretación legal, no técnica.
→ [[Contrato y Alcance]]

### C-13 · Dos listas de responsabilidad incompatibles

| Documento | Distribución |
|---|---|
| Requerimiento Formal (`X020`) | **217 pendientes exigibles a B&O** |
| Plan Único de Corrección v3 (`X001`) | 51 acciones: **27 de Monific–TI**, 11 de B&O, 5 compartidas, 2 de Raquel, 6 sin asignar |

⚠️ Son dos universos distintos (hallazgos vs. acciones técnicas) pero se solapan. Conviene un mapeo explícito de qué acción del Plan Único cierra qué hallazgo del requerimiento.
→ [[Auditorias]]

### C-14 · La IA y el lead scoring predictivo

El brief pide *"lead scoring predictivo basado en comportamiento y contexto"* usando IA de HubSpot. La decisión del 2026-07-27 descarta el scoring numérico del MVP. ⚠️ ¿Queda fuera del MVP o fuera del proyecto?
→ [[Sistemas Externos]]

*(C-15 y C-17 se movieron a la sección de resueltas.)*

### C-31 · ¿Están terminados los flujogramas de ATC y UNE?

Dos registros consecutivos, con un día de diferencia, dicen cosas opuestas:

| Fuente | Dice | Fecha |
|---|---|---|
| `log.md`, entrada *Flujogramas V2 — se completan ATC/UNE y el mapa de integración API* | *"Con esto el juego V2 queda completo: **5 tableros**"*, incluido uno de **ATC + UNE** en la cuenta de Miro de B&O (`miro.com/app/board/uXjVHr71yws=`) | **2026-09-01** |
| `D199` — sesión interna B&O (David Ochoa a Emmanuel Chulin) | *"Aún faltan completar los flujogramas de **atención y UNE**, los cuales están en proceso de generación y validación."* Es la razón explícita del aplazamiento de la entrega al cliente (decisión D-09-02-02) | **2026-09-02** |

⚠️ *(inferencia)* Puede no ser contradicción sino **dos artefactos distintos**: los V2 son tableros
de Miro, y lo del 2026-09-02 es una **simplificación posterior** que usa los archivos V2 como
insumo — David los lista entre sus fuentes. Pero la fuente **nunca dice "Miro" ni "V2"** para lo que
muestra en pantalla, ni da URL o ID del artefacto, así que no hay con qué decidirlo.

🆕 **`D202` (2026-09-08) no la cierra.** Seis días después David Ochoa declara que *"de mi lado,
según yo, ya no tengo nada"* y habla de los tableros de Miro como cosa hecha, incluido *"un Miro
técnico que conecta todo"*. *(inferencia)* Es **coherente** con que ATC y UNE se hayan terminado
entre el 2026-09-03 y el 2026-09-08, pero **la fuente no menciona ATC, UNE ni ningún flujograma por
su nombre, ni da URL o ID**. No es evidencia de cierre.

**No se resuelve.** Ambas versiones se conservan con su fecha. Lo que la cierra: que alguien diga
si el tablero `uXjVHr71yws=` es o no lo que David daba por pendiente el 2026-09-02.
→ [[minuta-2026-09-02-flujogramas-simplificados|Minuta 2026-09-02 · Flujogramas simplificados]] · [[minuta-2026-09-08-mapeos-cubiertos-y-espera-integracion|Minuta 2026-09-08 · Mapeos cubiertos]] · [[Proceso de Servicio ATC]] · [[Proceso UNE]]

### C-32 · "Ya no hay deuda de trabajo" vs. 171 hallazgos abiertos

La contradicción más grande del corte: **lo que B&O se dice a sí misma puertas adentro no coincide
con lo que la propia wiki documenta**.

| Fuente | Dice | Fecha |
|---|---|---|
| `D200` — sesión interna B&O (David Ochoa a Emmanuel Chulin) | *"ya prácticamente nos entregó todo […] con ella ya no tenemos ninguna deuda de trabajo"* · *"el SOP y también las capacitaciones están listas"* · *"sería hasta incluso posible decirle al cliente que **a nuestro lado ya está prácticamente implementado todo**"* | **2026-08-24** |
| `D201` — sesión interna B&O, la semana siguiente | *"de mi lado está todo bien […] no hay mucho más que moverle"*; el único pendiente propio reconocido es homologar el flujograma | **2026-08-31** |
| `D202` — sesión interna B&O, dos semanas después | *"el tema de los mapeos está cubierto"* · *"de mi lado, según yo, ya no tengo nada"* · *"ya tenemos incluso listos los **documentos para capacitaciones**"* · *"no hay nada más que tengamos pendiente en realidad más que **esperar a que ellos terminen con la integración**"* | **2026-09-08** |
| `X020` Requerimiento Formal · `X002` Matriz Única de Hallazgos | **84 hallazgos críticos + 87 altos abiertos** (217 pendientes exigibles) | 2026-06-18 |
| `X002` verificación por API · `cliente.yaml` | **0 de 70** workflows verificados · **29** con error · **26 de 31** propiedades comprometidas **no existen** · **0 de 4** dashboards · engagement `en-riesgo`, fase `remediacion` | corte técnico 2026-06-17 |
| [[Pendientes Criticos]], bloqueador #9 | La **fecha de cierre H5 venció el 2026-08-28 sin prórroga escrita** — cuatro días *después* de la declaración de `D200` | 2026-08-28 |
| [[Analisis de Cierre BNO]] | Las **11 correcciones** que B&O se comprometió por escrito a ejecutar el 2026-08-03 siguen **sin evidencia de ejecución** | 2026-08-03 |

⚠️ **Regla de resolución aplicada:** `D200`, `D201` y `D202` son 🔵 **Declarado** —sesiones internas,
sin documento, export ni URL, y **sin participación de Monific**—. La evidencia técnica directa (API
y export) prevalece sobre la declarativa (`AGENTS.md` §13). **La declaración no cierra ningún bloque.**

🆕 **Lo que agrega `D202` (2026-09-08).** Dos cosas, y ninguna cierra la contradicción:

1. **La declaración va por su tercera repetición** en tres sesiones consecutivas —2026-08-24,
   2026-08-31 y 2026-09-08—, todas internas y ninguna acompañada de un solo ID, URL o export.
2. **Nombra la capacitación por primera vez desde `D200`:** *"ya tenemos incluso listos los
   documentos para capacitaciones"*. El bloqueador **#7** de [[Pendientes Criticos]] (bloque **B09**)
   no exige que el material exista —la wiki ya lo registra como *construido y publicado*—, exige
   **acreditar entrega, asistencia y evaluación**. *(inferencia)* La declaración y el bloqueador
   hablan de cosas distintas y por eso pueden convivir; la fuente no hace la distinción.

*(inferencia)* Las dos afirmaciones pueden ser compatibles si "sin deuda de trabajo" significa
*"nadie del equipo de B&O le debe un entregable a otro"* y no *"el proyecto está completo"*. La
fuente nunca hace esa distinción, y en la misma sesión David propone comunicárselo al cliente en la
segunda lectura — la que el estado documentado no sostiene.

**No se resuelve.** Ambas versiones se conservan con su fecha. **Lo que la cierra:** la *confronta*
que David Ochoa se comprometió a hacer en esa misma sesión —auditoría unificada de Raquel Alfie
contra HubSpot, contra lo subido y contra lo pendiente—. Al 2026-09-08 esa bitácora no existe en la
wiki.

🆕 **Lo que agrega `D203` (2026-09-24) — la primera respuesta escrita de Monific.** Dos filas nuevas:

| Fuente | Dice | Fecha |
|---|---|---|
| Correo de B&O a Monific, conocido **solo por `D203`** (S02) | B&O declara sus **entregables directos concluidos** y difiere pruebas finales, dashboards poblados y capacitación hasta después de TI. Es la **primera vez que la declaración sale de las sesiones internas y llega por escrito al cliente** | **2026-09-11** |
| `D203` — reporte de evidencias de **Monific**, con export por API | *"No hay sustento suficiente para aceptar el cierre integral ni para considerar todas sus configuraciones correctas."* 14 hallazgos, 5 críticos; los 184 "Sí" de la plantilla *"no son 184 puntos aceptados por Monific"* | **2026-09-24** |

Con esto la contradicción **deja de ser interna**: ya no es lo que B&O se dice a sí misma contra lo
que la wiki documenta, sino **lo que B&O le escribió al cliente contra lo que el cliente dice haber
comprobado**. `D203` es evidencia técnica del cliente —export por API, sin pruebas nuevas, con límites
declarados— y **B&O no la ha reproducido**. **No se resuelve.** Lo que la cierra ahora ya no es la
confronta interna, sino **la respuesta por ID en la Plantilla_Respuesta_BNO** que el propio `D203`
exige. → [[revision-cierre-2026-09-24-reporte-evidencias-monific|Revisión de cierre 2026-09-24]]
→ [[minuta-2026-08-24-cierre-declarado-y-confronta-auditoria|Minuta 2026-08-24 · Cierre declarado]] · [[minuta-2026-09-08-mapeos-cubiertos-y-espera-integracion|Minuta 2026-09-08 · Mapeos cubiertos]] · [[Estado Actual]] · [[Pendientes Criticos]]

### C-33 · El bloqueo de los dashboards: ¿es la integración, o no?

| Fuente | Dice | Fecha |
|---|---|---|
| [[Analisis de Cierre BNO]] (`D198`) → [[Pendientes Criticos]] bloqueador #4 | **"Dashboards: 2 de 4 sin justificación de bloqueo."** Los de **comunicación y desempeño no dependen de la integración** | **2026-08-03** |
| `D201` — sesión interna B&O | *"el tema de dashboard que mencionan es porque **estamos bloqueados por la integración**, no hay forma de alimentar ahorita correctamente todos los datos"* · *"no es algo tan grave"* | **2026-08-31** |
| `cliente.yaml` · [[Dashboards y Reportes]] | `dashboards_objetivo: 4` · `dashboards_construidos: **0**` | corte 2026-06-17 / 2026-07-31 |

Dos problemas distintos en la misma frase:

1. **La atribución.** `D201` manda el 100 % del bloqueo a la integración; el análisis propio de B&O,
   28 días antes, ya había concluido que **la mitad de los dashboards no la necesitan**. Si eso
   sigue siendo cierto, dos dashboards podrían construirse hoy.
2. **El verbo.** *"Alimentar datos"* presupone un dashboard que existe y espera datos. La wiki
   registra **cero construidos**. Puede ser imprecisión del habla o puede haber avance no
   documentado; la fuente no da nombre, ID ni URL de ningún dashboard.

⚠️ 🔵 **Declarado**, sesión interna, sin evidencia. **No se resuelve.** Ambas versiones se conservan.
**Lo que la cierra:** el inventario de los dashboards realmente existentes en el portal `48427391`,
verificable por API.

🆕 **`D203` (2026-09-24) inclina la balanza sin cerrarla.** Monific pide a B&O *"aportar tableros
configurados aunque la validación de datos espere a TI"* y registra B06 como *"validación pendiente.
No se acreditaron los cuatro tableros poblados/conciliados"*. *(inferencia)* Es coherente con
`D198`: construir los tableros no depende de la integración; poblarlos y conciliarlos sí. El correo
de B&O del 2026-09-11 —conocido solo por `D203`— difiere *"dashboards poblados"*, no *"dashboards
construidos"*. **Sigue abierta**: nadie ha dado todavía el inventario por API.
→ [[minuta-2026-08-31-homologacion-flujogramas-y-reprogramacion|Minuta 2026-08-31 · Homologación de flujogramas]] · [[Dashboards y Reportes]] · [[revision-cierre-2026-09-24-reporte-evidencias-monific|Revisión de cierre 2026-09-24]]

### C-34 · Las cifras canónicas del 2026-06-17 contra el corte del cliente del 2026-09-24

`cliente.yaml` y [[Estado Actual]] sostienen el corte técnico del **2026-06-17**. El reporte de
Monific trae otro, **tres meses posterior**, y en varios puntos **el propio cliente retira sus
afirmaciones de junio**:

| Dato | `cliente.yaml` / wiki | `D203` (Monific) | Nota |
|---|---|---|---|
| Workflows | `workflows_total: 70` | **105**, de ellos **85 encendidos** | Configuración leída el 2026-09-22 |
| Workflows UNE | "6 flujos sin acreditar" · B15 "flujo UNE roto" | **Los seis existen**, creados el 2026-08-06 y encendidos; falta el recorrido E2E | *"Ya no es correcto decir 'no existen los seis UNE'"* |
| Propiedades comprometidas | `propiedades_inexistentes: 26` de 31 | *"El histórico '26 faltantes' no se reemite como cifra vigente"*; 12 `monific_*` nuevas del 2026-09-21 | No da cifra nueva |
| Comunicaciones | `comunicaciones_publicadas: 0` de 81 | *"No se vuelve a afirmar que las 81 comunicaciones están ausentes"*; pruebas de COB-003 y COB-010 | Tampoco acredita 81 recibidas |
| WF-039 (`1808890376`) | **OFF**, *"trigger y campos erróneos"*; INV-14 manda que permanezca apagado hasta corrección y aceptación ([[Workflows]]) | **Encendido**, revisión 11 del 2026-09-04; **ya no** reabre Activo, pero sigue usando campos de Solicitantes | Corrección parcial reconocida. *"Encendido no prueba autorización"*: choca con INV-14 |
| Masters con contenido de otro cliente (B12) | Hallazgo vigente | *"No se revalida el hallazgo histórico"* | Ni lo confirma ni lo retira |
| Plantilla de respuesta | 217 pendientes exigibles | 217 filas: 184 Sí · 30 Parcial · 3 No, **autodeclarados por B&O** | No son aceptaciones |

**Regla aplicada** (`AGENTS.md` §13): prevalece la evidencia técnica directa. `D203` lo es —export por
API— pero **del cliente y no reproducida por B&O**, y sus límites están declarados. Sustituir las
cifras canónicas es cambiar `cliente.yaml`, y eso es decisión humana. **No se resuelve:** ambas
versiones quedan aquí con su fecha. → `PENDIENTES.md` **H-34**.
→ [[revision-cierre-2026-09-24-reporte-evidencias-monific|Revisión de cierre 2026-09-24]] · [[Estado Actual]] · [[Auditorias]]

### C-35 · ¿Hubo acuerdo de calendario después de H5, o no?

| Fuente | Dice | Fecha |
|---|---|---|
| [[Pendientes Criticos]], bloqueador #9 · `PENDIENTES.md` H-20 | La fecha de cierre **H5 venció el 2026-08-28 sin prórroga escrita**. Disparador de R-01 | 2026-08-28 |
| `D203` (S03), citando correos del **2026-08-20** | *"El 20 de agosto se aceptó alinear el trabajo al **cierre estimado de TI hacia finales de octubre**"*, con conformidad de Raquel Alfie. *"No se califica a TI como atrasado"* | 2026-08-20 |
| `D204` | *"Es una estimación, no cierre técnico comprobado"* · *"No se reinician plazos ni se interpreta el Gantt histórico de julio como un nuevo compromiso"* | 2026-09-24 |

*(inferencia)* No es necesariamente una prórroga contractual: el propio cliente dice que **no reinicia
plazos**. Pero sí es un **acuerdo escrito de ritmo**, anterior en ocho días al vencimiento de H5, que
la wiki no conocía y que debilita la lectura de *"sin nada escrito"*. Los correos no están en la wiki;
se conocen solo por `D203`. **No se resuelve.** → `PENDIENTES.md` **H-35**.
→ [[revision-cierre-2026-09-24-reporte-evidencias-monific|Revisión de cierre 2026-09-24]] · [[Pendientes Criticos]] · [[Riesgos]]

### C-36 · "Monific no recibe estatus formal de B&O" contra el correo del 2026-09-11

| Fuente | Dice | Fecha |
|---|---|---|
| [[Pendientes Criticos]], sección de la sesión del 2026-09-08 | *(inferencia de la ingesta de `D202`)* **Monific no ha recibido estatus formal de B&O** desde antes del vencimiento de H5; el correo pendiente de Emmanuel Chulin no tiene destinatario identificado (H-32) | 2026-09-09 |
| `D203` (S02) | Hubo un **correo de B&O a Monific el 2026-09-11** con el estatus de sus entregables, y una **respuesta de Monific** que no acepta el cierre integral. Ambos en el buzón de `raquel@monific.com` | 2026-09-11 |

La inferencia de la wiki era válida al 2026-09-09 y **quedó superada tres días después**. *(inferencia)*
El correo del 2026-09-11 es muy probablemente el que `D202` dejó pendiente, lo que **cerraría H-32**,
pero ninguna fuente lo dice así. **No se resuelve a la fuerza**: se conserva la inferencia con su fecha
y se anota el hecho nuevo. → `PENDIENTES.md` **H-32** y **H-35**.
→ [[revision-cierre-2026-09-24-reporte-evidencias-monific|Revisión de cierre 2026-09-24]] · [[minuta-2026-09-08-mapeos-cubiertos-y-espera-integracion|Minuta 2026-09-08 · Mapeos cubiertos]]

---

## 🟡 Ambigüedades menores

### C-16 · Nombres mal transcritos

Las minutas provienen de transcripción automática de voz:

| Correcto | Variantes |
|---|---|
| Emmanuel Chulin | Manuel Chulín · Emanuel · Em · Emmanuel Fletcher · Ema |
| Jazmín Córdova | Jaz · Jazz · Yasmin · Jazmín Córdoba · **Jess** · **Yes** *(`D200`)* |
| Guillermo | Memo |
| Caroline Bersot | Caro · Karola · Carolline |
| Raquel Alfie | **Kel** *(`D201`)* |
| Monific | Bonific · Money Feed · Monique · munición · bonifica · **Moni** · **Monif** · **Municip** *(`D200`, `D201`)* |
| HubSpot | Hotspot · Hostpot |
| Claude | Clot · cloud |
| equipo de TI | equipo Eti *(`D201`)* |

⚠️ **`D200` y `D201` añaden un caso nuevo:** *"Jess"* y *"Yes"* aparecen como el nombre de quien
implementó y probó las comunicaciones al cliente, y a quien se libera del proyecto el 2026-08-24.
*(inferencia)* Es **Jazmín Córdova**, Lead de Desarrollo Web / Tecnología de B&O, por el patrón de
variantes ya registrado y por el rol. **No está confirmado por escrito.** → `PENDIENTES.md` H-28.

**Caso específico:** la minuta del 2026-08-04 (`D181`) lista como participantes de Monific a *"Raquel, Emanuel, Daniel y Jesús"* y simultáneamente identifica a *"Manuel Chulín"* como gerente de operaciones de B&O. Es muy probable que sea la misma persona colocada en el lado equivocado.
→ [[Directorio de Contactos]]

### C-18 · `plaza_meses`

El mapeo de la propiedad "Plazo en meses" tiene el nombre interno `plaza_meses`. Parece un typo de `plazo_meses`.

⚠️ **Los nombres internos son inmutables tras crearse.** Hay que decidir antes de crear la propiedad, no después.
→ [[Diccionario de Propiedades API]]

### C-20 · Las tasas de mora

Comisión por pago tardío **15 % + IVA** viene de `D195`, documento de diseño con apoyo de IA. **Confirmar contra el contrato de financiamiento real** antes de configurarla en HubSpot.

*(El interés moratorio se separó en C-21, porque hay una instrucción explícita de la Directora de Finanzas que lo contradice.)*

---

## Huecos de conocimiento de esta wiki

Fuentes que no se pudieron leer y quedan pendientes:

| Fuente | Problema |
|---|---|
| **Flujogramas 01–04** (PDF) | Sin texto extraíble — son imágenes. 🟡 **Mitigado:** los flujogramas originales viven en **Miro** (`miro.com/app/board/uXjVG7nRR_I=`), según `D190`. Se pueden consultar ahí |
| **Flujogramas 05–06** | Texto casi vacío |
| **SLA B&O a Monific.pdf** | Sin texto extraíble. ⚠️ Es un documento contractual relevante |
| **Monific Kick Off 2026.pdf** | Sin texto extraíble (presentación en imágenes) |
| **4 flujogramas antiguos** | Sin texto extraíble |
| **04. Tracker Matriz Comunicaciones.xlsx** (2 copias) | No se pudo abrir — posible protección o corrupción |
| **Master_Cobranza_reparado_temporal.xlsx** | No se pudo abrir |
| **REPORTES MONIFIC - HUBSPOT** (`D196`) | Extraído pero no contrastado contra el portal |
| ~~Intercambio de correos B&O (`D189`, `D190`)~~ | ✅ **Analizado el 2026-08-07** → [[Correspondencia]]. Resolvió C-15, C-17 y C-19; abrió C-21 a C-26 |
| **Correos de julio y agosto de 2026** | 🔴 **No existen en las fuentes.** `D190` termina el 2026-06-29. Cubrirían el plan correctivo definitivo, el Gantt v2, la homologación de masters y la sesión técnica del 4-ago |
| **Conversaciones de WhatsApp** | 🔴 No disponibles. Las partes las citan constantemente (*"retomando lo comentado previamente por WhatsApp"*); ahí se tomaron decisiones operativas y de agenda |

→ [[Preguntas Abiertas]] · [[Indice de Fuentes]]

---

## Cómo usar esta página

1. **Antes de configurar algo en HubSpot**, revisa si el dato que vas a usar está aquí.
2. **Antes de citar una cifra**, verifica si tiene contradicción registrada.
3. **Cuando resuelvas una contradicción**, muévela a la sección "Resueltas" con la fecha y la fuente de la decisión.
4. **Cuando encuentres una nueva**, añádela con las dos versiones, sus fuentes y sus fechas. No la resuelvas por tu cuenta si no hay evidencia.

---

## Relacionado

- [[Analisis de Cierre BNO]] — el análisis del 2026-08-03 que abrió C-27 a C-30
- [[Auditorias]] — el método que produjo los datos
- [[Riesgos]] — R-10, el riesgo de datos alucinados
- [[Preguntas Abiertas]] — lo que falta decidir
- [[Indice de Fuentes]] — qué documento es cada ID

## Fuentes

Todas las citadas inline. Ver el campo `fuentes` del frontmatter.
