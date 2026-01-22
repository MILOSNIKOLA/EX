/* Basic service worker for offline support (vanilla) */

const CACHE_NAME = "yoga-routine-v1";

const PRECACHE_URLS = [
  "./",
  "./index.html",
  "./style.css",
  "./manifest.json",
  "./ring.mp3",
  "./img/logo.png",
  "./img/0.png",
  "./img/1.png",
  "./img/2.png",
  "./img/3.png",
  "./img/4.png",
  "./img/5.png",
  "./img/6.png",
  "./img/7.png",
  "./img/8.png",
  "./img/9.png",
  "./js/main.js",
  "./js/core/LevelManager.js",
  "./js/core/Storage.js",
  "./js/core/Timer.js",
  "./js/core/Feedback.js",
  "./js/data/levels.js",
  "./js/data/dailyChallenge.js",
  "./js/ui/LevelScreen.js",
  "./js/ui/RoutineScreen.js",
  "./js/ui/FinishScreen.js"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => cache.addAll(PRECACHE_URLS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
      )
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET") return;

  event.respondWith(
    caches.match(req).then((cached) => {
      if (cached) return cached;
      return fetch(req)
        .then((res) => {
          const copy = res.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(req, copy));
          return res;
        })
        .catch(() => caches.match("./index.html"));
    })
  );
});

