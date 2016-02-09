$(document).ready(function(){ 
	$('#dumbledoor').hide();
	$('#dumbledoor2').hide();
	$('#dumbledoor3').hide();
	$('#dumbledoor4').hide();
	$(".input").hide();

	
    

	$("#button").click(function(){
    	  $("#button").hide();
    	  $("#harry").hide();
    	  $("p").hide();
    	  $(".form").hide();
    	  $('#dumbledoor').show();
    	  $('#dumbledoor2').show();
    	  $('#dumbledoor3').show();
    	  $('#dumbledoor4').show();
    	  $("body").css("background-color", "purple");
    	  /*/ first create variable*/
    	  var addedTxt = $('textarea[name=letter]').val();
    	  $(".input").append('<h3>' + addedTxt + '</h3>').show();
    	  console.log(addedTxt);
    	  /* trying to add a way to enter form answer into html. will it have to be the html of document 5thpage 
	$("#button").click(function(){
        var toAdd = $('input[name=checkListItem]').val(); */

	});
 /*the fade affects on harry*/
	$('#harry').mouseover(function(){
		$('#harry').fadeTo('slow', .75);
		});
	$('#harry').mouseleave(function(){
		$('#harry').fadeTo('slow', .25);
		});

	/*all the dumbleddors*/
/* THe fade affects on dumbledoor. added to all the images, this is not the best solution */
$('#dumbledoor').mouseover(function(){
		$('#dumbledoor').fadeTo('fast', .35);
		});
	$('#dumbledoor').mouseleave(function(){
		$('#dumbledoor').fadeTo('fast', .75);
		/*$("img").fadeTo("color", "purple");/* that didn't work will see later/* */
	});
	
$('#dumbledoor2').mouseover(function(){
		$('#dumbledoor2').fadeTo('fast', .35);
		});
	$('#dumbledoor2').mouseleave(function(){
		$('#dumbledoor2').fadeTo('fast', .65);
	});
	
$('#dumbledoor3').mouseover(function(){
		$('#dumbledoor3').fadeTo('fast', .35);
		});
	$('#dumbledoor3').mouseleave(function(){
		$('#dumbledoor3').fadeTo('fast', .65);
		
	});
	
$('#dumbledoor4').mouseover(function(){
		$('#dumbledoor4').fadeTo('fast', .35);
		});
	$('#dumbledoor4').mouseleave(function(){
		$('#dumbledoor4').fadeTo('fast', .65);
	
	});
	

});
