if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js',{ scope: '.' })
        .then(function (registration) {
            console.log('Registration successful, scope is:', registration.scope);
        })
        .catch(function (error) {
            console.error('Service worker registration failed, error:', error);
        });
}
