document.title = "About Notetote";

document.getElementsByTagName("body")[0].innerHTML = localGet("fable_about");

let sections = document.querySelectorAll("main section");
sections[0].innerHTML = sections[0].innerHTML + localGet("svg_about1");
sections[1].innerHTML = sections[1].innerHTML + localGet("svg_about2");
sections[2].innerHTML = sections[2].innerHTML + localGet("svg_about3");

document.getElementsByTagName("scrolltop")[0].outerHTML = localGet("parable_scroll");

document.getElementsByTagName("header")[0].outerHTML = localGet("parable_header");

document.getElementsByClassName("logo-top")[0].innerHTML = localGet("svg_side") + localGet("svg_none");

document.getElementsByClassName("logo-side")[0].innerHTML = localGet("svg_side") + localGet("svg_none");

document.getElementsByTagName("footer")[0].outerHTML = localGet("parable_footer");

document.getElementsByTagName("nav")[0].outerHTML = localGet("parable_nav");

document.querySelector("nav a[href='about']").classList.add("active");

inScript(localGet("scrollJS") +
         localGet("menuJS")
        ,"oneJS");

loadTime();
appendectomy();