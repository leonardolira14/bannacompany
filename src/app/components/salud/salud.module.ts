import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SaludComponent } from './salud.component';



@NgModule({
  declarations: [
    SaludComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    SaludComponent
  ]
})
export class SaludModule { }
