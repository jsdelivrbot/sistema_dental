import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ExamenFacial } from 'app/models/examen-facial';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ExamenService {

  private url: string;
  private port: string;

  //private emitCreado = new Subject<boolean>();

  // variable de cambio al cual se subscriben
  //public creadoEmitido$ = this.emitCreado.asObservable();

  constructor(private httpClient: HttpClient) {
    this.url = "http://localhost";
    this.port = ":3000";
  }

  // servicio que emite el exito en la creacion (para mostrar una notificacion)
  /*emitGuardado(exito: boolean) {
    console.log("evento emitido");
    this.emitCreado.next(exito);
  }*/

  guardarExamenFacial(examen: ExamenFacial, id_tratamiento: string) {
    examen.tratamientoId = id_tratamiento;
    return this.httpClient.post(this.url + this.port + '/api/examenFacial', examen);
  }

}
