import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-formularioregistro',
  templateUrl: './formularioregistro.component.html',
  styleUrls: ['./formularioregistro.component.css']
})
export class FormularioregistroComponent implements OnInit {

  formulario!:FormGroup;

  constructor(public formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.formulario=this.inicializarFormulario()
  }

  public analizarFormulario():void{
    console.log(this.formulario.value)
  }

  public inicializarFormulario():FormGroup{
    return this.formBuilder.group({
      iup:['054123',[Validators.required,Validators.minLength(6)]],
      tiporemitente:['Empresa',[Validators.required]],
      idremitente:['001',[Validators.required]],
      nombreremitente:['Santiago',[Validators.required]],
      deptoremitente:['Antioquia',[Validators.required]],
      municipioremitente:['Copacabana',[Validators.required]],
      direccionremitente:['Calle Falsa 123',[Validators.required]],
      tipodestinatario:['Empresa',[Validators.required]],
      iddestinatario:['002',[Validators.required]],
      nombredestinatario:['Andres',[Validators.required]],
      deptodestinatario:['Antioquia',[Validators.required]],
      municipiodestinatario:['Copacabana',[Validators.required]],
      direcciondestinatario:['Calle Falsa 124',[Validators.required]],
    })
  }

}
