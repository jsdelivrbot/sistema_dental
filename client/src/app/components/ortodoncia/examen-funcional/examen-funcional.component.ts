import { Component, OnInit } from '@angular/core';
import {Paciente} from "../../../models/paciente";
import {ActivatedRoute, Router} from "@angular/router";
import {PacienteService} from "../../../services/pacientes/paciente.service";
import {ExamenService} from "../../../services/examenes/examen.service";
import {AlertService} from "../../../services/alert/alert.service";

@Component({
  selector: 'app-examen-funcional',
  templateUrl: './examen-funcional.component.html',
  styleUrls: ['./examen-funcional.component.scss']
})
export class ExamenFuncionalComponent implements OnInit {

  public title = "Exámen Funcional";
  public cargando = true;
  public paciente: Paciente;
  public examen: any;
  private id_paciente: string;
  private id_tratamiento: string;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _pacienteService: PacienteService,
    private _examenService: ExamenService,
    private _alertService: AlertService,
    private _router: Router,
  ) { }

  ngOnInit() {
    // id paciente
    this._activatedRoute.parent.parent.params.subscribe(
      params => {
        this.id_paciente = params['id'];
        this.obtenerDatosPaciente();
      }
    );

    // id tratamiento
    this._activatedRoute.parent.params.subscribe(
      params => {
        this.id_tratamiento = params['id'];
      }
    );
  }

  obtenerDatosPaciente() {
    this._pacienteService.getPaciente(this.id_paciente).subscribe(
      (value: Paciente) => {
        if ( value.id != null ) {
          this.paciente = value;
          this.cargando = false;
        }
      }
    )
  }

  // guardar examen
  onSubmit() {

  }

}
