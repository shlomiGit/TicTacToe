// JavaScript source code
window.onload = function () {
    document.getElementById('prevPage').addEventListener("click", prevPage, false)
}

function prevPage() {
    location.assign("index.html");
}