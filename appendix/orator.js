// Version Extension
const version = 20230015153950,
      datever = "?" + version.toString();

// Path and Early
const path = window.location.pathname.replace(/\//g,"");

// Skip event check or not
let skip = false, pakoHere = false, forageHere = false;

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

// Function for adding script to body as inline
function inScript(key, sid, where) {
    let script = document.createElement("script");
    script.setAttribute("type","text/javascript");
    if (sid) {script.id = sid;}
    script.innerHTML = key;
    if (where) {
        document.head.appendChild(script);
    } else {
        document.body.appendChild(script);
    }
}

// Function for adding style to head as inline
function inStyle(key, sid) {
    let style = document.createElement("style");
    style.setAttribute("type","text/css");
    if (sid) {style.id = sid;}
    style.innerHTML = key;
    document.head.appendChild(style);
}

// Clear load
function clearLoad() {
    localStorage.clear();
}

// Get local resource
function localGet(key) {
    if (!localStorage.getItem(key)) {
        clearLoad();
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
    if (!localStorage.version || parseFloat(localStorage.version) < version || path === "load") {
        clearLoad();
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

// Push version inside nav
function navVer() {
    try {
        let verSpan = document.querySelector("nav span.version");
        verSpan.innerHTML = "v" + version.toString();
    } catch(e) {}
}

// Calculate load time
function loadTime() {
    try {
        let loadExit = parseFloat((Date.now() - loadInit)/1000).toFixed(2);
        document.querySelectorAll("footer span")[1].innerHTML = "In " + loadExit + " seconds";
    } catch(e) {}
    navVer(); // So that both happen together
}

// Move forward with loading the pages
function forward() {
    if (!pakoHere || !forageHere) {return;}

    addScript("appendix/" + pathway()+datever, true);
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
    if (!localStorage.favJS) {
        addScript("js/fav.min.js", true); // Add favicon toggler in head
    } else {
        inScript(localGet("favJS"),"favJS", true); // Add favicon toggler locally
    }

    if (pathway().match(/_load\./)) {
        addScript("lib/pakodeflate.min.js", true);
        addScript("lib/localforage.min.js", true);
    } else if (pathway().match(/_search\./)) {
        if (!localStorage.localforageLIB) {
            addScript("lib/localforage.min.js", true);
        } else {
            inScript(localGet("localforageLIB"),"localforageLIB", true);
        }
        if (!localStorage.pako_inflateLIB) {
            addScript("lib/pakoinflate.min.js", true);
        } else {
            inScript(localGet("pakoinflateLIB"),"pakoinflateLIB", true);
        }
    } else {
        skip = true;
    }

    if (!pathway().match(/_load\./)) { // Don't load fontasm and main CSS in the loading page
        inStyle(localGet("mainCSS"),"mainCSS");
        inStyle(localGet("fontasmCSS"),"fontasmCSS");
    }

    document.addEventListener("DOMContentLoaded",function() {
        if (skip !== true) {return;}
        addScript("appendix/" + pathway()+datever, true);
    });

    document.addEventListener("readystatechange",function() {
        if (document.readyState !== "complete") {return;}
        loadTime();
    });
})();