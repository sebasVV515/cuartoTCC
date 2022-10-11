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
  constructor(
    public servicioZona:ZonasService,
    public servicioMercancia:MercanciasService
    ) {
    this.servicioZona.consultarZonas().subscribe(respuesta=>{
      this.zonas=respuesta
    })
  }

  public retirarMercancia(id:any):void{
    this.servicioMercancia.retirarMercancia(id).subscribe(respuesta=>{
      window.location.reload()
    })
  }

  ngOnInit(): void {
  }

}
