import { Component, OnInit } from '@angular/core';
import { MercanciasService } from '../services/mercancias.service';
import { ZonasService } from '../services/zonas.service';
import Swal from 'sweetalert2'

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

    

  public retirarMercancia(id:any,zona:any):void{
    Swal.fire({
      title: 'Retirar mercancia',
      text: 'Desea retirar la mercancia '+id+' de la '+zona+'?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#5AA454',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Confirmado!',
          'La mercancia fue retirada.',
          'success'
        )
        this.servicioMercancia.retirarMercancia(id).subscribe(respuesta=>{
          window.location.reload()
        })
      }
    })
  }

  
 

  ngOnInit(): void {
  }

}
