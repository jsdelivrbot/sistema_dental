import {Component, OnInit} from '@angular/core';
import {Paciente} from "../../../models/paciente";
import {ExamenFuncional} from "../../../models/examen-funcional";
import {ActivatedRoute, Router} from "@angular/router";
import {PacienteService} from "../../../services/pacientes/paciente.service";
import {TratamientoService} from "../../../services/tratamientos/tratamiento.service";
import {ExamenService} from "../../../services/examenes/examen.service";
import {AlertService} from "../../../services/alert/alert.service";

@Component({
  selector: 'app-editar-examen-funcional',
  templateUrl: './editar-examen-funcional.component.html',
  styleUrls: ['./editar-examen-funcional.component.scss']
})
export class EditarExamenFuncionalComponent implements OnInit {

  public title = "Actualizar Exámen Funcional";
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
    private _tratamientoService: TratamientoService,
    private _examenService: ExamenService,
    private _alertService: AlertService,
    private _router: Router,
  ) {
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

  obtenerDatosPaciente() {
    this._pacienteService.getPaciente(this.id_paciente).subscribe(
      (value: Paciente) => {
        if ( value.id != null ) {
          this.paciente = value;
        }
      }
    )
  }

  obtenerExamen() {
    this._tratamientoService.examenFuncionalReaizado(this.id_tratamiento).subscribe(
      (result: ExamenFuncional) => {
        this.examen = result;
        this.cargando = false;
      }
    );
  }

  // Editar el examen
  onSubmit() {
    this.examen.fecha_actualizacion = new Date();
    this._examenService.editarExamenFuncional(this.examen).subscribe(
      (result: ExamenFuncional) => {
        if ( result.id != null ) {
          this._router.navigate(['../../'], {relativeTo: this._activatedRoute});
          this._alertService.showAlert(true,  'Exámen Funcional Actualizado', 1);
        }
      },
      error => {
        console.log(error);
        this._alertService.showAlert(true, 'Algo ha salido mal', 2);
      }
    )
  }

}
