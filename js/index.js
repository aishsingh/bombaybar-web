function init() {
    // Show/Hide diagram details depending on where the mouse is
    document.body.addEventListener("mouseout", function() {
        document.getElementById('bg-tint').style.background = "rgb(225, 218, 197)";
        document.getElementById('bg-tint').style.opacity = 0.5;
    }, false);
    document.body.addEventListener("mouseover", function() {
        document.getElementById('bg-tint').style.background = "rgb(215, 208, 187)";
        document.getElementById('bg-tint').style.opacity = 0.7;
    }, false);
}

window.onload = init;
// window.onresize = resizePage;
