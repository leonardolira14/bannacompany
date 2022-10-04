import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BeneficiosComponent } from './beneficios.component';



@NgModule({
  declarations: [
    BeneficiosComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    BeneficiosComponent
  ]
})
export class BeneficiosModule { }
