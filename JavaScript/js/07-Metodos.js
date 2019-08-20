
var numero = 444;
var texto1 = "Hoajsakjsa";
var texto2 = " es un buen curso ";

//Numero a string
var dato = numero.toString();
//Texto en mayuscula
var dato1 = texto1.toUpperCase();
var dato2 = texto1.toLowerCase();


console.log(dato2);

//calcular la longitud de un texto

var nombre = "aa";

console.log(nombre.length);

var nombres = ["Hoa", "Juan"];

console.log(nombres.length);

//Buscar una palabra

//var busqueda = texto2.search("curso");
var busqueda = texto2.indexOf("curso");
console.log(busqueda);

//var busqueda2 = texto2.startsWith("es");
var busqueda2 = texto2.includes("buen");
console.log(busqueda2);

var busqueda3 = texto2.split(" ");
console.log(busqueda3);

var busqueda4 = texto2.trim();
console.log(busqueda4);

