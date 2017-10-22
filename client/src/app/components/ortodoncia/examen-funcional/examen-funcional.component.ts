import { Component, OnInit } from '@angular/core';
import {Paciente} from "../../../models/paciente";
import {ActivatedRoute, Router} from "@angular/router";
import {PacienteService} from "../../../services/pacientes/paciente.service";
import {ExamenService} from "../../../services/examenes/examen.service";
import {AlertService} from "../../../services/alert/alert.service";
import {ExamenFuncional} from "../../../models/examen-funcional";

@Component({
  selector: 'app-examen-funcional',
  templateUrl: './examen-funcional.component.html',
  styleUrls: ['./examen-funcional.component.scss']
})
export class ExamenFuncionalComponent implements OnInit {

  public title = "Exámen Funcional";
  public cargando = true;
  public paciente: Paciente;
  public examen: ExamenFuncional;
  private id_paciente: string;
  private id_tratamiento: string;
  public apertura = new Array<number>(71);
  public laterales = new Array<number>(21);
  public prostrusion = new Array<number>(14);

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _pacienteService: PacienteService,
    private _examenService: ExamenService,
    private _alertService: AlertService,
    private _router: Router,
  ) {
    this.examen = new ExamenFuncional();
  }

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
    this.examen.fecha_realizacion = new Date();
    this.examen.fecha_actualizacion = new Date();
    this._examenService.guardarExamenFuncional(this.examen, this.id_tratamiento).subscribe(
      (result: any) => {
        if ( result.id != null ) {
          this._router.navigate(['../lista-examenes'], {relativeTo: this._activatedRoute});
          this._alertService.showAlert(true, "Exámen Funcional Creado", 1);
        }
      },
      error => {
        console.log(error);
        this._alertService.showAlert(true, 'Algo ha salido mal', 2);
      }
    )
  }

}
