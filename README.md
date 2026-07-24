# Intranet Multiparque · Demo navegable

Demo comercial (solo front, sin backend) de la intranet cotizada a Multiparque.
Corresponde al alcance de la cotización del 24 de julio de 2026.

**Demo en vivo: <https://wearedatalab.github.io/multiparque-intranet/>**

## Cómo verlo

```bash
python -m http.server 8806 --directory multiparque-intranet
```

Abrir <http://localhost:8806>. También registrado como preview `multiparque-intranet` en `.claude/launch.json`.

## Guion sugerido para la demo

1. **Login** — mostrar las dos vías: contraseña y *magic link* (con simulación del correo). Entrar con los chips de demo.
2. **Camila · Dirección** — dashboard personalizado, comunicado fijado, acceso a Administración.
3. **Buscador global** (Ctrl K) — buscar `karts` (personas + documento + noticias) y `puntos de encuentro` (encuentra el Plan de Emergencias por su *contenido*).
4. **Directorio** — filtrar por habilidad `primeros auxilios`; abrir un perfil.
5. **Documentos** — carpetas, permisos por área, historial de versiones (Plan de Emergencias v6).
6. **Noticias** — destacada, timeline por mes, botón «Publicar noticia» (solo roles editores).
7. **Calendario** — julio/agosto 2026, filtros por equipo, botón «Recordar (.ics)».
8. **Administración** — «Ingresar como» Felipe (banner amarillo + «Volver a mi sesión»), gauges de consumo del Bloque Inicial, cambio de color de acento en vivo.
9. **Móvil** — reducir la ventana: navegación inferior tipo app (argumento PWA).

## Datos y sesión

- Todo es estático: datos en `js/data.js`, sesión en `localStorage` (`mp_session`).
- «Hoy» del demo: jueves 23 de julio de 2026.
- Imágenes generadas con fal.ai: fotos con FLUX dev, íconos 3D con recraft-v3. Los scripts de generación quedan solo en local (`assets/gen-*.sh`, excluidos del repositorio porque contienen la API key).
