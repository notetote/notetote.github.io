let suggestThese = ["Hamlet","Macbeth"];

function nowSuggest(key) {
    let suggestHere = document.getElementsByClassName("search-suggest")[0];
    for (let x = 0; x < key.length; x++) {
        suggestHere.innerHTML = suggestHere.innerHTML + `<a onclick="quickSearch(this)">${key[x]}</a>`;
    }
}

nowSuggest(suggestThese);

function quickSearch(target) {
    sBox.value = target.innerText;
    //sBox.focus();
    clearCheck();
    setTimeout(function() {
        document.getElementsByTagName("form")[0].submit();
    }, 300);
}