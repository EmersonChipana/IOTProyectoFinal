
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticacionGuard } from './guards/authenticacion.guard';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SeleccionComponent } from './pages/seleccion/seleccion.component';
import { SecuenciasComponent } from './pages/secuencias/secuencias.component';
import { ModificarSecuenciaComponent } from './pages/modificar-secuencia/modificar-secuencia.component';
import { ContactoComponent } from './pages/contacto/contacto.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component : LoginComponent},
  { path: 'home', component: HomeComponent, canActivate: [AuthenticacionGuard] },
  { path: 'configuracion/:id/:nombre', component: SeleccionComponent, canActivate: [AuthenticacionGuard] },
  { path: 'secuencia', component: SecuenciasComponent, canActivate: [AuthenticacionGuard] },
  { path: 'modificarSecuencia/:id', component: ModificarSecuenciaComponent, canActivate: [AuthenticacionGuard] },
  { path: 'contacto', component: ContactoComponent, canActivate: [AuthenticacionGuard]},
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}