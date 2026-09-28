# 04 · Los cuatro objetos

**El artículo que evita la confusión más común del CRM.**

---

## En una frase cada uno

| Objeto | Es… | Ejemplo |
|---|---|---|
| **Contacto** | Una **persona** | María López |
| **Empresa** | Una **organización** | Desarrolladora Torre Polanco S.A. de C.V. |
| **Negocio** | Algo que **avanza hacia una venta** o una inversión | "Inversión de María López en Torre Polanco" |
| **Ticket** | Algo que **hay que resolver** | "No puedo entrar a la app" |

---

## La pregunta que resuelve casi todas las dudas

> **¿Esto es una persona, una organización, algo que avanza hacia una venta, o algo que hay que resolver?**

- Persona → **Contacto**
- Organización → **Empresa**
- Avanza hacia una venta → **Negocio**
- Hay que resolverlo → **Ticket**

---

## Contacto · la persona

Inversionistas, solicitantes y representantes legales. **Todos son contactos.**

Aquí viven los datos de la persona y de su cuenta: correo, teléfono, nivel de registro y los saldos que llegan cada noche desde el sistema de Monific.

**Dos reglas:**

- Una persona = **un** contacto. Nunca dos.
- La llave para encontrarlo **siempre es el correo**.

## Empresa · la organización

Solo para **desarrolladores**: personas morales que solicitan financiamiento. Un inversionista persona física no genera empresa.

## Negocio · lo que avanza

En Monific se usa para tres cosas:

| Uso | Qué es |
|---|---|
| **Solicitante** | El recorrido desde el formulario hasta la campaña publicada |
| **Inversionista** | El acompañamiento de la persona: perfil activo, activo, congelado, cierre |
| **Movimiento** | **Cada compra, venta o liquidación es un negocio propio** |

## Ticket · lo que se resuelve

Tres pipelines que **no se mezclan**:

| Pipeline | Qué guarda |
|---|---|
| **Atención** | Dudas, problemas y quejas |
| **Cobranza** | **Un ticket por campaña fondeada** — no uno por cuota |
| **UNE** | Reclamaciones formales |

> El de Cobranza sorprende a todos: **cobranza vive en tickets**, no en un objeto aparte. Un ticket sigue una campaña completa de principio a fin.

---

## Cómo se conectan

```
Empresa (desarrollador)
 └── Proyecto
      ├── Ticket de Cobranza        (uno por campaña fondeada)
      ├── Negocio de Solicitante    (uno)
      └── Negocios de Inversionista (uno por cada operación)

Contacto (persona)
 ├── Su negocio de acompañamiento
 ├── Sus negocios de movimiento
 └── Sus tickets
```

Hay un quinto objeto, **Proyecto**, que no capturas a mano: llega del sistema de Monific y es lo que conecta todo. Si te preguntas *"¿qué inversionistas están en esta campaña?"*, la respuesta pasa por ahí.

---

## Los dos errores que más cuestan

**1 · Poner la nota en el objeto equivocado**

| Ponla en… | Cuándo |
|---|---|
| **Contacto** | Hablaste con esa persona y es tu único interlocutor |
| **Empresa** | Tratas con varias personas de la misma organización |
| **Ticket** | La conversación es sobre ese caso |
| **Negocio** | La conversación mueve la operación |

Si tratas con tres personas de la misma desarrolladora y cada quien deja notas en su contacto, nadie ve el panorama. **Ponlas en la empresa.**

**2 · Buscar una propiedad en el objeto equivocado**

Si filtras contactos por una propiedad que vive en el negocio, no la vas a encontrar. No está mal el CRM: está mal el objeto.

---

## Lo siguiente

**05 · Las diez reglas de Monific.** Si solo lees una página de toda la guía, que sea esa.
