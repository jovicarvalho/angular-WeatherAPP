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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ActualDayComponent,
    HeaderComponent,
    FooterComponent,
    SearchBarComponent,
    CreateMeteorologicalDataComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
