import { Component, Input, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { MeteorologicalData } from 'src/app/core/interfaces/IMeteorologicalData';
import { MeteorologicalDataService } from 'src/app/core/services/meteorological-data.service';

@Component({
  selector: 'app-list-weather',
  templateUrl: './list-weather.component.html',
  styleUrls: ['./list-weather.component.css']
})
export class ListWeatherComponent implements OnInit {


  listOfCitys:MeteorologicalData[] = [];
  
  pageNumber: number = 1;
  totalPages:number = 1;

  cityName:string="";

  constructor(
    private service: MeteorologicalDataService,
    private toastr: ToastrService
    ) { }
  skip:number = 0;

  ngOnInit(): void {
    this.service.getAll(this.skip).subscribe((pagenableList)=>{
      this.listOfCitys = pagenableList.weathers;
      this.totalPages = pagenableList.totalPages;
    })
  }

  buscarCidade(){
    this.service.getByCity(this.cityName).subscribe((listOfCitys)=>{
      this.listOfCitys = listOfCitys})
  
    if(this.cityName== "" ){
      this.service.getAll(this.skip).subscribe((listOfCitys)=>{
        this.listOfCitys = listOfCitys.weathers;
      })
    }
  }

  advance(){
    if(this.pageNumber < this.totalPages){
    this.skip++
    this.service.getAll(this.skip).subscribe((listOfCitys)=>{
      this.listOfCitys = listOfCitys.weathers;
      this.pageNumber++
    })}else if(this.pageNumber = this.totalPages){
      this.toastr.info("","Não há mais páginas disponíveis")
    }
  }

    
   

  recede(){
    if(this.pageNumber>1 && this.cityName== ""){  
    this.skip--
    this.pageNumber--
    this.service.getAll(this.skip).subscribe((listOfCitys)=>{
      this.listOfCitys = listOfCitys.weathers;
    })}else if(this.pageNumber>1 && this.cityName != ""){
      this.skip--
      this.pageNumber--
      this.service.getByCity(this.cityName).subscribe((listOfCitys)=>{
        this.listOfCitys = listOfCitys;
      })
    }else{
      this.toastr.info("Você já está na página 1", "Impossível Retroceder")
    }
  }

}
