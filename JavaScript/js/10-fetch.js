
//Fetch (ajax) y peticiones a servicios / apis rest
var usuarios=[];
fetch('https://jsonplaceholder.typicode.com/users')
	.then(data => data.json())
	.then(data => {
		usuarios = data;
		console.log(usuarios[1].name);
	});
