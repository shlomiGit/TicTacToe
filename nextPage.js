// JavaScript source code
window.onload = function () {
    document.getElementById('prevPage').addEventListener("click", prevPage, false)
    document.getElementById('exit').addEventListener("click", exit, false)
}

function prevPage() {
    location.assign("index.html");
}

function exit() {
    //navigator.app.exitApp();
    //window.exit(); // doesn't work in desktop chrome
    window.close();
}