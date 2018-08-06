import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from 'app/layout/layout.component';

const routes: Routes = [
	{ path: '', loadChildren: './layout/layout.module#LayoutModule' },
	/*{
		path: '',
		component: LayoutComponent,
		children: [
			{ path: 'pacientes', loadChildren: './components/paciente/paciente.module#PacienteModule' }
		]
	 }*/
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
