$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 50) {
            $('.header-main').addClass('fixed');
            $('.header-banner').addClass('fix');
        } else {
            $('.header-main').removeClass('fixed');
            $('.header-banner').removeClass('fix');
        }
    });


    $('.intro-slider').slick({});
    $('.slider-items').slick({
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true,
        nextArrow: document.querySelector('.slider-right'),
        prevArrow: document.querySelector('.slider-left')
    })


    $("[data-fancybox]").fancybox({
        infobar: false,
        arrows: false,
        toolbar: false,
        smallBtn: true
    })


    const modalCall = $("[data-call]");
    const modalClose = $("[data-close]");

    modalCall.on("click", function (event) {
        event.preventDefault();

        let $this = $(this);
        let modalId = $this.data('call');

        $(modalId).addClass('show');
        $("body").addClass('lock');

        setTimeout(function () {

            $(modalId).find(".call-content").css({
                transform: "rotateX(0)"
            });

        }, 200);

        worksSlider.slick('setPosition');
    });

    modalClose.on("click", function (event) {
        event.preventDefault();

        let $this = $(this);
        let modalParent = $this.parents('.call');

        modalParent.find(".call-content").css({
            transform: "rotateX(90deg)"
        });

        setTimeout(function () {
            modalParent.removeClass('show');
            $("body").removeClass('lock');
        }, 200);
    });

    modalCall.on("click", function (event) {
        event.preventDefault();

        let $this = $(this);
        let modalId = $this.data('call2');

        $(modalId).addClass('show');
        $("body").addClass('lock');

        setTimeout(function () {

            $(modalId).find(".call2-content").css({
                transform: "rotateX(0)"
            });

        }, 200);

        worksSlider.slick('setPosition');
    });

    modalClose.on("click", function (event) {
        event.preventDefault();

        let $this = $(this);
        let modalParent = $this.parents('.call2');

        modalParent.find(".call-content").css({
            transform: "rotateX(90deg)"
        });

        setTimeout(function () {
            modalParent.removeClass('show');
            $("body").removeClass('lock');
        }, 200);
    });

    modalCall.on("click", function (event) {
        event.preventDefault();

        let $this = $(this);
        let modalId = $this.data('call3');

        $(modalId).addClass('show');
        $("body").addClass('lock');

        setTimeout(function () {

            $(modalId).find(".call2-content").css({
                transform: "rotateX(0)"
            });

        }, 200);

        worksSlider.slick('setPosition');
    });

    modalClose.on("click", function (event) {
        event.preventDefault();

        let $this = $(this);
        let modalParent = $this.parents('.call3');

        modalParent.find(".call-content").css({
            transform: "rotateX(90deg)"
        });

        setTimeout(function () {
            modalParent.removeClass('show');
            $("body").removeClass('lock');
        }, 200);
    });


    $('.item-top').on('click', function () {
        $('.howdoit-item').removeClass('click');
        $(this).parent().addClass('click');
    });

    const btn_title = document.querySelectorAll('.item-top');
    const disc = document.querySelectorAll('.item-inner');

    for (let i = 0; i < btn_title.length; i++) {
        btn_title[i].addEventListener('click', fun_open);

        function fun_open(event) {
            for (let i = 0; i < btn_title.length; i++) {
                disc[i].classList.remove('display');
                if (btn_title[i] === event.currentTarget) {
                    disc[i].classList.toggle('display');
                }
            }
        }
    }


    // let btn = document.querySelector('#btn'),
    //     value1 = document.querySelector('#value1'),
    //     value2 = document.querySelector('#value1'),
    //     value3 = document.querySelector('#value1'),
    //     result = document.querySelector('#result');
    //     value1 = document.querySelector('#value1'),
    //     value2 = document.querySelector('#value2'),
    //     value3 = document.querySelector('#value3'),
    //     vt = 50,
    //     v = 12,
    //     s = 1;
    //
    // btn.onclick = function() {
    //     if (value1.value !== '' && value2.value !== '' && value3.value !== '') {
    //         result.innerHTML = (value1.value * vt) + (value2.value * v) + (value3.value * s);
    //     } else {
    //         result.innerHTML = ('0');
    //     }
    // }


    $('.studio-link').on('click', function () {
        // $('.studio-item').removeClass('active');
        // $(this).parent().addClass('active');
    });

    const link = document.querySelectorAll('.studio-link');
    const inner = document.querySelectorAll('.studio-links');

    for (let i = 0; i < link.length; i++) {
        link[i].addEventListener('click', open);

        function open(event) {
            for (let i = 0; i < link.length; i++) {
                inner[i].classList.remove('active');
                if (link[i] === event.currentTarget) {
                    inner[i].classList.toggle('active');
                }
            }
        }
    }


    $(".studio-inner__link").on("click", function () {
        $(this).toggleClass('foil');
    });

    $('.studio-inner__link').click(function () {
        $('.studio-block').toggleClass('back');
    });


    $('.palette-label').click(function () {
        const id = $(this).attr('data-tab'),
            content = $('.palette-tab[data-tab="' + id + '"]');

        $('.palette-label.view').removeClass('view');
        $(this).addClass('view');

        $('.palette-tab.view').removeClass('view');
        content.addClass('view');
    });


    $('.comfort-slider').slick({
        nextArrow: document.querySelector('.comfort-arrow__left'),
        prevArrow: document.querySelector('.comfort-arrow__right')
    })


    $('.team-label').click(function () {
        const id = $(this).attr('data-tab'),
            content = $('.team-tab[data-tab="' + id + '"]');

        $('.team-label.watch').removeClass('watch');
        $(this).addClass('Watch');

        $('.team-tab.watch').removeClass('watch');
        content.addClass('watch');
    });

    $('.news-inner').slick({
        prevArrow: $('.prev'),
        nextArrow: $('.next'),
        centerMode: true,
        variableWidth: true,
        // arrows: true,
        dots: true,
        infinite: false
    });



    const accordion = document.getElementsByClassName('blog-item');
    for (i = 0; i < accordion.length; i++) {
        accordion[i].addEventListener('click', function () {
            this.classList.toggle('shift')
        })
    }
});