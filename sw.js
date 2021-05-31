self.addEventListener("install" , e => {
    e.waitUntil(
        caches.open("static").then(cache =>{
          return cache.addAll(["./","./style.css","./images/icon192.png","./images/icon512.png","./images/maskable_icon192.png","./rfid.js","./versuch.js","./versuchStyle.css" ]); 
        })
    );
});

self.addEventListener("fetch", e =>{
    e.respondWith(
        caches.matches(e.request).then(response =>{
            return response || fetch(e.request);
        })
    );
});


