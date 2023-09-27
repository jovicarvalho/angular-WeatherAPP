import { Component, Input, OnInit, ɵisListLikeIterable } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  constructor(
    private router: Router, private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  setIconLocation():string {
    const currentRoute = this.route.snapshot.routeConfig?.path;
    currentRoute == "http://localhost:60667/home"?  "iconLocation" : "";
    return ""
  }

}
