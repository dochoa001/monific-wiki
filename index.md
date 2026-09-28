---
titulo: Índice
tipo: indice
area: transversal
estado: verificado
confianza: alta
actualizado: 2026-09-28
fuentes: []
tags: [indice]
---

# Índice de la Wiki Monific

> Mapa maestro: todas las páginas de la wiki con una línea de descripción. Para navegar por temas, usa [[Mapa General]]. Para el contexto en 5 minutos, [[Resumen Ejecutivo]].

**Corte de contenido:** 2026-08-11 · **Proyecto:** BOOST — Monific × Black & Orange · **Portal HubSpot:** 48427391

**Estructura v1.0** — homologada el 2026-08-20 con las otras siete wikis de B&O. Los datos canónicos
están en `cliente.yaml`; el contrato de trabajo, en [[AGENTS]].

---

## 📄 Archivos de control

| Archivo | Qué es |
|---|---|
| [[AGENTS]] | **Esquema operativo canónico.** Reglas, estructura, formato de página, marcadores de confianza y flujos. Léelo antes de tocar nada. Vale para cualquier agente |
| [[CLAUDE]] | Importa `AGENTS.md` y añade lo específico de Claude Code: las 4 skills |
| `cliente.yaml` | **Ficha maestra machine-readable**: portal `48427391`, objetos, cifras de avance, rutas de fuentes |
| [[README]] | Guía para humanos: cómo usar la wiki en Obsidian |
| `index.md` | Este archivo — el mapa maestro |
| [[log]] | Bitácora, **más reciente arriba** |
| `PENDIENTES.md` | Huecos documentales: fuentes sin ingerir y datos canónicos vacíos |
| `MANTENIMIENTO.md` | Rutinas, Obsidian y el flujo en equipo sobre Drive |
| `scripts/verificar-enlaces.ps1` | Valida wikilinks, huérfanas y copias de conflicto de Drive |

---

## 00 Inicio

| Página | Una línea |
|---|---|
| [[Mapa General]] | Punto de entrada. Navegación por temas + consultas Dataview |
| [[Resumen Ejecutivo]] | El 80 % del contexto en 5 minutos |
| [[Glosario]] | Siglas, roles, objetos y vocabulario controlado |

## 01 Cliente

| Página | Una línea |
|---|---|
| [[Monific]] | Quién es el cliente: fintech de crowdfunding inmobiliario regulada por CNBV |
| [[Modelo de Negocio]] | Cómo fluye el dinero: de la solicitud a la liquidación o la ejecución de garantía |
| [[Buyer Persona Inversionista]] | Quién invierte, sus cuatro fases de embudo y las automatizaciones pedidas |
| [[Buyer Persona Solicitante]] | Quién pide financiamiento, el formulario y el árbol de decisiones |
| [[Marco Regulatorio]] | CNBV, Ley Fintech, UNE, PLD y por qué elevan el riesgo del proyecto |
| [[Stack Tecnologico Monific]] | Todas las herramientas y el rol de cada una tras BOOST |

## 02 Proyecto

| Página | Una línea |
|---|---|
| [[Proyecto BOOST]] | Qué se contrató: objetivos, MVP, alcance incluido y excluido |
| [[Contrato y Alcance]] | Las cláusulas que gobiernan, con foco en las tres del conflicto |
| [[Metodologia BOOST]] | Learn · Do · Teach · Repeat, y cómo se desvió del plan |
| [[Cronologia del Proyecto]] | Línea de tiempo completa de dic-2025 a ago-2026 |
| [[Plan de Cierre y Gantt]] | El Gantt v2 vigente y el gate técnico T1–T7 |
| [[Gobernanza y Rituales]] | Canales, cadencia, estructura de Drive y quién decide qué |
| [[Economia del Proyecto]] | $382,482 MXN, la bolsa de 30 horas y el corte de horas exigido |
| [[Conflicto Contractual]] | ⚠️ El requerimiento formal del 2026-06-18 y sus 217 pendientes |

## 03 Personas

| Página | Una línea |
|---|---|
| [[Directorio de Contactos]] | Nombres, cargos, correos y los nombres mal transcritos |
| [[Equipo Monific]] | Los cinco directivos, TI y cómo trabaja el cliente |
| [[Equipo Black and Orange]] | El equipo del proveedor y la transición de cuenta de junio |
| [[Roles Operativos]] | A.A.S., A.A.I., E.A.C., D.C., D.C.L., ARI y quién ocupa cada uno |
| [[Raquel Alfie]] | Champion del proyecto — la persona que aprueba todo |
| [[Ted Senado]] | Director General, firmante del contrato |
| [[Jesus Torres]] | CTO — la dependencia crítica de la integración |
| [[Emmanuel Chulin]] | Responsable de la cuenta por B&O desde junio de 2026 |
| [[David Ochoa]] | Implementador HubSpot, el único presente todo el proyecto |
| [[Caroline Bersot]] | PM hasta junio de 2026; su salida escaló el conflicto |

## 04 Procesos

| Página | Una línea |
|---|---|
| [[Proceso Comercial Solicitantes]] | Del formulario a la campaña publicada. WF-001–024 |
| [[Proceso Comercial Inversionistas]] | Del registro a inversionista activo. WF-025–040 e INV-01 a INV-14 |
| [[Proceso de Cobranza]] | De la inversión efectiva a la liquidación o ejecución. WF-050–064 |
| [[Proceso de Servicio ATC]] | Tickets de atención, cinco tipos y escalamiento a TI. WF-041–049 |
| [[Proceso UNE]] | Reclamaciones formales reguladas. UNE-01–06, ninguna acreditada |
| [[SLAs y Escalamientos]] | Todos los tiempos comprometidos y quién empuja a quién |
| [[Matriz de Comunicaciones]] | Las 81 comunicaciones objetivo, declaradas publicadas el 31-ago y aún sin evidencia |

## 05 HubSpot

| Página | Una línea |
|---|---|
| [[Portal HubSpot]] | Cuenta 48427391: licencias, límites y lo que la suscripción no permite |
| [[Modelo de Datos HubSpot]] | Cinco objetos, las llaves de negocio y las asociaciones pendientes |
| [[Pipelines]] | Las etapas de los cinco pipelines + el desorden de pipelines heredados |
| [[Workflows]] | Tablero completo WF-001–064 y UNE-01–06 con ID y estado |
| [[Propiedades]] | 2,142 en el portal, 26 comprometidas que no existen, 383 vacías |
| [[Dashboards y Reportes]] | Los cuatro dashboards contractuales, ninguno construido |
| [[Higiene y Accesos]] | Apps privadas, scopes, usuarios, destinatarios de B&O y limpieza |

## 06 Integración

| Página | Una línea |
|---|---|
| [[Integracion Admin Monific HubSpot]] | La arquitectura, la historia del bloqueo y el gate T1–T7 |
| [[Reglas de Negocio API]] | Las 30 reglas del contrato técnico, una por una |
| [[Diccionario de Propiedades API]] | El mapeo campo a campo HubSpot ↔ Admin Monific |
| [[Sistemas Externos]] | STP, Expediente Azul, WhatsApp, CallPicker, Singular, Moonflow, Zendesk |

## 07 Estado

| Página | Una línea |
|---|---|
| [[Estado Actual]] | La foto al corte: semáforo global, cifras y avances recientes |
| [[Auditorias]] | Las cuatro auditorías, la verificación por API, el método del cliente y la revisión de cierre del 2026-09-24 |
| [[Bloques de Cierre B01-B16]] | Los 16 paquetes de trabajo exigidos, con plazos y criterios |
| [[Pendientes Criticos]] | Los seis pendientes que no deben perderse y los bloqueadores duros |
| [[Riesgos]] | 17 riesgos mapeados por severidad + los ya materializados |
| [[Analisis de Cierre BNO]] | ⭐ La lectura de B&O al 2026-08-03: de los 29 rojos, ~10 son defectos propios |
| [[Contradicciones y Verificaciones]] | ⚠️ Lo que no cuadra entre fuentes. **Leer antes de configurar nada** |
| [[Preguntas Abiertas]] | 33 decisiones pendientes, 8 datos por verificar, 14 huecos de conocimiento |

## 08 Fuentes

| Página | Una línea |
|---|---|
| [[Indice de Fuentes]] | Mapa ID ↔ documento original + cómo extraer fuentes nuevas |
| [[Correspondencia]] | ⭐ Los 100 correos oct-2025 → jun-2026: la fuente que corrigió la cronología y el conflicto |
| [[Minutas]] | Las 21 minutas y las tres que hay que leer sí o sí |
| [[minuta-2026-08-24-cierre-declarado-y-confronta-auditoria]] | 🆕 Minuta 2026-08-24 · Sesión **interna B&O**: se declara que *"ya no hay deuda de trabajo"* y se encarga la confronta contra la auditoría de Raquel. Abre C-32. Fuente `D200` |
| [[minuta-2026-08-31-homologacion-flujogramas-y-reprogramacion]] | 🆕 Minuta 2026-08-31 · Sesión **interna B&O**: el único pendiente propio es homologar el flujograma; se convoca la alineación del 02-sep. Abre C-33. Fuente `D201` |
| [[minuta-2026-09-02-flujogramas-simplificados]] | Minuta 2026-09-02 · Sesión **interna B&O**: se adopta el flujo simplificado y se aplaza la entrega al cliente hasta cerrar ATC y UNE. Fuente `D199` |
| [[minuta-2026-09-08-mapeos-cubiertos-y-espera-integracion]] | 🆕 Minuta 2026-09-08 · Sesión **interna B&O**: mapeos cubiertos, capacitaciones listas y cero pendientes propios; solo falta la integración de Monific. El correo al cliente sigue sin salir. Tercera fila de C-32. Fuente `D202` |
| [[revision-cierre-2026-09-24-reporte-evidencias-monific]] | 🆕 Revisión de cierre 2026-09-24 · Documento **de Monific** con export por API: 14 hallazgos (5 críticos), 105 workflows, *"no hay sustento para aceptar el cierre integral"*. Abre C-34 a C-36. Fuentes `D203`, `D204` |
| [[Masters de Implementacion]] | Los cuatro Excel entregables y sus dos problemas (B01 y B12) |
| [[Documentos Contractuales]] | Contrato, anexo, requerimiento y dónde está cada uno |

**`08 Fuentes/_extractos/`** — 108 archivos `.txt` con el texto plano de cada fuente. No son notas de Obsidian; se buscan con grep o con la búsqueda global.

## 99 Plantillas

| Página | Para qué |
|---|---|
| [[Plantilla Pagina]] | Página genérica de la wiki |
| [[Plantilla Minuta]] | Registrar una reunión nueva |
| [[Plantilla Fuente]] | Registrar un documento fuente nuevo |
| [[plantilla-pieza-tecnica]] | Algo construido: workflow, propiedad, integración, comunicación |
| [[plantilla-campana-pauta]] | Campañas de pauta pagada, con IDs y resultados |
| [[plantilla-brief-contenido]] | Briefs de contenido: blog, landing, lead magnet o email |

---

## Atajos por pregunta frecuente

| Pregunta | Página |
|---|---|
| ¿Qué es esto en 5 minutos? | [[Resumen Ejecutivo]] |
| ¿En qué punto está el proyecto? | [[Estado Actual]] |
| ¿Qué está roto? | [[Pendientes Criticos]] · [[Workflows]] |
| ¿Qué hay que entregar para cerrar? | [[Bloques de Cierre B01-B16]] |
| ¿Por qué el cliente está molesto? | [[Conflicto Contractual]] |
| ¿Cuánto de lo roto es culpa de B&O? | [[Analisis de Cierre BNO]] |
| ¿Qué dato no me puedo creer? | [[Contradicciones y Verificaciones]] |
| ¿Qué falta decidir? | [[Preguntas Abiertas]] |
| ¿Cómo funciona el negocio? | [[Modelo de Negocio]] |
| ¿Cómo funciona la integración? | [[Integracion Admin Monific HubSpot]] |
| ¿Dónde está el documento X? | [[Indice de Fuentes]] |
| ¿Quién es esta persona? | [[Directorio de Contactos]] |
| ¿Qué significa esta sigla? | [[Glosario]] |

---

## Estado de la wiki

| Métrica | Valor |
|---|---|
| Páginas | 62 (+3 plantillas, +5 de control) — ⚠️ `cliente.yaml` dice `paginas: 66`; la discrepancia es previa y no se resolvió aquí |
| Fuentes extraídas | 108 extractos de ~100 documentos · ⚠️ `D199` a `D204` **no tienen extracto** (leídos por MCP de Drive) |
| Fuentes ancla | 10 |
| Contradicciones registradas | 36 — **5 resueltas**, 31 abiertas (C-34, C-35 y C-36 nuevas el 2026-09-28) |
| Preguntas abiertas | 33 + 8 verificaciones + 14 huecos |
| Última actualización | 2026-09-28 |

---

## Fuentes

Página de índice; sin afirmaciones propias.
