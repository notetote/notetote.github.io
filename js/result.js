let sKey;

function scrapeLink() {
    let vars = {};
    window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}

function getKey() {
    sKey = decodeURIComponent(scrapeLink().s.replace(/\+/g,"%20"));
}

getKey();

const badChar = [
    "^",
    "$",
    ".",
    "|",
    "\\",
    "*",
    "?",
    "+",
    "{",
    "}",
    ",",
    "[",
    "]",
    ":",
    "(",
    ")",
    "-",
    "=",
    "!",
    ";",
    "#",
    "<",
    ">"
];

function updateURL() {
    let newlink = window.location.href.replace("?s=" + scrapeLink().s,"?s=" + sKey.replace(/\s/g,"+"));

    if (sessionStorage.lastURL && sessionStorage.lastURL == newlink) {return;}

    sessionStorage.lastURL = newlink;

    history.pushState({}, document.title, newlink);
}

function makeResults(url) {
    for (let x = 0; x < 20; x++) {
        for (let y = 0; y < badChar.length; y++) {
            sKey = sKey.replace(badChar[y],"");
        }
    }

    sBox.value = sKey.replace("dQw4w9WgXcQ","");
    document.title = sKey + " at Notetote";

    if (sKey == "") {
        sKey = "dQw4w9WgXcQ";
        document.title = "Search at Notetote";
    }
    clearCheck();
    doPrime();
    if (url !== "null") {
        updateURL();
    } else {
        sessionStorage.lastURL = window.location.href;
    }
}

makeResults("null");

const sForm = document.querySelector("form.search-box");

sForm.addEventListener("submit", function(event) {
    event.preventDefault();
    sKey = sBox.value;
    focusPrimary();
    makeResults();
});

window.addEventListener("popstate", function() {
    getKey();
    focusPrimary();
    makeResults("null");
});