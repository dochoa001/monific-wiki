# Base de conocimiento operativa · Monific

Portal 48427391 · Versión 1 · 2026-08-18

> **Para qué existe:** que Monific pueda capacitar a alguien nuevo **sin Black & Orange**. Si un artículo no sirve para eso, no cumple.
> **Qué cubre:** el bloque **B09** del requerimiento contractual — *"entregar manuales, guías y videos"*. Es un entregable con criterio de cierre, y el criterio incluye validación escrita de Monific.

---

## La regla que gobierna todo lo demás

**Ningún artículo se publica sin verificarse contra el portal.**

Esta cuenta ya pagó el precio de lo contrario: 26 de las 31 propiedades comprometidas no existían cuando se auditó. Documentación redactada rápido y sin comprobar es exactamente lo que produjo el requerimiento formal; repetirla dentro del remedio sería el peor resultado posible.

En la práctica: se escribe el artículo, se ejecuta el procedimiento en el portal siguiendo el artículo al pie de la letra, y se corrige lo que no coincida. **Si un campo no existe todavía, el artículo no se publica** — se marca 🔴 bloqueado y se escala.

Cada artículo termina con un bloque **Estado y verificación** que dice exactamente en qué punto está y qué falta para publicarlo.

---

## Cómo está organizada

| Familia | Qué es | Cuándo se usa | Formato final sugerido |
|---|---|---|---|
| **01 · Ayudas de trabajo** | Tablas de consulta rápida | **Mientras** se opera, con el cliente esperando | Una página, PDF imprimible |
| **02 · Procedimientos** | Pasos concretos para hacer una cosa | Se sigue una vez, se olvida, se vuelve a necesitar en tres meses | Guía corta con capturas |
| **03 · Documentación de sistema** | Cómo está construido el portal | Para TI y para quien administre HubSpot | Hoja de cálculo derivada del master |
| **04 · Rutas de incorporación** | Orden de lectura por rol | El primer día de alguien nuevo | Lista de enlaces |

---

## 01 · Ayudas de trabajo

| # | Artículo | Para quién | Estado |
|---|---|---|---|
| A01 | Categorías y subcategorías de TI | Atención a cliente | 🟡 Redactado · falta verificar el dropdown en portal |
| A02 | Semáforo de mora | Cobranza, Finanzas | 🔴 **Bloqueado** · tasas y aforo en disputa |
| A03 | Los cinco tipos de ticket A–E | Atención a cliente | 🟡 Redactado · falta verificar |
| A04 | Propiedades obligatorias por etapa · Solicitantes | Ventas Solicitantes | 🟡 Nombres internos sin confirmar (gate T1) |
| A05 | Propiedades obligatorias por etapa · Inversionistas | Ventas Inversionistas | 🟡 Nombres internos sin confirmar (gate T1) |
| A06 | Línea de tiempo de una reclamación UNE | Dirección, Legal | 🔴 **Bloqueado** · los seis flujos no están implementados |
| A07 | Los cuatro objetos y qué vive en cada uno | Todo el equipo | ✅ Verificable sin dependencias |

## 02 · Procedimientos

| # | Artículo | Estado |
|---|---|---|
| P01 | Conectar correo y calendario | ✅ Verificable sin dependencias |
| P02 | Crear una vista guardada con filtros Y / O | ✅ Verificable sin dependencias |
| P03 | Registrar una actividad externa | ✅ Verificable sin dependencias |
| P04 | Cambiar pipeline o etapa sin perder el historial | ✅ Verificable sin dependencias |
| P05 | Buscar por correo antes de crear un contacto | ✅ Verificable sin dependencias |
| P06 | Escalar un ticket a TI | 🟡 Depende de WF-046 y del folio automático |
| P07 | Cerrar un ticket con resolución | 🟡 Una propiedad de la etapa no existe |
| P08 | Registrar una reclamación UNE completa | 🔴 **Bloqueado** · pipeline UNE no acreditado |
| P09 | Auditar el historial de una propiedad | ✅ Verificable sin dependencias |

## 03 · Documentación de sistema

| # | Artículo | Para quién | Estado |
|---|---|---|---|
| S01 | La frontera de cálculo | Todo el equipo + TI | ✅ Doctrina cerrada |
| S02 | Diccionario de propiedades | TI, administrador del portal | 🟡 Propuesta hasta cerrar el gate T1 |
| S03 | Catálogo de workflows | Administrador del portal | 🟡 32 workflows del portal sin mapear |
| S04 | Contrato técnico de la integración | TI de Monific | 🟡 Gate T1–T7 abierto |
| S05 | Configuración de los canales | Administrador del portal | 🔴 Dos canales con fallas conocidas |
| S06 | Roles, permisos, equipos y rotación por horario | Administrador del portal | 🔴 Segregación de ARI pendiente |
| S07 | Lo que el portal no puede hacer | Todo el equipo | ✅ Restricción confirmada |

## 04 · Rutas de incorporación

| # | Ruta | Duración estimada |
|---|---|---|
| R01 | Ventas Solicitantes | Media jornada + práctica |
| R02 | Ventas Inversionistas | Media jornada + práctica |
| R03 | Cobranza | Una jornada |
| R04 | Atención a cliente | Una jornada |
| R05 | Dirección y supervisión | Dos horas |

Y el mantenimiento de la propia base: **00 Como se mantiene esta base**.

---

## Lo que esta base **no** es

**No es la biblioteca de conocimiento de HubSpot.** Son dos cosas distintas y conviene no mezclarlas:

- **Esta base (A)** es interna: cómo usa Monific HubSpot para su proceso.
- **La biblioteca de HubSpot (B)** es de cara al cliente: los artículos con los que el E.A.C. responde los tickets **Tipo B** (información y dudas de inversión).

⚠️ **Hueco abierto.** El master de Servicio define la ruta del Tipo B como *"el E.A.C. responde con apoyo de la biblioteca de conocimiento de HubSpot y fragmentos"*. Si esa biblioteca está vacía, **una de las cinco rutas de atención no funciona como está diseñada** y el agente improvisa cada respuesta. No está verificado cuántos artículos tiene hoy. Es un hueco de configuración, no de documentación, y condiciona la sesión 06.

**No sustituye la documentación de HubSpot.** Lo genérico del producto (ordenar columnas, exportar, app móvil, secuencias) está enlazado en el *Manual de HubSpot · Monific*, página 14. No se duplica: HubSpot mantiene su documentación actualizada y nosotros no podríamos seguirle el paso.

---

## Prioridad de trabajo

El orden no es por facilidad, es por consecuencia de no tenerlo.

| # | Qué | Por qué primero |
|---|---|---|
| 1 | **Verificar la biblioteca de conocimiento de HubSpot** | Si está vacía, la ruta del Tipo B no funciona. Es revisión, no redacción |
| 2 | **A06 + P08 · UNE** | Único proceso con riesgo regulatorio externo |
| 3 | **A01 · Categorías de TI** | Sin la ayuda de trabajo, el escalamiento se enseña pero no se ejecuta |
| 4 | **S01 · La frontera de cálculo** | Un artículo corto que previene desconfianza en el dato en tres procesos a la vez |
| 5 | **A02 + A04 + A05** | Las tres tablas que evitan quedarse atorado a media captura |
| 6 | **S02 + S03** | Extracción desde los masters, con verificación |
| 7 | **P01–P09** | En el orden en que se van dando las sesiones |
| 8 | **R01–R05** | Al final, cuando ya hay a qué apuntar |

---

## Pendientes de decisión de Monific

Ninguno bloquea la redacción; todos bloquean la publicación.

1. ¿Cuántos artículos tiene hoy la biblioteca de conocimiento de HubSpot?
2. ¿Esta base vive en HubSpot, en Drive o en la herramienta que Monific prefiera?
3. ¿Quién de Monific es dueño de mantenerla cuando cierre el proyecto?
4. ¿Los videos cortos por procedimiento entran en el alcance de B09 o son alcance nuevo?
5. Los **copies aprobados** de las comunicaciones, las **plantillas de WhatsApp** aprobadas en Meta y las **definiciones abiertas** de tres dropdowns siguen del lado de Monific.

---

## Estado y verificación

**Estado:** borrador de estructura · 2026-08-18
**Fuentes:** masters de implementación unificados (Comercial, Cobranza, Servicio/UNE), Maestro Operativo del 2026-07-31, auditoría por API del portal 48427391 (2026-06-17), requerimiento formal, temario de las 9 sesiones.
**Falta para publicar:** validación escrita de Monific — es criterio de cierre del bloque B09.
