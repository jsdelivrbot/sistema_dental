import {Component, OnInit, ViewChild} from '@angular/core';
import {Paciente} from 'app/models/paciente';
import {ActivatedRoute, Router} from '@angular/router';
import {PacienteService} from 'app/services/pacientes/paciente.service';
import {TratamientoService} from 'app/services/tratamientos/tratamiento.service';
import {PreciosService} from 'app/services/precios/precios.service';
import {AlertService} from 'app/services/alert/alert.service';
import {Servicio} from 'app/models/servicio';
import {PresupuestoOrtodoncia, ResumenPresupuestoOrtodoncia} from "../../../models/presupuesto-ortodoncia";
import {Tratamiento} from "../../../models/tratamiento";
import {ModalDirective} from "ngx-bootstrap";

@Component({
    selector: 'app-presupuesto-ortodoncia',
    templateUrl: './presupuesto-ortodoncia.component.html',
    styleUrls: ['./presupuesto-ortodoncia.component.scss']
})
export class PresupuestoOrtodonciaComponent implements OnInit {

    @ViewChild('modalMensualidadesVestibular') modalVestibular: ModalDirective;
    @ViewChild('modalMensualidadesLingual') modalLingual: ModalDirective;

    public title = "Presupuesto Ortodoncia";
    public cargando = true;
    private id_paciente: string;
    private id_tratamiento: string;
    public paciente: Paciente;
    public servicios: Array<Servicio>;
    public serviciosExtras: Array<Servicio>;
    public presupuesto: PresupuestoOrtodoncia;
    public resumenPresupuesto: ResumenPresupuestoOrtodoncia;

    public mesesVestibular: any;
    public mesesLingual: any;
    public total1 = 0;
    public total2 = 0;
    public desde: number;
    public hasta: number;

    public mesesVestibularArray = [
      { value: [6,12],  str: "6 a 12 meses" },
      { value: [12,18], str: "12 a 18 meses" },
      { value: [18,24], str: "18 a 24 meses" },
      { value: [24,30], str: "24 a 30 meses" },
      { value: [30,36], str: "30 a 36 meses" }
    ];
    public mesesLingualArray = [
      { value: [6,12],  str: "6 a 12 meses" },
      { value: [12,18], str: "12 a 18 meses" },
      { value: [18,24], str: "18 a 24 meses" },
      { value: [24,30], str: "24 a 30 meses" },
      { value: [30,36], str: "30 a 36 meses" }
    ];

    public tratamiento: Tratamiento;

    constructor(private _router: Router,
                private _activatedRoute: ActivatedRoute,
                private _pacienteService: PacienteService,
                private _tratamientoService: TratamientoService,
                private _preciosService: PreciosService,
                private _alertService: AlertService) {
        this.presupuesto = new PresupuestoOrtodoncia();
        this.resumenPresupuesto = new ResumenPresupuestoOrtodoncia();
    }

    ngOnInit() {
        this._activatedRoute.parent.params.subscribe(
            params => {
                this.id_paciente = params['id'];
                this.obtenerPaciente();
            }
        );
        this._activatedRoute.params.subscribe(
            params => {
                this.id_tratamiento = params['id'];
                this.obtenerTratamiento();
            }
        );
    }


    // Obtiene al paciente desde el servicio
    obtenerPaciente() {
        this._pacienteService.getPaciente(this.id_paciente).subscribe(
            (value: Paciente) => {
                if (value.id != null) {
                    this.paciente = value;

                    this.obtenerServiciosOrtodoncia();
                }
            },
            error => {
                console.log(error);
                this._alertService.showAlert(true, 'Algo ha salido mal', 2);
            }
        );
    }
    // agrega otra opcion de mensualidad vestibular
    agregarOtraMensulidadVestibular() {
      let mensualidad = {value: [this.desde, this.hasta], str: this.desde + " a " + this.hasta + " meses"};
      this.mesesVestibularArray.push(mensualidad);
      this.modalVestibular.hide();
    }

    // agrega otra opcion de mensualidad lingual
    agregarOtraMensulidadLingual() {
      let mensualidad = {value: [this.desde, this.hasta], str: this.desde + " a " + this.hasta + " meses"};
      this.mesesLingualArray.push(mensualidad);
      this.modalLingual.hide();
    }

    //obtiene el tratamiento actual
    obtenerTratamiento() {
        this._tratamientoService.obtenerTratamiento(this.id_tratamiento).subscribe(
            (result: Tratamiento) => {
                this.tratamiento = result;
                console.log("tratamiento", result);
            },
            error => {
                console.log(error);
                this._alertService.showAlert(true, 'Algo ha salido mal', 2);
            }
        );
    }

    obtenerServiciosOrtodoncia() {
        this._preciosService.obtenerServiciosOrtodonciaBase().subscribe(
            (result: Array<Servicio>) => {
                this.servicios = result;
                console.log(this.servicios);
                this.obtenerServiciosOrtodonciaExtras();
            },
            error => {
                console.log(error);
                this._alertService.showAlert(true, 'Algo ha salido mal', 2);
            }
        );
    }

    obtenerServiciosOrtodonciaExtras() {
        this._preciosService.obtenerServiciosOrtodonciaExtras().subscribe(
            (result: Array<Servicio>) => {
                this.serviciosExtras = result;
                console.log(this.serviciosExtras);
                this.cargando = false;
            },
            error => {
                console.log(error);
                this._alertService.showAlert(true, 'Algo ha salido mal', 2);
            }
        );
    }

    reposicionBracketMetalicoVestibular(event, servicio) {
        this.resumenPresupuesto = new ResumenPresupuestoOrtodoncia();
        this.resumenPresupuesto.nombre = servicio.nombre;
        this.resumenPresupuesto.precio = servicio.precio;

        if (event.checked) {
            this.presupuesto.reposicionBracketMetalicoVestibular = servicio.precio;
            this.presupuesto.resumen.push(this.resumenPresupuesto);
        } else {
            this.presupuesto.reposicionBracketMetalicoVestibular = 0;
            this.presupuesto.resumen.filter(function (value, index) {
              if ( value.nombre.indexOf(this.resumenPresupuesto.nombre) != -1 ) {
                this.presupuesto.resumen.splice(index, 1);
              }
            }, this);
        }
        this.calcularTotal();
    }

    reposicionBracketCeramicoVestibular(event, servicio) {
      this.resumenPresupuesto = new ResumenPresupuestoOrtodoncia();
      this.resumenPresupuesto.nombre = servicio.nombre;
        this.resumenPresupuesto.precio = servicio.precio;

        if (event.checked) {
            this.presupuesto.reposicionBracketCeramicosVestibular = servicio.precio;
            this.presupuesto.resumen.push(this.resumenPresupuesto);
        } else {
            this.presupuesto.reposicionBracketCeramicosVestibular = 0;
            this.presupuesto.resumen.filter(function (value, index) {
              if ( value.nombre.indexOf(this.resumenPresupuesto.nombre) != -1 ) {
                this.presupuesto.resumen.splice(index, 1);
              }
            }, this);
        }

        this.calcularTotal();
    }

    mensualidadVestibular(event) {
        // posicion 4 del arreglo de servicios
        const valor = this.servicios[4].precio;
        let valores = this.mesesVestibular.split(',');
        const mesInicio = parseInt(valores[0]);
        const mesFin = parseInt(valores[1]);

        this.presupuesto.mensualidad1Vestibular = valor * mesInicio;
        this.presupuesto.mensualidad2Vestibular = valor * mesFin;

        this.calcularTotal();

        this.resumenPresupuesto = new ResumenPresupuestoOrtodoncia();
        this.resumenPresupuesto.nombre = mesInicio + " a " + mesFin + " meses";
        this.resumenPresupuesto.precio = valor;
        this.presupuesto.resumen.filter(function (value, index) {
          if ( value.nombre.indexOf("meses") != -1 ){
              this.presupuesto.resumen.splice(index, 1);
          }
        }, this);
        this.presupuesto.resumen.push(this.resumenPresupuesto);
    }

    reposicionBracketMetalicoLingual(event, servicio) {
        this.resumenPresupuesto = new ResumenPresupuestoOrtodoncia();
        this.resumenPresupuesto.nombre = servicio.nombre;
        this.resumenPresupuesto.precio = servicio.precio;

        if (event.checked) {
            this.presupuesto.reposicionBracketMetalicoLingual = servicio.precio;
            this.presupuesto.resumen.push(this.resumenPresupuesto);
        } else {
            this.presupuesto.reposicionBracketMetalicoLingual = 0;
            this.presupuesto.resumen.filter(function (value, index) {
              if ( value.nombre.indexOf(this.resumenPresupuesto.nombre) != -1 ) {
                this.presupuesto.resumen.splice(index, 1);
              }
            }, this);
        }

        this.calcularTotal();
    }

    mensualidadLingual(event) {
        // posicion 7 del arreglo de servicios
        const valor = this.servicios[7].precio;
        let valores = this.mesesLingual.split(',');
        const mesInicio = parseInt(valores[0]);
        const mesFin = parseInt(valores[1]);

        this.presupuesto.mensualidad1Lingual = valor * mesInicio;
        this.presupuesto.mensualidad2Lingual = valor * mesFin;

        this.calcularTotal();

        this.resumenPresupuesto = new ResumenPresupuestoOrtodoncia();
        this.resumenPresupuesto.nombre = mesInicio + " a " + mesFin + " meses";
        this.resumenPresupuesto.precio = valor;
        this.presupuesto.resumen.filter(function (value, index) {
          if ( value.nombre.indexOf("meses") != -1 ){
            this.presupuesto.resumen.splice(index, 1);
          }
        }, this);
        this.presupuesto.resumen.push(this.resumenPresupuesto);
    }

    aniadirExtras(event, extra) {
        if ( event.checked ){
            this.presupuesto.extras.unshift(extra);
        }else {
            let index = this.presupuesto.extras.indexOf(extra);
            this.presupuesto.extras.splice(index, 1);
        }
        this.calcularTotal();
    }

    aparatologiaFijaVestibular(event) {
      this.resumenPresupuesto = new ResumenPresupuestoOrtodoncia();
      this.resumenPresupuesto.nombre = event.value.nombre;
      this.resumenPresupuesto.precio = event.value.precio;

      this.presupuesto.resumen.filter(function (value, index) {
        if ( value.nombre.indexOf("fija") != -1 ) {
          this.presupuesto.resumen.splice(index, 1);
        }
      }, this);

      this.presupuesto.resumen.push(this.resumenPresupuesto);
      this.presupuesto.aparatologiaFijaVestibular = event.value.precio;
      this.calcularTotal();
    }

    aparatologiaFijaLingual(event) {
      this.resumenPresupuesto = new ResumenPresupuestoOrtodoncia();
      this.resumenPresupuesto.nombre = event.value.nombre;
      this.resumenPresupuesto.precio = event.value.precio;

      this.presupuesto.resumen.filter(function (value, index) {
        if ( value.nombre.indexOf("lingual") != -1 ) {
          this.presupuesto.resumen.splice(index, 1);
        }
      }, this);

      this.presupuesto.resumen.push(this.resumenPresupuesto);
      this.presupuesto.aparatologiaFijaLingual = event.value.precio;
      this.calcularTotal();
    }

    calcularTotal() {
        this.total1 = this.total2 =  this.presupuesto.aparatologiaFijaVestibular
        + this.presupuesto.reposicionBracketCeramicosVestibular
        + this.presupuesto.reposicionBracketMetalicoVestibular
        + this.presupuesto.aparatologiaFijaLingual
        + this.presupuesto.reposicionBracketMetalicoLingual;

        this.total1 += this.presupuesto.mensualidad1Vestibular + this.presupuesto.mensualidad1Lingual;
        this.total2 += this.presupuesto.mensualidad2Vestibular + this.presupuesto.mensualidad2Lingual;

        /*for ( let i = 0; i < this.presupuesto.extras.length; i++ ) {
            let valor = this.presupuesto.extras[i].precio;
            this.total1 += valor;
            this.total2 += valor;
        }*/

      console.log(this.presupuesto.resumen);
    }

    onSubmit() {
        // revisar si el tratamiento tiene el presupuesto seteado
        if ( typeof this.tratamiento.presupuestos == 'undefined'){
            this.tratamiento.presupuestos = {
                "ortodoncia": {},
                "odontologia_general": {}
            };
        }

        this.presupuesto.total1 = this.total1;
        this.presupuesto.total2 = this.total2;
        this.tratamiento.presupuestos.ortodoncia = this.presupuesto;

        this._tratamientoService.editarTratamiento(this.tratamiento).subscribe(
            (result: Tratamiento) => {
                if ( result.id != null ) {
                    this._router.navigate(['../../'], {relativeTo: this._activatedRoute});
                    this._alertService.showAlert(true, 'Presupuesto de ortodoncia guardado', 1);
                }
            },
            error => {
                console.log(error);
                this._alertService.showAlert(true, 'Algo ha salido mal', 2);
            }
        );
    }

}
