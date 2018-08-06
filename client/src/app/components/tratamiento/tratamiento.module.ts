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
import { PreciosService } from 'app/services/precios/precios.service';
import {UtilService} from "../../services/util/util.service";
import { ListadoProblemasComponent } from './listado-problemas/listado-problemas.component';
import { EditarListadoProblemasComponent } from './editar-listado-problemas/editar-listado-problemas.component';
import { PlanTratamientoComponent } from './plan-tratamiento/plan-tratamiento.component';
import { EditarPlanTratamientoComponent } from './editar-plan-tratamiento/editar-plan-tratamiento.component';

@NgModule({
  providers: [PacienteService, TratamientoService, PreciosService, UtilService],
  imports: [
    CommonModule,
    TratamientoRoutingModule,
    SharedModule
  ],
  declarations: [ListaTratamientoComponent, DetalleTratamientoComponent, CrearTratamientoComponent, EditarTratamientoComponent, PresupuestoOrtodonciaComponent, ListadoProblemasComponent, EditarListadoProblemasComponent, PlanTratamientoComponent, EditarPlanTratamientoComponent]
})
export class TratamientoModule { }
