# 23 · Si algo se ve raro

**Antes de reportar, dos minutos de revisión ahorran una cadena de mensajes.**

---

## Primero, ubica de dónde viene el problema

```
Algo no cuadra
      │
      ├── ¿Es un monto, un saldo, una fecha o días de mora?
      │        └── El dato viene del sistema de Monific
      │            → Reporta a TI. No lo corrijas en HubSpot
      │
      ├── ¿Es una etapa, una tarea, una asignación o un correo?
      │        └── Es de HubSpot
      │            → Reporta al administrador del portal
      │
      └── ¿La app o la cuenta del cliente falla?
               └── Es de la app
                   → Ticket Tipo A, escala a TI
```

---

## Averigua quién lo cambió, antes de preguntar

Casi siempre la respuesta está a tres clics:

1. Abre el registro.
2. Pasa el cursor sobre la propiedad.
3. Clic en el **icono de reloj**.

Verás el valor anterior, el nuevo, la fecha y **quién o qué lo cambió**.

| Dice | Significa | Qué haces |
|---|---|---|
| Un nombre de persona | Alguien lo capturó | Pregúntale — con el dato, no con la sospecha |
| Un workflow | Una automatización | Repórtalo al administrador del portal |
| Integración o API | **Vino del sistema de Monific** | **No lo corrijas.** Reporta a TI |
| Importación | Vino de una carga masiva | Pregunta a tu líder |

---

## Cómo reportar para que te resuelvan rápido

Tres cosas. Siempre.

1. **Qué esperabas que pasara**
2. **Qué pasó** — el mensaje exacto si hay
3. **Cómo verlo** — el registro, la pantalla, los pasos

**Mal:**
> No sirve el CRM.

**Bien:**
> En el negocio de María López (Torre Polanco), la propiedad *Saldo disponible* muestra $0 pero en Admin dice $45,000. El historial dice que lo escribió la integración anoche a las 01:14. Adjunto captura.

El segundo se resuelve en un mensaje. El primero, en cinco.

---

## Los cuatro casos más comunes y qué hacer

**"El saldo no coincide."**
Los datos financieros llegan de madrugada. Si el movimiento fue hoy, todavía no se refleja — no es un error. Si es de hace días, sí: reporta a TI.

**"El negocio no avanzó de etapa solo."**
Muévelo a mano para no detener al cliente y reporta al administrador del portal. No dejes al cliente esperando a que se arregle la automatización.

**"No me llegó el correo que se supone que sale solo."**
Revisa la línea de tiempo del registro: si no está ahí, no salió. Mándalo tú y reporta.

**"Este campo se llenó solo con algo raro."**
Mira el historial. Si lo escribió un workflow, repórtalo con captura.

---

## A quién le toca cada cosa

| Si pasa esto | Ve con |
|---|---|
| No puedo entrar, o no veo algo que debería ver | Administrador del portal |
| La app de Monific o la cuenta de un cliente falla | TI, por Notion |
| Un monto o fecha no coincide con el sistema de Monific | TI, por Notion |
| Un campo no existe, o algo automático no pasó | Administrador del portal |
| Dudas sobre tasas, comisiones o penalizaciones | Finanzas |
| No sé qué hacer con un caso | Tu líder de área |
| Un cliente quiere reclamación formal | Director Comercial |

---

## Lo que no hay que hacer nunca

| No | Por qué |
|---|---|
| Corregir a mano un dato que viene del sistema de Monific | Se sobrescribe esta noche y en el intervalo hay dos versiones |
| Borrar un registro duplicado | Se fusionan. Borrar pierde el historial |
| Dejar de registrar porque "el sistema está mal" | El registro es lo único que no se pierde |
| Tapar un correo que salió mal a un cliente | Se maneja mucho mejor cuando se sabe a tiempo |

---

## Y si de plano no sabes

Pregunta. Con el registro a la mano y las tres cosas de arriba escritas.

Nadie espera que sepas todo el CRM. Lo que sí se espera es que el cliente no se quede sin respuesta mientras averiguas.
