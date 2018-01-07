import {Component, OnInit, ViewChild} from '@angular/core';
import {Paciente} from "../../../models/paciente";
import {PacienteService} from "../../../services/pacientes/paciente.service";
import {ActivatedRoute} from "@angular/router";
import {ExamenOdontologiaGeneral} from "../../../models/examen-odontologia-general";
import {ModalTratamientoComponent} from "../modal-tratamiento/modal-tratamiento.component";
import {TratamientoService} from "../../../services/tratamientos/tratamiento.service";

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
  @ViewChild('modalTratamiento') modalTratamiento: ModalTratamientoComponent;

  constructor(
    private _pacienteService: PacienteService,
    private _activatedRoute: ActivatedRoute,
    private _tratamientoService: TratamientoService
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

}
