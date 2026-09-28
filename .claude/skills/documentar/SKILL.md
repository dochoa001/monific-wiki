---
name: documentar
description: Registra en la wiki de Monific una pieza recién construida — workflow, propiedad, función serverless, integración, campaña de pauta, blog o landing — con sus IDs y nombres internos exactos. Úsala SIEMPRE antes de dar por terminada cualquier construcción para el cliente.
---

# /documentar — registrar una pieza construida para Monific

Cierra el ciclo. **Ninguna construcción está terminada hasta que está documentada aquí.**

## Qué preguntar

1. **Tipo de pieza**: workflow · propiedad · objeto · pipeline · formulario · función serverless ·
   integración · campaña de pauta · blog · landing · informe · app.
2. **Identificadores exactos.** Sin esto la página no sirve a un agente, que tendría que adivinar:
   - HubSpot: portal ID, ID del workflow, `internal name` de propiedades y objetos, object type ID,
     IDs de pipeline y de etapas, ID de formulario.
   - Pauta: ID de cuenta publicitaria, ID de campaña, píxel y eventos de conversión, UTMs usadas.
   - Código: endpoint, scopes, nombres de variables de entorno (**el nombre, nunca el valor**).
3. **Para qué sirve** y **qué depende de ella** (qué se rompe si se apaga).
4. **Cómo se prueba**: los pasos concretos para verificar que funciona.

## Cómo registrarla

1. Plantilla según el tipo, desde `99 Plantillas/`:
   - `plantilla-pieza-tecnica.md` — workflows, propiedades, integraciones, funciones, apps.
   - `plantilla-campana-pauta.md` — campañas de pauta pagada.
   - `plantilla-brief-contenido.md` — blogs, landings y piezas de contenido.
2. Los identificadores van **en tabla**, no en prosa.
3. Incluye el payload o el snippet de ejemplo si existe en los recursos.
4. Enlaza a las páginas con las que se cruza: la persona o buyer persona a la que ataca, el
   contenido que usa, los workflows o formularios que la soportan. **Esas conexiones son las que
   hacen útil el grafo.**

## Cierre obligatorio

- [ ] Página creada con todos los IDs disponibles y `⚠️ PENDIENTE` explícito en los que falten.
- [ ] Enlazada desde el hub de su sección y desde las páginas relacionadas.
- [ ] `index.md` actualizado.
- [ ] `cliente.yaml` actualizado si la pieza introdujo un identificador canónico nuevo.
- [ ] Entrada nueva **al inicio** de `log.md`: qué se construyó, por qué y dónde quedó documentado.

## Prohibido

- Credenciales, tokens, claves de API o contraseñas en texto plano. Se documenta la **ubicación**
  y quién tiene acceso, nunca el valor.
- Dar por cerrada la construcción sin esta página.
