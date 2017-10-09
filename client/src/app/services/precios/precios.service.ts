import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Servicio } from 'app/models/servicio';

@Injectable()
export class PreciosService {

  private url: string;
  private port: string;

  constructor(private httpClient: HttpClient) {
    this.url = "http://localhost";
    this.port = ":3000";
  }

  getServiciosOrtodoncia() {
    return this.httpClient.get(this.url + this.port + '/api/serviciosOrtodoncia');
  }

  agregarServicioOrtodoncia(servicio: Servicio) {
    return this.httpClient.post(this.url + this.port + '/api/serviciosOrtodoncia', servicio);
  }

  editarServicioOrtodoncia(servicio: Servicio) {
    return this.httpClient.patch(this.url + this.port + '/api/serviciosOrtodoncia', servicio);
  }

  eliminarServicioOrtodoncia(idServicio: string) {
    return this.httpClient.delete(this.url + this.port + '/api/serviciosOrtodoncia/' + idServicio);
  }

  obtenerUltimoServicioOrtodonciaAgregado() {
    return this.httpClient.get(this.url + this.port + '/api/serviciosOrtodoncia/findOne?filter={"order":"codigo DESC"}');
  }

  obtenerServiciosOrtodonciaBase() {
    return this.httpClient.get(this.url + this.port + '/api/serviciosOrtodoncia?filter={"where":{"extra":false}}');
  }

  obtenerServiciosOrtodonciaExtras() {
    return this.httpClient.get(this.url + this.port + '/api/serviciosOrtodoncia?filter={"where":{"extra":true}}');
  }

}
