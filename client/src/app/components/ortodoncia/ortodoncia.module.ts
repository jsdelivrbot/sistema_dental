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
import { PreciosService } from 'app/services/precios/precios.service';
import { ExamenFuncionalComponent } from './examen-funcional/examen-funcional.component';
import { EditarExamenFuncionalComponent } from './editar-examen-funcional/editar-examen-funcional.component';
import { ExamenDentalComponent } from './examen-dental/examen-dental.component';
import { EditarExamenDentalComponent } from './editar-examen-dental/editar-examen-dental.component';
import { ModalExamenDentalAsignarComponent } from './modal-examen-dental-asignar/modal-examen-dental-asignar.component';

@NgModule({
  imports: [
    CommonModule,
    OrtodonciaRoutingModule,
    SharedModule
  ],
  providers: [PacienteService, ExamenService, TratamientoService, PreciosService],
  declarations: [ListaExamenesComponent, ExamenFacialComponent, EditarExamenFacialComponent, ExamenFuncionalComponent, EditarExamenFuncionalComponent, ExamenDentalComponent, EditarExamenDentalComponent, ModalExamenDentalAsignarComponent]
})
export class OrtodonciaModule { }
