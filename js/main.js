(function ($) {
	'use strict'
	
	
	$('.menu').click(function () {

		$('ul.links').toggleClass('active');
	});

	$('.slides').slick({
		fade: true,
		autoplay: true,
		autoplaySpeed: 2000,
		arrows: false,
		dots: true

	});




})(jQuery);
