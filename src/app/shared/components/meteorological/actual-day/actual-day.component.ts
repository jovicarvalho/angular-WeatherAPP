import { Component, OnInit, Output } from '@angular/core';
import { MeteorologicalData } from 'src/app/core/interfaces/IMeteorologicalData';

@Component({
  selector: 'app-actual-day',
  templateUrl: './actual-day.component.html',
  styleUrls: ['./actual-day.component.css']
})
export class ActualDayComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
  }

  todayMeteorologicalData: MeteorologicalData = {
    id: "",
		city: "",
		weatherDate: "",
		morningWeather: "",
		nightWeather: "",
		maxTemperature: 0,
		minTemperature: 0,
		humidity: 0,
		precipitation: 0,
		windSpeed: 0
  };

  
  @Output() sevenDays: MeteorologicalData[] = [];

  verifyifCityExistReturnsTitle():string{
    if (this.todayMeteorologicalData.id !== "") {return `Hoje em ${this.todayMeteorologicalData.city}` }
    return `Hoje`
  }

  receberDiaAtual(respostafilho:MeteorologicalData){
      this.todayMeteorologicalData = respostafilho
  }

  recieveSevenDays(respostafilho:MeteorologicalData[]){
    this.sevenDays = respostafilho;
  }

  setIconLocationParameter:boolean=false

  changeWeatherIcon():string{
    let hour = new Date().getHours();
    if(hour < 17){
      switch(this.todayMeteorologicalData.morningWeather){
        case "SUNNY":return"/assets/weatherIcons/sol.svg";
        case "SUNANDCLOUDY":return"/assets/weatherIcons/solNuvens.svg"; 
        case "STORM": return"/assets/weatherIcons/solNuvens.svg";
        case "CLOUDY": return"/assets/weatherIcons/nubladoDia.svg";
        case "RAINING": return"/assets/weatherIcons/chuvaDia.svg";
      }
    }
    switch(this.todayMeteorologicalData.nightWeather){
      case "SUNANDCLOUDY":return"/assets/weatherIcons/solNuvens.svg"; 
      case "STORM": return"/assets/weatherIcons/solNuvens.svg";
      case "CLOUDY": return"/assets/weatherIcons/nubladoNoite.svg";
      case "RAINING": return"/assets/weatherIcons/chuvaNoite.svg";
    }
    return "/assets/weatherIcons/weatherGif/lupa.gif"
  }

}
