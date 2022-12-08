import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { CardComponent } from './components/card/card.component';
import { SeleccionComponent } from './pages/seleccion/seleccion.component';
import { IntegrantesComponent } from './components/integrantes/integrantes.component';
import { UserContainerComponent } from './components/user-container/user-container.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { SecuenciasComponent } from './pages/secuencias/secuencias.component';
import { Card2Component } from './components/card2/card2.component';
import { ModificarSecuenciaComponent } from './pages/modificar-secuencia/modificar-secuencia.component';
import { FormularioSecuenciaComponent } from './components/formulario-secuencia/formulario-secuencia.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    LoginComponent,
    CardComponent,
    SeleccionComponent,
    IntegrantesComponent,
    UserContainerComponent,
    FormularioComponent,
    SecuenciasComponent,
    Card2Component,
    ModificarSecuenciaComponent,
    FormularioSecuenciaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
