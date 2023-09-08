/*
function setJSON(key, data) {
    if (typeof data != "string") {data = JSON.stringify(data);}
    localStorage.setItem(key, data);
}
*/
/*
function getJSON(key) {
    //return JSON.parse(localStorage.getItem(key));

    localforage.getItem(key).then(function(event) {
        let txt = new TextDecoder().decode(pako.inflate(event));
        return JSON.parse(txt);
    });
}
*/
const sObj = window.indexJSON.index, //getJSON("index").index, // search term = sKey;
      primeBox = document.getElementsByTagName("primary")[0];

/*
<a class="flex flex-row flex-center-v" onclick="primeClick('links_macbeth',this)">
  <info class="flex flex-column full-width">
    <topic class="text-trim">Macbeth</topic>
    <author class="text-trim">Shakespeare</author>
  </info>
  <panel class="flex flex-row flex-center-h flex-center-v">
    <i class="fa fa-load mid"></i>
  </panel>
</a>
*/

function primeList(key) {
    let anchor = document.createElement("a");
    anchor.className = "flex flex-row flex-center-v";
    anchor.href = `/search?s=${(sObj[key].title + " " + sObj[key].author).toLowerCase().replace(/\ /g, "+")}`;
    anchor.setAttribute("onclick",`primeClick('${sObj[key].json}',this);return false`);
    anchor.innerHTML = `<info class="flex flex-column full-width"><topic class="text-trim">${sObj[key].title}</topic><author class="text-trim">${sObj[key].author}</author></info><panel class="flex flex-row flex-center-h flex-center-v"><i class="fa fa-load mid"></i></panel>`;
    primeBox.appendChild(anchor);
}

function doPrime() {
    primeBox.innerHTML = "";
    for (let z = 0; z < sObj.length; z++) {
        let string = sObj[z].title + " " + sObj[z].author + " " + sObj[z].keywords;

        for (let x = 0; x < 20; x++) {
            for (let y = 0; y < badChar.length; y++) {
                string = string.replace(badChar[y],"");
            }
        }

        let query = new RegExp(sKey, "gi");
        if (string.match(query)) {
            primeList(z);
        }
    }
    checkPrime();
}

// Check if the results are empty after searching has finished and push a notification if it is empty.
function checkPrime() {
    let mainBox = document.getElementsByTagName("main");
    if (!primeBox.children[0]) {
        mainBox[0].classList.add("hide");
        mainBox[1].classList.remove("hide");
    } else {
        mainBox[1].classList.add("hide");
        mainBox[0].classList.remove("hide");
    }
}