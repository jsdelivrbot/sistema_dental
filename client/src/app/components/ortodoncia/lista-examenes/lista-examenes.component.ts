import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { Paciente } from 'app/models/paciente';
import { PacienteService } from 'app/services/pacientes/paciente.service';
import { ActivatedRoute } from '@angular/router';
import { ExamenService } from 'app/services/examenes/examen.service';
import { TratamientoService } from 'app/services/tratamientos/tratamiento.service';
import {ExamenFuncional} from "../../../models/examen-funcional";
import {ExamenDental} from "../../../models/examen-dental";
import {RelacionesDentales} from "../../../models/relaciones-dentales";

@Component({
  selector: 'app-lista-examenes',
  templateUrl: './lista-examenes.component.html',
  styleUrls: ['./lista-examenes.component.scss']
})
export class ListaExamenesComponent implements OnInit, AfterViewInit {

  public title = "Exámenes Ortodoncia";
  private id_paciente: string;
  private id_tratamiento: string;
  public paciente: Paciente;
  public cargando = true;
  public examenes_realizados = {
    examenFacial: {realizado: false, fecha_actualizacion: ''},
    examenFuncional: {realizado: false, fecha_actualizacion: ''},
    examenDental: {realizado: false, fecha_actualizacion: ''},
    relacionesDentales: {realizado: false, fecha_actualizacion: ''}
  };

  constructor(
    private _pacienteService: PacienteService,
    private _activatedRoute: ActivatedRoute,
    private _examenService: ExamenService,
    private _tratamientoService: TratamientoService
  ) {
  }

  ngOnInit() {
    this._activatedRoute.parent.params.subscribe(
      params => {
        this.id_tratamiento = params['id'];

        // Obtener los examenes del paciente para este tratamiento
        // Ver cuales estan hechos
        this._tratamientoService.examenFacialRealizado(this.id_tratamiento).subscribe(
          (result: any) => {
            if (result.id != null) {
              console.log(result);
              this.examenes_realizados.examenFacial.realizado = true;
              this.examenes_realizados.examenFacial.fecha_actualizacion = result.fecha_actualizacion;
              console.log(this.examenes_realizados.examenFacial.fecha_actualizacion);
            }
          }
        );
        this._tratamientoService.examenFuncionalReaizado(this.id_tratamiento).subscribe(
          (result: ExamenFuncional) => {
            if ( result.id != null ) {
              this.examenes_realizados.examenFuncional.realizado = true;
              this.examenes_realizados.examenFuncional.fecha_actualizacion = result.fecha_actualizacion.toString();
            }
          }
        );
        this._tratamientoService.examenDentalRealizado(this.id_tratamiento).subscribe(
          (result: ExamenDental) => {
            if ( result.id != null ) {
              this.examenes_realizados.examenDental.realizado = true;
              this.examenes_realizados.examenDental.fecha_actualizacion = result.fecha_actualizacion.toString();
            }
          }
        );
        this._tratamientoService.relacionesDentalesRealizado(this.id_tratamiento).subscribe(
          (result: RelacionesDentales) => {
            if ( result.id != null ) {
              this.examenes_realizados.relacionesDentales.realizado = true;
              this.examenes_realizados.relacionesDentales.fecha_actualizacion = result.fecha_actualizacion.toString();
            }
          }
        );
      }
    );
    this._activatedRoute.parent.parent.params.subscribe(
      params => {
        this.id_paciente = params['id'];
        this.obtenerDatosPaciente();
      }
    );
  }

  ngAfterViewInit() {
  }

  obtenerDatosPaciente() {
    this._pacienteService.getPaciente(this.id_paciente).subscribe(
      (value: Paciente) => {
        if (value.id != null) {
          this.paciente = value;
          this.cargando = false;
        }
      }
    )
  }
}
