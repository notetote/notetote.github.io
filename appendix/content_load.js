document.querySelector("main").innerHTML = `<i class="fa fa-load splash margin bottom m2"></i><span class="flex flex-row flex-center-h flex-center-v"><span class="dots margin right m0">.</span><span>updating database</span><span class="dots margin left m0">.</span></span>`;
addScript("js/splash.min.js");
addScript("lib/pako_deflate.min.js", true);
addScript("lib/localforage.min.js", true);

async function storeIndex() {
    let url = window.location.origin + "/json/index.json",
        response = await fetch(url),
        gotJSON = await response.json();
    
    localStorage.index = JSON.stringify(gotJSON);
    localStorage.version = version;
}
storeIndex().then(function(value){
    appendectomy();
});