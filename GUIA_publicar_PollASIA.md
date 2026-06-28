# Guía PollASIA 2026 — publicar y recibir respuestas

Tienes 3 archivos:
- `quiniela_mundial_2026.html` — la página de la polla.
- `AppsScript_Codigo.gs` — el código que guarda cada envío en tu hoja.
- esta guía.

El flujo final: la página vive en **GitHub Pages** (link público que compartes) y cada **"Enviar mi polla"** agrega una fila a tu **Google Sheet** (que exportas a Excel cuando quieras).

---

## Parte 1 — Crear la hoja y el script (Google)

1. Entra a **sheets.new** y crea una hoja nueva. Ponle nombre, p. ej. *PollASIA 2026*.
2. En el menú: **Extensiones → Apps Script**.
3. Borra lo que haya y **pega todo el contenido de `AppsScript_Codigo.gs`**. Guarda (icono de disquete).
4. Arriba a la derecha: **Implementar → Nueva implementación**.
   - Tipo (engranaje): **Aplicación web**.
   - Descripción: *PollASIA*.
   - **Ejecutar como:** Yo (tu cuenta).
   - **Quién tiene acceso:** **Cualquier persona**.
   - **Implementar**. Te pedirá **autorizar permisos** (para escribir en tu hoja): acepta. Si aparece "Google no ha verificado esta app", entra en *Configuración avanzada → Ir a (nombre) (no seguro)* — es tu propio script, es seguro.
5. Copia la **URL de la aplicación web** (termina en **/exec**).
6. (Opcional) Pega esa URL en el navegador: debe mostrar **PollASIA 2026 OK**. Si lo ves, está viva.

---

## Parte 2 — Conectar la página con tu script

7. Abre `quiniela_mundial_2026.html` con un editor de texto (Bloc de notas, VS Code…).
8. Busca cerca del inicio la línea:
   ```
   const SCRIPT_URL = "PEGA_AQUI_TU_URL_DEL_APPS_SCRIPT";
   ```
   Reemplaza el texto entre comillas por **tu URL /exec**. Guarda el archivo.

> Tip: haz una prueba abriendo el HTML en tu navegador, llena tus datos + el cuadro y pulsa **Enviar mi polla**. Revisa tu Google Sheet: debe aparecer una fila nueva en la pestaña **Respuestas**.

---

## Parte 3 — Publicar en GitHub Pages (link público)

9. Crea una cuenta gratis en **github.com** (si no tienes).
10. **New repository** → nombre p. ej. `pollasia` → **Public** → *Create repository*.
11. Sube el HTML: **Add file → Upload files**. **Importante:** renómbralo a **`index.html`** (así carga solo al abrir el link). Confirma con *Commit changes*.
12. **Settings → Pages** → en *Source* elige **Deploy from a branch** → rama **main** y carpeta **/ (root)** → **Save**.
13. Espera 1–2 minutos. GitHub te dará la URL:
    `https://TUUSUARIO.github.io/pollasia/`
    **Esa es la que compartes** por WhatsApp/grupo.

---

## Parte 4 — Recibir y exportar a Excel

14. Cada envío crea una fila en la pestaña **Respuestas** (Fecha, Nombre, Apodo, Celular, Partido 1…31, Campeón).
15. Cuando quieras el Excel: en la hoja, **Archivo → Descargar → Microsoft Excel (.xlsx)**.

---

## Notas útiles

- **Si editas el código del Apps Script** después: ve a **Implementar → Gestionar implementaciones → (lápiz) Editar → Versión: Nueva versión → Implementar**. Si no, los cambios no toman efecto.
- **Confirmación de envío:** por cómo funcionan los Apps Script, la página muestra "enviado" de forma optimista (no lee la respuesta del servidor). Por eso, antes de compartir el link, **haz una prueba real**: llena una jugada, pulsa *Enviar mi jugada* y confirma que aparezca la fila en la pestaña *Respuestas*. Si llega, llegará para todos.
- **Privacidad:** la hoja es tuya; la URL /exec solo *agrega* filas, no muestra la hoja a nadie.
- **Cuando quieras**, sobre esa misma hoja te armo el **reporte por usuario** (tarjeta con su cuadro y campeón) y una **tabla de puntajes** que se actualice con los resultados reales.
