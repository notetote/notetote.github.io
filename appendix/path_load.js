addScript("lib/pako_deflate.min.js", true);

window.addEventListener("DOMContentLoaded", function() {
    document.body.innerHTML = `<content class="flex flex-column"><main class="flex flex-column flex-center-h flex-center-v flex-grow container"></main></content>`;
    addScript("appendix/content_load.min.js", true);
});