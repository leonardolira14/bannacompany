import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProtectComponent } from './protect.component';



@NgModule({
  declarations: [
    ProtectComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ProtectComponent
  ]
})
export class ProtectModule { }
