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