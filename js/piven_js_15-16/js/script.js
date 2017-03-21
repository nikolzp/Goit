'use strict;'
$(function () {
	
	function Test(question, ans1, ans2, ans3){
		this.question = $('#question');
		this.ans1 = $('#ans1');
		this.ans2 = $('#ans2');
		this.ans3 = $('#ans3');
	}

	function Checkbox(firstAns, seconsAns) {
		this.firstAns = $('#first-ans');
		this.seconsAns = $('#second-ans');
		this.thirdAns = $('#third-ans');
	}


	let t = new Test();
	let c = new Checkbox()

	$('.resultation').on('click', function (e){
		e.preventDefault();
		for (i = 0; i < Object.keys(t).length; i++) {
		 	let value = $($('input').get(i)).val();
		 	if(value == ''){
		 		console.log('non all');
		 	} else {
		 		console.log(value)
		 	};
		 };	

	});

	
})