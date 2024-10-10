import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlanetsService {

  constructor(private http: HttpClient) {
  }

  obtenerdatos(filtro: any): Observable<any>{
    return this.http.get(`https://dragonball-api.com/api/planets`, {params: filtro});
   }

  enviardatos(data: any): Observable<any> {
    return this.http.post(`https://dragonball-api.com/api/planets`, data);
  }

  obtenerPlaneta(id: any): Observable<any> {
    return this.http.get(`https://dragonball-api.com/api/planets/${id}`);
  }
}
