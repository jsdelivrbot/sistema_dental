import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap';
import { Servicio } from 'app/models/servicio';
import { PreciosService } from 'app/services/precios/precios.service';
import { AlertService } from 'app/services/alert/alert.service';

@Component({
  selector: 'app-modal-editar-servicio',
  templateUrl: './modal-editar-servicio.component.html',
  styleUrls: ['./modal-editar-servicio.component.scss']
})
export class ModalEditarServicioComponent implements OnInit {

  @ViewChild('modalEditarServicio') modal: ModalDirective;

  public servicio: Servicio;

  constructor(
    private _preciosService: PreciosService,
    private _alertService: AlertService
  ) {
    this.servicio = new Servicio();
  }

  ngOnInit() {
  }

  show(servicio: Servicio) {
    this.servicio = servicio;
    this.modal.show();
  }

  onSubmit() {
    this._preciosService.editarServicioOrtodoncia(this.servicio).subscribe(
      (result: Servicio) => {
        if ( result.id != null ) {
          this.modal.hide();
          this._alertService.showAlert(true, 'Servicio Editado', 1);
        }
      },
      error => {
        console.log(error);
        this._alertService.showAlert(true, 'Algo ha salido mal', 2);
      }
    );
  }
}
