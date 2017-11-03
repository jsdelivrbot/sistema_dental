import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Paciente } from 'app/models/paciente';

@Injectable()
export class PacienteService {

  private url: string;
  private port: string;

  constructor(private httpClient: HttpClient) {
    //this.url = "http://192.168.50.7";
    this.url = "http://localhost";
    this.port = ":3000";
  }

  getPacientes() {
    return this.httpClient.get(this.url + this.port + "/api/pacientes");
  }

  getPaciente( id: string ) {
    return this.httpClient.get(this.url + this.port + '/api/pacientes/' + id);
  }

  registrarPaciente( paciente: Paciente ) {
    return this.httpClient.post(this.url + this.port + '/api/pacientes', paciente);
  }

  editarPaciente( id: string, paciente: Paciente ) {
    return this.httpClient.patch(this.url + this.port + '/api/pacientes/' + id, paciente);
  }
}
