self.addEventListener("install" , e => {
    e.waitUntil(
        caches.open("static").then(cache =>{
          return cache.addAll(["./","./style.css","./images/icon192.png","./images/icon512.png","./images/maskable_icon192.png", ]); 
        })
    );
});

self.addEventListener("fetch", e =>{
    console.log("Intercepting fetch request for  : $(e.request.url)'");
})


