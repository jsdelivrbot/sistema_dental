import { Component, OnInit } from '@angular/core';
import { Paciente } from 'app/models/paciente';
import { PacienteService } from 'app/services/pacientes/paciente.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from 'app/services/alert/alert.service';
import { TratamientoService } from 'app/services/tratamientos/tratamiento.service';
import { Tratamiento } from 'app/models/tratamiento';

@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.component.html',
  styleUrls: ['./dashboard-admin.component.scss']
})
export class DashboardAdminComponent implements OnInit {

    public title = 'Administracion';
    public cargando = true;

    constructor() {}

    ngOnInit() {
      this.cargando = false;
    }
}
