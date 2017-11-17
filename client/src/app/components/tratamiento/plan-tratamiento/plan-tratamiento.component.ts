import {Component, OnInit} from '@angular/core';
import {Paciente} from "../../../models/paciente";
import {Tratamiento} from "../../../models/tratamiento";
import {ActivatedRoute, Router} from "@angular/router";
import {PacienteService} from "../../../services/pacientes/paciente.service";
import {TratamientoService} from "../../../services/tratamientos/tratamiento.service";
import {AlertService} from "../../../services/alert/alert.service";
import {PlanTratamiento} from "../../../models/plan-tratamiento";

@Component({
  selector: 'app-plan-tratamiento',
  templateUrl: './plan-tratamiento.component.html',
  styleUrls: ['./plan-tratamiento.component.scss']
})
export class PlanTratamientoComponent implements OnInit {

  public title = "Plan de tratamiento";
  public cargando = true;
  private id_paciente: string;
  private id_tratamiento: string;
  public paciente: Paciente;
  public tratamiento: Tratamiento;
  public planTratamiento: PlanTratamiento;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _pacienteService: PacienteService,
    private _tratamientoService: TratamientoService,
    private _alertService: AlertService,
    private _router: Router
  ) {
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
        this.cargando = false;
      },
      error => {
        console.log(error);
        this._alertService.showAlert(true, 'Algo ha salido mal', 2);
      }
    );
  }

  onSubmit() {
    this.planTratamiento.fecha_realizacion = new Date();
    this.planTratamiento.fecha_actualizacion = new Date();

    this._tratamientoService.guardarPlanTratamiento(this.planTratamiento, this.id_tratamiento).subscribe(
      (result: PlanTratamiento) => {
        console.log(result);
        if(result.id != null) {
          this._alertService.showAlert(true, 'Plan de tratamiento guardado', 1);
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
