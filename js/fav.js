const colorScheme = window.matchMedia("(prefers-color-scheme: dark)"),
      linkRel = document.querySelectorAll("head link[rel='apple-touch-icon'],[rel='icon'],[rel='image_src'],[rel='manifest'],[rel='shortcut icon']");

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