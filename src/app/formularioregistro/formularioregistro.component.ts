import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MercanciasService } from '../services/mercancias.service';
import { ZonasService } from '../services/zonas.service';

@Component({
  selector: 'app-formularioregistro',
  templateUrl: './formularioregistro.component.html',
  styleUrls: ['./formularioregistro.component.css']
})
export class FormularioregistroComponent implements OnInit {

  formulario!:FormGroup;
  controlDeZona:boolean=true;
  datosZonas:any[]=[];

  constructor(
    public formBuilder:FormBuilder,
    public servicioMercancias:MercanciasService,
    public servicioZonas:ZonasService
    ) { }

  ngOnInit(): void {
    this.formulario=this.inicializarFormulario()
    this.servicioZonas.consultarZonas().subscribe(respuesta=>{
      this.datosZonas=respuesta.map((zona:any)=>{
        return {nombre:zona.nombre,id:zona.id}
      })
    })
  }

  public analizarFormulario():void{
    let datosMercancia=this.formulario.value
    datosMercancia.volumen=10
    datosMercancia.nombre="Mercancia Prueba"
    datosMercancia.zona={id:this.formulario.value.zona}
    console.log(datosMercancia)
    this.servicioMercancias.ingresarMercancia(datosMercancia).subscribe(respuesta=>{
      console.log(respuesta)
      window.location.reload()
    })
  }

  public inicializarFormulario():FormGroup{
    return this.formBuilder.group({
      iup:['',[Validators.required/*,Validators.minLength(6)*/]],
      tipoRemitente:['',[Validators.required]],
      idRemitente:['',[Validators.required]],
      nombreRemitente:['',[Validators.required]],
      deptoRemitente:['',[Validators.required]],
      municipioRemitente:['',[Validators.required]],
      direccionRemitente:['',[Validators.required]],
      tipoDestinatario:['',[Validators.required]],
      idDestinatario:['',[Validators.required]],
      nombreDestinatario:['',[Validators.required]],
      deptoDestinatario:['',[Validators.required]],
      municipioDestinatario:['',[Validators.required]],
      direccionDestinatario:['',[Validators.required]],
      zona:['1',[Validators.required]]
    })
  }

  public buscarMercancia(){
    let iup=this.formulario.value.iup
    this.servicioMercancias.buscarMercanciaId(iup).subscribe(
      respuesta=>{
        this.formulario.patchValue({
          tiporemitente:respuesta.tipoRemitente,
          idremitente:respuesta.idRemitente,
          nombreremitente:respuesta.nombreRemitente,
          deptoremitente:respuesta.deptoRemitente,
          municipioremitente:respuesta.municipioRemitente,
          direccionremitente:respuesta.direccionRemitente,
          tipodestinatario:respuesta.tipoDestinatario,
          iddestinatario:respuesta.idDestinatario,
          nombredestinatario:respuesta.nombreDestinatario,
          deptodestinatario:respuesta.deptoDestinatario,
          municipiodestinatario:respuesta.municipioDestinatario,
          direcciondestinatario:respuesta.direccionDestinatario
        })
        this.formulario.disable()
        this.formulario.controls['iup'].enable()
        this.controlDeZona=false
      },
      error=>{
        this.controlDeZona=true
        this.formulario.enable()
        // this.formulario.reset()
        console.log(error.error)
      }
    )
  }
}
