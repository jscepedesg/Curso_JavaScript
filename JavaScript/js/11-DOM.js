'use strict'

//DOM - Document object model

function cambiaColor(color)
{
	caja.style.background = color;
}

//Conseguir elementos con un id en concreto
//var caja = document.getElementById("micaja");
var caja = document.querySelector("#micaja");
caja.innerHTML = "Angelica";
caja.style.background = "red";
caja.style.padding = "20px";
caja.style.color = "white";
caja.className = "Hola";
console.log(caja);

//Conseguir elementos por su etiqueta
var todos_los_div = document.getElementsByTagName('div');

var contenido = todos_los_div[2].textContent;
console.log(contenido);
//Conseguir elementos por su clase Css
var divsRojos = document.getElementsByClassName('rojo');
var div;
for(div in divsRojos)
{
	if(divsRojos[div].className == "rojo")
	{
		divsRojos[div].style.background = "red";
	}
	
}
console.log(divsRojos);