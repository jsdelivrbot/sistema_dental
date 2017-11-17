import {Component, OnInit} from '@angular/core';
import {PlanTratamiento} from "../../../models/plan-tratamiento";
import {Tratamiento} from "../../../models/tratamiento";
import {Paciente} from "../../../models/paciente";
import {ActivatedRoute, Router} from "@angular/router";
import {PacienteService} from "../../../services/pacientes/paciente.service";
import {TratamientoService} from "../../../services/tratamientos/tratamiento.service";
import {AlertService} from "../../../services/alert/alert.service";

@Component({
  selector: 'app-editar-plan-tratamiento',
  templateUrl: './editar-plan-tratamiento.component.html',
  styleUrls: ['./editar-plan-tratamiento.component.scss']
})
export class EditarPlanTratamientoComponent implements OnInit {

  public title = "Editar plan de tratamiento";
  public cargando = true;
  private id_paciente: string;
  private id_tratamiento: string;
  public paciente: Paciente;
  public tratamiento: Tratamiento;
  public planTratamiento: PlanTratamiento;

  constructor(private _activatedRoute: ActivatedRoute,
              private _pacienteService: PacienteService,
              private _tratamientoService: TratamientoService,
              private _alertService: AlertService,
              private _router: Router) {
    this.planTratamiento = new PlanTratamiento();
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
        this.obtenerPlanificacionDeTratamiento();
      },
      error => {
        console.log(error);
        this._alertService.showAlert(true, 'Algo ha salido mal', 2);
      }
    );
  }

  obtenerPlanificacionDeTratamiento() {
    this._tratamientoService.planTratamientoRealizado(this.id_tratamiento).subscribe(
      (result: PlanTratamiento) => {
        this.planTratamiento = result;
        this.cargando = false;
      },
      error => {
        console.log(error);
        this._alertService.showAlert(true, 'Algo ha salido mal', 2);
      }
    );
  }

  onSubmit() {
    this.planTratamiento.fecha_actualizacion = new Date();
    this._tratamientoService.editarPlanTratamiento(this.planTratamiento).subscribe(
      (result: PlanTratamiento) => {
        if (result != null) {
          this._alertService.showAlert(true, 'Plan de tratamiento editado', 1);
          this._router.navigate(['../../'], {relativeTo: this._activatedRoute});
        }
      },
      error => {
        console.log(error);
        this._alertService.showAlert(true, 'Algo ha salido mal', 2);
      }
    );
  }
}
