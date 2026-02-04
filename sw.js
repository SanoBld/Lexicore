const CACHE_NAME = 'lexicore-v2-final';
const ASSETS = [
  './',
  './index.html',
  './style.css',
  './script.js',
  './manifest.json',
  './dictionary.json',
  'https://fonts.googleapis.com/css2?family=Outfit:wght@300;500;700;800&display=swap'
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)));
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => {
      // Stratégie : Cache First
      if (res) return res;
      
      // Network Fallback + Cache des polices Google
      return fetch(e.request).then(response => {
        if (!response || response.status !== 200 || response.type !== 'basic') {
            // Mise en cache spécifique des Fonts si besoin
            if (e.request.url.includes('fonts.gstatic.com')) {
                const clone = response.clone();
                caches.open(CACHE_NAME).then(cache => cache.put(e.request, clone));
            }
            return response;
        }
        return response;
      });
    })
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) return caches.delete(key);
        })
      );
    })
  );
});