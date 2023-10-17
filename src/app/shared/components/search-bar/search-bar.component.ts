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

  @Output() sevenDays = new EventEmitter<MeteorologicalData[]>();

  cityName:string = "";
  errorWasThrown:boolean = false;
  errorSevenDays:boolean=false

  searchActualDayInCity() {
     this.service.getActualDayinCity(this.cityName).subscribe({
      next:(city) => {
        this.actualDay.emit(city);
        this.errorWasThrown = false;
      },
      error:(error) => {
        this.errorWasThrown = true;
      }}
    );
  }

  searchSevenDays() {
     this.service.getWeekInCity(this.cityName).subscribe({
      next:(citys) => {
        this.sevenDays.emit(citys);
        this.errorSevenDays = false;
      },
      error:(error) => {
        this.errorSevenDays = true;
      }}
    );
  }
  
  search(){
    if (this.cityName.length > 3){
      this.searchSevenDays();
      this.searchActualDayInCity();
    }
  }

  @Input() setIconLocationParameter:boolean = true;
  
  setIconLocation():string {
    this.setIconLocationParameter ? "iconLocation" : "";
    return ""
  }

}
