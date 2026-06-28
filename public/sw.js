const CACHE_NAME = 'pauta-clara-public-v3';

const PUBLIC_ASSETS = [
  './',
  './index.html',
  './manifest.webmanifest',
  './pauta_clara_logo_icono_app.png',
  './pauta_clara_opcion_6_logo_principal_transparente.png',
  './icons/pauta-clara-icon-180.png',
  './icons/pauta-clara-icon-192.png',
  './icons/pauta-clara-icon-512.png'
];

const PUBLIC_PATHS = new Set(
  PUBLIC_ASSETS.map((asset) => new URL(asset, self.location.href).pathname)
);

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(PUBLIC_ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(
      keys
        .filter((key) => key !== CACHE_NAME)
        .map((key) => caches.delete(key))
    ))
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin || !PUBLIC_PATHS.has(url.pathname)) return;

  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) return cached;

      return fetch(event.request).then((response) => {
        if (response && response.ok) {
          const responseCopy = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, responseCopy));
        }
        return response;
      });
    })
  );
});
