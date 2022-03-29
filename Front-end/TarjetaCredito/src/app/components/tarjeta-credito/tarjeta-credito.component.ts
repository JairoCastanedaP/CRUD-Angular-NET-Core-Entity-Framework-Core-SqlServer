import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

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
  constructor(private fb: FormBuilder,
    private toastr: ToastrService
    ) { 

    this.form=fb.group({
      titular:['',Validators.required],
      numeroTarjeta: ['',[Validators.required,Validators.minLength(16),Validators.maxLength(16)]],
      fechaExpiracion: ['',[Validators.required,Validators.maxLength(5),Validators.minLength(5)]],
      cvv: ['',[Validators.required,Validators.maxLength(3),Validators.minLength(3)]]

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
    this.toastr.success('La Tarjeta fue registrada con éxito', 'Tarjeta Registrada');
    this.form.reset()
  }
  eliminarTarjeta(index: number){
    console.log(index);
    this.listTarjetas.splice(index,1);
    this.toastr.error('La tarjeta fue eliminada con éxito','Tarjeta Eliminada');
  }

}
