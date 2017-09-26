import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ListaExamenesComponent } from 'app/components/ortodoncia/lista-examenes/lista-examenes.component';

const routes: Routes = [
  { path: '', redirectTo: 'lista-examenes', pathMatch: 'full' },
  { path: 'lista-examenes', component: ListaExamenesComponent },
  { path: 'examen-facial' },
  { path: 'examen-dental' },
  { path: 'relaciones-dentales' },
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class OrtodonciaRoutingModule { }
