import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaTratamientoComponent } from './lista-tratamiento/lista-tratamiento.component';
import { TratamientoRoutingModule } from 'app/components/tratamiento/tratamiento.routing';
import { SharedModule } from 'app/shared/shared.module';
import { PacienteService } from 'app/services/pacientes/paciente.service';
import { DetalleTratamientoComponent } from './detalle-tratamiento/detalle-tratamiento.component';

@NgModule({
  providers: [PacienteService],
  imports: [
    CommonModule,
    TratamientoRoutingModule,
    SharedModule
  ],
  declarations: [ListaTratamientoComponent, DetalleTratamientoComponent]
})
export class TratamientoModule { }
