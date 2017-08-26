var photosAnimated;
function animateGallery() {
    photosAnimated = false;
    var gallery = document.getElementsByClassName("photos")[0].getElementsByTagName("img");
    
    for (var i = 0; i < gallery.length; i++) {
        Velocity(gallery[i], { scale: 0.0 }, { duration: 0 });
    }
    
    for (var i = 0; i < gallery.length; i++) {
        Velocity(gallery[i], { opacity: 0.6 }, { delay: i*50, duration: 300 });

        if (i < gallery.length-1)
            Velocity(gallery[i], { scale: 0.95 }, { delay: 50, duration: 300 });
        else
            Velocity(gallery[i], { scale: 0.95 }, { delay: 50, duration: 300, complete: function(){photosAnimated = true;} });
    }
}

function hoverPhoto(id) {
    // if (photosAnimated) {
        var photo = document.getElementsByClassName("photos")[0].getElementsByTagName("img")[id];
        Velocity(photo, { scale: 1 }, { duration: 200 });
        Velocity(photo, { opacity: 1 }, { duration: 300 });
    // }
}
function leavePhoto(id) {
    // if (photosAnimated) {
        var photo = document.getElementsByClassName("photos")[0].getElementsByTagName("img")[id];
        Velocity(photo, { scale: 0.95 }, { duration: 200 });
        Velocity(photo, { opacity: 0.6 }, { duration: 300 });
    // }
}

function openPhoto(catagory,id) {
    var pswpElement = document.querySelectorAll('.pswp')[0];

    var items;
    if (catagory == 1) {
      items = [
          {
              src: 'images/gallery/food_display3.jpg',
              w: 5383,
              h: 2000
          },
          {
              src: 'images/gallery/lamb_roganjosh.jpg',
              w: 3000,
              h: 2000
          },
          {
              src: 'images/gallery/lamb_korma.jpg',
              w: 3000,
              h: 2000
          },
          {
              src: 'images/gallery/butter_chicken.jpg',
              w: 3000,
              h: 2000
          },
          {
              src: 'images/gallery/beef_curry.jpg',
              w: 3000,
              h: 2000
          },
          {
              src: 'images/gallery/beef_vindaloo.jpg',
              w: 3000,
              h: 2000
          },
          {
              src: 'images/gallery/chicken_curry.jpg',
              w: 3000,
              h: 2000
          },
          {
              src: 'images/gallery/chicken_drumettes.jpg',
              w: 3000,
              h: 2000
          },
          {
              src: 'images/gallery/chicken_madras.jpg',
              w: 3000,
              h: 2000
          },
          {
              src: 'images/gallery/chicken_tikka_masala.jpg',
              w: 3000,
              h: 2000
          },
          {
              src: 'images/gallery/chickpeas_masala.jpg',
              w: 3000,
              h: 2000
          },
          {
              src: 'images/gallery/curries.jpg',
              w: 3000,
              h: 2000
          },
          {
              src: 'images/gallery/vegetable_korma.jpg',
              w: 3000,
              h: 2000
          },
          {
              src: 'images/gallery/eggplant_masala.jpg',
              w: 3000,
              h: 2000
          },
          {
              src: 'images/gallery/dal_lentil.jpg',
              w: 3000,
              h: 2000
          },
          {
              src: 'images/gallery/spinach_aloo.jpg',
              w: 3000,
              h: 2000
          },
          {
              src: 'images/gallery/food_display2.jpg',
              w: 3806,
              h: 2000
          },
          {
              src: 'images/gallery/pappadums.jpg',
              w: 3000,
              h: 2000
          },
          {
              src: 'images/gallery/mango_lassi.jpg',
              w: 3000,
              h: 2000
          }
      ];
    } else if (catagory == 2) {
      items = [
          {
              src: 'images/gallery/emporium1.jpg',
              w: 3000,
              h: 2000
          },
          {
              src: 'images/gallery/emporium2.jpg',
              w: 3000,
              h: 2000
          },
          {
              src: 'images/gallery/emporium3.jpg',
              w: 2000,
              h: 3000
          },
          {
              src: 'images/gallery/emporium4.jpg',
              w: 3000,
              h: 2000
          },
          {
              src: 'images/gallery/emporium5.jpg',
              w: 3000,
              h: 2000
          },
          {
              src: 'images/gallery/logo.jpg',
              w: 3034,
              h: 2000
          }
      ];
    } else if (catagory == 3) {
      items = [
          {
              src: 'images/gallery/westfield1.jpg',
              w: 3000,
              h: 2000
          },
          {
              src: 'images/gallery/logo2.jpg',
              w: 3000,
              h: 2000
          },
          {
              src: 'images/gallery/logo3.jpg',
              w: 3000,
              h: 1467
          },
          {
              src: 'images/gallery/pos.jpg',
              w: 3000,
              h: 2000
          }
      ];
    }
    
    // define options (if needed)
    var options = {
        index: id,
        history: false,
        focus: false,
        mainClass: 'pswp--minimal--dark',
        barSize: { top: 0, bottom: 0 },
        timeToIdle: 2000,
        timeToIdleOutside: 2000,
        bgOpacity: 0.9,
        showHideOpacity: true,
        showAnimationDuration: 1500,
        hideAnimationDuration: 500,
        captionEl: false,
        fullscreenEl: true,
        shareEl: false,
        zoomEl: true,
        counterEl: false,
        arrowEl: true,
        preloaderEl: true,
        loop: true
    };
    
    var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
    gallery.init();
};

window.addEventListener("load", animateGallery, true);
