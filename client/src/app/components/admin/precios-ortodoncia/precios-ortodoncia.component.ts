import { Component, OnInit, ViewChild } from '@angular/core';
import { PreciosService } from 'app/services/precios/precios.service';
import { Servicio } from 'app/models/servicio';
import { ModalEditarServicioComponent } from 'app/components/admin/modal-editar-servicio/modal-editar-servicio.component';
import { ModalEliminarServicioComponent } from 'app/components/admin/modal-eliminar-servicio/modal-eliminar-servicio.component';

@Component({
  selector: 'app-precios-ortodoncia',
  templateUrl: './precios-ortodoncia.component.html',
  styleUrls: ['./precios-ortodoncia.component.scss']
})
export class PreciosOrtodonciaComponent implements OnInit {

  public title = 'Precios Ortodoncia';
  public cargando = true;
  public serviciosOrtodoncia = [];

  @ViewChild('modalEditarServicio') modalEditarServicio: ModalEditarServicioComponent;
  @ViewChild('modalEliminarServicio') modalEliminarServicio: ModalEliminarServicioComponent;

  constructor(
    private _preciosService: PreciosService
  ) { }

  ngOnInit() {

    this._preciosService.getServiciosOrtodoncia().subscribe(
      (result: Array<Servicio>) => {
        this.serviciosOrtodoncia = result;
        this.cargando = false;
      }
    );
  }

  editarServicio(servicio: Servicio) {
    this.modalEditarServicio.show(servicio);
  }

  eliminarServicio(idServicio: string) {
    this.modalEliminarServicio.show(idServicio);
  }

}
