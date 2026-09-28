---
titulo: Revisión de cierre 2026-09-24 — Reporte de evidencias de Monific
tipo: fuente
area: transversal
estado: en-riesgo
confianza: media
actualizado: 2026-09-28
fuentes: [D203, D204]
tags: [fuentes, auditoria, estado]
aliases: [Reporte de evidencias HubSpot 2026-09-24, Revisión de cierre de Monific]
fecha_documento: 2026-09-24
autoria: Monific (Raquel Alfie)
---

# Revisión de cierre 2026-09-24 — Reporte de evidencias de Monific

> **En una frase:** Monific revisó por su cuenta el portal `48427391` con un export masivo por API
> (configuración del 2026-09-22, export terminado el 2026-09-24) y concluye que **no hay sustento
> para aceptar el cierre integral** que B&O declaró por correo el 2026-09-11: registra **14
> hallazgos** (5 críticos), reconoce avances concretos —los seis workflows UNE, la corrección de
> WF-039— y exige responder **en la misma Plantilla_Respuesta_BNO**, sin matriz nueva.

| | |
|---|---|
| **Documento** | `01_REPORTE_EVIDENCIAS_HUBSPOT_MONIFIC_BNO_2026-09-24.docx` (215,040 bytes) → `D203` |
| **Instrucción acompañante** | `00_LEER_PRIMERO_REVISION_2026-09-24.txt` (4,860 bytes) → `D204` |
| **Autoría** | **Monific** — propietaria `raquel@monific.com`. No es documento de B&O |
| **Fecha** | Fechado 2026-09-24; creado en Drive el 2026-09-25 01:42 UTC |
| **Ubicación en Drive** | `00_VIGENTE_LEER_PRIMERO / 2026-09-24_REVISION_DE_CIERRE` (`1gS8pZt2egHXr57yBdaOOFYUZJhaNZyGL`), carpeta del cliente donde B&O es **lector** → [[Gobernanza y Rituales]] |
| **Leído** | 100 % de ambos archivos, por MCP de Drive, el 2026-09-28 |
| **Primera apertura por B&O** | `viewedByMeTime` 2026-09-25 20:18 UTC en la cuenta de David Ochoa |

⚠️ **Todo lo que sigue es afirmación de Monific, no verificación de B&O.** El reporte se apoya en un
export por API, que es evidencia técnica más fuerte que una minuta, pero **B&O no lo ha reproducido**
y el propio documento declara sus límites: configuración de workflows leída el **2026-09-22** y
reutilizada el 24, lecturas no simultáneas, export `FINALIZADO_CON_LIMITACIONES`
(`es_exportacion_total = false`), **sin pruebas nuevas en producción**. Marcador aplicable: 🟡
**Documentado** (por el cliente). Nada de aquí es ✅ Verificado.

⚠️ *(inferencia)* El texto trae giros de asistente de IA dirigidos a su usuaria (*"No inventé su
dirección ni concedí permisos"*, *"Sólo estas acciones dependen de ti"*). Por `AGENTS.md` §13, las
cifras se citan tal como vienen y con su fuente; no se tratan como verdad técnica hasta cotejarlas.

---

## El veredicto, en tres líneas del propio reporte

| Sobre | Qué concluye Monific |
|---|---|
| **TI de Monific** | Sí avanzó: está en *implementación e integración con carga parcial visible*, antes de aceptación. No se califica a TI como atrasado, porque el 2026-08-20 se aceptó alinear el trabajo al **cierre estimado de TI a finales de octubre** |
| **B&O** | *"No hay sustento suficiente para aceptar el cierre integral ni para considerar todas sus configuraciones correctas."* Hay errores reproducibles en definición de workflows y pendientes de prueba |
| **Qué sigue** | Corregir lo que ya está mal, cerrar la interfaz con TI y ejecutar casos. **No** hace falta otro levantamiento general ni otra matriz |

## Las cifras del corte (según Monific)

| Dato | Valor | Cómo lo lee el propio reporte |
|---|---|---|
| Workflows | **105**, de ellos **85 encendidos** | Encendido no significa probado |
| Contactos exportados | 150,487 | — |
| Contactos con campos financieros nuevos | **57,261** (`monific_current_account_balance`, `monific_invested_balance`); 57,273 con `monific_last_synced_at` | Hay carga, pero tres workflows leen los campos anteriores (H01) |
| Propiedades `monific_*` nuevas | **12**, creadas por Jesús Torres el **2026-09-21** | Se le atribuye la creación de propiedades, no toda la integración |
| Negocios / tickets / Proyectos | 193,264 · 2,720 · **2** Proyectos | Modelo parcialmente poblado |
| Workflows UNE nuevos | **6**, creados el 2026-08-06, encendidos | Se reconoce el avance; falta prueba de recorrido |
| Plantilla_Respuesta_BNO | **217** filas: **184 Sí · 30 Parcial · 3 No** | Autodeclaración de B&O; *"no son 184 puntos aceptados"* |
| FALTANTES.csv del export | 24,886 entradas (24,686 son HTTP 207) | Limitación de la extracción, **no bugs de B&O** |

→ Estas cifras chocan con las canónicas de `cliente.yaml` (corte 2026-06-17). **No se sustituyeron:**
ver [[Contradicciones y Verificaciones]] **C-34**.

## Los 14 hallazgos del corte

Los numera el cliente **H01–H14**. ⚠️ No confundir con los `H-##` de `PENDIENTES.md`, que son otra
serie: en esta wiki se citan como **"H01 de `D203`"**.

| # | Severidad | Hallazgo | Workflow(s) citados | Resuelve |
|---|---|---|---|---|
| **H01** | 🔴 Crítica | La integración escribe `monific_current_account_balance` / `monific_invested_balance`; **WF-025, WF-026 y WF-033** siguen leyendo `invested_balance` / `current_account_balance`. Ninguna de las 105 definiciones usa los nombres nuevos | `1808818247` · `1808819073` · `1808890885` | TI + B&O, conjunta |
| **H02** | 🔴 Crítica | **WF-045** (`1822136840`) encendido con condiciones AND incompatibles sobre `tipo_de_ticket` (select de valor único): *Solicitante* **y** *Reclamación formal UNE*. La prueba entregada fue **inscripción manual** | `1822136840` | B&O |
| **H03** | 🟠 Alta | Formulario nuevo `6ddb7cbb-85f5-42fa-b051-ae57f534e83d` (creado 2026-08-14, 7 campos, incluye `cuenta_con_garantia`) **sin referencia en ningún workflow**. El flujo `1832556831` usa otro formulario; el legado `1640673709`, otro; el seguimiento `1834467729` está apagado | `1832556831` · `1640673709` · `1834467729` | B&O + TI/web |
| **H04** | 🔴 Crítica | **WF-018** mueve a **Ganado** con `contrato_firmado = Sí` **antes** de confirmar publicación de la campaña en Admin (COM-REV-10) | `1808711272` | B&O + TI + Comercial |
| **H05** | 🟠 Alta | **WF-033** escribe `fecha_primera_inversion` con `EXECUTION_TIME` y copia `invested_balance` (saldo acumulado) a `monto_primera_inversion` | `1808890885` | B&O + TI |
| **H06** | 🟠 Alta | **WF-026** (Congelado) usa tiempo en etapa en vez de fecha STP / inactividad de Admin (COM-INV-12) | `1808819073` | B&O + TI + Monific |
| **H07** | 🟠 Alta | **WF-039** **ya no reabre Activo** —corrección reconocida, revisión del 2026-09-04—, pero sigue sin confirmar baja definitiva y usa campos del proceso de Solicitantes | `1808890376` | B&O + Inversionistas |
| **H08** | 🔴 Crítica | Despacho **ARI** sin recepción demostrada y **tres calendarios de cobranza** distintos (Legal 30-jul semanas 1/2/3; master 31-jul días 15/16/30/61; manual interno de septiembre ~30 / 61+) | `1820890946` · `1820908035` | Legal/Finanzas Monific + B&O + TI |
| **H09** | 🟠 Alta | Comunicaciones configuradas ≠ recibidas. Se reconocen pruebas de COB-003 y COB-010; seis flujos de cobranza sin acción de email. *"No se vuelve a afirmar que las 81 comunicaciones están ausentes"* | `1820912802` · `1820907946` · `1820908035` | B&O + Monific |
| **H10** | 🟠 Alta | **Los seis UNE existen** (`1862689839`, `1862689942`, `1862689944`, `1862690373`, `1862690449`, `1862690450`), pero falta el recorrido completo con canal oficial y control de cierre | los seis | B&O + Servicio/Legal + TI |
| **H11** | 🔴 Crítica | Proyecto (objeto `0-970`) y Ticket por campaña sin cobertura acreditada: 2 Proyectos, 10 tickets en Cobranza, 2 asociaciones Proyecto→Negocio y 5 Proyecto→Ticket, cero hacia Contacto/Empresa | — | TI + B&O |
| **H12** | 🟠 Alta | Un `move_id` duplicado en dos negocios (pipeline `708176204`), ambos del **2026-03-09**. No se atribuye al trabajo reciente | — | TI + B&O |
| **H13** | 🟠 Alta | La Plantilla_Respuesta_BNO **mezcla requisitos con evidencias de otro punto** (CON-022, CON-053, CON-060) | `1822136840` | B&O + Monific |
| **H14** | 🟠 Alta | El *"100 % de entregables directos"* del correo del 2026-09-11 **no tiene un paquete identificable de cierre**: falta un índice único con URL/versión de manuales, tableros, guías y sesiones | — | B&O + TI + Monific |

Cada hallazgo trae en el original *qué debía ocurrir*, *qué se encontró*, *acción concreta*, *qué
evidencia lo cierra* y *alcance de la conclusión*. Aquí se resume; el detalle está en `D203`.

## Estado por bloque B01–B16, según Monific

Conserva los IDs del requerimiento del 2026-06-18 → [[Bloques de Cierre B01-B16]].

| Bloque | Estado declarado por Monific | Hallazgos |
|---|---|---|
| B01 TO BE y conciliación | Parcial / contradicciones | H08, H13, H14 |
| B02 Solicitantes WF-001–024 | Con diferencias comprobadas | H03, H04 |
| B03 Inversionistas WF-025–040 | Con errores comprobados | H01, H05, H06, H07, H12 |
| B04 Servicio/UNE WF-041–049 | Con error comprobado (WF-045) | H02, H10 |
| B05 Cobranza WF-050–064 | Parcial / regla pendiente | H08, H09, H11 |
| B06 Dashboards | Validación pendiente | H14 |
| B07 31 propiedades / 26 faltantes | **No cuantificado**: *"el histórico '26 faltantes' no se reemite como cifra vigente"* | H01, H10 |
| B08 81 comunicaciones | Parcial / aprobación pendiente | H09 |
| B09 Capacitación | Preparación no acreditada completa; capacitación efectiva diferida | H14 |
| B10 Arquitectura para TI | Interfaz desalineada | H01, H11 |
| B11 Higiene y seguridad | Revisión específica pendiente | H11, H12 |
| B12 Masters con contenido de otro cliente | **No se revalida el hallazgo histórico** | H13, H14 |
| B13 Modelo operativo y horas | Conciliación administrativa pendiente; *"sin inferir adeudos"* | — |
| B14 Segregación ARI | No demostrado | H08 |
| B15 Flujo UNE | **Avance comprobado** / UAT pendiente | H10 |
| B16 Destinatarios de B&O y tokens HubL | No demostrado integralmente | H02, H07, H09 |

## Correcciones que Monific hace a sus propias lecturas anteriores

El reporte declara que **ya no reutiliza como hechos actuales**: *"los seis UNE no existen"*,
*"WF-039 vuelve a Activo"*, *"reinscripción apagada impide siempre la primera entrada"*, *"un ID
numérico es un token roto"* y *"todos los errores de exportación son bugs de BNO"*. Los dos primeros,
dice, ya muestran avance o corrección en este corte. Esto toca directamente varias cifras que la wiki
sostiene desde junio → C-34.

## Cronología que el reporte fija (hechos que la wiki no tenía)

| Fecha | Hecho, según `D203` | Fuente interna del reporte |
|---|---|---|
| 2026-06-29 | Minuta: Tickets para Cobranza; responsabilidades B&O / TI diferenciadas | S06 |
| 2026-07-27 | Minuta: formulario HubSpot, sin scoring numérico de Solicitantes; garantía como criterio | S07 |
| 2026-08-04 | Minuta: integración inicial Admin → HubSpot; conservar el modelo existente | S08 |
| **2026-08-20** | 🆕 **Monific acepta alinear el ritmo al cierre estimado de TI a finales de octubre** (correos; conformidad de Raquel Alfie). *"Es una estimación, no cierre técnico comprobado"* | S03 |
| 2026-09-04 / 07 | Manual interno de Cobranza de Monific (uso interno; **no acreditado como entregado a B&O**) | S19 |
| **2026-09-11** | 🆕 **Correo de B&O a Monific**: declara sus **entregables directos concluidos** y difiere pruebas finales, dashboards poblados y capacitación hasta después de TI. **La respuesta de Monific no acepta el cierre integral** | S02 |
| 2026-09-21 | Jesús Torres crea 12 propiedades `monific_*` | S26 |
| 2026-09-22 | Lectura de configuración de los 105 workflows | S23 |
| 2026-09-24 | Fin del export y fecha del reporte | S22 |

⚠️ Los correos del 2026-08-20 y del 2026-09-11 **no están en esta wiki**: se conocen solo por lo que
el reporte dice de ellos. Registrados en `PENDIENTES.md` (**H-35**).

## Qué le pide Monific a B&O — y cómo

De `D204` (instrucción) y del cierre de `D203`:

1. **Responder en la misma `Plantilla_Respuesta_BNO`**, no crear otra matriz: seguimiento fechado en
   la columna **AJ** de *Respuesta BNO*; por bloque en **AA** de *Bloques B01-B16*; dependencias en
   **Q** de *Dependencias B&O*. Con responsable nominal, fecha compromiso, corrección o dato faltante
   y enlace a prueba con resultado esperado y real. **No borrar el histórico A:AC.**
2. **Depositar versiones corregidas y evidencias** en la carpeta de respuesta existente
   (`02_RESPUESTA_BNO`), indicando qué versión reemplazan.
3. **Corregir primero lo que no depende de TI:** H02 (WF-045), H04 (Ganado), H05 (fecha/importe),
   H06 y H07 (Congelado/Cierre). H01 se coordina con TI antes de renombrar nada.
4. **Aportar ya el índice y las URLs** de lo entregado (H14) y **los tableros configurados aunque la
   validación de datos espere a TI**.
5. Prueba conjunta de **seis recorridos**: Solicitante completo; inversionista/STP/compra; liquidación
   y recompra; Ticket por campaña; Cobranza/ARI; UNE.

Regla de cierre que reitera: *documento o configuración corregidos + evidencia fechada + caso
reproducible + validación escrita de Monific*. **Una captura, un "Sí" o el envío de un correo no
cierran nada.** Es la misma regla de esta wiki (`AGENTS.md` §3.4).

`D204` añade tres registros nuevos **en el control**, no de alcance: `REV-20260924-H03` (formulario),
`REV-20260924-H11` (Proyecto/Ticket por campaña) y `REV-20260924-H12` (`move_id`). Y aclara que **el
color de las filas no indica implementación ni aceptación** y que **las filas sin revisión de
septiembre no se consideran aceptadas**.

## Lo que el reporte deja expresamente fuera

- No obtuvo repositorio de Admin/NestJS, logs de despliegue, padrón de campañas ni conciliación
  financiera Admin↔HubSpot.
- No validó sitio/formulario, inbox, dashboards ni permisos efectivos por usuario.
- No ejecutó casos nuevos ni inspeccionó cada captura de B&O.
- Las carpetas con el volcado CRM completo (`04. Auditorías técnicas de HubSpot` y `05. Cortes de
  validación Monific`) son **privadas de Monific**; B&O no tiene acceso y el reporte recomienda no
  compartirle el volcado. Por eso **esta wiki no las referencia más allá de su existencia**.
- *"La preparación del nuevo correo de Raquel no prueba su envío"*: hay un **borrador** de correo de
  Monific a B&O, no enviado al 2026-09-24 según `D204`.

## Qué no se hizo en esta ingesta

- **No se tocó HubSpot.** Ninguna de las correcciones H02–H07 se ejecutó: son cambios en sistema vivo
  y requieren confirmación explícita (`AGENTS.md` raíz §3).
- **No se escribió en la Plantilla_Respuesta_BNO** ni en Drive.
- **No se actualizaron las cifras de `cliente.yaml`** ni de [[Estado Actual]]: cambiar datos
  canónicos es decisión humana → `PENDIENTES.md` H-34.
- **No se propagó** a las páginas de proceso, workflows ni bloques: toca más de 6 páginas →
  `PENDIENTES.md` H-36.

## Páginas que esta fuente debe actualizar (propagación diferida)

| Página | Qué cambia |
|---|---|
| [[Estado Actual]] | Cifras del corte 2026-09-24 (105/85 workflows, 12 propiedades `monific_*`, 6 UNE), marcadas como afirmación del cliente |
| [[Workflows]] | IDs y defectos de WF-018, 025, 026, 033, 039, 045 y los seis UNE |
| [[Bloques de Cierre B01-B16]] | Estado por bloque según Monific (tabla de arriba) |
| [[Proceso UNE]] | Los seis workflows existen; falta el recorrido E2E |
| [[Proceso de Cobranza]] | Tres calendarios ARI en conflicto; Ticket por campaña |
| [[Proceso Comercial Inversionistas]] · [[Proceso Comercial Solicitantes]] | H01, H04–H07 · H03, H04 |
| [[Integracion Admin Monific HubSpot]] | Campos nuevos vs. viejos; `move_id` duplicado; horizonte de TI a fines de octubre |
| [[Dashboards y Reportes]] | Monific pide los tableros configurados ya, aunque la validación espere a TI |
| [[Cronologia del Proyecto]] | Los hitos del 2026-08-20, 2026-09-11 y 2026-09-24 |
| [[Correspondencia]] | Los correos del 2026-08-20 y 2026-09-11, cuando se consigan |

## Relacionado

- [[Auditorias]] — este es el primer corte de evidencia del cliente posterior al requerimiento del 2026-06-18
- [[Contradicciones y Verificaciones]] — C-32 a C-36, que este documento amplía o abre
- [[Pendientes Criticos]] — los bloqueadores #9 y la respuesta que Monific exige
- [[Bloques de Cierre B01-B16]] — los IDs de bloque que el reporte conserva
- [[Indice de Fuentes]] — `D203` y `D204`

## Fuentes

- `D203` — *01_REPORTE_EVIDENCIAS_HUBSPOT_MONIFIC_BNO_2026-09-24.docx*, Monific, 2026-09-24 · `fileId` `1b7mgi8Dpjo8Qzv50trfrqrjCOboF5y3U`
- `D204` — *00_LEER_PRIMERO_REVISION_2026-09-24.txt*, Monific, 2026-09-24 · `fileId` `1-WkPPcmjNzPbNETLACXS3LJaXpZXceLv`
