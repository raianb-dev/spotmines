$(document).ready(function () {
    $("#news-slider").owlCarousel({
        items:3,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [980, 2],
        itemsMobile: [600, 1],
        navigation: true,
        navigationText: ["", ""],
        pagination: true,
        autoPlay: true
    });

});

$(document).ready(function () {
    $("#news-slider-01").owlCarousel({
        items: 6,
        itemsDesktop: [1199, 6],
        itemsDesktopSmall: [980, 2],
        itemsMobile: [600, 2],
        navigation: true,
        navigationText: ["", ""],
        pagination: true,
        autoPlay: true
    });

});