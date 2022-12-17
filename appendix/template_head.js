(function() {
    // Clear anything inside head
    document.head.innerHTML = "";

    document.head.innerHTML = `
    <meta property="og:site_name" content="Disshit" />
<meta property="og:title" content="Disshit is Easy!" />
<meta property="og:type" content="website" />
<meta property="og:url" content="https://notenibba.github.io/" />
<meta property="og:image:type" content="image/png">
<meta property="og:image:width" content="300">
<meta property="og:image:height" content="300">
<meta property="og:image:alt" content="Disshit is a logo!">
<meta property="og:description" content="Disshit is a portal that offers a simple and intuitive interface for sharing your links/files across a range of platforms without facing blocks." />
    `;
    let meta = document.createElement("meta");
    meta.setAttribute("property","og:image");
    meta.setAttribute("content","https://disshit.github.io/img/disshit_3.png");
    document.head.appendChild(meta);
})();