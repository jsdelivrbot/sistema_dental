import {Component, OnInit, ViewChild} from '@angular/core';
import {Paciente} from "../../../models/paciente";
import {ActivatedRoute, Router} from "@angular/router";
import {PacienteService} from "../../../services/pacientes/paciente.service";
import {ExamenService} from "../../../services/examenes/examen.service";
import {AlertService} from "../../../services/alert/alert.service";
import {ExamenDental} from "../../../models/examen-dental";
import {ModalExamenDentalAsignarComponent} from "../modal-examen-dental-asignar/modal-examen-dental-asignar.component";

@Component({
  selector: 'app-examen-dental',
  templateUrl: './examen-dental.component.html',
  styleUrls: ['./examen-dental.component.scss']
})
export class ExamenDentalComponent implements OnInit {

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

  asignar(diente: Array<string>) {
    //console.log(diente);
    diente = new Array<string>(11);
    this.modalAsignar.show(diente);
  }

  // guardar examen
  onSubmit() {
    this.examen.fecha_realizacion = new Date();
    this.examen.fecha_actualizacion = new Date();
    this._examenService.guardarExamenDental(this.examen, this.id_tratamiento).subscribe(
      (result: any) => {
        if ( result.id != null ) {
          this._router.navigate(['../lista-examenes'], {relativeTo: this._activatedRoute});
          this._alertService.showAlert(true, "Exámen Dental Creado", 1);
        }
      },
      error => {
        console.log(error);
        this._alertService.showAlert(true, 'Algo ha salido mal', 2);
      }
    )
  }
}
