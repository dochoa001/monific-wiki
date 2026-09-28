---
titulo: Jesus Torres
tipo: persona
area: integracion
estado: en-progreso
confianza: alta
actualizado: 2026-08-07
fuentes: [X023, X018, D177, D178, D181, D167]
tags: [persona, monific, ti, integracion]
---

# Jesús Torres

> **En una frase:** CTO de Monific y contraparte técnica de toda la integración; sin él y su equipo, la integración no avanza.

| | |
|---|---|
| **Nombre completo** | Jesús Torres Hernández |
| **Organización** | [[Monific]] |
| **Cargo** | CTO |
| **Correo** | jesus.torres@monific.com |
| **WhatsApp** | 55 8141 5475 |

---

## Papel en el proyecto

Es el **dueño del lado técnico** de la integración Admin Monific → HubSpot:

- Contacto para el acceso al código (sujeto a revisión de regulaciones).
- Responsable del repositorio, ambientes de pruebas/QA/PRE y usuarios de prueba.
- Junto con **Daniel Torres** ejecuta el desarrollo de la integración.
- Participó en las sesiones técnicas del 2026-06-16 y 2026-08-04.

**Su equipo desarrolla:** backend en **NestJS**, base **SQL**, cliente **SDK oficial de HubSpot** (no plugin ni conector de terceros).

---

## Por qué es la dependencia crítica

El Gantt v2 pone en la ruta crítica la actividad **4.2 · TI Monific: desarrollo del envío / mapeo de datos**, con ~3 semanas estimadas. B&O no controla ese carril.

Contexto que explica la fricción:

- Raquel en el kickoff (2026-01-07): *"van a necesitar ustedes cosas más de nuestro equipo tecnológico, ellos son un poquito más lentos, entonces ahí yo voy a estar atrás de ellos"*.
- 2026-06-08 — B&O abandona la integración directa y pasa a asesoría técnica por complicaciones de acceso.
- 2026-06-29 — Se registra que por restricciones del banco y del manejo de la bolsa, **B&O no puede ejecutar la conexión directa**.
- 2026-08-04 — Primera sesión formal en la que el equipo técnico recibe el documento maestro de propiedades y reglas.

---

## Lo que su equipo exigió antes de programar

El correo interno de **Daniel Torres** (fuente F08 del Maestro Operativo) pidió, antes de definir endpoints:

1. Diccionario canónico de propiedades
2. Payloads por evento
3. IDs reales (objeto, pipeline, etapa, asociación)
4. Inconsistencias corregidas
5. Modelo confirmado
6. Casos de aceptación
7. Evidencia en HubSpot

Esa lista se convirtió en el **gate técnico T1–T7**. → [[Plan de Cierre y Gantt]]

---

## Compromisos abiertos

| Compromiso | Desde |
|---|---|
| Validar que cada propiedad del mapeo exista en el Admin, aunque use otra nomenclatura | 2026-08-04 (A-02) |
| Identificar propiedades duplicadas y definir la fuente válida | 2026-08-04 (A-03) |
| Iniciar la implementación de los nuevos objetos, IDs, asociaciones y reglas | 2026-08-04 (A-04) |
| Validar horario y periodicidad de las sincronizaciones masivas (propuesta: 01:00 diaria) | 2026-08-04 (A-06) |
| Confirmar viabilidad de enviar desde el Admin las fechas para notificaciones de cobranza | 2026-07-27 |

---

## Relacionado

- [[Integracion Admin Monific HubSpot]] — la arquitectura que su equipo construye
- [[Reglas de Negocio API]] · [[Diccionario de Propiedades API]]
- [[Equipo Monific]] · [[Stack Tecnologico Monific]]

## Fuentes

- `X023` — Directorio Responsables Monific
- `X018` — Documento API de Integración Unificado, hoja "Accesos Documentación"
- `D177` — Minuta 2026-06-16
- `D178` — Minuta 2026-06-29
- `D181` — Minuta 2026-08-04
- `D167` — Maestro Operativo, fuente F08
