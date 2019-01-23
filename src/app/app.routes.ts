
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './Components/contacto/contacto.component';
import { SomosComponent } from './Components/somos/somos.component';
import { TiendaComponent } from './Components/tienda/tienda.component';
import { ProyectosComponent } from './Components/proyectos/proyectos.component';
import { HomeComponent } from './Components/home/home.component';
import { M2o2Component } from './Components/m2o2/m2o2.component';


const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'somos', component: SomosComponent },
  { path: 'tienda', component: TiendaComponent },
  { path: 'm2o2', component: M2o2Component },
  { path: 'proyectos', component: ProyectosComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
