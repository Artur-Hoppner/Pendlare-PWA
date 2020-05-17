// self.addEventListener('install', event => {
//     console.log(self);
//     self.skipWaiting();
//     console.log('SW installed at: ', new Date().toLocaleTimeString());
// });

// self.addEventListener('activate', event => {
//     self.skipWaiting();
//     console.log('SW activated at: ', new Date().toLocaleTimeString());
// });

// self.addEventListener('fetch', event => {
//     console.log(event.request.url);
//     if (!navigator.onLine) {
//         event.respondWith(new Response('<h1>Error: The internet cant be found!</h1>', { headers: { 'Content-Type': 'text/html' } } ));
//     } else {
//         console.log('Online!');
//     }
// });


self.addEventListener('install', event => {
    console.log('SW installed at: ', new Date().toLocaleTimeString());
    event.waitUntil(
        caches.open('v1').then((cache) => {
            return cache.addAll(['index.html'])
        })
    );
    self.skipWaiting();
});

self.addEventListener('activate', event => {
    console.log('SW activated at: ', new Date().toLocaleTimeString());
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
        .then((response) => {
            if (!navigator.onLine) {
                if (response) { 
                    return response;
                } else {
                    return caches.match(new Request('index.html'));
                }
            } else {
                return updateCache(event.request);
            }
        })
    )
});

async function updateCache(request) {
    return fetch(request).then((response) => {
        if(response) {
            return caches.open('v1').then((cache) => {
                return cache.put(request, response.clone())
                .then(() => {
                    return response;
                })
            });
        }
    })
}

  