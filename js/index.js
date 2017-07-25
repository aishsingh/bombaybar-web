function init() {
    Velocity(document.getElementById("bg"), { opacity: 1.0 }, { duration: 2000 });
    Velocity(document.getElementById("bg-tint"), { opacity: 0.35 }, { duration: 1000 });
    Velocity(document.getElementById("logo"), { opacity: 1.0 }, { delay: 700, duration: 2200 });
    Velocity(document.getElementById("locations"), { translateY: -100}, { duration: 0 });
    Velocity(document.getElementById("locations"), { translateY: 0, opacity: 1.0 }, { delay: 1500, duration: 1500 });
    Velocity(document.getElementById("nav-menu"), { translateX: "-50%", translateY: 0 }, { stagger: 500, duration: 0 });
    Velocity(document.getElementById("nav-menu"), { translateX: "-50%", translateY: 0, opacity: 1.0 }, { duration: 500 });
    // Velocity(document.getElementById("bg"), { scaleX: 0.8, scaleY: 0.8, translateY: 150 }, { duration: 0 });
    // Velocity(document.getElementById("bg"), { scaleX: 1.1, scaleY: 1.1 , translateY: 0}, { duration: 3200, easing: "easeInBack" });
    // Velocity(document.getElementById("bg"), { translateY: 1220 }, { duration: 0 });
    // Velocity(document.getElementById("bg"), { translateY: 0}, { duration: 4000, easing: "easeInBack" });
}

function hoverFood() {
    document.getElementById("ic_food").src='images/Cutlery_colour.png';
}

function hoverGallery() {
    document.getElementById("ic_gallery").src='images/Camera_colour.png';
}

function hoverAbout() {
    document.getElementById("ic_about").src='images/Envelope_colour.png';
}

function leaveFood() {
    document.getElementById("ic_food").src='images/Cutlery.png';
}

function leaveGallery() {
    document.getElementById("ic_gallery").src='images/Camera.png';
}

function leaveAbout() {
    document.getElementById("ic_about").src='images/Envelope.png';
}

window.onload = init;
// window.onresize = resizePage;000;
