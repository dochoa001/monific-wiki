# A05 · Propiedades obligatorias por etapa · Inversionistas

> **Para quién:** Agente de Atención a Inversionistas (A.A.I.)
> **Cuándo se usa:** al revisar o completar un negocio de inversionista.
> **Formato final:** una página por las dos caras, imprimible.

## Antes de la tabla: la regla que cambia todo

> **HubSpot no origina nada en este proceso. Solo refleja lo que ocurre en la app de Monific.**

La cuenta, la contraseña, el KYC y la CLABE se crean **únicamente en la app o la web de Monific**. Un formulario de HubSpot solo capta interés de marketing.

**Consecuencia práctica:** casi todo aquí es **automático**. Si un dato está mal, no se corrige en HubSpot — se corrige en Admin y se espera la siguiente sincronización. Ver **S01 · La frontera de cálculo**.

---

## Creación del contacto

| Propiedad | Objeto | Llenado | Tipo | Valores |
|---|---|---|---|---|
| **Tipo de cliente** | Contacto | Auto | Selección | Inversionista · Solicitante · Ambos |
| **Canal de entrada** | Contacto | Auto o manual | Selección | Formulario Web · Chat Web · WhatsApp · Referido |
| **Fuente de lead** | Contacto | Auto o manual | Selección | Página Web · Redes Sociales · WhatsApp · Otro |
| ⚠️ Estatus de conversión | Contacto | Auto | Selección | 5 etapas — **ver advertencia abajo** |

**Opcionales manuales:** Código referido · Nombre de Broker.

---

## Etapa 1 · Perfil Activo

**Qué significa:** el inversionista completó el KYC en la app. **El indicador de activación es la CLABE STP** — sin CLABE, el KYC no está completo.

| Propiedad | Objeto | Llenado | Tipo |
|---|---|---|---|
| **Nivel de registro** | Negocio | Auto | Selección ⚠️ *ver advertencia* |
| **Fecha de registro** | Negocio | Auto | Fecha |
| **CLABE STP** | Negocio | Auto | Número |
| **Propietario** | Negocio | Auto | Usuario HubSpot |
| **Fecha de creación de negocio** | Negocio | Auto | Fecha |

### El calendario de empuje al fondeo

| Momento desde creación del negocio | Qué pasa |
|---|---|
| **24 h** sin fondos | Email al inversionista |
| **36 h** sin fondos | WhatsApp |
| **48 h** sin fondos | Tarea al A.A.I. con SLA de **2 horas** |
| **72 h** sin fondos | Segundo email |
| **15 días** sin fondos | 🔴 El negocio pasa a **Congelado** automáticamente |

La secuencia **se detiene sola** cuando entra un fondeo **≥ $1,000.00 MXN**. Ese mismo monto es el que mueve el negocio a *Inversionista Activo*.

---

## Etapa 2 · Inversionista Activo

**Qué significa:** son en realidad dos momentos distintos en la misma etapa.

- **Momento 1 — CLABE lista pero sin invertir.** Es *"el silencio crítico más peligroso del proceso"*: el inversionista tiene fondos pero no genera rendimiento.
- **Momento 2 — ya invirtió.** Se empuja a la reinversión con nuevas campañas.

Permanece aquí mientras tenga uno o más proyectos vigentes **o** haya invertido en los últimos 90 días.

| Propiedad | Objeto | Llenado | Tipo |
|---|---|---|---|
| **Fecha de primera inversión** | Negocio | Auto | Fecha |
| **Monto de primera inversión** | Negocio | Auto | Número |
| **Saldo disponible** | Negocio | Auto | Número |
| **Fecha de inicio de campaña** | Negocio | Auto | Fecha |
| **Fecha de cierre de campaña** | Negocio | Auto | Fecha |
| **Fecha de última actividad** | Negocio | Auto | Fecha |

**Tarea que te va a llegar:** a las **24 h** de registrarse una inversión, tarea al A.A.I. para primer contacto personal, con SLA de **3 horas**.

---

## Etapa 3 · Congelado

**Qué significa:** inactividad documentada. **No implica pérdida del registro** — el perfil y el historial se conservan. Desde aquí se detonan campañas de reactivación de hasta 12 meses.

| Propiedad | Objeto | Llenado | Tipo |
|---|---|---|---|
| **Fecha de congelado** | Negocio | Auto | Fecha |
| **Fecha de reactivación** | Negocio | Auto | Fecha |
| **Motivo de congelado** | Negocio | **Manual** | ⚠️ *ver advertencia* |

### 🔴 Los criterios de congelado están en conflicto

| Fuente | Qué dice |
|---|---|
| **Master de Inversionistas** | Sin fondos > 15 días tras crear el negocio · No ha invertido en 90 días · **No ha hecho login en 120 días** |
| **Decisión canónica INV-12** (2026-07-31) | **Regla A:** 15 días sin depósito después de STP. **Regla B:** cero inversiones activas **+** saldo 0 **+** 90 días sin actividad. **Nunca congelar solo por no hacer login si hay inversiones activas** |

**Prevalece INV-12.** El criterio de "120 días sin login" del master **no debe aplicarse solo**: congelaría a un inversionista que tiene dinero trabajando y simplemente no abre la app.

Reglas relacionadas que también prevalecen:
- **INV-07:** si no hay inversiones activas pero **hay saldo positivo**, el negocio permanece **Activo**, no congelado.
- **INV-09:** una nueva compra reactiva. La reinversión es una compra normal y **no duplica** el onboarding.

---

## Etapa 4 · Cierre

**Qué significa:** Admin Monific reportó que la campaña concluyó — el solicitante liquidó y el capital más rendimientos se abonaron a la cuenta del inversionista.

**El objetivo de esta etapa es doble:** comunicar el cierre y **capitalizar el saldo disponible antes de que el dinero salga de la plataforma**.

| Propiedad | Objeto | Llenado | Tipo | Valores |
|---|---|---|---|---|
| **Estatus de última campaña** | Negocio | Auto | Selección | En curso · Liquidada |
| **Fecha de cierre** | Negocio | Auto | Fecha | — |
| **Monto total recibido** | Negocio | Auto | Número | — |
| **Saldo disponible** | Negocio | Auto | Número | — |

🔴 **Problema conocido y grave.** Los workflows de las cinco etapas de cierre (WF-065 a WF-069) ejecutan **solo cambios de propiedad**: **el inversionista no recibe ningún mensaje al cerrarse su campaña.** Todo el diseño de comunicación de cierre —el correo *"La campaña ha concluyó"* con rendimientos y saldos, y el WhatsApp de reinversión— **no está saliendo.**

**Mientras dure: el contacto de cierre es manual del A.A.I.** Es, además, el momento de mayor probabilidad de reinversión del ciclo.

---

## ⚠️ Las dos advertencias importantes

### 1 · `Nivel de registro` tiene dos catálogos distintos

| Fuente | Valores |
|---|---|
| **Master** | Sin registro · Registro Simple · Perfil en proceso · Cuenta Activa · Inversionista |
| **Decisión canónica INV-03** | **1 · 2 · 3 · 4** |

**Prevalece INV-03.** El nivel es el **estado canónico** y **solo sube, nunca retrocede**:

| Nivel | Se dispara cuando |
|---|---|
| **1** | El usuario completa validación de identidad (CURP) y datos personales |
| **2** | Proporciona dirección completa (residente en México) |
| **3** | Se crea exitosamente la cuenta **STP** |
| **4** | **Se confirma la primera compra de participaciones** — se envía una sola vez |

🔴 **Dos bugs abiertos:** hay cuentas activas con varios negocios que **no llegan a nivel 4**; y la app parece escribir Nivel 3 directo **sin pasar por Nivel 2**, lo que distorsiona el reporte de embudo.

**Regla operativa mientras tanto:** si dudas cuál campo filtrar, casi siempre es **nivel de registro**, no *estatus de conversión* ni *etapa del ciclo de vida*.

### 2 · `Estatus de conversión` está en retirada

INV-03 dice que este campo debe ser **espejo de `nivel_registro` o retirarse**. No lo uses como fuente de verdad y no construyas reportes sobre él hasta que se decida.

### 3 · `Motivo de congelado` debe ser dropdown

INV-12 lo especifica como **lista desplegable**. En el master figura como texto libre. Texto libre aquí significa que el reporte de motivos de congelamiento será inservible.

---

## Las reglas de fondo que conviene tener presentes

| Regla | Qué dice |
|---|---|
| **INV-04** | Al activarse STP se crea **un solo negocio de onboarding** por persona. Los niveles 1 a 3 reciben seguimiento del A.A.I. |
| **INV-05** | Saldo ≥ $1,000 genera recordatorio para invertir. **No** cambia por sí solo a nivel 4 |
| **INV-06** | Una persona = un contacto. Una relación = un onboarding. Cada compra/venta/liquidación = un movimiento separado. **No existe negocio padre de campaña** |
| **INV-08** | Pagos y rendimientos quedan **fuera de HubSpot**, en operación manual de Monific |
| **INV-11** | **Retiros y UNE quedan fuera** del ciclo de Inversionistas. No crear tickets de retiro |

---

## Estado y verificación

**Estado:** 🟡 redactado · 2026-08-18
**Fuente:** Master de Implementación Proceso Comercial, hojas *"Pipeline Inversionistas"* y *"Listado de prop. Inversionistas"*; Maestro Operativo (2026-07-31), decisiones INV-01 a INV-14; auditoría de comunicaciones.

⚠️ Nombres visibles del CRM, no nombres internos. Ver **S02 · Diccionario de propiedades**.

**Falta para publicar:**

1. Verificar cada propiedad en el portal 48427391.
2. Decidir y aplicar el catálogo único de `Nivel de registro` (1–4 según INV-03).
3. Convertir `Motivo de congelado` a dropdown y definir sus opciones.
4. Decidir si `Estatus de conversión` se convierte en espejo o se retira.
5. Corregir los dos bugs de nivel (cuentas que no llegan a 4; salto de 2).
6. 🔴 Reparar WF-065 a WF-069 para que el inversionista reciba comunicación al cierre.
7. Validación escrita de Monific.
