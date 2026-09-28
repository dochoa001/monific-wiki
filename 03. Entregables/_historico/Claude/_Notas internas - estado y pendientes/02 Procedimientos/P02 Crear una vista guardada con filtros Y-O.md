# P02 · Crear una vista guardada con filtros Y / O

> **Para quién:** todo el equipo.
> **Por qué cuesta:** la lógica booleana es lo más difícil del CRM básico. No es que HubSpot sea raro — es que "y" y "o" en español cotidiano no significan lo mismo que en un filtro.

---

## Primero, la trampa del idioma

Cuando alguien dice *"quiero ver los negocios de Guillermo y de María"*, casi siempre quiere decir:

> negocios **cuyo propietario sea Guillermo** ***O*** **cuyo propietario sea María**

Si lo pones con **Y**, pides negocios cuyo propietario sea Guillermo **y al mismo tiempo** María. Eso no existe, y la vista sale vacía.

**La regla mental:**

| Quieres… | Usa |
|---|---|
| **Más** resultados (varias opciones válidas del **mismo** campo) | **O** |
| **Menos** resultados (varias condiciones que deben cumplirse a la vez, en campos **distintos**) | **Y** |

Prueba rápida: **si el filtro es sobre el mismo campo, casi siempre es O.**

---

## El procedimiento

1. Abre el objeto (Contactos, Negocios, Tickets).
2. **Todas las vistas** → **Agregar vista** → **Crear vista nueva**.
3. Ponle nombre. Ver la convención de abajo.
4. **Filtros avanzados**.
5. Agrega la primera condición.
6. Para agregar otra:
   - **Y** → botón *"Y"* dentro del mismo grupo
   - **O** → botón *"Agregar grupo de filtros"*. **Cada grupo se une al anterior con O**
7. **Guardar**, y elige quién la ve: solo yo · mi equipo · todos.

> **Lo único que hay que recordar de la interfaz:** dentro de un grupo, las condiciones se unen con **Y**. Entre grupos, con **O**.

---

## Tres ejemplos de Monific, resueltos

### 1 · "Mis solicitantes atorados en Evaluación"

```
GRUPO 1
  Etapa del negocio  es  Evaluación
  Y
  Propietario        es  yo
  Y
  Fecha de última actividad  es anterior a  hace 7 días
```

Un solo grupo, todo con **Y**. Tres condiciones sobre campos distintos que deben cumplirse a la vez.

### 2 · "Inversionistas en riesgo de congelarse"

```
GRUPO 1
  Nivel de registro  es  3
  Y
  Fecha de creación de negocio  es anterior a  hace 10 días
  Y
  Fecha de primera inversión  es desconocido
```

Tiene CLABE, lleva más de 10 días y nunca invirtió. **A los 15 días se congela solo** → esta vista es la lista de a quiénes llamar antes de que eso pase.

### 3 · "Tickets que necesitan atención de dirección"

```
GRUPO 1
  Tipo de ticket  es  D – Queja / Inconformidad

O

GRUPO 2
  Tipo de ticket  es  E – Reclamación formal UNE
```

Dos grupos unidos con **O**. Aquí el error clásico sería poner las dos condiciones en un grupo con **Y**: ningún ticket es D y E al mismo tiempo, y la vista saldría vacía.

---

## Cómo nombrarlas

Sin convención, en tres meses hay cuarenta vistas llamadas "Mis cosas" y nadie sabe cuál es cuál.

**Formato sugerido:** `[Área] · [Qué muestra] · [Filtro clave]`

| Bien | Mal |
|---|---|
| `Cobranza · Mora > 15 días · Todos` | `Vista 3` |
| `Solicitantes · Atorados en firma · Míos` | `Guillermo` |
| `ATC · Tickets D y E · Abiertos` | `Urgentes` |

---

## Vista o lista: no son lo mismo

Se confunden todo el tiempo:

| | **Vista guardada** | **Lista** |
|---|---|---|
| Qué es | Una forma de ver la tabla | Un grupo de registros como objeto propio |
| Para qué | Trabajar el día a día | Enviar correos de marketing, alimentar workflows |
| Vive en | La pantalla del objeto | Menú *Listas* |

**Para tu operación diaria quieres una vista.** Las listas de marketing tienen además un efecto secundario en Monific: **consumen cupo de contactos de marketing**, y el límite es de **7,000 al mes conjunto** entre Solicitantes e Inversionistas. No crees listas de marketing para organizar tu trabajo.

---

## Estado y verificación

**Estado:** ✅ verificable sin dependencias · 2026-08-18
**Nota:** funcionalidad estándar de HubSpot. Lo específico de Monific son los tres ejemplos y la advertencia de cupo.

**Falta para publicar:**

1. Ejecutar los tres ejemplos en el portal y capturar el resultado.
2. Confirmar que los nombres de propiedad usados en los ejemplos coinciden con los del portal.
3. Acordar la convención de nombres con los líderes de área.
4. Validación escrita de Monific.

Referencia de HubSpot: [Crear y administrar vistas guardadas](https://knowledge.hubspot.com/es/records/create-and-manage-saved-views)
