import { Component, OnInit } from '@angular/core';
import { ZonasService } from '../services/zonas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public zonas:any[]=[];
  constructor(public servicioZona:ZonasService) {
    this.servicioZona.consultarZonas().subscribe(respuesta=>{
      this.zonas=respuesta
      console.log(respuesta)
    })
  }

  ngOnInit(): void {
  }

}
