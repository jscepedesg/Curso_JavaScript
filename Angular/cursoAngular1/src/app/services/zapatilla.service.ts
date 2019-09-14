import { Injectable } from '@angular/core';
import { Zapatilla } from '../models/zapatilla';

@Injectable()
export class ZapatillaService
{
  public zapatillas: Array<Zapatilla>;
  constructor()
  {
    this.zapatillas = [
      new Zapatilla('Rebook Classic',80,'Rebook','Blanco',true),
      new Zapatilla('Nike Black',90,'Nike','verdes',true),
      new Zapatilla('DC',70,'D&C','Blanco',false),
      new Zapatilla('DC new',70,'D&C','Azul',false)
    ];
  }

  getTexto()
  {
    return "Hola mundo desde un servicio";
  }

  getZapatillas(): Array<Zapatilla>
  {
    return this.zapatillas;
  }
}
