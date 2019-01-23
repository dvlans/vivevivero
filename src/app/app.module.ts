import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Rutas
import {  APP_ROUTING} from './app.routes';


// Componentes
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { NavbarComponent } from './Components/shared/navbar/navbar.component';
import {ContactoComponent} from './Components/contacto/contacto.component';
import {FooterComponent} from './Components/footer/footer.component';
import {M2o2Component} from './Components/m2o2/m2o2.component';
import {ProyectosComponent} from './Components/proyectos/proyectos.component';
import {SomosComponent} from './Components/somos/somos.component';
import {TiendaComponent} from './Components/tienda/tienda.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ContactoComponent,
    FooterComponent,
    M2o2Component,
    ProyectosComponent,
    SomosComponent,
    TiendaComponent,
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
