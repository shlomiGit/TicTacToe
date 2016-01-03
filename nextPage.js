// JavaScript source code
window.onload = function () {
    document.getElementById('prevPage').addEventListener("click", prevPage, false)
    document.getElementById('exit').addEventListener("click", exit, false)

    document.getElementById('width').innerText += window.innerWidth
    document.getElementById('height').innerText += window.innerHeight
}

function prevPage() {
    location.assign("index.html");
}

function exit() {
    navigator.app.exitApp(); // may need <script type="text/javascript" charset="utf-8" src="cordova-1.5.0.js"></script>
    //app.exitApp();
    //return exec(null, null, APP_PLUGIN_NAME, "exitApp", []);
    //window.exit(); // doesn't work in desktop chrome
    // window.close(); // works in desktop chrome but not android
}