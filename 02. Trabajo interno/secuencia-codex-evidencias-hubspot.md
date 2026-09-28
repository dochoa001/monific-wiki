# Secuencia de peticiones para evidencias de workflows en HubSpot

Este documento permite replicar el proceso en otro entorno de Codex. Las peticiones están ordenadas para enviarse una por una. Antes de comenzar, confirma que el nuevo entorno tenga acceso autorizado a HubSpot y Google Drive.

## Reglas generales del proceso

- Primero se trabaja en modo de solo lectura para identificar documentos, carpetas y workflows.
- No se modifica la configuración de ningún workflow.
- Nunca se inscribe toda la base de datos.
- Solamente se utiliza el registro de prueba indicado expresamente.
- Antes de inscribir un registro o subir archivos, Codex debe mostrar el resumen de alto riesgo y solicitar una confirmación nueva.
- La frase de autorización solamente se envía después de recibir dicho resumen.
- Primero se recopilan todas las imágenes y después se suben en un solo lote.
- Si una prueba inmediata muestra error, se consulta el historial y se usa el primer registro que muestre el recorrido completo del workflow.

## 1. Lectura inicial

Enviar:

> Quiero pedirte ayuda con una tarea repetitiva. Primero lee este documento y revisa la carpeta de evidencias:
>
> Documento maestro: https://docs.google.com/document/d/16bvgWw3cjlgMfeItb32ydQWIzKEaPJQE3DJPHyd6d30/edit?tab=t.0
>
> Carpeta general: https://drive.google.com/drive/folders/1rQZgDub_UOZP1pf1gJsw9WPXV8GA9dQ6
>
> Conéctate a HubSpot mediante la conexión de servicio disponible y analiza qué workflows están creados. No modifiques nada; esta etapa es únicamente lectura y análisis masivo. Al terminar, detente y espera mis instrucciones.

## 2. Explicar el formato de evidencia

Enviar:

> Dentro de la carpeta de evidencias hay carpetas ordenadas por ejercicio. Para cada workflow necesito tres capturas:
>
> 1. **Criterios:** entra al workflow citado, abre los criterios sin modificarlos, baja hasta donde aparecen los primeros criterios y toma la captura.
> 2. **Registro de evidencia:** abre únicamente el registro de prueba que te proporcionaré y toma una captura después de que haya cargado completamente.
> 3. **Prueba repetible:** inscribe manualmente únicamente el registro de prueba en el workflow y toma una captura del recorrido general de la prueba, sin entrar al detalle de una acción específica.
>
> Ejemplo de nomenclatura:
>
> - `WF-036 · Cambio de etapa a activo - Criterios.png`
> - `WF-036 · Cambio de etapa a activo - Negocio de evidencia.png`
> - `WF-036 · Cambio de etapa a activo - Prueba repetible.png`
>
> No cambies el workflow ni inscribas ningún otro registro.

## 3. Probar con un solo workflow

Enviar, sustituyendo los valores entre corchetes:

> Realiza el `[WF-XXX · NOMBRE DEL WORKFLOW]` usando únicamente este registro de prueba:
>
> `[ENLACE DEL REGISTRO DE PRUEBA]`
>
> La carpeta de destino es:
>
> `[ENLACE DE LA CARPETA DE DRIVE]`
>
> Antes de realizar la inscripción o la subida, muéstrame el resumen de alto riesgo y solicita la confirmación obligatoria. No ejecutes esas acciones hasta recibirla.

Después de recibir el resumen de alto riesgo, enviar exactamente:

> He revisado las autorizaciones internas necesarias con el líder o responsable correspondiente y confirmo que puedes proceder con esta acción de alto riesgo.

## 4. Correcciones para las capturas

Si la captura de criterios no muestra correctamente la configuración, enviar:

> Repite la captura de criterios. Baja hasta donde estén visibles los primeros criterios del workflow. No modifiques nada.

Si la captura del registro está vacía o incompleta, enviar:

> Repite únicamente la captura del registro de evidencia. Espera a que todos los datos hayan cargado y verifica que la imagen no esté vacía antes de guardarla.

Si la prueba inmediata muestra error, enviar:

> No uses la pantalla del error como prueba repetible. Ve al historial del workflow, localiza el primer registro de esta ejecución y toma como evidencia la vista que muestre el recorrido completo y qué sucedió en el workflow, sin abrir el detalle de una acción específica.

## 5. Trabajo por lote

Enviar:

> Procesa los workflows `[RANGO O LISTA]`. Trabaja únicamente con los workflows activos y usa exclusivamente este registro de prueba:
>
> `[ENLACE DEL REGISTRO DE PRUEBA]`
>
> Primero recopila y verifica todas las capturas. No subas archivos todavía. Cuando todas las evidencias estén listas, indícame el número de imágenes y espera mi autorización para hacer una sola subida masiva.

Cuando Codex haya recopilado las imágenes y muestre el resumen de alto riesgo de la subida, enviar exactamente:

> He revisado las autorizaciones internas necesarias con el líder o responsable correspondiente y confirmo que puedes proceder con esta acción de alto riesgo.

## 6. Caso de atención a clientes

Registro de prueba utilizado:

https://app.hubspot.com/contacts/48427391/record/0-5/47601315129/

Rango trabajado:

- WF-041 al WF-049.
- Solamente workflows activos.
- Solamente el ticket indicado.

Petición reutilizable:

> Procesa del WF-041 al WF-049. Todos deben revisarse, pero ejecuta la prueba solamente en los workflows activos. Usa exclusivamente este ticket de prueba:
>
> https://app.hubspot.com/contacts/48427391/record/0-5/47601315129/
>
> Primero recopila todas las imágenes y después prepara una sola subida masiva. No modifiques workflows ni inscribas otros tickets.

## 7. Caso de cobranza

Registro de prueba utilizado:

https://app.hubspot.com/contacts/48427391/record/0-5/47601316504/

Carpeta de destino:

https://drive.google.com/drive/folders/1sonp_aVz_Z_MxwgaDECEf-QRNTX0K0dr

Rango trabajado:

- WF-050 al WF-064.
- Solamente workflows activos.
- Solamente el ticket indicado.

En este bloque la segunda captura debe llamarse **Cobranza de evidencia**, no **Negocio de evidencia**.

Ejemplo:

- `WF-050 · NOMBRE - Criterios.png`
- `WF-050 · NOMBRE - Cobranza de evidencia.png`
- `WF-050 · NOMBRE - Prueba repetible.png`

Petición reutilizable:

> Procesa del WF-050 al WF-064, únicamente los workflows activos. Usa exclusivamente este ticket de prueba:
>
> https://app.hubspot.com/contacts/48427391/record/0-5/47601316504/
>
> Guarda las evidencias en:
>
> https://drive.google.com/drive/folders/1sonp_aVz_Z_MxwgaDECEf-QRNTX0K0dr
>
> En la segunda captura usa la nomenclatura `Cobranza de evidencia`. Espera a que el ticket cargue completamente. Si una ejecución muestra error, consulta el historial y usa la primera entrada que muestre el recorrido completo del workflow. Primero reúne y verifica todas las imágenes; después prepara una única subida masiva.

## 8. Comprobación de comentarios y nombre de un PDF

Enviar:

> Revisa el PDF modificado más recientemente en Drive, únicamente en modo de lectura. Confirma por separado:
>
> 1. El comentario guardado dentro del PDF desde un editor local.
> 2. El comentario creado directamente desde Google Drive.
> 3. El nuevo nombre visible del archivo.
> 4. Si el título interno del PDF también cambió o conserva otro valor.
>
> No modifiques el archivo ni sus comentarios.

## Lista de control antes de aprobar una subida

- El nombre de cada workflow coincide con el documento maestro.
- Cada workflow tiene exactamente tres capturas.
- La captura de criterios muestra los primeros criterios.
- La captura del registro terminó de cargar y no está en blanco.
- La prueba repetible muestra el recorrido general del workflow.
- Si hubo error, la evidencia procede del historial y muestra qué ocurrió.
- Solo se utilizó el registro de prueba autorizado.
- No se modificó la estructura de ningún workflow.
- Los archivos se subirán a la carpeta correcta.
- El resumen de alto riesgo coincide con el lote real que se va a subir.

## Nota sobre autorizaciones

Una autorización anterior no debe reutilizarse para otro registro, rango, carpeta o lote. Cada cambio significativo de alcance requiere que Codex muestre un nuevo resumen y que el usuario vuelva a escribir la frase obligatoria después de ese resumen.
