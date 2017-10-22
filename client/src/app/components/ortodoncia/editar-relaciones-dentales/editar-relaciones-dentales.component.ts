import { Component, OnInit } from '@angular/core';
import {Paciente} from "../../../models/paciente";
import {RelacionesDentales} from "../../../models/relaciones-dentales";
import {ActivatedRoute, Router} from "@angular/router";
import {PacienteService} from "../../../services/pacientes/paciente.service";
import {ExamenService} from "../../../services/examenes/examen.service";
import {AlertService} from "../../../services/alert/alert.service";
import {TratamientoService} from "../../../services/tratamientos/tratamiento.service";

@Component({
  selector: 'app-editar-relaciones-dentales',
  templateUrl: './editar-relaciones-dentales.component.html',
  styleUrls: ['./editar-relaciones-dentales.component.scss']
})
export class EditarRelacionesDentalesComponent implements OnInit {

  public title = "Editar Relaciones Dentales";
  public cargando = true;
  public paciente: Paciente;
  public examen: RelacionesDentales;
  private id_paciente: string;
  private id_tratamiento: string;
  public max_select = new Array<number>(21);
  public smh = new Array<number>(21);
  public smv = new Array<number>(21);
  public ma = new Array<number>(11);
  public mc = new Array<number>(7);

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _pacienteService: PacienteService,
    private _tratamientoService: TratamientoService,
    private _examenService: ExamenService,
    private _alertService: AlertService,
    private _router: Router,
  ) {
    this.examen = new RelacionesDentales();
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
        this.obtenerExamen();
      }
    );
  }

  obtenerExamen() {
    this._tratamientoService.relacionesDentalesRealizado(this.id_tratamiento).subscribe(
      (result: RelacionesDentales) => {
        this.examen = result;
        this.cargando = false;
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

  // Editar el examen
  onSubmit() {
    this.examen.fecha_actualizacion = new Date();
    this._examenService.editarRelacionesDentales(this.examen).subscribe(
      (result: RelacionesDentales) => {
        if ( result.id != null ) {
          this._router.navigate(['../../'], {relativeTo: this._activatedRoute});
          this._alertService.showAlert(true,  'Relaciones Dentales Actualizado', 1);
        }
      },
      error => {
        console.log(error);
        this._alertService.showAlert(true, 'Algo ha salido mal', 2);
      }
    )
  }

}
