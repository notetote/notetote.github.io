// Version
const version = 1;

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

// Function for adding inline script to body
function inScript(key) {
    let script = document.createElement("script");
    script.setAttribute("type","text/javascript");
    script.setAttribute("appendix","");
    script.innerHTML = key;
    document.head.appendChild(script);
}

// Function for adding style to head
function addStyle(key) {
    let style = document.createElement("link");
    style.setAttribute("rel","stylesheet");
    style.setAttribute("type","text/css");
    style.setAttribute("href",key);
    document.head.appendChild(style);
}

// Fetching data and returning as text
async function fetch(link) {
    let url = window.location.origin + link;
    let response = await fetch(url);
    return response.text();
}

// Function for path redirection
function pathway() {
    if (!localStorage.version || localStorage.version < version) {
        return "path_load.min.js";
    }

    let path = window.location.pathname.replace(/^\//,"");
    if (path === "") {
        return "path_home.min.js";
    } else {
        return "path_" + path + ".min.js";
    }
}

// Remove all appendix js from DOM
function appendectomy() {
    let appendix = document.querySelectorAll("script[src*='appendix'],[appendix]");
    for (let x = 0; x < appendix.length; x++) {
        appendix[x].remove();
    }
}

// Main orator function
(async function orator() {
    addScript("js/fav.min.js", true); // Add favicon toggler in head
    addStyle("css/main.min.css"); // Add main style
    addStyle("css/fontasm.min.css"); // Add icon font
    window.addEventListener("DOMContentLoaded", function() {
        //addScript("lib/pako_deflate.min.js");
        try {
            inScript(fetch("/appendix/" + pathway()));
        } catch(e) {
            addScript("appendix/path_404.min.js");
        }
        appendectomy();
    });
})();