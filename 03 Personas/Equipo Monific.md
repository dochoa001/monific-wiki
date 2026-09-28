---
titulo: Equipo Monific
tipo: entidad
area: transversal
estado: verificado
confianza: alta
actualizado: 2026-08-07
fuentes: [X023, D149, D177, D181, D195, P_NOTIF]
tags: [personas, monific]
---

# Equipo Monific

> **En una frase:** los cinco directivos y el equipo técnico del cliente, y qué papel juega cada uno en el proyecto.

Monific es una empresa de **~11 personas**. La dirección participa directamente en el proyecto.

---

## Dirección

| Persona | Cargo | Papel en el proyecto |
|---|---|---|
| [[Raquel Alfie]] | Directora Comercial y de Operaciones | **Champion.** Aprobación final de todo. Autora de la documentación de procesos y de las auditorías |
| [[Ted Senado]] | Director General | Firmante del contrato. Decisor en incumplimientos con garantía. Autorizó avanzar con solo dos revisiones (legal y PLD) sin la financiera |
| **Vianey Correa** | Directora de Finanzas | Valida garantías junto con Legal. Conciliación al liquidar campañas. Participó en la revisión de pipelines de cobranza (2026-05-15) |
| **Miguel Emiliano Chacón López** | Director Legal | Valida garantías. Pidió explicitar la cadencia de cobranza: semana 1 Monific, semana 2 despacho, acción legal desde semana 3 |
| [[Jesus Torres]] | CTO | Responsable técnico de la integración. Dueño del acceso al código del Admin |

---

## Tecnología

| Persona | Papel |
|---|---|
| [[Jesus Torres]] (CTO) | Decisión técnica, acceso al repositorio |
| **Daniel Torres** | Desarrollo. Ejecuta la integración. Pidió por escrito diccionario, payloads, IDs, modelo, inconsistencias, aceptación y evidencia **antes** de programar endpoints definitivos (fuente F08 del Maestro Operativo) — de ahí sale el gate T1–T7 |

⚠️ Observación de Raquel en el kickoff: *"ellos son un poquito más lentos, entonces ahí yo voy a estar atrás de ellos"*. La disponibilidad de TI fue una restricción real durante todo el proyecto.

---

## Operación

| Persona / rol | Papel |
|---|---|
| **Guillermo ("Memo")** — A.A.S. | Agente de Atención a Solicitantes. Crea carpetas de Drive, revisa expedientes, ejecuta cobranza preventiva manual, confirma pagos el día 0. Es el rol más cargado de todo el diseño |
| **Karen Montserrat Gómez** | En copia de comunicaciones formales. ⚠️ Un comentario en el master de Solicitantes dice *"No es a raquel, es karen"* sobre las notificaciones de negocio estancado — sugiere que es la superior operativa en esa escalación |
| Equipo ATC (2 personas) | Según el brief. El cliente pidió expresamente que la automatización no sea invasiva para ellos |

---

## Cómo trabaja el cliente (observaciones útiles)

Estas notas vienen de las transcripciones y ayudan a anticipar la dinámica:

- **Raquel documenta muchísimo.** Ella misma dice tener "un poco de TOC" con la documentación. Preparó en diciembre de 2025 un documento que llama *"la Biblia de Monific"* con todos los procesos, plantillas de comunicación y su TO-BE ideal.
- **Raquel concentra el conocimiento.** *"Somos 11 personas y yo llevo casi todo"*. Prefiere canalizar todo por ella antes que involucrar a más gente.
- **Raquel usa IA para auditar.** En la reunión del 2026-06-29 explicó que su auditoría cruzó el documento master vía API con IA, **sin revisar flujo por flujo**. Esto es clave para calibrar la confianza en los hallazgos declarativos.
- **La dirección se involucra.** Ted, Vianey, Emiliano y Jesús son audiencia directa de las capacitaciones y aparecen en las decisiones operativas.
- **Priorizan cobranza.** El brief lo dice explícitamente: *"cobranza es el workflow con mayor prioridad"*.

---

## Fichas individuales

- [[Raquel Alfie]]
- [[Ted Senado]]
- [[Jesus Torres]]

---

## Relacionado

- [[Directorio de Contactos]] — correos y teléfonos
- [[Roles Operativos]] — las siglas de los procesos
- [[Equipo Black and Orange]]
- [[Monific]]

## Fuentes

- `X023` — Directorio Responsables Monific
- `D149` — Sesión de Kickoff (2026-01-07)
- `D177` — Minuta 2026-06-16
- `D181` — Minuta 2026-08-04
- `D178` — Minuta 2026-06-29 (auditoría con IA)
- `D195` — Entregables del 26 de enero (rol de Guillermo)
- `P_NOTIF` — Notificación contractual (lista de destinatarios)
