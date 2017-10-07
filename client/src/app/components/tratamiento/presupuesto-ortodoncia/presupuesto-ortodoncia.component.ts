import { Component, OnInit } from '@angular/core';
import { Paciente } from 'app/models/paciente';
import { ActivatedRoute } from '@angular/router';
import { PacienteService } from 'app/services/pacientes/paciente.service';
import { TratamientoService } from 'app/services/tratamientos/tratamiento.service';

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

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _pacienteService: PacienteService,
    private _tratamientoService: TratamientoService
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
          this.cargando = false;
        }
      },
      error => {
        console.log(error);
      }
    );
  }

}
