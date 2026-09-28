# Mantenimiento — Wiki de Monific

Cómo se mantiene esta wiki: rutinas, configuración de Obsidian y el flujo de trabajo en equipo
sobre Google Drive. El contrato de contenido está en `AGENTS.md`; esto es la operación.

---

## 1. Trabajo en equipo sobre Drive

Esta carpeta vive en el Google Drive del cliente. Drive **sincroniza pero NO fusiona**: dos
personas editando el mismo archivo a la vez producen una copia de conflicto, no una mezcla.

**Cada miembro del equipo necesita:**

1. Acceso a la carpeta compartida del cliente en Drive.
2. **Google Drive para escritorio** instalado.
3. La carpeta marcada **"Disponible sin conexión"** — o modo espejo. Sin esto, los archivos son
   marcadores de posición y un agente lee vacío en lugar de contenido.

**Antes de iniciar una sesión de IA:** verifica que Drive terminó de sincronizar (el icono de la
bandeja sin flechas girando). Si empiezas a mitad de sincronización, trabajas sobre una versión vieja.

**Al terminar:** deja que Drive termine de subir **antes** de cerrar la laptop.

**Regla dura:** evita dos sesiones simultáneas sobre la misma wiki. Si el equipo tiene que trabajar
en paralelo, que sea en carpetas distintas.

**Copias de conflicto.** Aparecen como `archivo (1).md`, `[Conflicto]` o `Conflicted copy`. Hay que
**fusionar el contenido a mano y borrar la copia** — no dejarlas ahí, porque un agente puede leer la
equivocada. `/auditoria` y `scripts/verificar-enlaces.ps1` las detectan.

**Nada de git aquí.** Sincronizar `.git` a través de Drive genera conflictos constantes. El historial
lo cubren el **versionado nativo de Drive** (clic derecho → *Historial de versiones*) y `log.md`.

---

## 2. Configuración de Obsidian

La bóveda es la raíz **`Black and Orange/`**, no esta carpeta. Así el grafo muestra los cruces entre
la wiki de agencia y las de cuenta. Decidido en `adr-004-boveda-raiz` de la Wiki general.

| Ajuste | Valor | Por qué |
|---|---|---|
| *Files & Links* → **Use Wikilinks** | **Activado** | Por ADR-004. ⚠️ Esto **se desvía** del prompt de wiki de cliente, que pide desactivarlo y usar enlaces markdown. Gana el ADR |
| *Files & Links* → **New link format** | `Shortest path when possible` | Los nombres de archivo son únicos en la bóveda, así el enlace corto resuelve |
| *Files & Links* → **Attachment folder path** | `_adjuntos` | Para que las imágenes pegadas no se dispersen por el árbol |
| *Core plugins* → **Templates** | Carpeta = `99 Plantillas` | Para crear páginas desde plantilla sin copiar a mano |
| *Core plugins* → **Graph view** | Activado | Los nodos sin aristas son notas huérfanas, y son trabajo pendiente |
| *Community* → **Dataview** | Opcional | Lo piden las vistas de tablero de algunas wikis |

**Grupos de color del grafo.** En *Graph view* → *Groups*, uno por carpeta, para que la forma del
grafo se lea de un vistazo. Usa consultas `path:`:

- `path:"drive-download-*/ y 08 Fuentes/_extractos/"` → gris. Fuentes crudas; en general conviene **excluirlas** del grafo.
- Una consulta `path:` por carpeta temática, con un color por dominio (organización, negocio,
  marketing, procesos, sistemas, proyecto, fuentes).

**`.obsidian/` se sincroniza vía Drive**, lo que es útil para compartir configuración con el equipo.
El efecto secundario: si varias personas tienen el vault abierto a la vez, Drive puede crear copias
de conflicto de `workspace.json`. **Son solo estado visual y se pueden borrar sin riesgo.**

El `app.json` de la raíz excluye del índice las carpetas de fuentes crudas (`raw/`, `90-raw/`,
`drive-download-*`, entregables con código, `node_modules`, carpetas de claves) para que el grafo
muestre conocimiento y no ruido.

---

## 3. Cuándo usar cada skill

| Skill | Disparador | Qué deja hecho |
|---|---|---|
| `/nueva-pagina` | Un tema sin página propia, o un concepto que ya apareció 3 veces | Página creada, enlazada en su hub, en `index.md` y en `log.md` |
| `/actualizar` | Llega una minuta, un correo, un documento o una corrección | Conocimiento propagado a todas las páginas afectadas, `cliente.yaml` sincronizado, `PENDIENTES.md` limpio |
| `/actualizar` sin argumentos | Volviste después de días y no sabes qué entró | Barrido de las carpetas fuente desde la última entrada del log, con propuesta antes de aplicar |
| `/documentar` | Se acaba de construir algo para el cliente | Pieza documentada con sus IDs exactos. **Obligatoria antes de cerrar la tarea** |
| `/auditoria` | Rutina mensual, o antes de entregar algo al cliente | Reporte de enlaces rotos, huérfanas, contradicciones con `cliente.yaml` y copias de conflicto |
| `/sincronizar` | Sesiones nuevas en Drive, o el espejo local↔Drive quedó dudoso | Minutas nuevas ingeridas y propagadas, divergencias con Drive fusionadas o anotadas, y `.tmp.driveupload` vacío al cerrar |

Verificación rápida sin sesión completa:

```bash
pwsh -File "scripts/verificar-enlaces.ps1"
```

---

## 4. Rutina mensual sugerida

Una vez al mes, en este orden. Toma entre 30 y 60 minutos.

1. **Sincroniza Drive** y confirma que terminó.
2. **`/actualizar`** sin argumentos → barrido de fuentes nuevas. Revisa la propuesta antes de aplicar.
3. **`/auditoria`** → el reporte completo.
4. **Arregla en este orden de impacto:**
   - Copias de conflicto de Drive y cualquier `.git` que haya aparecido.
   - Datos que contradicen `cliente.yaml` (es la fuente de verdad; la página está mal).
   - Enlaces rotos reales y notas huérfanas.
   - Páginas sin `## Relacionado`.
   - Tags fuera de la taxonomía cerrada de `AGENTS.md`.
5. **Revisa `PENDIENTES.md`**: borra lo resuelto, y de lo que sigue abierto decide qué se pide al
   cliente en la próxima sesión.
6. **Revisa las páginas con más de 90 días** sin actualizar: ¿siguen vigentes, o hay que marcarlas
   `obsoleto`?
7. **Anota el pase en `log.md`.**

## 5. Cada trimestre

- Revisa que la **versión de estructura** de `AGENTS.md` y `cliente.yaml` siga coincidiendo con la
  plantilla base de B&O. Si la plantilla mejoró, propaga la mejora.
- Repasa la **taxonomía de tags**: los que nadie usó en un trimestre, fuera.
- Comprueba que la ubicación de credenciales que declara `cliente.yaml` sigue siendo correcta y que
  **nada de eso se filtró a la wiki en texto plano**.
