import { Component, OnInit } from '@angular/core';
import { Paciente } from 'app/models/paciente';
import { PacienteService } from 'app/services/pacientes/paciente.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menu-paciente',
  templateUrl: './menu-paciente.component.html',
  styleUrls: ['./menu-paciente.component.scss'],
  providers: [PacienteService]
})
export class MenuPacienteComponent implements OnInit {

  public title = "Menú Paciente"
  private id_paciente: string;
  public paciente: Paciente;
  public cargando = true;

  constructor(
    private _pacienteService: PacienteService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {

    this._activatedRoute.params.subscribe(
      params => {
        this.id_paciente = params['id'];
        this.obtenerDatosPaciente();
      },
      error => {
        console.log(error);
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
      },
      error => {
        console.log(error);
      }
    );
  }

}
