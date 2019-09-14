import { Component, OnInit } from '@angular/core';
import { Zapatilla } from "../models/zapatilla";
import { ZapatillaService } from '../services/zapatilla.service';
@Component({
  selector: 'zapatillas',
  templateUrl: './zapatillas.component.html',
  providers: [ZapatillaService]
})

export class ZapatillasComponent implements OnInit
{
  public titulo: string;
  public zapatillas: Array<Zapatilla>;
  public marca: String[];
  public color: string;
  public mi_marca: string;
  constructor(private _zapatillaService: ZapatillaService)
  {
    this.mi_marca= 'Fila';
    this.color= 'yellow';
    this.marca= new Array();
    this.titulo="Componente de Zapatillas";
  }

  ngOnInit()
  {
      console.log(this.zapatillas);
      this.zapatillas=this._zapatillaService.getZapatillas();
      this.marcas();
  }

  marcas()
  {
    this.zapatillas.forEach((value, index) => {
      if(this.marca.indexOf(value.marca) < 0)
      {
        this.marca.push(value.marca);
      }
    });

    console.log(this.marca);
  }

  getMarca()
  {
    alert(this.mi_marca);
  }

  addMarca()
  {
    this.marca.push(this.mi_marca);
  }
  setBorrarMarca(indice)
  {
    //delete this.marca[indice];
    this.marca.splice(indice, 1);
  }

  onBlur()
  {
    console.log("Ha salido del input");
  }
}
