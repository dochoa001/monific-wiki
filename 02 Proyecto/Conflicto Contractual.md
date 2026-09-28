---
titulo: Conflicto Contractual
tipo: estado
area: transversal
estado: bloqueado
confianza: alta
actualizado: 2026-08-07
fuentes: [P_NOTIF, X020, X002, P_CONTRATO, D178, D190, P_BOOST_ACC, P_BOOST_EXP]
tags: [proyecto, conflicto, legal, requerimiento]
---

# Conflicto Contractual

> **En una frase:** el 2026-06-18 Monific notificó formalmente a Black & Orange un incumplimiento contractual y exigió la subsanación de 217 pendientes con evidencia verificable; la disputa sigue abierta.

⚠️ Página sensible. Describe hechos documentados, no opiniones. Ante decisiones con consecuencias legales, consultar los documentos originales y a Legal.

---

## Qué ocurrió

El **2026-06-18 a las 11:32**, desde contacto@monific.com, Monific envió a Roberta Arias (representante legal de B&O), con copia a Legal, Administración, Emmanuel Chulin, Jorge García, Eduardo Solís, David Ochoa, Jazmín Córdova y a toda la dirección de Monific, una:

> **NOTIFICACIÓN CONTRACTUAL DE INCONFORMIDADES Y REQUERIMIENTO FORMAL DE SUBSANACIÓN — Proyecto BOOST**

Fundamento invocado: el contrato del 2026-01-05, su Anexo A, el instrumento DocuSign `7DB4EE48-05B1-4995-BCB2231FB5E44550` y los masters, flujogramas, minutas, auditorías y comunicaciones del proyecto.

---

## La postura de Monific

| Punto | Contenido |
|---|---|
| **No es renegociación** | *"La contraprestación correspondiente al proyecto ha sido cubierta. Este requerimiento no constituye una renegociación económica ni una solicitud de servicios adicionales"* |
| **Qué se exige** | La corrección, implementación, documentación y **entrega verificable** de los servicios contratados |
| **Base contractual** | El cumplimiento solo se satisface con entregables verificables, funcionales y documentados. Actividades, sesiones o configuraciones parciales sin outputs no constituyen cumplimiento |
| **Autoría de los masters** | Los masters, flujogramas y documentación TO-BE son **entregables de B&O** derivados del Add-On de Mapeo de Procesos Elite, no insumos que Monific debiera aportar |
| **Sin aceptación tácita** | Ningún entregable se considera aceptado por el paso del tiempo ni por una reunión |

---

## Las cifras oficiales (corte 2026-06-18)

| Indicador | Valor |
|---|---|
| Hallazgos consolidados en 4 auditorías | **284** |
| Resueltos (TI Monific + validados) | 18 |
| Descartados / no aplican | 15 |
| **Abiertos** | **251** |
| — exigibles directamente a B&O | **217** |
| — controles informativos (CON-216, CON-217) | 2 |
| — abiertos no exigidos a B&O | 32 |
| Reconocidos **por escrito por B&O** | 103 (94 dentro de los 217) |

Desglose de los 217 exigibles por prioridad: **84 críticos · 87 altos · 37 medios · 9 bajos**.

Verificación técnica por API (2026-06-17, solo lectura):

- 96 workflows · **39 apagados** · solo **9 comunican al cliente**
- De 31 propiedades comprometidas, **26 no existen**
- **81** comunicaciones objetivo, **0** implementadas
- **0** objetos personalizados en el portal (el objeto de Cobranza no existe)
- Usuarios de B&O y externos con acceso activo no regularizado
- 4,848 nodos de workflow auditados

→ [[Auditorias]]

---

## Qué se exige exactamente

1. **Corregir** los entregables propios de B&O — masters, flujogramas y configuración — incluida la depuración de la **plantilla de otro cliente** detectada en dos masters.
2. **Implementar y activar** en HubSpot los workflows, propiedades y comunicaciones comprometidos en el Anexo A.
3. **Entregar las definiciones/modelos** que B&O debe producir para que TI de Monific pueda ejecutar.
4. **Concluir y acreditar** la capacitación (fase TEACH), el programa de seis sesiones y la base de conocimiento.
5. **Responder formalmente, con evidencia verificable, a cada uno de los 217 pendientes.**

Todo organizado en **16 bloques ejecutivos**. → [[Bloques de Cierre B01-B16]]

---

## El formato de respuesta obligatorio

B&O debe responder en la **Plantilla de Respuesta** (carpeta `02`), una fila por pendiente, y subir el soporte a `02 › Evidencias_BNO`.

Cada respuesta requiere:

- URL o **ID** del workflow / propiedad
- Captura o export **con fecha de modificación y usuario ejecutor**
- **Prueba de funcionamiento punta a punta** con un registro de prueba

> *"Sin evidencia, el punto no se da por cerrado."*

---

## El punto sobre la transición de cuenta

Monific dejó constancia de una queja específica:

> *"Durante la reunión del 16 de junio de 2026, BNO informó que Caroline había dejado de colaborar con la empresa y que Emmanuel Chulín asumiría la cuenta y se presentaría formalmente al día siguiente. **A la fecha no hemos recibido dicha presentación** ni una comunicación directa que confirme quién asumirá la responsabilidad integral de la cuenta y del cierre contractual."*

El primer requerimiento de la lista es, literalmente, *"confirmar quién será el responsable integral de la cuenta"*.

En la reunión del **2026-06-29** Emmanuel Chulin ya aparece asumiendo el rol de consultor que lleva el proyecto al cierre. → [[Emmanuel Chulin]]

---

## Reserva de derechos

Monific declaró explícitamente:

- Esta comunicación **no** es todavía el aviso de rescisión de 30 días previsto en la cláusula de Duración.
- Se reserva íntegramente sus derechos: exigir cumplimiento, rechazar entregables inconformes, **ejercer la rescisión**, solicitar la mediación pactada y **reclamar daños directos comprobables**.
- Nada de lo comunicado implica aceptación, renuncia, liberación, modificación, novación ni cierre de obligaciones pendientes.

**Traducción práctica:** el aviso de rescisión sigue disponible y no se ha usado.

---

## Estructura del expediente

Monific envió tres correos el mismo día:

| Correo | Contenido |
|---|---|
| 1/3 | La notificación contractual (`P_NOTIF`) |
| 2/3 | Expediente documental y directorio de carpetas de **solo lectura** (`P_BOOST_EXP`) |
| 3/3 | Carpeta **editable** para respuestas y evidencias de B&O (`P_BOOST_ACC`) |

Organización del expediente:

```
00 LEER PRIMERO
01 REQUERIMIENTO FORMAL  (documento + carta + matriz congelada)
02 AQUÍ RESPONDE BNO     (plantilla + Evidencias_BNO)
03 EVIDENCIA MONIFIC     (auditorías, minutas, correos, AS-IS/TO-BE, exports técnicos)
04 ENTREGAS BNO          (masters, flujogramas, grabaciones/minutas de B&O)
05 CONTRATO ALCANCE      (contrato, anexo DocuSign, Gantt, evidencia de pago)
```

---

## Condiciones de cierre

> *"El proyecto no se considera cerrado mientras existan pendientes críticos o altos abiertos, ni mientras subsista el riesgo operativo y regulatorio asociado a los flujos de atención a usuarios, sujeto a validación de Legal y Compliance."*

Es decir: **171 pendientes** (84 críticos + 87 altos) bloquean el cierre, y Legal/Compliance de Monific tienen veto adicional por el riesgo regulatorio de UNE. → [[Marco Regulatorio]]

---

## La respuesta de Black & Orange

⚠️ **Corrección respecto a versiones anteriores de esta página:** la correspondencia (`D190`) demuestra que **B&O sí acusó y sí respondió dentro del plazo**.

### Acuse — mismo día

**2026-06-18, 13:53** (dos horas después de la notificación), **Roberta Arias**:

> *"Confirmo la recepción de esta notificación y nos estaremos comunicando con el equipo interno y con ustedes para la verificación de lo que solicitan y siguientes pasos."*

### Plan correctivo — un día antes del plazo

**2026-06-24, 18:16**, **[[Emmanuel Chulin]]**, con copia a toda la dirección de ambos lados:

> *"Hemos **implementado y verificado directamente en el portal la gran mayoría de los ajustes a nuestro cargo —cerca de 160 puntos de la auditoría**—, abarcando los procesos de Solicitantes, Inversionistas, Cobranza y Atención a Clientes: flujos de automatización, asignaciones por rol, comunicaciones, notificaciones internas y configuración.*
>
> *Un segundo grupo de ajustes depende de definiciones por parte de su equipo. Asimismo, la activación de las automatizaciones del journey de Inversionistas está **sujeta a la integración entre Admin.Monific y HubSpot, que requiere desarrollo por parte de su área de TI**. En el plan adjunto detallamos cada dependencia con su responsable.*
>
> *En paralelo, estamos cargando las últimas evidencias —URLs de los flujos y estatus final— en el documento de validación que nos compartieron."*

Adjuntó un **Gantt** y propuso reunión para el 26 o el 29 de junio.

### La réplica de Monific

**2026-06-25, 11:32** — no rechaza el avance, pero fija el estándar probatorio y **rechaza el cierre**:

> *"Tomamos nota de que BNO informa haber realizado ajustes en el portal (…). Sin embargo, por claridad, **Monific no considera por ahora aceptados ni cerrados los puntos observados** hasta concluir la revisión por ID, evidencia y prueba funcional."*

Exige por cada fila: estatus final por ID · URL/ID exacto · fecha real de modificación · responsable · evidencia antes/después · caso de prueba · resultado · dependencia formulada como pregunta concreta.

Y una condición estructural:

> *"Cualquier punto que BNO considere dependiente de Monific o de TI **deberá separarse expresamente** de los pendientes de implementación directa de BNO."*

### La contrarréplica

**2026-06-25, 17:14** — Emmanuel acepta todo: crea el apartado exclusivo de dependencias (*"David ya nos ayudó a consolidar esta información con el nivel de detalle solicitado"*), confirma la reunión del 29-jun y declara:

> *"De nuestro lado tampoco daremos por sentado ni por concluido el proyecto hasta que cerremos con éxito cada uno de los tracks e ítems que tenemos pendientes."*

**Lectura:** el conflicto no escaló a ruptura. Ambas partes convergieron rápido en el mismo estándar de cierre — el desacuerdo real no es *si* hay que probar, sino *cuánto está probado*.

---

## Lo que B&O tiene a su favor

Registrado para equilibrio, con base en el contrato y la correspondencia:

1. **Cláusula de colaboración del cliente.** Si hay retrasos por falta de información, acciones o aprobaciones de Monific, B&O no está en incumplimiento y puede pactarse prórroga por escrito.

2. ⭐ **El acceso al código lo bloqueó una auditoría de la CNBV, no B&O.** Es el hecho más fuerte y estaba enterrado en los correos:
   - **2026-05-07** — B&O pide formalmente el usuario de GitHub `@BNO-Proyectos` y los entornos dev/QA/preprod.
   - **2026-05-08** — Monific niega el acceso: *"el repositorio principal contiene información sensible"*. Ofrece pantalla compartida.
   - **2026-05-27** — En minuta: *"La integración sigue **bloqueada por auditoría de la CNBV**. Monific debe certificar el acceso a terceros antes de otorgarlo; el proceso está en manos del equipo legal."* Con pendientes asignados a Raquel (*comunicar urgencia a Emiliano*) y a Eduardo (*gestionar documentación legal para acceso de terceros*).
   - También hubo una **pausa formal del frente API del 7 al 22 de mayo** por revisión interna de Monific con Gobierno.

   El cambio de B&O a "modelo de asesoría técnica" del 2026-06-08 fue **consecuencia** de eso, no una decisión unilateral.

3. **B&O respondió en tiempo y forma** (acuse el mismo día, plan el 24-jun) reportando ~160 puntos atendidos.

4. **Otras dependencias reales documentadas.** Las plantillas de WhatsApp requieren acceso a Meta Business que B&O no tiene (`D178`). El copy es responsabilidad de Monific y está excluido del alcance. Monific pospuso la documentación administrativa a enero por vacaciones de su director legal.

5. **Avances reconocidos por el cliente.** El 2026-06-29 Monific validó el cambio de objeto de Cobranza a Tickets, lo que cerró varios tracks, y reconoció que el origen de la discrepancia master ↔ flujos fue **falta de comunicación de ambos lados**.

6. ⭐ **La propia autora de la auditoría relativizó sus hallazgos.** Al enviar la primera pasada (2026-05-20), Raquel escribió:

   > *"**No lo veo como un dictamen cerrado ni como una 'auditoría final'**, sino como un mapa de trabajo. (…) Como parte del recorrido fue automatizado, es normal que haya cosas que necesiten contexto adicional, ya estén resueltas desde otro ángulo, **o que ustedes consideren falsos positivos**. (…) También quiero reconocer que **sí hay avances importantes**, especialmente en Ventas, Servicio y Cobranza."*

   El método fue *"una extensión de Claude in Chrome"* más revisión manual parcial; el primer borrador traía **163 hallazgos** que ella misma depuró a 112. → [[Auditorias]]

7. **El Plan Único de Corrección atribuye 27 de 51 acciones a TI de Monific**, no a B&O. → [[Higiene y Accesos]]

---

## Estado al 2026-08-07

- ✅ B&O **acusó** el 2026-06-18 y **entregó plan correctivo con Gantt** el 2026-06-24.
- ✅ Monific **no lo rechazó**, pero **no acepta cierres** sin trazabilidad por ID y prueba funcional.
- Existe un **Gantt v2** posterior, del 2026-07-16, como plan de remediación vigente. → [[Plan de Cierre y Gantt]]
- Existe una **plantilla de respuesta de B&O** parcialmente llena (`X003`, `X004`) con validación de al menos CON-021.
- El trabajo continuó y la relación sigue viva: sesiones del 27-jul y 4-ago con dirección de ambos lados.
- **No hay evidencia de aviso de rescisión.**

⚠️ **Hueco:** la correspondencia disponible termina el 2026-06-29. Lo que se haya intercambiado por correo en julio y agosto —incluida la respuesta punto por punto a los 217 pendientes— no está en las fuentes. → [[Correspondencia]]

---

## Relacionado

- [[Bloques de Cierre B01-B16]] — el desglose de lo exigido
- [[Auditorias]] — de dónde salen las cifras
- [[Pendientes Criticos]] — los 84 críticos
- [[Contrato y Alcance]] — las cláusulas invocadas
- [[Plan de Cierre y Gantt]] — cómo se está respondiendo

## Fuentes

- `P_NOTIF` — Notificación contractual de inconformidades (2026-06-18)
- `X020` — Requerimiento Formal BNO, corte 2026-06-18
- `X002` — Matriz Única de Hallazgos, corte 2026-06-18
- `P_CONTRATO` — Contrato Monific–B&O
- `D178` — Minuta de cierre 2026-06-29
- `D190` — Intercambio de correos: acuse del 18-jun, respuesta del 24-jun, réplicas del 25-jun, bloqueo de accesos por CNBV
- `P_BOOST_ACC` / `P_BOOST_EXP` — Correos 2/3 y 3/3 del expediente
- `X003`, `X004` — Plantillas de respuesta de B&O
