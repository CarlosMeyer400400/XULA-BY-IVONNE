import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { AcercaComponent } from './pages/acerca/acerca.component';
import { SucursalComponent } from './pages/sucursal/sucursal.component';
import { IvonnePradoComponent } from './pages/ivonne-prado/ivonne-prado.component';
import { RedesSocialesComponent } from './pages/redes-sociales/redes-sociales.component';
import { AgendarCitaComponent } from './pages/agendar-cita/agendar-cita.component';
import { TrabajosComponent } from './pages/trabajos/trabajos.component';

export const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent },
  { path: 'trabajos', component: TrabajosComponent },
  { path: 'acerca', component: AcercaComponent },
  { path: 'sucursal', component: SucursalComponent },
  { path: 'ivonne-prado', component: IvonnePradoComponent },
  { path: 'redes-sociales', component: RedesSocialesComponent },
  { path: 'agendar-cita', component: AgendarCitaComponent },
  { path: '**', redirectTo: 'inicio' }
];
