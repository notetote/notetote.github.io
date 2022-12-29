function quickSearch(target) {
    sBox.value = target.innerText;
    sBox.focus();
    clearCheck();
    setTimeout(function() {
        document.getElementsByTagName("form")[0].submit();
    }, 300);
}