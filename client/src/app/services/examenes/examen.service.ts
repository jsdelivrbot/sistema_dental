import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ExamenFacial } from 'app/models/examen-facial';
import { Subject } from 'rxjs/Subject';
import {ExamenFuncional} from "../../models/examen-funcional";
import {ExamenDental} from "../../models/examen-dental";
import {RelacionesDentales} from "../../models/relaciones-dentales";

@Injectable()
export class ExamenService {

  private url: string;
  private port: string;

  //private emitCreado = new Subject<boolean>();

  // variable de cambio al cual se subscriben
  //public creadoEmitido$ = this.emitCreado.asObservable();

  constructor(private httpClient: HttpClient) {
    //this.url = "http://192.168.50.7";
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

  editarExamenFacial(examen: ExamenFacial) {
    return this.httpClient.patch(this.url + this.port + '/api/examenFacial', examen);
  }

  guardarExamenFuncional(examen: ExamenFuncional, id_tratamiento: string) {
    examen.tratamientoId = id_tratamiento;
    return this.httpClient.post(this.url + this.port + '/api/examenFuncionals', examen);
  }

  editarExamenFuncional(examen: ExamenFuncional) {
    return this.httpClient.patch(this.url + this.port + '/api/examenFuncionals', examen);
  }

  guardarExamenDental(examen: ExamenDental, id_tratamiento: string) {
    examen.tratamientoId = id_tratamiento;
    return this.httpClient.post(this.url + this.port + '/api/examenDental', examen);
  }

  editarExamenDental(examen: ExamenDental) {
    return this.httpClient.patch(this.url + this.port + '/api/examenDental', examen);
  }

  guardarRelacionesDentales(examen: RelacionesDentales, id_tratamiento: string) {
    examen.tratamientoId = id_tratamiento;
    return this.httpClient.post(this.url + this.port + '/api/relacionesDentales', examen);
  }

  editarRelacionesDentales(examen: RelacionesDentales) {
    return this.httpClient.patch(this.url + this.port + '/api/relacionesDentales', examen);
  }

}
