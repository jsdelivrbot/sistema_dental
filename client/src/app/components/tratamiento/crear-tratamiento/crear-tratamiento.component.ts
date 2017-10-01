import { Component, OnInit } from '@angular/core';
import { Paciente } from 'app/models/paciente';
import { PacienteService } from 'app/services/pacientes/paciente.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from 'app/services/alert/alert.service';
import { TratamientoService } from 'app/services/tratamientos/tratamiento.service';
import { Tratamiento } from 'app/models/tratamiento';

@Component({
  selector: 'app-crear-tratamiento',
  templateUrl: './crear-tratamiento.component.html',
  styleUrls: ['./crear-tratamiento.component.scss']
})
export class CrearTratamientoComponent implements OnInit {

  private id_paciente: string;
  public title = "Tratamientos";
  public cargando = true;
  public paciente: Paciente;
  public tratamiento: Tratamiento;

  constructor(
    private _pacienteService: PacienteService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
    private _alertService: AlertService,
    private _tratamientoService: TratamientoService
  ) {
    this.tratamiento = new Tratamiento();
  }

  ngOnInit() {
    this._activatedRoute.parent.params.subscribe(
      params => {
        this.id_paciente = params['id'];
        this.obtenerPaciente();
      }
    );
  }

  // Obtiene al paciente desde el servicio
  obtenerPaciente() {
    this._pacienteService.getPaciente(this.id_paciente).subscribe(
      (value: Paciente) => {
        if (value.id != null) {
          this.paciente = value;
          this.cargando = false;
        }
      },
      error => {
        console.log(error);
        this._alertService.showAlert(true, 'Algo ha salido mal cargando al paciente', 2);
      }
    );
  }

  // Guarda el tratamiento
  onSubmit() {
    this.tratamiento.archivado = false;
    this.tratamiento.fecha_creacion = new Date();
    this.tratamiento.fecha_actualizacion = this.tratamiento.fecha_creacion;

    // se ocupa el servicio para guardar
    this._tratamientoService.guardarTratamiento(this.tratamiento, this.id_paciente).subscribe(
      (result: Tratamiento) => {
        if ( result.id != null ) {
          this._router.navigate(['..'], {relativeTo: this._activatedRoute});
          this._alertService.showAlert(true, 'Tratamiento Creado', 1);
        }
      },
      error => {
        console.log(error);
        this._alertService.showAlert(true, 'Algo ha salido mal', 2);
      }
    );
  }

}
