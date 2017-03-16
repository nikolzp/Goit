'use strict;'

$(function(){

	let html = $('#tests').html();

	let parseQuestion = JSON.parse(localStorage.getItem('ques'));

	let content = tmpl(html, {data: parseQuestion});
	
	$('body').append(content);

	$('.resultation').on('click', function(e) {
		e.preventDefault();
		if($($('input').get(1)).prop('checked') || $($('input').get(2)).prop('checked') || $($('input').get(3)).prop('checked') || 
			$($('input').get(5)).prop('checked') || $($('input').get(6)).prop('checked') || $($('input').get(7)).prop('checked')) {
			alert('Вы провалили тест');
				} else {
						if ($($('input').get(0)).prop('checked') && $($('input').get(4)).prop('checked') && $($('input').get(8)).prop('checked')) {
						alert('Вы прошли тест');
					} else {
						alert('Вы провалили тест');
					}
				}
		for (let i = 0; $('input').length > i; i++){
			$($('input').get([i])).prop('checked', false);
		};

	});

}); 
