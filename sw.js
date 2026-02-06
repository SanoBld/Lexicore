/**
 * Service Worker pour Lexicore v7.0
 * Gestion du cache et mode hors ligne
 */

const CACHE_NAME = 'lexicore-v7.0.0';
const CACHE_URLS = [
  './',
  './index.html',
  './style.css',
  './script.js',
  './manifest.json',
  './dictionary.json',
  './icon-512.png',
  'https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap',
  'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0'
];

/**
 * Installation du service worker
 */
self.addEventListener('install', (event) => {
  console.log('[Service Worker] Installation en cours...');
  
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('[Service Worker] Mise en cache des ressources');
        return cache.addAll(CACHE_URLS);
      })
      .then(() => {
        console.log('[Service Worker] Installation réussie');
        return self.skipWaiting();
      })
      .catch((error) => {
        console.error('[Service Worker] Erreur lors de l\'installation:', error);
      })
  );
});

/**
 * Activation du service worker
 */
self.addEventListener('activate', (event) => {
  console.log('[Service Worker] Activation en cours...');
  
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== CACHE_NAME) {
              console.log('[Service Worker] Suppression de l\'ancien cache:', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => {
        console.log('[Service Worker] Activation réussie');
        return self.clients.claim();
      })
  );
});

/**
 * Interception des requêtes
 * Stratégie: Network First, puis Cache
 */
self.addEventListener('fetch', (event) => {
  // Ignorer les requêtes non-GET
  if (event.request.method !== 'GET') {
    return;
  }
  
  // Ignorer les requêtes vers les APIs externes (pour avoir les données à jour)
  const url = new URL(event.request.url);
  if (url.origin !== location.origin && 
      (url.host.includes('api.datamuse.com') || url.host.includes('dictionaryapi.dev'))) {
    return;
  }
  
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        // Si la réponse est valide, on la met en cache
        if (response && response.status === 200 && response.type === 'basic') {
          const responseToCache = response.clone();
          caches.open(CACHE_NAME)
            .then((cache) => {
              cache.put(event.request, responseToCache);
            });
        }
        return response;
      })
      .catch(() => {
        // En cas d'échec réseau, on essaie de servir depuis le cache
        return caches.match(event.request)
          .then((response) => {
            if (response) {
              console.log('[Service Worker] Ressource servie depuis le cache:', event.request.url);
              return response;
            }
            
            // Si pas de cache et pas de réseau, page hors ligne basique
            if (event.request.destination === 'document') {
              return caches.match('./index.html');
            }
          });
      })
  );
});

/**
 * Gestion des messages
 */
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
  
  if (event.data && event.data.type === 'CLEAR_CACHE') {
    event.waitUntil(
      caches.keys()
        .then((cacheNames) => {
          return Promise.all(
            cacheNames.map((cacheName) => caches.delete(cacheName))
          );
        })
        .then(() => {
          return self.clients.matchAll();
        })
        .then((clients) => {
          clients.forEach((client) => {
            client.postMessage({
              type: 'CACHE_CLEARED'
            });
          });
        })
    );
  }
});

/**
 * Synchronisation en arrière-plan (optionnel)
 */
self.addEventListener('sync', (event) => {
  if (event.tag === 'sync-stats') {
    event.waitUntil(
      // Logique de synchronisation si nécessaire
      Promise.resolve()
    );
  }
});