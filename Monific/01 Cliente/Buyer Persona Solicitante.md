---
titulo: Buyer Persona Solicitante
tipo: concepto
area: comercial
estado: en-progreso
confianza: media
actualizado: 2026-08-07
fuentes: [D193, D195, X012, D180]
tags: [cliente, solicitantes, marketing]
---

# Buyer Persona Solicitante

> **En una frase:** desarrolladores, personas físicas y empresas con un inmueble que buscan capital sin banca tradicional, y necesitan procesos ágiles y seguimiento profesional.

---

## Perfil general

Desarrolladores, personas físicas o empresas que buscan capital sin recurrir a la banca tradicional. Buscan procesos ágiles, seguimiento profesional y financiamientos estructurados con claridad.

**Motivadores principales:**
- Acceso ágil a capital regulado
- Transparencia en seguimiento y comunicación
- Continuidad de financiamiento
- Relación de largo plazo con Monific

**Página de entrada:** https://monific.com/fondea-tu-proyecto

**Oferta:** hasta **$60 MDP**, hasta el **50 % del valor del inmueble**, con garantía inmobiliaria.

---

## Subtipos

| Subtipo | Perfil | Qué necesita |
|---|---|---|
| **Nuevo** | Primer acercamiento al fondeo colectivo | Entender proceso, requisitos y tiempos de análisis |
| **Activo** | Ya fondeó campañas | Mejorar su calificación para nuevos montos. Comunicación sobre flujos, reportes de avance y fondeos adicionales |
| **Con fondeo aprobado** | Autorización global de financiamiento | Acompañamiento para uso de recursos, reportes y fondeo progresivo por etapas |

---

## El formulario de entrada

🔴 **Estado:** hoy es un **Google Form** con automatizaciones vía Google Scripts y correo manual. Debe sustituirse por un formulario de HubSpot embebido en el sitio de Monific. Es un pendiente vivo desde enero de 2026.

### Campos del formulario objetivo

**Datos personales:** nombre completo, teléfono, correo electrónico.

**Sobre el financiamiento:**
- ¿Cuánto necesitas? (hasta $60,000,000)
- ¿Qué uso le darás? → Reestructuración de pasivos · Liquidez · Desarrollo/construcción · Compra de otro inmueble · Remodelación · Capital de trabajo inmobiliario · Otro

**Sobre la garantía (la pregunta que decide todo):**
> *¿Cuentas con un inmueble que podría quedar en garantía?* → Sí / No

**Disclaimer obligatorio:** el formulario tiene fines informativos y de pre-evaluación; no constituye aprobación automática ni obligación de otorgar financiamiento.

### Qué pasa con cada respuesta

| Respuesta | Acción |
|---|---|
| **Sí** | Solicitante potencial → Pipeline Solicitantes, etapa Pre-evaluación iniciada, `Estado de documentación = Pendiente` |
| **No** | Se le informa la alternativa de inversión. ⚠️ **No** se crea Negocio de Inversionista hasta que la persona exprese interés explícito (decisión canónica de `D167`) |

---

## El árbol de decisiones post-formulario

Definido en `D195`. Cinco escenarios tras el Email 1 ("Recibimos tu solicitud"):

| Escenario | Comportamiento del lead | Respuesta del sistema |
|---|---|---|
| **1 · No responde** | Silencio | Día 3 recordatorio automático · Día 6 email de pausa → estado "En pausa por falta de acción" |
| **2 · Pide el link** | Responde o da clic en el CTA | Acción manual del A.A.S.: crea carpeta Drive, genera link, envía Email 2 |
| **3 · Agenda llamada y no contesta** | No-show | Día +1 follow-up con opción de reagendar · Día +4 cierre por no coincidir |
| **4 · Responde con dudas** | Pregunta tasas, plazos | Respuesta **humana**, no automática. Si luego no responde, aplica escenario 1 |
| **5 · "Más adelante"** | Aplaza | Respuesta corta → "En pausa voluntaria", sin seguimiento activo |

Luego: carga en Drive → formulario puente de confirmación → checkpoint humano que fija `Estado de documentación` (Completa / Parcial / No viable) → automatizaciones por estado.

Detalle en [[Proceso Comercial Solicitantes]].

---

## Necesidades de automatización pedidas en el brief

| Área | Petición |
|---|---|
| Formulario | Ramificación condicional invertir vs. financiar, con asignación automática al área correspondiente |
| Etiquetado | `Tipo: Solicitante/Inversionista`, `Estatus: Lead nuevo / En calificación / Activo` |
| Secuencia de contacto | 3 correos: inmediato ("¿buscas fondeo?"), +24 h (media kit + video), +48 h (checklist) |
| Expediente Azul | Integración unidireccional HubSpot → Expediente Azul y actualización de estatus Aprobado/Rechazado/En revisión |
| Campañas | Registro automático de campañas por solicitante (1:N) con avisos de inicio, fondeo completo y siguiente etapa |
| Cobranza | **La prioridad más alta declarada por el cliente.** Recordatorios agrupados: un solo correo mensual/trimestral con el total sumando todas las campañas |
| Mora | Alertas internas y externas, historial de mora, KPIs de días de atraso, monto vencido y total recuperado |

⚠️ El brief pedía **lead scoring** para priorizar solicitantes. Esa idea fue **descartada** el 2026-07-27: no habrá score numérico en el MVP, solo viable / parcialmente viable / no viable.

---

## Documentación que se le pide

Estructura de carpeta de Drive por tipo de persona. → detalle completo en [[Proceso Comercial Solicitantes]].

**Persona física:** proyecto (título de propiedad, certificado de libertad de gravamen, avalúo, boleta predial, boleta de agua, materiales gráficos, brochure) + garante + obligado solidario.

**Persona moral:** proyecto + acta constitutiva, asamblea reciente, poder notarial, certificado digital, constancia de situación fiscal, comprobante de domicilio, opinión de cumplimiento, estado de cuenta, organigrama.

---

## Relacionado

- [[Buyer Persona Inversionista]] — el otro lado
- [[Proceso Comercial Solicitantes]] — el flujo operativo completo
- [[Proceso de Cobranza]] — lo que viene después del fondeo
- [[Matriz de Comunicaciones]] — las 22 comunicaciones definidas

## Fuentes

- `D193` — Brief de Necesidades, sección 3.2
- `D195` — Entregables pendientes del 26 de enero (formulario, árbol de decisiones, SLAs)
- `X012` — Master de Implementación Proceso Comercial
- `D180` — Minuta 2026-07-27 (descarte del lead scoring)
