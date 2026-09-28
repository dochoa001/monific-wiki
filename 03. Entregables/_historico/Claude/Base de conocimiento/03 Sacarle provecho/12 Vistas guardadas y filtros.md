# 12 · Vistas guardadas y filtros

**Lo que convierte una base de miles de registros en tu lista de trabajo de hoy.**

---

## Primero, la trampa del idioma

Cuando dices *"quiero ver los negocios de Guillermo y de María"*, en realidad quieres decir:

> negocios cuyo propietario sea Guillermo **O** cuyo propietario sea María

Si lo pones con **Y**, estás pidiendo negocios cuyo propietario sea Guillermo **y al mismo tiempo** María. Eso no existe, y la vista sale vacía.

**La regla:**

| Quieres… | Usa |
|---|---|
| **Más** resultados — varias opciones del **mismo** campo | **O** |
| **Menos** resultados — condiciones que deben cumplirse a la vez, en campos **distintos** | **Y** |

Atajo mental: **si filtras el mismo campo, casi siempre es O.**

---

## Cómo se crea

1. Abre el objeto (Contactos, Negocios, Tickets).
2. **Todas las vistas → Agregar vista → Crear vista nueva**.
3. Ponle nombre.
4. **Filtros avanzados**.
5. Agrega la primera condición.
6. Para agregar otra:
   - **Y** → botón *"Y"* dentro del mismo grupo
   - **O** → **Agregar grupo de filtros**
7. **Guardar**, y elige quién la ve.

> Lo único que hay que recordar: **dentro de un grupo las condiciones se unen con Y. Entre grupos, con O.**

---

## Las vistas que vale la pena tener

### La más importante: lo que se te está atorando

```
Propietario                es              yo
Y
Etapa                      es              (activa, no cerrada)
Y
Fecha de última actividad  es anterior a   hace 7 días
```

Ábrela cada mañana. Es donde se pierden los casos.

### Inversionistas en riesgo de congelarse

```
Nivel de registro            es              3
Y
Fecha de creación            es anterior a   hace 10 días
Y
Fecha de primera inversión   es desconocido
```

Tiene cuenta, lleva más de 10 días y nunca invirtió. **Es la lista de a quién llamar hoy.**

### Casos que necesitan a Dirección

```
GRUPO 1:  Tipo de ticket   es   D – Queja / Inconformidad
O
GRUPO 2:  Tipo de ticket   es   E – Reclamación formal UNE
```

Dos grupos unidos con **O**. Aquí el error clásico sería ponerlo con Y: ningún ticket es D y E a la vez, y saldría vacío.

### Mi cartera por valor

```
Propietario   es   yo
Y
Etapa         es   (activa)
```
Y luego **ordena por monto**, de mayor a menor. Te dice por dónde empezar.

---

## Ponles nombres que se entiendan

Sin convención, en tres meses hay cuarenta vistas llamadas "Mis cosas".

**Formato:** `[Área] · [Qué muestra] · [Filtro]`

| Bien | Mal |
|---|---|
| `Cobranza · Mora +15 días · Todos` | `Vista 3` |
| `Solicitantes · Atorados en firma · Míos` | `Guillermo` |
| `INV · Con saldo sin invertir · Míos` | `Urgentes` |

---

## Trucos

**Fija tus vistas.** Las que uses a diario, fíjalas para que aparezcan siempre como pestañas arriba.

**Comparte las que sirvan al equipo.** Al guardar, elige *"Mi equipo"*. Así todos miran el mismo tablero y nadie construye la suya distinta.

**Cambia las columnas.** Botón **Editar columnas**: quita las que no miras y pon las que sí. Una vista con las columnas correctas se lee de un vistazo.

**Vista de tablero.** Para negocios y tickets, cambia a vista de tablero y arrastra tarjetas entre etapas. Es más rápido que abrir cada registro.
