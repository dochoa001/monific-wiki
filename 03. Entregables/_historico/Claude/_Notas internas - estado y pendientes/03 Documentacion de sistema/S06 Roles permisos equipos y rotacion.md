# S06 · Roles, permisos, equipos y rotación por horario

> **Para quién:** administrador del portal.
> **Por qué es crítico:** la asignación de tickets depende del **horario activo**. Si nadie sabe cómo se configura, un cambio de turno rompe el SLA de 5 minutos.

---

## El diccionario de siglas

Los masters usan siglas en todas partes. Este es el traductor.

| Sigla | Rol | Qué hace |
|---|---|---|
| **A.A.S.** | Agente de Atención a Solicitantes | Crea la carpeta de Drive, acompaña la carga de documentos, fija el estado de documentación, gestiona la formalización, ejecuta cobranza preventiva manual |
| **A.A.I.** | Agente de Atención a Inversionistas | Acompaña el KYC, empuja la primera inversión, gestiona congelado y reactivación, comunica cierres de campaña |
| **E.A.C.** | Ejecutivo de Atención a Clientes | Recibe, clasifica y resuelve tickets; escala a TI; cierra con resolución documentada |
| **E.R.S.** | Ejecutivo de Relación con Solicitantes | Atiende los tickets **Tipo C** derivados desde ATC, con SLA de 1 hora |
| **D.C.** | Director Comercial | Pipeline **UNE** y cierre de tickets **Tipo D** |
| **D.C.L.** | Director de Cumplimiento Legal | Soporte de UNE, emisión de dictámenes |
| **D.F.** | Dirección Financiera | Valida la conciliación al liquidar una campaña |
| **D.G.** | Dirección General | Recibe notificaciones internas en Evaluación |
| **E.E.J.** | Equipo de Evaluación Jurídica | Conduce el proceso de firma ante notario |
| **MKT** | Marketing | Folleto y material de campaña en Formalización |
| **TI** | Tecnologías de Información | Resuelve tickets Tipo A; desarrolla la integración |
| **Compliance / PLD** | Cumplimiento | Validación PLD en ≤ 48 h hábiles |

---

## Quién ocupa cada rol hoy

| Rol | Persona | Confianza |
|---|---|---|
| A.A.S. | **Guillermo ("Memo")** | 🟡 Aparece en todos los diseños pero **no está en el directorio oficial** |
| A.A.I. | Sin asignación nominal confirmada | ⚠️ |
| E.A.C. | Equipo de 2 personas según el brief | ⚠️ |
| D.C. | Raquel Alfie | 🟡 |
| D.C.L. | Miguel Emiliano Chacón (Director Legal) | 🟡 |
| D.F. | Vianey Correa | 🟡 |
| D.G. | Ted Senado | ✅ |
| Responsable ATC nivel 2 | *"Por el momento Raquel lo asume"* | 🟡 |
| TI | Jesús Torres (CTO) y Daniel Torres | ✅ |

⚠️ **Riesgo operativo declarado.** Monific son ~11 personas y, según registro de minuta, Raquel *"lleva casi todo"*. Es **D.C., responsable de UNE, nivel 2 y nivel 3 del escalamiento de ATC** al mismo tiempo. Sin respaldos nominales, una ausencia suya afecta un plazo regulatorio.

---

## El modelo de escalamiento de ATC

| Nivel | Quién | Cuándo interviene |
|---|---|---|
| 🟢 **0 — Sistema** | HubSpot | Recordatorios, pausas, cierres por inacción, reasignaciones. **Nunca escala** |
| 🟡 **1 — E.A.C.** | Ejecutivo | Resuelve **sin pedir permiso**: dudas operativas, quejas leves, atrasos explicables, clientes indecisos |
| 🔵 **2 — Responsable ATC** | *Hoy Raquel* | El cliente insiste > 3 veces · riesgo de abandono · mensaje hostil · inconsistencia operativa |
| 🔴 **3 — Dirección** | *Hoy Raquel* | Riesgo reputacional · cliente VIP amenaza salida · **posible UNE / CNBV** · impacto colectivo |

⚠️ **Los niveles 2 y 3 recaen hoy en la misma persona.** Un escalamiento de nivel 2 y uno de nivel 3 llegan al mismo buzón, lo que anula la diferencia entre ambos.

---

## La rotación por horario

**El pipeline de Servicio asigna tickets por round-robin según el horario activo**, e inicia el cronómetro de SLA de primera atención de **5 minutos**.

Esto significa que hay **tres configuraciones acopladas**:

1. **Quién está en el equipo** de atención
2. **Qué horario tiene activo** cada persona
3. **La regla de round-robin** de WF-041

**Si cambia cualquiera de las tres y no se actualizan las otras dos**, los tickets se asignan a alguien que no está en turno y el SLA de 5 minutos se vence solo. Es la falla más silenciosa del sistema: nada se rompe visiblemente, solo se acumulan SLAs vencidos.

🔴 **El round-robin es parte del bloque de remediación B04**, junto con SLA de respuesta humana, roles dinámicos y cierre con evidencia. **No está verificado que funcione hoy.**

---

## 🔴 Las tareas se asignan a personas, no a equipos

Limitación del producto, registrada el 2026-07-27:

> HubSpot obliga a asignar tareas a **una persona**, no a un equipo. Los flujos deben quedar claramente mapeados. B&O propondrá un mecanismo para identificar y actualizar asignaciones cuando haya movimientos de personal.

Se acordó que **no bloquea el avance**, pero deja deuda operativa concreta: **si Guillermo se va, hay que tocar workflows a mano** — y el A.A.S. aparece por nombre en la asignación de cobranza (WF-050 asigna a Guillermo).

**Recomendación:** llevar una lista de "workflows con persona nominal" para poder ubicarlos rápido cuando alguien entra o sale. Hoy esa lista no existe.

---

## 🔴 El equipo de ARI

| | |
|---|---|
| **Qué es** | Despacho legal externo que gestiona la cobranza judicial de Monific |
| **En HubSpot** | Equipo *"Legal externo/ARI"*, ID `87069491` |
| **Cuándo interviene** | Día 15: aviso para preparar tabla de adeudo · Día 16: copia en la escalación · Día 30: cobranza formal con Finanzas · Día 61+: ejecución legal |
| **Riesgo** | 🔴 **ARI está dentro del equipo Legal compartido → visibilidad cruzada del pipeline interno** |

**Bloque B14** (+15 días hábiles):

> Crear equipo dedicado, retirar ARI de Legal y limitar notificaciones a los nodos pactados.
> **Criterio:** ARI sin acceso al pipeline interno; solo notificaciones pactadas.
> **Riesgo que mitiga:** visibilidad cruzada y riesgo de confidencialidad/regulatorio.

⚠️ La auditoría menciona *"equipo Legal compartido con ARI (Fulmentfi)"*. **No queda claro si Fulmentfi es la razón social de ARI o una tercera entidad.** Hay que aclararlo antes de configurar permisos: son cosas distintas si son dos organizaciones.

---

## 🔴 Destinatarios personales del proveedor en flujos productivos

Detectado en la auditoría de comunicaciones:

| Destinatario | Nodos |
|---|---|
| Una persona de B&O | 3 |
| Otra persona de B&O — **que ya no trabaja en la empresa** | 2 |
| Equipo Legal compartido con ARI | 2 |

**Bloque B16** (+15 días hábiles):

> Retirar destinatarios personales de B&O, usar roles internos y corregir tokens HubL.
> **Criterio:** cero nodos a personal de B&O, cero tokens sin resolver.
> **Riesgo:** exposición de información y dependencia del proveedor.

Es el ejemplo más gráfico del problema: **una persona que ya no está en la empresa proveedora sigue recibiendo correos de flujos productivos de un cliente regulado.**

**La regla que sale de aquí:** los flujos notifican a **roles internos**, nunca a personas de un proveedor. Si un proveedor necesita recibir algo, se hace con un buzón compartido de la organización, no con un correo personal.

---

## Usuarios y accesos del portal

🔴 Hallazgo de la auditoría por API (2026-06-17):

> *"Accesos activos no regularizados: aún existen usuarios de BNO y usuarios externos con acceso a la cuenta."*

**No hay evidencia de que se haya ejecutado la depuración.** Debe hacerse inventario y limpieza antes del cierre del proyecto.

Contexto: en el arranque, Monific dio acceso a una persona de B&O para que ella diera acceso al resto del equipo de implementación. Ese árbol de accesos nunca se revisó.

---

## Apps privadas y permisos técnicos

| App | ID | Estado | Acción |
|---|---|---|---|
| **`trama1-monific`** | `10092461` | ✅ Vigente — es la integración productiva | Mantener. Atender la migración de plataforma de apps de forma planificada |
| **`Migracion-monific`** | `12753166` | 🔴 **Legacy con token activo** | **Desactivar y revocar el token.** Antes: TI confirma que no hay dependencias en repositorios ni entornos productivos. Después: memo formal de Compliance con fecha de baja y ausencia de dependencias |

### Permisos a revocar en `trama1-monific`

**Revocar:**
- `export-import` — la integración usa upserts individuales, no export masivo
- `crm.objects.users.write` — no se usa
- Todos los permisos `highly_sensitive` sin uso documentado

**Mantener:** lectura/escritura estándar sobre contactos, empresas y negocios.

Validar que la integración siga funcionando con permisos `sensitive` en lugar de `highly_sensitive`. Si el proveedor necesita alguno después, **debe justificarlo por escrito**.

⚠️ **Nunca copies un token completo a un documento.** Las credenciales viven en el almacén de claves de servicio, fuera de esta base.

---

## Checklist de alta y baja de una persona

Hoy no existe. Debería:

**Alta**
- [ ] Usuario en HubSpot con el nivel de permiso de su rol
- [ ] Asignación al equipo correcto
- [ ] Horario activo configurado, si entra a la rotación de tickets
- [ ] Bandeja de correo y calendario conectados → **P01**
- [ ] Ruta de incorporación de su rol → familia **04**

**Baja**
- [ ] Desactivar usuario (no eliminar — se pierde la trazabilidad de sus registros)
- [ ] **Reasignar sus registros abiertos** antes de desactivar
- [ ] Sacarlo del horario activo
- [ ] **Buscarlo en los workflows** — si estaba como destinatario nominal, hay que sustituirlo
- [ ] Revocar accesos a canales externos (Meta, CallPicker, Notion)

---

## Estado y verificación

**Estado:** 🔴 **incompleto** · 2026-08-18
**Fuente:** Masters de Implementación (columna *Responsable*); entregables del 2026-01-26 (matriz de responsabilidad y modelo de escalamiento); Maestro Operativo; minuta del 2026-07-27; auditoría por API (2026-06-17); auditoría de comunicaciones; requerimiento formal, bloques B04, B14 y B16; Plan Único de Corrección.

**Falta para publicar:**

1. **Completar los nombres** de la tabla de roles con el Directorio de Responsables.
2. **Asignar respaldos nominales**, empezando por el D.C. — hoy una persona concentra tres niveles de escalamiento.
3. Ejecutar el bloque **B14**: equipo dedicado para ARI, fuera del equipo Legal.
4. Aclarar si Fulmentfi es ARI o una tercera entidad.
5. Ejecutar el bloque **B16**: cero destinatarios personales de proveedor.
6. Inventariar y depurar usuarios del portal.
7. Dar de baja `Migracion-monific` y revocar su token.
8. Revocar los permisos de más en `trama1-monific`.
9. Verificar que el round-robin por horario funcione (bloque B04).
10. Validación escrita de Monific.
