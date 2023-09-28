import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, ɵisListLikeIterable } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { MeteorologicalData } from 'src/app/core/interfaces/IMeteorologicalData';
import { MeteorologicalDataServiceService } from 'src/app/core/services/meteorological-data-service.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {


  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute,
  ) { }
  

  listaMeteorologicaldata: MeteorologicalData[] = [];
  cityName:string = "";



  ngOnInit(): void {
  }

  setIconLocation():string {
    const currentRoute = this.route.snapshot.routeConfig?.path;
    currentRoute == "http://localhost:60667/home"?  "iconLocation" : "";
    return ""
  }

}
