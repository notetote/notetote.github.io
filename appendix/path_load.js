document.title = "Loading Notetote";

inStyle(`:root{--accent-color:#868cff;--accent-color-a:#6b6fcc;--accent-color-b:#505399;--accent-color-c:#353765;--background:#1c1c1c;--search-button:#cccccc;--search-box-bg:#333333;--search-box-border:#161616;--search-box-hover:#444444;--results-background:#161616;--results-border:transparent;--menu-shade:#00000065;--menu-shadow:#000000;--text-color:#eeeeee;--text-stark:#ffffff;--titlecard-color:var(--results-background);--hover-bg:#242424;--active-bg:var(--accent-color);--active-fg:var(--results-background)}`,
        "themeCSS");

inStyle(`@-webkit-keyframes loading{0%{transform:rotate(0) scale(.8)}50%{transform:rotate(180deg) scale(1.1)}100%{transform:rotate(359deg) scale(.8)}}@keyframes loading{0%{transform:rotate(0) scale(.8)}50%{transform:rotate(180deg) scale(1.1)}100%{transform:rotate(359deg) scale(.8)}}*{scrollbar-width:thin!important;scrollbar-color:var(--accent-color) transparent!important;box-sizing:border-box;transition:.1s;outline:0}::-webkit-scrollbar{width:7px!important;height:7px!important}::-webkit-scrollbar-thumb{background:var(--accent-color)!important}::-webkit-scrollbar-track{background:rgba(0,0,0,0)!important}::-moz-selection{color:var(--active-fg);background:var(--active-bg)}::selection{color:var(--active-fg);background:var(--active-bg)}body,html{height:100%;width:100%;line-height:1.3}html{font-family:"Radio Canada",sans-serif;font-size:18px}@media screen and (max-width:1179px){html{font-size:17px}}@media screen and (max-width:959px){html{font-size:16px}}@media screen and (max-width:839px){html{font-size:15px}}@media screen and (max-width:759px){html{font-size:14px}}body{color:var(--text-color);background:var(--background);padding:0;margin:0}.fa{-webkit-tap-highlight-color:transparent;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.fa.splash{-webkit-animation:loading 2s infinite linear;animation:loading 2s infinite linear;fill:var(--text-color);width:100%;max-width:5rem}content{height:100%;width:100%;z-index:1}.container{background:0 0;width:100%;padding:1rem 2rem;color:var(--text-color);word-wrap:break-word}@media screen and (max-width:540px){.container{padding:1rem 1.5rem}}.flex{display:flex}.flex.flex-center-v{align-items:center}.flex.flex-center-h{justify-content:center}.flex.flex-column{flex-direction:column}.flex.flex-row{flex-direction:row}.flex .flex-grow{flex:1 0 auto}main.load{position:relative;row-gap:2.5rem}main.load>span{-moz-column-gap:.5rem;column-gap:.5rem}main.load percent{position:absolute;bottom:1.75rem}main.load loadbar{position:absolute;left:0;bottom:0;display:block;height:.75rem;width:var(--loadbar-percent);background:var(--accent-color);transition:width .1s linear}`,
        "loadCSS");

inStyle(`:root{--loadbar-percent:0%;}`,
        "loadbarCSS");

document.body.innerHTML = '<content class="flex flex-column"><main class="flex flex-column flex-center-h flex-center-v flex-grow container load"></main></content>';

const loadingIcon = '<svg class="fa splash margin bottom m2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300"><path d="M122.9 38.6c0-3.4-.2-6.9 0-10.3.8-14.5 12.6-25.7 27-25.8 14.4 0 26.4 11 27.1 25.6.4 7.4.4 14.9-.1 22.3-1.1 14.8-12.4 24.8-27.1 24.7-14.5-.1-25.5-10.1-26.7-24.8-.3-3.9 0-7.8 0-11.8-.1.1-.1.1-.2.1zm17.3.1c0 3.2-.1 6.5 0 9.7.2 5.7 4.2 9.6 9.8 9.6 5.6 0 9.7-3.8 9.8-9.5.1-6.4.1-12.7 0-19.1-.1-5.4-4.6-9.6-9.9-9.6-5.2.1-9.5 4.2-9.7 9.5-.1 3.1 0 6.2 0 9.4zm-17.3 222.2c0-3.5-.2-7.1 0-10.6.9-14.4 12.6-25.4 27-25.4s26.3 10.9 27.1 25.3c.4 7.4.5 14.9-.1 22.3-1.1 15-12.3 25.1-27.1 25-14.6-.1-25.6-10.3-26.8-25.1-.2-3.8 0-7.7-.1-11.5.1 0 .1 0 0 0zm17.3.2c0 3.1-.1 6.3 0 9.4.2 5.8 4.3 9.8 9.9 9.8 5.5-.1 9.6-4 9.7-9.7.1-6.3.1-12.5 0-18.8-.1-5.5-4.3-9.6-9.8-9.6-5.4 0-9.7 4.1-9.8 9.6-.1 3.1 0 6.2 0 9.3zm54.6-181.3c.1-9.6 3.2-15.9 8.4-21.3 4.2-4.4 8.5-8.7 12.9-12.9 10.9-10.5 27.6-10.4 38.2.1 10.6 10.5 10.7 27.2.3 38.2-4.3 4.5-8.6 8.9-13.1 13.1-8.6 8.1-18.6 10.9-29.7 6.1-10.7-4.8-16.3-13.4-17-23.3zm28.4 8.2c1-.4 3.2-.8 4.6-2.1 5.2-4.8 10.4-9.8 15.2-15.1 3.3-3.7 2.7-9.3-.8-12.8-3.4-3.4-9-4.2-12.6-1-5.5 4.9-10.6 10.2-15.5 15.6-2.6 2.8-2.6 6.5-.7 9.9 1.9 3.4 4.8 5.3 9.8 5.5zM80 194.9c9.4.6 17.8 6 22.6 16.2 4.9 10.2 3.1 20.1-4.1 28.5-5.1 5.9-10.7 11.5-16.6 16.6-10.3 9-26.6 7.9-36.4-2-10-10.1-10.6-26.4-1.1-36.9 4.8-5.3 9.9-10.3 15.2-15.2 5.1-4.6 11.3-7.2 20.4-7.2zm-14.1 50.3c1.1-.5 3.6-.9 5.1-2.3 5.1-4.7 10.1-9.6 14.7-14.8 3.5-3.9 2.8-9.3-.9-13-3.7-3.6-8.9-4.1-12.8-.6-5.2 4.6-10.1 9.6-14.8 14.7-2.7 3-3 6.8-1.1 10.4 1.7 3.6 4.7 5.3 9.8 5.6zm170.7 17.2c-8.4-.1-14.6-2.3-19.8-7.2-4.8-4.5-9.5-9.1-14-13.9-7.1-7.6-10.1-16.6-6.7-26.8 3.4-10.3 10.6-16.8 21.3-19 8.4-1.8 16.1.6 22.4 6.3 5.7 5.1 11.3 10.4 16.2 16.2 7.2 8.5 8.5 18.5 3.8 28.6-4.7 10.3-13.2 15.3-23.2 15.8zm-2.7-17.2c5.4-.3 8.6-2.2 10.3-6 1.8-4 1-7.7-2-10.9-4.2-4.4-8.5-8.7-12.9-12.9-4.5-4.3-10-4.3-14.1-.2s-4.1 9.7.2 14.1c4.2 4.4 8.4 8.8 12.9 12.8 1.8 1.7 4.3 2.5 5.6 3.1zm27-122.1c3.9 0 7.9-.3 11.8 0 14.4 1.2 24.6 12.1 24.8 26.5.2 14.4-9.5 25.9-23.9 27.2-8.3.8-16.7.8-25 0-13.9-1.3-24.3-13.8-23.8-27.5.6-14.4 11.6-25.7 25.8-26.4 3.4-.2 6.9 0 10.3 0v.2zm-.1 36.8c3.2 0 6.5.1 9.7 0 5.8-.2 9.9-4.3 9.8-9.9-.1-5.5-4.1-9.6-9.8-9.7-6.3-.1-12.5-.1-18.8 0-5.5.1-9.6 4.4-9.6 9.8 0 5.5 4 9.6 9.6 9.8 3.1.1 6.1 0 9.1 0zM79.4 105.2c-8.6-.1-14.8-2.4-19.9-7.3-4.7-4.6-9.4-9.2-13.9-13.9-8.1-8.7-10.1-19.7-5.6-29.6 4.8-10.4 15-17 26.2-16.6 7 .2 12.9 3.3 17.8 8 4.7 4.5 9.3 9 13.7 13.7 7.5 7.9 9.6 19.6 5 29.5-4.8 10.5-13.3 15.7-23.3 16.2zm-2.9-17.3c5.5-.2 8.6-2 10.3-5.7 1.9-4 1.3-7.7-1.7-10.9-4.2-4.5-8.6-8.9-13-13.1C67.7 53.9 62 53.9 58 58c-4.1 4-4.1 9.7.2 14.2 4.2 4.4 8.5 8.7 13 12.8 1.7 1.6 4.2 2.3 5.3 2.9zM39.1 123c3.4 0 6.9-.1 10.3 0 14.4.7 25.4 12.1 25.9 26.6.4 13.9-10.3 26.3-24.3 27.4-8.1.6-16.3.6-24.4-.1-11.1-1-19.1-7.1-22.5-17.9-3.4-10.8-1.3-20.6 6.9-28.7 5.3-5.2 12-7.2 19.3-7.3 2.9-.1 5.9-.1 8.8 0 0-.1 0 0 0 0zm-.2 36.9c3.1 0 6.3.1 9.4 0 5.8-.2 9.7-4.3 9.6-10-.1-5.5-4.1-9.5-9.8-9.6-6.2-.1-12.3-.1-18.5 0-5.5.1-9.8 4.3-9.9 9.6-.1 5.5 4.1 9.8 9.8 10 3.1.1 6.2 0 9.4 0z"/></svg>',
      loadingThing = '<percent>0.00%</percent><loadbar></loadbar>',
      earl = "<nav></nav><scrolltop></scrolltop>";

document.querySelector("main").innerHTML = loadingIcon + '<span class="flex flex-row flex-center-h flex-center-v"><span class="dots">.</span><span>updating database</span><span class="dots">.</span></span>' + loadingThing;

addScript("js/splash.min.js");

// Function for load completion
function loadEnd() {
    if (path === "load") {
        window.location.href = window.location.origin;
    } else {
        window.location.reload();
    }
    //appendectomy();
}

function countLocal(key) {
    if (!localStorage.getItem(key)) {
        return 0;
    } else {
        return 1;
    }
}

// Function to check completion of local resources
function checkLocal() {/*
    if (!localStorage.version ||

        !localStorage.localforageLIB ||
        !localStorage.pakoinflateLIB ||

        !localStorage.mainCSS ||
        !localStorage.fontasmCSS ||

        !localStorage.favJS ||
        !localStorage.filterJS ||
        !localStorage.indexJS ||
        !localStorage.menuJS ||
        !localStorage.resultJS ||
        !localStorage.scrollJS ||
        !localStorage.searchJS ||
        !localStorage.suggestionJS ||
        !localStorage.switchJS ||

        !localStorage.fable_home ||
        !localStorage.fable_about ||
        !localStorage.fable_search ||

        !localStorage.parable_scroll ||
        !localStorage.parable_footer ||
        !localStorage.parable_header ||
        !localStorage.parable_headerhome ||
        !localStorage.parable_nav ||
        
        !localStorage.svg_below ||
        !localStorage.svg_side ||
        !localStorage.svg_none ||
        !localStorage.svg_about1 ||
        !localStorage.svg_about2 ||
        !localStorage.svg_about3) {return;}
*/
    let localInt, totalInt, percent, loadbar, value;

    percent = document.getElementsByTagName("percent")[0];
    loadbar = document.getElementById("loadbarCSS");

    localInt = countLocal("version") +

               countLocal("localforageLIB") +
               countLocal("pakoinflateLIB") +
    
               countLocal("mainCSS") +
               countLocal("fontasmCSS") +
               countLocal("tdusk_aCSS") +
               countLocal("tdawn_aCSS") +
               countLocal("tcolor_purpleCSS") +
    
               countLocal("favJS") +
               countLocal("themeJS") +
               countLocal("filterJS") +
               countLocal("indexJS") +
               countLocal("menuJS") +
               countLocal("resultJS") +
               countLocal("scrollJS") +
               countLocal("searchJS") +
               countLocal("suggestionJS") +
               countLocal("switchJS") +
               
               countLocal("fable_home") +
               countLocal("fable_about") +
               countLocal("fable_search") +
               
               countLocal("parable_scroll") +
               countLocal("parable_footer") +
               countLocal("parable_header") +
               countLocal("parable_headerhome") +
               countLocal("parable_nav") +

               countLocal("svg_below") +
               countLocal("svg_side") +
               countLocal("svg_none") +
               countLocal("svg_about1") +
               countLocal("svg_about2") +
               countLocal("svg_about3");

    totalInt = 32;
    
    value = ((localInt/totalInt)*100);
    percent.innerText = value.toFixed(2) + "%";
    loadbar.innerHTML = `:root{--loadbar-percent:${value}%;}`;

    if (localInt !== totalInt) {return;}

    loadEnd();
}

// Function for resource events
function localRes(keyName,keyValue) {
    let resEvent = new CustomEvent("resEvent", {
        detail: {"name":keyName,"res":encodeURIComponent(keyValue)}
    });
    document.dispatchEvent(resEvent);
}

// Custom event listener
document.addEventListener("resEvent",function(e) {
    localStorage.setItem(e.detail.name,e.detail.res);
    checkLocal();
});

// Fetch various data
fetchThis("/json/index.json"+datever).then(function(value) {
    let gotPako = pako.deflate(value);
    localforage.setItem('index', gotPako).then(function() {
        localStorage.version = version;
    });
}).then(function() {
    addScript("appendix/svg_below.min.js"+datever, true);
    addScript("appendix/svg_side.min.js"+datever, true);
    addScript("appendix/svg_none.min.js"+datever, true);
    addScript("appendix/svg_about1.min.js"+datever, true);
    addScript("appendix/svg_about2.min.js"+datever, true);
    addScript("appendix/svg_about3.min.js"+datever, true);
    
    addScript("appendix/fable_home.min.js"+datever, true);
    addScript("appendix/fable_about.min.js"+datever, true);
    addScript("appendix/fable_search.min.js"+datever, true);

    addScript("appendix/parable_scroll.min.js"+datever, true);
    addScript("appendix/parable_footer.min.js"+datever, true);
    addScript("appendix/parable_header.min.js"+datever, true);
    addScript("appendix/parable_nav.min.js"+datever, true);
});

// One fetch function for all js and css
function fetchRest(type, key, folder) {
    if (!folder) {folder = type;}
    fetchThis(`/${folder}/${key}.min.${type}`+datever).then(function(value) {
        localRes(key + folder.toUpperCase(),value);
    });
}

fetchRest("css","main");
fetchRest("css","fontasm");
fetchRest("css","tdusk_a");
fetchRest("css","tdawn_a");
fetchRest("css","tcolor_purple");

fetchRest("js","fav");
fetchRest("js","theme");
fetchRest("js","filter");
fetchRest("js","index");
fetchRest("js","menu");
fetchRest("js","result");
fetchRest("js","scroll");
fetchRest("js","search");
fetchRest("js","suggestion");
fetchRest("js","switch");
fetchRest("js","localforage","lib");
fetchRest("js","pakoinflate","lib");