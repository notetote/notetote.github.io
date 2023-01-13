function clearSecond() {
    document.querySelector("secondary toggle").innerHTML = "";
    document.querySelector("secondary keyring").innerHTML = "";
    clearFilter();
}

function focusPrimary() {
    document.querySelector("primary").classList.remove("shide");
    setTimeout((function(){
        document.querySelector("primary").classList.remove("secondary");
        document.querySelector("secondary").classList.remove("secondary");
        document.querySelector("primary").classList.add("primary");
        document.querySelector("secondary").classList.add("primary");
    }), 100);
    document.querySelector("titlecard").innerText = "Search";
    document.title = sKey + " at NoteNibba";
    setTimeout((function(){
        document.querySelector("secondary").classList.add("hide");
        clearSecond();
        sessionStorage.removeItem("primeNow");
        selectRemove();
    }), 300);
}

function focusSecondary() {
    document.querySelector("secondary").classList.remove("hide");
    setTimeout((function(){
        document.querySelector("primary").classList.remove("primary");
        document.querySelector("secondary").classList.remove("primary");
        document.querySelector("primary").classList.add("secondary");
        document.querySelector("secondary").classList.add("secondary");
    }), 100);
    document.querySelector("titlecard").innerText = document.querySelector("primary a.active info topic").innerText;
    document.title = document.querySelector("titlecard").innerText + " at NoteNibba";
    setTimeout((function(){
        document.querySelector("primary").classList.add("shide");
    }), 300);
}

function selectRemove() {
    try {
        document.querySelector("primary a.active").classList.remove("active");
    } catch(e) {}
    try {
        document.querySelector("primary panel.show").classList.remove("show");
    } catch(e) {}
}

function primeClick(file, target) {
    if (sessionStorage.getItem("primeNow") == file) {
        return false;
    }
    
    scrollUp();
    document.querySelector("titlecard").innerText = "Search";
    document.title = sKey + " at NoteNibba";
    sessionStorage.setItem("primeNow",file);

    selectRemove();
    target.classList.add("active");
    target.children[1].classList.add("show");

    clearSecond();

    secondFetch(file);

    return false;
}

async function secondFetch(file) {
    const dirJSON = window.location.origin + "/json/";
    let url = dirJSON + file + ".json";
    let response = await fetch(url);
    let tempJSON = await response.json();
    secondList(tempJSON);
    focusSecondary();
}

function secondList(list) {
    let print, print2;
    let hitCount = 0;
    function echo(key) {
        if (!print) {
            print = key;
        } else {
            print = print + key;
        }
    }

    function echo2(key) {
        if (!print2) {
            print2 = key;
        } else {
            print2 = print2 + key;
        }
    }

    const v1 = `<keynote class="flex flex-row flex-center-v flex-space-between fi-`,
          v2 = `"><name>`,
          v3 = `</name><i class="fa fa-`,
          v4 = ` mid"></i></keynote>`,
          vNote = list.links.note,
          vVid = list.links.vid,
          vSub = list.links.sub,
          vDown = list.links.down;

    const e1 = `" onclick="`,
          e2 = `filter('`,
          e3 = `<tog class="`,
          e4 = `<tog${e1.replace(/\" /," ")}`,
          e5 = `',this)">`,
          e6 = `<i class="fa fa-`,
          e7 = ` big"></i></tog>`;

    function linkSet(txt,url,hit,type) {
        let sClass = "",
            sPanel = "";
        if (hit == "yes") {
            hitCount++
            sClass = ` fi-star`;
            sPanel = `<panel class="flex flex-row flex-center-h flex-center-v"><i class="fa fa-star mid"></i></panel>`;
        }
        echo(`<a href="${url}" target="_blank" class="flex flex-row flex-center-v ${type+sClass}"><info class="flex flex-column full-width"><name class="text-trim">${txt}</name><dest class="text-trim">${url}</dest></info>${sPanel}</a>`);
    }

    echo(`${v1}star`);
    echo(`${v2}Starred`);
    echo(`${v3}star`);
    echo(`${v4}`);
    echo2(`${e3}active${e1+e2}clear${e5+e6}all${e7}`); // <tog class="active" onclick="filter('clear',this)"><i class="fa fa-all big"></i></tog>

    if (vNote.length > 0) {
        echo(`${v1}note`);
        echo(`${v2}Notes`);
        echo(`${v3}notes`);
        echo(`${v4}`);
        echo2(`${e4+e2}fi-note${e5+e6}notes${e7}`); // <tog" onclick="filter('
        for (let x = 0; x < vNote.length; x++) {
            linkSet(vNote[x].txt,vNote[x].url,vNote[x].hit,"fi-note");
        }
    }

    if (vVid.length > 0) {
        echo(`${v1}vid`);
        echo(`${v2}Videos`);
        echo(`${v3}videos`);
        echo(`${v4}`);
        echo2(`${e4+e2}fi-vid${e5+e6}videos${e7}`);
        for (let x = 0; x < vVid.length; x++) {
            linkSet(vVid[x].txt,vVid[x].url,vVid[x].hit,"fi-vid");
        }
    }

    if (vSub.length > 0) {
        echo(`${v1}sub`);
        echo(`${v2}Submissions`);
        echo(`${v3}internal`);
        echo(`${v4}`);
        echo2(`${e4+e2}fi-sub${e5+e6}internal${e7}`);
        for (let x = 0; x < vSub.length; x++) {
            linkSet(vSub[x].txt,vSub[x].url,vSub[x].hit,"fi-sub");
        }
    }

    if (vDown.length > 0) {
        echo(`${v1}down`);
        echo(`${v2}Downloads`);
        echo(`${v3}download`);
        echo(`${v4}`);
        echo2(`${e4+e2}fi-down${e5+e6}download${e7}`);
        for (let x = 0; x < vDown.length; x++) {
            linkSet(vDown[x].txt,vDown[x].url,vDown[x].hit,"fi-down");
        }
    }

    if (hitCount > 0) {
        echo2(`${e4+e2}fi-star${e5+e6}star${e7}`);
    }

    echo2(`${e3}round${e1}focusPrimary()">${e6}arrow${e7}`);

    document.querySelector("secondary keyring").innerHTML = print;
    document.querySelector("secondary toggle").innerHTML = print2;

    try {
        document.querySelector("primary panel.show").classList.remove("show");
    } catch(e) {}
}