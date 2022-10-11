import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MercanciasService {

  constructor(public peticion:HttpClient) { }

  public buscarMercanciaId(id:any):Observable<any>{
    let uri=`http://localhost:8080/api/tcc/mercancias/${id}`
    return this.peticion.get(uri);
  }

  public ingresarMercancia(datosMercancia:any):Observable<any>{
    let uri=`http://localhost:8080/api/tcc/mercancias`
    return this.peticion.post(uri,datosMercancia)
  }

  public retirarMercancia(id:any):Observable<any>{
    let uri=`http://localhost:8080/api/tcc/mercancias/${id}`
    return this.peticion.delete(uri)
  }

}
