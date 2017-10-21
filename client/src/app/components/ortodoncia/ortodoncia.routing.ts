import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ListaExamenesComponent } from 'app/components/ortodoncia/lista-examenes/lista-examenes.component';
import { ExamenFacialComponent } from 'app/components/ortodoncia/examen-facial/examen-facial.component';
import { EditarExamenFacialComponent } from 'app/components/ortodoncia/editar-examen-facial/editar-examen-facial.component';
import {ExamenFuncionalComponent} from "./examen-funcional/examen-funcional.component";
import {EditarExamenFuncionalComponent} from "./editar-examen-funcional/editar-examen-funcional.component";
import {ExamenDentalComponent} from "./examen-dental/examen-dental.component";
import {EditarExamenDentalComponent} from "./editar-examen-dental/editar-examen-dental.component";

const routes: Routes = [
  { path: '', redirectTo: 'lista-examenes', pathMatch: 'full' },
  { path: 'lista-examenes', component: ListaExamenesComponent },
  { path: 'examen-facial', component: ExamenFacialComponent },
  { path: 'examen-facial/editar', component: EditarExamenFacialComponent },
  { path: 'examen-funcional', component: ExamenFuncionalComponent },
  { path: 'examen-funcional/editar', component: EditarExamenFuncionalComponent },
  { path: 'examen-dental', component: ExamenDentalComponent },
  { path: 'examen-dental/editar', component: EditarExamenDentalComponent },
  { path: 'relaciones-dentales' },
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class OrtodonciaRoutingModule { }
