// var current_slide;
// function startSlideShow() {
//     current_slide = 1;
function openPhoto(id) {
    var pswpElement = document.querySelectorAll('.pswp')[0];

    // build items array
    var items = [
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
            src: 'images/gallery/westfield1.jpg',
            w: 3000,
            h: 2000
        }
    ];
    
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
        fullscreenEl: false,
        shareEl: false,
        zoomEl: true,
        counterEl: true,
        arrowEl: true,
        preloaderEl: true,
        loop: true
    };
    
    var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
    gallery.init();
};

// window.addEventListener("load", openPhotoSwipe, true);
