import {Component, OnInit, ViewChild, Output, EventEmitter} from '@angular/core';
import {ModalDirective} from "ngx-bootstrap";
import {ServicioOdontologiaGeneral} from "../../../models/servicio-odontologia-general";
import {GlobalState} from "../../../app.state";
import {Observable} from "rxjs";
import {TratamientoService} from "../../../services/tratamientos/tratamiento.service";

@Component({
  selector: 'app-modal-tratamiento',
  templateUrl: './modal-tratamiento.component.html',
  styleUrls: ['./modal-tratamiento.component.scss']
})
export class ModalTratamientoComponent implements OnInit {

  @ViewChild('modalTratamiento') modal: ModalDirective;
  @Output() listaTratamientosSeleccionados: EventEmitter<any> = new EventEmitter(false);
  public servicioOdontologiaGeneral: ServicioOdontologiaGeneral;
  public cantidad: number;
  public idTratamientoSeleccionado: string;
  public listaTratamientos: Observable<any>;

  constructor(
    private _globalState: GlobalState,
    private _tratamientoService: TratamientoService

  ) {
    this.servicioOdontologiaGeneral = new ServicioOdontologiaGeneral();
  }

  ngOnInit() {
    this.servicioOdontologiaGeneral = new ServicioOdontologiaGeneral();
    this.getListaTratamientos();
    this.cantidad = 1;
    this.idTratamientoSeleccionado = "";
  }

  show() {
    this.servicioOdontologiaGeneral = new ServicioOdontologiaGeneral();
    this.getListaTratamientos();
    this.cantidad = 1;
    this.idTratamientoSeleccionado = "";
    this.modal.show();
  }

  getListaTratamientos() {
    this.listaTratamientos = this._tratamientoService.obtenerListadoTratamientosOdontologiaGeneral();
  }

  guardar() {
    let obj = {id: this.idTratamientoSeleccionado, cantidad: this.cantidad};
    this.listaTratamientosSeleccionados.emit(obj);
    this.hide();
  }

  hide() {
    this.modal.hide();
  }
}
