/// <reference lib="webworker" />

const log = (fmt, ...args) => console.log("[service worker] " + fmt, ...args)

self.addEventListener("install", () => {
  log("installed event fired")
})

self.addEventListener("activate", (event) => {
  log("activate event fired")
  return self.clients.claim()
})

self.addEventListener("fetch", (event) => {
  log(event.request.url.toString())
  event.respondWith(
    (async () => {
      const cache = await caches.open("ah-gre-app")
      try {
        return await fetch(event.request)
      } catch (error) {
        return self.caches.match(event.request)
      }
    })()
  )
})
