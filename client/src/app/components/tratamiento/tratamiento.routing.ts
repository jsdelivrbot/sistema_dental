import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ListaTratamientoComponent } from 'app/components/tratamiento/lista-tratamiento/lista-tratamiento.component';
import { DetalleTratamientoComponent } from 'app/components/tratamiento/detalle-tratamiento/detalle-tratamiento.component';
import { CrearTratamientoComponent } from 'app/components/tratamiento/crear-tratamiento/crear-tratamiento.component';
import { PresupuestoOrtodonciaComponent } from 'app/components/tratamiento/presupuesto-ortodoncia/presupuesto-ortodoncia.component';
import {ListadoProblemasComponent} from "./listado-problemas/listado-problemas.component";
import {EditarListadoProblemasComponent} from "./editar-listado-problemas/editar-listado-problemas.component";
import {PlanTratamientoComponent} from "./plan-tratamiento/plan-tratamiento.component";
import {EditarPlanTratamientoComponent} from "./editar-plan-tratamiento/editar-plan-tratamiento.component";

const routes: Routes = [
  { path: '', redirectTo: 'tratamientos', pathMatch: 'full' },
  { path: '',
    children: [
      {path: 'tratamientos', component: ListaTratamientoComponent},
      {path: 'tratamientos/crear', component: CrearTratamientoComponent},
      {path: 'tratamientos/:id', component: DetalleTratamientoComponent},
      {path: 'tratamientos/:id/presupuesto/ortodoncia', component: PresupuestoOrtodonciaComponent},
      {path: 'tratamientos/:id/listado-de-problemas', component: ListadoProblemasComponent},
      {path: 'tratamientos/:id/listado-de-problemas/edit', component: EditarListadoProblemasComponent},
      {path: 'tratamientos/:id/plan-tratamiento', component: PlanTratamientoComponent},
      {path: 'tratamientos/:id/plan-tratamiento/edit', component: EditarPlanTratamientoComponent},
      {
        path: 'tratamientos/:id/examenes/ortodoncia',
        loadChildren: 'app/components/ortodoncia/ortodoncia.module#OrtodonciaModule'
      }
    ]
  }
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class TratamientoRoutingModule { }
