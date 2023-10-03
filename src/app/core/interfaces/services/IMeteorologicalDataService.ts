import { Observable } from 'rxjs';
import { MeteorologicalData } from '../IMeteorologicalData';

export interface IMeteorologicalDataService {
    getByCity(city:string ):Observable<MeteorologicalData[]>;
    getActualDayinCity(city: string): Observable<MeteorologicalData>;
}