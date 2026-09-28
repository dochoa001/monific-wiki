# Monific — instrucciones para agentes (carpeta de cliente)

Las reglas de la agencia están en `AGENTS.md` de la raíz de la bóveda. Este archivo solo enruta.
Dónde va cada archivo: `ESTRUCTURA_GENERAL_IA.md` en la raíz.

**El conocimiento de esta cuenta vive en `50. Monific/`.** Antes de responder algo sobre este cliente, lee
en este orden y no más de cinco archivos:

1. `50. Monific/AGENTS.md` — las reglas locales mandan dentro de la wiki.
2. `50. Monific/cliente.yaml` — datos canónicos: portal, dominios, responsable, bóveda.
3. `50. Monific/index.md` — el mapa, para localizar la página exacta.
4. La página que necesites.
5. `head` de `50. Monific/log.md` — qué cambió y por qué.

**Fuera de la wiki:**

| Carpeta | Qué es |
|---|---|
| `01. Adicionales/` | Fuentes originales. No se editan. |
| `02. Trabajo interno/` | Material de trabajo que no se entrega: `01. QA/`, `02. Exportaciones/`, `03. Scripts/`. |
| `03. Entregables/` | Lo que el cliente puede recibir: `01. Borradores/`, `02. En revisión/`, `03. Finales/`. `_historico/` son los entregables viejos, de cuando se ordenaban por herramienta. |

**Credenciales:** ninguna vive aquí. Están cifradas en la bóveda y se usan por el proxy local
`http://127.0.0.1:8787/<Cliente>/`. El nombre de la bóveda está en `cliente.yaml`.
