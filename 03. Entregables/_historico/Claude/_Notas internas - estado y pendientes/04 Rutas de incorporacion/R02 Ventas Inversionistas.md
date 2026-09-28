# R02 · Ruta de incorporación · Ventas Inversionistas

> **Para:** A.A.I. (Agente de Atención a Inversionistas) que empieza.
> **Duración:** media jornada de lectura + práctica.
> **Al terminar deberías poder:** leer el estado de cualquier inversionista y saber qué toca hacer con él.

---

## Antes de empezar

- [ ] Usuario activo en el portal **48427391**
- [ ] Correo y calendario conectados → **P01**
- [ ] Acceso de lectura al Admin Monific, o alguien de TI a quien preguntar

---

## Lo primero que hay que entender de este rol

> **HubSpot no origina nada en tu proceso. Solo refleja lo que ocurre en la app de Monific.**

La cuenta, la contraseña, el KYC y la CLABE se crean **únicamente en la app o web de Monific**. Casi todas tus propiedades son automáticas. Tu trabajo no es capturar: es **leer bien el estado y actuar a tiempo**.

---

## Bloque 1 · Los cimientos (60 min)

| # | Lee | Por qué |
|---|---|---|
| 1 | **A07 · Los cuatro objetos y qué vive en cada uno** | Especialmente: por qué cada compra es un negocio separado |
| 2 | Manual de HubSpot, páginas **1 a 4** | Entrar, vocabulario, las cinco reglas |
| 3 | **S01 · La frontera de cálculo** | 🔴 **El más importante de tu rol.** Los saldos que ves son del batch de la madrugada |

**Ejercicio 1.** Abre un contacto de inversionista. Localiza sus cuatro propiedades financieras (saldo actual, saldo invertido, valor de cuenta, ganado actual). Con **P09**, comprueba que las escribió la integración y a qué hora.

> **La trampa que hay que evitar desde el día uno:** si un inversionista depositó a las 11:00, su saldo en HubSpot **no lo refleja hasta el batch siguiente**. Nunca le digas a un cliente que no depositó porque HubSpot no lo muestra.

---

## Bloque 2 · Tu proceso (90 min)

| # | Lee | Por qué |
|---|---|---|
| 4 | **A05 · Propiedades obligatorias por etapa · Inversionistas** | Tu hoja de referencia. Imprímela |
| 5 | Manual de HubSpot, página **9** — Tu proceso · Ventas Inversionistas | El recorrido |
| 6 | **P04 · Cambiar pipeline o etapa sin perder el historial** | Sobre todo la parte de reinversión: **es un negocio nuevo, no se reabre el anterior** |
| 7 | **P03 · Registrar una actividad externa** | Tu seguimiento telefónico no se ve si no lo registras |

**Ejercicio 2.** Memoriza los cuatro niveles de registro y qué evento dispara cada uno. Después busca en el portal un contacto en **nivel 3** que **no** tenga fecha de primera inversión: ese es exactamente tu cliente objetivo.

---

## Bloque 3 · Los momentos que importan (60 min)

Tu proceso tiene tres momentos donde ganas o pierdes al cliente:

| Momento | Ventana | Qué hacer |
|---|---|---|
| **Tiene CLABE pero no ha fondeado** | 24 h → 15 días | Es el reloj más corto. **A los 15 días se congela solo** |
| **Tiene fondos pero no ha invertido** | *"el silencio crítico más peligroso"* | El dinero está parado y no genera rendimiento |
| **Cerró su campaña y tiene saldo disponible** | Los primeros 15 días | **Máxima probabilidad de reinversión.** Después, el dinero sale de la plataforma |

**Ejercicio 3.** Crea tres vistas guardadas, una por momento, con **P02**:
- `INV · Nivel 3 sin fondeo · Míos`
- `INV · Con saldo sin invertir · Míos`
- `INV · Campaña cerrada últimos 15 días · Míos`

Estas tres vistas **son tu trabajo diario**.

---

## Bloque 4 · Lo que hoy no funciona (30 min) — no te lo saltes

| Qué | Impacto en tu trabajo |
|---|---|
| 🔴 **WF-065 a WF-069 solo cambian propiedades** | **El inversionista no recibe ningún mensaje al cerrar su campaña.** Todo el contacto de cierre es tuyo, a mano. Y es el momento de mayor probabilidad de reinversión |
| 🔴 **WhatsApp no envía plantillas** | El WhatsApp de empuje a las 36 h y el de reinversión **no salen**. Depende de aprobación de Meta |
| 🔴 **9 de los 16 workflows están apagados** esperando la integración | Buena parte del journey automático **no existe todavía** |
| 🔴 **WF-028, WF-037, WF-039 y WF-040 deben permanecer OFF** | Hasta corrección y aceptación |
| 🔴 **Bugs de nivel de registro** | Hay cuentas activas que no llegan a nivel 4, y la app parece saltar del 1 al 3. **No confíes ciegamente en el embudo** |
| ⚠️ **`Motivo de congelado` es texto libre** | Debería ser lista. Mientras tanto, **acuerda con tu equipo un vocabulario fijo** o el reporte será inservible |

**Ejercicio 4.** Revisa cinco negocios congelados. ¿Los motivos están escritos de forma que se puedan contar? Si cada uno dice algo distinto, ya viste el problema.

---

## Las reglas que gobiernan tu pipeline

Son decisiones canónicas: **sustituyen cualquier documento anterior que las contradiga**.

| Regla | Qué dice |
|---|---|
| **INV-03** | El nivel de registro es el estado canónico. **Solo sube, nunca baja.** Nivel 4 solo con primera compra confirmada |
| **INV-04** | Un solo negocio de onboarding por persona |
| **INV-05** | Saldo ≥ $1,000 genera recordatorio para invertir. **No** cambia por sí solo a nivel 4 |
| **INV-07** | Sin inversiones activas pero **con saldo positivo** → el onboarding sigue **Activo**, no congelado |
| **INV-09** | La reinversión es una compra normal. **No se duplica** el onboarding |
| **INV-11** | **Retiros y UNE están fuera de tu ciclo.** No crees tickets de retiro |
| **INV-12** | Congelado: 15 días sin depósito tras STP, **o** cero inversiones + saldo 0 + 90 días. **Nunca congelar solo por no hacer login si hay inversiones activas** |

---

## Los SLAs de tu rol

| Nivel del cliente | Contacto |
|---|---|
| 1 — Lead | ≤ 24 h · obligatorio |
| 2 — Perfil en proceso | ≤ 24 h · lead caliente |
| 3 — STP activa | ≤ 24 h · lead caliente |
| 4 — Inversionista activo | 1 contacto / 60 días |
| **VIP** | 1 contacto / **30 días** |

**Tareas automáticas que te van a llegar:** a las 48 h sin fondeo (SLA 2 h) · a las 24 h de una inversión nueva (SLA 3 h) · a los 180 días sin nueva inversión.

---

## A quién preguntar

| Si pasa esto | Pregunta a |
|---|---|
| Un saldo no coincide con Admin | **TI, por Notion.** No lo corrijas en HubSpot |
| El cliente reporta falla en la app | TI — y si te escribe por soporte, es ticket **Tipo A** |
| Un negocio no avanzó de nivel | TI: es un bug conocido |
| El cliente quiere retirar o reclamar | **No es tu ciclo.** Retiros y UNE van por otra vía (INV-11) |

---

## Estado y verificación

**Estado:** 🟡 redactado · 2026-08-18
**Falta para publicar:** verificar los cuatro ejercicios en el portal; completar los nombres de contacto; validación escrita de Monific.
