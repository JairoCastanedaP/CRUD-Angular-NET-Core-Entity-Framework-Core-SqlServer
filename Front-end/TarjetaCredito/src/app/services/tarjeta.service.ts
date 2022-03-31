import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TarjetaService {
  private myAppUrl='https://localhost:44361/';
  private myApiUrl='api/Tarjeta/';

  constructor(private http:HttpClient) { }

  getListarTarjetas(){
    return  this.http.get(this.myAppUrl +this.myApiUrl);
  }
}
