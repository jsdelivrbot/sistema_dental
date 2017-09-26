import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ListaComponent } from 'app/components/paciente/lista/lista.component';
import { CrearPacienteComponent } from 'app/components/paciente/crear-paciente/crear-paciente.component';
import { EditarPacienteComponent } from 'app/components/paciente/editar-paciente/editar-paciente.component';
import { MenuPacienteComponent } from 'app/components/paciente/menu-paciente/menu-paciente.component';

const routes: Routes = [
  { path: '', redirectTo: 'lista', pathMatch: 'full' },
  { path: '',
    children: [
      {path: 'lista', component: ListaComponent},
      {path: 'crear', component: CrearPacienteComponent},
      {path: 'editar/:id', component: EditarPacienteComponent},
      {path: ':id', component: MenuPacienteComponent},
      {path: ':id/ortodoncia', loadChildren: 'app/components/ortodoncia/ortodoncia.module#OrtodonciaModule'}
    ]
  }
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class PacienteRoutingModule { }
