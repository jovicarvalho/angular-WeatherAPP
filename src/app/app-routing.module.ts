import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CreateMeteorologicalDataComponent } from './pages/create-meteorological-data/create-meteorological-data.component';
import { ListWeatherComponent } from './pages/list-weather/list-weather.component';
import { DeleteWeatherComponent } from './shared/components/meteorological/delete-weather/delete-weather.component';
import { EditWeatherComponent } from './shared/components/meteorological/edit-weather/edit-weather.component';

const routes: Routes = [
  {path:'',redirectTo:"home", pathMatch:"full"},
  {path:'home', component:HomeComponent},
  {path:'create',component:CreateMeteorologicalDataComponent},
  {path:'list',component:ListWeatherComponent},
  {path:`weathers/deleteWeather/:id`, component: DeleteWeatherComponent},
  {path:`weathers/editWeather/:id`, component: EditWeatherComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
