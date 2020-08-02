//Check off specific Todos By clicking

$("ul").on("click", "li", function(){
 

	$(this).toggleClass("completed");



});


//Click on X to delete a ToDo

$("ul").on("click", "span", function(event){

	
	$(this).parent().fadeOut(500,function(){

		$(this).remove();

	});
	event.stopPropagation();

	

});

$("input[type='text']").keypress(function(event){

	if(event.which === 13){


		var todoText = $(this).val();
		$(this).val("");

		//Now we must create a new li and add it to ul
		$("ul").append("<li><span><i class ='fa fa-trash-o'></i></span> " + todoText + "</li>")

	}

	console.log("Key Press!");
	
});


$(".fa-pencil").click(function(){


	$("input[type='text']").fadeToggle();


});
