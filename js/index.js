(function () {
    'use strict';
    $(() => {
        $(window).on('scroll', () => {
            if ($(document).scrollTop() > 50) {
                $('header').addClass("scrolled");
            } else {
                $('header').removeClass("scrolled");
            }
        });
        autoWriting();
    })
}) ();

function slowScroll(where) {
    $('html, body').animate({
        scrollTop: $(where).offset().top}, 1000);
}

function autoWriting() {
    let options = {
        strings: ['Étudiant', 'Développeur', 'Auto-entrepreneur'],
        typeSpeed: 70,
        backSpeed: 25,
        backDelay: 800,
        startDelay: 1000,
        showCursor: false,
        loop: true
    };
    new Typed('#autoText', options);
}

function displayLabel(label, input) {
    if (input.value) {
        $(label)
            .animate({
                opacity: '1'
            },250);
    } else {
        $(label)
            .animate({
                opacity: '0'
            },250);
    }
}