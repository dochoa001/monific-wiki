# A07 · Los cuatro objetos y qué vive en cada uno

> **Para quién:** todo el equipo. Es el primer artículo que lee alguien nuevo.
> **Cuándo se usa:** cada vez que no sepas dónde buscar o dónde guardar algo.
> **Formato final:** una página, imprimible.

La confusión contacto / empresa / negocio / ticket reaparece durante meses. Esta hoja existe para cortarla.

---

## En una frase cada uno

| Objeto | Es… | Ejemplo |
|---|---|---|
| **Contacto** | Una **persona** | María López |
| **Empresa** | Una **organización** | Desarrolladora Torre Polanco S.A. de C.V. |
| **Negocio** | Un **proceso de venta o una inversión** que avanza por etapas | "Inversión de María López en Torre Polanco" |
| **Ticket** | Un **caso a resolver** que avanza por etapas | "No puedo entrar a la app" |

Hay un quinto objeto, **Proyecto**, que no se opera a mano: es el que conecta todo lo demás. Ver abajo.

---

## La pregunta que resuelve el 90 % de las dudas

> **¿Esto es una persona, una organización, algo que avanza hacia una venta, o algo que hay que resolver?**

- Persona → **Contacto**
- Organización → **Empresa**
- Avanza hacia una venta o es una inversión → **Negocio**
- Hay que resolverlo → **Ticket**

---

## Qué vive en cada uno, en Monific

### Contacto — la persona

Inversionistas, solicitantes y representantes legales. Todos son contactos.

Aquí viven los **datos de la persona y de su cuenta**: correo, teléfono, nivel de registro, y los saldos que llegan de Admin Monific cada noche (saldo actual, saldo invertido, valor de cuenta, ganado actual).

**Reglas:**
- Una persona = **un** contacto. Nunca dos.
- La llave para encontrarlo siempre es el **correo**.
- Un usuario tiene **un solo rol**: o es inversionista o es representante legal. Nunca ambos.

### Empresa — la organización

Solo para **desarrolladores** (personas morales que solicitan financiamiento). Un inversionista persona física no genera empresa.

Guarda la información corporativa y la liga al representante legal.

### Negocio — lo que avanza hacia una venta

En Monific el Negocio se usa para **dos cosas distintas**, y conviene tenerlo claro:

| Uso | Pipeline | Qué es |
|---|---|---|
| **Solicitante** | Solicitantes | El recorrido de un solicitante desde el formulario hasta la campaña publicada. 6 etapas |
| **Inversionista** | Inversionistas | El *onboarding* de la persona: perfil activo → activo → congelado → cierre |
| **Movimiento de inversión** | Inversiones | **Cada compra, venta o liquidación es un negocio separado** |

**Reglas:**
- Una relación = **un** onboarding por persona.
- Cada `PURCHASE` / `SOLD` / `LIQUIDATION` = **un movimiento separado**.
- ❌ **No existe un "negocio padre" de campaña.** Lo que conecta es el objeto Proyecto.

### Ticket — lo que hay que resolver

Tres pipelines distintos, y no se mezclan:

| Pipeline | Qué guarda | Regla |
|---|---|---|
| **Atención** | Los tickets de servicio, Tipo A a D | Se pueden reabrir |
| **Cobranza** | **Un ticket por campaña fondeada** | No es un ticket por cuota |
| **UNE** | Reclamaciones formales, Tipo E | **No se reabren nunca** |

⚠️ El de Cobranza sorprende a todo el mundo: **cobranza vive en tickets, no en un objeto propio**. Los masters hablan de un "Objeto de Cobranza" que **no existe** en el portal — la verificación por API confirmó cero objetos personalizados. La decisión vigente, validada el 2026-06-29, es que cobranza vive en Tickets.

### Proyecto — el conector

No se captura a mano. Llega desde Admin Monific y es lo que **une** el proyecto inmobiliario con la empresa desarrolladora, con el negocio del solicitante, con los negocios de los inversionistas y con el ticket de cobranza.

Si alguna vez te preguntas *"¿cómo sé qué inversionistas están en esta campaña?"*, la respuesta pasa por el Proyecto.

---

## Cómo se conectan

```
Empresa (desarrollador)
 └── Proyecto
      ├── Ticket de Cobranza      (uno por campaña fondeada)
      ├── Negocio de Solicitante  (uno)
      └── Negocios de Inversionista (uno por cada compra, venta o liquidación)

Contacto (persona)
 ├── Negocio de onboarding  (uno solo por persona)
 └── Negocios de movimiento (uno por cada operación)
 └── Tickets                (los que haga falta)
```

---

## Las dos cosas que más se equivocan

**1 · Poner la nota en el objeto equivocado.**
En el **contacto** si hablaste con esa persona y es tu único interlocutor. En la **empresa** si tratas con varias personas de la misma organización — así el resto del equipo ve el panorama completo.

**2 · Buscar una propiedad en el objeto equivocado.**
**Las propiedades son exclusivas de cada objeto.** El teléfono de un contacto y el de una empresa son campos distintos, aunque se llamen igual. Si filtras contactos por una propiedad de negocio, no la vas a encontrar.

---

## Estado y verificación

**Estado:** ✅ verificable sin dependencias · 2026-08-18
**Fuente:** Maestro Operativo (2026-07-31), Documento API de Integración Unificado, minutas del 2026-06-29, 2026-07-27 y 2026-08-04.

**Falta para publicar:**

1. Ejecutar en el portal: abrir un registro de cada objeto y confirmar que la descripción coincide.
2. Validación escrita de Monific.

**Nota:** este es el único artículo de la familia 01 que no depende de configuración pendiente. Puede publicarse primero y sirve de base para todos los demás.
