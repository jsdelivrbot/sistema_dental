import { Component, OnInit } from '@angular/core';
import { Paciente } from 'app/models/paciente';
import { ExamenFacial } from 'app/models/examen-facial';
import { ActivatedRoute, Router } from '@angular/router';
import { PacienteService } from 'app/services/pacientes/paciente.service';
import { ExamenService } from 'app/services/examenes/examen.service';
import { AlertService } from 'app/services/alert/alert.service';
import { TratamientoService } from 'app/services/tratamientos/tratamiento.service';

@Component({
  selector: 'app-editar-examen-facial',
  templateUrl: './editar-examen-facial.component.html',
  styleUrls: ['./editar-examen-facial.component.scss']
})
export class EditarExamenFacialComponent implements OnInit {

  public title = "Actualizar Exámen Facial";
  public cargando = true;
  public paciente: Paciente;
  public examen: ExamenFacial;
  private id_paciente: string;
  private id_tratamiento: string;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _pacienteService: PacienteService,
    private _tratamientoService: TratamientoService,
    private _examenService: ExamenService,
    private _alertService: AlertService,
    private _router: Router,
  ) { }

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
    this._tratamientoService.examenFacialRealizado(this.id_tratamiento).subscribe(
      (result: ExamenFacial) => {
        this.examen = result;
        this.cargando = false;
      }
    );
  }

  // Editar el examen
  onSubmit() {
    this._examenService.editarExamenFacial(this.examen).subscribe(
      (result: ExamenFacial) => {
        if ( result.id != null ) {
          this._router.navigate(['../../'], {relativeTo: this._activatedRoute});
          this._alertService.showAlert(true,  'Exámen Facial Actualizado', 1);
        }
      },
      error => {
        console.log(error);
        this._alertService.showAlert(true, 'Algo ha salido mal', 2);
      }
    )
  }

}
