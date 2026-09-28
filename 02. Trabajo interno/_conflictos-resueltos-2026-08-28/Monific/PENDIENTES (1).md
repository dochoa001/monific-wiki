# Pendientes — Wiki de Monific

Registro de **información que falta o está por confirmar** para que la wiki sea completa. Se alimenta
en cada ingesta y en cada pase de `/auditoria`. Cuando algo se resuelve, **se elimina de aquí** y la
respuesta queda en la página que corresponda.

No confundir con las páginas de estado del proyecto, que llevan otra cosa:

| Página | Qué lleva |
|---|---|
| [[Pendientes Criticos]] | Los **bloqueadores del proyecto**: 84 críticos, 87 altos y los seis que no deben perderse |
| [[Preguntas Abiertas]] | Las **preguntas analíticas** del proyecto |
| [[Contradicciones y Verificaciones]] | Dónde dos fuentes no coinciden |
| **Este archivo** | Los **huecos documentales**: la fuente que no tenemos, el dato canónico vacío, la sección sin poblar |

**Última revisión:** 2026-08-20

---

## Datos canónicos vacíos en `cliente.yaml`

| Campo | Qué falta | Cómo se cierra |
|---|---|---|
| `cliente.nombre_legal` | Razón social de Monific | Contrato — es la única cuenta del portafolio con contrato conocido, así que el dato existe |
| `hubspot.suscripcion` | Qué hubs y qué nivel tiene el portal `48427391` | [[Portal HubSpot]] lo describe; falta reflejar el dato exacto aquí |
| `contactos_clave[].correo` | Correos y **roles formales** de Caroline Bersot, Jesús Torres, Raquel Alfie y Ted Senado | [[Directorio de Contactos]] los tiene parcialmente; confirmar con el cliente |
| `pauta` | Sin pauta documentada | El alcance es implementación, no generación de demanda. Si se contrata, documentar cuentas, IDs y convención UTM |

## Secciones del contrato de wiki sin poblar

El contrato de wiki de cliente de B&O pide cubrir estrategia y marketing igual que la parte técnica.
En esta cuenta el alcance es implementación, así que varias quedan **fuera de alcance a propósito** —
y eso es una respuesta válida, no un hueco:

| Sección | Estado | Nota |
|---|---|---|
| ICP y buyer personas | ✅ Cubierta | [[Buyer Persona Inversionista]] y [[Buyer Persona Solicitante]] |
| Propuesta de valor y modelo de negocio | ✅ Cubierta | [[Modelo de Negocio]] |
| Procesos y SLAs | ✅ Cubierta | Las 5 páginas de `04 Procesos/` + [[SLAs y Escalamientos]] |
| Objetivos y KPIs con metas | ⚠️ Parcial | Hay cifras de avance en [[Estado Actual]]; **no hay página de KPIs de negocio con metas** |
| **Guía de voz y tono del cliente** | ❌ **Falta** | Hay vocabulario controlado en `AGENTS.md` §12, que no es lo mismo. Sin ella, un agente no puede escribir comunicaciones on-brand — y hay **81 comunicaciones por publicar** |
| Calendario editorial · blogs · SEO | ❌ Fuera de alcance | No es parte del engagement |
| Pauta pagada, IDs y convención UTM | ❌ Fuera de alcance | No es parte del engagement |
| Lead magnets | ❌ Fuera de alcance | No es parte del engagement |

> ⚠️ El hueco que sí duele es la **guía de voz y tono**: el entregable B08 son 81 comunicaciones y
> ninguna está publicada. Redactarlas sin guía de voz obliga a improvisar el tono del cliente.

## Fuentes sin extraer o sin ingerir

| Material | Qué aportaría | Dónde está |
|---|---|---|
| Flujogramas 01–04 | Nunca se extrajeron; son el detalle de los procesos | `drive-download-*/` |
| `Directorio Responsables - Monific.xlsx` | Roles y correos formales del equipo del cliente | Raíz de la wiki |
| `Propuesta Gantt v2 - Monific (actualizado 16-jul).xlsx` | Plan y fechas comprometidas | Raíz de la wiki |
| `Monific-HubSpot-Integracion-Tecnica.pdf` | Detalle técnico de la integración | Raíz de la wiki |
| `Recurrente Monific_ 2026_05_15 ... Notas de Gemini.docx` | Sesión sin destilar | Raíz de la wiki |

> ⚠️ **Regla del proyecto:** descomprime los `.zip` antes de inventariar. Un `.zip` en `Adicionales/`
> escondió `D198` —la fuente más reciente— durante cuatro días.

## Higiene de la wiki

| Hallazgo | Detalle | Acción |
|---|---|---|
| ✅ `.git` eliminado | Había un `.git` vacío en `Monific/`, cáscara que dejó Drive al intentar sincronizarlo. Sin commits ni remoto | Resuelto el 2026-08-20 |
| Copia de conflicto de Drive | `drive-download-20260807T143934Z-1-001/Gantt - Monific (1).xlsx` | Comparar con el original, fusionar y borrar la copia |
| Archivo con nombre ambiguo | `02 Proyecto/Conflicto Contractual.md` contiene `(1)`… no: es un nombre legítimo. **Falso positivo** del detector, que busca `(N)` en cualquier archivo | Ninguna. Anotado para no volver a levantarlo |
| **11 carpetas `drive-download-*` en la raíz de la wiki** | 93 archivos de fuentes crudas dispersos en carpetas con nombre de descarga automática | Consolidar en una sola carpeta `_raw/` **actualizaría 5 páginas** que las referencian ([[Indice de Fuentes]], [[Documentos Contractuales]], `LEEME.md`, `AGENTS.md`, `MANTENIMIENTO.md`). No se hizo en la homologación para no romper referencias sin validarlo |
| Archivos sueltos en la raíz | `.xlsx`, `.pdf`, `.docx` y un `Sin título.canvas` vacío conviven con los archivos de contrato de la wiki | Mover a `_raw/` junto con lo anterior, o dejar y documentar |
| `## Enlaces relacionados` vs `## Relacionado` | El contrato común usa `## Relacionado`. Varias páginas usan el nombre viejo | Migrar al tocar cada página; el verificador ya lo detecta |

## Relacionado

- [[Pendientes Criticos]] — los bloqueadores del proyecto, que es otra cosa
- [[Preguntas Abiertas]] — las preguntas analíticas
- [[Indice de Fuentes]] — el mapa entre IDs y documentos originales
- [[Estado Actual]] — las cifras de avance al corte más reciente
- [[index]] — el mapa maestro de la wiki
