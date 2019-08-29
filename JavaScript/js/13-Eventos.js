'use strict'

//Eventos del ratón

window.addEventListener('load', () => {
	function cambiarColor()
	{	
		console.log("Me has dado click");
		var bg = boton.style.background;
		if (bg == "green") 
		{
			boton.style.background = "red";
		}
		else
		{
			boton.style.background = "green";
		}

		return true;
	}

	//Click
	var boton = document.querySelector("#boton");
	boton.addEventListener('click', function(){
		cambiarColor();
	});
	//Mouse over
	boton.addEventListener('mouseover', function(){
		boton.style.background = "yellow";
	});
	//Mouse out
	boton.addEventListener('mouseout', function(){
		boton.style.background = "#ccc";
	});
	//Focus
	var input = document.querySelector('#campo_nombre');
	input.addEventListener('focus', function(){
		console.log("Estas dentro del input");
	});
	//Blur
	input.addEventListener('blur', function(){
		console.log("Estas fuera del input");
	});
	//Keydown
	input.addEventListener('keydown', function(event){
		console.log("Pulsando una tecla", String.fromCharCode(event.keyCode));
	});
	//Keypress
	input.addEventListener('keypress', function(event){
		console.log("Tecla presionada", String.fromCharCode(event.keyCode));
	});
	//keyup
	input.addEventListener('keyup', function(event){
		console.log("Tecla soltada", String.fromCharCode(event.keyCode));
	});


	//TIMERS

	var tiempo = setInterval(function(){
		console.log("Set interval ejecutando");
	},3000);

});

