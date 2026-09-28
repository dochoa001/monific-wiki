# Pendientes — Wiki de Monific

Registro de **información que falta o está por confirmar** para que la wiki sea completa. Se alimenta
en cada ingesta y en cada pase de `/auditoria`. Cuando algo se resuelve, **se elimina de aquí** y la
respuesta queda en la página que corresponda.

No confundir con las páginas de estado del proyecto, que llevan otra cosa:

| Página | Qué lleva |
|---|---|
| [[Pendientes Criticos]] | Los **bloqueadores del proyecto**: 84 críticos, 87 altos y los seis que no deben perderse |
| [[Preguntas Abiertas]] | Las **preguntas analíticas** del proyecto |
| [[Contradicciones y Verificaciones]] | Dónde dos fuentes no coinciden |
| **Este archivo** | Los **huecos documentales**: la fuente que no tenemos, el dato canónico vacío, la sección sin poblar |

**Última revisión:** 2026-09-28

---

## Abiertos por la ingesta de `D203` y `D204` (revisión de cierre de Monific, 2026-09-24)

Fuente: [[revision-cierre-2026-09-24-reporte-evidencias-monific|Revisión de cierre 2026-09-24]].
Documentos **de Monific**, leídos al 100 % el 2026-09-28. Todos los puntos son decisión humana.

| ID | Pendiente | Por qué es decisión humana |
|---|---|---|
| **H-34** | 🔴 **Las cifras canónicas de `cliente.yaml` (corte 2026-06-17) quedaron desfasadas frente al corte del cliente del 2026-09-24.** `workflows_total: 70` contra **105** (85 encendidos); `propiedades_inexistentes: 26` que el cliente **ya no reemite como vigente**; `comunicaciones_publicadas: 0` que el cliente **ya no sostiene**; UNE "sin acreditar" contra **seis workflows existentes**. Registrado en C-34 | Cambiar un dato canónico es decisión humana (`sincronizar` §5, `AGENTS.md` §3.12). Además `D203` es evidencia **del cliente, no reproducida por B&O**: antes de sustituir cifras conviene un conteo propio por API (proxy `http://127.0.0.1:8787/Monific/`). **`cliente.yaml` no se tocó** |
| **H-35** | 🔴 **Tres correos que `D203` cita y la wiki no tiene:** el acuerdo del **2026-08-20** de alinear el trabajo al cierre estimado de TI a fines de octubre (C-35); el **correo de B&O del 2026-09-11** que declara concluidos sus entregables directos, y la **respuesta de Monific** que no acepta el cierre integral (C-32, C-36). Están en el buzón de Raquel Alfie y, por ser de B&O o dirigidos a B&O, deberían estar también en el de Emmanuel Chulin o David Ochoa | Localizar y registrar correos requiere acceso a buzón y criterio sobre qué se ingiere. Afectan al bloqueador #9 y a R-01: **no se degradan ni se cierran por inferencia** |
| **H-36** | 🔴 **La propagación de `D203` toca al menos 10 páginas de conocimiento y no se ejecutó.** El texto está orientado en la sección *"Páginas que esta fuente debe actualizar"* de la página de fuente: [[Estado Actual]], [[Workflows]], [[Bloques de Cierre B01-B16]], [[Proceso UNE]], [[Proceso de Cobranza]], [[Proceso Comercial Inversionistas]], [[Proceso Comercial Solicitantes]], [[Integracion Admin Monific HubSpot]], [[Dashboards y Reportes]], [[Cronologia del Proyecto]] | Más de 6 páginas es decisión humana (`sincronizar` §5). Se suma a **H-22, H-25 y H-31**: ya son **cuatro tandas** de propagación diferida sobre casi las mismas páginas. `D203` es además **la fuente más reciente y más técnica del proyecto**: conviene que la pasada única de propagación **arranque por aquí** |
| **H-37** | 🟡 **`00_VIGENTE_LEER_PRIMERO` no es fuente declarada en `cliente.yaml`.** `D203`/`D204` viven en `00_VIGENTE_LEER_PRIMERO / 2026-09-24_REVISION_DE_CIERRE` (`1gS8pZt2egHXr57yBdaOOFYUZJhaNZyGL`, padre `19lEJ0onEcGE4jAs4gUyarqIhV4CGE-CT`), carpeta del cliente donde B&O es lector ([[Gobernanza y Rituales]]). `fuentes` solo declara carpetas locales y `Monific - Meetings`. **El barrido la encontró por búsqueda global, no por la ficha** | Ampliar `fuentes` cambia un dato canónico. Es el mismo patrón de **H-21**: sin declararla, `/sincronizar` no verá los próximos cortes del cliente. `cliente.yaml` **no se tocó** |
| **H-38** | 🟡 **Los "H01–H14" de `D203` chocan en nombre con la serie `H-##` de este archivo.** En la wiki se citan como *"H01 de `D203`"*. Además `D204` crea tres registros de control `REV-20260924-H03`, `-H11` y `-H12` | Convención de nomenclatura; decidir si se renombra la serie local o se deja la aclaración |

> **Qué NO se hizo, a propósito.** No se tocó HubSpot —las correcciones H02, H04, H05, H06 y H07 de
> `D203` son cambios en sistema vivo y requieren confirmación explícita—, no se escribió en la
> Plantilla_Respuesta_BNO ni en Drive, y no se leyeron las carpetas privadas `04` y `05` de Monific,
> a las que B&O no tiene acceso.

---

## Abiertos por la ingesta de `D202` (sesión del 2026-09-08)

Fuente: [[minuta-2026-09-08-mapeos-cubiertos-y-espera-integracion|Minuta 2026-09-08 · Mapeos cubiertos]].

| ID | Pendiente | Por qué es decisión humana |
|---|---|---|
| **H-31** | 🟡 **La propagación de `D202` toca 6 páginas de conocimiento y no se ejecutó.** El texto ya está orientado, página por página, en la sección *"Páginas que esta fuente debe actualizar"* de la minuta: [[Estado Actual]], [[Integracion Admin Monific HubSpot]], [[Cronologia del Proyecto]], [[Gobernanza y Rituales]], [[Bloques de Cierre B01-B16]] y [[Matriz de Comunicaciones]] | Se acumula con **H-22** (9 páginas de `D199`) y **H-25** (13 de `D200`/`D201`). Ya son **tres tandas seguidas** de propagación diferida sobre el mismo conjunto de páginas: hacerlas por separado multiplica el trabajo y el riesgo de dejarlas inconsistentes. **Conviene una sola pasada de propagación dirigida por una persona** |
| **H-32** | 🟡 **El "correo a cliente" de `D202` no tiene destinatario identificado.** Emmanuel Chulin declara pendiente *"enviar este correo a cliente"* sin nombrar cuenta ni persona. *(inferencia)* Es el estatus a Raquel Alfie que `D201` comprometió y D-09-02-02 aplazó —es el único correo a cliente abierto en esta cuenta y la sesión es la recurrente de Monific—, pero en la misma sesión se habla de al menos otra cuenta | Atribuir un compromiso a un destinatario concreto sin que la fuente lo diga es exactamente lo que `AGENTS.md` §3.7 prohíbe. Confirmarlo requiere ver el correo enviado, o preguntarle a Emmanuel. 🆕 **2026-09-28:** `D203` registra un **correo de B&O a Monific el 2026-09-11** con el estatus de entregables. *(inferencia)* Es muy probablemente este correo; **casi cierra H-32**, pero falta verlo → H-35 y C-36 |
| **H-33** | 🟡 **`D202` no tiene extracto en `08 Fuentes/_extractos/D202.txt`**, igual que `D199`, `D200` y `D201` — y desde el 2026-09-28 tampoco `D203` ni `D204`. Ya son **seis** fuentes seguidas que rompen la convención de que cada `D###` tenga su `.txt` | La carpeta de fuentes crudas es inmutable en la pasada automática. Además, a estas alturas la decisión de fondo es otra: **si las Notas de Gemini leídas por MCP deben tener extracto o merecen su propia convención de ID** |

> **Grabaciones.** Verificado el 2026-09-09: la carpeta `Follow up: Monific (recurring)` contiene
> **solo accesos directos a las notas**, ninguna grabación `.mp4`. No hay nada que referenciar.

---

## Abiertos por la ingesta de `D200` y `D201` (sesiones del 2026-08-24 y 2026-08-31)

Fuentes: [[minuta-2026-08-24-cierre-declarado-y-confronta-auditoria|Minuta 2026-08-24 · Cierre declarado]]
y [[minuta-2026-08-31-homologacion-flujogramas-y-reprogramacion|Minuta 2026-08-31 · Homologación de flujogramas]].

| ID | Pendiente | Por qué es decisión humana |
|---|---|---|
| **H-25** | 🔴 **La propagación de `D200` y `D201` toca 13 páginas de conocimiento y no se ejecutó.** El texto ya está orientado, página por página, en la sección *"Páginas que esta fuente debe actualizar"* de cada minuta: [[Gobernanza y Rituales]], [[Equipo Black and Orange]], [[Directorio de Contactos]], [[Estado Actual]], [[Matriz de Comunicaciones]], [[Cronologia del Proyecto]], [[Integracion Admin Monific HubSpot]], [[Dashboards y Reportes]], [[Workflows]] y [[Auditorias]] | Más de 6 páginas es decisión humana por `sincronizar` §5. Lo que sí se hizo: las dos minutas completas, compromisos en [[Pendientes Criticos]], contradicciones C-32 y C-33, y C-16 ampliada. Se acumula con H-22, que dejó otras 9 páginas de `D199` |
| **H-26** | 🔴 **`D201` es del mismo día que `V_DO_20260831` y no la corrobora.** La declaración registrada de *"81 comunicaciones publicadas e integradas"* y *"masters depurados"* **no aparece** en la sesión del 2026-08-31: ahí solo se dice que las comunicaciones *"quedaron bastante bien"* entregadas. Hay que localizar el canal real de `V_DO_20260831` (¿correo, WhatsApp, otra reunión?) y darle ID de fuente | Afecta directamente al bloque **B08** y a dos bloqueadores de [[Pendientes Criticos]]. Decidir si la declaración se degrada, se mantiene o se documenta aparte es criterio humano, no automático |
| **H-27** | 🟡 **`D201` documenta un gestor de claves de servicio en PowerShell** construido por David Ochoa (alta, rotación, borrado lógico, historial y prueba contra portal, consultable por IA sin exponer valores). Es infraestructura **transversal de B&O**, no de Monific | Por `AGENTS.md` raíz §2.10, **desde una wiki de cliente no se escribe en otra**. El destino natural es `Wiki general/`, y esa decisión no se toma desde aquí. Se relaciona con el proxy `http://127.0.0.1:8787/Monific/` que ya declara `cliente.yaml` |
| **H-28** | 🟡 **"Jess"/"Yes" sin confirmar.** *(inferencia)* Es **Jazmín Córdova**, por el patrón de C-16 y por el rol de Lead de Desarrollo Web / Tecnología, pero **ninguna fuente escrita lo confirma**. Es quien implementó y probó las comunicaciones al cliente y quien queda liberada del proyecto el 2026-08-24 | Atribuir a una persona la autoría de un entregable y su salida del proyecto sin confirmación escrita no lo decide un agente |
| **H-29** | 🟡 **En `Monific - Meetings` estos documentos son accesos directos, no archivos.** `D200` y `D201` aparecen ahí como `application/vnd.google-apps.shortcut`; **leerlos por ese ID devuelve vacío**. El documento real es propiedad de `echulin@black-n-orange.com` y hay que resolverlo buscando por título | Es un modo de falla silencioso del barrido: no da error, da contenido vacío. Conviene que `/sincronizar` lo contemple explícitamente, y eso es un cambio de skill |
| **H-30** | 🔴 **La serie *"Follow up: Monific"* está sin ingerir casi completa.** Además de `D200` y `D201`, hay **al menos 13 sesiones más** con el mismo título entre **2026-06-22 y 2026-08-19**, todas propiedad de `echulin@black-n-orange.com` y ninguna con ID de fuente en esta wiki: 06-22, 06-29, 07-07, 07-14, 07-15, 07-16, 07-17 (×2), 08-10 (×2), 08-12, 08-17, 08-19. Cubren justo el periodo del conflicto contractual y del plan correctivo | Son ~13 fuentes nuevas. Ingerirlas cambia el estado de buena parte de la wiki y **es exactamente el hueco que [[Contradicciones y Verificaciones]] ya registraba** como *"correos de julio y agosto de 2026: no existen en las fuentes"*. El alcance lo fija una persona |
| **H-31** | 🔴 **Hay una SEGUNDA serie sin ingerir: *"Accionables Monific"*.** Detectada el 2026-09-19. Es un evento **recurrente** de calendario con David Ochoa, Emmanuel Chulin y Alan Valderrabano, **distinto** de *"Follow up: Monific"* y **sin una sola sesión con ID de fuente en esta wiki**. Se confirmó una sesión real del **2026-06-22** con notas completas: resumen, 9 próximos pasos con responsable y detalles con marcas de tiempo, en `1OaDrs9jEQKSBKe32VfZBCdZwEO7FguxkTV9vLYBIdxU` (61,099 caracteres, **leído al 100 %**). Contiene material que la wiki no tiene: pruebas A/B viables en correos automatizados, la meta de **30 propiedades y 80 correos en 2 días**, el esquema de **4 agentes de IA** para producir los correos, la gestión documental por enlaces a **Google Drive** en vez de almacenar en HubSpot, la **integración con el ERP limitada a soporte técnico** por restricciones de seguridad del cliente, y que la **notificación por WhatsApp no es factible** con la configuración actual | Es la **misma decisión que H-30, sobre otra serie**: ingerirla cambia el estado de varias páginas y el alcance lo fija una persona. Ojo: el 06-22 ya figura en la lista de H-30, así que **puede haber solapamiento entre ambas series** — o dos reuniones distintas ese día. Hay que resolverlo antes de asignar IDs de fuente |
| **H-32** | 🟡 **La sesión *"Accionables Monific"* del 2026-09-17 no produjo conocimiento, y eso es el dato.** En `Monific - Meetings` aparece como atajo (`1tQusPSBiyKuy34c0zfwcVcT2JEsSfRa9`) — tercer caso de H-29. El documento real (`1Wm1gdzwvP4alJ7C6uHAlt_al-q0rYvyDl2FNMkiELKg`) es **solo transcripción, de 00:00:11**, y Gemini declara *"no se generó ningún resumen… porque no hubo suficiente conversación"*: sin resumen, sin próximos pasos, sin detalles. **No se ingirió: no hay nada que ingerir.** ⚠️ **Trampa nueva del barrido**: el documento del 09-17 enlaza como "Notas de Gemini" el doc `1OaDrs9…`, que es **el del 2026-06-22** — el evento recurrente apunta siempre a las notas originales. Un barrido que siga ese enlace **ingeriría una sesión de junio creyendo que es de septiembre** | Decidir si la serie sigue viva y si vale la pena recuperar lo que pasó el 09-17 por otra vía (calendario, correo, los propios participantes) |

---

## Abiertos por la ingesta de `D199` (sesión del 2026-09-02)

Fuente: [[minuta-2026-09-02-flujogramas-simplificados|Minuta 2026-09-02 · Flujogramas simplificados]].
Los cuatro puntos de abajo son **decisiones de una persona**, no huecos que un agente pueda cerrar.

| ID | Pendiente | Por qué es decisión humana |
|---|---|---|
| **H-21** | 🔴 **`D199` vive fuera de las carpetas declaradas en `cliente.yaml`.** Es un Google Doc compartido (`fileId = 1IOALVo3D3ARHimBhq-byJF7iVPUDvPFUDsYXjd7NwEo`, propietario `echulin@black-n-orange.com`) cuyo **padre no es visible**: no aparece dentro de `50. Monific/Monific - Meetings` (`drive_folder_id = 1UD0CQTOjVnE0tnnGffGbjhI4nmIAdkbH`), que es lo único que declara `fuentes.transcripciones_drive`. Se ingirió porque va titulada *"Flujograma - Monific"* y es inequívocamente contenido de la cuenta. **Hay que decidir entre ampliar `fuentes` o mover el documento a la carpeta declarada.** `cliente.yaml` **no se modificó** | Cambia un dato canónico de la ficha maestra. Y si el barrido depende solo de `drive_folder_id`, las sesiones que Emmanuel Chulin grabe fuera de esa carpeta **seguirán siendo invisibles** para `/sincronizar`. Precedente idéntico: entrada del 2026-09-04 en el `log.md` de la wiki de Logisa |
| **H-22** | 🔴 **La propagación de `D199` toca 9 páginas de conocimiento y no se ejecutó.** El texto ya está orientado, página por página, en la sección *"Páginas que esta fuente debe actualizar"* de la minuta: [[Proceso Comercial Solicitantes]], [[Proceso de Servicio ATC]], [[Proceso UNE]], [[Proceso Comercial Inversionistas]], [[Proceso de Cobranza]], [[Integracion Admin Monific HubSpot]], [[Estado Actual]], [[Plan de Cierre y Gantt]], [[Propiedades]] y [[Cronologia del Proyecto]] | Más de 6 páginas es decisión humana por `sincronizar` §5. Lo que sí se hizo: minuta completa, compromisos en [[Pendientes Criticos]], contradicción en C-31 |
| **H-23** | 🟡 **`D199` no tiene extracto en `08 Fuentes/_extractos/D199.txt`.** El contenido íntegro (notas + transcripción verbatim) se leyó por el MCP de Drive y está destilado en la minuta, pero rompe la convención de que cada `D###` tenga su `.txt` | La carpeta de fuentes crudas es inmutable en la pasada automática. Crear el extracto es una acción deliberada sobre la capa que nadie modifica |
| **H-24** | 🟡 **Dos datos que `D199` cita sin identificar:** el archivo *"que nos pasó el cliente recientemente"* y la *"propuesta TO-BE"* compartida por Monific. Ambos se usaron como insumo de la simplificación y **ninguno tiene ID de fuente** en la wiki | Sin saber qué documentos son, no se puede citar la base del flujo simplificado ni verificarla |

> 🆕 **Ampliación del 2026-09-09 a H-21 — ya no es un caso aislado, es el patrón.** El barrido de
> esta fecha confirmó que **el `drive_folder_id` declarado está muerto para el material nuevo**:
> `parentId = '1UD0CQTOjVnE0tnnGffGbjhI4nmIAdkbH'` **no devuelve nada posterior al 2026-06-19**, y
> el filtro `modifiedTime > '2026-09-01T00:00:00Z'` sobre esa carpeta devuelve **cero archivos**.
> Todas las sesiones desde el 2026-08-24 viven en carpetas **hermanas**, colgadas de la carpeta
> personal de grabaciones de Meet (`1Sid8bu8k5TT0Em_3AH27FNVfx5O6G1d-`), no de la declarada:
>
> | Carpeta real | `folderId` | Qué contiene |
> |---|---|---|
> | `Follow up: Monific (recurring)` | `1iyTgm51VNaR8YQmCGEb9do4fa68UJUwt` | Los atajos de `D200`, `D201` y `D202` |
> | `Flujograma - Monific - 2026/09/02 15:02 CST` | `1y22RLVv0QxxOrxRy3USGgo851FTfZHtm` | El atajo de `D199` |
>
> Y `parentId` **no es recursivo**, así que aunque estuvieran colgadas de la carpeta declarada
> tampoco aparecerían. **Sin arreglar esto, `/sincronizar` seguirá reportando "sin novedades" con
> sesiones sin ingerir.** Las dos salidas son las mismas de siempre: ampliar `fuentes` en
> `cliente.yaml`, o mover las carpetas. `cliente.yaml` **no se modificó.**

> **Grabaciones.** La fuente no menciona ninguna grabación `.mp4` asociada, y en la carpeta declarada
> no se buscó una. Si aparece, se referencia por nombre y `fileId`: **no se transcribe.**

---

## Datos canónicos vacíos en `cliente.yaml`

| Campo | Qué falta | Cómo se cierra |
|---|---|---|
| `cliente.nombre_legal` | Razón social de Monific | Contrato — es la única cuenta del portafolio con contrato conocido, así que el dato existe |
| `hubspot.suscripcion` | Qué hubs y qué nivel tiene el portal `48427391` | [[Portal HubSpot]] lo describe; falta reflejar el dato exacto aquí |
| `contactos_clave[].correo` | Correos y **roles formales** de Caroline Bersot, Jesús Torres, Raquel Alfie y Ted Senado | [[Directorio de Contactos]] los tiene parcialmente; confirmar con el cliente |
| `pauta` | Sin pauta documentada | El alcance es implementación, no generación de demanda. Si se contrata, documentar cuentas, IDs y convención UTM |

## Secciones del contrato de wiki sin poblar

El contrato de wiki de cliente de B&O pide cubrir estrategia y marketing igual que la parte técnica.
En esta cuenta el alcance es implementación, así que varias quedan **fuera de alcance a propósito** —
y eso es una respuesta válida, no un hueco:

| Sección | Estado | Nota |
|---|---|---|
| ICP y buyer personas | ✅ Cubierta | [[Buyer Persona Inversionista]] y [[Buyer Persona Solicitante]] |
| Propuesta de valor y modelo de negocio | ✅ Cubierta | [[Modelo de Negocio]] |
| Procesos y SLAs | ✅ Cubierta | Las 5 páginas de `04 Procesos/` + [[SLAs y Escalamientos]] |
| Objetivos y KPIs con metas | ⚠️ Parcial | Hay cifras de avance en [[Estado Actual]]; **no hay página de KPIs de negocio con metas** |
| **Guía de voz y tono del cliente** | ⚠️ Falta, pero ya no bloquea | Hay vocabulario controlado en `AGENTS.md` §12, que no es lo mismo. **Al 2026-08-31 las 81 comunicaciones se declaran publicadas**, así que el copy se resolvió por otra vía. La guía sigue faltando para cualquier comunicación futura, pero dejó de ser el cuello de botella |
| Calendario editorial · blogs · SEO | ❌ Fuera de alcance | No es parte del engagement |
| Pauta pagada, IDs y convención UTM | ❌ Fuera de alcance | No es parte del engagement |
| Lead magnets | ❌ Fuera de alcance | No es parte del engagement |

> ⚠️ **Actualizado 2026-08-31.** El hueco que dolía era la **guía de voz y tono**, porque B08 son 81
> comunicaciones y ninguna estaba publicada. Ahora se declaran publicadas, así que el hueco que duele
> pasó a ser otro: **no hay evidencia cargada de ninguna de ellas**. El problema del proyecto se movió
> de *producir* a *acreditar*.

## Huecos abiertos por el corte del 2026-08-31

| ID | Hueco | Por qué importa |
|---|---|---|
| **H-15** | 🔴 **Inventario de los 81 assets publicados**: nombre, ID, canal, trigger, destinatario y fecha | Sin él no se puede llenar la Plantilla de Respuesta de B08 ni contradecir el tracker, que sigue diciendo 77 en estado "Crear" |
| **H-16** | 🔴 **Versión depurada de los masters** y explicación del origen del contenido de otro cliente | Es lo que B12 exige además de la limpieza. Toca confidencialidad de un tercero |
| **H-17** | 🔴 **Minuta o acuerdo de la sesión del 2026-08-03** | Sin ella no se sabe si Monific validó o rechazó la clasificación de los 70 pendientes. Cambiaría el estado de siete páginas |
| **H-18** | 🔴 **Evidencia de ejecución de las 11 correcciones** comprometidas el 2026-08-03 | Compromiso propio de B&O por escrito, sin acreditar |
| **H-19** | 🔴 **Anexo operativo del cambio a modelo de asesoría**, firmado | El cambio de alcance más grande del proyecto sigue sin respaldo contractual |
| **H-20** | 🔴 **Acuerdo escrito de prórroga** tras el vencimiento de H5 el 2026-08-28 | Disparador de R-01. Es el hueco más urgente de la lista. 🆕 **2026-09-28:** `D203` cita un acuerdo por correo del **2026-08-20** de alinear el ritmo al cierre de TI a fines de octubre — *"no se reinician plazos"*. No es prórroga contractual, pero es lo más cercano que hay → C-35, H-35 |

## Fuentes sin extraer o sin ingerir

| Material | Qué aportaría | Dónde está |
|---|---|---|
| Flujogramas 01–04 | Nunca se extrajeron; son el detalle de los procesos | `drive-download-*/` |
| `Directorio Responsables - Monific.xlsx` | Roles y correos formales del equipo del cliente | Raíz de la wiki |
| `Propuesta Gantt v2 - Monific (actualizado 16-jul).xlsx` | Plan y fechas comprometidas | Raíz de la wiki |
| `Monific-HubSpot-Integracion-Tecnica.pdf` | Detalle técnico de la integración | Raíz de la wiki |
| `Recurrente Monific_ 2026_05_15 ... Notas de Gemini.docx` | Sesión sin destilar | Raíz de la wiki |

> ⚠️ **Regla del proyecto:** descomprime los `.zip` antes de inventariar. Un `.zip` en `01. Adicionales/`
> escondió `D198` —la fuente más reciente— durante cuatro días.

## Higiene de la wiki

| Hallazgo | Detalle | Acción |
|---|---|---|
| ✅ `.git` eliminado | Había un `.git` vacío en `50. Monific/`, cáscara que dejó Drive al intentar sincronizarlo. Sin commits ni remoto | Resuelto el 2026-08-20 |
| Copia de conflicto de Drive | `drive-download-20260807T143934Z-1-001/Gantt - Monific (1).xlsx` | Comparar con el original, fusionar y borrar la copia |
| Residuo de `.tmp.driveupload` de más de 24 h | Archivo `1680` (173,669 bytes, fecha 2026-07-28) — transferencia abortada, no en vuelo | Ya está viejo, no se resuelve solo. Revisar manualmente si el archivo real subió por otra vía; si no, forzar reintento desde Drive para escritorio |
| Cola de subida de DriveFS con 14 archivos "en vuelo" que no drena | Verificado el 2026-08-25: el guardián reporta 14 archivos en `.tmp.driveupload` "EN VUELO" sin cambio tras 20 s de espera — coincide con el problema ya conocido de este equipo (AVG intercepta TLS a `googleapis.com` y la cola no drena hasta excluirlo en AVG). No es nuevo ni bloqueó esta sesión, pero significa que el cambio de esta sesión en `PENDIENTES.md` puede no haber subido a Drive todavía | Ninguna acción de agente la resuelve; requiere que el usuario excluya Drive/DriveFS en AVG. Revisar que subió antes de la próxima sesión |
| Archivo con nombre ambiguo | `02 Proyecto/Conflicto Contractual.md` contiene `(1)`… no: es un nombre legítimo. **Falso positivo** del detector, que busca `(N)` en cualquier archivo | Ninguna. Anotado para no volver a levantarlo |
| **11 carpetas `drive-download-*` en la raíz de la wiki** | 93 archivos de fuentes crudas dispersos en carpetas con nombre de descarga automática | Consolidar en una sola carpeta `_raw/` **actualizaría 5 páginas** que las referencian ([[Indice de Fuentes]], [[Documentos Contractuales]], `LEEME.md`, `AGENTS.md`, `MANTENIMIENTO.md`). No se hizo en la homologación para no romper referencias sin validarlo |
| Archivos sueltos en la raíz | `.xlsx`, `.pdf`, `.docx` y un `Sin título.canvas` vacío conviven con los archivos de contrato de la wiki | Mover a `_raw/` junto con lo anterior, o dejar y documentar |
| `## Enlaces relacionados` vs `## Defecto del guardián de sincronía — detectado el 2026-09-01

`scripts/verificar-sincronia-drive.ps1` **no lee la fecha de corte de la última entrada del log.**
Lee la primera cadena con forma de fecha que aparece en todo el archivo:

```powershell
$m = Select-String -Path $log -Pattern "\d{4}-\d{2}-\d{2}" -List
```

En esta bitácora esa primera cadena está en la **prosa del encabezado** —el `2026-08-20` de la nota
de homologación—, no en una entrada. Reporta `Corte : 2026-08-20` cuando el corte verdadero es el **2026-08-31** (entrada *Corte declarativo de Dirección B&O*).

**El sesgo es conservador**, así que no se pierde material: pide de Drive más de lo necesario, nunca
menos. Pero cada pase diario vuelve a evaluar material ya ingerido, que es exactamente el trabajo que
los pases "sin novedades" repiten.

| Qué falta | Cómo se cierra |
|---|---|
| Decidir el arreglo del script | Leer la fecha del primer encabezado `## [AAAA-MM-DD]` en lugar de la primera fecha del archivo, y descartar el placeholder `AAAA-MM-DD` del propio encabezado |
| Aplicarlo en las seis wikis que tienen el script | Es el mismo archivo copiado en Logisa, Monific, VEC, Natgas, Frigostar, Vazter y EMA. **Ferremayoreo no lo tiene** |
| Decidir si el aprendizaje va a `Wiki general/` | Afecta a más de una cuenta, así que por `AGENTS.md` §5 le corresponde estar ahí |

> **No se modificó el script.** Es código compartido por varias wikis; cambiarlo desde un pase
> automático de sincronización queda fuera de lo que este trabajo debe decidir solo.

## Relacionado` | El contrato común usa `## Relacionado`. Varias páginas usan el nombre viejo | Migrar al tocar cada página; el verificador ya lo detecta |
| ✅ **Resuelto 2026-08-26** — Corrupción de codificación en `08 Fuentes/Indice de Fuentes.md` | Único archivo de la wiki con `mtime` del **2026-08-24** — todas las demás páginas quedaron en 2026-08-20 (la homologación general). Su contenido estaba guardado en UTF-8 con BOM pero **doblemente codificado** (mojibake): cada acento y "ñ" salía como secuencia `Ã©`/`Ã­`/`Â«`, ejemplo `Ãndice`, `reuniÃ³n`, `TÃ©cnica`. El frontmatter decía `actualizado: 2026-08-11`, así que el contenido en sí no había cambiado — solo se corrompió al reguardarse 13 días después. La causa de que el fix de una sola pasada de la sesión anterior (Latin-1) fallara en la elipsis junto a `` `P_CONTRATO` `` (la convertía en `◆` en vez de `…`) era usar la tabla de **Latin-1** en vez de **Windows-1252** para el rango de bytes 0x80–0x9F — no una "segunda capa" de corrupción real. | **Resuelto.** Se revirtió con la tabla completa de Windows-1252 para 0x80–0x9F (Latin-1 para el resto), se revisó el archivo completo línea por línea y no queda ninguna secuencia `Ã` ni `â€`. Se quitó el BOM (el resto de la wiki no lo usa) y se actualizó `actualizado:` a 2026-08-26. Ver `log.md` [2026-08-26]. |

## Relacionado

- [[Pendientes Criticos]] — los bloqueadores del proyecto, que es otra cosa
- [[Preguntas Abiertas]] — las preguntas analíticas
- [[Indice de Fuentes]] — el mapa entre IDs y documentos originales
- [[Estado Actual]] — las cifras de avance al corte más reciente
- [[index]] — el mapa maestro de la wiki
