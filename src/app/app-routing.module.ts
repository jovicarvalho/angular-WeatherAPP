import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CreateMeteorologicalDataComponent } from './pages/create-meteorological-data/create-meteorological-data.component';
import { ListWeatherComponent } from './pages/list-weather/list-weather.component';

const routes: Routes = [
  {path:'',redirectTo:"home", pathMatch:"full"},
  {path:'home', component:HomeComponent},
  {path:'create',component:CreateMeteorologicalDataComponent},
  {path:'list',component:ListWeatherComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
