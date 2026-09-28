---
name: sincronizar
description: Trae lo nuevo del Drive de Monific a la wiki — minutas y recursos —, lo destila, lo interconecta con lo que ya está documentado y verifica que el espejo local↔Drive quedó completo. Úsala en la rutina semanal, después de una tanda de sesiones, o cuando sospeches que alguien editó la wiki desde fuera.
---

# /sincronizar — traer lo nuevo del Drive a la wiki de Monific

> **Escribe solo en local, y solo dentro de esta wiki.** La copia en Drive ya existe: la mantiene
> Drive para escritorio. Esta skill **nunca** escribe en Drive por API. Dos escritores sobre el
> mismo archivo no producen una fusión, producen una copia de conflicto — la regla dura de
> `MANTENIMIENTO.md`.

Complementa a `/actualizar`. Esa integra una fuente que **ya tienes en la mano**; esta **va a
buscarla a Drive** y además cuida el espejo. Las reglas de destilado, propagación y contradicciones
son las de `/actualizar`: aquí no se repiten, se invocan.

---

## 1. Guardián de entrada — antes de leer nada

```
scripts/verificar-sincronia-drive.ps1
```

Lee su salida y actúa. **No la saltes**: si el espejo está roto, todo lo que hagas después se
construye sobre una versión falsa de la wiki.

| Hallazgo | Qué significa | Qué haces |
|---|---|---|
| **Drive no está corriendo** | El espejo está congelado. Lo que escribas no sube y lo que otros subieron no ha bajado | **PARA.** Arráncalo con el comando que imprime el script, espera a que termine, vuelve a correrlo |
| **Archivos en vuelo** | Drive está a media transferencia | **PARA.** Espera y vuelve a correrlo. Empezar a media sincronización es trabajar sobre una versión vieja |
| **Copia de conflicto en página viva** | Dos escritores ya chocaron | **PARA.** Fusiónala a mano y borra la copia. Un agente puede leer la equivocada |
| **Archivos de 0 bytes** | La carpeta no está "Disponible sin conexión": son marcadores, no contenido | **PARA.** Sin esto lees vacío y concluyes que no hay nada documentado |
| **Residuo de más de 24 h** | Transferencia abortada, no en vuelo | Anótalo en `PENDIENTES.md` y sigue |
| **Copia de conflicto en material crudo** | Ruido de exportación en `raw/`, no divergencia | Sigue. Menciónalo al cerrar |

El script también te da, ya calculados: la **fecha de corte** (la última entrada del log), las
**carpetas de fuentes** declaradas en `cliente.yaml`, y la **consulta lista** para el MCP de Drive.

---

## 2. Qué leer, y de dónde

| Fuente | Cómo se lee | Regla |
|---|---|---|
| **Minutas en Drive** | MCP de Google Drive, con la consulta que imprime el script: la carpeta por `drive_folder_id` filtrada por `modifiedTime` posterior al corte | Solo los **documentos de notas** (Notas de Gemini y equivalentes) |
| **Grabaciones `.mp4`** | No se leen | **No transcribas audio ni video.** Se referencian por nombre y ubicación |
| **Fuentes locales** | Sección E del script: las carpetas de `fuentes.carpetas` con archivos posteriores al corte | Solo lo textual. Los adjuntos se referencian, no se destilan |
| **Accesos directos `.gdoc` / `.gsheet`** | Sección F: son **solo la URL**, el texto no está en local. Se leen por MCP con el `fileId` que el script extrae | Si el MCP no está disponible, van a `PENDIENTES.md` pidiendo exportación |
| **Carpeta de credenciales** | **Nunca.** Solo se referencia que existe | Sin excepciones |

Si el script dice **"sin `drive_folder_id`"**, esta wiki no tiene carpeta de minutas declarada: haz
solo el barrido local y anota el hueco en `PENDIENTES.md`.

---

## 3. El cotejo — "recibir" antes de escribir

Esta wiki es **conjunta**: alguien puede haberla editado desde la web o desde otra máquina. Antes
de tocar una página, compara los dos lados. Pide la huella de lo que vas a tocar:

```
scripts/verificar-sincronia-drive.ps1 -Huella -Rutas "ruta/pagina-1.md","ruta/pagina-2.md"
```

Busca cada archivo en Drive por nombre dentro de la carpeta de la wiki y compara **tamaño y
`modifiedTime`** contra la huella. Cuatro casos, y son distintos:

| Local vs Drive | Diagnóstico | Qué haces |
|---|---|---|
| Idénticos | Espejo al día | Escribe con confianza |
| **Local más nuevo** | Subida pendiente, no divergencia | Escribe. Al cerrar, verifica que subió |
| **Drive más nuevo, local sin cambios desde el corte** | Alguien editó desde fuera y aún no bajó | **Trae el contenido de Drive a local primero**, y sigue trabajando sobre esa versión |
| **Los dos cambiaron** | Divergencia real | **Fusiona, no sobrescribas.** Ver abajo |

### La regla de fusión

Cuando los dos lados cambiaron, la versión de Drive es **una fuente más**, no una autoridad que
borra. Trátala exactamente como `/actualizar` trata una fuente que contradice lo documentado:

1. **Integra** lo que Drive aporta en la página local. Nada de reemplazar el archivo completo.
2. **Prevalece lo más reciente, y no borras lo anterior.** Deja la nota `> ⚠️` con qué decía cada
   lado, qué se conservó y por qué.
3. Si no puedes decidir cuál gana, **no adivines**: registra la divergencia en `PENDIENTES.md`,
   deja las dos afirmaciones marcadas en la página y pregunta.

Sobrescribir con Drive perdería el trabajo local que aún no había subido. Ese es el modo de falla
que este paso existe para evitar.

---

## 4. Destilar, integrar, interconectar

Las reglas son las de `/actualizar`. Las dos que más se incumplen:

- **La página de fuente es el recibo; la wiki es el conocimiento.** Una minuta típica toca de 5 a
  15 páginas. Dejar el conocimiento encerrado en la página de fuente es el error clásico.
- **Enlaza contextualmente.** La primera vez que menciones algo con página propia, enlázalo ahí
  mismo con `[[wikilink]]`. Corto dentro de esta wiki; con ruta completa desde la raíz de la bóveda
  cuando cruces a otra — por ADR-004, que gana sobre cualquier prompt que pida enlaces markdown.

Interconectar es el trabajo, no un adorno: una minuta que menciona un workflow, una persona y un
compromiso debe dejar tres enlaces, y los compromisos con responsable y fecha van a la página de
próximos pasos de esta wiki.

---

## 5. Cuándo pararte a preguntar

Ingiere sola lo que no tiene riesgo. **Detente y pregunta** si aparece cualquiera de estas:

- La fuente nueva **contradice** algo ya documentado.
- La propagación toca **más de 6 páginas**.
- Cambia un **dato canónico** de `cliente.yaml`: un portal ID, un dominio, un responsable, el estado
  del engagement.
- Hay **divergencia real** local↔Drive (caso 4 de arriba).
- La minuta trae **datos personales o de terceros** ajenos al proyecto. No se reproducen en páginas
  de síntesis.

Si no ocurre ninguna, sigue hasta el cierre sin preguntar.

---

## 6. Guardián de salida — antes de declarar terminado

```
scripts/verificar-sincronia-drive.ps1
```

- `.tmp.driveupload` tiene que quedar **vacío**. Si hay archivos en vuelo, la subida no terminó:
  **no cierres la laptop y no declares terminado.**
- Sin copias de conflicto nuevas. Si aparecieron durante la sesión, alguien más estaba escribiendo
  a la vez: fusiona antes de irte.
- Corre `scripts/verificar-enlaces.ps1`: la ingesta crea enlaces, y un wikilink roto hacia una
  página que no llegaste a crear se ve en rojo pero no falla solo.

Reporta explícitamente **qué quedó sin subir**, si algo quedó.

---

## Cierre obligatorio

- [ ] Guardián de entrada corrido y **sin condiciones de PARA**.
- [ ] Cada fuente nueva registrada donde esta wiki lleva ese control, con su fecha y su origen.
- [ ] Conocimiento **propagado** a las páginas afectadas, no encerrado en la página de fuente.
- [ ] Cotejo local↔Drive hecho sobre las páginas tocadas, y las divergencias fusionadas o anotadas.
- [ ] `actualizado:` al día en **todas** las páginas tocadas.
- [ ] `cliente.yaml` actualizada si cambió un dato canónico. **Ahí primero**, después las páginas.
- [ ] Compromisos con responsable y fecha en la página de próximos pasos.
- [ ] `PENDIENTES.md` limpio de lo que esta tanda resolvió, y con lo que dejó abierto.
- [ ] Índice actualizado si hay páginas nuevas.
- [ ] Entrada nueva **al inicio** del log: fecha, qué se ingirió, de dónde, páginas tocadas y qué
      quedó pendiente de subir.
- [ ] Guardián de salida corrido y `.tmp.driveupload` vacío.
