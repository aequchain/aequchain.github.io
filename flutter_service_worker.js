'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "da3a599e17c2840d87c26f3b58c290a1",
"main.dart.mjs": "9e62f74d28ef161a32b0ffe6c7a7dd10",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"version.json": "e4f03ca4dd3e9d8bb071ae804b72a79b",
"main.dart.wasm": "85365f2eac1bc265063291e9a4914f81",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"icons/Icon-512.png": "cb3a72f29646ee0458d467f76305f4bf",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-192.png": "641a684d1948fd7ff4915ab64fccb1ef",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/ae-icon.svg": "7d50611edb80881c29462db8c1699810",
"icons/ae-32.png": "837a99578d4a3962b221dcfd0fa4bb79",
"favicon.ico": "c3fa9c9f475d24fa98cc408ab7c11fd9",
"main.dart.js": "0614c19cde4d39bcefb9ba369f23310d",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/AssetManifest.bin": "8fc5f81cbbc56077fd27711d4f67d921",
"assets/NOTICES": "5477320a84f686bf48ac765659e69f1b",
"assets/AssetManifest.bin.json": "ea933d7b4eedb16d568183d237795c51",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/fonts/MaterialIcons-Regular.otf": "03ada204f879e6de5714392db29265cf",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.json": "3b9349cf094a5af5d59ff94f34682883",
"assets/assets/translations/zh-cn_cache.json": "033f58c7aa1992e12c1fb049ce5bb9cc",
"assets/assets/translations/hi_cache.json": "1ce5d16119159fdc3d4ddbc6708e1862",
"assets/assets/translations/ru_cache.json": "ac664c21ed53936d9f3c711033cfb92a",
"assets/assets/translations/es_cache.json": "fbc0d3d70ec4f56d77128589f5af2d0b",
"assets/assets/translations/am_cache.json": "b52db68b7bac63c5f324d87184aa1280",
"assets/assets/translations/tr_cache.json": "c6bb9b5fa02f05f5d5f0b0d736c3e66a",
"assets/assets/translations/tn_cache.json": "3486cb33d2947cd14c1664a06088788a",
"assets/assets/translations/zu_cache.json": "5f3dbdb2695003e79d6f40720776fa5c",
"assets/assets/translations/xh_cache.json": "a7ce9fc1f58b1463a2cd68897b12526e",
"assets/assets/translations/ko_cache.json": "884c53ad937dbba86c5ca1ddb606e261",
"assets/assets/translations/af_cache.json": "b5604077c564bfd7f9e71782a92dd7d9",
"assets/assets/translations/fr_cache.json": "b3826f250c5edb8d8c8cd38419329b31",
"assets/assets/translations/pt_cache.json": "fbd131ea3ee3d42861881c1b7c48fc30",
"assets/assets/translations/ar_cache.json": "cd41d42da7e94f11a6cabe6c1d1b3279",
"assets/assets/translations/ms_cache.json": "41a9fe402497524554266d070fe2c5f4",
"assets/assets/translations/it_cache.json": "4ed3d31467ac3fd6ec0616da6f0cc5fe",
"assets/assets/translations/sw_cache.json": "4ea91bc4013eba6e778635e848c718ad",
"assets/assets/translations/ha_cache.json": "cf7fa081f5035ea7d17405889cee6529",
"assets/assets/translations/km_cache.json": "2ce9e8e1c24fd4fb7cb5aed14a2a9ae7",
"assets/assets/translations/th_cache.json": "60c3d3e0640777e3beabdf466decf106",
"assets/assets/translations/ig_cache.json": "d0e7c28e2cbc0091ae7af996b6b3dd4f",
"assets/assets/translations/vi_cache.json": "17d33ac4af42f55e41edaa3cc909a840",
"assets/assets/translations/ja_cache.json": "0e4c6ebb6cc0a449bd978ac41ccb16df",
"assets/assets/translations/id_cache.json": "bdb1f265eb12ff745d779308b48b18bc",
"assets/assets/translations/de_cache.json": "d86761ff75443340d7475d14dd20016b",
"assets/assets/translations/st_cache.json": "3143b30991ff4f66159ca81ccedf1d10",
"assets/assets/translations/pl_cache.json": "e51c2c8fb78e0cc90369df2718645f19",
"assets/assets/translations/yo_cache.json": "82da6ea6eb732b2a4c339c5d15f19443",
"manifest.json": "d034ae02dd2dd51961b31e8a8645caa8",
"index.html": "865bc51fd7f145bedee497b9ac263bfa",
"/": "865bc51fd7f145bedee497b9ac263bfa"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"main.dart.wasm",
"main.dart.mjs",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
