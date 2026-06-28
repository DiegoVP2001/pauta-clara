# Publicacion minima de Pauta Clara

La version publica minima esta preparada en `public/`. Para hosting estatico, configurar esa carpeta como directorio de publicacion. La entrada publica es `public/index.html`.

## Archivos publicables

- `public/index.html`
- `public/manifest.webmanifest`
- `public/sw.js`
- `public/pauta_clara_logo_icono_app.png`
- `public/pauta_clara_opcion_6_logo_principal_transparente.png`
- `public/icons/pauta-clara-icon-180.png`
- `public/icons/pauta-clara-icon-192.png`
- `public/icons/pauta-clara-icon-512.png`

## Dependencias externas

- Google Fonts: `Outfit` y `Plus Jakarta Sans`, cargadas desde `fonts.googleapis.com` y `fonts.gstatic.com`.
- Enlace externo de atribucion: perfil de LinkedIn de Diego Vargas Palominos.

## Archivos y carpetas excluidos

- `pauta/`
- `recursos/`
- `historial_versiones/`
- `.agents/`
- `.codex/`
- `.remember/`
- `prompts/`
- `colaciones_recuperacion_interactivo.html`
- `planificador_porciones.html`
- `index.html` del portal local
- `manual_marca_pauta_clara.md`
- `PLAN_PUBLICACION_PAUTA_CLARA.md`
- `manual_logotipo.png`
- `pauta_clara_opcion_6_logo_principal.png`
- `poner logo mas grande.png`
- documentos clinicos privados, capturas, borradores y logos no usados

## Verificacion local

Servir la carpeta publica por HTTP para que el manifest y el service worker funcionen:

```powershell
npx http-server .\public -p 4173
```

Abrir `http://127.0.0.1:4173/`. En hosting estatico, la app debe abrirse desde la raiz del sitio porque `index.html` es la entrada publica.
