import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

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
  
  form:FormGroup;
  constructor(private fb: FormBuilder) { 

    this.form=fb.group({
      titular:[''],
      numeroTarjeta: [''],
      fechaExpiracion: [''],
      cvv: ['']

    })

  }

  ngOnInit(): void {
  }
  agregarTarjeta(){
    console.log(this.form);
    
    const tarjeta: any={
      titular: this.form.get('titular')?.value,
      numeroTarjeta: this.form.get('numeroTarjeta')?.value,
      fechaExpiracion: this.form.get('fechaExpiracion')?.value,
      cvv: this.form.get('cvv')?.value
    }
    console.log(tarjeta);
    this.listTarjetas.push(tarjeta)
    this.form.reset()
  }

}
