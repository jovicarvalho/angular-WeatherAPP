import { Observable } from 'rxjs';
import { MeteorologicalData } from '../IMeteorologicalData';
import { IPagenableList } from '../IPagenableList';

export interface IMeteorologicalDataService {
    getByCity(city:string ):Observable<MeteorologicalData[]>;
    getById(id:String):Observable<MeteorologicalData>;
    getActualDayinCity(city: string): Observable<MeteorologicalData>;
    postMeteorologicalData(weather: MeteorologicalData):Observable<MeteorologicalData>;
    getAll(skip:number):Observable<IPagenableList>;
    delete(id:string):Observable<any>;
    editById(id:string, weather:MeteorologicalData):Observable<MeteorologicalData>;
}