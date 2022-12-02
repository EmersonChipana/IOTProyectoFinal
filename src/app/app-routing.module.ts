
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SeleccionComponent } from './pages/seleccion/seleccion.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {path : 'login',component : LoginComponent},
  { path: 'seleccion',component: SeleccionComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }