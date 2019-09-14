import { Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PeticionesService{

  public url: string;
  constructor(public _http: HttpClient)
  {
    this.url="https://reqres.in/";
  }

  getUser(userId): Observable<any>
  {
    return this._http.get(this.url+'api/users/'+userId);
  }

  addUser(user): Observable<any>
  {
    let json = JSON.stringify(user);
    let headers = new HttpHeaders().set('content-Type','application/json');

    return this._http.post(this.url+'api/useres',json, {headers});
  }
}
