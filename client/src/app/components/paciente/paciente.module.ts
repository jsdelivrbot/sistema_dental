import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaComponent } from './lista/lista.component';
import { PacienteRoutingModule } from 'app/components/paciente/paciente.routing';
import { SharedModule } from 'app/shared/shared.module';
import { CrearPacienteComponent } from './crear-paciente/crear-paciente.component';
import { EditarPacienteComponent } from './editar-paciente/editar-paciente.component';
import { MenuPacienteComponent } from './menu-paciente/menu-paciente.component';
import { NotificationsService } from 'angular2-notifications';

@NgModule({
  imports: [
    CommonModule,
    PacienteRoutingModule,
    SharedModule
  ],
  declarations: [
    ListaComponent,
    CrearPacienteComponent,
    EditarPacienteComponent,
    MenuPacienteComponent
  ]
})
export class PacienteModule { }
