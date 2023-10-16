import { Component, Input, OnInit } from '@angular/core';
import { MeteorologicalData } from 'src/app/core/interfaces/IMeteorologicalData';

@Component({
  selector: 'app-seven-days-list',
  templateUrl: './seven-days-list.component.html',
  styleUrls: ['./seven-days-list.component.css']
})
export class SevenDaysListComponent implements OnInit {

  @Input() sevenDays: MeteorologicalData[]= [];
  constructor() { }

  ngOnInit(): void {
  }

  recieveSevenDays(respostafilho:MeteorologicalData[]){
    this.sevenDays = respostafilho;
  }

  listar(){
    console.log(this.sevenDays);
  }

}
