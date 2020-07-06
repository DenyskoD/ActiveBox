$(function() {

    // fixed header

    let header = $("#header");
    let intro = $("#intro");
    let introHeight = intro.innerHeight();
    let scrollPos = $(window).scrollTop();
    let nav = $("#nav");
    let navToggle = $("#navToggle");


    checkScroll(scrollPos, introHeight);

    $(window).on("scroll resize", function() {
        introHeight = intro.innerHeight();
        scrollPos = $(this).scrollTop();

        checkScroll(scrollPos, introHeight);
       
    });

    function checkScroll(scrollPos, introHeight) {
        if(scrollPos > introHeight) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }

    // smooth scroll

    $("[data-scroll]").on("click",function(event) {
        event.preventDefault();

        let elementID = $(this).data("scroll");
        let elementsOffset = $(elementID).offset().top;

        nav.removeClass("show");

        $("html, body").animate({
            scrollTop: elementsOffset - 70
        }, 700);

    });


    // nav toggle

    navToggle.on("click", function(event) {
        event.preventDefault();

        nav.toggleClass("show");
    });

    // comments https://kenwheeler.github.io/slick/

    let slider = $("#commentsSlider");

    slider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        dots: true
      });

});