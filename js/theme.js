function setDusk() {
    localStorage.setItem("theme","dusk");
    document.getElementById("duskCSS").removeAttribute("media");
    document.getElementById("duskCSS").setAttribute("type","text/css");
    document.getElementById("dawnCSS").removeAttribute("media");
    document.getElementById("dawnCSS").setAttribute("type","null");
}
function setDawn() {
    localStorage.setItem("theme","dawn");
    document.getElementById("duskCSS").removeAttribute("media");
    document.getElementById("duskCSS").setAttribute("type","null");
    document.getElementById("dawnCSS").removeAttribute("media");
    document.getElementById("dawnCSS").setAttribute("type","text/css");
}
function setAuto() {
    localStorage.setItem("theme","auto");
    document.getElementById("duskCSS").setAttribute("media","(prefers-color-scheme: no-preference), (prefers-color-scheme: dark)");
    document.getElementById("duskCSS").setAttribute("type","text/css");
    document.getElementById("dawnCSS").setAttribute("media","(prefers-color-scheme: light)");
    document.getElementById("dawnCSS").setAttribute("type","text/css");
}

function setTheme() {
    let themeChoice = localStorage.getItem("theme");

    if (themeChoice === "auto") {
        setAuto();
    } else if (themeChoice === "dawn") {
        setDawn();
    } else {
        setDusk();
    }
}

setTheme();