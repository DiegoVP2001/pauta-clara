# Publicacion minima de Pauta Clara

La version publica minima esta preparada en `public/` y publicada en el repositorio GitHub `DiegoVP2001/pauta-clara`.

Para hosting estatico, configurar `public/` como directorio de publicacion. La entrada publica es `public/index.html`.

URL publica principal: `https://pautaclara.cl`.
URL tecnica de Vercel: `https://pauta-clara-beryl.vercel.app/`.

## Estado de publicacion

- Repositorio remoto: `https://github.com/DiegoVP2001/pauta-clara`
- Rama principal: `main`
- URL publica principal: `https://pautaclara.cl`
- URL tecnica de Vercel: `https://pauta-clara-beryl.vercel.app/`
- Ultimo cambio funcional de la app: `07ae62e` (`Add footer feedback link`)
- Estado GitHub verificado: `main` actualizado en `origin/main` con el footer de feedback publicado.
- Service worker publico: `pauta-clara-public-v5`.
- Comportamiento inicial publico: navegadores nuevos parten con objetivos alimentarios en `0` y agua base en `2000 ml`.
- Instalacion movil: aviso informativo en celular con instrucciones para Android/Chrome e iPhone/Safari; se puede cerrar con la `x` y queda guardado localmente.
- Feedback: el footer publico enlaza a `https://forms.gle/z1bS2gapJonhTpSv9` para canalizar bugs, ideas y mejoras.

## Dominio y DNS

- Dominio: `pautaclara.cl`.
- Registrador: NIC Chile.
- DNS delegado a Vercel:
  - `ns1.vercel-dns.com`
  - `ns2.vercel-dns.com`
- HTTPS: automatico por Vercel.
- Verificacion realizada al 2026-06-28: `https://pautaclara.cl/?v=53588a7` responde `200 OK` y carga el HTML publico de Pauta Clara.

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

## Verificacion en celular

Despues de cada push, esperar el deploy automatico de Vercel y abrir la URL publica con un cache-buster, por ejemplo:

```text
https://pautaclara.cl/?v=07ae62e
```

Para simular usuario nuevo, usar modo incognito o borrar datos del sitio. En Android/Chrome, el aviso debe indicar abrir el menu `...` y elegir `Instalar app` o `Agregar a pantalla principal`; en iPhone/Safari, debe indicar `Compartir` y `Agregar a pantalla de inicio`.
