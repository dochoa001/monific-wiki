---
titulo: Documentos Contractuales
tipo: fuente
area: transversal
estado: verificado
confianza: alta
actualizado: 2026-08-07
fuentes: [P_CONTRATO, P_ANEXO, P_NOTIF, P_BOOST_ACC, P_BOOST_EXP, X019, X024, P_SLA]
tags: [fuentes, contrato, legal]
---

# Documentos Contractuales

> **En una frase:** dónde está cada documento legal del proyecto y qué contiene.

⚠️ Esta página los cataloga. Para el contenido, ver [[Contrato y Alcance]] y [[Conflicto Contractual]].

---

## El contrato

| Documento | ID | Fecha | Ubicación |
|---|---|---|---|
| **Contrato de prestación de servicios** | `P_CONTRATO` | 2026-01-05 | `drive-download-...143934Z-1-001/Contrato Monific - BOM - ES - 16ene26.docx.pdf` |
| **Anexo A · Resumen Ejecutivo / Plan BOOST** | `P_ANEXO` | 2025-11-19 | `.../50. Monific - Anexo Resumen Ejecutivo - 16ene26.docx.pdf` |
| **Anexo firmado con DocuSign** | — | — | `.../Complete_with_Docusign_Monific_-_Anexo_Resum.pdf` · folio `7DB4EE48-05B1-4995-BCB2231FB5E44550` |
| **SLA B&O a Monific** | `P_SLA` | — | `.../SLA B&O a Monific.pdf` — 🔴 **Sin texto extraíble** |

**Firmantes:** Ted Senado Sacal (Monific) · Roberta Arias Álvarez Pérez (Black & Orange).

⚠️ Los archivos se llaman "16ene26" pero el contrato dice y la notificación confirma **5 de enero de 2026**.

🔴 **El SLA es un hueco de conocimiento.** Es un documento contractual que no se pudo leer. → [[Preguntas Abiertas]] H-01

---

## El requerimiento formal (2026-06-18)

Monific envió tres correos el mismo día:

| Correo | Documento | ID |
|---|---|---|
| **1/3** | Notificación contractual de inconformidades y requerimiento formal de subsanación | `P_NOTIF` |
| **2/3** | Expediente documental de solo lectura — directorio de carpetas | `P_BOOST_EXP` |
| **3/3** | Acceso editable para respuestas y evidencias de B&O | `P_BOOST_ACC` |

**Destinatario principal:** roberta@black-n-orange.com
**Copias:** Legal B&O, Administración B&O, Emmanuel Chulin, Jorge García, Eduardo Solís, David Ochoa, Jazmín Córdova, Ted Senado, Raquel Alfie, Miguel Emiliano Chacón, Vianey Correa, Jesús Torres, Daniel Torres, Karen Gómez.

### Documentos anexos

| Documento | ID |
|---|---|
| Requerimiento Formal BNO — corte 2026-06-18 | `X020` (xlsx) · `P_REQFORMAL` (pdf) |
| Matriz Única de Hallazgos BNO — corte 2026-06-18 | `X002` / `X008` (xlsx) · `P_MATRIZ` (pdf) |
| Expediente Requerimiento BNO | `P_EXPREQ` |
| Plantilla de Respuesta BNO | `X004` |

### Estructura del expediente

```
00 LEER PRIMERO
01 REQUERIMIENTO FORMAL   documento + carta + matriz congelada
02 AQUÍ RESPONDE BNO      plantilla + Evidencias_BNO
03 EVIDENCIA MONIFIC      auditorías, minutas, correos, AS-IS/TO-BE, exports técnicos
04 ENTREGAS BNO           masters, flujogramas, grabaciones/minutas de B&O
05 CONTRATO ALCANCE       contrato, anexo DocuSign, Gantt, evidencia de pago
```

---

## Planes y cronogramas

| Documento | ID | Fecha |
|---|---|---|
| Gantt – Monific (1) | `X019` | Original del proyecto |
| **Propuesta Gantt v2 · Plan de remediación y cierre** | `X024` | 2026-07-16 |
| Respuesta BNO con Gantt de remediación | `X003` | — |

→ [[Plan de Cierre y Gantt]]

---

## Instrucción de cierre vigente

| Documento | ID | Fecha |
|---|---|---|
| `00_LEER_PRIMERO.txt` | `D166` | 2026-07-31 |
| Maestro Operativo de Procesos y Workflows | `D167` | 2026-07-31 |

El `D166` establece la estructura de carpetas de Drive y las reglas de entrega. → [[Gobernanza y Rituales]]

---

## Las cláusulas que más se citan

| Tema | Dónde | Resumen |
|---|---|---|
| **Cumplimiento por entregables** | Contrato, cláusula Duración | Actividades sin outputs documentados **no** son cumplimiento |
| **Aceptación no tácita** | Contrato, cláusula Duración | 10 días hábiles para revisar. Ningún entregable se acepta tácitamente |
| **Corrección sin costo** | Contrato, cláusula Duración | B&O corrige sin costo lo que no cumpla el Anexo A |
| **Pago por entregable** | Contrato, cláusula Duración | No se devenga contraprestación por entregables no aceptados |
| **Propiedad intelectual** | Contrato, cláusula PI | Toda la PI desarrollada es **propiedad exclusiva de Monific** |
| **Rescisión** | Contrato, cláusula Duración | Aviso escrito de **30 días** |
| **Colaboración del cliente** | Contrato, cláusula Duración | Retrasos por falta de información del cliente **no** son incumplimiento de B&O |
| **Indemnización** | Contrato, cláusula Indemnización | B&O responde por afectación al **cumplimiento regulatorio** del cliente |
| **Jurisdicción** | Contrato | Mediación CDMX · si no hay acuerdo en 60 días, tribunales de CDMX |

Detalle en [[Contrato y Alcance]].

---

## Relacionado

- [[Contrato y Alcance]] — el contenido
- [[Conflicto Contractual]] — cómo se está aplicando
- [[Economia del Proyecto]] — fees y pagos
- [[Indice de Fuentes]]

## Fuentes

- `P_CONTRATO`, `P_ANEXO`, `P_NOTIF`, `P_BOOST_ACC`, `P_BOOST_EXP`, `P_SLA`
- `X019`, `X024`, `X020`, `X002`, `X004`
- `D166`, `D167`
