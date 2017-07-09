function init() {
    /*
    // Show/Hide diagram details depending on where the mouse is
    document.body.addEventListener("mouseout", function() {
        // document.getElementById('bg-tint').style.background = "rgb(225, 218, 197)";
        // document.getElementById('bg-tint').style.opacity = 0.5;

        Velocity(document.getElementById("bg-tint"), { opacity: 0.5 }, { duration: 1000 });
        Velocity(document.getElementById("logo"), { opacity: 0.9 }, { duration: 1000 });
        Velocity(document.getElementById("locations"), { opacity: 0.0 }, { duration: 1000 });
        Velocity(document.getElementById("nav-menu"), { opacity: 0.0 }, { duration: 1000 });
    }, false);
    document.body.addEventListener("mouseover", function() {
        // document.getElementById('bg-tint').style.background = "rgb(207, 193, 149)";
        // document.getElementById('bg-tint').style.opacity = 0.7;

        Velocity(document.getElementById("bg-tint"), { opacity: 0.7 }, { duration: 1500 });
        Velocity(document.getElementById("logo"), { opacity: 1.0 }, { duration: 1000 });
        Velocity(document.getElementById("locations"), { opacity: 1.0 }, { duration: 1500 });
        Velocity(document.getElementById("nav-menu"), { opacity: 1.0 }, { duration: 1500 });
    }, false);
    */

    document.body.addEventListener("mousemove", function(event) {
        mousemove(event);
    });

        
    //TODO Add delay
    Velocity(document.getElementById("bg-tint"), { opacity: 0.7 }, { duration: 5000 });
    Velocity(document.getElementById("logo"), { opacity: 1.0 }, { delay: 2400, duration: 2200 });
    Velocity(document.getElementById("locations"), { translateY: -100}, { duration: 0 });
    Velocity(document.getElementById("locations"), { translateY: 0, opacity: 1.0 }, { delay: 3100, duration: 1500 });
    Velocity(document.getElementById("nav-menu"), { translateX: "-50%", translateY: 50 }, { duration: 0 });
    Velocity(document.getElementById("nav-menu"), { translateX: "-50%", translateY: 0, opacity: 1.0 }, { delay: 3100, duration: 1500 });
    Velocity(document.getElementById("bg"), { scaleX: 10, scaleY: 10, translateY: -220 }, { duration: 0 });
    Velocity(document.getElementById("bg"), { scaleX: 1.1, scaleY: 1.1 , translateY: 0}, { duration: 3000 });
}

function mousemove(e) {
    // var img = new Image;
    // img.src = document.getElementById("bg").css('background-image').replace(/url\(|\)$/ig, "");
    // var bgImgWidth = img.width;
    // var bgImgHeight = img.height;

    // BG
    var mag = 20;  // Magnitude of change
    var xpos = (window.innerWidth/(mag*2)) - e.clientX/mag;
    //var xpos = ((window.innerWidth/(mag*2)) - (100)) - e.clientX/mag;
    var ypos = (window.innerHeight/(mag*2)) - e.clientY/mag;

    // Velocity(document.getElementById("bg"), { backgroundOriginX: xpos, backgroundOriginY: ypos }, { duration: 0 });
    // document.getElementById("bg").style.backgroundPosition = xpos.toString() + "px " + ypos.toString() + "px";

    // Logo element
    // mag = 15;  // Magnitude of change
    // xpos = ((window.innerWidth/(mag*2)) - (document.getElementById("logo").width/2)) - e.clientX/mag;
    // ypos = ((window.innerHeight/(mag*2)) - (document.getElementById("logo").height/2)) - e.clientY/mag;
    // Velocity(document.getElementById("logo"), { translateX: xpos, translateY: ypos }, { duration: 0 });

    // Locations element
    // mag = 2;
    // // xpos = ((window.innerWidth/(mag*2)) - (document.getElementById("locations").width/2) - document.getElementById("locations").getBoundingClientRect().top) - e.clientX/mag;
    // // ypos = ((window.innerHeight/(mag*2)) - (document.getElementById("locations").height/2)  - document.getElementById("locations").getBoundingClientRect().left) - e.clientY/mag;
    // xpos = ((window.innerWidth/(mag*2)) - (document.getElementById("locations").width/2) - (document.getElementById("locations").getBoundingClientRect().top/2)) - e.clientX/mag;
    // ypos = ((window.innerHeight/(mag*2)) - (document.getElementById("locations").height/2) - (document.getElementById("locations").getBoundingClientRect().left/2)) - e.clientY/mag;
    // Velocity(document.getElementById("locations"), { translateX: xpos, translateY: ypos }, { duration: 0 });

    // Navigation menu element
    // mag = 2;
    // xpos = ((window.innerWidth/(mag*2)) - (document.getElementById("nav-menu").width/2)) - e.clientX/mag;
    // ypos = ((window.innerHeight/(mag*2)) - (document.getElementById("nav-menu").height/2)) - e.clientY/mag;
    // Velocity(document.getElementById("nav-menu"), { translateX: xpos, translateY: ypos }, { duration: 0 });
    


    // $.Velocity.RegisterEffect("callout.pulse", {
    //     defaultDuration: 900,
    //     calls: [
    //         [ { scaleX: 1.1 }, 0.50 ],
    //         [ { scaleX: 1 }, 0.50 ]
    //     ]
    // })
}

window.onload = init;
// window.onmousemove = mousemove;
// window.onresize = resizePage;
