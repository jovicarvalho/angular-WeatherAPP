import { Component, Input, OnInit } from '@angular/core';
import { MeteorologicalData } from 'src/app/core/interfaces/IMeteorologicalData';

@Component({
  selector: 'app-weather-home',
  templateUrl: './weather-home.component.html',
  styleUrls: ['./weather-home.component.css']
})
export class WeatherHomeComponent implements OnInit {

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

  maxSignal():string{
    if(this.weather.maxTemperature > 0){
      return "+"
    }else if(this.weather.maxTemperature < 0){
      return "-"
    }
    return "";
  }

  minSignal():string{
    if(this.weather.minTemperature > 0){
      return "+"
    }else if(this.weather.minTemperature < 0){
      return "-"
    }
    return "";
  }
  constructor() { }

  ngOnInit(): void {
  }

  changeWeatherIcon():string{
    let hour = new Date().getHours();
    if(hour < 17){
      switch(this.weather.morningWeather){
        case "SUNNY":return"/assets/weatherIcons/sol.svg";
        case "SUNANDCLOUDY":return"/assets/weatherIcons/solNuvens.svg"; 
        case "STORM": return"/assets/weatherIcons/solNuvens.svg";
        case "CLOUDY": return"/assets/weatherIcons/nubladoDia.svg";
        case "RAINING": return"/assets/weatherIcons/chuvaDia.svg";
      }
    }
    switch(this.weather.nightWeather){
      case "SUNANDCLOUDY":return"/assets/weatherIcons/solNuvens.svg"; 
      case "STORM": return"/assets/weatherIcons/solNuvens.svg";
      case "CLOUDY": return"/assets/weatherIcons/nubladoNoite.svg";
      case "RAINING": return"/assets/weatherIcons/chuvaNoite.svg";
    }
    return "/assets/weatherIcons/search.png"
  }

  changeTextWeather():string{
    let hour = new Date().getHours();
    if(hour < 17){
      switch(this.weather.morningWeather){
        case "SUNNY":return"Ensolarado";
        case "SUNANDCLOUDY":return"Sol com Nuvens"; 
        case "STORM": return"Tempestade";
        case "CLOUDY": return"Nublado";
        case "RAINING": return"Chuvoso";
      }
    }
    switch(this.weather.nightWeather){
      case "SUNANDCLOUDY":return"Sol com Nuvens"; 
      case "STORM": return"Tempestade";
      case "CLOUDY": return"Nublado";
      case "RAINING": return"Chuvoso";
    }
    return ""
  }

}
