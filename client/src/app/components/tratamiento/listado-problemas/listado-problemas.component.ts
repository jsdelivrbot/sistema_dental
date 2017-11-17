import { Component, OnInit } from '@angular/core';
import {TratamientoService} from "../../../services/tratamientos/tratamiento.service";
import {ActivatedRoute, Router} from "@angular/router";
import {PacienteService} from "../../../services/pacientes/paciente.service";
import {AlertService} from "../../../services/alert/alert.service";
import {Paciente} from "../../../models/paciente";
import {Tratamiento} from "../../../models/tratamiento";
import {ListadoProblemas} from "../../../models/listado-problemas";

@Component({
  selector: 'app-listado-problemas',
  templateUrl: './listado-problemas.component.html',
  styleUrls: ['./listado-problemas.component.scss']
})
export class ListadoProblemasComponent implements OnInit {

  public title = "Listado de problemas";
  public cargando = true;
  private id_paciente: string;
  private id_tratamiento: string;
  public paciente: Paciente;
  public tratamiento: Tratamiento;
  public listadoProblemas: ListadoProblemas;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _pacienteService: PacienteService,
    private _tratamientoService: TratamientoService,
    private _alertService: AlertService,
    private _router: Router,
  ) {
    this.listadoProblemas = new ListadoProblemas();
  }

  ngOnInit() {
    this._activatedRoute.parent.params.subscribe(
      params => {
        this.id_paciente = params['id'];
        this.obtenerPaciente();
      }
    );
    this._activatedRoute.params.subscribe(
      params => {
        this.id_tratamiento = params['id'];
        this.obtenerTratamiento();
      }
    );
  }

  // Obtiene al paciente desde el servicio
  obtenerPaciente() {
    this._pacienteService.getPaciente(this.id_paciente).subscribe(
      (value: Paciente) => {
        if (value.id != null) {
          this.paciente = value;
        }
      },
      error => {
        console.log(error);
        this._alertService.showAlert(true, 'Algo ha salido mal', 2);
      }
    );
  }

  //obtiene el tratamiento actual
  obtenerTratamiento() {
    this._tratamientoService.obtenerTratamiento(this.id_tratamiento).subscribe(
      (result: Tratamiento) => {
        this.tratamiento = result;
        this.cargando = false;
      },
      error => {
        console.log(error);
        this._alertService.showAlert(true, 'Algo ha salido mal', 2);
      }
    );
  }

  onSubmit() {
    this.listadoProblemas.fecha_actualizacion = new Date();
    this.listadoProblemas.tratamientoId = this.id_tratamiento;

    this._tratamientoService.guardarListadoDeProblemas(this.listadoProblemas).subscribe(
      (result: ListadoProblemas) => {
        if (result.id != null) {
          this._alertService.showAlert(true, 'Listado de problemas actualizado', 1);
          this._router.navigate(['../'], {relativeTo: this._activatedRoute});
        }
      },
      error => {
        console.log(error);
        this._alertService.showAlert(true, 'Algo ha salido mal', 2);
      }
    );
  }

}
