// Version
const version = 1;

// Path and Early
const path = window.location.pathname.replace(/\//g,""),
      earl = "<nav></nav><scrolltop></scrolltop>";

// Skip event check or not
let skip, pakoHere, forageHere;

// Function for adding script to head or body
function addScript(key, where) {
    let script = document.createElement("script");
    script.setAttribute("type","text/javascript");
    script.setAttribute("src",key);
    if (where) {
        document.head.appendChild(script);
    } else {
        document.body.appendChild(script);
    }
}

// Function for adding style to head
function addStyle(key) {
    let style = document.createElement("link");
    style.setAttribute("rel","stylesheet");
    style.setAttribute("type","text/css");
    style.setAttribute("href",key);
    document.head.appendChild(style);
}

// Function for adding style to head as inline
function inStyle(key, sid) {
    let style = document.createElement("style");
    style.setAttribute("type","text/css");
    if (sid) {style.id = sid;}
    style.innerHTML = key;
    document.head.appendChild(style);
}

// Get local resource
function localGet(key) {
    if (!localStorage.getItem(key)) {
        localStorage.clear();
        window.location.reload();
    }
    return decodeURIComponent(localStorage.getItem(key));
}

// Fetching data and returning as text
async function fetchThis(link) {
    let url = window.location.origin + link,
        response = await fetch(url),
        txt = await response.text();
    return txt;
}

// Function for path redirection
function pathway() {
    if (!localStorage.version || localStorage.version < version || path === "load") {
        return "path_load.min.js";
    }

    if (path === "") {
        return "path_home.min.js";
    }

    if (path === "search" && !window.location.search.match(/[\?\&]s=[^\?\&]+/)) {
        window.location.href = window.location.origin;
    }
    
    if (localStorage.getItem("fable_" + path)) {
        return "path_" + path + ".min.js";
    } else {
        return "path_404.min.js";
    }
}

// Remove all appendix js from DOM
function appendectomy() {
    let appendix = document.querySelectorAll("script[src*='appendix'],[appendix]");
    for (let x = 0; x < appendix.length; x++) {
        appendix[x].remove();
    }
}

// Calculate load time
function loadTime() {
    try {
        let loadExit = parseFloat((Date.now() - loadInit)/1000).toFixed(2);
        document.querySelectorAll("footer span")[1].innerHTML = "In " + loadExit + " seconds";
    } catch(e) {}
}

// Move forward with loading the pages
function forward() {
    if (!pakoHere && !forageHere) {return;}

    addScript("appendix/" + pathway(), true);
}

// Event creation alongside global variable
function leadEvent(keyName) {
    let keyEvent = new CustomEvent("keyEvent", {
        detail: keyName
    });
    document.dispatchEvent(keyEvent);
}

// Lead event listener
document.addEventListener("keyEvent",function(e) {
    if (e.detail === "pako") {pakoHere = true;}
    if (e.detail === "forage") {forageHere = true;}
    forward();
});

// Main orator function
(function orator() {
    addScript("js/fav.min.js", true); // Add favicon toggler in head
    if (pathway().match(/_load\./)) {
        addScript("lib/pako_deflate.min.js", true);
        addScript("lib/localforage.min.js", true);
    } else if (pathway().match(/_search\./)) {
        addScript("lib/localforage.min.js", true);
        addScript("lib/pako_inflate.min.js", true);
    } else {
        skip = true;
    }

    if (!localStorage.mainCSS) {
        addStyle("css/main.min.css"); // Add main style
    } else {
        inStyle(localGet("mainCSS"),"mainCSS"); // Add main style locally
    }
    if (!localStorage.fontasmCSS) {
        addStyle("css/fontasm.min.css"); // Add icon font
    } else {
        inStyle(localGet("fontasmCSS"),"fontasmCSS"); // Add icon font locally
    }

    if (skip) {
        document.addEventListener("DOMContentLoaded",function() {
            addScript("appendix/" + pathway(), true);
        });
    }

    document.addEventListener("readystatechange",function() {
        if (document.readyState !== "complete") {return;}
        loadTime();
    });
})();