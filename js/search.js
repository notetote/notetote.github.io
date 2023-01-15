sessionStorage.removeItem("primeNow");

const sBox = document.querySelector(".search-box input[type='text']"),
      sFind = document.querySelector(".search-box input[type='submit']"),
      sClear = document.querySelector(".search-box input[type='button']");

function clearCheck() {
    if (sBox.value == "") {
        sClear.classList.add("hide"),
        sFind.classList.remove("active");
    } else {
        sClear.classList.remove("hide"),
        sFind.classList.add("active");
    }
}

function clearSearch() {
    sBox.value = "";
    sBox.focus();
    clearCheck();
}

sBox.addEventListener("input",clearCheck);