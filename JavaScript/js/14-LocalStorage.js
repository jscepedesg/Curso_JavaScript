'use strict'

//LocalStorage
//Comprobar disponibilidad del localstorage
if(typeof(Storage) !== 'undefined')
{
	console.log("LocalStorage Disponible");
}
else
{
	console.log("LocalStorage No disponible");	
}

//Guardar datos
localStorage.setItem("titulo", "curso de symfony");
//Recuperar elemnto
console.log(localStorage.getItem("titulo"));

//Guardar objetos

var usuario = {
	nombre: "Sebastian",
	apellido: "Cespedes",
	email: "jahir@hotmail.com",
	web: "sebas.com"
};

localStorage.setItem("usuario", JSON.stringify(usuario));

//Recuperar
var userjs = JSON.parse(localStorage.getItem("usuario"));

console.log(userjs);

//Eliminar de locaStorage

localStorage.removeItem("titulo");