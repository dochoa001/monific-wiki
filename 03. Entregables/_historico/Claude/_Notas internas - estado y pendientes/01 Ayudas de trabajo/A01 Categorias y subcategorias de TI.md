# A01 · Categorías y subcategorías de tickets TI

> **Para quién:** Ejecutivo de Atención a Clientes (E.A.C.)
> **Cuándo se usa:** al escalar un ticket **Tipo A** (problema técnico), con el cliente esperando.
> **Formato final:** una página, imprimible, pegada al escritorio.

Son **11 categorías y 36 subcategorías**. Nadie las memoriza en una hora — y sin ellas no se puede escalar bien: la categoría es lo que determina **qué persona de TI atiende el caso**.

---

## Cómo se usa

1. Identifica de qué **se queja** el usuario, no qué crees que está roto por dentro.
2. Busca la categoría en la columna izquierda.
3. Elige la subcategoría más cercana. **Si dudas entre dos, elige la más específica.**
4. Si nada encaja, usa la categoría más cercana y **descríbelo en el campo de texto** — no inventes una subcategoría nueva.

> El % de la derecha es sobre el histórico real de **103 tickets de Zendesk en 2025**. Sirve para saber qué es común y qué es raro: si estás clasificando algo del 1 %, vale la pena leer dos veces.

---

## El catálogo completo

| # | Categoría | Subcategoría | Tickets | % |
|---|---|---|---|---|
| **1** | **Gestión de Datos de Cuenta** | Cambio / corrección de correo electrónico | 15 | 15 % |
| | | Actualización de documentos de identidad (INE / CSF) | 6 | 6 % |
| | | Cambio / corrección de teléfono | 5 | 5 % |
| | | Actualización de beneficiarios | 1 | 1 % |
| **2** | **Alta / Baja de Cuenta** | Baja de cuenta de inversionista | 7 | 7 % |
| | | Duplicado de cuenta / cuentas dobles | 2 | 2 % |
| | | Alta cuenta persona moral | 2 | 2 % |
| | | Alta de usuario en Admin | 1 | 1 % |
| **3** | **Acceso y Autenticación** | Restablecimiento de contraseña provisional | 6 | 6 % |
| | | Problemas con MFA (doble factor) | 2 | 2 % |
| | | Problemas con token / sesión | 1 | 1 % |
| | | Delay / fallo en SMS de verificación | 1 | 1 % |
| | | Biométricos (Android / iOS) | 1 | 1 % |
| **4** | **Retiros y Movimientos** | Consulta / seguimiento de movimientos | 5 | 5 % |
| | | Retiro pendiente / no reflejado | 4 | 4 % |
| | | Retiro devuelto | 2 | 2 % |
| | | Gestión de retiro | 1 | 1 % |
| **5** | **Asociaciones y Referidos** | Asociar cliente con referido / referente | 10 | 10 % |
| | | Asociar cliente con agente / asesor | 2 | 2 % |
| **6** | **Bonificaciones y Promociones** | Bonificación por línea conjunta / proyecto | 4 | 4 % |
| | | Bonificación general | 3 | 3 % |
| | | Aumento de regalía (proyecto Naala, etc.) | 3 | 3 % |
| | | Bonificación por reto / dinámica | 2 | 2 % |
| | | Bonificación inversionistas migrados | 1 | 1 % |
| | | Bonificación campaña especial (Buen Fin, etc.) | 1 | 1 % |
| **7** | **Comisiones** | Quitar / ajustar comisión de éxito | 2 | 2 % |
| | | Duda o ajuste de comisión | 1 | 1 % |
| **8** | **Problemas Técnicos en App** | Fallo o error general en la app | 2 | 2 % |
| | | Error en cuenta / datos del proyecto | 2 | 2 % |
| | | Problemas de descarga de la app | 1 | 1 % |
| **9** | **Consultas e Información** | Consulta de monto activo de inversionistas | 2 | 2 % |
| | | Solicitud de reporte / CSV | 1 | 1 % |
| | | Consulta calendario de pagos | 1 | 1 % |
| **10** | **Cambios en Inversión** | Solicitud de cambio de proyecto / asignación | 1 | 1 % |
| **11** | **Configuración y Administración Interna** | Configuración de herramientas internas (HubSpot, API, Admin) | 2 | 2 % |
| | | **TOTAL** | **103** | **100 %** |

---

## Las tres confusiones más comunes

| El usuario dice | No es | Es |
|---|---|---|
| *"No me llegó mi dinero"* | Problemas Técnicos en App | **4 · Retiros y Movimientos** → Retiro pendiente / no reflejado |
| *"No puedo entrar"* | Problemas Técnicos en App | **3 · Acceso y Autenticación** → la subcategoría depende de si falla la contraseña, el MFA o el SMS |
| *"Mi bonificación no aparece"* | Comisiones | **6 · Bonificaciones y Promociones** |

**Regla práctica:** *Problemas Técnicos en App* es solo cuando **la app falla como app** — no abre, no descarga, truena una pantalla. Si la app funciona pero el dato está mal, la categoría es la del dato.

---

## Lectura útil para dirección

El **26 %** del volumen es gestión de datos de cuenta y el **12 %** son accesos. Entre las dos son casi 4 de cada 10 tickets, y ambas son candidatas naturales a **autoservicio** o a un artículo de la biblioteca de conocimiento de cara al cliente. Resolver eso baja la carga de TI más que cualquier mejora de proceso interno.

---

## Lo que hace este campo, además de clasificar

De la sesión de revisión del pipeline de Servicio: Monific coordina con **Jesús Torres** para que, **según la categoría y subcategoría**, se determine qué miembro del equipo de TI puede atender cada caso. Es decir, clasificar mal no solo ensucia el reporte: **manda el ticket a la persona equivocada.**

⚠️ Nota conocida: no todos los miembros de TI tienen usuario en HubSpot — al momento de la revisión, solo Jesús lo tenía. Por eso `Responsable TI asignado` es un campo de texto y no un selector de usuario.

---

## Estado y verificación

**Estado:** 🟡 redactado · 2026-08-18
**Fuente:** Master de Implementación Servicio/UNE, hoja *"Tickets TI – Cat&Subcat"* — histórico Zendesk 2025.
**Propiedades que usa:** `Categoría ticket TI` y `Subcategoría ticket TI` (Ticket · manual · selección individual · **obligatorias** en la etapa *Escalado a TI*).

**Falta para publicar:**

1. Verificar en el portal 48427391 que ambos dropdowns existan y que sus opciones coincidan **exactamente** con esta tabla, incluyendo acentos.
2. ⚠️ Riesgo conocido: el portal ya tiene un caso de dropdown con codificación UTF-8 inconsistente (`nombre_de_proyecto`, 172 opciones) que provoca errores 400 en la integración. **Al crear estos dos catálogos hay que fijar la convención de acentos desde el primer día.**
3. Confirmar con Jesús Torres el mapeo categoría → persona de TI.
4. Validación escrita de Monific.
