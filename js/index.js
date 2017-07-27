var current_slide;
function startSlideShow() {
    current_slide = 1;
    changeSlideShow();
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

window.onload = startSlideShow;
