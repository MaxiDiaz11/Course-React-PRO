importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js"
);

workbox.loadModule("workbox-background-sync");

workbox.precaching.precacheAndRoute(self.__WB_MANIFEST);

const { registerRoute } = workbox.routing;
const { CacheFirst, NetworkFirst, NetworkOnly } = workbox.strategies;
const { BackgroundSyncPlugin } = workbox.backgroundSync;

const cacheNetworkOnly = ["/api/auth/renew", "/api/events"];

const cacheNetworkFirst = [
  "https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css",
  "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.0-2/css/all.min.css",
];

registerRoute(({ request, url }) => {
  if (cacheNetworkOnly.includes(url.pathname)) return true;
  return false;
}, new NetworkFirst());

registerRoute(({ request, url }) => {
  if (cacheNetworkFirst.includes(url.href)) return true;
  return false;
}, new CacheFirst());

//Posteos offline
const bgSyncPlugin = new BackgroundSyncPlugin("posteos-offline", {
  maxRetentionTime: 24 * 60,
});

registerRoute(
  new RegExp("http://localhost:4000/api/events"),
  new NetworkOnly({ plugins: [bgSyncPlugin] }),
  "POST"
);

registerRoute(
  new RegExp("http://localhost:4000/api/events/"),
  new NetworkOnly({ plugins: [bgSyncPlugin] }),
  "DELETE"
);

registerRoute(
  new RegExp("http://localhost:4000/api/events/"),
  new NetworkOnly({ plugins: [bgSyncPlugin] }),
  "PUT"
);
