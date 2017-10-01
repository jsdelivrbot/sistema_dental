import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { Paciente } from 'app/models/paciente';
import { PacienteService } from 'app/services/pacientes/paciente.service';
import { ActivatedRoute } from '@angular/router';
import { ExamenService } from 'app/services/examenes/examen.service';

@Component({
  selector: 'app-lista-examenes',
  templateUrl: './lista-examenes.component.html',
  styleUrls: ['./lista-examenes.component.scss']
})
export class ListaExamenesComponent implements OnInit, AfterViewInit {

  public title = "Exámenes Ortodoncia";
  private id_paciente: string;
  public paciente: Paciente;
  public cargando = true;
  public examenes_realizados = true;

  constructor(
    private _pacienteService: PacienteService,
    private _activatedRoute: ActivatedRoute,
    private _examenService: ExamenService,
  ) {
  }

  ngOnInit() {
    this._activatedRoute.parent.parent.params.subscribe(
      params => {
        this.id_paciente = params['id'];
        this.obtenerDatosPaciente();
      }
    );
  }

  ngAfterViewInit() {
  }

  obtenerDatosPaciente() {
    this._pacienteService.getPaciente(this.id_paciente).subscribe(
      (value: Paciente) => {
        if (value.id != null) {
          this.paciente = value;
          this.cargando = false;
        }
      }
    )
  }
}
