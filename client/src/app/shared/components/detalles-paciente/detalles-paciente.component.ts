import { Component, OnInit, Input } from '@angular/core';
import { Paciente } from 'app/models/paciente';
import {Tratamiento} from "../../../models/tratamiento";

@Component({
  selector: 'app-detalles-paciente',
  templateUrl: './detalles-paciente.component.html',
  styleUrls: ['./detalles-paciente.component.scss']
})
export class DetallesPacienteComponent implements OnInit {

  @Input('paciente') paciente: Paciente;
  @Input('tratamiento') tratamiento: Tratamiento;

  constructor() { }

  ngOnInit() {
  }

}
