import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Tratamiento} from "../../models/tratamiento";

@Injectable()
export class UtilService {

  private url: string;
  private port: string;

  constructor(private httpClient: HttpClient) {
    this.url = "http://localhost";
    this.port = ":3000";
  }

  imprimirPresupuestoOrtodoncia(tratamiento: Tratamiento) {

  }
}
