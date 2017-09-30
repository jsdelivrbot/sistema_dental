import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Paciente } from 'app/models/paciente';
import { PacienteService } from 'app/services/pacientes/paciente.service';

@Component({
  selector: 'app-detalle-tratamiento',
  templateUrl: './detalle-tratamiento.component.html',
  styleUrls: ['./detalle-tratamiento.component.scss']
})
export class DetalleTratamientoComponent implements OnInit {


  public title = "Detalle Tratamiento";
  public cargando = true;
  private id_paciente: string;
  public paciente: Paciente;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _pacienteService: PacienteService
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
