import { Component, OnInit } from '@angular/core';
import { MercanciasService } from '../services/mercancias.service';
import { ZonasService } from '../services/zonas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public zonas:any[]=[];
  public mensajes:boolean=false;
  public respuestas!:boolean;
  constructor(
    public servicioZona:ZonasService,
    public servicioMercancia:MercanciasService
    ) {
    this.servicioZona.consultarZonas().subscribe(respuesta=>{
      this.zonas=respuesta
    })
  }
  public confirmar(){
    
    }

  public retirarMercancia(id:any,zona:any):void{
    var r = confirm("¿Seguro que desea retirar la mercancia "+id+" de la "+zona+"?");
    if (r == true) {
      this.servicioMercancia.retirarMercancia(id).subscribe(respuesta=>{
        window.location.reload()
      })
    } 
    // else {
    //     alert("\'codgio de redireccion (false)\'");
    // }
    
  }

  
 

  ngOnInit(): void {
  }

}
