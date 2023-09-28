import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { MeteorologicalData } from '../interfaces/IMeteorologicalData';

@Injectable({
  providedIn: 'root'
})
export class MeteorologicalDataServiceService {

  constructor(
    private http: HttpClient
    ){ }

  private readonly API = 'https://localhost:7105/MeteorologicalData'

  getByCity(city:string ){
    let params = new HttpParams().set("?city",city);
    
    return this.http.get<MeteorologicalData[]>(this.API,{params})
  }


}
