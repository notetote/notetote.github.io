document.getElementsByTagName("body")[0].innerHTML = localGet("fable_home");

document.getElementsByClassName("logo-main")[0].innerHTML = localGet("svg_below");

document.getElementsByTagName("scrolltop")[0].outerHTML = localGet("parable_scroll");

document.getElementsByTagName("header")[0].outerHTML = localGet("parable_headerhome");

document.getElementsByTagName("footer")[0].outerHTML = localGet("parable_footer");

document.getElementsByTagName("nav")[0].outerHTML = localGet("parable_nav");

document.querySelector("nav a[href='/']").classList.add("active");

/*
addScript("js/scroll.min.js");
addScript("js/menu.min.js");
addScript("js/search.min.js");
addScript("js/suggestion.min.js");
*/

inScript(localGet("scrollJS") +
         localGet("menuJS") +
         localGet("searchJS") +
         localGet("suggestionJS")
,"oneJS");

loadTime();
appendectomy();