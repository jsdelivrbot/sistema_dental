import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ExamenGeneralComponent} from "./examen-general/examen-general.component";
import {EditarExamenGeneralComponent} from "./editar-examen-general/editar-examen-general.component";

const routes: Routes = [
  { path: '', redirectTo: 'examen-general', pathMatch: 'full' },
  {path: 'examen-general', component: ExamenGeneralComponent},
  {path: 'examen-general/editar', component: EditarExamenGeneralComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OdontologiaGeneralRoutingModule { }
