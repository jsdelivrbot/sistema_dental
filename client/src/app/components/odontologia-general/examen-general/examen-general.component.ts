import {Component, OnInit} from '@angular/core';
import {Paciente} from "../../../models/paciente";
import {PacienteService} from "../../../services/pacientes/paciente.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-examen-general',
  templateUrl: './examen-general.component.html',
  styleUrls: ['./examen-general.component.scss']
})
export class ExamenGeneralComponent implements OnInit {

  public title = "Exámen Odontología General";
  public cargando = true;
  public paciente: Paciente;
  public id_paciente: string;
  public examen_dentario = new Array(32);

  constructor(
    private _pacienteService: PacienteService,
    private _activatedRoute: ActivatedRoute
  ) {
    this.paciente = new Paciente();
  }

  ngOnInit() {
    // id paciente
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
          this.cargando = false;
          this.paciente = value;
        }
      }
    )
  }

}
