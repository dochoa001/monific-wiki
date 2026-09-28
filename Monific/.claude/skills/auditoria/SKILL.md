---
name: auditoria
description: Audita la salud de la wiki de Monific — enlaces rotos, notas huérfanas, páginas fuera de index.md, tags fuera de taxonomía, datos que contradicen cliente.yaml, copias de conflicto de Drive y páginas rancias. Devuelve un reporte con acciones concretas. Úsala en la rutina mensual o antes de entregar algo.
---

# /auditoria — revisar la salud de la wiki de Monific

Solo **reporta**; no arregla nada sin que se lo pidan. Entrega una lista priorizada de acciones concretas.

## 1. Enlaces

Corre primero `scripts/verificar-enlaces.ps1` y parte de su salida.

- **Enlaces rotos**: wikilink cuyo destino no existe. Distingue los que son un error real de los
  que son señal de trabajo pendiente a propósito.
- **Notas huérfanas**: páginas sin ningún enlace entrante. Son un bug: toda página necesita al
  menos un enlace entrante y uno saliente.
- Páginas **sin sección `## Relacionado`**.

## 2. Índice y estructura

- Páginas que **existen y no están en `index.md`**, y entradas de `index.md` que ya no existen.
- Páginas que no están enlazadas desde el hub de su carpeta.

## 3. Consistencia de datos

- **Datos que contradicen `cliente.yaml`.** `cliente.yaml` es la fuente de verdad: si una página
  dice otro portal ID u otro dominio, la página está mal.
- Contradicciones entre páginas que no estén ya registradas donde esta wiki lleva ese control.
- Afirmaciones no obvias sin fuente en páginas marcadas como vigentes o validadas.

## 4. Frontmatter

- Campos del contrato común faltantes: `titulo`, `tags`, `actualizado`, `estado`, `responsable`, `fuentes`.
- `tags` **fuera de la taxonomía cerrada** de `AGENTS.md`.
- Valores de `estado` fuera del vocabulario declarado en `AGENTS.md`.

## 5. Higiene de Drive

- **Copias de conflicto**: archivos con `(1)`, `[Conflicto]`, `Conflicted copy` o similar en el
  nombre. Drive sincroniza pero **no fusiona**. Hay que fusionar el contenido y borrar la copia.
- Carpetas de descarga temporal olvidadas (`drive-download-*`).
- Cualquier `.git` dentro del árbol de Drive: **no debe existir**, la sincronización de `.git`
  genera conflictos. El historial lo cubren el versionado de Drive y `log.md`.

## 6. Frescura

- Páginas con **más de 90 días** sin actualizar, ordenadas por antigüedad.
- Páginas en borrador estancadas.
- Compromisos vencidos en la página de próximos pasos.

## Formato del reporte

Una tabla por bloque, con: qué se encontró · dónde (ruta) · acción sugerida · prioridad.
Cierra con los tres arreglos de mayor impacto. Registra el pase en `log.md`.
