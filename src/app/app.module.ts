import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

import { MaterialModule } from './material/material.module';
import { HomeComponent } from './pages/home/home.component';
import { DoctorComponent } from './pages/doctor/doctor.component';
import { PacienteComponent } from './pages/paciente/paciente.component';
import { MedicamentoComponent } from './pages/medicamento/medicamento.component';
import { FichamedicaComponent } from './pages/fichamedica/fichamedica.component';
import { RecetaComponent } from './pages/fichamedica/receta/receta.component';
import { DoctortecleoComponent } from './pages/doctor/doctortecleo/doctortecleo.component';
import { PacientetecleoComponent } from './pages/paciente/pacientetecleo/pacientetecleo.component';
import { MedicamentotecleoComponent } from './pages/medicamento/medicamentotecleo/medicamentotecleo.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DoctorComponent,
    PacienteComponent,
    MedicamentoComponent,
    FichamedicaComponent,
    RecetaComponent,
    DoctortecleoComponent,
    PacientetecleoComponent,
    MedicamentotecleoComponent
  ],
  imports: [
    MaterialModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
