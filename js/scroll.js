function scrollUp() {
    window.scrollTo({top: 0, behavior: 'smooth'});
}

const scrollbtn = document.querySelector("scrolltop");

window.addEventListener("scroll", (function() {
    if (window.pageYOffset > 100) {
        scrollbtn.classList.remove("disable");
    } else {
        scrollbtn.classList.add("disable");
    }
}));