# P06 · Escalar un ticket a TI

> **Para quién:** Ejecutivo de Atención a Clientes (E.A.C.)
> **Cuándo:** un ticket **Tipo A** que no pudiste resolver en primer nivel.

## Lo que hay que entender antes

**TI no trabaja en HubSpot. TI trabaja en Notion.**

> *"HubSpot servirá como bitácora y seguimiento del ticket, ya que la interacción de TI no se realizará con HubSpot sino con Notion."*

Eso significa que **el escalamiento tiene dos mitades y las dos son tuyas**: registrar en HubSpot y avisar en Notion. Si haces solo una, el ticket existe en un sistema y no en el otro.

**Y una cosa más:** el ticket **sigue siendo tuyo**. No hay traspaso. *"Para ningún tipo de ticket ocurre un HandOff por parte del E.A.C."* TI resuelve el problema técnico; tú sigues siendo la cara ante el cliente hasta el cierre.

---

## El procedimiento

### 1 · Mueve el ticket a "Escalado a TI"

Es manual. Al entrar, HubSpot debería generar solo:

- el **Folio ticket TI** → formato `TI-YYYY-MM-NNN`
- la **Fecha y hora de escalamiento**

### 2 · Llena los cuatro campos obligatorios

| Campo | Qué poner |
|---|---|
| **Descripción del problema técnico** | Ver abajo cómo escribirla |
| **Categoría ticket TI** | De la tabla de **A01** |
| **Subcategoría ticket TI** | De la tabla de **A01** |
| **Estatus ticket TI** | *Iniciado* |

**Opcionales, pero úsalos:** Notas de seguimiento TI · Responsable TI asignado.

### 3 · Avisa a TI en Notion

Incluye **el folio TI generado en HubSpot**. Es lo único que permite cruzar los dos sistemas después.

### 4 · Avisa al cliente

Debería salir solo, por WhatsApp o correo según el canal de origen:

> *"Tu caso ha sido derivado a nuestro equipo técnico especializado. Te mantendremos informado sobre el avance. Folio: [Folio ticket TI]."*

**Verifica que salió.** Si no, mándalo tú.

### 5 · Da seguimiento cada 8 horas

HubSpot debería crear una tarea recurrente cada **8 horas** mientras el ticket siga en esta etapa. En cada vuelta: valida el avance con TI **y** actualiza al cliente.

**La comunicación proactiva con el cliente no es opcional.** El principio de ATC es explícito: *"Si el volumen supera la capacidad, se responde primero y se profundiza después. **Nunca silencio**."*

### 6 · Cierra el círculo

Cuando TI registra la solución:

1. `Estatus ticket TI` = **Resuelto**
2. **Confirma la solución con el cliente** ← este paso no se salta
3. Si el cliente confirma → mueve a **Cerrado** → ver **P07**

---

## Cómo escribir la descripción del problema técnico

Es lo que decide si TI resuelve en una vuelta o en cuatro.

**Tres cosas, siempre:**

1. **Qué esperaba el usuario que pasara**
2. **Qué pasó en realidad** — mensaje de error textual si lo hay
3. **Cómo reproducirlo** — dispositivo, sistema, pasos

Malo:

> *No puede entrar a la app.*

Bueno:

> *Usuario con correo `maria@ejemplo.com`. Intenta iniciar sesión en la app de Android (Samsung, Android 14). Escribe correo y contraseña, presiona "Entrar" y la pantalla se queda cargando indefinidamente. No aparece mensaje de error. Ya reinició la app y el teléfono. Le funciona desde el navegador web con las mismas credenciales. Empezó ayer 17-ago.*

El segundo cuesta dos minutos y ahorra tres días.

---

## Los relojes de esta etapa

| Reloj | Plazo | Qué pasa al vencer |
|---|---|---|
| Seguimiento del E.A.C. | Cada **8 h** | Tarea recurrente automática |
| Sin resolución de TI | **1 h** en atención | Escala a D.C. |
| **Sin resolución** | **48 h** | **Escala a D.C.** |

⚠️ El tiempo que un ticket pasa en esta etapa es **la métrica clave de desempeño de TI**. Por eso importa mover el ticket cuando de verdad escala, y no antes.

---

## 🔴 Lo que hoy no funciona como está escrito

| Problema | Impacto |
|---|---|
| **El folio.** La regla del workflow dice generar `TI-YYYY-MM` — **sin el consecutivo `NNN`**, que sí aparece en la especificación de la propiedad. Si se implementa así, **todos los tickets de un mismo mes comparten folio** | Deja de servir para cruzar con Notion |
| **Ninguno de los 9 workflows de Servicio está verificado.** Los nueve están en amarillo: existen, no están probados | Nada de lo automático está garantizado |
| **No todos los de TI tienen usuario en HubSpot.** Al momento de la revisión, solo Jesús lo tenía | Por eso `Responsable TI asignado` es texto libre, no un selector |

**Regla práctica mientras tanto:** después de escalar, **verifica a mano** que el folio se generó, que el aviso al cliente salió y que la tarea de 8 horas apareció. Si algo falta, hazlo tú y repórtalo.

---

## Estado y verificación

**Estado:** 🟡 redactado · 2026-08-18
**Fuente:** Master de Implementación Servicio/UNE, hoja *"Pipeline Servicio"*, etapa *Escalado a TI*; Maestro Operativo, fichas WF-046 a WF-048.
**Workflows implicados:** WF-046 (escalar a TI) · WF-047 (propiedades de entrada) · WF-048 (vencimiento 48 horas).

**Falta para publicar:**

1. Ejecutar un escalamiento real de punta a punta y capturar cada pantalla.
2. 🔴 **Corregir el formato del folio** a `TI-YYYY-MM-NNN` con consecutivo real, y decidir dónde se genera — HubSpot no puede generar series por sí solo sin Data Hub (ver **S07**). Es el mismo problema que bloquea el folio UNE.
3. Verificar que la tarea recurrente de 8 horas efectivamente se cree.
4. Verificar que la notificación al cliente salga con el folio renderizado, no con el token en crudo.
5. Confirmar con Jesús Torres el mapeo categoría → responsable de TI.
6. Validación escrita de Monific.
