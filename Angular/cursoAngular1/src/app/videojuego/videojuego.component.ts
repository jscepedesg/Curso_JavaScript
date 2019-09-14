import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';

@Component({
  //mi etiqueta para la vista
    selector: 'videojuego',
    //La direccion de mi vista
    templateUrl: './videojuego.component.html'
})

export class VideojuegoComponent implements OnInit, DoCheck, OnDestroy{

  //Variable que puedo utilizar en mi vista
  public titulo: string;
  public listado: string;
  //El constructor de mi clase
  constructor()
  {
    this.titulo="Componente de Videojuegos";
    this.listado= "Listado de los juegos mas populares";
    //console.log("Se ha cargado el componente video juego");
  }

  //Se inicia despues del constructor
  ngOnInit()
  {
    //console.log("Ejecutado");
  }
  //Siempre que haya un cambio en mi aplicación
  ngDoCheck()
  {
    //console.log("DoCheck ejecutado");
  }
  //Se ejecute algo antes de elimiar la instancia de un componente
  ngOnDestroy()
  {
    //console.log("Ejecutado onDestroy");
  }
  cambiarTitulo()
  {
    this.titulo= "Nuevo titulo del componente";
  }
}
