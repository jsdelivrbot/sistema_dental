import { Routes, RouterModule } from "@angular/router";
import { LayoutComponent } from "./layout.component";
const LAYOUT_ROUTES: Routes = [
	{
		path: "",
		component: LayoutComponent,
		children: [
			{ path: '', redirectTo: 'pacientes', pathMatch: 'full' },
			{ path: 'pacientes', loadChildren: 'app/components/paciente/paciente.module#PacienteModule' }
		]
	},

	// 404 Page Not Found
];

export const LayoutRoutes = RouterModule.forChild(LAYOUT_ROUTES);
