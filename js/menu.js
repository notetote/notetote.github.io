function navIn() {
    document.getElementsByTagName("content")[0].classList.add("noscroll","blur");
    document.getElementsByTagName("nav")[0].classList.remove("hide");
    setTimeout((function(){
        document.getElementsByTagName("nav")[0].classList.add("navin");
    }), 100);
}

function navOut() {
    document.getElementsByTagName("content")[0].classList.remove("noscroll","blur");
    document.getElementsByTagName("nav")[0].classList.remove("navin");
    setTimeout((function(){
        document.getElementsByTagName("nav")[0].classList.add("hide");
    }), 100);
}