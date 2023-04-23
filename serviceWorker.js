const urlsToCache = [
  '/',
  '/index.html',
  '/sushiManage.html',
  'js/holder.min.js',
  'js/sushi-list-script.js',
  'images/favicon.ico',
]

self.addEventListener('install', (event) => {
  console.log('Service worker installed')

  //cache
  event.waitUntil(async () => {
    const cache = await caches.open('pwa-assets')
    return cache.addAll(urlsToCache)
  })
})
self.addEventListener('activate', (event) => {
  console.log('Service worker activated')
})

self.addEventListener('fetch', (event) => {
  console.log(`URL requested: ${event.request.url}`)

  //cache first
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      // It can update the cache to serve updated content on the next request
      if (cachedResponse) {
        return cachedResponse
      }
      fetch(event.request)
    })
  )

  //network first
  // 		event.respondWith(
  // 			fetch(event.request)
  // 			.catch(error => {
  // 				return caches.match(event.request) ;
  // 			})
  // 		);
})
