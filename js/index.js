var next_slide;
var slide_timer;
var slide_interval;

var loaded_slide1;
var loaded_slide2;
var loaded_slide3;
var slides_started;

function waitForSlideLoad(src, fn_onload) {
    var url = src.match(/\((.*?)\)/)[1].replace(/('|")/g,'');

    var img = new Image();
    img.onload = fn_onload;
    img.src = url;
    if (img.complete) img.onload();
}

function loadSlideShow() {
    loaded_slide1 = false;
    loaded_slide2 = false;
    loaded_slide3 = false;
    slides_started = false;
    resizeSlideShow();

    waitForSlideLoad(document.getElementById("slide1").style.backgroundImage, function() {
        loaded_slide1 = true;
        if (loaded_slide1 && loaded_slide2 && loaded_slide3 && !slides_started) startSlideShow();
    });
    waitForSlideLoad(document.getElementById("slide2").style.backgroundImage, function() {
        loaded_slide2 = true;
        if (loaded_slide1 && loaded_slide2 && loaded_slide3 && !slides_started) startSlideShow();
    });
    waitForSlideLoad(document.getElementById("slide3").style.backgroundImage, function() {
        loaded_slide3 = true;
        if (loaded_slide1 && loaded_slide2 && loaded_slide3 && !slides_started) startSlideShow();
    });


    // Touch recognition
    var hammertime = new Hammer(document.getElementsByClassName("slides")[0]);
    hammertime.on('swipeleft', function(ev) {
        resetToSlide(next_slide);
        // console.log(ev);
    });
    hammertime.on('swiperight', function(ev) {
        // Apparently JS % operator is not a modulo func but a remainder func so its more simple to just hardcode
        // resetToSlide(((next_slide-3)%(3))+1);
        // console.log(ev);
        if (next_slide == 1)
            resetToSlide(2);
        else if (next_slide == 2)
            resetToSlide(3);
        else if (next_slide == 3)
            resetToSlide(1);

    });
}

function startSlideShow() {
    slides_started = true;
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
    if (width <= 500) {
        document.getElementById("logo").style.width = "80%";
        document.getElementById("slide1").style.backgroundImage = "url('images/slides/small/tabla.jpg')";
        document.getElementById("slide2").style.backgroundImage = "url('images/slides/small/emporium.jpg')";
        document.getElementById("slide3").style.backgroundImage = "url('images/slides/small/westfield.jpg')";
    } else if (width <= 1100) {
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

window.addEventListener("load", loadSlideShow, true);
window.addEventListener("resize", resizeSlideShow, true);
