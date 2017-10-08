import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap';
import { Servicio } from 'app/models/servicio';
import { PreciosService } from 'app/services/precios/precios.service';
import { AlertService } from 'app/services/alert/alert.service';

@Component({
  selector: 'app-modal-agregar-servicio',
  templateUrl: './modal-agregar-servicio.component.html',
  styleUrls: ['./modal-agregar-servicio.component.scss']
})
export class ModalAgregarServicioComponent implements OnInit {

  @ViewChild('modalAgregarServicio') modal: ModalDirective;

  public servicio: Servicio;
  public ultimoServicio: Servicio;

  constructor(
    private _preciosService: PreciosService,
    private _alertService: AlertService
  ) {
    this.servicio = new Servicio();
   }

  ngOnInit() {
  }

  show() {

    this._preciosService.obtenerUltimoServicioOrtodonciaAgregado().subscribe(
      (result: Servicio) => {
        this.ultimoServicio = result;

        console.log(this.ultimoServicio);
        console.log();

        this.modal.show();
      },
      error => {
        console.log(error);
        this._alertService.showAlert(true, 'Algo ha salido mal', 2);
      }
    );
  }

  onSubmit() {

    const codigoIncremento = (+this.ultimoServicio.codigo) + 1;
    this.servicio.codigo = ("000" + codigoIncremento).slice(-3);

    this._preciosService.agregarServicioOrtodoncia(this.servicio).subscribe(
      (result: Servicio) => {
        if ( result.id != null ) {
          this.modal.hide();
          this._alertService.showAlert(true, 'Servicio Agregado', 1);
        }
      },
      error => {
        console.log(error);
        this._alertService.showAlert(true, 'Algo ha salido mal', 2);
      }
    );
  }

}
