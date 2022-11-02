import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgendamientoComponent } from './agendamiento/agendamiento.component';
import { HistoriaClinicaComponent } from './historia-clinica/historia-clinica.component';
import { HomeComponent } from './home/home.component';
import { MascotaComponent } from './mascota/mascota.component';
import { MedicamentoComponent } from './medicamento/medicamento.component';
import { PersonaComponent } from './persona/persona.component';
import { VeterinarioComponent } from './veterinario/veterinario.component';

const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"agendamiento",component:AgendamientoComponent},
  {path:"historia-clinica",component:HistoriaClinicaComponent},
  {path:"mascota",component:MascotaComponent},
  {path:"medicamento",component:MedicamentoComponent},
  {path:"persona",component:PersonaComponent},
  {path:"veterinario",component:VeterinarioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
