const colorScheme = window.matchMedia("(prefers-color-scheme: dark)"),
      favIcon = document.querySelectorAll("head link[rel='icon']");

function favSwitch() {
    if (colorScheme.matches) {
        favIcon[0].setAttribute("href","app/favW.ico");
        //shortcutIcon[1].setAttribute("href","app/16w.png");
    } else {
        favIcon[0].setAttribute("href","app/favB.ico");
        //shortcutIcon[1].setAttribute("href","app/16b.png");
    }
}

favSwitch();

colorScheme.addEventListener("change",favSwitch);