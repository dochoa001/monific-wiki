# P05 · Buscar por correo antes de crear un contacto

> **Para quién:** todo el equipo.
> **Cuánto toma:** 15 segundos. Deshacer un duplicado toma media hora.

Este es el procedimiento anti-duplicados, y es el más corto de toda la base.

---

## La regla

> **El correo es lo que HubSpot usa para no duplicar. Si buscas por nombre, vas a crear un duplicado.**

"Miguel Ángel Rodríguez", "Miguel A. Rodríguez" y "miguel rodriguez" son tres personas distintas para el buscador. `miguel@empresa.com` es una sola.

---

## El procedimiento

1. En la **búsqueda de arriba** de HubSpot, escribe el **correo completo**.
2. ¿Aparece? → **Úsalo.** No crees nada.
3. ¿No aparece? → prueba con **el dominio** de la empresa (`@empresa.com`). Puede que la persona esté registrada con otro correo del mismo dominio, o que exista la empresa aunque no la persona.
4. ¿Sigue sin aparecer? → **antes de crear, revisa la regla 1** de abajo.

---

## Regla 1 · Casi nadie crea contactos a mano

Los contactos entran solos por:

- la página de Monific,
- el formulario de solicitantes,
- el chat,
- la integración con Admin Monific.

**La única excepción es el equipo de Solicitantes**, que sí puede crear un solicitante si no existe.

**Si eres de cualquier otro equipo y un contacto no existe, eso es un síntoma, no una tarea.** Significa que algo no entró como debía. Avisa en vez de crearlo: crear el contacto a mano tapa el problema y además genera un registro que la integración va a intentar crear otra vez.

---

## Si tienes que crear uno (equipo Solicitantes)

| Campo | Regla |
|---|---|
| **Correo** | Obligatorio y en minúsculas. Es la llave |
| Nombre y apellido | Separados, no en un solo campo |
| Teléfono | Con lada |

**No crees la empresa aparte** si el sistema puede asociarla por dominio. Y **nunca** captures a la misma persona dos veces como "inversionista" y como "representante legal": Monific estipula que **un usuario tiene un solo rol**.

---

## Si ya encontraste un duplicado

No lo borres. Los duplicados se **fusionan**, y la fusión conserva el historial de ambos.

1. Abre uno de los dos registros.
2. Menú de acciones del registro → **Fusionar**.
3. Elige cuál es el registro principal — **el que tenga más historial de actividad**, no el más nuevo.
4. Revisa qué valores se conservan antes de confirmar.

⚠️ **La fusión no se puede deshacer.** Si dudas cuál es el principal, pregunta antes.

---

## Por qué esto importa más de lo que parece

El log de la integración registró **errores 409 recurrentes por duplicados de contacto**. Cada duplicado que se crea a mano es un contacto más que la integración va a chocar, y un historial partido en dos que nadie va a poder leer completo.

También pesa en el cupo: el portal tiene un límite **conjunto de 7,000 contactos de marketing al mes** entre Solicitantes e Inversionistas. Los duplicados consumen cupo real.

---

## Estado y verificación

**Estado:** ✅ verificable sin dependencias · 2026-08-18
**Fuente:** Maestro Operativo (2026-07-31); decisión INV-06; log de la integración (2026-06-30 a 2026-07-29); Documento API, regla de upsert por email.

**Falta para publicar:**

1. Ejecutar el procedimiento en el portal y capturar las tres pantallas (búsqueda, resultado, fusión).
2. Confirmar qué equipos tienen permiso de crear contactos en la configuración real del portal.
3. Validación escrita de Monific.
