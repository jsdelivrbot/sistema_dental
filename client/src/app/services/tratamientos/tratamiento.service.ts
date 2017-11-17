import { Injectable } from '@angular/core';
import {HttpClient, HttpParams, HttpHeaders} from '@angular/common/http';
import { Tratamiento } from 'app/models/tratamiento';
import { Observer } from 'rxjs/Observer';
import {PlanTratamiento} from "../../models/plan-tratamiento";
import {Http, Headers, ResponseContentType} from "@angular/http";
import {ListadoProblemas} from "../../models/listado-problemas";

@Injectable()
export class TratamientoService {

  private url: string;
  private port: string;

  constructor(private httpClient: HttpClient, private http: Http) {
    //this.url = "http://192.168.50.7";
    this.url = "http://localhost";
    this.port = ":3000";
  }

  obtenerTratamiento(id_tratamiento) {
    return this.httpClient.get(this.url + this.port + '/api/tratamientos/' + id_tratamiento);
  }

  obtenerTratamientoYPaciente(id_tratamiento) {
    const url = `${this.url + this.port}/api/tratamientos/${id_tratamiento}?filter={"include":{"relation":"paciente"}}`;
    return this.httpClient.get(url);
  }

  obtenerTratamientoActivo(id_paciente) {
    const params = new HttpParams().set('filter', '{"where": {"archivado":"false"}}');
    return this.httpClient.get(this.url + this.port + '/api/pacientes/' + id_paciente + '/tratamientos', {params: params});
  }

  obtenerListaDeTratamientosArchivados(id_paciente) {
    const params = new HttpParams().set('filter', '{"where": {"archivado":"true"}}');
    return this.httpClient.get(this.url + this.port + '/api/pacientes/' + id_paciente + '/tratamientos', {params: params});
  }

  guardarTratamiento(tratamiento: Tratamiento, id_paciente) {
    tratamiento.pacienteId = id_paciente;
    return this.httpClient.post(this.url + this.port + '/api/tratamientos', tratamiento);
  }

  examenFacialRealizado(id_tratamiento) {
    return this.httpClient.get(this.url + this.port + '/api/tratamientos/' + id_tratamiento + '/examenFacial');
  }

  examenFuncionalReaizado(id_tratamiento) {
    return this.httpClient.get(this.url + this.port + '/api/tratamientos/' + id_tratamiento + '/examenFuncional');
  }

  examenDentalRealizado(id_tratamiento) {
    return this.httpClient.get(this.url + this.port + '/api/tratamientos/' + id_tratamiento + '/examenDental');
  }

  relacionesDentalesRealizado(id_tratamiento) {
    return this.httpClient.get(this.url + this.port + '/api/tratamientos/' + id_tratamiento + '/relacionesDentales');
  }

  archivarTratamiento(tratamiento: Tratamiento) {
    tratamiento.archivado = true;
    return this.httpClient.patch(this.url + this.port + '/api/tratamientos/' + tratamiento.id, tratamiento);
  }

  editarTratamiento(tratamiento: Tratamiento) {
      return this.httpClient.patch(this.url + this.port + '/api/tratamientos/' + tratamiento.id, tratamiento);
  }

  guardarPlanTratamiento(plan: PlanTratamiento, id_tratamiento: string) {
    const url = `${this.url + this.port}/api/planificacionDeTratamiento`;
    plan.tratamientoId = id_tratamiento;
    return this.httpClient.post(url, plan);
  }

  planTratamientoRealizado(id_tratamiento) {
    return this.httpClient.get(this.url + this.port + '/api/tratamientos/' + id_tratamiento + '/planificacionDeTratamiento');
  }

  imprimirPresupuestoOrtodoncia(tratamiento: Tratamiento, planTratamiento: PlanTratamiento, listadoProblemas: ListadoProblemas) {
    const url = `${this.url}:2000/api/report`;
    const headers = new Headers();
    headers.set('Content-Type', 'application/json');
    headers.set('Authorization', 'Basic YWRtaW46cGFzc3dvcmQ=');
    const data = {
      'template':{"shortid":"BJ_drYgTb"},
      'data': {
        'listado_problemas': listadoProblemas,
        'plan_tratamiento': planTratamiento,
        'ortodoncia': tratamiento.presupuestos.ortodoncia
      }
    };
    console.log(tratamiento.presupuestos.ortodoncia);
    console.log(JSON.stringify(data));
    return this.http.post(url, JSON.stringify(data) , {responseType: ResponseContentType.ArrayBuffer, headers: headers});
  }

  editarPlanTratamiento(planTratamiento: PlanTratamiento) {
    const url = `${this.url + this.port}/api/planificacionDeTratamiento/${planTratamiento.id}`;
    return this.httpClient.patch(url, planTratamiento);
  }

  guardarListadoDeProblemas(listadoProblemas: ListadoProblemas) {
    const url = `${this.url + this.port}/api/listadoDeProblemas`;
    return this.httpClient.post(url , listadoProblemas);
  }

  obtenerListadoProblemas(idTratamiento: string) {
    const url = `${this.url + this.port}/api/tratamientos/${idTratamiento}/listadoDeProblemas`;
    return this.httpClient.get(url);
  }
}
