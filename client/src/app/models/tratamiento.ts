export class Tratamiento {

    public nombre: string;
    public fecha_creacion: Date;
    public archivado: boolean;
    public descripcion: string;
    public fecha_actualizacion: Date;
    public id: string;
    public pacienteId: string;
    public presupuestos = {
        "ortodoncia": {},
        "odontologia_general": {}
    };

    constructor() {
    }
}
