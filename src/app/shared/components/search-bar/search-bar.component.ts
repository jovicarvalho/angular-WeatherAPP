import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, ɵisListLikeIterable, Output, EventEmitter , HostListener } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { MeteorologicalData } from 'src/app/core/interfaces/IMeteorologicalData';
import { MeteorologicalDataService } from 'src/app/core/services/meteorological-data.service';
import { Subject, timer } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {


  constructor(
    private service: MeteorologicalDataService,
  ) {};
  
  
  ngOnInit(): void {
  }

  @Output() listaMeteorologicaldata: MeteorologicalData[] = [];
  
  @Output() actualDay = new EventEmitter<MeteorologicalData>();
  cityName:string = "";
  errorWasThrown:boolean = false;

  //buscarCidade(){
    //this.service.getByCity(this.cityName).subscribe(listaCidade=>{
      //this.today.emit(listaCidade)
    //})
  //}


  buscarDiaAtualNaCidade() {
    if (this.cityName.length > 3)
     this.service.getActualDayinCity(this.cityName).subscribe({
      next:(cidade) => {
        this.actualDay.emit(cidade);
        this.errorWasThrown = false;
      },
      error:(error) => {
        this.errorWasThrown = true;
      }}
    );
  }

  @Input() setIconLocationParameter:boolean = true;
  
  setIconLocation():string {
    this.setIconLocationParameter ? "iconLocation" : "";
    return ""
  }

}
