import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ListaExamenesComponent } from 'app/components/ortodoncia/lista-examenes/lista-examenes.component';
import { ExamenFacialComponent } from 'app/components/ortodoncia/examen-facial/examen-facial.component';
import { EditarExamenFacialComponent } from 'app/components/ortodoncia/editar-examen-facial/editar-examen-facial.component';

const routes: Routes = [
  { path: '', redirectTo: 'lista-examenes', pathMatch: 'full' },
  { path: 'lista-examenes', component: ListaExamenesComponent },
  { path: 'examen-facial', component: ExamenFacialComponent },
  { path: 'examen-facial/editar', component: EditarExamenFacialComponent },
  { path: 'examen-dental' },
  { path: 'relaciones-dentales' },
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class OrtodonciaRoutingModule { }
