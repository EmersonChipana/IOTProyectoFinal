
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticacionGuard } from './guards/authenticacion.guard';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SeleccionComponent } from './pages/seleccion/seleccion.component';
import { SecuenciasComponent } from './pages/secuencias/secuencias.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component : LoginComponent},
  { path: 'home', component: HomeComponent, canActivate: [AuthenticacionGuard] },
  { path: 'configuracion', component: SeleccionComponent, canActivate: [AuthenticacionGuard] },
  { path: 'secuencia', component: SecuenciasComponent, canActivate: [AuthenticacionGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}