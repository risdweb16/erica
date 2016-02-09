
$(document).ready(function(){

	$('img').mouseover(function(){
		$('img').fadeTo('slow', .75);
		});
	$('img').mouseleave(function(){
		$('img').fadeTo('slow', .25);
		});
});