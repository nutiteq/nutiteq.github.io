$(document).ready(function(){

	var accordion = $('.js-accordion');
	var accordionTrigger = $('.js-accordion-trigger');
	var accordionBody = $('.js-accordion-body');
	var accordionClose = $('.js-accordion-close');

	accordionBody.hide();

	accordionTrigger.on('click', function(e){
		e.preventDefault();
		$(this).next(accordionBody).slideToggle();
		$(this).closest(accordion).toggleClass('m-active');

	});

	accordionClose.on('click', function(e){
		e.preventDefault();
		$(this).closest(accordionBody).slideToggle();
		$(this).closest(accordion).toggleClass('m-active');

	});

});