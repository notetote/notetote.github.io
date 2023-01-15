(function() {
    let style = document.createElement("style");
    style.setAttribute("type","text/css");
    style.id = "filter";
    document.head.appendChild(style);
})();

function clearFilter() {
    document.getElementById("filter").innerHTML = "secondary keyring keynote.fi-star{display: none}";
    /*`
        secondary keyring keynote.fi-star {
            display: none;
        }
    `;*/
}

function filter(show, target) {
    if (show == "clear") {
        clearFilter();
    } else {
        document.getElementById("filter").innerHTML = `secondary keyring keynote:not(.${show}){display: none}secondary keyring a:not(.${show}){display: none}`;
        /*`
            secondary keyring keynote:not(.${show}) {
                display: none;
            }
            secondary keyring a:not(.${show}) {
                display: none;
            }
        `;*/
    }
    document.querySelector("secondary toggle tog.active").classList.remove("active");
    target.classList.add("active");
}

clearFilter();