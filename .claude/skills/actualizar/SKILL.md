---
name: actualizar
description: Integra información nueva en la wiki de Monific y propaga el cambio a todas las páginas afectadas, cliente.yaml, PENDIENTES.md, index.md y log.md. Sin argumentos entra en modo barrido y busca fuentes nuevas desde la última entrada del log. Úsala al recibir una minuta, un correo, un documento o un dato corregido.
---

# /actualizar — integrar información nueva en la wiki de Monific

Recibe por `$ARGUMENTS` un texto pegado o la ruta de un archivo. **Sin argumentos entra en modo barrido.**

## Modo barrido (sin argumentos)

1. Lee la fecha de la entrada más reciente de `log.md`.
2. Recorre las carpetas fuente listadas en `cliente.yaml` (`fuentes.carpetas`) buscando archivos
   creados o modificados **después** de esa fecha.
3. Los `.gdoc` / `.gsheet` son accesos directos: el archivo local solo tiene la URL y el ID, no el
   texto. Léelos por el **MCP de Google Drive** extrayendo el ID; si no está disponible, usa
   `scripts/leer-gdoc`. Si ninguna vía funciona, anótalos en `PENDIENTES.md` pidiendo exportación.
4. **No transcribas audio ni video.** Trabaja sobre las transcripciones en texto y en la wiki
   referencia la grabación por nombre y ubicación.
5. Presenta la lista de fuentes nuevas y **qué páginas propones tocar. Espera confirmación**
   si son más de 6 páginas o si algo contradice lo ya documentado.

## Modo directo (con argumentos)

1. **Lee la fuente completa** antes de escribir nada.
2. Resume en 3–6 puntos lo que aporta y di qué páginas vas a tocar.
3. Crea la página de fuente en la carpeta de fuentes de esta wiki, con la plantilla de fuente:
   fecha, participantes, canal, puntos clave, decisiones y compromisos con responsable y fecha.
4. **Propaga.** Una fuente típica toca de 5 a 15 páginas. No dejes el conocimiento encerrado en la
   página de fuente — ese es el error clásico: la página de fuente es el recibo, la wiki es el
   conocimiento.

## Contradicciones

Si la información nueva choca con lo documentado: **prevalece la más reciente, y no borras la
anterior.** Actualiza la afirmación, deja una nota `> ⚠️` con qué se creía antes, qué se corrigió y
con qué fuente, y registra la discrepancia donde esta wiki lleve ese control.

## Cierre obligatorio

- [ ] `actualizado:` al día en **todas** las páginas tocadas.
- [ ] `cliente.yaml` sincronizado si cambió un dato canónico. **Se actualiza ahí primero**: si un
      dato aparece en una página y en `cliente.yaml`, tienen que coincidir.
- [ ] Enlaces cruzados nuevos añadidos donde el tema ahora se cruza con otra página.
- [ ] `PENDIENTES.md` limpio de lo que esta fuente resolvió.
- [ ] Compromisos con responsable y fecha llevados a la página de próximos pasos de esta wiki.
- [ ] `index.md` actualizado si hay páginas nuevas.
- [ ] Entrada nueva **al inicio** de `log.md`.
