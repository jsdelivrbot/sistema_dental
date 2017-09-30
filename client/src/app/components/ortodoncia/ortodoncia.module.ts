import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaExamenesComponent } from './lista-examenes/lista-examenes.component';
import { OrtodonciaRoutingModule } from 'app/components/ortodoncia/ortodoncia.routing';
import { SharedModule } from 'app/shared/shared.module';
import { PacienteService } from 'app/services/pacientes/paciente.service';
import { ExamenFacialComponent } from './examen-facial/examen-facial.component';

@NgModule({
  imports: [
    CommonModule,
    OrtodonciaRoutingModule,
    SharedModule
  ],
  providers: [PacienteService],
  declarations: [ListaExamenesComponent, ExamenFacialComponent]
})
export class OrtodonciaModule { }
