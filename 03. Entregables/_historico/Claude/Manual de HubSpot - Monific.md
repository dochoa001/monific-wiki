# Manual de HubSpot · Monific

Para el equipo operativo. Catorce páginas — **cada persona lee cinco**.

> Portal 48427391 · Versión 1 · 2026-08-17
> Las rutas de clic corresponden a la interfaz de agosto de 2026. Si algo no está donde dice, avisa para corregirlo.

---

## 1 · Cómo usar este manual

**Lee esto:** las páginas 1 a 4, la de tu proceso, y la 13 cuando algo se vea raro. El resto es consulta.

Lo genérico de HubSpot no está aquí: está enlazado en la página 14. No lo duplicamos porque HubSpot mantiene su documentación actualizada y nosotros no podríamos seguirle el paso.

### A quién pedirle ayuda

| Si te pasa esto | Pídelo a |
|---|---|
| No puedo entrar, o no veo algo que debería ver | Administrador del portal *(por definir)* |
| La app de Monific o la cuenta de un inversionista falla | TI, por Notion |
| Un monto o una fecha no coincide con Admin Monific | TI |
| Un campo no existe, o algo que debía pasar solo no pasó | Administrador del portal *(por definir)* |
| No sé qué hacer con un caso | Tu líder de área |

> Los nombres se completan con el Directorio de Responsables antes de publicar.

---

## 2 · Entrar a HubSpot

**¿Cómo entro la primera vez?**
Te llega una invitación por correo. Ábrela, crea tu contraseña y entra en `app.hubspot.com`. La invitación caduca: si ya venció, pide una nueva.

**¿Cómo sé que estoy en el portal correcto?**
El número de cuenta es **48427391** y aparece en la esquina superior derecha, junto a tu nombre. Si ves otro número, estás en otro portal.

**Olvidé mi contraseña.**
En la pantalla de acceso, *¿Olvidaste tu contraseña?*. Llega un enlace por correo. Si no llega, revisa spam antes de escribirle a nadie.

**¿Por qué me pide un código?**
Es la verificación en dos pasos. Es obligatoria y protege datos de clientes. El código llega a tu teléfono o a tu app de autenticación.

**¿Qué veo al entrar?**
La pantalla de inicio: tus tareas del día, tus reuniones y la actividad reciente de los registros que te pertenecen. No es un reporte — es tu lista de pendientes.

---

## 3 · Siete palabras que hay que entender

Todo lo demás se apoya en estas.

**Objeto** — Un tipo de cosa. En Monific usamos cuatro: contacto, empresa, negocio y ticket. El objeto es el molde.

**Registro** — Una cosa concreta de ese tipo. "Miguel Ángel" es un registro del objeto contacto.

**Propiedad** — Un dato guardado en un registro: correo, teléfono, monto solicitado. **Las propiedades son exclusivas de cada objeto:** el teléfono de un contacto y el de una empresa son campos distintos, aunque se llamen igual.

**Asociación** — La liga entre dos registros. Un contacto asociado a una empresa, un negocio asociado a un contacto. Sin asociaciones no hay trazabilidad ni reportes.

**Pipeline y etapa** — El pipeline es el recorrido de un proceso; la etapa es dónde va. Monific tiene dos pipelines de negocio (Solicitantes e Inversionistas) y tres de ticket (Cobranza, Servicio y UNE).

**Actividad** — Algo que pasó entre tú y un registro: un correo, una llamada, una nota, una tarea. Abrir un registro y leerlo **no** es actividad.

**Workflow** — Una automatización. Es la razón por la que a veces pasan cosas sin que nadie las haga: se asigna un ticket, se crea una tarea, se envía un correo.

### Las tres que más se confunden

Monific usa tres campos parecidos y no son lo mismo:

- **Etapa del ciclo de vida** — qué tan avanzada está la relación. Es el campo estándar de HubSpot.
- **Estado de lead** — en qué punto del contacto inicial vas: nuevo, intentando contactar, conectado, calificado.
- **Nivel de registro** — qué tan completo está el registro del inversionista en la app de Monific. Este llega de Admin.

Si no sabes cuál filtrar, casi siempre es **nivel de registro**.

---

## 4 · Las cinco reglas de Monific

Si solo te acuerdas de una página, que sea esta.

**1. Nadie crea contactos a mano.**
Los contactos entran solos por la página de Monific, el formulario de solicitantes, el chat o la integración. La única excepción es el equipo de Solicitantes, que sí puede crear un solicitante si no existe.

**2. Busca por correo antes de crear cualquier cosa.**
El correo es lo que HubSpot usa para no duplicar. Si buscas por nombre, vas a crear un duplicado.

**3. Admin Monific calcula. HubSpot registra.**
HubSpot nunca calcula montos, saldos, días de mora ni fechas. Los guarda y los muestra. Si un número no cuadra, la respuesta está en Admin, no en el CRM.

**4. El tipo de ticket se captura durante la interacción, no al cerrar.**
De ese campo dependen la ruta del ticket y los avisos que se disparan. Elegirlo tarde o mal desvía el caso.

**5. Si no lo registras, no existe.**
Un WhatsApp desde tu teléfono, una llamada fuera del CRM o un mensaje de LinkedIn no aparecen solos. Sin registrarlos, tu trabajo no se ve en ningún reporte.

---

## 5 · El día a día · buscar, crear, anotar

**¿Cómo busco si un contacto ya existe?**
Usa la búsqueda de arriba y escribe el **correo**, no el nombre. Si no aparece, prueba con el dominio de la empresa.

**¿Puedo crear un contacto?**
Solo si eres del equipo de Solicitantes y el solicitante no existe. En cualquier otro caso, no: revisa por qué no entró solo y avisa. Ver regla 1.

**¿Cómo dejo una nota?**
Abre el registro y en la barra de actividades elige **Nota**. Escribe qué pasó y guarda. Queda con fecha y con tu nombre en el historial.

**¿Nota en el contacto o en la empresa?**
En el **contacto** si hablaste con esa persona y es tu único interlocutor. En la **empresa** si tratas con varias personas de la misma organización — así el resto del equipo ve el panorama completo.

**¿Cómo creo una tarea de seguimiento?**
En el mismo registro, **Tarea**. Le pones tipo (llamada, correo), fecha y una nota de qué hay que hacer. Aparece en tu pantalla de inicio el día que vence.

**¿Cómo registro un WhatsApp o un LinkedIn?**
En la barra de actividades hay opción de registrar una llamada o un mensaje. Escribe qué mandaste. Eso lo convierte en actividad y actualiza la última interacción del registro.

**¿Dónde están las propiedades que no veo en la ficha?**
La ficha muestra solo algunas. Las demás están en **Acciones → Ver todas las propiedades**, o en la pestaña de propiedades del registro.

---

## 6 · El día a día · encontrar tu trabajo

**¿Cómo veo solo lo mío?**
En la página de contactos, empresas, negocios o tickets hay pestañas arriba. **Mis contactos** ya filtra por propietario.

**¿Qué es una vista guardada y cómo la hago?**
Es un filtro con nombre, para no rearmarlo cada día. Pones los filtros que quieres, luego **+ Agregar vista**, le das nombre y se guarda. Después la abres de un clic.

**¿La vista que armé la ven los demás?**
Depende de cómo la guardes: privada solo tú, o compartida con tu equipo. Por defecto es privada.

**¿Qué diferencia hay entre Y y O?**
**Y** suma condiciones: se tienen que cumplir todas. **O** amplía: basta con que se cumpla una. Si tu vista sale vacía, casi siempre es porque usaste Y donde querías O.

---

## 7 · Correo y calendario

**¿Cómo conecto mi correo?**
En **Configuración → Correo → Conectar bandeja de entrada**. Requiere que Google Workspace tenga autorizada la aplicación; si te lo rechaza, no es tu culpa: pídelo al administrador del portal.

**¿Tengo que enviar los correos desde HubSpot?**
No. Con la bandeja conectada, lo que envías desde Gmail aparece igual en el historial del contacto. Conviene usar HubSpot cuando quieras plantillas o secuencias.

**¿Plantilla o fragmento?**
**Plantilla** es un correo completo, con asunto y cuerpo. **Fragmento** es un párrafo corto que insertas dentro de cualquier respuesta. Los dos viven en **Biblioteca**.

**¿Por qué no veo si abrieron mi correo?**
Necesitas la extensión de HubSpot en el navegador. Sin ella se envía el correo, pero no se registran aperturas ni clics.

---

## 8 · Tu proceso · Ventas Solicitantes

Un negocio en este pipeline es una solicitud de financiamiento.

**Perfil → Evaluación → Formalización → Proceso de firma → Cierre ganado o perdido**

**¿Qué me va a pedir para avanzar de etapa?**
Cada etapa exige sus propias propiedades. Está en la ayuda de trabajo de una página; tenla a la vista al capturar.

**¿Puedo regresar un negocio de etapa?**
Sí. Lo que no puedes es avanzar sin las propiedades obligatorias de la etapa a la que vas.

**¿Lo creé en el pipeline equivocado?**
No lo borres. Se cambia el pipeline desde el propio registro; el historial y las asociaciones se conservan, y el sistema te pedirá los campos de la nueva etapa.

**¿Dónde adjunto el expediente?**
Los documentos van en el **negocio**, no en el contacto. Así el expediente viaja con la operación.

**¿Qué pasa al marcar cierre perdido?**
Hay que registrar el motivo. Es lo que después permite saber por qué se caen las operaciones.

---

## 9 · Tu proceso · Ventas Inversionistas

**Lead creado → Registro completo → Identidad validada → Billetera con fondos → Inversionista activo**

Además hay dos etapas de excepción: **congelado**, con su ruta de reactivación, y **cierre**.

**¿Qué llega solo y qué capturo yo?**
De Admin Monific llegan nivel de registro, fecha de registro, clave STP, movimientos de billetera y montos. Tú capturas las notas de cada conversación, el motivo de interés, el medio de contacto y tus tareas.

**¿Por qué un monto no coincide con Admin?**
Porque HubSpot no lo calcula: lo recibe. Si no cuadra, se revisa en Admin. Ver regla 3.

**¿Qué pasa cuando un inversionista reinvierte?**
No empieza de cero. Se registra que volvió a invertir y entra en las campañas de reinversión.

**¿Cómo trabajo el pipeline de leads?**
Sirve para saber en quién enfocar el esfuerzo cuando hay miles de contactos. Los leads son los contactos que ya mostraron interés real, no toda la base.

---

## 10 · Tu proceso · Cobranza

> ⚠️ **Pendiente de verificar contra el portal.** El objeto de Cobranza y las cuotas de pago todavía no están creados. Lo de abajo es el diseño acordado, no lo que hoy se puede hacer en pantalla.

**Nuevo registro → Cobranza activa → Refinanciamiento → Ejecución de garantía**, y tres salidas: **campaña liquidada**, **cierre por refinanciamiento** o **cierre por incumplimiento**. Una campaña termina en una sola de las tres.

**¿Cómo nace una campaña?**
Sola, cuando Admin Monific confirma la inversión efectiva. Esto reemplaza la carga manual que hoy se hace en Moonflow.

**¿Qué es una cuota de pago?**
Un registro por cada mensualidad. La campaña se liquida automáticamente cuando el 100 % de las cuotas está en *Pagado*.

**¿Rendimiento fijo o variable?**
En **fijo**, el calendario llega completo desde Admin, con vencimiento el día 15. En **variable** no hay calendario: el ciclo depende del reporte mensual de ingresos que entrega el solicitante.

**¿Quién calcula los días de mora?**
Monific, y llegan por API. HubSpot los guarda, avisa y crea tareas — la cuenta no la hace él.

**¿Qué hago en cada tramo?**
Está en la ayuda de trabajo del semáforo de mora. En resumen: días 1 a 15 contactas tú; del 16 al 30 se avisa a Finanzas con copia a Dirección Comercial; del 31 al 60 sube a mora grave; a partir del 61 pasa a ejecución de garantía y se convoca al comité.

---

## 11 · Tu proceso · Atención a cliente

> ⚠️ **Pendiente de verificar contra el portal.** Los cuatro canales todavía no están conectados. Sin conversaciones entrando no hay nada que tipificar.

**Nuevo ticket → En atención → Escalado a TI → Cerrado.** No todos pasan por Escalado a TI: solo los tipo A que no se resuelven en primer nivel.

**¿Cómo entra un ticket?**
Por chat web (el bot pide nombre, correo y tipo), por WhatsApp y por correo a soporte@monific.com — esos tres se crean solos. Por llamada en CallPicker lo creas tú.

**¿Quién tipifica?**
Solo el chat lo hace automáticamente, y solo con la opción que eligió el cliente. En WhatsApp, correo y llamada la tipificación es tuya, durante la interacción.

**¿Cuál tipo elijo?**
**A** problema técnico · **B** información o dudas de inversión · **C** solicitante · **D** queja o inconformidad · **E** reclamación formal UNE. Los ejemplos están en la ayuda de trabajo de los cinco tipos.

**¿Qué es el SLA de 5 minutos?**
El reloj arranca al crearse el ticket y se detiene en **tu primera interacción con el cliente**, no al resolver. Si se vence sin respuesta, el ticket escala solo.

**¿Cuándo y cómo escalo a TI?**
Cuando un tipo A no se resuelve en primer nivel. Registras folio, categoría, subcategoría y descripción del problema, y avisas a TI **en Notion** con el folio. Das seguimiento cada 8 horas; a las 48 sin resolver escala a Dirección. Confirmas con el cliente antes de cerrar.

**¿Por qué aviso en Notion si ya está en HubSpot?**
Porque TI trabaja en Notion. HubSpot es la bitácora del caso, y el traspaso entre los dos es manual.

**¿Qué hago con un tipo C?**
Se crea sola una tarea para el ejecutivo de Solicitantes, con una hora de SLA. De ahí puede nacer un negocio.

**¿Cómo cierro bien?**
La resolución detallada es obligatoria. Los tiempos de primera respuesta y de resolución se registran solos.

---

## 12 · Tu proceso · UNE

> ⚠️ **Pendiente de verificar contra el portal.** Las automatizaciones de UNE están construidas pero desactivadas.

**Abierto → Cerrado.** Dos etapas, sin vuelta atrás.

**¿Cuándo aplica?**
Cuando un cliente decide presentar una queja formal ante la Unidad Especializada. Llena el formato UNE publicado en la página de Monific y lo envía a une@monific.com. **No se abre una reclamación por WhatsApp.**

**¿Qué capturo?**
Nombre del reclamante, CURP, domicilio completo, monto reclamado, los hechos en las palabras del cliente, el producto o servicio involucrado, y el formato firmado adjunto.

**¿Qué plazos corren?**
Día 0 llega y se genera el ticket con su acuse. Días 5 y 8, recordatorios. Día 10 vence la tarea de dictamen. **Día 30 hábil es el límite regulatorio de respuesta.**

**¿Cómo cierro?**
Solo con el dictamen adjunto y su resultado, aprobado o rechazado. Ahí queda listo para el reporte trimestral ante CNBV y CONDUSEF.

**¿Se puede reabrir?**
No. Una reclamación nueva es un ticket nuevo.

---

## 13 · Cuando algo se ve raro

**No veo un contacto que sé que existe.**
Estás en una vista filtrada. Cambia a *Todos los contactos* y busca por correo. Si tampoco está, no se creó — avisa.

**Un campo obligatorio no me deja avanzar de etapa.**
Es a propósito. Busca el campo en **Acciones → Ver todas las propiedades**. Si el campo no existe en el portal, no es tu error: repórtalo.

**El correo que envié no aparece en el historial.**
Tu bandeja no está conectada, o lo enviaste desde una cuenta distinta a la conectada. Ver página 7.

**Un número no coincide con Admin Monific.**
HubSpot no calcula. Se revisa en Admin. Ver regla 3.

**No me llegó la notificación de un ticket.**
Revisa que el ticket esté asignado a ti y que estés dentro del horario activo de rotación. Si sigue sin llegar, repórtalo — puede ser una automatización apagada.

**Se creó un contacto duplicado.**
No lo borres. Repórtalo para fusionarlo, así no se pierde el historial de ninguno de los dos.

**Cambió un valor y nadie lo tocó.**
Fue un workflow. Pasa el cursor sobre la propiedad y entra a **Detalles** para ver el historial: dice quién o qué lo cambió y cuándo.

**Me sacó la sesión.**
Vuelve a entrar. Si se repite, es tema del administrador del portal, no tuyo.

**¿Esto es un error o así está diseñado?**
Antes de reportar, revisa el historial de la propiedad y esta guía. Si sigues sin saberlo, pregunta — pero cuenta **qué esperabas y qué pasó**. Con eso se resuelve en un mensaje en vez de tres.

---

## 14 · Dónde buscar lo demás

Todo lo genérico de HubSpot está documentado y actualizado por ellos. Estos enlaces cubren lo que este manual no repite: ordenar y agregar columnas, exportar, app móvil, búsqueda avanzada, listas contra vistas, secuencias.

- [Gestionar la base de datos del CRM](https://knowledge.hubspot.com/get-started/manage-your-crm-database) — objetos, registros, propiedades e importaciones
- [Crear y administrar vistas guardadas](https://knowledge.hubspot.com/es/records/create-and-manage-saved-views)
- [Ver y filtrar registros](https://knowledge.hubspot.com/es/records/view-and-filter-records-in-the-updated-index-page) — filtros, columnas y orden
- [Buscar en tu CRM](https://knowledge.hubspot.com/es/records/search-your-crm)
- [Objetos personalizados](https://knowledge.hubspot.com/es/crm-setup/use-custom-objects) — aplica a Cuota de Pago
- [Base de conocimientos de HubSpot](https://knowledge.hubspot.com/) — todo lo demás
- [Guía de inicio](https://knowledge.hubspot.com/get-started)

---

## Pendientes antes de publicar

1. Completar los nombres del cuadro de la página 1 con el Directorio de Responsables.
2. Verificar cada ruta de clic en el portal y corregir lo que no coincida.
3. Levantar la marca de *pendiente de verificar* en las páginas 10, 11 y 12 cuando el portal lo permita.
4. Validación escrita de Monific — es criterio de cierre del bloque B09.
