# R01 · Ruta de incorporación · Ventas Solicitantes

> **Para:** A.A.S. (Agente de Atención a Solicitantes) que empieza.
> **Duración:** media jornada de lectura + práctica en el portal.
> **Al terminar deberías poder:** llevar un solicitante del formulario a la campaña publicada sin preguntar cada paso.

---

## Antes de empezar

Necesitas tres cosas. Si te falta alguna, resuélvela primero — no avances sin ellas:

- [ ] Usuario activo en el portal **48427391**
- [ ] Correo y calendario conectados → **P01**
- [ ] Acceso a la carpeta de Drive de expedientes

---

## Bloque 1 · Los cimientos (60 min)

| # | Lee | Por qué |
|---|---|---|
| 1 | **A07 · Los cuatro objetos y qué vive en cada uno** | Sin esto, nada de lo demás se sostiene |
| 2 | Manual de HubSpot, páginas **1 a 4** | Entrar, vocabulario, las cinco reglas |
| 3 | **S01 · La frontera de cálculo** | Por qué los montos no se corrigen en HubSpot |

**Ejercicio 1.** Abre un negocio de solicitante existente. Identifica: el contacto asociado, la empresa (si la hay), la etapa, y una propiedad que llegó por integración y otra que capturó una persona. Usa **P09** para distinguirlas.

---

## Bloque 2 · Tu proceso (90 min)

| # | Lee | Por qué |
|---|---|---|
| 4 | **A04 · Propiedades obligatorias por etapa · Solicitantes** | Es tu hoja de referencia diaria. Imprímela |
| 5 | Manual de HubSpot, página **8** — Tu proceso · Ventas Solicitantes | El recorrido completo |
| 6 | **P05 · Buscar por correo antes de crear un contacto** | **Eres del único equipo que puede crear contactos.** Con eso viene la responsabilidad de no duplicar |
| 7 | **P04 · Cambiar pipeline o etapa sin perder el historial** | Vas a mover negocios todos los días |

**Ejercicio 2.** Recorre en el portal las **seis etapas** del pipeline de Solicitantes. En cada una, abre "ver todas las propiedades" y localiza las obligatorias de A04. Anota las que **no encuentres** — es información útil, no un error tuyo.

---

## Bloque 3 · El día a día (60 min)

| # | Lee | Por qué |
|---|---|---|
| 8 | **P02 · Crear una vista guardada con filtros Y / O** | Tu vista de "atorados" es lo que evita que se te caiga un caso |
| 9 | **P03 · Registrar una actividad externa** | Si no lo registras, no existe |
| 10 | Manual de HubSpot, páginas **5 y 6** | Buscar, crear, anotar, encontrar tu trabajo |

**Ejercicio 3.** Crea la vista `Solicitantes · Atorados en firma · Míos`: etapa = Proceso de firma, propietario = tú, última actividad anterior a hace 7 días.

**Ejercicio 4.** Registra una actividad externa de práctica en un contacto de prueba, con fecha retroactiva. Verifica que quedó con tu nombre.

---

## Bloque 4 · Lo que hoy no funciona (30 min) — no te lo saltes

Esta es la parte que evita que pases una semana peleándote con el sistema creyendo que lo estás usando mal.

| Qué | Impacto en tu trabajo |
|---|---|
| 🔴 **El formulario sigue siendo un Google Form** | Los solicitantes no entran por HubSpot. El árbol de viabilidad lo aplicas tú |
| 🔴 **CON-021 · WF-008 con reinscripción apagada** | Si el comité aprueba **después** de entrar a Evaluación —el caso normal— **el negocio no avanza solo**. Muévelo a mano |
| 🔴 **CON-037 · WF-014 desactivado** | Las solicitudes rechazadas **no generan** la tarea de carta de rechazo. Créala tú |
| 🔴 **CON-026 · WF-010** | La notificación interna se envía a **todos los contactos asociados**, incluido el solicitante. Hasta que se corrija, **revisa antes de disparar comunicaciones de Evaluación** |
| 🔴 **El gate doble a Cierre Ganado no está probado** | Verifica a mano que `Contrato firmado = Sí` **y** que Admin confirmó la campaña publicada |
| 🔴 **Ninguna de las 4 cartas institucionales está implementada** | Se preparan desde las plantillas de Drive |
| ⚠️ **Ruta de Scoring está obsoleta** | No la uses. Viabilidad = ¿tiene inmueble para garantía? |

**Ejercicio 5.** Localiza en Drive las tres carpetas de cartas: aprobados, con observaciones, rechazados. Abre una de cada una.

---

## Los tiempos que te van a medir

| Momento | SLA |
|---|---|
| Primer contacto humano tras solicitud | **≤ 24 h hábiles** |
| Validación PLD | ≤ 48 h hábiles *(Compliance)* |
| Revisión legal | ≤ 72 h hábiles *(Legal)* |
| Respuesta al solicitante tras análisis | **≤ 24 h hábiles** |
| Proceso de firma ante notario | 15 días hábiles |
| Seguimiento del expediente | Días **2, 3, 7 y 15** |

**Cadencias:** máx. 2 intentos activos de contacto · máx. 1 llamada por día · WhatsApp informativo · **email de pausa = stop total**.

🚨 **Alerta roja** — se congela el caso y decide Dirección: lead con documentos completos sin respuesta > 72 h · incumplimiento de SLA dos veces en el mes · solicitud viable congelada sin razón · comunicación contradictoria al solicitante · riesgo PLD sin resolución clara.

---

## A quién preguntar

| Si pasa esto | Pregunta a |
|---|---|
| Un campo no existe o algo automático no pasó | Administrador del portal |
| Un monto o fecha no coincide con Admin | TI, por Notion |
| Duda sobre viabilidad de un caso intermedio | Tu líder de área |
| Un caso necesita Legal | Ops — **Legal y Finanzas no se autoasignan casos** |

---

## Estado y verificación

**Estado:** 🟡 redactado · 2026-08-18
**Falta para publicar:** completar los nombres de la tabla de contactos; verificar que los cinco ejercicios se puedan ejecutar en el portal tal como están escritos; validación escrita de Monific.
