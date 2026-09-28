---
titulo: Buyer Persona Inversionista
tipo: concepto
area: comercial
estado: en-progreso
confianza: media
actualizado: 2026-08-07
fuentes: [D193, X012, D167]
tags: [cliente, inversionistas, marketing]
---

# Buyer Persona Inversionista

> **En una frase:** mexicanos que buscan rendimientos superiores a instrumentos tradicionales con respaldo inmobiliario, y que valoran la regulación, la transparencia y la simplicidad digital.

---

## Perfil general

Hombres y mujeres de nacionalidad mexicana interesados en diversificar su dinero y generar ingresos pasivos de forma segura.

**Motivadores principales:**
- Rendimientos superiores a CETES, pagarés y similares
- Seguridad y respaldo por inmuebles
- Facilidad y agilidad digital
- Regulación CNBV y confianza institucional
- Comunicación clara, humana y sin tecnicismos

**Página de entrada:** https://monific.com/invierte · registro en https://app.monific.com/registro

---

## Subtipos

| Subtipo | Perfil | Qué necesita |
|---|---|---|
| **Nuevo** | Curiosidad sin experiencia previa | Confianza, educación, simplicidad. Onboarding y acompañamiento |
| **Activo** | Ya invirtió, busca reinvertir o diversificar | Comunicación constante sobre campañas nuevas, rendimientos y desempeño |
| **Experimentado / VIP** | Inversiones > $500,000 MXN | Trato preferencial, reportes detallados, información anticipada de proyectos, atención directa |

---

## El embudo (cuatro fases)

| Fase | Definición | Objetivo | Temperatura |
|---|---|---|---|
| **Registro simple** | Se registró con correo, teléfono y contraseña; no completó perfil | Convertir a cuenta activa | Frío / tibio |
| **Perfil en proceso** | Inició registro, no completó los 4 pasos KYC | Acompañar hasta activar cuenta | Tibio |
| **Cuenta STP activa (sin inversión)** | Contrato firmado y CLABE creada, sin invertir | Lograr la primera inversión | **Caliente** |
| **Inversionista activo** | Al menos una inversión realizada | Fomentar reinversión y engagement | Núcleo del negocio |

Este embudo se refleja en `nivel_registro` (1–4) y en el pipeline de Inversionistas de HubSpot. → [[Proceso Comercial Inversionistas]] · [[Pipelines]]

---

## Automatizaciones que pidió el cliente por fase

### Registro simple
- Secuencia de *nurture* email + WhatsApp con educación financiera
- Lead scoring inicial por apertura, visitas y clics
- Notificación interna o tarea a Atención a Clientes si el lead alcanza cierto score
- Etiquetado automático "Registro simple" (la propiedad ya existe en HubSpot)
- Dashboard de conversión a "perfil en proceso"

### Perfil en proceso
- Emails/WhatsApp dinámicos según el paso KYC donde se detuvo
- Notificación interna si lleva **más de 48 h** detenido en la misma etapa
- Tarea automática a Atención a Clientes
- Lead scoring progresivo con peso extra si vuelve al flujo

### Cuenta STP activa
- Flujos de activación con urgencia ("tu cuenta ya está lista", "cupos limitados")
- Email dinámico de proyectos activos según perfil de riesgo
- WhatsApp o tarea de llamada si lleva **más de 7 días** sin invertir
- Dashboard "Cuenta activa → Primera inversión" con CAC real vía Meta/Singular

### Inversionista activo
- Flujos de fidelización: proyectos similares, rendimientos recibidos → reinvertir
- Segmentación activos constantes vs. inactivos (> 90 días sin reinversión)
- Tarea automática si un inversionista VIP no reinvierte tras el vencimiento
- Campaña de referidos al cumplir la segunda inversión

⚠️ **Advertencia importante:** esta lista es la **petición original del cliente** (brief, `D193`), no lo implementado. Al corte de 2026-08-07, **0 de las 15 comunicaciones de Inversionistas** están activas y el journey completo está condicionado a que exista la integración. → [[Estado Actual]] · [[Matriz de Comunicaciones]]

---

## Decisiones canónicas que corrigen el brief

El corte de 2026-07-31 (`D167`) estableció reglas que **sustituyen** partes del brief original:

| ID | Decisión |
|---|---|
| INV-01 | El cupo de 7,000 contactos de marketing es **conjunto** con Solicitantes, mensual, y toda alta debe desclasificarse el mes siguiente |
| INV-02 | Cuenta, contraseña, KYC y CLABE se crean **solo en la app/web de Monific**. Un formulario de HubSpot únicamente capta interés de marketing |
| INV-03 | `nivel_registro` gobierna el proceso. `state`/`estatus_conversion` es espejo o se retira |
| INV-05 | Saldo ≥ $1,000 genera recordatorio para invertir; **no** cambia por sí solo a nivel 4 |
| INV-08 | Pagos y rendimientos quedan **fuera de HubSpot**, bajo operación manual de Monific |
| INV-11 | Retiros y UNE quedan **fuera** del ciclo de Inversionistas |

Detalle completo en [[Proceso Comercial Inversionistas]].

---

## Relacionado

- [[Buyer Persona Solicitante]] — el otro lado del mercado
- [[Proceso Comercial Inversionistas]] — cómo se opera
- [[Matriz de Comunicaciones]] — los 15 mensajes definidos
- [[Modelo de Negocio]]

## Fuentes

- `D193` — Brief de Necesidades, sección 3.1
- `X012` — Master de Implementación Proceso Comercial (pipeline y propiedades de Inversionistas)
- `D167` — Maestro Operativo, sección "Actualización canónica de Inversionistas"
