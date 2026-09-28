# P01 · Conectar correo y calendario

> **Para quién:** todo el equipo, el primer día.
> **Cuánto toma:** 10 minutos si tienes el permiso. Semanas si no lo tienes.

## Léelo antes de empezar

**El bloqueo de este procedimiento nunca es técnico: es de permisos.** En otras cuentas esto ha costado semanas, y siempre por lo mismo — nadie preguntó a tiempo quién autoriza la conexión.

**Antes de tocar HubSpot, resuelve esto:**

| Pregunta | Respuesta que necesitas |
|---|---|
| ¿Qué correo usa Monific? | Google Workspace / Microsoft 365 / otro |
| ¿Quién es el administrador de ese correo? | Nombre y forma de contactarlo |
| ¿La política permite conectar aplicaciones de terceros? | Sí / No / Requiere aprobación caso por caso |
| Si requiere aprobación, ¿quién la da y en cuánto tiempo? | Nombre y plazo |

Si alguna respuesta es "no sé", **ese es el primer paso**, no la conexión.

---

## Qué se conecta y para qué

Son **dos conexiones distintas** y conviene entender la diferencia antes de aceptar los permisos:

| Conexión | Qué habilita | Qué ve HubSpot |
|---|---|---|
| **Bandeja conectada** (personal) | Enviar correos desde HubSpot y que se registren solos en el registro del cliente | Solo los correos con contactos que existen en el CRM |
| **Calendario** | Agendar reuniones desde HubSpot, enlace de reservación, ver tu disponibilidad | Tus eventos, para calcular huecos libres |

Hay una tercera, la **bandeja de equipo** (soporte@monific.com, une@monific.com), que **no es lo mismo** y no la conecta cada persona: la configura el administrador del portal una sola vez. Ver **S05 · Configuración de los canales**.

---

## El procedimiento

### Conectar tu correo personal

1. Icono de **configuración** (engrane), arriba a la derecha.
2. **General** → pestaña **Correo electrónico**.
3. **Conectar bandeja de entrada personal**.
4. Elige tu proveedor (Google / Microsoft / IMAP).
5. Inicia sesión con **tu cuenta de trabajo**, no una personal.
6. Acepta los permisos que pide.
7. Elige si quieres que se registren **todos** los correos o solo los que marques.

**Recomendación para Monific:** registro automático **activado**. Con un cliente regulado, la trazabilidad de la comunicación pesa más que la comodidad.

### Conectar tu calendario

1. Mismo menú de configuración → **General** → pestaña **Calendario**.
2. **Conectar calendario**.
3. Mismo proveedor y misma cuenta.
4. Autoriza.

---

## Si te sale un error de permisos

Es lo normal. No lo intentes tres veces: **manda un mensaje**.

Qué pedir, textualmente:

> *Necesito autorización para conectar mi cuenta de correo corporativo a HubSpot (portal 48427391). La conexión permite que HubSpot registre correos con contactos del CRM y lea mi disponibilidad de calendario. ¿Puedes aprobarlo o decirme quién lo aprueba?*

Y **agenda un recordatorio a 48 horas**. Este trámite se olvida.

---

## Cómo comprobar que quedó

| Prueba | Resultado esperado |
|---|---|
| Manda un correo desde HubSpot a un contacto de prueba | Aparece en la línea de tiempo del contacto |
| Manda un correo **desde tu cliente de correo** a ese mismo contacto | También aparece — esto es lo que confirma la conexión de verdad |
| Abre la agenda de reuniones | Tus horas ocupadas aparecen bloqueadas |

**La segunda prueba es la importante.** La primera funciona aunque la conexión esté a medias.

---

## Lo que no hace

- **No lee** correos con personas que no están en el CRM.
- **No registra** WhatsApp, llamadas de celular ni LinkedIn → ver **P03 · Registrar una actividad externa**.
- **No sustituye** la bandeja de equipo de soporte.

---

## Estado y verificación

**Estado:** ✅ verificable sin dependencias · 2026-08-18
**Nota:** este procedimiento es funcionalidad estándar de HubSpot. Lo específico de Monific es el bloque de permisos del inicio.

**Falta para publicar:**

1. Ejecutarlo con un usuario real de Monific y capturar cada pantalla.
2. **Completar la tabla de permisos** con el proveedor de correo real de Monific y el nombre de quien autoriza.
3. Validación escrita de Monific.

Referencia de HubSpot: [Conectar tu bandeja de entrada](https://knowledge.hubspot.com/es/connected-email/connect-your-inbox-to-hubspot)
