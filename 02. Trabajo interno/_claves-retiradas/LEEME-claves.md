# Claves de Monific

Las credenciales **ya no viven aqui**. Se movieron fuera de Google Drive: esta
carpeta se sincroniza a la nube y las claves quedaban copiadas alla, incluido el
historial de versiones.

## Como se usan ahora

No se leen. Se usan a traves del proxy local, que inyecta el Authorization.
El token nunca llega al contexto de una IA ni a un transcript.

    curl http://127.0.0.1:8787/Monific/crm/v3/objects/contacts?limit=3

Por defecto usa la clave de servicio. Para la personal:

    curl -H "X-BNO-Clave: personal" http://127.0.0.1:8787/Monific/...

Clientes disponibles:  curl http://127.0.0.1:8787/_clientes
Arrancar el proxy:     C:\Users\david\bin\bno-hubspot-proxy\iniciar.cmd

## Si de plano hace falta el valor crudo (por ejemplo para 'hs auth')

    clave Monific servicio

Ese comando deja registro en la bitacora. Solo cuando no haya alternativa.

---
Boveda: C:\Users\david\.claves-bno  (cifrada con DPAPI, solo tu usuario de Windows)
Reorganizado el 2026-08-24.
