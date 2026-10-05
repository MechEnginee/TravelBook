// 오프라인용 서비스 워커: 페이지와 사진을 미리 저장해 두고, 인터넷이 안 될 때 저장본을 보여줌
const CACHE = 'nz-trip-v1';
const FILES = [
  "./",
  "index.html",
  "photos/castle.jpg",
  "photos/punchbowl.jpg",
  "photos/hokitika.jpg",
  "photos/franz.jpg",
  "photos/helihike.jpg",
  "photos/foxglacier.jpg",
  "photos/matheson.jpg",
  "photos/thunder.jpg",
  "photos/fantail.jpg",
  "photos/bluepools.jpg",
  "photos/wanakatree.jpg",
  "photos/lindis.jpg",
  "photos/hooker.jpg",
  "photos/hookerlake.jpg",
  "photos/tasman.jpg",
  "photos/pukaki.jpg",
  "photos/church.jpg",
  "photos/mtjohn.jpg",
  "photos/bungy.jpg",
  "photos/milford.jpg",
  "photos/shotover.jpg",
  "photos/glenorchy.jpg"
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(FILES)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys()
    .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
    .then(() => self.clients.claim()));
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== location.origin) return;
  if (req.mode === 'navigate') {
    // 페이지: 인터넷 되면 최신본, 안 되면 저장본
    e.respondWith(fetch(req).then((res) => {
      const copy = res.clone();
      caches.open(CACHE).then((c) => c.put('index.html', copy));
      return res;
    }).catch(() => caches.match('index.html')));
    return;
  }
  // 사진 등: 저장본 우선
  e.respondWith(caches.match(req).then((hit) => hit || fetch(req)));
});
