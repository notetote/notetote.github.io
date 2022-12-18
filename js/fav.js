const colorScheme = window.matchMedia("(prefers-color-scheme: dark)"),
      linkRel = document.querySelectorAll("head link[rel]");

function favSwitch() {
    if (colorScheme.matches) {
        for (let x = 0; x < linkRel.length; x++) {
            linkRel[x].href = linkRel[x].href.replace("w.png",".png")
                                             .replace("b.png",".png")
                                             .replace(".png","w.png")
                                             .replace("w.webmanifest",".webmanifest")
                                             .replace("b.webmanifest",".webmanifest")
                                             .replace(".webmanifest","w.webmanifest")
                                             .replace("w.ico",".ico")
                                             .replace("b.ico",".ico")
                                             .replace(".ico","w.ico");
        }
    } else {
        for (let x = 0; x < linkRel.length; x++) {
            linkRel[x].href = linkRel[x].href.replace("w.png",".png")
                                             .replace("b.png",".png")
                                             .replace(".png","b.png")
                                             .replace("w.webmanifest",".webmanifest")
                                             .replace("b.webmanifest",".webmanifest")
                                             .replace(".webmanifest","b.webmanifest")
                                             .replace("w.ico",".ico")
                                             .replace("b.ico",".ico")
                                             .replace(".ico","b.ico");
        }
    }
}

favSwitch();

colorScheme.addEventListener("change",favSwitch);