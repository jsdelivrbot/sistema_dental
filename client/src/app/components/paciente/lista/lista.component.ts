import { Component, OnInit, OnDestroy } from '@angular/core';
import { PacienteService } from 'app/services/pacientes/paciente.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss'],
  providers: [PacienteService]
})
export class ListaComponent implements OnInit, OnDestroy {

  public title = "Listado de pacientes";
  public pacientes: any;
  public pacientes_tmp: any;
  public busqueda = "";
  public cargando = true;

  constructor(
    private _pacienteService: PacienteService,
  ) {
  }

  ngOnInit() {
    this._pacienteService.getPacientes().subscribe(
      (value: any) => {
        this.pacientes = value;
        this.pacientes_tmp = value;
        this.cargando = false;
      },
      error => {
        console.log(error);
      }
    );
  }

  ngOnDestroy() {
  }

  filtrarPacientes() {
    this.pacientes = this.pacientes_tmp.filter(function (value) {
      const nombre = value.nombre + ' ' + value.apepat + ' ' + value.apemat;
      if (nombre.toLocaleLowerCase().indexOf(this.busqueda) !== -1) {
        return value;
      }
    }, this);
  }

}
