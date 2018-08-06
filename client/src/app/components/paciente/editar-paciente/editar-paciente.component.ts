import { Component, OnInit, ViewChild } from '@angular/core';
import { Paciente } from 'app/models/paciente';
import { ModalDirective } from 'ngx-bootstrap';
import { Router, ActivatedRoute } from '@angular/router';
import { PacienteService } from 'app/services/pacientes/paciente.service';
import { AlertService } from 'app/services/alert/alert.service';

@Component({
  selector: 'app-editar-paciente',
  templateUrl: './editar-paciente.component.html',
  styleUrls: ['./editar-paciente.component.scss'],
  providers: [PacienteService]
})
export class EditarPacienteComponent implements OnInit {

  public title = "Editar Paciente"

  public paciente: Paciente;
  public hm: any;
  private id_paciente: string;
  public cargando = true;

  @ViewChild('modalHistorialMedico') modalHM: ModalDirective;
  @ViewChild('modalApoderado') modalApoderado: ModalDirective;

  constructor(
    private _pacienteService: PacienteService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private _alertService: AlertService
  ) {
    this.paciente = new Paciente();
    this.paciente.apoderado = {};
    this.paciente.historial_medico = [];
    this.hm = {};
  }

  ngOnInit() {
    this._activatedRoute.params.subscribe(
      params => {
        this.id_paciente = params['id'];
        this.obtenerDatosPaciente();
      }
    );
  }

  obtenerDatosPaciente() {
    this._pacienteService.getPaciente(this.id_paciente).subscribe(
      (value: Paciente) => {
        this.paciente = value;
        console.log(this.paciente);
        this.cargando = false;
      },
      error => {
        console.log(error);
      }
    );
  }

  agregarApoderado() {
    this.modalApoderado.hide();
  }

  agregarHistorialMedico() {
    // agrega item de historial medico al array del paciente
    this.paciente.historial_medico.push(this.hm);
    // reinicia el objeto para seguir agregando mas
    this.hm = {};
    // cerrar el modal
    this.modalHM.hide();
  }

  onSubmit() {
    this._pacienteService.editarPaciente(this.id_paciente, this.paciente).subscribe(
      (value: Paciente) => {
        if ( value.id != null ) {
          this._router.navigateByUrl('/pacientes');
          this._alertService.showAlert(true, 'Paciente editado', 1);
        }
      },
      error => {
        console.log(error);
        this._alertService.showAlert(true, 'Algo ha salido mal', 2);
      }
    );
  }
}
