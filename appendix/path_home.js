document.getElementsByTagName("body")[0].innerHTML = `
<scrolltop class="flex flex-center-h flex-center-v pointer disable" onclick="scrollUp()"><i class="fa fa-arrow-filled mid"></i></scrolltop>
<content class="flex flex-column">
  <header class="flex flex-column flex-center-h container">
    <span class="flex flex-row flex-reverse flex-center-v fix-height pointer">
      <i class="fa fa-menu"></i>
    </span>
  </header>
  <main class="flex flex-column flex-center-h flex-center-v flex-grow container">
    <div class="logo-main margin m2 bottom">${localGet("logotextbelow")}</div>
    <form class="flex flex-row search-box margin m1 bottom" action="search">
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
  </main>
  <footer class="flex flex-row flex-space-between container font-light">
    <span>
      <a href="https://notenibba.github.io/"><i class="fa fa-notenibba margin m0 right"></i>NoteNibba </a> | <a href="https://www.gnu.org/licenses/gpl-3.0-standalone.html">GPL-3.0</a>
    </span>
    <span>Loaded in X secs.</span>
  </footer>
</content>`;

addScript("js/scroll.min.js");
addScript("js/menu.min.js");
addScript("js/search.min.js");
addScript("js/suggestion.min.js");