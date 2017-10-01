import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Tratamiento } from 'app/models/tratamiento';
import { Observer } from 'rxjs/Observer';

@Injectable()
export class TratamientoService {

  private url: string;
  private port: string;

  constructor(private httpClient: HttpClient) {
    this.url = "http://localhost";
    this.port = ":3000";
  }

  obtenerTratamientoActivo(id_paciente) {
    const params = new HttpParams().set('filter', '{"where": {"archivado":"false"}}')
    return this.httpClient.get(this.url + this.port + '/api/pacientes/' + id_paciente + '/tratamientos', {params: params});
  }

  obtenerListaDeTratamientosArchivados(id_paciente) {
    const params = new HttpParams().set('filter', '{"where": {"archivado":"true"}}')
    return this.httpClient.get(this.url + this.port + '/api/pacientes/' + id_paciente + '/tratamientos', {params: params});
  }

  guardarTratamiento(tratamiento: Tratamiento, id_paciente) {
    tratamiento.pacienteId = id_paciente;
    return this.httpClient.post(this.url + this.port + '/api/tratamientos', tratamiento);
  }

  examenFacialRealizado(id_tratamiento) {
    return this.httpClient.get(this.url + this.port + '/api/tratamientos/' + id_tratamiento + '/examenFacial');
  }
}
