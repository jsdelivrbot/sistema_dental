import {Component, OnInit, ViewChild} from '@angular/core';
import {ModalDirective} from "ngx-bootstrap";

@Component({
  selector: 'app-modal-examen-dental-asignar',
  templateUrl: './modal-examen-dental-asignar.component.html',
  styleUrls: ['./modal-examen-dental-asignar.component.scss']
})
export class ModalExamenDentalAsignarComponent implements OnInit {

  @ViewChild('modalAsignar') modal: ModalDirective;
  public diente: Array<string>;

  public opciones = [
    { id: 0, nombre: 'Ausente', marcado: false },
    { id: 1, nombre: 'Carie', marcado: false },
    { id: 2, nombre: 'Decalcificado', marcado: false },
    { id: 3, nombre: 'Extraido', marcado: false },
    { id: 4, nombre: 'Faceta', marcado: false },
    { id: 5, nombre: 'Forma', marcado: false },
    { id: 6, nombre: 'Impactado', marcado: false },
    { id: 7, nombre: 'Rotado', marcado: false },
    { id: 8, nombre: 'Supernumerario', marcado: false },
    { id: 9, nombre: 'Tamaño', marcado: false },
    { id: 10, nombre: 'PMS/LATS', marcado: false },
  ];

  constructor() {
    this.diente = [];
  }

  ngOnInit() {
  }

  show(diente: Array<string>) {
      this.diente = diente;
      this.modal.show();
  }

  onSubmit() {
    for ( let i = 0; i < this.opciones.length; i++ ) {
      if ( this.opciones[i].marcado ) {
        this.diente.push(this.opciones[i].nombre);
      }
    }

    this.modal.hide();
  }

}
