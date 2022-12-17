const colorScheme = window.matchMedia("(prefers-color-scheme: dark)"),
      shortcutIcon = document.querySelectorAll("head link[rel='shortcut icon']");

function favSwitch() {
    if (colorScheme.matches) {
        shortcutIcon[0].setAttribute("href","app/favW.ico");
        //shortcutIcon[1].setAttribute("href","app/16w.png");
    } else {
        shortcutIcon[0].setAttribute("href","app/favB.ico");
        //shortcutIcon[1].setAttribute("href","app/16b.png");
    }
}

favSwitch();

colorScheme.addEventListener("change",favSwitch);