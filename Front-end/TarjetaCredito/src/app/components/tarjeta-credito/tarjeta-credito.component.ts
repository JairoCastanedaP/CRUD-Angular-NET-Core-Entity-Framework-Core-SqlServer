import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tarjeta-credito',
  templateUrl: './tarjeta-credito.component.html',
  styleUrls: ['./tarjeta-credito.component.css']
})
export class TarjetaCreditoComponent implements OnInit {

  listTarjetas: any[]=[
    {titular:'juaco perez',numeroTarjeta:'6165',fechaExpiracion:'2023-03',cvv:'123'},
    {titular:'sebastian ferrer',numeroTarjeta:'6854',fechaExpiracion:'2022-01',cvv:'123'},
    {titular:'sofia castaneda',numeroTarjeta:'3215',fechaExpiracion:'2022-02',cvv:'123'}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
