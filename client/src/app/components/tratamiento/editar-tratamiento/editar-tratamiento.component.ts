import {Component, OnInit} from '@angular/core';
import {PlanTratamiento} from "../../../models/plan-tratamiento";
import {Tratamiento} from "../../../models/tratamiento";
import {Paciente} from "../../../models/paciente";
import {ActivatedRoute, Router} from "@angular/router";
import {PacienteService} from "../../../services/pacientes/paciente.service";
import {TratamientoService} from "../../../services/tratamientos/tratamiento.service";
import {AlertService} from "../../../services/alert/alert.service";

@Component({
  selector: 'app-editar-tratamiento',
  templateUrl: './editar-tratamiento.component.html',
  styleUrls: ['./editar-tratamiento.component.scss']
})
export class EditarTratamientoComponent implements OnInit {

  constructor() {

  }

  ngOnInit() {

  }

}
