var next_slide;
function startSlideShow() {
    next_slide = 1;
    changeSlide(next_slide);
    setInterval(function(){changeSlide(next_slide)}, 5000);
}

function changeSlide(slide) {
    if (slide == 1) {
        Velocity(document.getElementById("bg-tint"), { opacity: 0.25 }, { duration: 1000 });
        Velocity(document.getElementById("logo"), { opacity: 1.0 }, { duration: 1000 });
        Velocity(document.getElementById("slide1"), { opacity: 1.0 }, { duration: 1000 });
        Velocity(document.getElementById("slide2"), { opacity: 0.0 }, { duration: 1000 });
        Velocity(document.getElementById("slide3"), { opacity: 0.0 }, { duration: 1000 });
        Velocity(document.getElementById("logo"), { opacity: 0.0 }, { delay: 3000, duration: 1000 });
        Velocity(document.getElementById("loc_emporium"), { opacity: 1.0 }, { duration: 1000 });
        Velocity(document.getElementById("loc_westfield"), { opacity: 1.0 }, { duration: 1000 });
        Velocity(document.getElementById("slide_indicator1"), { backgroundColor: '#000' }, { duration: 1000 });
        Velocity(document.getElementById("slide_indicator2"), { backgroundColor: '#FFF' }, { duration: 1000 });
        Velocity(document.getElementById("slide_indicator3"), { backgroundColor: '#FFF' }, { duration: 1000 });
        Velocity(document.getElementById("bg-tint"), { opacity: 0 }, { delay: 3000, duration: 1000 });
        next_slide = 2;
    } else if (slide == 2) {
        Velocity(document.getElementById("slide1"), { opacity: 0.0 }, { duration: 1000 });
        Velocity(document.getElementById("slide2"), { opacity: 1.0 }, { duration: 1000 });
        Velocity(document.getElementById("slide3"), { opacity: 0.0 }, { duration: 1000 });
        Velocity(document.getElementById("logo"), { opacity: 0.0 }, { duration: 1000 });
        Velocity(document.getElementById("loc_emporium"), { opacity: 1.0 }, { duration: 1000 });
        Velocity(document.getElementById("loc_westfield"), { opacity: 0.0 }, { duration: 1000 });
        Velocity(document.getElementById("slide_indicator1"), { backgroundColor: '#FFF' }, { duration: 1000 });
        Velocity(document.getElementById("slide_indicator2"), { backgroundColor: '#000' }, { duration: 1000 });
        Velocity(document.getElementById("slide_indicator3"), { backgroundColor: '#FFF' }, { duration: 1000 });
        next_slide = 3;
    } else if (slide == 3) {
        Velocity(document.getElementById("slide1"), { opacity: 0.0 }, { duration: 1000 });
        Velocity(document.getElementById("slide2"), { opacity: 0.0 }, { duration: 1000 });
        Velocity(document.getElementById("slide3"), { opacity: 1.0 }, { duration: 1000 });
        Velocity(document.getElementById("loc_emporium"), { opacity: 0.0 }, { duration: 1000 });
        Velocity(document.getElementById("loc_westfield"), { translateY: -75 }, { duration: 0 });
        Velocity(document.getElementById("loc_westfield"), { translateY: -75, opacity: 1.0 }, { duration: 1000 });
        Velocity(document.getElementById("slide_indicator1"), { backgroundColor: '#FFF' }, { duration: 1000 });
        Velocity(document.getElementById("slide_indicator2"), { backgroundColor: '#FFF' }, { duration: 1000 });
        Velocity(document.getElementById("slide_indicator3"), { backgroundColor: '#000' }, { duration: 1000 });
        Velocity(document.getElementById("loc_westfield"), { translateY: 0.0 }, { delay: 3000, duration: 1000 });
        // Velocity(document.getElementById("loc_emporium"), { opacity: 0.0 }, { duration: 1000 });
        // Velocity(document.getElementById("loc_westfield"), { opacity: 0.0 }, { duration: 1000 });
        next_slide = 1;
    }

}

window.addEventListener("load", startSlideShow, true);
