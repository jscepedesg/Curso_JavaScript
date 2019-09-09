'use strict';
window.addEventListener("load",function(){
//Fetch (ajax) y peticiones a servicios / apis rest
var div_usuarios = document.querySelector("#usuarios");
var div_usuario = document.querySelector("#Usuario_2");

    getUsuarios()
    //Recibe los datos y los convierte en Json
    .then(data => data.json())
    //me guarda los datos en una array vacia
    .then(data => {
        console.log(usuarios);
        listadoUsuarios(data);

        return getInfo();
        
    })
    .then( data => {
        this.console.log(data);
        return getUsuario();
    })
    .then(data => data.json())
    .then(usuario => {
        optener_usuario(usuario.data);
    })
    .catch(error => 
        {
            //this.console.log(error);
            this.alert("Error en las peticiones");
        });

    function getUsuarios()
    {
        return fetch("https://jsonplaceholder.typicode.com/users");
    }

    function getUsuario()
    {
        return fetch("https://reqres.in/api/users/2");
    }

    function getInfo()
    {
        var estudiante = 
        {
            nombre: "Sebastian",
            apellido: "Cespedes",
            url: "http://roll.com.co/"
        };

        return new Promise((resolve, reject) => 
        {   var estudiante_String =  "";
            setTimeout(() => 
            {
                estudiante_String =  JSON.stringify(estudiante);

                if(typeof estudiante_String != 'string' ||  estudiante_String == '')
                {
                    return reject('error');
                }
                return resolve(estudiante_String);

            }, 3000);
            
        });
    }
    function listadoUsuarios(usuarios)
    {
        usuarios.map((user, i) => {
            let nombre = document.createElement('h3');

            nombre.innerHTML = i+1 +". "+ user.name;
            div_usuarios.appendChild(nombre);
        });
    }

    function optener_usuario(usuario)
    {
        
            let nombre = document.createElement('h4');
            let avatar = document.createElement('img');

            nombre.innerHTML = usuario.first_name;
            avatar.src = usuario.avatar;
            avatar.width = '100';
            div_usuario.appendChild(nombre);
            div_usuario.appendChild(avatar);
        
    }
});