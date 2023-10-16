import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MeteorologicalDataService } from 'src/app/core/services/meteorological-data.service';
import * as moment from 'moment';


@Component({
  selector: 'app-edit-weather',
  templateUrl: './edit-weather.component.html',
  styleUrls: ['./edit-weather.component.css']
})
export class EditWeatherComponent implements OnInit {

  weather!: FormGroup;

  constructor(
    private service: MeteorologicalDataService,
    private formbuilder: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.service.getById(id!).subscribe((weather)=>
    this.weather = this.formbuilder.group({
      city: [weather.city, Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.pattern(/^[^\s]+$/)
      ])],
      weatherDate: [moment(weather.weatherDate).format("YYYY-MM-DD"), Validators.compose([
        Validators.required
      ])],
      morningWeather: [weather.morningWeather, Validators.compose([
        Validators.required
      ])],
      nightWeather: [weather.nightWeather, Validators.compose([
        Validators.required
      ])],
      maxTemperature: [weather.maxTemperature, Validators.compose([
        Validators.required
      ])],
      minTemperature: [weather.minTemperature, Validators.compose([
        Validators.required
      ])],
      humidity: [weather.humidity, Validators.compose([
        Validators.required
      ])],
      precipitation: [weather.precipitation, Validators.compose([
        Validators.required
      ])],
      windSpeed: [weather.windSpeed, Validators.compose([
        Validators.required
      ])]
    }))
  }

  editWeather(){
    if(this.weather.valid){
      this.service.editById(this.route.snapshot.paramMap.get('id')!,this.weather.value).subscribe({
        next:()=>{
          this.toastr.success('Você realizou uma atualização com sucesso!',"Dados Atualizados:");
          this.router.navigate(['list'])
        },
        error:(error)=>{
          this.toastr.error('Ocorreu um erro ao enviar seus novo Dado Meteorológico.');
        }
    })}else{
      this.toastr.error('Preencha todos os campos corretamente!', "Erro:");
  }}

  cancelNotification(){
    this.toastr.info("Você voltou para lista!", "Edicação Cancelada")
  }
}
