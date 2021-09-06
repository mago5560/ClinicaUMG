import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorComponent } from './pages/doctor/doctor.component';
import { FichamedicaComponent } from './pages/fichamedica/fichamedica.component';
import { HomeComponent } from './pages/home/home.component';
import { MedicamentoComponent } from './pages/medicamento/medicamento.component';
import { PacienteComponent } from './pages/paciente/paciente.component';

const routes: Routes = [
  {path: 'doctor',component:DoctorComponent},
  {path: 'paciente',component:PacienteComponent},
  {path: 'medicamento',component:MedicamentoComponent},
  {path: 'fichamedica',component:FichamedicaComponent},
  {path: 'home',component:HomeComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ relativeLinkResolution: 'legacy'})],
  exports: [RouterModule]
})

export class AppRoutingModule { }
