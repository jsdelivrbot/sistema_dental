import {Component, OnInit, ViewChild} from '@angular/core';
import {Paciente} from "../../../models/paciente";
import {PacienteService} from "../../../services/pacientes/paciente.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ExamenOdontologiaGeneral} from "../../../models/examen-odontologia-general";
import {ModalTratamientoComponent} from "../modal-tratamiento/modal-tratamiento.component";
import {TratamientoService} from "../../../services/tratamientos/tratamiento.service";
import {ExamenService} from "../../../services/examenes/examen.service";
import {AlertService} from "../../../services/alert/alert.service";

@Component({
  selector: 'app-examen-general',
  templateUrl: './examen-general.component.html',
  styleUrls: ['./examen-general.component.scss']
})
export class ExamenGeneralComponent implements OnInit {

  public title = "Exámen Odontología General";
  public cargando = true;
  public paciente: Paciente;
  public id_paciente: string;
  public examen: ExamenOdontologiaGeneral;
  public dienteSeleccionado: any;
  public idTratamiento: string;
  @ViewChild('modalTratamiento') modalTratamiento: ModalTratamientoComponent;

  constructor(
    private _pacienteService: PacienteService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
    private _tratamientoService: TratamientoService,
    private _examenService: ExamenService,
    private _alertService: AlertService
  ) {
    this.paciente = new Paciente();
    this.examen = new ExamenOdontologiaGeneral();
  }

  ngOnInit() {
    // id paciente
    this._activatedRoute.parent.parent.params.subscribe(
      params => {
        this.id_paciente = params['id'];
        this.obtenerDatosPaciente();
      }
    );

    this._activatedRoute.parent.params.subscribe(
      params => {
        this.idTratamiento = params['id'];
        console.log(this.idTratamiento);
      }
    )
  }

  obtenerDatosPaciente() {
    this._pacienteService.getPaciente(this.id_paciente).subscribe(
      (value: Paciente) => {
        if ( value.id != null ) {
          this.cargando = false;
          this.paciente = value;
        }
      }
    )
  }

  abrirModalDiente(diente) {
    this.dienteSeleccionado = diente;
    this.modalTratamiento.show();
  }

  capturarTratamiento(event) {
    this.dienteSeleccionado.idTratamiento = event.id;
    this.dienteSeleccionado.cantidadTratamiento = event.cantidad;

    this.obtenerTratamientoOdontologiaGeneral(this.dienteSeleccionado.idTratamiento);
    console.log(this.examen.examen_dentario);
    console.log(event);
  }

  obtenerTratamientoOdontologiaGeneral(id: string){
    this._tratamientoService.obtenerTratamientoOdontologia(id).subscribe(
      (result: any) => {
        this.dienteSeleccionado.nombreTratamiento = result.nombre;
        this.dienteSeleccionado.precioSeleccionado = result.precio;
      },
      error => {
        console.log(error);
      }
    );
  }

  guardarExamen() {
    this.examen.tratamientoId = this.idTratamiento;
    this._examenService.guardarExamenOdontologiaGeneral(this.examen).subscribe(
      (result: ExamenOdontologiaGeneral) => {
        if (result.id != null) {
          this._alertService.showAlert(true, "Diagnostico de Odontología General guardado", 1);
          this._router.navigate(['../..'], {relativeTo: this._activatedRoute});
        }
      },
      error => {
        console.log(error);
        this._alertService.showAlert(true, "Algo ha salido mal", 2);
      }
    );
  }
}
