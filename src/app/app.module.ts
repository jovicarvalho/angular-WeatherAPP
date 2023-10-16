import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ActualDayComponent } from './shared/components/meteorological/actual-day/actual-day.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { SearchBarComponent } from './shared/components/search-bar/search-bar.component';
import { MeteorologicalDataService } from './core/services/meteorological-data.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { CreateMeteorologicalDataComponent } from './pages/create-meteorological-data/create-meteorological-data.component';
import { ButtonComponent } from './shared/components/button/button.component';
import {ToastrModule} from "ngx-toastr";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListWeatherComponent } from './pages/list-weather/list-weather.component';
import { WeatherComponent } from './shared/components/meteorological/weather/weather.component';
import { DeleteWeatherComponent } from './shared/components/meteorological/delete-weather/delete-weather.component';
import { EditWeatherComponent } from './shared/components/meteorological/edit-weather/edit-weather.component';
import { SevenDaysListComponent } from './shared/components/meteorological/seven-days-list/seven-days-list.component';
import { WeatherHomeComponent } from './shared/components/meteorological/weather-home/weather-home.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ActualDayComponent,
    HeaderComponent,
    FooterComponent,
    SearchBarComponent,
    CreateMeteorologicalDataComponent,
    ButtonComponent,
    ListWeatherComponent,
    WeatherComponent,
    DeleteWeatherComponent,
    EditWeatherComponent,
    SevenDaysListComponent,
    WeatherHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
