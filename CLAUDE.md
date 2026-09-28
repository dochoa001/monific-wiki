@AGENTS.md

# Específico de Claude Code — Wiki de Monific

Todo el contrato de trabajo está en `AGENTS.md`, importado arriba. Aquí solo lo que Claude Code añade
y no vive en ningún otro lado.

## Skills disponibles

| Skill | Cuándo usarla |
|---|---|
| `/nueva-pagina` | Hay que documentar un tema que todavía no tiene página. Crea el archivo desde la plantilla correcta, llena el frontmatter, lo enlaza en su hub, actualiza `index.md` y registra en `log.md`. |
| `/actualizar` | Llega información nueva: una minuta, un correo, un documento, un dato corregido. Con `$ARGUMENTS` procesa lo que le pases; **sin argumentos entra en modo barrido** y busca fuentes nuevas desde la última entrada del log. |
| `/documentar` | Se acaba de construir algo para Monific: workflow, propiedad, integración, función, campaña, blog. **Obligatoria antes de dar la tarea por terminada** — es el ciclo cerrado de `AGENTS.md`. |
| `/auditoria` | Rutina mensual o revisión previa a una entrega. Enlaces rotos, notas huérfanas, páginas fuera de `index.md`, tags fuera de taxonomía, datos que contradicen `cliente.yaml`, copias de conflicto de Drive y páginas rancias. |
| `/sincronizar` | Hay sesiones nuevas en la carpeta de Meetings de Drive, o volviste después de días y no sabes qué entró. Lee las minutas por el **MCP de Google Drive**, las destila y las propaga, y verifica el espejo local↔Drive antes y después. **No escribe en Drive por API:** el espejo lo mantiene Drive para escritorio. |

## Verificación rápida

Sin abrir una sesión completa:

```bash
pwsh -File "scripts/verificar-enlaces.ps1"
```

Valida wikilinks contra toda la bóveda `Black and Orange/`, y reporta notas huérfanas, páginas sin
`## Relacionado`, copias de conflicto de Drive y cualquier `.git` que no debería existir.
`/auditoria` lo invoca como primer paso.

## Carpetas fuera de la wiki

Las carpetas fuente del cliente están declaradas en `.claude/settings.json`
(`permissions.additionalDirectories`) y en `cliente.yaml` (`fuentes.carpetas`), así que toda sesión
tiene acceso sin configurar nada. Las rutas canónicas viven en `cliente.yaml`.

## Antes de cerrar la sesión

Deja que Drive termine de sincronizar antes de cerrar la laptop. Detalle del flujo en equipo en
`MANTENIMIENTO.md`.
