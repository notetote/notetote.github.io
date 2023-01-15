document.getElementsByTagName("body")[0].innerHTML = localGet("fable_search");

document.getElementsByTagName("scrolltop")[0].outerHTML = localGet("fable_scroll");

document.getElementsByTagName("header")[0].outerHTML = localGet("fable_header");

document.getElementsByClassName("logo-top")[0].innerHTML = localGet("svg_side") + localGet("svg_none");

document.getElementsByClassName("logo-side")[0].innerHTML = localGet("svg_side") + localGet("svg_none");

document.getElementsByTagName("footer")[0].outerHTML = localGet("fable_footer");

document.getElementsByTagName("nav")[0].outerHTML = localGet("fable_nav");

localforage.getItem("index").then(function(event) {
    let txt = new TextDecoder().decode(pako.inflate(event));
    window.indexJSON = JSON.parse(txt);
}).then(function() {
    /*
    addScript("js/scroll.min.js");
    addScript("js/menu.min.js");
    addScript("js/index.min.js");
    addScript("js/search.min.js");
    addScript("js/result.min.js");
    addScript("js/filter.min.js");
    addScript("js/switch.min.js");
    */

    inScript(localGet("scrollJS") + 
             localGet("menuJS") +
             localGet("indexJS") +
             localGet("searchJS") +
             localGet("resultJS") + 
             localGet("filterJS") +
             localGet("switchJS")
    ,"oneJS");
    
    loadTime();
    appendectomy();
});