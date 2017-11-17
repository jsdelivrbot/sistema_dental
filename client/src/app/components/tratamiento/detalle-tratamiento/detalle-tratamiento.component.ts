import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Paciente} from 'app/models/paciente';
import {PacienteService} from 'app/services/pacientes/paciente.service';
import {TratamientoService} from 'app/services/tratamientos/tratamiento.service';
import {Tratamiento} from "../../../models/tratamiento";
import {AlertService} from "../../../services/alert/alert.service";
import {UtilService} from "../../../services/util/util.service";
import {PlanTratamiento} from "../../../models/plan-tratamiento";
import {ListadoProblemas} from "../../../models/listado-problemas";

@Component({
  selector: 'app-detalle-tratamiento',
  templateUrl: './detalle-tratamiento.component.html',
  styleUrls: ['./detalle-tratamiento.component.scss']
})
export class DetalleTratamientoComponent implements OnInit {


  public title = "Detalle Tratamiento";
  public cargando = true;
  private id_paciente: string;
  private id_tratamiento: string;
  public paciente: Paciente;
  public tratamiento: Tratamiento;
  public prespuestoOrtodonciaRealizado: boolean;
  public examenes_realizados: boolean;
  public planTratamientoRealizado: boolean;
  public planTratamiento: PlanTratamiento;
  public listadoProblemas: ListadoProblemas;

  constructor(private _activatedRoute: ActivatedRoute,
              private _pacienteService: PacienteService,
              private _tratamientoService: TratamientoService,
              private _alertService: AlertService,
              private _utilService: UtilService
  ) {
    this.prespuestoOrtodonciaRealizado = false;
    this.planTratamiento = new PlanTratamiento();
    this.listadoProblemas = new ListadoProblemas();
  }

  ngOnInit() {
    this.examenes_realizados = true;
    this.planTratamientoRealizado = false;

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
        this.comprobarExamenesRealizados();
        this.comprobarPlanTratamiento();
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
      }
    );
  }

  //obtiene el tratamiento actual
  obtenerTratamiento() {
    this._tratamientoService.obtenerTratamiento(this.id_tratamiento).subscribe(
      (result: Tratamiento) => {
        this.tratamiento = result;
        if (Object.keys(this.tratamiento.presupuestos.ortodoncia).length > 0) {
          this.prespuestoOrtodonciaRealizado = true;
        }
      },
      error => {
        console.log(error);
        this._alertService.showAlert(true, 'Algo ha salido mal', 2);
      }
    );
  }

  comprobarExamenesRealizados() {
    this._tratamientoService.examenDentalRealizado(this.id_tratamiento).subscribe(
      (result: any) => {
        if (result.id != null) {
          this._tratamientoService.examenFacialRealizado(this.id_tratamiento).subscribe(
            (result: any) => {
              if (result.id != null) {
                this._tratamientoService.examenFuncionalReaizado(this.id_tratamiento).subscribe(
                  (result: any) => {
                    if (result.id != null) {
                      this._tratamientoService.relacionesDentalesRealizado(this.id_tratamiento).subscribe(
                        (result: any) => {
                          if(result.id != null) {
                            // todos los examenes realizados
                            this.cargando = false;
                            this.obtenerListadoProblemas();
                          }else{
                            this.examenes_realizados = false;
                            this.cargando = false;
                          }
                        },
                        error => {
                          if (error.statusText.indexOf('Not Found') == 0) {
                            this.examenes_realizados = false;
                            this.cargando = false;
                          }
                        }
                      );
                    }else{
                      this.examenes_realizados = false;
                      this.cargando = false;
                    }
                  },
                  error => {
                    if (error.statusText.indexOf('Not Found') == 0) {
                      this.examenes_realizados = false;
                      this.cargando = false;
                    }
                  }
                );
              }else{
                this.examenes_realizados = false;
                this.cargando = false;
              }
            },
            error => {
              if (error.statusText.indexOf('Not Found') == 0) {
                this.examenes_realizados = false;
                this.cargando = false;
              }
            }
          );
        }else{
          this.examenes_realizados = false;
          this.cargando = false;
        }
      },
      error => {
        if (error.statusText.indexOf('Not Found') == 0) {
          this.examenes_realizados = false;
          this.cargando = false;
        }
      }
    );
  }

  comprobarPlanTratamiento() {
    this._tratamientoService.planTratamientoRealizado(this.id_tratamiento).subscribe(
      (result: PlanTratamiento) => {
        if ( result.id != null ) {
          this.planTratamientoRealizado = true;
          this.planTratamiento = result;
        }
      }
    );
  }

  obtenerListadoProblemas() {
    this._tratamientoService.obtenerListadoProblemas(this.id_tratamiento).subscribe(
      (result: ListadoProblemas) => {
        if(result.id != null) {
          this.listadoProblemas = result;
        }
      },
      error => {
        console.log(error);
      }
    );
  }

  // manda a llamar el servicio para imprimir el presupuesto de ortodoncia
  imprimirOrtodoncia() {
    this._tratamientoService.imprimirPresupuestoOrtodoncia(this.tratamiento, this.planTratamiento, this.listadoProblemas).subscribe(
      (result: any) => {
        console.log(result);
        let file = new Blob([result._body], { type: 'application/pdf' });
        let fileURL = URL.createObjectURL(file);
        console.log(file);
        console.log(fileURL);
        window.open(fileURL, '_blank');
      },
      error => {
        console.log(error);
      }
    );
  }
}
