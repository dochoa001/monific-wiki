# Paquete de contexto — Flujogramas V2 de Monific (para armar el correo al consultor)

**Fecha:** 2026-09-04 · **Preparó:** David Ochoa (B&O), con asistencia de Claude
**Para qué sirve este documento:** es el insumo autocontenido para redactar, en otra sesión, el
correo interno al consultor de la cuenta (**Emmanuel Chulin**, responsable de Monific por B&O desde
junio 2026), para que revise, ajuste lo que considere y lo envíe al cliente con lo que hay.
**Este documento es interno de B&O. No se envía al cliente tal cual.**

---

## Qué se hizo

Los flujogramas (swim lanes) de los procesos de Monific vivían en un Miro que **no pertenece a
B&O** (tableros V1, feb–mar 2026, presentados por el equipo anterior) y ya no reflejaban las
decisiones tomadas durante el proyecto. Se leyeron completos los tableros V1 y se construyeron
**5 tableros nuevos (V2) en la cuenta de Miro de B&O**, actualizados con las decisiones canónicas
del Maestro Operativo del 2026-07-31 y del contrato técnico de API. Los V1 del cliente **no se
tocaron** y quedan como histórico.

**Estado:** propuesta TO-BE (proceso objetivo) **pendiente de validación de Monific**. No describen
el estado actual del portal — configurado ≠ verificado.

---

## Los 5 tableros y sus links

| # | Tablero | Link | Qué contiene |
|---|---|---|---|
| 1 | **Proceso Comercial – Solicitantes V2** | https://miro.com/app/board/uXjVHsUR1nE=/ | Del formulario web al Cierre Ganado: viabilidad por garantía, expediente en Drive con formulario puente, evaluación por equipos (E.E.T./E.E.F./E.E.J.), comité, formalización con objeto Proyecto, firma notarial (SLA 15 días hábiles) y gate doble a Ganado |
| 2 | **Proceso Comercial – Inversionistas V2** | https://miro.com/app/board/uXjVHsUCRO8=/ | Del lead a inversionista activo por niveles de registro 1→4; regla madre (HubSpot refleja, no origina); un onboarding por usuario; movimientos PURCHASE/SOLD/LIQUIDATION por move_id; congelado con reglas A/B; cierres INV-13 |
| 3 | **Proceso de Cobranza V2** | https://miro.com/app/board/uXjVHsUSSk0=/ | De la inversión efectiva a la liquidación o ejecución: ticket por campaña, ciclo preventivo (T-10/T-7/T-5, regla de las 18:00), mora temprana/moderada/grave, saldo en garantía, reestructura, refinanciamiento como ticket nuevo, ejecución de garantía |
| 4 | **Servicio ATC y UNE V2** | https://miro.com/app/board/uXjVHr71yws=/ | Arriba: atención a clientes (tickets tipo A–E, escalamiento a TI con folio, SLAs). Abajo: proceso regulatorio UNE (UNE-01–06, plazo CNBV de 30 días hábiles). Conectados por el ticket Tipo E, que siempre genera ticket separado |
| 5 | **Integración API – mapa entre sistemas** | https://miro.com/app/board/uXjVHr71ouw=/ | Mapa simple: Monific (app + Admin, donde vive la lógica) → SDK/app privada trama1-monific (unidireccional) → HubSpot (objetos). Modos de sincronización, robustez, gate T1–T7 y 4 tarjetas que enlazan a los otros tableros |

**Acceso:** los cinco están en el equipo de Miro de B&O. El equipo de B&O entra con su cuenta; para
compartirlos con Monific hay que ajustar los permisos de compartición del tablero (o exportar).

**Referencia de los V1 del cliente (histórico, solo lectura):** swimlane comercial
`miro.com/app/board/uXjVG7nRR_I=` · swimlane cobranza `miro.com/app/board/uXjVG67KB7Y=`.
ATC/UNE e integración **no tenían flujograma** en el Miro del cliente: los V2 son los primeros.

---

## Cómo leer los tableros (aplica a los 5)

- **Carriles por actor** con la simbología del V1 para que el cliente los reconozca: azul =
  cliente/lead · amarillo = Admin/App Monific · naranja = HubSpot · blanco = persona del equipo ·
  rombo oscuro = decisión · verde = fin de proceso · hexágono amarillo = conexión a otro proceso.
- **Panel verde** en cada tablero: "Qué cambió en V2 vs V1" — la lista de ajustes con su fuente y fecha.
- **Panel rosa**: lo que sigue **por confirmar con Monific** o pendiente de TI.
- **Panel blanco**: pipeline, fuentes documentales y trazabilidad.
- Los datos en disputa **no se fijaron en el diagrama**: se marcan por-confirmar y se cierra con que
  **la integración alimenta el dato** (el valor se carga en Admin Monific y llega a HubSpot por propiedad).

## Los cambios mayores vs V1 (resumen para el correo)

1. **Solicitantes:** se eliminó el Lead Scoring A/B/C (descartado el 2026-07-27) → viabilidad = tener
   inmueble en garantía, caso intermedio decide el asesor. Nuevo formulario puente ("Confirmo que
   cargué todo", porque HubSpot no lee Drive), seguimiento 2/3/7/15 días, carta de observaciones a 5
   días hábiles, creación del objeto **Proyecto** en Formalización y **gate doble** a Cierre Ganado
   (contrato firmado = Sí Y campaña publicada confirmada por Admin).
2. **Inversionistas:** `nivel_registro` 1–4 como estado canónico (INV-03); alta/KYC/CLABE solo en la
   app (INV-02); **un** onboarding por `monific_user_id` (INV-04); sin Deal padre de campaña; cada
   movimiento es un Negocio por `move_id` (INV-06); congelado con reglas A/B (INV-12); **pagos y
   rendimientos fuera de HubSpot** (INV-08); retiros y UNE fuera del ciclo (INV-11).
3. **Cobranza:** vive en **Tickets** (el "Objeto de Cobranza" de los masters no existe; decisión
   2026-06-29); un ticket por campaña deduplicado por `id_de_campana_financiamiento`;
   **refinanciamiento = ticket nuevo** (FIN-001-REFIN, regla 24) con trazabilidad CNBV; recordatorios
   disparados por `fecha_proximo_recordatorio` que calcula el backend (regla 29); Día 1 =
   incumplimiento sin gracia, regla de las 18:00; en ejecución de garantía se notifica también al
   solicitante (corrige WF-061).
4. **ATC/UNE:** dos relojes distintos — SLA interno (primera respuesta < 5 min) ≠ plazo regulatorio
   (30 días hábiles de dictamen); reclamación UNE siempre en ticket separado; nueva reclamación =
   ticket nuevo.
5. **Integración:** regla de oro — el Admin calcula, HubSpot almacena y orquesta; flujo unidireccional
   (D-02); el Proyecto es el conector de todo por `numero_de_proyecto`.

## Lo que el consultor debe revisar o decidir antes de enviar al cliente

1. **Revisión visual** de los 5 tableros (el layout se generó por cuadrícula; puede querer acomodar
   algún conector o etiqueta — todo es editable, son shapes nativos de Miro).
2. **Cobranza — parámetros contractuales por confirmar** (panel rosa del tablero 3): interés
   moratorio (instrucción de dirección: 2× la tasa ordinaria, Vianey Correa 2026-03-05, vs 38% del
   diseño previo), comisión por pago tardío (15% + IVA sin confirmación independiente) y aforo
   (2:1 pedido por dirección vs 1.5:1 del diseño). El diagrama no fija números.
3. **Cobranza — cadena de escalamiento:** hay tres versiones sin conciliar (ARI día 15/16/30/61+ ·
   semana 1 Monific / semana 2 despacho / semana 3 legal · SLAs por fase). Pendiente de conciliar
   con Monific.
4. **UNE — decisión de folio:** folio y fecha límite calculados por el Admin vía API (recomendado,
   coherente con la regla 29) vs ID nativo del ticket (no cumple el plazo hábil real).
5. **Permisos de compartición** de los tableros antes de mandar los links al cliente.
6. Definir si el correo pide **validación formal por escrito** de los V2 (los V1 se validaron así en
   feb–mar 2026: se pidió feedback dentro del Miro con fecha límite).

## Contexto de personas (para el tono del correo)

- **Emmanuel Chulin** — consultor responsable de la cuenta por B&O (destinatario interno del correo).
- **Raquel Alfie** — champion del proyecto por Monific: la persona que aprueba todo.
- **David Ochoa** — implementador HubSpot, preparó estos tableros.
- Antecedente: los V1 los presentó el equipo anterior (Caroline/José/Ricardo) en feb–mar 2026 y se
  aprobaron con comentarios dentro del Miro. El proyecto está en fase de cierre con requerimiento
  formal del cliente; estos V2 son parte de ordenar la casa: reflejan lo realmente decidido.

## Registro

Todo quedó documentado en la wiki de Monific: liga V2 en las páginas de proceso
([[Proceso Comercial Solicitantes]], [[Proceso Comercial Inversionistas]], [[Proceso de Cobranza]],
[[Proceso de Servicio ATC]], [[Proceso UNE]], [[Integracion Admin Monific HubSpot]]) y dos entradas
en `log.md` del 2026-09-01.
