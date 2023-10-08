import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse  } from '@angular/common/http'
import { MeteorologicalData } from '../interfaces/IMeteorologicalData';
import {Observable , throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {IMeteorologicalDataService} from '../interfaces/services/IMeteorologicalDataService'


@Injectable({
  providedIn: 'root'
})
export class MeteorologicalDataService implements IMeteorologicalDataService {

  private readonly API = 'https://localhost:7105/MeteorologicalData/'

  constructor(
    private http: HttpClient
    ){ }
  
  getByCity(city:string ){
    let params = new HttpParams().set("city",city);
    return this.http.get<MeteorologicalData[]>(this.API,{params})
  }

 
  getActualDayinCity(city: string): Observable<MeteorologicalData> {
      let params = new HttpParams().set('cityName', city);
      return this.http.get<MeteorologicalData>(`${this.API}actualDay/`, { params }).pipe(
        catchError((error: HttpErrorResponse) => {
          if (error.status === 404) {
            console.error('Erro 404: Recurso não encontrado.');
          }
          return new Observable<MeteorologicalData>((observer) => {
            observer.error(error);
          });
        })
      );
    }

    postMeteorologicalData(body:MeteorologicalData):Observable<MeteorologicalData>{
      return this.http.post<MeteorologicalData>(this.API,body)
    }
}
