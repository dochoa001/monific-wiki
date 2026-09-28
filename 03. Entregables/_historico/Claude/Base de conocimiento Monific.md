# Base de conocimiento Monific

Qué necesita artículo propio, por qué no cabe en una diapositiva, y en qué orden conviene escribirlo.

> **Estado:** borrador de alcance · 2026-08-17 · pendiente de validar con Monific
> **Fuentes:** masters de implementación unificados (Comercial, Cobranza, Servicio/UNE), auditoría del portal 48427391, temario de las 9 sesiones.
> **➜ Los artículos ya están redactados.** Este documento define *qué* hace falta; la colección completa vive en `Base de conocimiento/`, con su índice en `00 Indice de la base de conocimiento.md` (2026-08-18).

---

## Por qué esto no es un extra

La base de conocimiento es el **bloque B09 del requerimiento contractual**: *"entregar manuales, guías y videos"*. No es cortesía ni valor agregado — es un entregable con criterio de cierre, y el criterio incluye validación escrita de Monific.

Eso cambia dos cosas. La primera: cada artículo tiene que existir de verdad, no estar prometido. La segunda: el objetivo no es que el equipo aprenda en la sesión, es que **Monific pueda capacitar a alguien nuevo sin Black & Orange**. Si un artículo no sirve para eso, no cumple.

## La regla que gobierna todo lo demás

**Ningún artículo se publica sin verificarse contra el portal.**

Esta cuenta ya pagó el precio de lo contrario: 26 de las 31 propiedades comprometidas no existían cuando se auditó, y dos masters contenían plantilla de otro cliente. Documentación redactada rápido y sin comprobar es exactamente lo que produjo el requerimiento; repetirla dentro del remedio sería el peor resultado posible.

En la práctica: se escribe el artículo, se ejecuta el procedimiento en el portal siguiendo el artículo al pie de la letra, y se corrige lo que no coincida. Si un campo no existe todavía, el artículo no se publica — se marca como bloqueado y se escala.

---

## Son dos bases distintas, y conviene no mezclarlas

### A · Base interna de operación — para el equipo de Monific

Cómo usar HubSpot para *su* proceso. Es la que cubre B09 y la que se deriva de las 9 sesiones. Todo el resto de este documento habla de ésta.

### B · Biblioteca de conocimiento de HubSpot — para responder tickets

Distinta, y hay un hueco que vale revisar antes de seguir. El master de Servicio define la ruta del **ticket Tipo B** (información y dudas de inversión) así: *el E.A.C. responde con apoyo de la biblioteca de conocimiento de HubSpot y fragmentos*.

Es decir: **una de las cinco rutas de atención depende de que exista una biblioteca de artículos.** Si está vacía, el Tipo B no funciona como está diseñado y el agente improvisa cada respuesta.

⚠️ No verifiqué cuántos artículos tiene hoy esa biblioteca. Es lo primero que hay que mirar, porque si está vacía no es un pendiente de documentación: es un hueco de configuración que afecta la operación y la sesión 06.

---

## Lo que necesita artículo propio

### 1 · Ayudas de trabajo

Se consultan **mientras** se opera, no se estudian antes. Formato de una página, imprimible, pegada al escritorio. Son las que más rinden por hora invertida.

| Artículo | Por qué no cabe en la sesión | Para quién |
|---|---|---|
| **Categorías y subcategorías de TI** | Son 11 categorías y ~40 subcategorías salidas del histórico 2025. Nadie las memoriza en una hora — y sin ellas no se puede escalar bien | Atención a cliente |
| **Semáforo de mora** | Cuatro tramos de días, cada uno con acción distinta y destinatario distinto. Se consulta cada vez que un pago se atrasa | Cobranza, Finanzas |
| **Los cinco tipos de ticket A–E** | El tipo se elige durante la interacción, con el cliente esperando. Necesita ejemplos reales, no definiciones | Atención a cliente |
| **Propiedades obligatorias por etapa · Solicitantes** | Cinco etapas con campos distintos. Es lo que evita quedarse atorado a media captura | Ventas Solicitantes |
| **Propiedades obligatorias por etapa · Inversionistas** | Igual, más las etapas de excepción (congelado, reactivación) | Ventas Inversionistas |
| **Línea de tiempo de una reclamación UNE** | Día 0, días 5 y 8, día 10, día 30 hábil. Un plazo regulatorio no se estima de memoria | Dirección, Legal |
| **Los cuatro objetos y qué vive en cada uno** | La confusión contacto / empresa / negocio / ticket reaparece durante meses | Todo el equipo |

### 2 · Procedimientos paso a paso

Se siguen una vez, se olvidan, y se vuelven a necesitar tres meses después. Formato de guía corta con capturas.

| Artículo | Nota |
|---|---|
| Conectar correo y calendario | Incluir **qué permiso pedir y a quién**: es el bloqueo que ya costó semanas en otras cuentas |
| Crear una vista guardada con filtros Y / O | La lógica booleana es lo que más cuesta del CRM básico |
| Registrar una actividad externa | WhatsApp personal, LinkedIn, SMS, llamada fuera del CRM. Sin esto los reportes de actividad mienten |
| Cambiar pipeline o etapa sin perder el historial | El error más común, y tiene solución de dos clics |
| Buscar por correo antes de crear un contacto | El procedimiento anti-duplicados |
| Escalar un ticket a TI | Folio, categoría, descripción, aviso en Notion, seguimiento cada 8 h, escalamiento a 48 h |
| Cerrar un ticket con resolución | Qué cuenta como resolución documentada |
| Registrar una reclamación UNE completa | Son 19 campos manuales. Merece guía propia, no un párrafo |
| Auditar el historial de una propiedad | Cómo averiguar quién cambió un valor antes de preguntarle a alguien |

### 3 · Documentación de sistema

No es para el usuario final: es para TI de Monific y para quien administre el portal. **Es la que decide si Monific queda autónomo o dependiente.**

| Artículo | Por qué es crítico |
|---|---|
| **La frontera de cálculo** | Qué calcula Admin Monific y qué solo almacena HubSpot. Es el origen de la mitad de las confusiones: mora, montos, folios, los 30 días hábiles. Si el equipo no lo tiene claro, desconfía del dato cuando no cuadra |
| **Diccionario de propiedades** | Nombre visible, nombre interno, objeto, tipo, valores posibles y **origen** (manual, workflow o API). Sin esto nadie puede crear un reporte ni depurar un dato |
| **Catálogo de workflows** | Qué dispara cada uno, sobre qué objeto, y su estado real. Hoy hay 96 en el portal y la relación con los numerados del master no es evidente |
| **Contrato técnico de la integración** | Admin Monific → HubSpot y sus reglas de negocio. Ya existe documentado; hay que dejarlo donde TI lo encuentre |
| **Configuración de los canales** | Chat web, WhatsApp y Meta, soporte@monific.com, une@monific.com, CallPicker. Quién es dueño de cada uno y cómo se reconecta si se cae |
| **Roles, permisos, equipos y rotación por horario** | La asignación de tickets depende del horario activo. Si nadie sabe cómo se configura, un cambio de turno rompe el SLA |
| **Lo que el portal no puede hacer** | Sin Data Hub no hay código ni cálculos avanzados. Explica por qué varias cosas llegan por API y evita que se vuelvan a pedir |

### 4 · Ruta de incorporación

No es un artículo: es un orden de lectura. *"Eres nuevo en el equipo de cobranza: lee estos seis artículos en este orden, haz estos tres ejercicios."* Es lo que convierte la colección en algo que capacita sola.

Conviene una ruta por rol: Ventas Solicitantes, Ventas Inversionistas, Cobranza, Atención a cliente, Dirección.

---

## Lo que ya existe y solo hay que extraer

Esto baja el trabajo real bastante, y conviene decirlo antes de estimar:

- El **diccionario de propiedades** ya está dentro de los masters, con columna de nombre interno, tipo, carácter obligatorio u opcional y valores posibles. Hay que extraerlo y **verificarlo**, no redactarlo.
- El **catálogo de workflows** también está en los masters, con su estado conciliado contra la auditoría.
- La **tabla de categorización de TI** está completa, con conteo de tickets por subcategoría.
- Los **flujogramas** de los cinco procesos existen.
- Las **grabaciones** de las sesiones ya impartidas sirven como material de video.

El trabajo nuevo está sobre todo en las ayudas de trabajo y en los procedimientos paso a paso, que hoy no existen en ningún formato.

## Lo que depende de Monific, no de Black & Orange

Vale registrarlo para que no se confunda un pendiente del cliente con un incumplimiento nuestro:

- Los **copies aprobados** de las comunicaciones
- Las **plantillas de WhatsApp** creadas y aprobadas en Meta
- Las **definiciones abiertas** que bloquean varios flujos
- La **validación escrita** de cada artículo, que es criterio de cierre

---

## Prioridad sugerida

El orden no es por facilidad, es por consecuencia de no tenerlo.

1. **Verificar la biblioteca de conocimiento de HubSpot.** Si está vacía, la ruta del Tipo B no funciona. Es revisión, no redacción, y condiciona la sesión 06.
2. **Línea de tiempo UNE** y su procedimiento de registro. Único proceso con riesgo regulatorio.
3. **Categorías y subcategorías de TI.** Bloquea la sesión 07 en la práctica: sin la ayuda de trabajo, el escalamiento se enseña pero no se ejecuta.
4. **La frontera de cálculo.** Un artículo corto que previene desconfianza en el dato en tres procesos a la vez.
5. **Semáforo de mora** y las dos tablas de propiedades obligatorias por etapa.
6. **Diccionario de propiedades y catálogo de workflows.** Extracción desde los masters, con verificación.
7. Procedimientos paso a paso, en el orden en que se van dando las sesiones.
8. Rutas de incorporación por rol, al final, cuando ya hay a qué apuntar.

## Formato y dónde vive

Una recomendación, sujeta a lo que prefiera Monific:

| Tipo | Formato | Por qué |
|---|---|---|
| Ayudas de trabajo | Una página, PDF imprimible | Se usan con el cliente en la línea; nadie abre un documento largo a media llamada |
| Procedimientos | Guía corta con capturas | Se siguen paso a paso, en pantalla |
| Documentación de sistema | Hoja de cálculo derivada del master | Se filtra, se ordena y se mantiene; un documento de texto se vuelve obsoleto sin que nadie note |
| Video | Grabación por tema, no por sesión | Una grabación de 60 minutos no se vuelve a ver. Cortes de 3 a 5 minutos por procedimiento sí |

Sobre el video vale una nota: las grabaciones completas de las sesiones sirven como respaldo de que la capacitación ocurrió, pero **no funcionan como material de consulta**. Si el objetivo es que Monific capacite sola, hacen falta cortes cortos por procedimiento.

---

## Pendientes de este documento

- ¿Cuántos artículos tiene hoy la biblioteca de conocimiento de HubSpot?
- ¿La base interna vive en HubSpot, en Drive o en la herramienta que Monific prefiera?
- ¿Quién de Monific es dueño de mantenerla cuando cierre el proyecto?
- ¿Los videos cortos entran en el alcance de B09 o son alcance nuevo?
