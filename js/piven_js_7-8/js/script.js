$(function(){
	var $links = $('.batton');

	$links.on('click', function(e) {
		var $submenu = $(this).children('li');
		e.preventDefault();
		$submenu.show();
		$('li').not($submenu).hide();
	});

	
	// var $form = $('form');

	
	$('.firstname').hover(function() {
		$('.helpsF').addClass('show');
	},
	function() {
		$('.helpsF').removeClass('show');
	});

	$('.lastname').hover(function () {
		$('.helpsL').addClass('show');
	},
	function() {
		$('.helpsL').removeClass('show');
	});

	$('.address').hover(function () {
		$('.helpsA').addClass('show');
	},
	function() {
		$('.helpsA').removeClass('show');
	});

	$('.sh-h').click(function () {
		$('.helpsF').addClass('show');
		$('.helpsL').addClass('show');
		$('.helpsA').addClass('show');
	})
})