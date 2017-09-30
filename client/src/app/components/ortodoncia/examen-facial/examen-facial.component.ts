import { Component, OnInit } from '@angular/core';
import { Paciente } from 'app/models/paciente';
import { ActivatedRoute } from '@angular/router';
import { PacienteService } from 'app/services/pacientes/paciente.service';

@Component({
  selector: 'app-examen-facial',
  templateUrl: './examen-facial.component.html',
  styleUrls: ['./examen-facial.component.scss']
})
export class ExamenFacialComponent implements OnInit {

  public title = "Exámen Facial";
  public cargando = true;
  public paciente: Paciente;
  private id_paciente: string;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _pacienteService: PacienteService
  ) { }

  ngOnInit() {
    this._activatedRoute.parent.parent.params.subscribe(
      params => {
        this.id_paciente = params['id'];
        this.obtenerDatosPaciente();
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

}
