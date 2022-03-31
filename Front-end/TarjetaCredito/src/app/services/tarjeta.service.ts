import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TarjetaService {
  private myAppUrl='https://localhost:44361/';
  private myApiUrl='api/Tarjeta';

  constructor(private http:HttpClient) { }

  getListarTarjetas(){
    return  this.http.get(this.myAppUrl +this.myApiUrl);
  }
  deleteTarjeta(id:number): Observable<any>{
    return this.http.delete(this.myAppUrl+this.myApiUrl+'/'+id)
  }
}
