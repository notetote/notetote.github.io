document.querySelector("content").className = "flex flex-column";
document.querySelector("main").className = "flex flex-column flex-center-h flex-center-v flex-grow container";

document.querySelector("main").innerHTML = `
<div class="logo-main margin m2 bottom">
${localGet("logotextbelow")}
</div>
<form class="flex flex-row search-box margin m1 bottom" action="search.html">
<input name="s" class="flex-grow" value="" type="text" autocomplete="off" required>
<input class="fa small hide" value="X" type="button" onclick="clearSearch()">
<input class="fa" value="S" type="submit">
</form>
<div class="margin m2 bottom">
<span class="font-light">What are we studying today?</span>
</div>
<div class="flex flex-row flex-wrap flex-center-h search-suggest font-light margin m2 bottom">
<a onclick="quickSearch(this)">Macbeth</a>
<a onclick="quickSearch(this)">Shakespeare</a>
<a onclick="quickSearch(this)">Romeo and Juliet</a>
<a onclick="quickSearch(this)">Hammer</a>
<a onclick="quickSearch(this)">Macbeth</a>
<a onclick="quickSearch(this)">Shakespeare</a>
<a onclick="quickSearch(this)">Romeo</a>
<a onclick="quickSearch(this)">Hamlet</a>
</div>
`;