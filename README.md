# Monific — carpeta de cuenta de Black & Orange

Espejo **privado y de uso interno** de la carpeta `50. Monific/` de la bóveda de Black & Orange (B&O).
Contiene todo lo que la agencia tiene sobre el proyecto **BOOST** (implementación de HubSpot para Monific),
incluido lo que salió mal y cómo se corrigió. **No es material para el cliente.**

## Por dónde empezar

1. `AGENTS.md` — enruta a la wiki y explica las carpetas.
2. `Monific/AGENTS.md` — el contrato de trabajo: reglas no negociables, marcadores de confianza y vocabulario.
3. `Monific/cliente.yaml` — datos canónicos: portal `48427391`, objetos, cifras de avance.
4. `Monific/index.md` — mapa de todas las páginas, una línea por página.
5. `Monific/00 Inicio/Resumen Ejecutivo.md` — el contexto en 5 minutos.
6. `Monific/log.md` — qué cambió y por qué, lo más reciente arriba.

Antes de configurar nada en el portal, lee `Monific/07 Estado/Contradicciones y Verificaciones.md` y
`Monific/07 Estado/Pendientes Criticos.md`. Regla que gobierna la cuenta: **configurado ≠ verificado**.

## Qué hay en cada carpeta

| Carpeta | Qué es |
|---|---|
| `Monific/` | **La wiki**, el cerebro de la cuenta: 82 archivos Markdown con fuentes citadas, más 108 extractos de texto de los documentos originales en `08 Fuentes/_extractos/`. |
| `01. Adicionales/` | Fuentes originales tal como llegaron: masters de implementación, matrices de comunicación, auditorías. No se editan. |
| `02. Trabajo interno/` | Material de trabajo que no se entrega: scripts, secuencias de trabajo con agentes, conflictos de Drive resueltos. |
| `03. Entregables/` | Lo que el cliente podría recibir. `_historico/` guarda entregables viejos de Claude y Codex: manuales, mapas, deck de capacitación. |
| `outputs/` | Salidas de trabajo con agentes: unificación de masters, relación de propiedades, evidencias de workflows en PNG. |
| `scripts/`, `tools/` | Utilidades puntuales: generadores de deck y de la relación de propiedades. |

## Cómo se mantiene

- **La fuente de verdad es la carpeta local en el Google Drive de B&O.** Este repositorio es un espejo de un
  solo sentido que se publica con `02. Trabajo interno/03. Scripts/publicar-github.ps1`. Si editas aquí,
  avisa: esos cambios hay que llevarlos a la carpeta a mano.
- **Sin `.git` dentro de la carpeta**, por regla de la wiki (`Monific/AGENTS.md` §3, regla 11): el historial
  vive fuera de Drive. Detalle en `Monific/MANTENIMIENTO.md` §6.
- **Cero credenciales.** Las claves del portal viven cifradas fuera del repositorio y se usan por un proxy
  local; ver `02. Trabajo interno/_claves-retiradas/LEEME-claves.md`. Nada de tokens en páginas ni commits.
- **Wikilinks.** Las páginas enlazan con `[[Página]]` y GitHub no los resuelve. Para navegar con enlaces y
  grafo, clona el repositorio y abre su raíz en Obsidian como bóveda: los enlaces cortos resuelven; los que
  apuntan a otras wikis de B&O quedan rotos porque no viajan aquí.
- **Las reglas de agencia** (`AGENTS.md` de la raíz de la bóveda y `Wiki general/`) no viajan en este
  repositorio; las que aplican a esta cuenta están en `Monific/AGENTS.md` §3.

Responsable: David Ochoa (dochoa@black-n-orange.com). Espejo creado el 2026-09-28.
