import { Component, OnInit } from '@angular/core';
import { Color, ScaleType, LegendPosition } from '@swimlane/ngx-charts';
import { ZonasService } from '../services/zonas.service';

@Component({
  selector: 'app-grafica',
  templateUrl: './grafica.component.html',
  styleUrls: ['./grafica.component.css']
})
export class GraficaComponent{
  public disponibleZonas:any[]=[];

  constructor(public servicioZona:ZonasService) {
    this.servicioZona.consultarZonas().subscribe(respuesta=>{
      this.disponibleZonas=respuesta.map((zona:any)=>{
        return {
          name:zona.nombre,
          series:[
            {
              name:"Disponible",
              value:zona.disponible
            },
            {
              name:"Ocupado",
              value:zona.capacidad-zona.disponible
            }
          ]   
        }
      })
    })
  }

  get multi(){
    return this.disponibleZonas
  }

  view: [number,number] = [750, 400];

  showXAxis: boolean = false;
  showYAxis: boolean = true;
  gradient: boolean = false;
  showLegend: boolean = false;
  showXAxisLabel: boolean = false;
  yAxisLabel: string = 'Zonas';
  showYAxisLabel: boolean = false;
  xAxisLabel: string = 'Capacidad %';

  colorScheme : Color = {
    name: 'colorestcc',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['#5AA454', '#A10A28']
  };

  onSelect(event:any) {
    console.log(event);
  }
}