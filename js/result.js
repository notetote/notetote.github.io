var sKey;

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
    history.pushState({}, '', newlink);
}

function makeResults(url) {
    for (let x = 0; x < 20; x++) {
        for (let y = 0; y < badChar.length; y++) {
            sKey = sKey.replace(badChar[y],"");
        }
    }
    
    document.querySelector(".search-box input[type='text']").value = sKey;
    document.title = sKey + " at NoteNibba";
    
    if (sKey == "") {
        sKey = "dQw4w9WgXcQ";
        document.title = "Search at NoteNibba";
    }
    clearCheck();
    doPrime();
    if (url !== "null") {
        updateURL();
    }
}

makeResults();

var sForm = document.querySelector("form.search-box");

sForm.addEventListener("submit", function(event) {
    event.preventDefault();
    sKey = document.querySelector(".search-box input[type='text']").value;
    focusPrimary();
    makeResults();
});

window.addEventListener("popstate", function() {
    getKey();
    focusPrimary();
    makeResults("null");
});