import { i18nMetaToJSDoc } from '@angular/compiler/src/render3/view/i18n/meta';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { TarjetaService } from 'src/app/services/tarjeta.service';

@Component({
  selector: 'app-tarjeta-credito',
  templateUrl: './tarjeta-credito.component.html',
  styleUrls: ['./tarjeta-credito.component.css']
})
export class TarjetaCreditoComponent implements OnInit {

  listTarjetas: any = [];
  accion='Agregar';  
  form:FormGroup;
  id: number | undefined;

  constructor(private fb: FormBuilder,
    private toastr: ToastrService,
    private _tarjetaService: TarjetaService){
    this.form=fb.group({
      titular:['',Validators.required],
      numeroTarjeta: ['',[Validators.required,Validators.minLength(16),Validators.maxLength(16)]],
      fechaExpiracion: ['',[Validators.required,Validators.maxLength(5),Validators.minLength(5)]],
      cvv: ['',[Validators.required,Validators.maxLength(3),Validators.minLength(3)]]
    })
  }

  ngOnInit(): void {
    this.obtenerTarjetas();
  }
obtenerTarjetas(){
  this._tarjetaService.getListarTarjetas().subscribe(data=>{
    //console.log(data);
    this.listTarjetas = data.valueOf();
  },error=>{
    console.log(error);
  })
}

guardarTarjeta(){
    //console.log(this.form);
    
    const tarjeta: any={
      titular: this.form.get('titular')?.value,
      numeroTarjeta: this.form.get('numeroTarjeta')?.value,
      fechaExpiracion: this.form.get('fechaExpiracion')?.value,
      cvv: this.form.get('cvv')?.value
    }
    console.log(tarjeta);

    if(this.id== undefined){
      //se agrega una nueva tarjeta
      this._tarjetaService.saveTarjeta(tarjeta).subscribe(data=>{
        this.toastr.success('La Tarjeta fue registrada con éxito', 'Tarjeta Registrada');
        this.obtenerTarjetas();
        this.form.reset()
      },error=>{
        this.toastr.success('Opss.. Ocurrio un error', 'Error');
        console.log(error);
      })
    }
    else{
      tarjeta.id = this.id;
      this._tarjetaService.updateTarjeta(this.id,tarjeta).subscribe(data=>{
      this.form.reset();
      this.accion='Agregar';
      this.id=undefined;  
      this.toastr.info('La tarjeta fue actualizada con éxito','Tarjeta Actualizada');
      this.obtenerTarjetas();  
      },error=>{
        console.log(error);
      })

    }
    
  
    //this.listTarjetas.push(tarjeta)
  }
  eliminarTarjeta(id: number){
    //console.log(index);
    //this.listTarjetas.splice(index,1);

    this._tarjetaService.deleteTarjeta(id).subscribe(data=>{
      this.toastr.error('La tarjeta fue eliminada con éxito','Tarjeta Eliminada');
      this.obtenerTarjetas()
    },error=>{
      console.log(error);
    })   
  }

  editarTarjeta(tarjeta :any){
    console.log(tarjeta);
    this.accion='Editar';
    this.id=tarjeta.id;

    this.form.patchValue({
      titular: tarjeta.titular,
      numeroTarjeta:tarjeta.numeroTarjeta,
      fechaExpiracion:tarjeta.fechaExpiracion,
      cvv: tarjeta.cvv
    })
  }

}
