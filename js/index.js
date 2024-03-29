(function() {
	'use strict';
	$(() => {
		$(window).on('scroll', () => {
			if ($(document).scrollTop() > 50) {
				$('header').addClass('scrolled');
			} else {
				$('header').removeClass('scrolled');
			}
		});
		autoWriting();
		forms('#form_message', '#fail_message');
		displayProjects();
		preloadInit();
		setFooter();
	});
})();

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

function slowScroll(where) {
	let location = $(where).offset().top - $('header').height();
	$('html, body').animate({
		scrollTop: location
	}, 1000);
}

function displayLabel(label, input) {
	if (input.value) {
		$(label)
			.animate({
				opacity: '1'
			}, 250);
	} else {
		$(label)
			.animate({
				opacity: '0'
			}, 250);
	}
}

function setFooter() {
	$('footer').append(
		$('<p>')
			.html(`Aurélien VILMINOT | Copyright © ${new Date().getFullYear()} vilminot.fr - Tous droits réservés`)
	);
}
