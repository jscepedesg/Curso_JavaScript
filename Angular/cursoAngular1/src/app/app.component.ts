import { Component } from '@angular/core';
import { configuracion } from './models/configuracion';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cursoAngular1';
  public descripcion: string;
  public mostrar_videojuegos: boolean = true;

  constructor()
  {
    this.title= configuracion.titulo;
    this.descripcion= configuracion.descripcion;
  }

  ocultarVideojuegos(value)
  {

    this.mostrar_videojuegos= value;
  }
}
