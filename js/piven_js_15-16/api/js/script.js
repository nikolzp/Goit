'use strict;'

$(function(){

	$('.find').on('click', function(e){
		e.preventDefault();
		var API_KEY = '4816270-af36daff094a60749f62b82b6';
		var URL = "https://pixabay.com/api/?key="+API_KEY+"&q="+$('#find').val()+"&per_page=40";
		$.getJSON(URL, function(data){
		    if (parseInt(data.totalHits) > 0)
        		$.each(data.hits, function(i, hit){ 
        			console.log(hit.previewURL);	
        			$('.result').append('<img src="'+ hit.previewURL +'">');
        		 });
    		else
        		console.log('No hits');
});
	
	});
}); 
