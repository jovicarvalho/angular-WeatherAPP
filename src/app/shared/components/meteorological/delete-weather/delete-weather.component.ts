import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MeteorologicalData } from 'src/app/core/interfaces/IMeteorologicalData';
import { MeteorologicalDataService } from 'src/app/core/services/meteorological-data.service';

@Component({
  selector: 'app-delete-weather',
  templateUrl: './delete-weather.component.html',
  styleUrls: ['./delete-weather.component.css']
})
export class DeleteWeatherComponent implements OnInit {

  constructor(
    private service: MeteorologicalDataService,
    private router: Router,
    private route: ActivatedRoute,
    private toastr: ToastrService
  ) { }

  weather:MeteorologicalData = {
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
    const id = this.route.snapshot.paramMap.get('id')
    this.service.getById(id!).subscribe((weather)=>{
      this.weather = weather
    })
  }

  deleteWeather(){
    if(this.weather.id){
    this.service.delete(this.weather.id).subscribe();
    this.toastr.success("Dado Excluído com Sucesso")
    this.router.navigate(['/list'])
  }
  }

  cancel(){
    this.router.navigate(['/list'])
    this.toastr.info("Você cancelou a exclusão!")
  }

}
