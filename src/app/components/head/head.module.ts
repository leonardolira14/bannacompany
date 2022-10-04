import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadComponent } from './head.component';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap'

@NgModule({
  declarations: [
    HeadComponent
  ],
  imports: [
    CommonModule,
    NgbCarouselModule
  ],
  exports:[
    HeadComponent
  ]
})
export class HeadModule { }
