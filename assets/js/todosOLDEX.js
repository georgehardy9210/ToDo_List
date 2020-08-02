//Check off specific Todos by clicking

$("li").click(function(){

	//Prints out current color	
	//console.log($(this).css("color"));

	//if li is gray then turn black
		if($(this).css("color") === "rgb(128, 128, 128)"){
	
			$(this).css({

				color: "black",
				textDecoration: "none"
			});
			
		}	



	//else turn it gray
		else{
			$(this).css({

				color: "gray",
				textDecoration: "line-through"


			});

	
		}

});
