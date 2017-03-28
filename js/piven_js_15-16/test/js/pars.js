'use strict';
$(function(){

	$('.show-resultation').on('click', function(e){
		let questions = JSON.parse(localStorage.getItem('questionsArr'));
		let rightAnsvers = JSON.parse(localStorage.getItem('rightAnsversArr'));
		e.preventDefault();
		let r = []
		for (let i = 0; i < questions.length; i++){
			if (i == 0){
				console.log('Question: ', questions[i])
			} else {
				console.log('Ansver', i, ': ', questions[i])
			};
			for (let j = 0; j < rightAnsvers.length; j++ ){
				if (i == rightAnsvers[j]+1){
					r.push(questions[i]);
				};
			};
		};
		for (let value of r){
			console.log('RightAnsver(s): ', value);
		};
		console.log('____________')
		
	});
	localStorage.clear();
});	

