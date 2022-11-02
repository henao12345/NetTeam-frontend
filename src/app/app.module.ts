import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonaComponent } from './persona/persona.component';
import { MascotaComponent } from './mascota/mascota.component';
import { VeterinarioComponent } from './veterinario/veterinario.component';
import { MedicamentoComponent } from './medicamento/medicamento.component';
import { HistoriaClinicaComponent } from './historia-clinica/historia-clinica.component';
import { AgendamientoComponent } from './agendamiento/agendamiento.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonaComponent,
    MascotaComponent,
    VeterinarioComponent,
    MedicamentoComponent,
    HistoriaClinicaComponent,
    AgendamientoComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
