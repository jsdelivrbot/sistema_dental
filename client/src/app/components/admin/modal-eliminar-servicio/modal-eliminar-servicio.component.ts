import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap';
import { PreciosService } from 'app/services/precios/precios.service';
import { AlertService } from 'app/services/alert/alert.service';

@Component({
  selector: 'app-modal-eliminar-servicio',
  templateUrl: './modal-eliminar-servicio.component.html',
  styleUrls: ['./modal-eliminar-servicio.component.scss']
})
export class ModalEliminarServicioComponent implements OnInit {

  @ViewChild('modalEliminarServicio') modal: ModalDirective;

  private idServicio: string;

  constructor(
    private _preciosService: PreciosService,
    private _alertService: AlertService
  ) { }

  ngOnInit() {
  }

  show(idServicio: string) {
    this.idServicio = idServicio;
    this.modal.show();
  }

  onSubmit() {
    this._preciosService.eliminarServicioOrtodoncia(this.idServicio).subscribe(
      (result: any) => {
        if ( result.count > 0 ) {
          this.modal.hide();
          this._alertService.showAlert(true, 'Servicio Eliminado', 1);
        }
      },
      error => {
        console.log(error);
        this._alertService.showAlert(true, 'Algo ha salido mal', 2);
      }
    );
  }

}
