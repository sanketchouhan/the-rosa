$(document).ready(function () {
    if ($(window).scrollTop() > 0) {
        navbarToTop();
    }

    $(window).scroll(function () {
        if ($(window).scrollTop() > 0) {
            navbarToTop();
        } else {
            $("header").css({
                "background-image": "linear-gradient(to bottom , rgba(0,0,0,.5),transparent)"
            });
            $(".nav-link").css({
                "color": "#FFF",
            });
            $(".active").css({
                "background-color": "#FFF",
            });
        }
    })

    function navbarToTop() {
        $("header").css({
            "background-image": "linear-gradient(to bottom , #FFF,#FFF)",
        });
        $(".nav-link").css({
            "color": "#000",
        });
        $(".active").css({
            "background-color": "#000",
        });
    }

    // select element function
    const selectElement = function (element) {
        return document.querySelector(element);
    }

    let menuToggler = selectElement('.menu-toggle');
    let body = selectElement('body');

    menuToggler.addEventListener('click', function () {
        body.classList.toggle('open');
    });

    // scrollreveal
    window.sr = ScrollReveal();
    sr.reveal('.animate-left', {
        origin: 'left',
        duration: 1000,
        distance: '25rem',
        delay: 300
    });
    sr.reveal('.animate-right', {
        origin: 'right',
        duration: 1000,
        distance: '25rem',
        delay: 600
    });
    sr.reveal('.animate-top', {
        origin: 'top',
        duration: 1000,
        distance: '25rem',
        delay: 600
    });
    sr.reveal('.animate-bottom', {
        origin: 'bottom',
        duration: 1000,
        distance: '25rem',
        delay: 600
    });

});




