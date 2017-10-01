import { Component, OnInit } from '@angular/core';
import { PacienteService } from 'app/services/pacientes/paciente.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Paciente } from 'app/models/paciente';
import { TratamientoService } from 'app/services/tratamientos/tratamiento.service';
import { Tratamiento } from 'app/models/tratamiento';
import { AlertService } from 'app/services/alert/alert.service';

@Component({
  selector: 'app-lista-tratamiento',
  templateUrl: './lista-tratamiento.component.html',
  styleUrls: ['./lista-tratamiento.component.scss']
})
export class ListaTratamientoComponent implements OnInit {

  private id_paciente: string;
  public title = "Tratamientos";
  public cargando = true;
  public paciente: Paciente;
  public tratamiento_activo: Tratamiento;
  public tratamientos_archivados: Array<Tratamiento>;

  constructor(
    private _pacienteService: PacienteService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
    private _tratamientoService: TratamientoService,
    private _alertService: AlertService
  ) { }

  ngOnInit() {

    this._activatedRoute.parent.params.subscribe(
      params => {
        this.id_paciente = params['id'];
        this.obtenerPaciente();
        this.obtenerListadoTratamientos();
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

  // Obtiene el tratamiento activo y el listado de tratamientos archivados desde el servicio
  obtenerListadoTratamientos() {
    this._tratamientoService.obtenerTratamientoActivo(this.id_paciente).subscribe(
      (result: any) => {
        this.tratamiento_activo = <Tratamiento>result[0];
      },
      error => {
        console.log(error);
        this._alertService.showAlert(true, 'Ha ocurrido un error cargando el tratamiento activo', 2);
      }
    );

    this._tratamientoService.obtenerListaDeTratamientosArchivados(this.id_paciente).subscribe(
      (result: any) => {
        this.tratamientos_archivados = <Array<Tratamiento>>result;
        this.cargando = false;
      },
      error => {
        console.log(error);
        this._alertService.showAlert(true, 'Ha ocurrido un error cargando los tratamientos archivados', 2);
      }
    );
  }

  // Archiva el tratamiento que esta activo
  archivarTratamientoActivo() {
    if ( this.tratamiento_activo != null ) {
      this._tratamientoService.archivarTratamiento(this.tratamiento_activo).subscribe(
        (result: Tratamiento) => {
          if ( result.id != null && result.archivado) {
            this._alertService.showAlert(true, 'Tratamiento Archivado', 1);
            this.tratamiento_activo = null;
            this.tratamientos_archivados.unshift(result);
          }
        }
      );
    }
  }

}
