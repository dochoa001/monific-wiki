# R05 · Ruta de incorporación · Dirección y supervisión

> **Para:** Dirección, líderes de área y quien tenga que responder por el estado del CRM.
> **Duración:** dos horas.
> **Al terminar deberías poder:** saber qué números son confiables, cuáles no, y qué decisiones están esperando por ti.

---

## Los cuatro artículos que hay que leer

| # | Lee | Por qué |
|---|---|---|
| 1 | **S01 · La frontera de cálculo** | Explica por qué "el CRM está mal" casi nunca es la respuesta correcta |
| 2 | **S07 · Lo que el portal no puede hacer** | Evita pedir lo que ya se sabe que no se puede, y explica por qué varias cosas van por API |
| 3 | **S03 · Catálogo de workflows** | El estado real de las automatizaciones |
| 4 | **A06 · Línea de tiempo de una reclamación UNE** | El único proceso con riesgo regulatorio externo |

Todo lo demás es consulta.

---

## El estado en cinco números

| Indicador | Valor | Qué significa |
|---|---|---|
| Workflows en el portal | **96** | De los cuales **32 no mapean a ningún master** |
| Workflows verificados | **0 de 70** | 41 pendientes de prueba, 29 con error declarado |
| Propiedades comprometidas creadas | **5 de 31** | **26 no existían** al corte de la auditoría |
| Propiedades de Negocio vacías | **383 de 402** | El portal arrastra campos muertos |
| Workflows que comunican al cliente | **9 de 96 (9 %)** | La mayoría de la automatización es interna |

**Lectura de conjunto:** no falta configuración en general — **hay exceso**. Faltan los campos concretos que el diseño necesita, mientras el portal arrastra deuda.

---

## Qué números puedes usar hoy y cuáles no

| Puedes confiar en | Porque |
|---|---|
| Conteos de registros y etapas | Vienen del propio CRM |
| Tiempos de primera respuesta y resolución de tickets | Los cronometra HubSpot |
| Actividad registrada | Es lo que la gente capturó |

| **No** confíes todavía en | Porque |
|---|---|
| 🔴 **El embudo de nivel de registro** | Hay cuentas activas que no llegan a nivel 4, y la app parece saltar del nivel 1 al 3 |
| 🔴 **Cualquier reporte de comunicaciones al cliente** | 77 de 81 comunicaciones están en estado "Crear". La matriz es **especificación, no evidencia** |
| 🔴 **Reportes sobre motivos de congelamiento** | El campo es texto libre; los valores no se pueden contar |
| ⚠️ **Métricas de actividad** | Si el equipo no registra WhatsApp y llamadas externas, el dato subestima el trabajo real |
| ⚠️ **Reportes basados en propiedades de monto** | Hay **17 propiedades de monto solapadas**; hay que definir la canónica primero |

---

## Las decisiones que están esperando por Dirección

Ninguna es técnica. Todas bloquean trabajo.

| # | Decisión | Qué desbloquea |
|---|---|---|
| 1 | **Tasa moratoria, comisión por pago tardío y aforo mínimo**, confirmados contra el contrato de financiamiento | **A02** · toda la ayuda de trabajo de cobranza |
| 2 | **Cuál cadena de escalamiento de cobranza aplica** — día 15/16/30/61, o semana 1-2-3 | **A02** · la operación con el despacho ARI |
| 3 | **Quién calcula el folio UNE y los 30 días hábiles** | **A06 · P08** · el proceso regulatorio completo |
| 4 | **Respaldo nominal del Director Comercial** | UNE deja de depender de una sola persona |
| 5 | **Qué se hace con los 32 workflows sin mapear**: adoptar, archivar o eliminar | **S03** |
| 6 | **Las opciones de tres dropdowns** de cobranza | 3 de las 26 propiedades faltantes |
| 7 | **Dónde vive esta base y quién la mantiene** | Que no se vuelva falsa en seis meses |
| 8 | Copies aprobados y **plantillas de WhatsApp aprobadas en Meta** | Buena parte de la comunicación automática |

---

## Los tres riesgos que conviene tener presentes

**1 · Concentración de roles.**
Una persona es Director Comercial, responsable de UNE, nivel 2 y nivel 3 del escalamiento de atención. En un equipo de ~11 personas es entendible; en un proceso con plazo regulatorio, es un punto único de fallo.

**2 · Exposición del proveedor en flujos productivos.**
Hay nodos de workflows productivos que notifican a correos personales de B&O, **incluida una persona que ya no trabaja ahí**. Es el bloque B16 y es un tema de confidencialidad, no de cortesía.

**3 · Visibilidad cruzada del despacho externo.**
ARI está dentro del equipo Legal compartido, lo que le da visibilidad del pipeline interno. Es el bloque B14.

---

## Cómo leer un reporte de estado sin que te lo cuenten mal

Tres preguntas que separan avance real de avance aparente:

**1 · ¿Está configurado o está verificado?**
> *"ON/OFF es el estado observado en el inventario. NO es el estado de validación."*

Estar encendido, tener captura o aparecer en un inventario **no cierra nada**. Lo que cierra es: URL o ID del workflow, export posterior a la corrección, captura fechada de trigger y acciones, **caso de prueba con dato de entrada y resultado real**, y **validación escrita de Monific**.

**2 · ¿Hay caso de prueba reproducible?**
Si la evidencia es una captura de que algo existe, no es evidencia de que funciona.

**3 · ¿Esto es especificación o es implementación?**
La matriz de comunicaciones es el ejemplo: 81 piezas diseñadas, 77 en estado "Crear". Diseñar no es implementar.

---

## Lo que sí está en buen estado

Para que el panorama no quede sesgado:

- ⭐ **Servicio / ATC es el único proceso sin errores acreditados.** Sus 9 workflows están pendientes de prueba, ninguno tiene defecto probado. **Es el bloque que conviene cerrar primero**, para demostrar el método antes de entrar a Cobranza.
- **Existe una integración operativa desde marzo de 2026** que sincroniza registro, compra y venta de participaciones. Lo pendiente es la ampliación a Tickets y Proyecto, no construir de cero.
- **El contrato técnico existe** y las decisiones canónicas están tomadas y escritas.

---

## Por qué la integración tardó, en una línea

**B&O nunca tuvo acceso al código porque una auditoría de la CNBV obligaba a Monific a certificar el acceso a terceros antes de otorgarlo.** No fue desidia del proveedor ni negativa arbitraria del cliente: fue una restricción regulatoria. Desde junio de 2026 el modelo es de **asesoría técnica**: B&O orienta, TI de Monific ejecuta y conserva el control de accesos, repositorios y despliegues.

Conviene tenerlo claro porque cambia quién puede desbloquear qué: **más de la mitad de las acciones del plan de corrección (27 de 51) son de TI de Monific**, no del proveedor.

---

## Estado y verificación

**Estado:** 🟡 redactado · 2026-08-18
**Fuente:** auditoría por API del portal 48427391 (2026-06-17); Maestro Operativo (2026-07-31); análisis de cierre del 2026-08-03; requerimiento formal; Plan Único de Corrección v3.

⚠️ **Una nota de honestidad:** la clasificación de los hallazgos por naturaleza —cuáles son defectos del proveedor, cuáles son limitación de plataforma y cuáles son alcance nuevo— **es postura de B&O y no está validada por Monific**. Este artículo reporta el estado técnico, que sí es verificable; no toma partido sobre la atribución.

**Falta para publicar:** validación escrita de Monific.
