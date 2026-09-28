---
titulo: Marco Regulatorio
tipo: concepto
area: transversal
estado: en-riesgo
confianza: media
actualizado: 2026-08-07
fuentes: [D193, D167, X013, X011, P_NOTIF, X020]
tags: [cliente, cnbv, compliance, une]
---

# Marco Regulatorio

> **En una frase:** Monific es una entidad supervisada por la CNBV, y eso convierte varias piezas del CRM en obligaciones regulatorias, no en buenas prácticas opcionales.

---

## Qué figura jurídica es

**Institución de Financiamiento Colectivo (IFC)** bajo la **Ley para Regular las Instituciones de Tecnología Financiera** (Ley Fintech), supervisada por la **CNBV**.

La confidencialidad de la información de clientes y prospectos está protegida por el **artículo 73** de esa ley — dato que Monific incluye en el pie de sus comunicaciones formales.

---

## Las obligaciones que tocan a HubSpot

### 1. UNE — Unidad Especializada de Atención a Usuarios

Canal obligatorio para reclamaciones formales. Es lo más sensible del proyecto.

| Requisito | Implicación en HubSpot |
|---|---|
| Folio por reclamación | Propiedad `folio_une` |
| Plazo de dictamen | **30 días hábiles** desde el ingreso |
| Trazabilidad de fechas | `fecha_de_ingreso`, `fecha_limite_de_dictamen` |
| Dictamen documentado | `dictamen`, `resultado_del_dictamen` |
| Reporte trimestral | `trimestre_de_reporte` → CNBV/CONDUSEF |
| Separación del ticket de servicio | Una reclamación UNE **nunca** se mezcla con un ticket de atención. Genera ticket propio en pipeline propio |
| Nueva reclamación | = Ticket nuevo. No se reabre |

🔴 **Estado:** los 6 flujos UNE (UNE-01 a UNE-06) **no están acreditados en HubSpot** al corte de 2026-07-31. Es el bloque **B15** del requerimiento formal. → [[Proceso UNE]]

⚠️ Hay una tensión sin resolver: el SLA interno de atención y el plazo regulatorio son cosas distintas y el requerimiento exige separarlos explícitamente.

### 2. PLD — Prevención de Lavado de Dinero

Validación obligatoria en la evaluación de solicitantes. SLA interno: **≤ 48 h hábiles**, a cargo de Compliance/PLD. Revisa listas, alertas y perfil.

⚠️ Nota registrada en `D195`: *"que la revisión financiera no se encuentre en el proceso no significa que no se hace; por indicaciones de Ted se puede avanzar con las primeras dos revisiones"*. Esto significa que el gate de comité en HubSpot puede no reflejar todas las revisiones reales.

### 3. Trazabilidad de cobranza y ejecución de garantías

Todo debe quedar registrado para auditoría CNBV:

- Nota de decisión del comité en refinanciamientos
- Registro CNBV trazable en el cierre por refinanciamiento (hallazgo CON-109 🔴: hoy el workflow solo cambia la propiedad, no genera el registro)
- `Calificación del proyecto CNBV` como propiedad del ticket de cobranza
- Conciliación validada por Dirección Financiera al liquidar

### 4. Confidencialidad y segregación de accesos

El despacho legal externo **ARI** no debe tener visibilidad del pipeline interno. Solo debe recibir las notificaciones pactadas.

🔴 Hallazgo abierto (**B14**): ARI está dentro del equipo Legal compartido, con visibilidad cruzada. Riesgo de confidencialidad y regulatorio.

🔴 Hallazgo relacionado (**B16**): hay nodos de workflow que envían correos a **personal de Black & Orange** (David Ochoa, Caroline Bersot) desde flujos productivos. Exposición de información y dependencia del proveedor.

→ [[Higiene y Accesos]]

### 5. Datos personales

Aviso de privacidad integral publicado. Derechos ARCO por contacto@monific.com. Toda comunicación automatizada requiere **consentimiento y canal aprobados** antes de encenderse — regla transversal del proyecto.

---

## Por qué esto eleva el riesgo del proyecto

El requerimiento formal de Monific lo dice explícitamente:

> *"El proyecto no se considera cerrado mientras existan pendientes críticos o altos abiertos, ni mientras subsista el riesgo operativo y regulatorio asociado a los flujos de atención a usuarios, sujeto a validación de Legal y Compliance."*

Es decir: **Legal y Compliance de Monific tienen poder de veto sobre el cierre del proyecto.**

---

## Relacionado

- [[Proceso UNE]] — el flujo regulatorio completo
- [[Higiene y Accesos]] — segregación de ARI y destinatarios externos
- [[Conflicto Contractual]] — por qué el riesgo regulatorio bloquea el cierre
- [[Riesgos]]

## Fuentes

- `D193` — Brief de Necesidades
- `D167` — Maestro Operativo (2026-07-31), sección UNE y pendientes críticos
- `X013` — Master de Implementación Servicio/UNE
- `X011` — Master de Implementación Cobranza (propiedades CNBV)
- `P_NOTIF` — Notificación contractual (2026-06-18), aviso de privacidad y art. 73
- `X020` — Requerimiento Formal, bloques B14, B15, B16 y condiciones de cierre
