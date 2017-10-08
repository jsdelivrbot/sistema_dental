import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DashboardAdminComponent } from 'app/components/admin/dashboard-admin/dashboard-admin.component';
import { PreciosOrtodonciaComponent } from 'app/components/admin/precios-ortodoncia/precios-ortodoncia.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '',
    children: [
      {path: 'dashboard', component: DashboardAdminComponent},
      {path: 'precios-ortodoncia', component: PreciosOrtodonciaComponent}
    ]
  }
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class AdminRoutingModule { }
