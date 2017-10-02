import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaTratamientoComponent } from './lista-tratamiento/lista-tratamiento.component';
import { TratamientoRoutingModule } from 'app/components/tratamiento/tratamiento.routing';
import { SharedModule } from 'app/shared/shared.module';
import { PacienteService } from 'app/services/pacientes/paciente.service';
import { DetalleTratamientoComponent } from './detalle-tratamiento/detalle-tratamiento.component';
import { CrearTratamientoComponent } from './crear-tratamiento/crear-tratamiento.component';
import { EditarTratamientoComponent } from './editar-tratamiento/editar-tratamiento.component';
import { TratamientoService } from 'app/services/tratamientos/tratamiento.service';
import { PresupuestoOrtodonciaComponent } from './presupuesto-ortodoncia/presupuesto-ortodoncia.component';

@NgModule({
  providers: [PacienteService, TratamientoService],
  imports: [
    CommonModule,
    TratamientoRoutingModule,
    SharedModule
  ],
  declarations: [ListaTratamientoComponent, DetalleTratamientoComponent, CrearTratamientoComponent, EditarTratamientoComponent, PresupuestoOrtodonciaComponent]
})
export class TratamientoModule { }
