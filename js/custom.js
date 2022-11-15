/*==================================================================================================
//////////////////////////////////////////    vendors    \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
==================================================================================================*/
/* ============================== wow js */
$(function() {
    var wow = new WOW({
        offset: 100,
        mobile: true
    });
    wow.init();
}); /* ============================== aos js */
$(function() {
    AOS.init();
    AOS.init({
        // disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
        // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
        // offset: 500, // offset (in px) from the original trigger point
        // delay: 0, // values from 0 to 3000, with step 50ms
        duration: 1000, // values from 0 to 3000, with step 50ms
        easing: 'ease', // default easing for AOS animations
        once: true, // whether animation should happen only once - while scrolling down
        anchorPlacement: 'bottom-center'

    });
});
/*==================================================================================================
//////////////////////////////////////    absolute element    \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
==================================================================================================*/
/* ============================== scroll top */
$(function() {
    var scrollButton = $('.scroll-top');
    $(window).scroll(function() {
        var sc = $(this).scrollTop();
        if (sc > 1500) {
            scrollButton.fadeIn();
        } else {
            scrollButton.fadeOut();
        }
    });
    scrollButton.click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 1000)
    });
});
/* ============================== nicescroll
$(function() {
    $("body").niceScroll({
        cursorcolor: "#ff652f",
        background: "rgba(0,0,0,0.2)",
        cursorwidth: "10px",
        cursorminheight: 100,
        cursorborder: "0px solid #fff",
        cursorborderradius: "5px",
        hidecursordelay: 400,
        zindex: "1000"
    });
    $("#contact textarea").niceScroll({
        cursorcolor: "#ff652f",
        background: "rgba(0,0,0,0.2)",
        cursorwidth: "10px",
        cursorborder: "none",
        cursorborderradius: "3px",
    });
});
*/
/*==================================================================================================
////////////////////////////////////////////    navbar    \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
==================================================================================================*/
/* ============================== navbar sticky + active link + home link */
$(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 200) {
            $("#navbar").addClass('sticky');
            // $("#navbar").css('display','flex');
        } else {
            $("#navbar").removeClass('sticky');
        }
    });
    /* ============================== active */
    // $(".navbar li").click(function() {
    //     $(this).addClass("active").siblings().removeClass("active");
    // });
    /* ============================== home link */
    $("#navbar .a-home").click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    });
});
/* ============================== smoth scroll */
$(function() {
    var scroll = new SmoothScroll('#navbar a[href*="#"]', {
        speed: 1000,
        speedAsDuration: true
    });
});

/* ============================== scrollspyl */
$(function() {
    $(window).scroll(function() {
        var sc = $(this).scrollTop(),
            header = $("#header"),
            about = $("#about"),
            skills = $("#skills"),
            services = $("#services"),
            portfolio = $("#portfolio"),
            testimonials = $("#testimonials"),
            blog = $("#blog"),
            contact = $("#contact");

        if (sc + 100 >= header.offset().top) {
            $("#navbar .a-home").addClass("active").siblings().removeClass("active");
        }
        if (sc + 100 > about.offset().top) {
            $("#navbar .a-about").addClass("active").siblings().removeClass("active");
        }
        if (sc + 100 > skills.offset().top) {
            $("#navbar .a-skills").addClass("active").siblings().removeClass("active");
        }
        if (sc + 100 > services.offset().top) {
            $("#navbar .a-services").addClass("active").siblings().removeClass("active");
        }
        if (sc + 100 > portfolio.offset().top) {
            $("#navbar .a-portfolio").addClass("active").siblings().removeClass("active");
        }
        if (sc + 100 > testimonials.offset().top) {
            $("#navbar .a-testimonials").addClass("active").siblings().removeClass("active");
        }
        if (sc + 100 > blog.offset().top) {
            $("#navbar .a-blog").addClass("active").siblings().removeClass("active");
        }
        if (sc + 100 > contact.offset().top) {
            $("#navbar .a-contact").addClass("active").siblings().removeClass("active");
        }
    });
});
$(function() {
    /* toggleButton */
    $("nav.navbar .wrap .toggleButton").click(function () {
        $("nav.navbar .links").slideToggle();
        $(this).toggleClass("clicked");
    });
    /* drop-down-Menu */
    $("nav.navbar .wrap .my-dropdown").click(function () {
        $("nav.navbar .links .my-dropdown-menu").slideToggle();
    });
});
/*==================================================================================================
///////////////////////////////////////////    header    \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
==================================================================================================*/
$(function() {
    $('.carousel').carousel({
        interval: 200000
    })
})
$(function() {
    $('#hire-button').click(function() {
        $('html, body').animate({
            scrollTop: $('#contact').offset().top
        }, 1000);
    });
    $('#project-button').click(function() {
        $('html, body').animate({
            scrollTop: $('#portfolio').offset().top
        }, 1000)
    });
});

/* ============================== owlCarousel */
$(function() {
    $("#header .owl-carousel").owlCarousel({
        items: 1,
        margin: 0,
        loop: true,
        autoplay: true,
        autoplayTimeout: 500,
        mouseDrag: false,
        nav: true,
        dots: true,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut'
    });
});
/*==================================================================================================
////////////////////////////////////////////    skills    \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
==================================================================================================*/
$(function() {
    /* ============================== skillsBars */
    $(window).scroll(function() {
        var sc = $(window).scrollTop();
        if (sc + 50 > $("#skills").offset().top) {
            $("#skills").addClass('scrolled');
            if (!($('#skills .progress-bar span').hasClass('timer1'))) {
                $('#skills .progress-bar span').addClass('timer1');
                $('.timer1').countTo({
                    from: 0,
                    speed: 3000,
                    refreshInterval: 40,
                    formatter: function(value, options) {
                        value = value.toFixed(options.decimals);
                        value = value.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
                        return value;
                    }
                })
            }
        }
    })
})
/*==================================================================================================
//////////////////////////////////////////    portfolio    \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
==================================================================================================*/
/* ============================== see */
$(function() {
    $("#portfolio .see-more").click(function() {
        $("#portfolio .more").addClass('more-show').removeClass('more-hide')
        // $("#portfolio .more").delay(30000).removeClass('more-show');
        $(this).siblings().fadeIn(0);
        $(this).fadeOut(0);
    })
    $("#portfolio .see-less").click(function() {
        $("#portfolio .more").addClass('more-hide').removeClass('more-show')
        // $("#portfolio .more").delay(300000).removeClass('more-hide');
        $(this).siblings().fadeIn(0);
        $(this).fadeOut(0);
    })
})
/* ============================== mixitup */
$(function() {
    var mixer = mixitup('#gallery');
    /* ============================== active */
    $(".portfolio .filters div").click(function() {
        $(this).addClass("active").siblings().removeClass("active");
    });
});
/* ============================== magnificPopup */
$(function() {
    $('#portfolio .img').magnificPopup({
        type: 'image',
        mainClass: 'mfp-with-zoom',
        tLoading: 'loading............',
        closeOnContentClick: true,
        closeBtnInside: false,
        image: {
            markup: '<div class="mfp-figure">' +
                '<div class="mfp-close"></div>' +
                '<div class="mfp-img"></div>' +
                '<div class="mfp-bottom-bar">' +
                '<div class="mfp-title"></div>' +
                '<div class="mfp-counter"></div>' +
                '</div>' +
                '</div>',
            verticalFit: true,
            titleSrc: 'title',
            tError: '<a href="%url%">The image</a> could not be loaded.'
        },
        gallery: {
            enabled: true
        }
    });
});
/* =================================================================================================
///////////////////////////////////////////    experience    \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
==================================================================================================*/
$(function() {
    /* ============================== countTo */
    $(window).scroll(function() {
        var sc = $(window).scrollTop();
        if (sc + 80 > $("#experience").offset().top) {
            if (!($("#experience .row div span").hasClass('timer2'))) {
                $("#experience .row div span").addClass('timer2');
                $('.timer2').countTo({
                    from: 0,
                    refreshInterval: 22,
                    speed: 3000,
                    formatter: function(value, options) {
                        value = value.toFixed(options.decimals);
                        value = value.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
                        return value;
                    }
                });
            }
        }
    });
});
/*==================================================================================================
////////////////////////////////////////    testimonials    \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
==================================================================================================*/
/* ============================== owlCarousel */
$(function() {
    $("#testimonials .owl-carousel").owlCarousel({
        items: 1,
        margin: 10,
        loop: true,
        nav: true,
        dots: false,
        autoplay: true,
        smartSpeed: 5000,
        autoplaySpeed: 1000,
        dragEndSpeed: 1000,
        navSpeed: 1000,
        autoplayHoverPause: false,
        responsive : {
        0 : {
            items: 1
        },
        1100 : {
            items: 2
        },
        1600 : {
            items: 3
        }
}
    });
})
/*==================================================================================================
//////////////////////////////////////////    contact    \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
==================================================================================================*/
/* ============================== fly button */
$(function() {
    ;
    $('#contact .fly-button button').click(function() {
        $(this).addClass('clicked');
        // $(this).toggleClass('clicked');
        $('button p').text(function(i, text) {
            return text === "Sent!" ? "Send" : "Sent!";
        });
        // $("#contact input[type='submit']").fadeIn();
    });
})
