import { Injectable } from '@angular/core';
import { Car } from '../shared/models/car.model';

@Injectable()
export class CarService {

  cars:Array<Car> = [
    new Car(1, 'Fiat', 'Marea', 2002, 140, false, 'fiat-eng', 5),
    new Car(2, 'Mercedes', '300', 2012, 200, true, 'mercedes-benz-eng', 5),
    new Car(3, 'Peugeot', '307', 2004, 160, true, 'peugeot-eng', 3),
    new Car(4, 'Fiat', 'Bravo', 1999, 100, false, 'fiat-eng', 3)
  ];

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
