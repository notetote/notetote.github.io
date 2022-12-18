const colorScheme = window.matchMedia("(prefers-color-scheme: dark)"),
      linkRel = document.querySelectorAll("head link[rel]:not([rel*='apple'],[rel*='canonical'],[rel*='mask'])");

function favSwitch() {
    for (let x = 0; x < linkRel.length; x++) {
        linkRel[x].setAttribute("href",linkRel[x].getAttribute("href").replace("w.",".").replace("b.","."));
    }
    if (colorScheme.matches) {
        for (let x = 0; x < linkRel.length; x++) {
            linkRel[x].setAttribute("href",linkRel[x].getAttribute("href").replace(".","w."));
        }
    } else {
        for (let x = 0; x < linkRel.length; x++) {
            linkRel[x].setAttribute("href",linkRel[x].getAttribute("href").replace(".","b."));
        }
    }
}

favSwitch();

colorScheme.addEventListener("change",favSwitch);