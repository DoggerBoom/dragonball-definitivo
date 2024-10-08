import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(private http: HttpClient) { }

   obtenerdatos(filtro: any): Observable<any>{
    return this.http.get(`https://dragonball-api.com/api/characters`, {params: filtro});
   }

   enviardatos(data: any): Observable<any>{
    return this.http.post(`https://dragonball-api.com/api/characters`, data);
   }

   obtenerPersonaje(id: any): Observable<any>{
    return this.http.get(`https://dragonball-api.com/api/characters/${id}`);
  }

  obtenerTransformaciones(id: any): Observable<any> {
    return this.http.get(`https://dragonball-api.com/api/transformations/${id}`);
  }

}