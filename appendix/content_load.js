document.querySelector("main").innerHTML = `<i class="fa fa-load splash margin bottom m2"></i><span class="flex flex-row flex-center-h flex-center-v"><span class="dots margin right m0">.</span><span>updating database</span><span class="dots margin left m0">.</span></span>`;
addScript("js/splash.min.js");
addScript("lib/pako_deflate.min.js", true);
addScript("lib/localforage.min.js", true);

fetchThis("/json/index.json").then(function(value) {
    let gotJSON = JSON.parse(value);
    localStorage.index = JSON.stringify(gotJSON.index);
    localStorage.version = version;
}).then(function() {
    appendectomy();
});