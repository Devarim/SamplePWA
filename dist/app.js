if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('dist/sw.js')
        .then(function (registration) {
            console.log('Registration successful, scope is:', registration.scope);
        })
        .catch(function (error) {
            console.error('Service worker registration failed, error:', error);
        });
}
