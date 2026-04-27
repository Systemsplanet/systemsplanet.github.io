const CACHE_NAME = 'webllm-offline-cache-v2';

// Assets to cache immediately on install
const PRECACHE_URLS = [
    './',              // The root directory (index.html)
    './index.html',    // The explicitly named html file
    'https://esm.run/@mlc-ai/web-llm' // The MLC engine module
];

self.addEventListener('install', e => {
    self.skipWaiting();
    e.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            return cache.addAll(PRECACHE_URLS);
        })
    );
});

self.addEventListener('activate', e => {
    e.waitUntil(clients.claim());
});

self.addEventListener('fetch', e => {
    // Only intercept HTTP/HTTPS requests (ignores chrome-extension:// etc.)
    if (!e.request.url.startsWith('http')) return;

    e.respondWith(
        caches.match(e.request).then(res => {
            if (res) return res; // Return from cache if found

            return fetch(e.request).then(netRes => {
                // Save new successful network requests to cache
                if (netRes && netRes.ok && e.request.method === 'GET') {
                    const copy = netRes.clone();
                    caches.open(CACHE_NAME).then(c => c.put(e.request, copy));
                }
                return netRes;
            }).catch(() => {
                // Failsafe for offline network errors
                console.warn('Network request failed and not in cache:', e.request.url);
            });
        })
    );
});

