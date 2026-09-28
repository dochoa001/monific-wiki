---
titulo: Contrato y Alcance
tipo: concepto
area: transversal
estado: en-riesgo
confianza: alta
actualizado: 2026-08-07
fuentes: [P_CONTRATO, P_ANEXO, P_NOTIF, X020]
tags: [proyecto, contrato, legal]
---

# Contrato y Alcance

> **En una frase:** las cláusulas que gobiernan el proyecto — y en particular las tres que Monific está usando para exigir el cumplimiento.

⚠️ Esta página resume el contrato para trabajo operativo. **No sustituye asesoría legal.** Ante cualquier decisión con consecuencias, lee el documento original.

---

## Instrumentos que forman el contrato

| Documento | Fecha | Nota |
|---|---|---|
| Contrato de prestación de servicios | **2026-01-05** | Firmado por Ted Senado Sacal (Monific) y Roberta Arias Álvarez Pérez (B&O) |
| Anexo A — Resumen Ejecutivo / Plan BOOST | 2025-11-19 | Parte integrante del contrato |
| Instrumento DocuSign | — | Folio `7DB4EE48-05B1-4995-BCB2231FB5E44550` |

⚠️ La notificación de Monific fecha el contrato el **5 de enero de 2026**, igual que el propio documento. Algunos archivos internos se llaman "16ene26"; esa es la fecha del archivo, no de la firma.

---

## Las tres cláusulas que definen el conflicto

### 1. Cumplimiento solo por entregables verificables

> *"El cumplimiento del presente Contrato se entenderá satisfecho únicamente cuando los Servicios se materialicen en **entregables verificables, funcionales y documentados**. La ejecución de actividades, sesiones, configuraciones parciales, reuniones o esfuerzos **sin entrega de outputs documentados no se considerará cumplimiento contractual**."*

Esta es la base de todo el requerimiento. Una reunión, una captura o una explicación no cierran nada.

### 2. Aceptación nunca tácita

> *"El Cliente contará con un plazo de **10 días hábiles** para revisar cada entregable y aceptarlo por escrito, solicitar correcciones o rechazarlo. (…) **Ningún entregable se considerará aceptado de forma tácita.**"*

⚠️ El contrato también dice, en la misma cláusula, que *"en caso de no realizar ninguna corrección en dicho plazo, los Servicios se entenderán como entregados"*. ❓ Las dos frases conviven y se tensionan; Monific invoca la de aceptación no tácita. → [[Contradicciones y Verificaciones]]

### 3. Corrección sin costo adicional

> *"El Proveedor se compromete a **corregir sin costo adicional** cualquier error (…) o cualquier situación en la cual los Servicios no cumplan con lo establecido en el Anexo A, sin que estas correcciones se consideren incumplimiento."*

Por eso el requerimiento del 2026-06-18 insiste en que no es una renegociación económica.

---

## Otras cláusulas relevantes

| Tema | Contenido |
|---|---|
| **Duración** | Vigente desde la firma, por el tiempo del Anexo (6 meses). **Rescisión con aviso escrito de 30 días** por incumplimiento de cualquiera de las partes. No contempla terminación anticipada salvo acuerdo mutuo por escrito |
| **Pago por entregable** | *"El Cliente pagará (…) únicamente respecto de los periodos efectivamente prestados y entregables entregados. **No se devengará contraprestación alguna por periodos suspendidos, entregables no aceptados o incumplimientos parciales o totales**"* |
| **Facturación** | B&O factura los primeros 5 días hábiles de cada mes. Pago hasta 15 días naturales después. Mora: 5 % mensual sobre saldos vencidos. B&O puede suspender servicios con 2+ facturas impagas |
| **Propiedad intelectual** | ⚠️ **Toda la PI desarrollada para Monific es propiedad exclusiva de Monific**: arquitectura de procesos, pipelines, workflows, dashboards, integraciones, automatizaciones, documentación y know-how. B&O renuncia expresamente a reutilizarla o licenciarla a terceros |
| **Indemnización** | B&O responde por incumplimiento, negligencia, errores u omisiones que afecten la operación o el **cumplimiento regulatorio** del cliente. Sin límite de responsabilidad en dolo, negligencia grave o violación de confidencialidad |
| **Confidencialidad** | Indefinida tras la terminación. Además, Monific no puede contratar personal de B&O durante 3 años |
| **Colaboración del cliente** | Si hay retrasos por falta de información o aprobaciones del cliente, **B&O no está en incumplimiento** y se puede acordar prórroga por escrito. Es el principal contraargumento disponible para B&O |
| **Notificaciones** | Monific: contacto@monific.com · B&O: roberta@black-n-orange.com con copia a legal@blno.group y administracion@blno.group |
| **Jurisdicción** | Mediación bajo la Ley de Justicia Alternativa de CDMX. Si no hay acuerdo en 60 días → tribunales de la Ciudad de México |
| **Días inhábiles** | Feriados oficiales de México. B&O tiene periodo vacacional del 20 de diciembre al 6 de enero |
| **Reuniones** | Mes 1: hasta 1 reunión semanal de 1 h. Meses 2–6: semanal de hasta 30 min + mensual de 1 h |

---

## Alcance: incluido vs. excluido

Ver el desglose completo en [[Proyecto BOOST]]. Lo esencial:

**Incluido:** configuración de los tres hubs, pipelines, tickets de cobranza, workflows, revisión de integraciones (App Monific, WhatsApp, Singular, CallPicker, cuentas de publicidad), dashboards ejecutivos, base de conocimiento, capacitación y soporte funcional.

**Excluido:** licencias, desarrollo web/blog/plantillas, integraciones fuera de lo descrito, nuevas unidades de negocio y **copys de contenido**.

---

## Aclaración de autoría — punto sensible

Monific dejó por escrito, en el requerimiento formal, que:

> *"Los tres masters de implementación, los flujogramas y la documentación TO-BE son **entregables de BNO** derivados de su propio discovery (Add-On Mapeo de Procesos Elite); **no son insumos que Monific debía proporcionar**. Su elaboración y corrección forman parte del alcance contratado."*

Esto cierra la puerta al argumento de que los masters eran una responsabilidad compartida.

---

## Relacionado

- [[Proyecto BOOST]] — el alcance funcional
- [[Conflicto Contractual]] — cómo se está aplicando el contrato
- [[Economia del Proyecto]] — fees y pagos
- [[Documentos Contractuales]] — dónde está cada archivo

## Fuentes

- `P_CONTRATO` — Contrato Monific–B&O (2026-01-05)
- `P_ANEXO` — Anexo A · Resumen Ejecutivo / Plan BOOST
- `P_NOTIF` — Notificación contractual de inconformidades (2026-06-18)
- `X020` — Requerimiento Formal, secciones 2 y 8
