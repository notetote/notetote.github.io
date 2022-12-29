// Version
const version = 1;

// Path
const path = window.location.pathname.replace(/\//g,"");
let pathy;

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
        pathy = "path_load.min.js";
        return pathy;
    }

    try {
        fetchThis("/appendix/path_" + path + ".min.js");
    } catch(e) {
        pathy = "path_404.min.js";
        return pathy;
    }

    if (path === "") {
        pathy = "path_home.min.js";
        //return "path_home.min.js";
    } else {
        pathy = "path_" + path + ".min.js";
        //return "path_" + path + ".min.js";
    }

    return "reg_base.min.js";
}

// Remove all appendix js from DOM
function appendectomy() {
    let appendix = document.querySelectorAll("script[src*='appendix']");
    for (let x = 0; x < appendix.length; x++) {
        appendix[x].remove();
    }
}

// Main orator function
(function orator() {
    addScript("js/fav.min.js", true); // Add favicon toggler in head
    if (pathway().match(/_load\./)) {
        addScript("lib/pako_deflate.min.js", true);
        addScript("lib/localforage.min.js", true);
    }
    if (pathy.match(/_search\./)) {
        addScript("lib/localforage.min.js", true);
        addScript("lib/pako_inflate.min.js", true);
    }
    addStyle("css/main.min.css"); // Add main style
    addStyle("css/fontasm.min.css"); // Add icon font
    
    document.addEventListener("DOMContentLoaded",function() {
        addScript("appendix/" + pathway(), true);
    });
})();