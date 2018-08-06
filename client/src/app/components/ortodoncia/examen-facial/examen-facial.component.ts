import { Component, OnInit } from '@angular/core';
import { Paciente } from 'app/models/paciente';
import { ActivatedRoute, Router } from '@angular/router';
import { PacienteService } from 'app/services/pacientes/paciente.service';
import { ExamenFacial } from 'app/models/examen-facial';
import { ExamenService } from 'app/services/examenes/examen.service';
import { AlertService } from 'app/services/alert/alert.service';
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'app-examen-facial',
  templateUrl: './examen-facial.component.html',
  styleUrls: ['./examen-facial.component.scss']
})
export class ExamenFacialComponent implements OnInit {

  public title = "Exámen Facial";
  public cargando = true;
  public paciente: Paciente;
  public examen: ExamenFacial;
  private id_paciente: string;
  private id_tratamiento: string;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _pacienteService: PacienteService,
    private _examenService: ExamenService,
    private _alertService: AlertService,
    private _router: Router,
  ) {
    this.examen = new ExamenFacial();
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

  // guardar examen
  onSubmit() {
    this.examen.fecha_realizacion = new Date();
    this.examen.fecha_actualizacion = new Date();
    this._examenService.guardarExamenFacial(this.examen, this.id_tratamiento).subscribe(
      (result: any) => {
        if ( result.id != null ) {
          this._router.navigate(['../lista-examenes'], {relativeTo: this._activatedRoute});
          this._alertService.showAlert(true, "Exámen Facial Creado", 1);
        }
      },
      error => {
        console.log(error);
        this._alertService.showAlert(true, 'Algo ha salido mal', 2);
      }
    )
  }

}
