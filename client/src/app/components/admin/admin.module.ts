import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'app/shared/shared.module';
import { AdminRoutingModule } from 'app/components/admin/admin.routing';
import { DashboardAdminComponent } from 'app/components/admin/dashboard-admin/dashboard-admin.component';
import { PreciosOrtodonciaComponent } from './precios-ortodoncia/precios-ortodoncia.component';
import { PreciosService } from 'app/services/precios/precios.service';
import { ModalAgregarServicioComponent } from './modal-agregar-servicio/modal-agregar-servicio.component';
import { ModalEditarServicioComponent } from './modal-editar-servicio/modal-editar-servicio.component';
import { ModalEliminarServicioComponent } from './modal-eliminar-servicio/modal-eliminar-servicio.component';
import { AlertService } from 'app/services/alert/alert.service';

@NgModule({
  providers: [
    PreciosService
  ],
  imports: [
    CommonModule,
    SharedModule,
    AdminRoutingModule
  ],
  declarations: [
    DashboardAdminComponent,
    PreciosOrtodonciaComponent,
    ModalAgregarServicioComponent,
    ModalEditarServicioComponent,
    ModalEliminarServicioComponent
  ]
})
export class AdminModule { }
