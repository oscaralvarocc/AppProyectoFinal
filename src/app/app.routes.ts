import { Routes } from '@angular/router';
import { AcercaDeComponent } from './pages/acerca-de/acerca-de.component';
import { InicioComponent } from './pages/inicio/inicio.component';

export const routes: Routes = [
    {path: `acerca-de`,component:AcercaDeComponent},
    {path: `inicio`,component:InicioComponent}
];
