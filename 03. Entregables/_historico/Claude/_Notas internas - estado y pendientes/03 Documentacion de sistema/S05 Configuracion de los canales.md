# S05 · Configuración de los canales

> **Para quién:** administrador del portal.
> **Por qué existe:** cada canal tiene un dueño, y si nadie sabe quién es, un canal caído se queda caído.

---

## Los canales, de un vistazo

| Canal | Para qué | Estado | Dueño |
|---|---|---|---|
| **Chat Web** | Entrada de tickets con clasificación **automática** | 🟡 Sin verificar | *Por definir* |
| **Correo soporte@monific.com** | Entrada de tickets de atención | 🟡 Sin verificar | *Por definir* |
| **Correo une@monific.com** | Entrada de reclamaciones formales | 🟡 Sin verificar | *Por definir* |
| **WhatsApp Business API** | Notificaciones y plantillas | 🔴 **Integrado pero no envía plantillas** | Meta: Monific · HubSpot: admin del portal |
| **Meta Business** | Aprobación de plantillas de WhatsApp | 🔴 **B&O no tiene acceso** | Monific (Raquel) |
| **CallPicker** | Telefonía, grabación y registro de llamadas | 🔴 **Errores de sincronización** | *Por definir* |
| **Formulario web** | Alta de solicitantes | 🔴 **Sigue vivo el Google Form** | Monific embebe · B&O entrega |

⚠️ **Ningún canal tiene dueño nominal asignado.** Es lo primero que hay que cerrar de este artículo.

---

## Chat Web

**Lo que lo hace especial:** es el **único canal con clasificación automática** del tipo de ticket.

Cómo debe funcionar:

1. El contacto pide "hablar con un agente".
2. El chatbot pide **nombre y correo** y el **tipo de solicitud**.
3. HubSpot clasifica automáticamente el ticket (A/B/C/D) según la opción del desplegable.
4. Se asigna por **round-robin según el horario activo**.
5. Arranca el cronómetro de SLA de primera atención: **5 minutos**.

**Si el chat se cae**, todos los tickets de ese canal pasan a clasificación manual — y se pierde la ventaja principal del canal.

---

## Los dos buzones de correo

| Buzón | Entra a | Clasificación |
|---|---|---|
| `soporte@monific.com` | Pipeline **Atención** | Manual |
| `une@monific.com` | Pipeline **UNE** | Manual |

**Son bandejas de equipo, no bandejas personales.** No las conecta cada persona: las configura el administrador del portal una sola vez. Es distinto de **P01 · Conectar correo y calendario**, que es la conexión individual.

⚠️ El buzón `une@monific.com` es el que recibe el **Formato UNE**. Si deja de conectar, **una reclamación regulatoria puede quedar sin registrar**. Merece monitoreo aparte del resto.

---

## 🔴 WhatsApp — el bloqueo más caro

| Aspecto | Situación |
|---|---|
| Integración con HubSpot | Conectada **parcialmente** |
| Envío de plantillas | 🔴 **No funciona** |
| Dónde se crean las plantillas | En el **administrador de Meta** |
| Acceso de B&O a Meta | 🔴 **No lo tiene** |
| Estado de las plantillas | 10 "creadas, falta confirmar aprobación de Meta" (al 2026-07-28) |

**El acuerdo vigente (2026-06-29):** los copies están listos. **Raquel**, que conoce Meta Business API, lo ve con Jesús, crea las plantillas y, una vez aprobadas por Meta, B&O hace los cruces en HubSpot.

**Qué se cae mientras tanto**, porque el diseño lo da por hecho:

- El recordatorio de cobranza de **T-5** (email + WhatsApp)
- El WhatsApp de empuje al fondeo a las **36 h** del alta de un inversionista
- El WhatsApp de reinversión al cerrar una campaña
- El aviso de escalamiento a TI cuando el canal de origen fue WhatsApp

**No es un pendiente cosmético:** es una parte del diseño de comunicación que hoy no existe. Y depende de una aprobación de Meta que ni B&O ni el equipo de proyecto pueden acelerar.

---

## 🔴 CallPicker

| | |
|---|---|
| **Para qué** | Registro y grabación de llamadas, vinculadas automáticamente a contactos y tickets |
| **Estado** | **Conectado con errores**: llamadas no registradas, contactos no asociados |
| **Lo que se pidió en el brief** | Auditoría de la conexión existente y solución de los errores |
| **Seguimiento** | ⚠️ **No hay evidencia en ninguna minuta posterior de que se haya trabajado en esto** |

Es un entregable del alcance contractual **sin seguimiento visible**. Y tiene efecto directo en la operación: en el pipeline de Servicio, las llamadas por CallPicker se crean como ticket **manualmente** por el agente, precisamente porque el registro automático no es confiable.

**Regla operativa mientras tanto:** si tomaste una llamada por CallPicker y no la ves en el registro a los pocos minutos, **regístrala a mano** → **P03**.

---

## 🔴 El formulario de solicitantes

| | |
|---|---|
| **Lo que debería haber** | Formulario de HubSpot embebido en `monific.com` |
| **Lo que hay** | Un **Google Form**, con automatizaciones por Google Scripts y correo manual |
| **Desde cuándo** | Pendiente desde **enero de 2026** |
| **Quién lo embebe** | Monific, una vez que B&O entregue el formulario |

El formulario definitivo **no está acreditado**. Los workflows `1640673709`, `1832556831` y `1834467729` no demuestran el recorrido completo de alta.

**Consecuencia:** mientras siga el Google Form, la entrada de solicitantes no dispara los workflows de HubSpot, y el árbol de decisiones de viabilidad se aplica a mano.

---

## Qué documentar por cada canal (y hoy no está)

Este es el trabajo pendiente de este artículo:

| Campo | Por qué |
|---|---|
| **Dueño nominal** | Quién responde si se cae |
| **Cuenta / credencial asociada** | Para reconectar sin buscar |
| **Cómo se reconecta** | Pasos exactos |
| **Cómo se detecta que se cayó** | Sin esto, se detecta cuando un cliente se queja |
| **Quién autoriza cambios** | Especialmente en Meta y en los buzones |

⚠️ **Las credenciales no se documentan aquí.** Viven en el almacén de claves de servicio, fuera de esta base. **Nunca pegues un token en un artículo.**

---

## Estado y verificación

**Estado:** 🔴 **incompleto** · 2026-08-18
**Fuente:** brief de necesidades (secciones 4.2 y 5.1); minuta del 2026-06-29 (acuerdo de WhatsApp/Meta); Master de Implementación Servicio/UNE (canales de entrada); Maestro Operativo.

**Falta para publicar:**

1. **Asignar dueño nominal a cada canal.** Es el hueco principal.
2. Verificar en el portal qué canales están efectivamente conectados hoy.
3. Confirmar el estado de aprobación de las 10 plantillas de WhatsApp en Meta.
4. 🔴 Auditar CallPicker — entregable contractual sin seguimiento.
5. Entregar y embeber el formulario de HubSpot para solicitantes.
6. Documentar el procedimiento de reconexión de cada canal.
7. Validación escrita de Monific.
