const filesToCache = [
 '/',
 'versuchStyle.css',
 'index.html',
 'versuch.js',
]

const staticCacheName = 'TestCache' ;
self.addEventListener('install', event => {
    console.log('Trying to install server Worker and cache files');
    event.waitUntil(
        cache.open(staticCacheName).then(cache =>{
            return cache.addAll(filesToCache);
        })
    );
});

