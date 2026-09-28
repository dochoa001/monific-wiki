---
name: nueva-pagina
description: Crea una página nueva en la wiki de Monific desde la plantilla correcta, con frontmatter completo, sección Relacionado, enlace en su hub y registro en index.md y log.md. Úsala cuando haya que documentar un tema que todavía no tiene página.
---

# /nueva-pagina — crear una página en la wiki de Monific

## Antes de escribir

1. Lee `cliente.yaml` para los datos canónicos (portal ID, dominios, rutas de fuentes).
2. Lee `AGENTS.md`: taxonomía de tags, vocabulario de `estado` y convenciones de esta wiki.
3. Comprueba que el tema **no tiene ya una página**. Busca por nombre y por alias antes de crear.
   Si existe algo parecido, **amplíala en vez de duplicar**.

## Qué preguntar

- **Tema** de la página y, en una frase, qué debe responder.
- **Sección** de la wiki donde vive (según el árbol real de esta wiki, no uno genérico).
- **Fuentes** que la respaldan. Si no hay ninguna, dilo: la página nace con `estado: borrador`.

## Cómo crearla

1. Copia la plantilla que corresponda de `99 Plantillas/`.
2. Nombre de archivo en `kebab-case`, ASCII, sin acentos ni espacios. **Verifica que el nombre
   sea único en toda la bóveda** `Black and Orange/` — es requisito de ADR-004 para que el
   wikilink corto resuelva. Si colisiona, añade un sufijo que lo desambigüe.
3. Rellena el frontmatter completo. `actualizado:` con la fecha de hoy en ISO. `tags:` solo de
   la taxonomía cerrada de `AGENTS.md` — **no inventes tags nuevos** sin actualizarla primero.
4. Escribe el cuerpo. Un tema por archivo; mejor corto y enlazado que kilométrico.
5. **Enlaza contextualmente**: la primera vez que menciones algo que tiene página propia,
   enlázalo con `[[wikilink]]` ahí mismo, en el texto.
6. Cierra con `## Relacionado`: de 2 a 5 wikilinks, cada uno con una línea que explique la relación.

## Antes de dar por terminada la tarea

- [ ] Enlazada desde el hub de su carpeta (si no, es una nota huérfana).
- [ ] Registrada en `index.md` con su ruta y una descripción de una línea.
- [ ] Entrada nueva **al inicio** de `log.md`: fecha, agente, qué se creó, por qué, páginas tocadas.
- [ ] Si la página aportó un dato canónico nuevo (un ID, un dominio), reflejado en `cliente.yaml`.
- [ ] Si resolvió algo de `PENDIENTES.md`, esa línea se elimina de ahí.

## Prohibido

- Inventar datos. Lo que no esté en una fuente va como `> ⚠️ PENDIENTE: ...` en el lugar exacto
  y se registra en `PENDIENTES.md`.
- Guardar credenciales, tokens o contraseñas. Solo se documenta **dónde viven** y quién accede.
- Dejar la página sin enlaces entrantes.
