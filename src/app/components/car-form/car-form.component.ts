import { Component, OnInit } from '@angular/core';

import { CarService } from '../../services/car.service'
import { Car } from '../../shared/models/car.model';
import { Router } from '@angular/router';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.css']
})
export class CarFormComponent implements OnInit {

  numbers:Array<number> = Array(28).fill(0).map((e,i)=>i+1990);

  private newCar:Car = new Car();


  constructor(private carService: CarService,
              private router: Router,
              private route: ActivatedRoute
              )
  {

  }

  ngOnInit() {
  }
  
  addCar(car:Car) {

    this.carService.addCars(car);
    this.router.navigate(['/cars']);

  }

}
