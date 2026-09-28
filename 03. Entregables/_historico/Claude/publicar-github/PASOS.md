# Publicar la capacitación en GitHub Pages

Objetivo: dos URLs públicas que le puedes pasar al cliente, sin que tenga que descargar nada.

Todo se hace desde **PowerShell** en tu máquina. Copia y pega bloque por bloque.

---

## Paso 0 — Comprobar que tienes git

```powershell
git --version
```

Si responde algo como `git version 2.4x.x`, sigue al paso 1.
Si dice que no reconoce el comando, instálalo:

```powershell
winget install --id Git.Git -e
```

Cierra PowerShell y ábrelo de nuevo para que tome el cambio.

Solo la primera vez que usas git en esta máquina, deja tu identidad:

```powershell
git config --global user.name "David Ochoa"
git config --global user.email "dochoa@black-n-orange.com"
```

---

## Paso 1 — Sacar la carpeta del repositorio de Monific

La carpeta `publicar-github` está dentro de `Monific`, que ya es un repositorio.
Un repositorio dentro de otro da problemas, así que primero la copiamos afuera:

```powershell
Copy-Item -Recurse -Force `
  "C:\Users\david\Documents\Black and Orange\50. Monific\Entregables Claude\publicar-github" `
  "C:\Users\david\Documents\monific-capacitacion"

cd "C:\Users\david\Documents\monific-capacitacion"
dir
```

Deberías ver: `repaso.html`, `mapa.html`, `README.md`, `.gitattributes` y este `PASOS.md`.

Si no quieres que `PASOS.md` quede público, bórralo ahora:

```powershell
Remove-Item PASOS.md
```

---

## Paso 2 — Crear el repositorio vacío en GitHub

Esto se hace en el navegador, una sola vez:

1. Entra a **https://github.com/new**
2. **Repository name**: `monific-capacitacion`
3. **Description**: `Materiales de repaso de la capacitación de HubSpot`
4. Marca **Public**
5. **No marques nada** en "Initialize this repository with" (ni README, ni .gitignore, ni licencia). Tiene que quedar vacío.
6. **Create repository**

Anota tu usuario de GitHub. En los comandos de abajo aparece como `TU-USUARIO` — sustitúyelo.

---

## Paso 3 — Subir los archivos

Desde `C:\Users\david\Documents\monific-capacitacion`:

```powershell
git init
git add .
git commit -m "Materiales de capacitacion HubSpot Monific"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/monific-capacitacion.git
git push -u origin main
```

En el `git push` se abrirá una ventana del navegador para que inicies sesión en GitHub.
Autoriza y el push continúa solo. Es la única vez que lo pide.

---

## Paso 4 — Encender GitHub Pages

1. En tu repositorio, pestaña **Settings**
2. Menú izquierdo, **Pages**
3. **Source**: `Deploy from a branch`
4. **Branch**: `main` — carpeta `/ (root)`
5. **Save**

Tarda entre uno y tres minutos en publicar. Refresca esa misma página hasta que aparezca el aviso verde con la dirección del sitio.

---

## Paso 5 — Las URLs que le pasas al cliente

```
Repaso:  https://TU-USUARIO.github.io/monific-capacitacion/repaso.html
Mapa:    https://TU-USUARIO.github.io/monific-capacitacion/mapa.html
Portada: https://TU-USUARIO.github.io/monific-capacitacion/
```

La portada muestra el README con los dos enlaces. Si al entrar te sale un 404, usa las dos URLs directas — funcionan igual.

Ábrelas tú primero desde el celular y desde la computadora antes de mandarlas.

---

## Para actualizar un archivo más adelante

Reemplaza el `.html` en `C:\Users\david\Documents\monific-capacitacion` y corre:

```powershell
cd "C:\Users\david\Documents\monific-capacitacion"
git add .
git commit -m "Actualiza repaso"
git push
```

El sitio se regenera solo en un par de minutos.

---

## Si algo falla

| Mensaje | Qué pasó | Qué hacer |
|---|---|---|
| `remote origin already exists` | Ya corriste `git remote add` antes | `git remote set-url origin https://github.com/TU-USUARIO/monific-capacitacion.git` |
| `Updates were rejected` | Creaste el repo con README y no quedó vacío | `git pull origin main --allow-unrelated-histories` y vuelve a hacer push |
| `Authentication failed` | Contraseña en vez de token | Cierra la ventana, corre `git push` otra vez y usa el botón de iniciar sesión en el navegador |
| El sitio da 404 después de 5 minutos | Pages apuntando a otra rama | Settings → Pages, confirma `main` y `/ (root)` |
| Los archivos se ven sin estilos | No aplica aquí | Ambos HTML llevan todo dentro; si se ven mal, es caché — recarga con `Ctrl+F5` |
