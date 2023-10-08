import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MeteorologicalDataService } from 'src/app/core/services/meteorological-data.service';

@Component({
  selector: 'app-create-meteorological-data',
  templateUrl: './create-meteorological-data.component.html',
  styleUrls: ['./create-meteorological-data.component.css']
})
export class CreateMeteorologicalDataComponent implements OnInit {

  weather!: FormGroup;

  constructor(
    private service: MeteorologicalDataService,
    private formbuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.weather = this.formbuilder.group({
      city: ['', Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.pattern(/^[^\s]+$/)
      ])],
      weatherDate: ['', Validators.compose([
        Validators.required
      ])],
      morningWeather: ['', Validators.compose([
        Validators.required
      ])],
      nightWeather: ['', Validators.compose([
        Validators.required
      ])],
      maxTemperature: ['', Validators.compose([
        Validators.required
      ])],
      minTemperature: ['', Validators.compose([
        Validators.required
      ])],
      humidity: ['', Validators.compose([
        Validators.required
      ])],
      precipitation: ['', Validators.compose([
        Validators.required
      ])],
      windSpeed: ['', Validators.compose([
        Validators.required
      ])]
    })
  }

  createWeather(){
    if(this.weather.valid){
      this.service.postMeteorologicalData(this.weather.value).subscribe({
        next:()=>{
          this.router.navigate(['/home'])
        },
        error:(error)=>{
          console.log(error);
        }
    })}
    
  }

}
