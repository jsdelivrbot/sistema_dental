import {Component, OnInit, ViewChild} from '@angular/core';
import {ExamenDental} from "../../../models/examen-dental";
import {Paciente} from "../../../models/paciente";
import {ModalExamenDentalAsignarComponent} from "../modal-examen-dental-asignar/modal-examen-dental-asignar.component";
import {ActivatedRoute, Router} from "@angular/router";
import {PacienteService} from "../../../services/pacientes/paciente.service";
import {ExamenService} from "../../../services/examenes/examen.service";
import {AlertService} from "../../../services/alert/alert.service";
import {TratamientoService} from "../../../services/tratamientos/tratamiento.service";

@Component({
  selector: 'app-editar-examen-dental',
  templateUrl: './editar-examen-dental.component.html',
  styleUrls: ['./editar-examen-dental.component.scss']
})
export class EditarExamenDentalComponent implements OnInit {

  public title = "Exámen Dental";
  public cargando = true;
  public paciente: Paciente;
  public examen: ExamenDental;
  private id_paciente: string;
  private id_tratamiento: string;

  @ViewChild('modalAsignar') modalAsignar: ModalExamenDentalAsignarComponent;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _pacienteService: PacienteService,
    private _tratamientoService: TratamientoService,
    private _examenService: ExamenService,
    private _alertService: AlertService,
    private _router: Router,
  ) {
    this.examen = new ExamenDental();
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
    this._tratamientoService.examenDentalRealizado(this.id_tratamiento).subscribe(
      (result: ExamenDental) => {
        this.examen = result;
        this.cargando = false;
      }
    );
  }

  // Editar el examen
  onSubmit() {
    this.examen.fecha_actualizacion = new Date();
    this._examenService.editarExamenDental(this.examen).subscribe(
      (result: ExamenDental) => {
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
