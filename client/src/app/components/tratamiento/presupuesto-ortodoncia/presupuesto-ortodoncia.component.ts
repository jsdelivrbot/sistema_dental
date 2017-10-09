import { Component, OnInit } from '@angular/core';
import { Paciente } from 'app/models/paciente';
import { ActivatedRoute } from '@angular/router';
import { PacienteService } from 'app/services/pacientes/paciente.service';
import { TratamientoService } from 'app/services/tratamientos/tratamiento.service';
import { PreciosService } from 'app/services/precios/precios.service';
import { AlertService } from 'app/services/alert/alert.service';
import { Servicio } from 'app/models/servicio';

@Component({
  selector: 'app-presupuesto-ortodoncia',
  templateUrl: './presupuesto-ortodoncia.component.html',
  styleUrls: ['./presupuesto-ortodoncia.component.scss']
})
export class PresupuestoOrtodonciaComponent implements OnInit {

  public title = "Presupuesto Ortodoncia";
  public cargando = true;
  private id_paciente: string;
  private id_tratamiento: string;
  public paciente: Paciente;
  public servicios: Array<Servicio>;
  public serviciosExtras: Array<Servicio>;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _pacienteService: PacienteService,
    private _tratamientoService: TratamientoService,
    private _preciosService: PreciosService,
    private _alertService: AlertService
  ) { }

  ngOnInit() {
    this._activatedRoute.parent.params.subscribe(
      params => {
        this.id_paciente = params['id'];
        this.obtenerPaciente();
      }
    )
  }


  // Obtiene al paciente desde el servicio
  obtenerPaciente() {
    this._pacienteService.getPaciente(this.id_paciente).subscribe(
      (value: Paciente) => {
        if (value.id != null) {
          this.paciente = value;

          this.obtenerServiciosOrtodoncia();
        }
      },
      error => {
        console.log(error);
        this._alertService.showAlert(true, 'Algo ha salido mal', 2);
      }
    );
  }

  obtenerServiciosOrtodoncia() {
    this._preciosService.obtenerServiciosOrtodonciaBase().subscribe(
      (result: Array<Servicio>) => {
        this.servicios = result;
        console.log(this.servicios);
        this.obtenerServiciosOrtodonciaExtras();
      },
      error => {
        console.log(error);
        this._alertService.showAlert(true, 'Algo ha salido mal', 2);
      }
    );
  }

  obtenerServiciosOrtodonciaExtras() {
    this._preciosService.obtenerServiciosOrtodonciaExtras().subscribe(
      (result: Array<Servicio>) => {
        this.serviciosExtras = result;
        console.log(this.serviciosExtras);
        this.cargando = false;
      },
      error => {
        console.log(error);
        this._alertService.showAlert(true, 'Algo ha salido mal', 2);
      }
    );
  }

}
