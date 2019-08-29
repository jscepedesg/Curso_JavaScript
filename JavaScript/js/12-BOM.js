'use strict'

//BOM - Browser Object Model
function getBom()
{
  	//console.log(window.innerHeight);	
	//console.log(window.innerWidth);
	console.log(window.screen.height);
	console.log(window.screen.width);
	console.log(window.location);

}

function abrirVentana(url)
{
	window.open(url, "", "width=400, height=300");
}
getBom();