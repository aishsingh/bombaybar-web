var current_slide;
function init() {
    // Velocity(document.getElementById("bg-tint"), { opacity: 0.15 }, { duration: 1000 });
    // Velocity(document.getElementById("logo"), { opacity: 1.0 }, { delay: 700, duration: 1500 });
    // Velocity(document.getElementById("locations"), { translateY: -100}, { duration: 0 });
    // Velocity(document.getElementById("locations"), { translateY: 0, opacity: 1.0 }, { delay: 1500, duration: 1500 });
    Velocity(document.getElementById("nav-menu"), { translateX: "-50%", translateY: 0 }, { stagger: 500, duration: 0 });
    Velocity(document.getElementById("nav-menu"), { translateX: "-50%", translateY: 0, opacity: 1.0 }, { duration: 500 });

    current_slide = 1;
    changeSlideShow();
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

function changeSlideShow() {
    if (current_slide == 1) {
        Velocity(document.getElementById("bg-tint"), { opacity: 0.25 }, { duration: 1000 });
        Velocity(document.getElementById("logo"), { opacity: 1.0 }, { duration: 1000 });
        Velocity(document.getElementById("slide1"), { opacity: 1.0 }, { duration: 1000 });
        Velocity(document.getElementById("slide3"), { opacity: 0.0 }, { duration: 1000 });
        Velocity(document.getElementById("logo"), { opacity: 0.0 }, { delay: 3000, duration: 1000 });
        Velocity(document.getElementById("loc_emporium"), { opacity: 1.0 }, { duration: 1000 });
        Velocity(document.getElementById("loc_westfield"), { opacity: 1.0 }, { duration: 1000 });
        Velocity(document.getElementById("bg-tint"), { opacity: 0 }, { delay: 3000, duration: 1000 });
        current_slide = 2;
    } else if (current_slide == 2) {
        Velocity(document.getElementById("slide2"), { opacity: 1.0 }, { duration: 1000 });
        Velocity(document.getElementById("slide1"), { opacity: 0.0 }, { duration: 1000 });
        Velocity(document.getElementById("logo"), { opacity: 0.0 }, { duration: 1000 });
        Velocity(document.getElementById("loc_emporium"), { opacity: 1.0 }, { duration: 1000 });
        Velocity(document.getElementById("loc_westfield"), { opacity: 0.0 }, { duration: 1000 });
        current_slide = 3;
    } else if (current_slide == 3) {
        Velocity(document.getElementById("slide3"), { opacity: 1.0 }, { duration: 1000 });
        Velocity(document.getElementById("slide2"), { opacity: 0.0 }, { duration: 1000 });
        Velocity(document.getElementById("loc_emporium"), { opacity: 0.0 }, { duration: 1000 });
        Velocity(document.getElementById("loc_westfield"), { translateY: -75 }, { duration: 0 });
        Velocity(document.getElementById("loc_westfield"), { translateY: -75, opacity: 1.0 }, { duration: 1000 });
        Velocity(document.getElementById("loc_westfield"), { translateY: 0.0 }, { delay: 3000, duration: 1000 });
        // Velocity(document.getElementById("loc_emporium"), { opacity: 0.0 }, { duration: 1000 });
        // Velocity(document.getElementById("loc_westfield"), { opacity: 0.0 }, { duration: 1000 });
        current_slide = 1;
    }

    setTimeout(changeSlideShow, 5000);
}

window.onload = init;
