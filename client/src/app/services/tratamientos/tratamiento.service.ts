import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tratamiento } from 'app/models/tratamiento';

@Injectable()
export class TratamientoService {

  private url: string;
  private port: string;

  constructor(private httpClient: HttpClient) {
    this.url = "http://localhost";
    this.port = ":3000";
  }

  guardarTratamiento(tratamiento: Tratamiento, id_paciente) {
    tratamiento.pacienteId = id_paciente;
    return this.httpClient.post(this.url + this.port + '/api/tratamientos', tratamiento);
  }
}
