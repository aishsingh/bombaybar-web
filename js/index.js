var next_slide;
var slide_timer;
var slide_interval;
function startSlideShow() {
    resizeSlideShow();

    Velocity(document.getElementById("bg-tint"), { opacity: 1.0 }, { duration: 1000 });

    // Locations
    var locations = document.getElementById("locations").getElementsByTagName("li");
    for (var i = 0; i < locations.length; i++)
        Velocity(locations[i], { translateX: "50px" }, { duration: 0 });
    for (var i = 0; i < locations.length; i++)
        Velocity(locations[i], { opacity: 1, translateX: "0px" }, { delay: (1000)+(i*200), duration: 1000 });

    // Indicator
    var indicator = document.getElementsByClassName("indicators")[0].getElementsByTagName("li");
    for (var i = 0; i < indicator.length; i++)
        Velocity(indicator[i], { translateY: "20px" }, { duration: 0 });
    for (var i = 0; i < indicator.length; i++)
        Velocity(indicator[i], { opacity: 1, translateY: "0px" }, { delay: (1400)+(indicator.length-1-i)*100, duration: 500 });

    next_slide = 1;
    slide_interval = 5000;
    changeSlide(next_slide);
    slide_timer = setInterval(function(){changeSlide(next_slide)}, slide_interval);
}

function changeSlide(slide) {
    if (slide == 1) {
        Velocity(document.getElementById("logo"), { translateX: '-50%', translateY: '-50%' }, { duration: 0 });
        Velocity(document.getElementById("logo"), { opacity: 1.0, translateX: '-50%' }, { duration: 1000 });
        Velocity(document.getElementById("slide1"), { opacity: 1.0 }, { duration: 1000 });
        Velocity(document.getElementById("slide2"), { opacity: 0.0 }, { duration: 1000 });
        Velocity(document.getElementById("slide3"), { opacity: 0.0 }, { duration: 1000 });
        Velocity(document.getElementById("slide_indicator1"), { backgroundColor: '#000' }, { duration: 1000 });
        Velocity(document.getElementById("slide_indicator2"), { backgroundColor: '#FFF' }, { duration: 1000 });
        Velocity(document.getElementById("slide_indicator3"), { backgroundColor: '#FFF' }, { duration: 1000 });

        Velocity(document.getElementById("loc_emporium"), { opacity: 1.0 }, { duration: 1000 });
        Velocity(document.getElementById("loc_westfield"), { opacity: 1.0 }, { duration: 1000 });
        next_slide = 2;
    } else if (slide == 2) {
        if (parseFloat(document.getElementById("logo").style.opacity) > 0) {
            Velocity(document.getElementById("logo"), { opacity: 0.0 }, { duration: 500 });
            Velocity(document.getElementById("slide1"), { opacity: 0.0 }, { delay: 500, duration: 1000 });
            Velocity(document.getElementById("slide2"), { opacity: 1.0 }, { delay: 500, duration: 1000 });
            Velocity(document.getElementById("slide3"), { opacity: 0.0 }, { delay: 500, duration: 1000 });
            Velocity(document.getElementById("slide_indicator1"), { backgroundColor: '#FFF' }, { delay: 500, duration: 1000 });
            Velocity(document.getElementById("slide_indicator2"), { backgroundColor: '#000' }, { delay: 500, duration: 1000 });
            Velocity(document.getElementById("slide_indicator3"), { backgroundColor: '#FFF' }, { delay: 500, duration: 1000 });
        }
        else {
            Velocity(document.getElementById("slide1"), { opacity: 0.0 }, { duration: 1000 });
            Velocity(document.getElementById("slide2"), { opacity: 1.0 }, { duration: 1000 });
            Velocity(document.getElementById("slide3"), { opacity: 0.0 }, { duration: 1000 });
            Velocity(document.getElementById("slide_indicator1"), { backgroundColor: '#FFF' }, { duration: 1000 });
            Velocity(document.getElementById("slide_indicator2"), { backgroundColor: '#000' }, { duration: 1000 });
            Velocity(document.getElementById("slide_indicator3"), { backgroundColor: '#FFF' }, { duration: 1000 });
        }

        Velocity(document.getElementById("loc_emporium"), { opacity: 1.0 }, { duration: 1000 });
        Velocity(document.getElementById("loc_westfield"), { opacity: 0.2 }, { duration: 1000 });
        next_slide = 3;
    } else if (slide == 3) {
        if (parseFloat(document.getElementById("logo").style.opacity) > 0) {
            Velocity(document.getElementById("logo"), { opacity: 0.0 }, { duration: 500 });
            Velocity(document.getElementById("slide1"), { opacity: 0.0 }, { delay: 500, duration: 1000 });
            Velocity(document.getElementById("slide2"), { opacity: 0.0 }, { delay: 500, duration: 1000 });
            Velocity(document.getElementById("slide3"), { opacity: 1.0 }, { delay: 500, duration: 1000 });
            Velocity(document.getElementById("slide_indicator1"), { backgroundColor: '#FFF' }, { delay: 500, duration: 1000 });
            Velocity(document.getElementById("slide_indicator2"), { backgroundColor: '#FFF' }, { delay: 500, duration: 1000 });
            Velocity(document.getElementById("slide_indicator3"), { backgroundColor: '#000' }, { delay: 500, duration: 1000 });
        }
        else {
            Velocity(document.getElementById("slide1"), { opacity: 0.0 }, { duration: 1000 });
            Velocity(document.getElementById("slide2"), { opacity: 0.0 }, { duration: 1000 });
            Velocity(document.getElementById("slide3"), { opacity: 1.0 }, { duration: 1000 });
            Velocity(document.getElementById("slide_indicator1"), { backgroundColor: '#FFF' }, { duration: 1000 });
            Velocity(document.getElementById("slide_indicator2"), { backgroundColor: '#FFF' }, { duration: 1000 });
            Velocity(document.getElementById("slide_indicator3"), { backgroundColor: '#000' }, { duration: 1000 });
        }


        Velocity(document.getElementById("loc_emporium"), { opacity: 0.2 }, { duration: 1000 });
        Velocity(document.getElementById("loc_westfield"), { opacity: 1.0 }, { duration: 1000 });
        next_slide = 1;
    }

}

function resetToSlide(slide) {
    changeSlide(slide);
    clearInterval(slide_timer);
    slide_timer = null;
    slide_timer = setInterval(function(){changeSlide(next_slide)}, slide_interval);
}

function resizeSlideShow() {
    if (width < 500) {
        document.getElementById("logo").style.width = "80%";
        document.getElementById("slide1").style.backgroundImage = "url('images/slides/small/tabla.jpg')";
        document.getElementById("slide2").style.backgroundImage = "url('images/slides/small/emporium.jpg')";
        document.getElementById("slide3").style.backgroundImage = "url('images/slides/small/westfield.jpg')";
    } else if (width < 1100) {
        if (height <= 400) {
            document.getElementById("logo").style.width = "45%";
        } else {
            document.getElementById("logo").style.width = "65%";
        }
        document.getElementById("slide1").style.backgroundImage = "url('images/slides/tabla.jpg')";
        document.getElementById("slide2").style.backgroundImage = "url('images/slides/emporium.jpg')";
        document.getElementById("slide3").style.backgroundImage = "url('images/slides/westfield.jpg')";
    } else {
        document.getElementById("logo").style.width = "42%";
        document.getElementById("slide1").style.backgroundImage = "url('images/slides/tabla.jpg')";
        document.getElementById("slide2").style.backgroundImage = "url('images/slides/emporium.jpg')";
        document.getElementById("slide3").style.backgroundImage = "url('images/slides/westfield.jpg')";
    }

}

window.addEventListener("load", startSlideShow, true);
window.addEventListener("resize", resizeSlideShow, true);
