import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaExamenesComponent } from './lista-examenes/lista-examenes.component';
import { OrtodonciaRoutingModule } from 'app/components/ortodoncia/ortodoncia.routing';
import { SharedModule } from 'app/shared/shared.module';
import { PacienteService } from 'app/services/pacientes/paciente.service';
import { ExamenFacialComponent } from './examen-facial/examen-facial.component';
import { ExamenService } from 'app/services/examenes/examen.service';
import { TratamientoService } from 'app/services/tratamientos/tratamiento.service';
import { EditarExamenFacialComponent } from './editar-examen-facial/editar-examen-facial.component';

@NgModule({
  imports: [
    CommonModule,
    OrtodonciaRoutingModule,
    SharedModule
  ],
  providers: [PacienteService, ExamenService, TratamientoService],
  declarations: [ListaExamenesComponent, ExamenFacialComponent, EditarExamenFacialComponent]
})
export class OrtodonciaModule { }
