import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RoutingModule } from './routing/routing.module';
import { LayoutComponent } from './components/layout/layout.component';
import { CarsComponent } from './components/cars/cars.component';
import { CarService } from './services/car.service';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    CarsComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule
  ],
  providers: [CarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
