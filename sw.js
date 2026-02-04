const CACHE_NAME = 'lexicore-v4-secure';
const URLS_TO_CACHE = [
  './',
  './index.html',
  './style.css',
  './script.js',
  './manifest.json',
  './dictionary.json',
  './assets/sounds/click.mp3',
  './assets/sounds/error.mp3',
  './assets/sounds/win.mp3',
  // Cache Fonts (Google Fonts)
  'https://fonts.googleapis.com/css2?family=Outfit:wght@300;500;700;800&display=swap'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(URLS_TO_CACHE))
  );
});

// Stratégie : Cache First, then Network (pour la rapidité)
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      // Si trouvé dans le cache, on retourne
      if (response) return response;

      // Sinon on fetch
      return fetch(event.request).then((response) => {
        // On ne met pas en cache les requêtes externes dynamiques sauf les fonts
        if(!response || response.status !== 200 || response.type !== 'basic') {
            // Check si c'est une font Google pour la mettre en cache dynamiquement
            if (event.request.url.includes('fonts.gstatic.com')) {
                const responseToCache = response.clone();
                caches.open(CACHE_NAME).then((cache) => {
                    cache.put(event.request, responseToCache);
                });
            }
            return response;
        }
        return response;
      });
    })
  );
});

// Clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});