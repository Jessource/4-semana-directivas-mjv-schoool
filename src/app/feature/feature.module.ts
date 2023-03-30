import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { BlueDirective } from '../../app/shared/components/directives/blue.directive';
import { LojasComponent } from './lojas/lojas.component';




@NgModule({
  declarations: [
    ProductsComponent,
    BlueDirective,
    LojasComponent

  ],
  imports: [
    CommonModule,


  ],
  exports: [
    ProductsComponent,
    LojasComponent

  ]
})
export class FeatureModule { }
