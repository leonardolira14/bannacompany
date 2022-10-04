import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuModule } from './shared/menu/menu.module';
import { HttpClientModule } from '@angular/common/http';
import { HeadModule } from './components/head/head.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BeneficiosModule } from './components/beneficios/beneficios.module';
import { ProtectModule } from './components/protect/protect.module';
import { SaludModule } from './components/salud/salud.module';
import { FooterModule } from './shared/footer/footer.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenuModule,
    HttpClientModule,
    HeadModule,
    NgbModule,
    BeneficiosModule,
    ProtectModule,
    SaludModule,
    FooterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
