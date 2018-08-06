import {Component, OnInit, ViewChild} from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";
import {ExamenService} from "../../../services/examenes/examen.service";
import {TratamientoService} from "../../../services/tratamientos/tratamiento.service";
import {ExamenOdontologiaGeneral} from "../../../models/examen-odontologia-general";
import {Paciente} from "../../../models/paciente";
import {ModalTratamientoComponent} from "../modal-tratamiento/modal-tratamiento.component";
import {PacienteService} from "../../../services/pacientes/paciente.service";
import {AlertService} from "../../../services/alert/alert.service";

@Component({
  selector: 'app-editar-examen-general',
  templateUrl: './editar-examen-general.component.html',
  styleUrls: ['./editar-examen-general.component.scss']
})
export class EditarExamenGeneralComponent implements OnInit {

  private tratamientoId: string;
  public examen: ExamenOdontologiaGeneral;
  public title = "Editar Exámen Odontología General";
  public cargando = true;
  public paciente: Paciente;
  public id_paciente: string;
  public dienteSeleccionado: any;
  @ViewChild('modalTratamiento') modalTratamiento: ModalTratamientoComponent;

  constructor(
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private _examenService: ExamenService,
    private _tratamientoService: TratamientoService,
    private _pacienteService: PacienteService,
    private _alertService: AlertService
  ) {
    this.examen = new ExamenOdontologiaGeneral();
  }

  ngOnInit() {
    this._activatedRoute.parent.params.subscribe(
      params => {
        this.tratamientoId = params['id'];
        this.obtenerExamenGeneral();
      }
    );

    // id paciente
    this._activatedRoute.parent.parent.params.subscribe(
      params => {
        this.id_paciente = params['id'];
        this.obtenerDatosPaciente();
      }
    );
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

  obtenerExamenGeneral() {
    this._tratamientoService.examenGeneralRealizado(this.tratamientoId).subscribe(
      (result: ExamenOdontologiaGeneral) => {
        if(result.id != null) {
          this.examen = result;
        }
      },
      error => {
        console.log(error);
      }
    );
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

  editarExamen() {
    this._examenService.editarExamenOdontologiaGeneral(this.examen).subscribe(
      (result: ExamenOdontologiaGeneral) => {
        if (result.id != null) {
          this._alertService.showAlert(true, "Diagnostico de Odontología General editado", 1);
          this._router.navigate(['../../..'], {relativeTo: this._activatedRoute});
        }
      },
      error => {
        console.log(error);
        this._alertService.showAlert(true, "Algo ha salido mal", 2);
      }
    );
  }
}
