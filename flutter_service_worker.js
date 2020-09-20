'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "71597977835c98e8b48284c6bb846a43",
".git/config": "15774d113a1e4969ed751ebffd795b8d",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "7bf1fcc5f411e5ad68c59b68661660ed",
".git/index": "4f0ec8f1173c71caa47f3c0ca3db54ba",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "e375a141c8b8da1d21519817149ce25b",
".git/logs/refs/heads/master": "e375a141c8b8da1d21519817149ce25b",
".git/logs/refs/remotes/origin/master": "ba323c09e429f9e812406f9af0c5b86e",
".git/objects/00/2754f5f5c79053f54f24bf721fad024a496d91": "53ab6a30c44e278dfaf8c8a902b9292f",
".git/objects/04/117e71351ac93613c57902ca535d5c9a878f76": "c53a1ccee6c74b9be879cbeb0432028f",
".git/objects/09/78d5ca414f5a3141094bfb21ec1b586b35abc0": "021f16267b469894cd43fc84d8be958a",
".git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
".git/objects/11/eee871934c260ff558f2ae2fea814e111f1064": "3bc1897fa97b3996d2c894ad7f5560d3",
".git/objects/14/54eea6de0764aa910dcb52473dd1a1a1efdcd2": "9cc2c27958d74e8b3b39322f6af1052f",
".git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
".git/objects/20/26ee745fc1ed848c1f9d8805a604b60a4d3ac0": "e35a2a37f57e9efa274cee00e0e1f38b",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/21/cc4fe4245899a110989909b2f3152b19193a43": "a98041cd1c8b4eea56d13587bb52b472",
".git/objects/24/65fc84fe6fce08e71610eb0c9bfa212ec9ad80": "165cbb1972e5e88299ee17f2bea9b88f",
".git/objects/36/6d06c0bfdd484a36ef4c74f5c24991bc80f414": "49bf67e644ee332cc68d714b4a87e8f2",
".git/objects/3c/cf154b8c005394ef6f72de2798ab5cb5d8020d": "744c637a6e426e3f224841f1dd3ad910",
".git/objects/3e/3fceb300480f28958523b8ef13ce90d6c1fbe9": "37dad824a41dc2cfacd79b9785d8b7d2",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/50/7305270833888c4d7b2aa7e3289770654a26ce": "78d84d4b9ca83bdac54aa0362b8b501d",
".git/objects/51/13e36b083023ec48cb4946c8baee6112e7986b": "ca061957051d01ba56d16ecfdba04527",
".git/objects/51/5dfa88620d5d392a2bbf28b91eedc77d13faa6": "162bb8a694e30071f5ecced4f33c5e00",
".git/objects/51/db7b06704b69c7579220024a9e4472b0efa4d4": "50dbff61cdd2418887daef62d5ba9580",
".git/objects/52/0db953c6a50cb40b482a03908b96404fd90b87": "01aa77d6f0f138ab73f64b2545fdaf38",
".git/objects/5a/b99d4c58bb3da2936915916cd0d0f2870cc28e": "5e16d19999e3d0af78499c7eb8594697",
".git/objects/5d/adc266ce6b58e548c61578a253a3c3c7bb5d78": "48b103f8041b78076ac4a54a1c20253a",
".git/objects/5f/b10872e34c2165a7f61f9e3256c56d7eb95a09": "9e23d5bdeb1276e2cfb898dddf41a0b4",
".git/objects/60/53881542aade3ad150226296e24329492ea5e6": "0b559d39662842b3c9a856df39eaa01b",
".git/objects/66/c7f98858c5c73c779dea2768e458deaf9807ef": "91e6b0174b1e8816804d55dbd503c02c",
".git/objects/73/9f063ea37dd7df6f2599b6043cbb06ea14d108": "33e2b4ac787c09cac1619d7264473d1c",
".git/objects/75/dccf3156f77002f47e39d90de32d41645f7e32": "41c9684a59b97a88f8b4e45d6f24e6bf",
".git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/35f96fd818b38a3441939f9f972bd33e094545": "618259e7d0fe02de945c1faa9b176d8f",
".git/objects/91/3677c0a7567a81ab5cd902232963c2741d22da": "24cbde5bdafb037f98c6ac14a6bba42f",
".git/objects/95/e8d64deb0fab912f208a686362443c6e90da64": "8479be705b9f1bc598bd91484b30154a",
".git/objects/99/4c4b2432d4a6dd8e0aa7863a8a8b2016c27462": "7e917be3bd0772096bf571e242719ce5",
".git/objects/99/f3d5800d3510e1441b7b1b34dd638db96d5b00": "657467542988866e1438521816fcb2d7",
".git/objects/9f/3bbde107e17ced7bb5b54d4cd9d49a4bad2c55": "d070ddeb1fa7244c86585efad7e62014",
".git/objects/9f/6ccb2a4f8da95dfc9cd1d2db6ae99cc25d43ce": "b1a97643ad7de03965bfb3ab246e0922",
".git/objects/a1/629f048388b82be1c5b05974dc70628f34e45b": "b607a1bde64c4fe93f5012204adf7516",
".git/objects/a4/2b502cb76bd1684f4b2a54182f33c1e651e70d": "859d641dfde6e51d95fc0ee4133e70df",
".git/objects/aa/e89a26b7d51a3aa979066163f6ca108ed48e2e": "6f85be7c5ce8e9b09b1756d4ba4c5d20",
".git/objects/b0/fde107e2e0ade2a450204a815c62839634e9a0": "eb562b5fdac6cd9c20ad1fc25a75f6aa",
".git/objects/b2/1ad5a2433e176e9b822aa4493243a8f795bce3": "14b23adf5af2b7053bb5ec9b8823a9d8",
".git/objects/b4/56f733e7c5313d3c4990ccdf0c94619f9943d8": "b524d51a2751e921ef8d980c60db6cc2",
".git/objects/b5/ec26b6ee79186959c7ce3f92e7a0aeccc50066": "4b83ce61dc92f8b0199e3c59e145942e",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/bf/bbe7a6f52c9bd7f04f0cb302c3c7229fca59f4": "e80383e698142b6495f2eb3be7b966ac",
".git/objects/c8/157a8fa7f37172bb1df2573c50bd81214f040c": "8f6569f93ead514f3829c9307c79e327",
".git/objects/c9/78d5c53ef98b1784a942fca27ab1bdb4628c04": "2b9ced7d4202c012312698606a11a2ca",
".git/objects/cb/4eaa454674fa02bc01e20e04139a37644d19df": "f22e0530ea2205a4bca9a424527bed79",
".git/objects/d0/2bf11ca0991a91d154730892e289489f07022a": "092268b354f2a176b2bd595769e4ae8b",
".git/objects/d0/37e984fc15d5b84f62924d2851b474b3ae07d0": "b88a18127ff7a42c80dfa410d4c0efe0",
".git/objects/d4/2fac13c1347b1cfea47d19fcb44b036dbfcb43": "709171a68da491fefe3a1f08d3db573f",
".git/objects/d8/63bdb1e5363b7cc729f70388988e2389a41c63": "1e5c42360361ed168200d46a201853a0",
".git/objects/e2/5eb5cb2b70e2f3f09dd6db3910d6da59ab1451": "85c3446006f693a699b529188b341870",
".git/objects/e3/7b6642d041a0431c02daf171a353c7f233a128": "ec86e64112cbd17df2eec86861040dde",
".git/objects/e4/8d0f48812020d0814f913fb122e0b440a4b4e9": "f580239e3dd8d94de8c46240d66c5c54",
".git/objects/e8/1ddef3a67da98e97323b79400dbdcbc1deb5d5": "958a154f6d80d40d39214af0518c0269",
".git/objects/f7/3df6268c5e7bda9b63ada54b19cb0679120eaa": "ea2430b39f7397d0daf7053448f0a600",
".git/objects/fa/02a39f6322ac34963cead2086ff8a852e6e36b": "2ef9026d4aeb24de6f673d54592ccf1e",
".git/objects/fc/565ec170b7fd55cbf422b8188a6f64eddda60e": "c1d5b622c8e63d1865785872c9d4a21d",
".git/refs/heads/master": "f95a0eafa253c1f89aa0b0f3a1e93f38",
".git/refs/remotes/origin/master": "f95a0eafa253c1f89aa0b0f3a1e93f38",
"assets/AssetManifest.json": "6d49f0f615c61a72542547a8b641c05c",
"assets/assets/images/Subtract.png": "8a8b08cac82e36d08dd98b0b09c73485",
"assets/assets/images/Subtract_light.png": "786fba17367a0cf04ad548041b57a16b",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "a68d2a28c526b3b070aefca4bac93d25",
"assets/NOTICES": "096a21379f4f5417380bcb4d08ab924b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "237deaaffd4914dff7cc2c3733543bb0",
"/": "237deaaffd4914dff7cc2c3733543bb0",
"main.dart.js": "fa8a5e67b1aa9aefd396b924119199be",
"manifest.json": "771b49421534306944fce55fb9832a4a"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list, skip the cache.
  if (!RESOURCES[key]) {
    return event.respondWith(fetch(event.request));
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
    return self.skipWaiting();
  }
  if (event.message === 'downloadOffline') {
    downloadOffline();
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
  for (var resourceKey in Object.keys(RESOURCES)) {
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
