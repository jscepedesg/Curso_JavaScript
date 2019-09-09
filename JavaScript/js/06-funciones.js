
//Funciones 
function calculadora()
{
	return "Hola soy la calculadora";
}

console.log(calculadora());
console.log(calculadora());
console.log(calculadora());

//Funciones con parametros
function getSuma(a, b)
{
	return (a+b);
}

console.log(getSuma(5,6));

//Parametros rest y spread

function listadoFrutas (fruta1, fruta2,...resto_de_frutas)
{
	console.log("Fruta 1: ", fruta1);
	console.log("Fruta 2: ", fruta2);
	console.log(resto_de_frutas);
}

listadoFrutas("Naranja", "Manzana","Sandia","Pera","Melon","Coco");

//Funciones anonimas
//Es una funcion que no tiene nombre

var pelicula = function(nombre)
{
	return "La pelicula es:"+ nombre;
}

function sumame(numero1, numero2, sumaYmuestra, sumaPorDos)
{
	var sumar = numero1+numero2;

	sumaYmuestra(sumar);
	sumaPorDos(sumar);

	return sumar;
}

sumame(5,7, function(dato){
	console.log("La suma es: ",dato);
},
function(dato){
	console.log("La suma por dos es:", (dato*2));
});

//Funciones de flecha
function sumame(numero1, numero2, sumaYmuestra, sumaPorDos)
{
	var sumar = numero1+numero2;

	sumaYmuestra(sumar);
	sumaPorDos(sumar);

	return sumar;
}

sumame(5,7, dato =>{
	console.log("La suma es: ",dato);
},
dato =>{
	console.log("La suma por dos es:", (dato*2));
});
//Ambito de las variables

function holamundo(texto)
{
	var hola_mundo = "texto jajaja";
	console.log(texto);
	console.log(numero);
}

var numero = 12;
var texto = "Hola mundo soy una variable global";
holamundo(texto);

