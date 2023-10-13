import { Component, Input, OnInit } from '@angular/core';
import { MeteorologicalData } from 'src/app/core/interfaces/IMeteorologicalData';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  constructor() { }

  @Input() weather:MeteorologicalData = {
    id:"",
    city:"",
    weatherDate:"",
    morningWeather:"",
    nightWeather:"",
    minTemperature:0,
    maxTemperature:0,
    humidity:0,
    precipitation:0,
    windSpeed:0
  }

  ngOnInit(): void {
  }

}