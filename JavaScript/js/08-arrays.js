
var nombre = "Victor Robles";
//Arrays
var nombres = ["Victor Robles", "Juan Lopez", "Manolo Garcia", "Jose Martin",52,true];

var lenguajes = new Array("PHP","JS","Go","Java");

console.log(nombres);
console.log(lenguajes);
console.log(nombres[3]);

//Foreach
document.write("<ul>");
lenguajes.forEach((elemento, indice, arr) =>{
	console.log(arr);
	document.write("<li>"+indice+" - "+elemento+"</li>");
});
document.write("</ul>");

//Array multidimensional

var categorias = ["Accion","Terror","Comedia"];
var peliculas = ["La verdad duele", "La vida es bella"," Gran torino"];

var cine = [categorias,peliculas];

console.log(cine);
console.log(cine[0][1]);

peliculas.push("Batman");
console.log(peliculas);
peliculas.pop();
console.log(peliculas);

//Convertir una array a un String

var peliculas_string = peliculas.join();
console.log(peliculas_string);

//Ordenar arrays alfabeticamente
peliculas.sort();  
console.log(peliculas);

peliculas.reverse();
console.log(peliculas);

//Manera de recorer un array

for (let lenguaje in lenguajes) 
{
	console.log(lenguajes[lenguaje]);
}

//Busquedas dentro del array

var busquedad = lenguajes.find(function (lenguaje){
	return lenguaje == "PHP";
});

console.log(busquedad);

//Con funcion de flecha
var busquedad1 = lenguajes.find(lenguaje => lenguaje == "PHP");
console.log(busquedad1);

//Buscar el indice
var busquedad2 = lenguajes.findIndex(lenguaje => lenguaje == "PHP");
console.log(busquedad2);
