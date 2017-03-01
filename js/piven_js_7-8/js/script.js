$(function(){
	var $links = $('.batton');

	$links.on('click', function(e) {
		var $submenu = $(this).children('li');
		e.preventDefault();
		$submenu.toggle();
		$('li').not($submenu).hide();
	});

})

