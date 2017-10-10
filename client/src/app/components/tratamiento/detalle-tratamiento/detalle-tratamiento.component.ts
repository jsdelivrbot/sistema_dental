import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Paciente} from 'app/models/paciente';
import {PacienteService} from 'app/services/pacientes/paciente.service';
import {TratamientoService} from 'app/services/tratamientos/tratamiento.service';
import {Tratamiento} from "../../../models/tratamiento";
import {AlertService} from "../../../services/alert/alert.service";

@Component({
    selector: 'app-detalle-tratamiento',
    templateUrl: './detalle-tratamiento.component.html',
    styleUrls: ['./detalle-tratamiento.component.scss']
})
export class DetalleTratamientoComponent implements OnInit {


    public title = "Detalle Tratamiento";
    public cargando = true;
    private id_paciente: string;
    private id_tratamiento: string;
    public paciente: Paciente;
    public tratamiento: Tratamiento;
    public prespuestoOrtodonciaRealizado: boolean;

    constructor(private _activatedRoute: ActivatedRoute,
                private _pacienteService: PacienteService,
                private _tratamientoService: TratamientoService,
                private _alertService: AlertService) {
        this.prespuestoOrtodonciaRealizado = false;
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
                    this.cargando = false;
                }
            },
            error => {
                console.log(error);
            }
        );
    }

    //obtiene el tratamiento actual
    obtenerTratamiento() {
        this._tratamientoService.obtenerTratamiento(this.id_tratamiento).subscribe(
            (result: Tratamiento) => {
                this.tratamiento = result;
                if ( this.tratamiento.presupuestos.ortodoncia != null ) {
                    this.prespuestoOrtodonciaRealizado = true;
                }
            },
            error => {
                console.log(error);
                this._alertService.showAlert(true, 'Algo ha salido mal', 2);
            }
        );
    }
}
