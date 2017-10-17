import { Component, OnInit } from '@angular/core';

import { CarService } from '../../services/car.service'
import { Car } from '../../shared/models/car.model'

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  cars:Array<Car>;

  constructor(private carService: CarService) {

    this.cars = carService.getCars();
    
  }

  ngOnInit() {
  }

}
