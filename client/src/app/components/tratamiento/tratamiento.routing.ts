import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ListaTratamientoComponent } from 'app/components/tratamiento/lista-tratamiento/lista-tratamiento.component';
import { DetalleTratamientoComponent } from 'app/components/tratamiento/detalle-tratamiento/detalle-tratamiento.component';
import { CrearTratamientoComponent } from 'app/components/tratamiento/crear-tratamiento/crear-tratamiento.component';
import { PresupuestoOrtodonciaComponent } from 'app/components/tratamiento/presupuesto-ortodoncia/presupuesto-ortodoncia.component';

const routes: Routes = [
  { path: '', redirectTo: 'tratamientos', pathMatch: 'full' },
  { path: '',
    children: [
      {path: 'tratamientos', component: ListaTratamientoComponent},
      {path: 'tratamientos/crear', component: CrearTratamientoComponent},
      {path: 'tratamientos/:id', component: DetalleTratamientoComponent},
      {path: 'tratamientos/:id/presupuesto/ortodoncia', component: PresupuestoOrtodonciaComponent},
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
