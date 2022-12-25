addScript("lib/pako_deflate.min.js", true);

// Modifying body when available.
let observer = new MutationObserver(function() {
    if (document.body) {
        document.body.innerHTML = `<content class="flex flex-column"><main class="flex flex-column flex-center-h flex-center-v flex-grow container"></main></content>`;
        addScript("appendix/content_load.min.js", true);
        observer.disconnect();
    }
});
observer.observe(document.documentElement, {childList: true});