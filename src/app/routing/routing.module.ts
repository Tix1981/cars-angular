import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { CarsComponent } from '../components/cars/cars.component';
import { LayoutComponent } from '../components/layout/layout.component';


const appRoutes:Routes = [
    {
      path: 'cars',
      component: CarsComponent
    },
    {
      path: '',
      redirectTo: 'cars',
      pathMatch: 'full'
    }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRoutes
    ),
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }
