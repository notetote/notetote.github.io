// Not being used. Not deleted for future reference.

function calcVH() {
	let vH = Math.max(document.documentElement.clientHeight, window.innerHeight || 0),
		section = document.querySelectorAll("section"),
		oH = document.querySelector("header").offsetHeight + document.querySelector("titlecard").offsetHeight;
	for (let x = 0; x < section.length; x++) {
		section[x].setAttribute("style", `height: ${vH - oH}px`);
	}
}
calcVH();
window.addEventListener("onorientationchange", calcVH, true);
window.addEventListener("resize", calcVH, true);