$(function(){
	var $links = $('.batton');

	$links.on('click', function(e) {
		var $submenu = $(this).children('li');
		e.preventDefault();
		$submenu.show();
		$('li').not($submenu).hide();
	});

})

