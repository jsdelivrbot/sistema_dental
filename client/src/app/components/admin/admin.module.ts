import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'app/shared/shared.module';
import { AdminRoutingModule } from 'app/components/admin/admin.routing';
import { DashboardAdminComponent } from 'app/components/admin/dashboard-admin/dashboard-admin.component';

@NgModule({
  providers: [],
  imports: [
    CommonModule,
    SharedModule,
    AdminRoutingModule
  ],
  declarations: [
    DashboardAdminComponent
  ]
})
export class AdminModule { }
