# Bitácora de la Wiki Monific

Registro append-only, **más reciente arriba** (orden cronológico inverso). Nunca se eliminan entradas.

Formato de encabezado (mantenerlo estable para poder hacer `grep "^## \[" log.md | head -5`):

```
## [AAAA-MM-DD] tipo | Título corto
```

Tipos: `ingesta` · `consulta` · `lint` · `refactor` · `decision` · `meta`

> **Nota de la homologación del 2026-08-20.** Hasta esa fecha esta bitácora se escribía *al final*.
> Se cambió a *más reciente arriba* para homologar con las otras siete wikis de B&O —seis ya lo
> hacían así— y con el contrato de wiki de cliente. **Las entradas por debajo de la primera siguen en
> su orden original**: no se reordenaron para no arriesgar el contenido. Toda entrada nueva va arriba.

---

## [2026-09-28] meta | Espejo de la carpeta 50. Monific en GitHub para el constructor de la cuenta

Se creó el repositorio **privado** `https://github.com/dochoa001/monific-wiki` (cuenta personal `dochoa001`)
con la carpeta completa `50. Monific/`: esta wiki, `01. Adicionales/`, `02. Trabajo interno/`,
`03. Entregables/`, `outputs/`, `scripts/` y `tools/`. Audiencia: **solo B&O**. Se entrega al constructor
de la cuenta para que sus agentes arranquen con todo el contexto, incluido lo que salió mal y ya se corrigió.
**No es material para Monific.**

**Cómo está montado.** La regla 11 de `AGENTS.md` sigue en pie: no hay `.git` dentro de esta carpeta ni de
`50. Monific/`. El historial vive fuera de Drive, en `C:\Users\david\bno-git\monific-wiki\.git`, y ese
repositorio usa `50. Monific/` como árbol de trabajo (`core.worktree`): Git solo lee la carpeta, no la copia
ni la modifica. Se publica con `02. Trabajo interno/03. Scripts/publicar-github.ps1` (commit + push;
`-SoloVer` lista cambios sin publicar). **Flujo de un solo sentido:** la carpeta manda y GitHub es espejo;
lo que alguien edite en GitHub hay que traerlo a mano. Detalle en `MANTENIMIENTO.md` §6.

**Qué no viaja.** Exclusiones locales (`.git\info\exclude`; no hay `.gitignore` en el árbol): `workspace.json`
de Obsidian, temporales de Drive y Office, `node_modules/` y el lienzo vacío `Sin título.canvas`.

**Verificaciones antes de publicar.** Escaneo de credenciales sobre archivos de texto, Excel/Word/PowerPoint
descomprimidos y el interior de `Monific-Auditoria.zip`: **0 hallazgos** (las únicas coincidencias fueron
cadenas base64 de fuentes tipográficas en `Vista previa - 56 laminas.html`). Sin `.git` anidados ni
`.gitignore` sueltos. Archivo más grande: 21 MB, bajo el límite de GitHub.

**Archivos tocados en esta wiki:** `log.md` (esta entrada), `MANTENIMIENTO.md` (§1 y nuevo §6), `README.md`
(sección *Control de versiones*), `cliente.yaml` (`wiki.espejo_github`) e `index.md` (línea de
`MANTENIMIENTO.md`). Fuera de la wiki: `README.md` y `CLAUDE.md` nuevos en la raíz de `50. Monific/` como
puerta de entrada del repositorio, `.gitkeep` en las cinco carpetas vacías de `02. Trabajo interno/` y
`03. Entregables/` para que la estructura viaje, y el script de publicación.

**Pendiente / decisión humana.** GitHub no resuelve wikilinks `[[…]]`: quien reciba el repo navega por carpetas
e `index.md`, o clona y abre en Obsidian. Si se quiere automatizar la publicación, la opción natural es añadir
el script como último paso del pase programado de `/sincronizar`, o una tarea programada de Windows.

## [2026-09-28] ingesta | La revisión de cierre de Monific del 2026-09-24 (`D203`, `D204`)

Pase autónomo de `/sincronizar` (tarea programada) para **dos** fuentes nuevas, ambas **de autoría de
Monific** (propietaria `raquel@monific.com`), leídas al **100 %** por el MCP de Drive:

| ID | Documento | `fileId` | Fecha |
|---|---|---|---|
| `D203` | *01_REPORTE_EVIDENCIAS_HUBSPOT_MONIFIC_BNO_2026-09-24.docx* (215,040 b) | `1b7mgi8Dpjo8Qzv50trfrqrjCOboF5y3U` | 2026-09-24 |
| `D204` | *00_LEER_PRIMERO_REVISION_2026-09-24.txt* (4,860 b) | `1-WkPPcmjNzPbNETLACXS3LJaXpZXceLv` | 2026-09-24 |

Viven en `00_VIGENTE_LEER_PRIMERO / 2026-09-24_REVISION_DE_CIERRE` (`1gS8pZt2egHXr57yBdaOOFYUZJhaNZyGL`).
Se listó la carpeta: solo contiene esos dos archivos. Sin credenciales ni tokens en ninguno.

**Guardián de entrada.** Drive corriendo (2 procesos). `.tmp.driveupload`: **2 "en vuelo" y 802 residuos
de más de 24 h** — la cola congelada por AVG, condición conocida; `.tmp.drivedownload` **vacío**, sin copias
de conflicto ni archivos de 0 bytes → nada estaba bajando, lo local va adelante. El script sigue diciendo
`Corte : 2026-08-20` (defecto ya anotado).

**Cotejo local↔Drive** de las siete rutas existentes tocadas: en Drive solo aparecen `Auditorias.md`
(**idéntico**: 10,567 b, 2026-08-20), `Pendientes Criticos.md` y `Contradicciones y Verificaciones.md`
(ambos del 2026-08-20, **local más nuevo**). `index.md`, `log.md`, `PENDIENTES.md` e `Indice de Fuentes.md`
de esta wiki **no tienen copia en Drive posterior al 2026-08-28**. En ningún caso Drive es más nuevo → sin
divergencia, sin condición de PARA.

**Barrido de sesiones.** `title contains 'Monific' and modifiedTime > '2026-09-17'` y el listado de la
carpeta de grabaciones de Meet (`1Sid8bu8k5TT0Em_3AH27FNVfx5O6G1d-`) no dan **ninguna sesión de Monific
posterior al 2026-09-17**. La del 2026-09-17 (`Accionables Monific`) ya estaba evaluada como vacía en
**H-32** y no se reingirió.

### Qué es `D203`

Monific leyó el portal por API (configuración del 2026-09-22, export terminado el 2026-09-24,
`FINALIZADO_CON_LIMITACIONES`) y concluye que **no hay sustento para aceptar el cierre integral**: 14
hallazgos, 5 críticos —H01 campos financieros nuevos vs. viejos, H02 WF-045 con condiciones
incompatibles, H04 WF-018 a Ganado antes de publicación, H08 ARI con tres calendarios, H11 Proyecto/Ticket
por campaña—. Reconoce avances: **los seis UNE existen**, **WF-039 ya no reabre Activo**, pruebas de
COB-003/010. Y exige responder **por ID en la misma Plantilla_Respuesta_BNO**. Todo es 🟡 afirmación del
cliente, **no reproducida por B&O**.

### Condiciones de alto — registradas, no resueltas

1. **C-34 · cifras canónicas.** 70 → **105** workflows; el cliente **retira** "26 faltantes", "81
   ausentes" y "UNE no existe" como cifras vigentes; WF-039 **encendido** contra INV-14. `cliente.yaml`
   **no se tocó** → H-34.
2. **C-35 · calendario.** `D203` cita un acuerdo del **2026-08-20** de alinear el ritmo al cierre de TI a
   fines de octubre, ocho días antes del vencimiento de H5. No es prórroga (*"no se reinician plazos"*);
   el bloqueador #9 **no cambió de estado** → H-20, H-35.
3. **C-36 · estatus al cliente.** La inferencia del 2026-09-09 (*"Monific no recibe estatus formal"*)
   quedó superada: hubo **correo de B&O a Monific el 2026-09-11**. *(inferencia)* Casi cierra H-32 → H-35.
4. **C-32 y C-33 ampliadas.** La declaración de cierre ya salió por escrito al cliente y el cliente la
   rechaza; Monific pide los tableros configurados aunque los datos esperen a TI.

**Páginas creadas:** [[revision-cierre-2026-09-24-reporte-evidencias-monific|Revisión de cierre 2026-09-24]].
**Páginas editadas:** [[Indice de Fuentes]], [[Contradicciones y Verificaciones]] (C-32, C-33, nuevas
C-34 a C-36), [[Pendientes Criticos]] (sección de exigencias de Monific y notas sobre #9), [[Auditorias]]
(sección de la revisión de cierre), [[index]] y `PENDIENTES.md` (**H-34 a H-38**; notas en H-20, H-32, H-33).

**Propagación diferida (H-36):** 10 páginas de conocimiento, orientadas en la página de fuente. Se suma a
H-22, H-25 y H-31. **No se tocó HubSpot, ni Drive, ni la Plantilla_Respuesta_BNO, ni `cliente.yaml`.**

**Sin subir a Drive.** Lo escrito queda en la cola de subida congelada por AVG.

## [2026-09-19] consulta | Aparece una segunda serie de sesiones sin ingerir — *"Accionables Monific"* — y una trampa nueva del barrido

Pase de `/sincronizar` **sin ingesta**: lo encontrado es decisión humana y queda en [[PENDIENTES]] como **H-31** y **H-32**. **Ninguna página de conocimiento se modificó.**

- **Guardián de entrada**: Drive para escritorio estaba **apagado**; se arrancó y quedó corriendo (2 procesos). La cola `.tmp.driveupload` sigue con **774 residuos de más de 24 h** — la condición conocida de AVG interceptando TLS a `googleapis.com`. **No bloquea**: es cola de subida, lo local va adelante. Sin copias de conflicto, sin archivos de 0 bytes.
- **Barrido**: `parentId = '1UD0CQTOjVnE0tnnGffGbjhI4nmIAdkbH'` con corte **2026-08-20** → **vacío**. Se verificó que el ID **sí es una carpeta real** ("Monific - Meetings", `modifiedTime` 2026-06-08) y no un atajo, para descartar el modo de falla de **H-29**. Las 12 fuentes locales nuevas que reporta el guardián **ya estaban todas ingeridas** (`D199` a `D202`) o son índices de la propia wiki.
- 🔴 **Hallazgo — segunda serie sin ingerir.** Por búsqueda global por título aparece *"Accionables Monific"*, un evento **recurrente** con David Ochoa, Emmanuel Chulin y Alan Valderrabano, **distinto de "Follow up: Monific"** y **sin una sola sesión con ID de fuente en esta wiki**. La sesión del **2026-06-22** (`1OaDrs9jEQKSBKe32VfZBCdZwEO7FguxkTV9vLYBIdxU`, 61,099 caracteres) se **leyó al 100 %** y trae resumen, **9 próximos pasos con responsable** y detalles con marcas de tiempo. **No se ingirió**: es la misma decisión de alcance que **H-30** y la fija una persona. Registrada como **H-31**.
- ⚠️ **Trampa nueva del barrido, que conviene que `/sincronizar` contemple.** La sesión del **2026-09-17** de esa serie existe, pero su documento (`1Wm1gdzwvP4alJ7C6uHAlt_al-q0rYvyDl2FNMkiELKg`) es **solo transcripción de 00:00:11** y Gemini declara que **no generó resumen por falta de conversación**. Y su enlace de "Notas de Gemini" **apunta al documento del 2026-06-22**, no al suyo: en un evento recurrente, Google enlaza siempre las notas originales. **Un barrido que siga ese enlace ingeriría una sesión de junio creyendo que es de septiembre.** Registrada como **H-32**; se suma al modo de falla de **H-29** (en `Monific - Meetings` ese documento es, además, un atajo).
- **Nada se ingirió, nada se propagó.** `cliente.yaml` intacto. Esta wiki sigue con corte real en `D202` (2026-09-08).

## [2026-09-09] ingesta | La sesión "Follow up: Monific" del 2026-09-08 (`D202`)

Pase de `/sincronizar` para **una** fuente nueva: Notas de Gemini de la sesión **interna de B&O** del
2026-09-08 (Emmanuel Chulin y David Ochoa, **sin participación de Monific**), leída íntegra —notas +
transcripción verbatim, 00:07:15— por el MCP de Drive.

| ID | Documento | `fileId` real | Atajo | Fecha |
|---|---|---|---|---|
| `D202` | *Follow up: Monific: 2026/09/08 11:15 CST* | `1x1isqcGqXkxrZvHq28B6xgwQeJecEJBpeB-bdNtiY9g` | `1XYmdjvCiHOG8EZZGZaEVHoIFJPdryKQC` | 2026-09-08 |

**Guardián de entrada.** Drive corriendo (2 procesos). `.tmp.driveupload` reporta **156 archivos "EN
VUELO" y 497 residuos de más de 24 h**; en la segunda corrida quedaron **155 y 498** —un archivo pasó
de "en vuelo" a residuo, nada drenó—. Es la cola congelada por AVG interceptando TLS a
`googleapis.com`, condición conocida de este equipo. `.tmp.drivedownload` **vacío**, sin copias de
conflicto y sin archivos de 0 bytes → lo local va adelante y era seguro escribir. El script sigue
reportando `Corte : 2026-08-20`, el defecto ya anotado en `PENDIENTES.md`.

**Cotejo local↔Drive** de las seis rutas tocadas: en las seis **lo local es más nuevo y más grande**
que Drive (Drive las tiene al 2026-08-20 / 2026-08-28). Caso "subida pendiente", **no divergencia**.
Ninguna condición de PARA.

### La carpeta declarada ya no sirve para el material nuevo

`parentId = '1UD0CQTOjVnE0tnnGffGbjhI4nmIAdkbH'` (`Monific - Meetings`) **no devuelve nada posterior
al 2026-06-19**, y con `modifiedTime > '2026-09-01'` devuelve **cero**. Las sesiones desde el
2026-08-24 viven en carpetas *hermanas* colgadas de la carpeta personal de grabaciones de Meet
(`1Sid8bu8k5TT0Em_3AH27FNVfx5O6G1d-`): `Follow up: Monific (recurring)`
(`1iyTgm51VNaR8YQmCGEb9do4fa68UJUwt`, atajos de `D200`/`D201`/`D202`) y
`Flujograma - Monific - 2026/09/02 15:02 CST` (`1y22RLVv0QxxOrxRy3USGgo851FTfZHtm`, atajo de `D199`).
Y `parentId` **no es recursivo**. Se amplió **H-21** con la evidencia; `cliente.yaml` **no se tocó**
—cambia un dato canónico y eso es decisión humana—. También se confirmó que la carpeta recurrente
**no contiene ninguna grabación `.mp4`**, solo atajos a las notas.

Se verificó además que la sesión *"Flujograma - Monific"* del 2026-09-02 **ya estaba ingerida** como
`D199` (`grep -rlF 1IOALVo3D3ARHimBhq` la encuentra en cuatro archivos). No se reingirió.

### Qué era la sesión

Siete minutos, y la mayor parte sobre **otras cuentas** —un evento al que asiste David, la cuenta
Candia y la información pendiente de Alexis, la cobertura durante su ausencia—. **Nada de eso se
reprodujo aquí**, por la regla de aislamiento entre cerebros (`AGENTS.md` raíz §2.10). De Monific
salieron cinco declaraciones y un compromiso:

- 🔵 *"El tema de los mapeos está cubierto"* · *"de mi lado, según yo, ya no tengo nada"* · *"ya
  tenemos incluso listos los **documentos para capacitaciones**"* · *"no hay nada más pendiente más
  que esperar a que ellos terminen con la **integración**"* · *"ya con los [tableros de] Miro, e
  incluso hasta hay un **Miro técnico** que conecta todo"*.
- 🔴 Compromiso de Emmanuel Chulin: **enviar el correo pendiente al cliente**, que *"se complicó la
  semana pasada"*. Sigue abierto al corte.

Ninguna declaración trae ID, URL, export ni fecha. **No cierra ningún bloque** (`AGENTS.md` §7 y §13).

### Condición de alto 1 — C-32 por tercera vez, y ahora nombra la capacitación

Es la **tercera sesión consecutiva** (08-24, 08-31, 09-08) en que B&O se dice puertas adentro que no
le queda trabajo, contra **171 hallazgos críticos y altos abiertos**, 0 de 70 workflows verificados,
26 propiedades inexistentes, 0 de 4 dashboards y `engagement: en-riesgo / remediacion`. La novedad:
*"listos los documentos para capacitaciones"* toca el **bloqueador #7** (bloque **B09**), que no
exige que el material exista —la wiki ya lo registra construido y publicado— sino **acreditar
entrega, asistencia y evaluación**. *(inferencia)* Hablan de cosas distintas y por eso pueden
convivir; la fuente no hace la distinción. **No se resolvió:** fila nueva en C-32 y nota sobre B09.

### Condición de alto 2 — el estatus al cliente lleva nueve días sin salir

`D201` (2026-08-31) comprometió dar estatus a Raquel Alfie; D-09-02-02 lo aplazó hasta cerrar ATC y
UNE; `D202` (2026-09-08) lo sigue reportando pendiente. *(inferencia)* Cruzado con el bloqueador #9
—H5 vencida el 2026-08-28 sin prórroga escrita—, significa que **Monific no recibe estatus formal de
B&O desde antes del vencimiento de la fecha de cierre**. Ninguna fuente cruza los dos hechos.
**No se resolvió.**

### Condición de alto 3 — el destinatario del correo no está identificado

La fuente dice *"enviar este correo a cliente"* sin nombrar cuenta ni persona, y en la misma sesión
se habla de al menos otra cuenta. *(inferencia)* Es el estatus a Raquel Alfie, pero atribuirlo sin
respaldo es lo que `AGENTS.md` §3.7 prohíbe. **Anotado como H-32, no resuelto.**

### C-31 no se cierra

`D202` es **coherente** con que ATC y UNE se hayan terminado entre el 03 y el 08 de septiembre, pero
**no los menciona por su nombre ni da URL**. Se añadió la nota; la contradicción sigue abierta.

**Páginas creadas:** [[minuta-2026-09-08-mapeos-cubiertos-y-espera-integracion|Minuta 2026-09-08 · Mapeos cubiertos]].
**Páginas editadas:** [[Indice de Fuentes]] (`D202` + la ubicación real de los atajos),
[[Contradicciones y Verificaciones]] (fila y análisis en C-32, nota en C-31),
[[Pendientes Criticos]] (compromiso nuevo, las dos condiciones de alto y la nota sobre B09),
[[index]] y `PENDIENTES.md` (**H-31**, **H-32**, **H-33** y la ampliación de H-21).

**Propagación diferida.** `D202` toca 6 páginas de conocimiento más ([[Estado Actual]],
[[Integracion Admin Monific HubSpot]], [[Cronologia del Proyecto]], [[Gobernanza y Rituales]],
[[Bloques de Cierre B01-B16]], [[Matriz de Comunicaciones]]). Con H-22 y H-25 ya son **tres tandas
seguidas** de propagación pendiente sobre el mismo conjunto de páginas: conviene **una sola pasada
dirigida por una persona**, no tres parches. → `PENDIENTES.md` H-31.

**Sin subir a Drive.** Todo lo escrito en esta sesión queda en la cola congelada de AVG. El guardián
de salida se corrió y `.tmp.driveupload` **no está vacío**: la subida depende de excluir Drive/DriveFS
en AVG, que no es acción de agente.

---

## [2026-09-08] ingesta | Las dos sesiones "Follow up: Monific" del 2026-08-24 y 2026-08-31 (`D200`, `D201`)

Pase de `/sincronizar` para **dos** fuentes nuevas, ambas Notas de Gemini de sesiones **internas de
B&O** (Emmanuel Chulin y David Ochoa, **sin participación de Monific**), leídas íntegras —notas +
transcripción verbatim— por el MCP de Drive:

| ID | Documento | `fileId` real | Fecha |
|---|---|---|---|
| `D200` | *Follow up: Monific: 2026/08/24 13:30 CST* | `1MSSn3_G6kh6SZOdti6St5I-HDnloT8C0sGi6Q5F8olY` | 2026-08-24 |
| `D201` | *Follow up: Monific: 2026/08/31 13:35 CST* | `1gCF3s9d5Yd2zPoG9AS1plyTA7jXM80YRUVnS41RIj_8` | 2026-08-31 |

**Guardián de entrada.** Drive corriendo (2 procesos). `.tmp.driveupload` reporta **71 archivos "EN
VUELO" y 535 residuos de más de 24 h**; se volvió a correr y **las dos cifras quedaron idénticas**:
la cola sigue congelada por AVG interceptando TLS a `googleapis.com`, condición conocida de este
equipo. `.tmp.drivedownload` **vacío**, sin copias de conflicto y sin archivos de 0 bytes → lo local
va adelante y era seguro leer y escribir. El script sigue reportando `Corte : 2026-08-20`, el
defecto ya anotado en `PENDIENTES.md`.

### Hallazgo de método — en la carpeta declarada hay atajos, no documentos

Dentro de `Monific - Meetings` (`1UD0CQTOjVnE0tnnGffGbjhI4nmIAdkbH`) los dos documentos existen como
`application/vnd.google-apps.shortcut` (`1l-5EH8U…` y `1jcUXrjb…`). **Leer un atajo por su ID
devuelve `{}`, no un error.** Hubo que resolverlos al documento real buscando por título. Es un modo
de falla silencioso del barrido: parece "documento vacío", no "documento equivocado". Anotado como
**H-29**. Nota positiva frente a `D199`: aquí la carpeta declarada en `cliente.yaml` **sí** alcanza,
si se resuelve el atajo. `cliente.yaml` **no se tocó**.

### Qué eran las sesiones

**Ambas tratan mayoritariamente de otras cuentas** —la transición de David a otros dos clientes—
además de herramientas internas de B&O. Eso **no se reprodujo** aquí, por la regla de aislamiento
entre cerebros (`AGENTS.md` raíz §2.10). Se destiló solo Monific: `00:04:52`→final en `D200` y
`00:09:05`→`00:12:24` en `D201`.

- **2026-08-24 (`D200`).** David declara que del lado de B&O *"ya no hay ninguna deuda de trabajo"*
  y que *"sería posible decirle al cliente que a nuestro lado ya está prácticamente implementado
  todo"*. Dos decisiones: se **elimina la reunión interna de mitad de semana** (queda solo el lunes)
  y **Jazmín Córdova queda liberada del proyecto** *(inferencia sobre el nombre)*. Un compromiso: la
  **confronta** de la última auditoría unificada de Raquel Alfie contra HubSpot, contra lo subido y
  contra lo pendiente.
- **2026-08-31 (`D201`).** Sin avance en la semana *"ni hacía falta"*. El único pendiente propio que
  B&O se reconoce es **homologar el flujograma** con los nombres de la auditoría del cliente —para
  que los agentes de IA de Monific puedan cruzarlos—; los demás bloqueos se atribuyen a la
  integración. David propone probar **Miro**, con Monific como primer caso.

### El eslabón que faltaba en la cronología

`D201` cierra un hueco: la alineación *"del miércoles"* que ahí se convoca **es** la sesión `D199`
del 2026-09-02, y la petición de probar Miro **es** el origen de los 5 tableros V2 del 2026-09-01.
La cadena queda completa: **08-24 → 08-31 → 09-01 (Miro V2) → 09-02 (`D199`) → 09-04 (paquete de
contexto)**. Encaja **sin romper** la decisión D-09-02-02: el 2026-08-31 el plan era dar estatus a
Raquel Alfie después del miércoles; el miércoles llegó y en él se decidió aplazarlo. No es
contradicción, es la secuencia. `D-08-31-02` queda marcada como *superada por D-09-02-02*.

### Condición de alto 1 — C-32, la declaración choca con el estado documentado

*"Ya no hay deuda de trabajo"* (2026-08-24) contra **171 hallazgos críticos y altos abiertos**, 0 de
70 workflows verificados, 0 de 81 comunicaciones acreditadas, 26 propiedades comprometidas
inexistentes, 0 de 4 dashboards y `engagement: en-riesgo / remediacion`. Y **cuatro días después
venció H5 sin prórroga escrita**. `D200` es 🔵 **Declarado** —sin documento, export ni URL, y sin
Monific presente—, así que por `AGENTS.md` §13 **no cierra nada**. **No se resolvió.** Ambas
versiones quedan en **C-32**. Lo que la cerraría es la propia confronta comprometida en esa sesión,
que al 2026-09-08 no existe en la wiki.

### Condición de alto 2 — C-33, el bloqueo de los dashboards

`D201` atribuye el bloqueo de dashboards **íntegramente a la integración**; el
[[Analisis de Cierre BNO]] del 2026-08-03 sostiene que **2 de los 4 no dependen de ella**. Además *"alimentar datos"*
presupone un dashboard existente y la wiki registra **cero construidos**. **No se resolvió**:
ambas versiones en **C-33**.

### Condición de alto 3 — `V_DO_20260831` no aparece en la sesión de ese mismo día

`D201` es del **2026-08-31**, igual que la declaración `V_DO_20260831` (81 comunicaciones publicadas
e integradas, masters depurados) que sostiene dos bloqueadores de [[Pendientes Criticos]]. **La
sesión no contiene esa declaración ni la corrobora**: solo dice que las comunicaciones *"quedaron
bastante bien"* entregadas. Hay que localizar el canal real de `V_DO_20260831`. **H-26**.

### Condición de alto 4 — la serie está sin ingerir casi completa

La búsqueda por título encontró **al menos 13 sesiones más** *"Follow up: Monific"* entre el
**2026-06-22 y el 2026-08-19**, ninguna con ID de fuente en la wiki. Cubren el periodo del conflicto
contractual y del plan correctivo — justo el hueco que [[Contradicciones y Verificaciones]] ya
registraba como *"correos de julio y agosto de 2026: no existen en las fuentes"*. **H-30**.

### Cotejo local↔Drive antes de escribir

Ninguna página tenía la versión de Drive más nueva; se pudo escribir en todas:

| Página | Local | Drive | Diagnóstico |
|---|---|---|---|
| `index.md` | 9,633 b · 2026-09-07T15:26:58Z | 9,282 b · 2026-08-28T16:35:45Z | Local más nuevo |
| `log.md` | 37,727 b · 2026-09-07T15:28:04Z | 21,295 b · 2026-08-28T15:25:52Z | Local más nuevo |
| `PENDIENTES.md` | 13,713 b · 2026-09-07T15:27:22Z | 7,772 b · 2026-08-28T15:25:53Z | Local más nuevo |
| `07 Estado/Contradicciones y Verificaciones.md` | 22,837 b · 2026-09-07T15:25:26Z | 21,362 b · 2026-08-20T14:27:00Z | Local más nuevo |
| `07 Estado/Pendientes Criticos.md` | 10,327 b · 2026-09-07T15:25:49Z | 6,972 b · 2026-08-20T14:27:00Z | Local más nuevo |
| `08 Fuentes/Indice de Fuentes.md` | 14,800 b · 2026-09-07T15:26:07Z | 13,214 b · 2026-08-28T14:46:47Z | Local más nuevo |

Carpetas de Drive verificadas por `fileId`: raíz `1QpNjMBY9ZFFH-ULdT39cHvHKDUJX0yFt`, `07 Estado`
`1M0FdX80p_ibmvZ6f79cdUPG75CSsJbBz`, `08 Fuentes` `1aRRmYdpZvjYpTcscEkEx3RQ7_uBFvgBa`.

### Páginas tocadas

**Nuevas:** `08 Fuentes/minuta-2026-08-24-cierre-declarado-y-confronta-auditoria.md` ·
`08 Fuentes/minuta-2026-08-31-homologacion-flujogramas-y-reprogramacion.md`.
**Editadas:** `07 Estado/Contradicciones y Verificaciones.md` (C-32, C-33 y C-16 ampliada con las
variantes de `D200`/`D201`) · `07 Estado/Pendientes Criticos.md` (compromisos del 08-24 y 08-31) ·
`08 Fuentes/Indice de Fuentes.md` (`D200`, `D201`, la trampa de los atajos y la serie sin ingerir) ·
`index.md` · `PENDIENTES.md` (H-25 a H-30) · esta bitácora.

**Sin tocar a propósito:** `cliente.yaml` (las cifras de avance que `D200`/`D201` cuestionan son
🔵 declaradas y no prevalecen sobre la verificación por API) · `08 Fuentes/_extractos/` (capa
inmutable: `D200` y `D201` quedan sin `.txt`) · `08 Fuentes/Minutas.md` (remite las Notas de Gemini
a [[Indice de Fuentes]]) · las 13 páginas de conocimiento de **H-25**. Tampoco se escribió nada en
Drive por API, ni se reprodujo contenido de las otras cuentas que aparecen en ambas sesiones.

## [2026-09-07] ingesta | Sesión interna del 2026-09-02 — flujogramas simplificados (`D199`)

Pase de `/sincronizar` para **una** fuente nueva: el documento de Notas de Gemini *"Flujograma -
Monific: 2026/09/02 15:02 CST"* (`fileId = 1IOALVo3D3ARHimBhq-byJF7iVPUDvPFUDsYXjd7NwEo`, ~17 KB,
propietario `echulin@black-n-orange.com`). Leído **íntegro** por el MCP de Drive: pestaña de notas y
pestaña de **transcripción verbatim** completa (00:04:07 → 00:17:03). Registrada como **`D199`**.

**Guardián de entrada.** Drive para escritorio corriendo. `.tmp.driveupload` reporta **4 archivos
"EN VUELO" y 555 residuos de más de 24 h**; se volvió a correr el guardián tras 25 s y **las dos
cifras quedaron idénticas**: no es una transferencia a medias, es la cola congelada por AVG
interceptando TLS a `googleapis.com` (problema conocido de este equipo). `.tmp.drivedownload`
**vacío** —nada viene bajando—, sin copias de conflicto y sin archivos de 0 bytes, así que lo local
va adelante y era seguro leer. El script sigue reportando `Corte : 2026-08-20`, que es el defecto ya
anotado en `PENDIENTES.md`: lee la primera fecha del archivo, no la de la última entrada.

**Qué era la sesión.** **Interna de B&O**, 17 minutos, Emmanuel Chulin y David Ochoa. **Sin
participación de Monific.** Dos decisiones: (1) se **adopta la estructura simplificada** de los
flujogramas —Emmanuel confirma que cuadra con el portal actual y con lo ya acordado con el cliente—
y (2) se **aplaza la entrega al cliente** hasta terminar Servicio ATC y UNE. Es la decisión que
explica por qué el paquete de contexto del 2026-09-04 arranca con la entrega pendiente.

Lo sustantivo: el **flujo simplificado de Solicitantes narrado paso a paso** (12 pasos, 6 etapas de
pipeline, con los tramos WF-001–007, WF-008–014 y WF-018–022), la declaración de que `fecha de
cierre` y `contrato firmado` *"son propiedades que existen"* (🔵, sin `internal name` ni API), y la
única preocupación que David declara: **que el primer mapeo de propiedades de la integración no haya
cubierto todas las necesarias.** Cuatro compromisos, todos internos y ninguno con fecha escrita.

### Condición de alto 1 — la fuente vive fuera de lo declarado

`D199` es un Google Doc **compartido cuyo padre no es visible**: no está en `50. Monific/Monific -
Meetings` (`1UD0CQTOjVnE0tnnGffGbjhI4nmIAdkbH`), lo único que declara
`fuentes.transcripciones_drive`. Se ingirió igual —va titulada *"Flujograma - Monific"* y es
inequívocamente de esta cuenta— pero **`cliente.yaml` no se tocó**: ampliar `fuentes` o mover el
documento es decisión humana. Anotado como **H-21**, con el precedente idéntico de Logisa
(2026-09-04). Efecto secundario a considerar: lo que Emmanuel grabe fuera de esa carpeta seguirá
siendo invisible para el barrido.

### Condición de alto 2 — la propagación toca 9 páginas, no se ejecutó

Más de 6 páginas es decisión humana. Se hizo lo que la regla permite: **minuta completa** con la
sección *"Páginas que esta fuente debe actualizar"* ya redactada página por página, **compromisos
volcados** a [[Pendientes Criticos]] y **contradicción registrada**. Lo demás quedó en **H-22**.

### Condición de alto 3 — contradicción sobre ATC y UNE → C-31

El `log.md` del **2026-09-01** dice que el juego V2 quedó completo con **5 tableros**, uno de ellos
de **ATC + UNE** (`miro.com/app/board/uXjVHr71yws=`). `D199`, del **2026-09-02**, dice que **faltan
los flujogramas de atención y UNE**, "en proceso de generación y validación", y por eso se aplaza la
entrega. **No se resolvió.** Ambas versiones quedan con su fecha y fuente en C-31. *(inferencia)*
Puede ser que sean **dos artefactos distintos** —los V2 son tableros de Miro y David los lista entre
sus **insumos**—, pero la fuente nunca dice "Miro" ni "V2" ni da URL de lo que muestra en pantalla,
así que no hay con qué decidirlo.

### Cotejo local↔Drive antes de escribir

Ninguna página tenía la versión de Drive más nueva, así que se pudo escribir en todas:

| Página | Local | Drive | Diagnóstico |
|---|---|---|---|
| `log.md` | 31,933 b · 2026-09-04T18:00:11Z | 21,295 b · 2026-08-28T15:25:53Z | Local más nuevo |
| `index.md` | 9,301 b · 2026-08-31T19:23:25Z | 9,282 b · 2026-08-28T16:35:45Z | Local más nuevo |
| `PENDIENTES.md` | 10,805 b · 2026-09-01T15:22:57Z | 7,772 b · 2026-08-28T15:25:53Z | Local más nuevo |
| `07 Estado/Pendientes Criticos.md` | 8,489 b · 2026-08-31T19:25:38Z | 6,972 b · 2026-08-20T14:27:00Z | Local más nuevo |
| `07 Estado/Contradicciones y Verificaciones.md` | 21,362 b · 2026-08-20T14:27:00.360Z | 21,362 b · misma marca | **Idénticos** |
| `08 Fuentes/Indice de Fuentes.md` | 14,078 b · 2026-08-31T19:20:56Z | 13,214 b · 2026-08-28T14:46:47Z | Local más nuevo |

Carpetas de Drive verificadas por `fileId` para no cotejar contra el archivo homónimo de otra wiki:
raíz `1QpNjMBY9ZFFH-ULdT39cHvHKDUJX0yFt`, `07 Estado` `1M0FdX80p_ibmvZ6f79cdUPG75CSsJbBz`,
`08 Fuentes` `1aRRmYdpZvjYpTcscEkEx3RQ7_uBFvgBa`.

### Páginas tocadas

**Nueva:** `08 Fuentes/minuta-2026-09-02-flujogramas-simplificados.md`.
**Editadas:** `07 Estado/Pendientes Criticos.md` (compromisos del 2026-09-02) ·
`07 Estado/Contradicciones y Verificaciones.md` (C-31) · `08 Fuentes/Indice de Fuentes.md`
(`D199` en las Notas de Gemini) · `index.md` · `PENDIENTES.md` (H-21 a H-24) · esta bitácora.

**Sin tocar a propósito:** `cliente.yaml` (condición de alto 1), `08 Fuentes/_extractos/` (capa
inmutable: `D199` queda sin `.txt`, anotado como H-23), `08 Fuentes/Minutas.md` (esa página remite
las Notas de Gemini a [[Indice de Fuentes]], que es donde se registró) y las 9 páginas de
conocimiento de H-22. Tampoco se escribió nada en Drive por API.

## [2026-09-04] meta | Paquete de contexto para el correo al consultor (flujogramas V2)

Se creó `paquetes-contexto/2026-09-04-flujogramas-v2-contexto-para-correo-consultor.md`: documento
autocontenido con los links de los 5 tableros V2, el resumen de cambios vs V1, lo que el consultor
(Emmanuel Chulin) debe revisar o decidir antes de enviar al cliente, y el contexto de personas.
Insumo para redactar el correo en otra sesión (Cowork no ve la bóveda). Es un paquete desechable:
no se indexa en `index.md`; cuando el correo salga, puede archivarse o borrarse.

## [2026-09-01] decision | Flujogramas V2 — se completan ATC/UNE y el mapa de integración API

Segunda tanda de la misma sesión (ver entrada siguiente). Dos tableros más en la cuenta de Miro de
B&O, pedidos por David Ochoa:

| Contenido | Tablero V2 (B&O) | Base |
|---|---|---|
| Servicio ATC (WF-041–049) + UNE (UNE-01–06), en un solo tablero conectados por el ticket Tipo E | `miro.com/app/board/uXjVHr71yws=` | Sin flujograma previo en el Miro del cliente: construido desde `D167`, `X013`, `D195`, `X020` (B04/B15) y `D198` |
| Integración API — mapa entre sistemas (arquitectura Admin→HubSpot, modos de sincronización, robustez, gate T1–T7, y cómo alimenta a los 4 flujogramas) | `miro.com/app/board/uXjVHr71ouw=` | [[Integracion Admin Monific HubSpot]], `X018`, `D181` |

Con esto el juego V2 queda completo: **5 tableros** (Solicitantes, Inversionistas, Cobranza,
ATC+UNE, Integración API), todos interconectados con ligas cruzadas. Marcados como por-confirmar:
el folio UNE (Admin por API vs ID nativo) y los parámetros contractuales de cobranza. Páginas
tocadas: [[Proceso de Servicio ATC]], [[Proceso UNE]] e [[Integracion Admin Monific HubSpot]]
(liga V2 + `actualizado: 2026-09-01`). Estado: propuesta TO-BE pendiente de validación de Monific.

## [2026-09-01] decision | Flujogramas V2 en Miro de B&O — tres tableros nuevos, uno por proceso

Petición directa de David Ochoa: los swim lanes V1 viven en un Miro que **no es de B&O** y ya no
reflejan las decisiones del proyecto. Se crearon **tres tableros nuevos en la cuenta de Miro de
B&O** (no se tocó el Miro del cliente) con el proceso TO-BE actualizado:

| Proceso | Tablero V2 (B&O) | Base V1 (cliente) |
|---|---|---|
| Comercial Solicitantes | `miro.com/app/board/uXjVHsUR1nE=` | `uXjVG7nRR_I=` (feb-2026) |
| Comercial Inversionistas | `miro.com/app/board/uXjVHsUCRO8=` | `uXjVG7nRR_I=` (mismo tablero) |
| Cobranza | `miro.com/app/board/uXjVHsUSSk0=` | `uXjVG67KB7Y=` (mar-2026) |

**Método.** Los V1 se leyeron completos vía el SDK de Miro en navegador (share links de `D190` y
`D186`): 146+178 figuras y 97+128 conectores extraídos como grafo. Los V2 se reconstruyeron con el
conector MCP de Miro (Canvas Composer) aplicando las decisiones canónicas de [[Proceso Comercial
Solicitantes]], [[Proceso Comercial Inversionistas]] (INV-01–14) y [[Proceso de Cobranza]] (reglas
21–24 y 29). Cada tablero trae panel de "Qué cambió en V2", panel de reglas/por-confirmar y fuentes.

**Cambios mayores reflejados:** fuera Lead Scoring A/B/C (decisión 2026-07-27) → viabilidad por
garantía; formulario puente + gate doble + objeto Proyecto (Solicitantes); `nivel_registro` canónico,
un onboarding por usuario, congelado A/B, pagos fuera de HubSpot (Inversionistas); cobranza en
Tickets sin objeto custom, refinanciamiento = ticket nuevo, regla 29 y regla 18:00 (Cobranza).
Montos en disputa (moratorio 2× tasa, comisión 15%+IVA, aforo 2:1) marcados **por confirmar** y
alimentados por la integración.

**Estado:** propuesta TO-BE pendiente de validación de Monific. Páginas tocadas: las tres de
`04 Procesos/` (se añadió la liga V2 y `actualizado: 2026-09-01`). `index.md` sin cambios (no hay
páginas nuevas).

## [2026-09-01] meta | Sincronización con Drive — sin novedades, y la entrada del 31-ago estaba al final

Pase de `/sincronizar` sobre `Monific - Meetings` desde el corte que reportó el guardián
(2026-08-26). **Sin contenido nuevo que propagar**, ni en Drive ni en local.

**Guardián de entrada.** Drive para escritorio estaba **apagado** al arrancar la sesión: se levantó
con el comando que imprime el script y se verificó que quedó corriendo. Sin copias de conflicto, sin
archivos de 0 bytes. La cola `.tmp.driveupload` de la bóveda no drena y crece (166 → 208 archivos
durante la sesión): es el problema conocido de AVG interceptando TLS a `googleapis.com`. No bloquea,
porque es cola de **subida** y lo local va adelante.

**Drive — nada nuevo.** `parentId = '1UD0CQTOjVnE0tnnGffGbjhI4nmIAdkbH' and modifiedTime >
'2026-08-20T00:00:00Z'` devuelve **cero elementos**.

**Local — nada que ingerir.** El guardián listó siete archivos "nuevos" en `08 Fuentes/`. Cinco son
páginas de catálogo, no fuentes crudas, y las dos con fecha del 2026-08-31 —`Masters de
Implementacion.md` y `Indice de Fuentes.md`— ya están destiladas: son **producto** de la pasada del
31-ago, no insumo pendiente. Nada que propagar.

### Los dos arreglos de esta pasada

**1. La entrada del 2026-08-31 estaba al final del archivo.** La bitácora declara "más reciente
arriba" en su propio encabezado, y la entrada *Corte declarativo de Dirección B&O* se había anexado
**abajo**, donde nadie que lea las últimas entradas la encuentra. Se movió al inicio **sin tocar una
sola palabra de su contenido**; se conservó la nota de la homologación del 2026-08-20, que explica por
qué las entradas *por debajo* siguen en su orden original.

Al verificar el efecto apareció algo distinto y peor, que **no** es lo que yo suponía: el guardián
**no** lee la fecha de corte de la última entrada. Lee la **primera cadena con forma de fecha en todo
el archivo** (`Select-String -Pattern "\d{4}-\d{2}-\d{2}" -List`), y en esta bitácora esa cadena
está en la prosa del encabezado — el "2026-08-20" de la nota de homologación. Por eso reporta
`Corte : 2026-08-20` antes y después de mover la entrada: el corte verdadero es el **2026-08-31**.
El sesgo es conservador (pide más material del necesario, no menos), así que no se pierde contenido,
pero cada pase diario reevalúa once días de material ya ingerido. **El script no se modificó**: es
código compartido por seis wikis y su arreglo es decisión de David. Anotado en `PENDIENTES.md`.

**2. `cliente.yaml` apuntaba a dos carpetas que ya no existen.** `fuentes.carpetas` listaba
`../Entregables Claude/` y `../Entregables codex/`, y el guardián respondía "no resuelve" en cada
corrida: la reorganización del 2026-08-27 las movió a `../03. Entregables/_historico/{Claude,Codex}/`
(documentado en `02. Trabajo interno/_reorganizacion-2026-08-27.md`). Se corrigieron las dos rutas,
con el mismo criterio y el mismo tipo de comentario que la corrección del 2026-08-21 en este mismo
campo. **No se cambió ningún dato de negocio de la ficha.**

**Cotejo por página antes de escribir.** `log.md` coincide byte a byte y en `mtime` con su copia de
Drive: Drive no va adelante, así que era seguro editarla.

Páginas tocadas: `cliente.yaml`, `PENDIENTES.md` y esta bitácora. Sin cambios en páginas de
conocimiento ni en `08 Fuentes/`.

## [2026-08-31] actualización | Corte declarativo de Dirección B&O

**Origen**

David Ochoa preguntó qué falta **del lado de B&O** para el cierre, excluyendo las dependencias del cliente. Al revisar el estado documentado corrigió tres cosas que la wiki tenía desactualizadas. La fuente es **verbal, sin documento de respaldo**, y se registra como `V_DO_20260831`.

### Qué se declaró

| Declaración | Bloque | Estado anterior en la wiki |
|---|---|---|
| Las 81 comunicaciones **ya se publicaron e integraron** en HubSpot | B08 | "0 de 81 publicadas" |
| Los masters **ya se depuraron** del contenido de otro cliente | B12 | "sin evidencia de depuración" |
| Los dashboards están **bloqueados por la integración** | B06 | "0 de 4 construidos" |

### Cómo se registró

Se creó el estado **🔵 declarado** para distinguirlo de 🟡 (parcial acreditado) y ✅ (aceptado). Ninguna de las tres declaraciones cierra su bloque: el criterio del proyecto exige URL/ID + export fechado + caso de prueba + validación escrita de Monific, y no hay evidencia cargada de ninguna.

### Hallazgos de esta pasada

1. ⭐ **El cuello de botella cambió de naturaleza.** Con B08 y B12 declarados completos, y con las evidencias de Servicio (WF-041→049) y Cobranza (WF-050→064) ya capturadas en `outputs/`, el proyecto **tiene más trabajo hecho del que puede demostrar**. Lo que falta ya no es ejecutar: es llenar la Plantilla de Respuesta y cargar `02_RESPUESTA_BNO`.
2. 🔴 **El matiz de B06.** De los cuatro dashboards, solo inversión y cobranza dependen de la integración. Comunicación y desempeño no — y el de comunicación se volvió construible justo ahora. Reportar los cuatro como bloqueados por el cliente debilita la dependencia real de los otros dos.
3. 🔴 **H5 vencido sin prórroga.** La fecha de cierre del Gantt v2 era el 2026-08-28. Al 31 de agosto no hay cierre declarado ni acuerdo escrito de extensión. Es el disparador literal de R-01.
4. 🔴 **Confusión de nomenclatura resuelta.** "Tokens" significa dos cosas distintas en el expediente: los **HubL** de B16 (campos `{{ }}` sin resolver) y los **de acceso** de B11 (credenciales de apps privadas). Se documentó la diferencia en [[Higiene y Accesos]] porque cambia quién debe atenderlo y con qué urgencia.
5. 🟡 **Efecto colateral probable sobre B16.** Si las comunicaciones se publicaron, los tokens HubL de WF-010/055/058/061/064 probablemente se corrigieron de paso. Sin verificar.

### Páginas tocadas

[[Estado Actual]] — semáforo, cifras de comunicaciones, sección de actualización declarada, matiz de dashboards e hitos vencidos · [[Pendientes Criticos]] — bloqueadores 9 a 12 nuevos · [[Bloques de Cierre B01-B16]] — **tablero de avance nuevo** con las tres columnas hecho/evidenciado/aceptado · [[Higiene y Accesos]] — tabla comparativa de tokens · `PENDIENTES.md` — huecos H-15 a H-20.

### Lección para el esquema

La wiki no tenía forma de registrar *"el humano dice que está hecho pero no hay evidencia"*. Se resolvía o borrando el pendiente (perdiendo trazabilidad) o dejándolo como si nada hubiera pasado (mintiendo sobre el avance). El estado **🔵 declarado** cubre ese hueco, y encaja con el criterio del propio proyecto: *configurado ≠ verificado ≠ aceptado*.

### Pendiente del humano

Cargar la evidencia de B08 y B12. Es lo único que separa a esos dos bloques del cierre, y no requiere trabajo técnico nuevo.

## [2026-08-26] refactor | Reparación de codificación en Indice de Fuentes.md

`08 Fuentes/Indice de Fuentes.md` estaba doblemente codificado (mojibake: UTF-8 mal decodificado
como Windows-1252 y regrabado en UTF-8) desde el 2026-08-24, según diagnóstico ya registrado en
`PENDIENTES.md` el 2026-08-25. Ningún agente lo había reparado.

**Qué se hizo.** Se revirtió la doble codificación byte a byte usando la tabla de Windows-1252
(no Latin-1 puro) para el rango 0x80–0x9F, que es el que el fix de una sola pasada con Latin-1
de la sesión anterior no cubría — esa diferencia era la causa de que la elipsis junto a
`P_CONTRATO` se convirtiera en `◆` en vez de `…`. Con la tabla completa de Windows-1252 se
recuperó el archivo entero sin residuos: se revisó línea por línea (incluida cada tabla, cada
emoji de estado y el bloque de scripts) y no queda ninguna secuencia `Ã` ni `â€`. El frontmatter
YAML no se tocó salvo `actualizado: 2026-08-11` → `2026-08-26`; el contenido no cambió de fondo,
solo se corrigió la codificación. Se quitó también el BOM UTF-8 que tenía el archivo (el resto de
la wiki no lo usa).

**Relacionado:** entrada correspondiente en `PENDIENTES.md` marcada como resuelta.

## [2026-08-21] meta | Skill `/sincronizar` y guardián de sincronía con Drive

Quinta skill de esta wiki: `/sincronizar`, más el script `scripts/verificar-sincronia-drive.ps1`.
Cierra el hueco entre lo que hay en el Drive del cliente y lo que está destilado aquí.

**Qué hace.** Lee las minutas y los recursos nuevos por el MCP de Google Drive, los destila, los
propaga a las páginas afectadas con wikilinks ([[Wiki general/60-operacion/decisiones/adr-004-boveda-raiz|ADR-004]]) y verifica que el espejo local↔Drive quedó
completo. La carpeta de minutas es la que ya estaba declarada en `fuentes.transcripciones_drive` y
`fuentes.drive_folder_id` de `cliente.yaml`. La skill no inventa rutas: lee esos dos campos.

**Qué NO hace: escribir en Drive por API.** El espejo ya existe y lo mantiene Drive para escritorio.
Se verificó durante la instalación: `cliente.yaml` y `MANTENIMIENTO.md` de esta wiki están en Drive con el
mismo tamaño y la misma marca de tiempo al milisegundo que en local. Dos escritores sobre el mismo
archivo no producen una fusión, producen una copia de conflicto: la regla dura de
`MANTENIMIENTO.md`.

**Frontera.** La skill escribe solo en local y solo dentro de esta wiki, así que [[Wiki general/60-operacion/decisiones/adr-002-no-construir-wikis-de-cliente|ADR-002]] sigue intacto
en tiempo de ejecución. La sesión que la instaló sí cruzó capas, y cumple las cuatro condiciones de
[[Wiki general/60-operacion/decisiones/adr-005-homologacion-transversal|ADR-005]]: instrucción directa y explícita del usuario, alcance declarado y acotado (dos archivos por
wiki, sin sobrescribir ninguno), registro en la bitácora de cada wiki, y cierre al terminar.

**Tres decisiones de diseño**, tomadas con el usuario:

- Cuando Drive trae una versión más nueva, se **fusiona, no se sobrescribe**. Es una wiki conjunta y
  una edición local que aún no había subido no se puede perder. La versión de Drive entra como
  fuente, con su nota `> ⚠️` de qué cambió, igual que cualquier contradicción.
- La skill **actúa sola** salvo cinco frenos: contradicción con lo documentado, más de 6 páginas
  tocadas, cambio de un dato canónico de `cliente.yaml`, divergencia real local↔Drive, o datos de terceros
  ajenos al proyecto.
- **Solo lo declarado.** Lee las carpetas de `fuentes` y nada más. Ni la carpeta de credenciales, ni
  audio, ni video.

**Estado del espejo al instalar:** Drive para escritorio estaba **apagado** (instalado, versión
129.0.1.0). Había trabajo local sin subir. Correr el guardián antes de la próxima sesión.

---

## [2026-08-20] meta | Homologación a la estructura v1.0

Sesión transversal de homologación de las 8 wikis de B&O. En esta wiki:

**Inversión de la relación AGENTS / CLAUDE**

El contrato de B&O y el estándar abierto piden que **`AGENTS.md` sea el archivo canónico** —lo leen
de forma nativa Codex, Cursor y Copilot— y que `CLAUDE.md` solo lo importe. Aquí estaba **al revés**:
`AGENTS.md` era un puntero de 17 líneas hacia `CLAUDE.md`.

- `AGENTS.md` — ahora canónico, con la **estructura v1.0**. Recoge íntegro lo que vivía en
  `CLAUDE.md` (las tres capas, las 10 reglas no negociables, estructura, anatomía de página,
  marcadores de confianza, las tres operaciones, convenciones, vocabulario controlado y la
  advertencia sobre la calidad de las fuentes) y añade lo que faltaba: orden de lectura para agentes,
  taxonomía de tags **cerrada**, reglas de interconexión, flujo de archivado, ciclo cerrado para
  documentar piezas construidas, cómo leer `.gdoc`/`.gsheet` por API, y la regla fija.
- `CLAUDE.md` — reescrito como `@AGENTS.md` + solo las 4 skills. Cero duplicación.

**Capa de contrato (nueva)**

- `cliente.yaml` — ficha maestra machine-readable: portal `48427391`, regulador CNBV, los 5 procesos,
  el vocabulario de objetos con sus sinónimos prohibidos, las cifras de avance del corte
  (70 workflows / 0 verificados, 26 de 31 propiedades inexistentes, 0 de 81 comunicaciones,
  0 de 4 dashboards), la convención de IDs de fuente y la ubicación de credenciales.
- `PENDIENTES.md` · `MANTENIMIENTO.md` — no existían.
- `.claude/skills/` — `/nueva-pagina`, `/actualizar`, `/documentar`, `/auditoria`.
- `scripts/verificar-enlaces.ps1` — valida wikilinks contra toda la bóveda.
- `.claude/settings.json` — `additionalDirectories` a las 4 carpetas fuente del cliente.
- 3 plantillas nuevas en `99 Plantillas/`: pieza técnica, campaña de pauta, brief de contenido.

**Limpieza**

- **`.git` eliminado.** Había un `.git` **vacío** en `50. Monific/`: cero commits, cero refs, sin remoto.
  Era la cáscara que deja Drive al intentar sincronizar un repo, que es justo el problema que el
  contrato advierte. No se perdió historial porque no había ninguno.

**Verificado y sin hueco**

- Las minutas de la wiki llegan al **2026-08-07**, más allá de la transcripción más reciente de la
  carpeta `Monific - Meetings` de Drive (**2026-06-19**). **No hay sesiones sin documentar** por ese
  lado: las fuentes posteriores entraron por `01. Adicionales/` y correos.

**Hueco que sí queda abierto y es el que más pesa**

No hay **guía de voz y tono del cliente**. El entregable B08 son **81 comunicaciones** y **ninguna
está publicada**; redactarlas sin guía de voz obliga a improvisar el tono de Monific. El vocabulario
controlado de `AGENTS.md` §12 no lo sustituye. Registrado en `PENDIENTES.md`.

**Desviación deliberada del contrato de wiki de cliente:** los enlaces siguen siendo wikilinks, no
enlaces markdown, por `adr-004-boveda-raiz` de la Wiki general. Documentado en `AGENTS.md` §4.

## [2026-08-07] ingesta | Construcción inicial de la wiki a partir de ~100 fuentes

**Qué se hizo**

- Se extrajo texto plano de todas las fuentes disponibles en `Wiki Monific/`, `01. Adicionales/` y `outputs/`:
  - 65 `.docx` + 3 `.txt` → IDs `D001`–`D197` (solo se conservaron los relevantes; se descartó ruido de `node_modules`).
  - 21 de 24 `.xlsx/.xlsm` → IDs `X001`–`X024`.
  - 13 de 22 `.pdf` → IDs `P_*`.
- Extracción hecha con PowerShell: descompresión de `word/document.xml` para los `.docx`, y COM de Office (Excel/Word) para hojas de cálculo y PDF. No hay Python ni Node en este equipo.
- Se creó la estructura de carpetas `00 Inicio` … `99 Plantillas`.
- Se escribió `CLAUDE.md` (esquema), `AGENTS.md`, `LEEME.md`, `index.md`, este `log.md` y las tres plantillas.
- Se poblaron las páginas de las 8 secciones temáticas.

**Fuentes ancla usadas para el núcleo de la wiki**

| ID | Documento | Por qué es ancla |
|---|---|---|
| `D167` | Maestro Operativo de Procesos y Workflows (corte 2026-07-31) | Documento más reciente y completo; consolida los 4 masters, el inventario de HubSpot y las decisiones canónicas de Inversionistas |
| `X018` | Documento API de Integración Unificado | Contrato técnico: mapeo de propiedades + 30 reglas de negocio |
| `X020` | Requerimiento Formal BNO (corte 2026-06-18) | Cifras oficiales del conflicto y bloques B01–B16 |
| `X002` | Matriz Única de Hallazgos (corte 2026-06-18) | 284 hallazgos + verificación por API |
| `P_ANEXO` | Anexo A — Resumen Ejecutivo / Plan BOOST | Alcance contractual |
| `P_CONTRATO` | Contrato Monific–B&O (2026-01-05) | Términos legales |
| `D193` | Brief de Necesidades | Objetivos originales del cliente |
| `D195` | Entregables pendientes del 26 de enero | Diseño de formulario, cobranza y SLAs |

**Problemas encontrados en la extracción**

- 🔴 3 archivos Excel no se pudieron abrir (posible protección o corrupción): `04. Tracker Matriz Comunicaciones.xlsx` (dos copias) y `Master_Cobranza_reparado_temporal.xlsx`.
- 🔴 Los **Flujogramas 01–04** en PDF no rindieron texto: son imágenes vectoriales/rasterizadas. Su contenido está cubierto indirectamente por los masters y `D167`, pero no se leyeron directamente.
- 🔴 `SLA B&O a Monific.pdf`, `Monific Kick Off 2026.pdf` y los 4 flujogramas antiguos rindieron texto vacío (documentos basados en imagen). **Hueco de conocimiento pendiente.**
- ⚠️ `Monific-HubSpot-Integracion-Tecnica.pdf` colgaba a Word repetidamente; se logró extraer al aislarlo en un proceso con timeout.

**Contradicciones detectadas y registradas**

Ver [[Contradicciones y Verificaciones]]. Las principales: conteo de workflows (64 canónicos vs 96 en portal vs 70 auditados), estado real vs declarado de propiedades (26 de 31 no existen), el objeto de Cobranza (masters lo tratan como objeto personalizado; la API confirma que no existe y la decisión vigente es usar Tickets), y los nombres de varias personas mal transcritos.

**Resultado**

56 páginas de contenido + 3 plantillas + 5 archivos de control. 106 extractos de fuente. 20 contradicciones registradas, 25 preguntas abiertas, 7 datos por verificar y 10 huecos de conocimiento documentados.

---

## [2026-08-07] lint | Primera revisión de salud

**Qué se revisó:** enlaces rotos, páginas huérfanas, frontmatter y densidad de enlaces.

| Chequeo | Resultado |
|---|---|
| Enlaces rotos | ✅ Ninguno real. Los detectados están dentro de bloques de código o comillas en `CLAUDE.md` y las plantillas — no generan nodos fantasma en Obsidian |
| Páginas huérfanas | ✅ Ninguna. Los archivos de control (`CLAUDE`, `AGENTS`, `LEEME`, `log`) quedaron enlazados desde `index.md` |
| Frontmatter | ✅ Completo en las 56 páginas de contenido. Los 4 archivos de control no lo llevan **por diseño** |
| Páginas más enlazadas | [[Contradicciones y Verificaciones]] (46) · [[Conflicto Contractual]] (27) · [[Higiene y Accesos]] (27) · [[Proceso Comercial Solicitantes]] (25) · [[Proceso de Cobranza]] (23) |

**Lectura:** que la página más enlazada sea la de contradicciones confirma el diagnóstico — el problema central del proyecto no es de conocimiento, es de **verificación**.

**Recomendaciones para la próxima sesión**

1. Cerrar el hueco **H-01**: el `SLA B&O a Monific.pdf` no se pudo leer y es un documento contractual.
2. Ingerir `D189`/`D190` (312k caracteres de correos): pueden contener la respuesta de B&O al requerimiento y compromisos no registrados.
3. Ingerir `D196` (REPORTES MONIFIC – HUBSPOT) y contrastarlo contra el portal.
4. Ver los flujogramas como imagen y describirlos, ya que no rinden texto.
5. Pedir a Monific el `04. Tracker Matriz Comunicaciones.xlsx` sin protección.

---

## [2026-08-07] ingesta | Correspondencia completa Monific × B&O (100 correos)

**Origen:** el usuario pidió verificar la wiki contra el correo de trabajo. **No fue posible conectarse al buzón** —el Outlook local solo tiene una cuenta personal y no hay conector de email en la sesión—, así que se procesó la fuente equivalente que ya estaba en el proyecto: `D190` / `D189`, el intercambio de correos que Monific recopiló como evidencia. Cierra el hueco **H-07**.

**Alcance de la fuente:** 100 correos, **2025-10-23 → 2026-06-29**. Export desde el buzón de Raquel Alfie.

### Correcciones de fondo

| Qué decía la wiki | Qué dicen los correos |
|---|---|
| El contrato se firmó el **2026-01-05** | El 5 de enero es la **fecha del documento**; la firma vía DocuSign ocurrió el **19–20 de enero**. El kickoff (7-ene) fue **antes** de firmar |
| *"No hay evidencia de que B&O haya entregado el plan correctivo"* | ❌ **Falso.** Roberta acusó el **18-jun a las 13:53** (2 h después) y Emmanuel entregó plan + Gantt el **24-jun**, un día antes del plazo, reportando **~160 puntos atendidos** |
| B&O abandonó la integración unilateralmente el 8-jun | La causa fue una **auditoría de la CNBV**: Monific debía certificar el acceso a terceros. Pidió accesos el 7-may, se los negaron el 8-may, y el 27-may consta *"la integración sigue bloqueada por auditoría de la CNBV"* |
| La integración nunca funcionó | **Sí funcionó desde el 2026-03-09**: TI de Monific arregló la sincronización y resincronizó con corte al 8-mar. Lo pendiente es la ampliación a Tickets y Proyecto |
| El proyecto arranca en dic-2025 | La venta arranca el **2025-10-23**; Monific aprueba presupuesto el **19-nov** |

### Contradicciones resueltas

- **C-15** ✅ *Fulmentfi* es el **dominio de ARI Abogados**. Contactos: Francisco Rodríguez (direccion@fulmentfi.com) y Evelyn Montes (emontes@fulmentfi.com).
- **C-17** ✅ *Leticia* es de **Black & Orange** (leticia@black-n-orange.com, recibió el acceso de partner).
- **C-19** ✅ Fecha de firma real: 19–20 de enero de 2026.

### Contradicciones nuevas

- **C-21** 🔴 Interés moratorio: `D195` dice 38 % anual; la **Directora de Finanzas** dice *"dos veces la tasa ordinaria, sin excepción"* (2026-03-05).
- **C-22** 🔴 Aforo: 1.5 : 1 en `D195` vs. **2 : 1** según Karen Gómez y Raquel (2026-04-17).
- **C-23** 🔴 La validación **PLD quedó excluida del pipeline de Inversionistas** por decisión explícita de Raquel, pese a que Emiliano la pidió.
- **C-24** 🔴 *Tipo de instrumento*: el Director Legal pidió valores distintos y selección múltiple, y **eliminar** tres propiedades que el master conserva como obligatorias.
- **C-25** 🔴 La propiedad canónica es **"Resultado pre-evaluación"** con **cuatro** valores (incluye *Pendiente de información*), no tres.
- **C-26** 🔴 Sí hubo integración operativa desde marzo de 2026.

### Otros hallazgos

- **Método de auditoría, con precisión:** Raquel usó *"una extensión de Claude in Chrome"* más revisión manual parcial. El primer borrador traía **163 hallazgos** que ella depuró a 112. Lo envió explícitamente como *"mapa de trabajo, no dictamen cerrado"*, advirtiendo que podía haber **falsos positivos** y reconociendo *"avances importantes"*. Un mes después esos hallazgos sostienen un requerimiento contractual — el cambio de estatus del documento no se discutió por escrito.
- **Las seis decisiones formales de Monific del 2026-06-10** (scoring, propiedad maestra, fallback de propietario, remitente estándar, "Legal" ≠ ARI, plantillas) anteceden a lo que se cerró el 27-jul.
- **Los flujogramas viven en Miro** (`miro.com/app/board/uXjVG7nRR_I=`) — mitiga el hueco H-02.
- **Personas nuevas:** Ana Gabriela Meneses y Eduard Garcia (B&O), Cyntia (Legal/PLD Monific), el equipo de TI completo (6 personas), y Karen Gómez identificada como **Directora de RH y Operaciones**.
- **Tensión económica anticipada:** Raquel exigió el corte de horas el **2026-06-09**, nueve días antes del requerimiento formal, y declaró que **no autorizaría costos adicionales** sin conciliación previa.

### Páginas tocadas

[[Correspondencia]] *(nueva)* · [[Cronologia del Proyecto]] · [[Conflicto Contractual]] · [[Contradicciones y Verificaciones]] · [[Directorio de Contactos]] · [[Auditorias]] · [[Riesgos]] · [[Integracion Admin Monific HubSpot]] · [[Preguntas Abiertas]] · [[Indice de Fuentes]] · [[Mapa General]] · `index.md`

### Huecos que quedan y solo se cierran con acceso al buzón

| ID | Hueco |
|---|---|
| **H-11** | 🔴 Correos de **julio y agosto de 2026** — plan correctivo definitivo, Gantt v2, homologación de masters, sesión con TI |
| **H-12** | 🔴 Conversaciones de **WhatsApp** del grupo del proyecto |
| **H-13** | 🔴 La **respuesta punto por punto de B&O a los 217 pendientes** |

---

---

## [2026-08-11] ingesta | `D198` y `P_RESCIERRE` — el análisis de cierre del 2026-08-03

**Origen**

Lint de la wiki a petición del humano. La revisión estructural salió limpia (0 enlaces rotos, 0 huérfanas, 57/57 páginas en `index.md`, frontmatter completo, 106/106 extractos citados), pero detectó **una fuente nunca ingerida**: `01. Adicionales/auditoria final/Monific-Auditoria.zip`. El barrido del 2026-08-07 recorrió `Wiki Monific/`, `01. Adicionales/` y `outputs/` pero **no descomprimió los `.zip`**.

**Qué se extrajo**

| ID | Documento | Método |
|---|---|---|
| `D198` | HISTORIAL_Y_CONTEXTO_CIERRE_MONIFIC_BNO_2026-08-03.md (42,528 bytes, 675 líneas) | Copia directa — ya era Markdown |
| `P_RESCIERRE` | RESUMEN_EJECUTIVO_CIERRE_MONIFIC_BNO_2026-08-03.pdf (249,122 bytes) | Extraído del `_resumen_ejecutivo.html` acompañante con `perl -0777`, no del PDF |

Ambos del **2026-08-03**, por Emmanuel Chulin. Son **posteriores a `D167`** (Maestro Operativo, 2026-07-31), que hasta hoy era la fuente ancla más reciente.

**Hallazgos que cambian la lectura del proyecto**

1. ⭐ **Clasificación de los 70 pendientes por naturaleza.** De los 29 rojos, B&O sostiene que **~10 son defectos de configuración propios**; 15 están bloqueados por definición de Monific, 12 son construcción nueva fuera del alcance, 9 son limitación de plataforma, 6 son rojos sin defecto probado y 4 son homologación cosmética. Es la tesis central del cierre y está **sin validar por el cliente**.
2. 🔴 **Seis rojos no acreditan defecto:** WF-051/052/060 solo "no localizados", WF-035 ya resuelto según la propia auditoría, WF-039 con contradicción interna, y tres hallazgos marcados "(tentativo)".
3. 🔴 **32 workflows del portal sin mapear** (96 − 64). La wiki decía "~26".
4. 🔴 **La matriz de comunicación es especificación, no evidencia:** 77 de 81 en estado "Crear", cero apariciones de `WF-`, cero IDs de asset, cero menciones de consentimiento, ninguna pieza UNE.
5. 🔴 **Tres defectos internos de la matriz:** triggers de INV-008 a INV-014 corridos una fila (mal en 2 de 3 lugares), canal inconsistente en 6 piezas, ~14 tokens de namespaces inexistentes.
6. 🔴 **Cuatro conflictos** entre la matriz y las decisiones canónicas del 31-jul.
7. ⭐ **Servicio/ATC es el único proceso sin rojos** y B&O lo propone como primer bloque a cerrar con evidencia.
8. 🔴 **No existe minuta de la sesión del 2026-08-03**, que sí ocurrió según este documento.

**Páginas tocadas**

- **Nueva:** `07 Estado/Analisis de Cierre BNO.md` — la clasificación, los 10 defectos, los 6 rojos sin defecto, las 11 correcciones y los 12 puntos de decisión.
- [[Matriz de Comunicaciones]] — tres secciones nuevas: qué resuelve y qué no, los tres defectos internos, los cuatro conflictos con las decisiones canónicas. Más la cadena ARI COB-030 a COB-033.
- [[Workflows]] — los 32 sin mapear, la tabla de nombres desalineados, la advertencia sobre los rojos sin defecto y las fichas sin regla verificable.
- [[Contradicciones y Verificaciones]] — **C-27 a C-30** nuevas. C-07 precisada de ~26 a 32.
- [[Preguntas Abiertas]] — **P-29 a P-35** nuevas, **H-14** nuevo, V-04 precisada.
- [[Gobernanza y Rituales]] — el formato de siete campos de evidencia y el código de color azul/amarillo.
- [[Cronologia del Proyecto]] · [[Estado Actual]] · [[Proceso de Servicio ATC]] · [[Indice de Fuentes]] · [[Mapa General]] · `index.md`.

**Lección para el esquema**

`CLAUDE.md` §6.1 y [[Indice de Fuentes]] ahora advierten que **los `.zip` también son fuentes** y hay que descomprimirlos antes de inventariar. También queda registrado que, cuando un PDF viene con su HTML de origen, conviene extraer del HTML.

**Pendiente de decisión del humano**

La clasificación de `D198` es **postura de B&O, no acuerdo**. Si Monific la validó o la rechazó en la sesión del 3-ago, esa fuente no está en la wiki y cambiaría el estado de siete páginas.
