import { Component, OnInit } from '@angular/core';
import { PacienteService } from 'app/services/pacientes/paciente.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Paciente } from 'app/models/paciente';
import { TratamientoService } from 'app/services/tratamientos/tratamiento.service';

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

  constructor(
    private _pacienteService: PacienteService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
    private _tratamientoService: TratamientoService
  ) { }

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
      }
    );
  }

}
