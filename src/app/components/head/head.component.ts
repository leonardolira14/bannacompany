import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bannacompany-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.scss']
})
export class HeadComponent implements OnInit {
  images = ['1.jpg','2.jpg','3.jpg'].map(item=>`assets/img/carrucel/${item}`)

  constructor() { }

  ngOnInit(): void {
  }

}
