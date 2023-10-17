import { MeteorologicalData } from "./IMeteorologicalData";

export interface IPagenableList {
    weathers: MeteorologicalData[];
    totalPages: number;
    offset:number;
    pageSize:number;
    totalWeathers:number;
  }