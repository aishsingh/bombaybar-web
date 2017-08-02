var width;
var height;

function init() {
    resizePage();

    Velocity(document.getElementById("nav-menu"), { translateX: "-50%", translateY: 0 }, { stagger: 500, duration: 0 });
    Velocity(document.getElementById("nav-menu"), { translateX: "-50%", translateY: 0, opacity: 1.0 }, { duration: 500 });
}

function hoverLogo() {
    document.getElementById("ic_logo").src='images/logo_icon_colour.png';
    // Velocity(document.getElementById("nav_food"), { color: '#efcc82' }, { duration: 0 });
    Velocity(document.getElementById("nav_logo"), { fontSize: 32 }, { duration: 300 });
    Velocity(document.getElementById("ic_logo"), { width: 55 }, { duration: 300 });
}
function leaveLogo() {
    document.getElementById("ic_logo").src='images/logo_icon.png';
    // Velocity(document.getElementById("nav_food"), { color: '#000' }, { duration: 0 });
    Velocity(document.getElementById("nav_logo"), { fontSize: 25 }, { duration: 200 });
    Velocity(document.getElementById("ic_logo"), { width: 50 }, { duration: 200 });
}

function hoverFood() {
    document.getElementById("ic_food").src='images/Cutlery_colour.png';
    // Velocity(document.getElementById("nav_food"), { color: '#efcc82' }, { duration: 0 });
    Velocity(document.getElementById("nav_food"), { fontSize: 32 }, { duration: 300 });
    Velocity(document.getElementById("ic_food"), { width: 45 }, { duration: 300 });
}
function leaveFood() {
    document.getElementById("ic_food").src='images/Cutlery.png';
    // Velocity(document.getElementById("nav_food"), { color: '#000' }, { duration: 0 });
    Velocity(document.getElementById("nav_food"), { fontSize: 25 }, { duration: 200 });
    Velocity(document.getElementById("ic_food"), { width: 40 }, { duration: 200 });
}

function hoverGallery() {
    document.getElementById("ic_gallery").src='images/Camera_colour.png';
    // Velocity(document.getElementById("nav_gallery"), { color: '#efcc82' }, { duration: 0 });
    Velocity(document.getElementById("nav_gallery"), { fontSize: 32 }, { duration: 300 });
    Velocity(document.getElementById("ic_gallery"), { width: 45 }, { duration: 300 });
}
function leaveGallery() {
    document.getElementById("ic_gallery").src='images/Camera.png';
    // Velocity(document.getElementById("nav_gallery"), { color: '#000' }, { duration: 0 });
    Velocity(document.getElementById("nav_gallery"), { fontSize: 25 }, { duration: 200 });
    Velocity(document.getElementById("ic_gallery"), { width: 40 }, { duration: 200 });
}

function hoverAbout() {
    document.getElementById("ic_about").src='images/Envelope_colour.png';
    // Velocity(document.getElementById("nav_about"), { color: '#efcc82' }, { duration: 0 });
    Velocity(document.getElementById("nav_about"), { fontSize: 32 }, { duration: 300 });
    Velocity(document.getElementById("ic_about"), { width: 45 }, { duration: 300 });
}
function leaveAbout() {
    document.getElementById("ic_about").src='images/Envelope.png';
    // Velocity(document.getElementById("nav_about"), { color: '#000' }, { duration: 0 });
    Velocity(document.getElementById("nav_about"), { fontSize: 25 }, { duration: 200 });
    Velocity(document.getElementById("ic_about"), { width: 40 }, { duration: 200 });
}


function resizePage() {
    width = window.outerWidth;
    height = window.outerHeight;

    if (width < 500) {
        if (!!document.getElementById("nav_logo")) document.getElementById("nav_logo").style.fontSize = "0";
        document.getElementById("nav_food").style.fontSize = "0";
        document.getElementById("nav_gallery").style.fontSize = "0";
        document.getElementById("nav_about").style.fontSize = "0";
    } else {
        if (!!document.getElementById("nav_logo")) document.getElementById("nav_logo").style.fontSize = "25px";
        document.getElementById("nav_food").style.fontSize = "25px";
        document.getElementById("nav_gallery").style.fontSize = "25px";
        document.getElementById("nav_about").style.fontSize = "25px";
    }
}

window.addEventListener("load", init, true);
window.addEventListener("resize", resizePage, true);
