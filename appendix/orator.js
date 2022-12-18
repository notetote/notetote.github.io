function addScript(key, where) {
    let script;
    script = document.createElement("script");
    script.setAttribute("type","text/javascript");
    script.setAttribute("src",key);
    if (where === true) {
        document.head.appendChild(script);
    } else {
        document.body.appendChild(script);
    }
}

function addStyle(key) {
    let style;
    style = document.createElement("link");
    style.setAttribute("rel","stylesheet");
    style.setAttribute("type","text/css");
    style.setAttribute("href",key);
    document.head.appendChild(style);
}

(async function() {
    addScript("js/fav.min.js", true);
    addStyle("css/main.min.css");
    addStyle("css/fontasm.min.css");
})();