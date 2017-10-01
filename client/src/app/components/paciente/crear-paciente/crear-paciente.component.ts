import { Component, OnInit, ViewChild } from '@angular/core';
import { Paciente } from 'app/models/paciente';
import { PacienteService } from 'app/services/pacientes/paciente.service';
import { Router } from '@angular/router';
import { ModalDirective } from 'ngx-bootstrap';
import { AlertService } from 'app/services/alert/alert.service';

@Component({
  selector: 'app-crear-paciente',
  templateUrl: './crear-paciente.component.html',
  styleUrls: ['./crear-paciente.component.scss'],
  providers: [PacienteService]
})
export class CrearPacienteComponent implements OnInit {

  public title = "Crear Paciente"
  public paciente: Paciente;
  public hm: any;
  public cargando = true;

  @ViewChild('modalHistorialMedico') modalHM: ModalDirective;
  @ViewChild('modalApoderado') modalApoderado: ModalDirective;

  constructor(
    private _pacienteService: PacienteService,
    private _router: Router,
    private _alertService: AlertService
  ) {
    this.paciente = new Paciente();
    this.paciente.historial_medico = [];
    this.paciente.apoderado = {};
    this.hm = {};
  }

  ngOnInit() {
    this.cargando = false;
  }

  onSubmit() {
    this._pacienteService.registrarPaciente(this.paciente).subscribe(
      (value: any) => {
        if ( value.id != null ) {
          // redireccionar hacia la lista de pacientes
          this._router.navigateByUrl('/pacientes');
          this._alertService.showAlert(true, 'Paciente creado', 1);
        }
      },
      error => {
        console.log(error);
        this._alertService.showAlert(true, 'Algo ha salido mal', 2);
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

}
