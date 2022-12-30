document.getElementsByTagName("body")[0].innerHTML = localGet("fable_home");

document.getElementsByClassName(".logo-main").innerHTML = localGet("logotextbelow");

document.getElementsByTagName("scrolltop")[0].outerHTML = localGet("fable_scroll");

addScript("js/scroll.min.js");
addScript("js/menu.min.js");
addScript("js/search.min.js");
addScript("js/suggestion.min.js");