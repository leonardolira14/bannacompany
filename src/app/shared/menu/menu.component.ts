import { Component, OnInit,OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { MenuService } from '../../core/services/menu.service';

@Component({
  selector: 'bannacompany-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit,OnDestroy {
  subscriptions: Array<Subscription> = [];
  menuOptions:Array<any>  = [];
  constructor(
    private menuService:MenuService
  ) { }

  ngOnInit(): void {
    this.getListMenu()
  }

  // funcion para obtener las opcoiones del menu
  getListMenu(){
    this.subscriptions.push(
      this.menuService.readOptionMenu().subscribe((data:any)=>{
        this.menuOptions = data;
      })
    )

  }

  ngOnDestroy() {
    if (this.subscriptions) {
      this.subscriptions.forEach((sub: Subscription) => {
        sub.unsubscribe();
      });
    }
  }
}
