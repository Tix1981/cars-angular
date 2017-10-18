import { Injectable } from '@angular/core';
import { Car } from '../shared/models/car.model';

@Injectable()
export class CarService {

  cars:Array<Car> = [];

  constructor() { }

  getCars () {

    return this.cars;

  }

  addCars(newCar) {
    let idCount = this.cars.length + 1;
    this.cars.push(new Car(idCount, newCar.mark, newCar.model, newCar.year, newCar.maxSpeed, newCar.isAutomatic, newCar.engine, newCar.numberOfDoors));

    idCount++;
  }

}
