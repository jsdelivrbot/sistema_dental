export class ResumenPresupuestoOrtodoncia {
  public nombre: string;
  public precio: number;
}

export class PresupuestoOrtodoncia {

    public aparatologiaFijaVestibular: number;
    public reposicionBracketMetalicoVestibular: number;
    public reposicionBracketCeramicosVestibular: number;
    public mensualidad1Vestibular: number;
    public mensualidad2Vestibular: number;

    public aparatologiaFijaLingual: number;
    public reposicionBracketMetalicoLingual: number;
    public mensualidad1Lingual: number;
    public mensualidad2Lingual: number;

    public total1: number;
    public total2: number;
    public extras: Array<any>;
    public resumen: Array<ResumenPresupuestoOrtodoncia>;

    constructor() {
        this.aparatologiaFijaVestibular = 0;
        this.reposicionBracketCeramicosVestibular = 0;
        this.reposicionBracketMetalicoVestibular = 0;
        this.mensualidad1Vestibular = 0;
        this.mensualidad2Vestibular = 0;
        this.aparatologiaFijaLingual = 0;
        this.reposicionBracketMetalicoLingual = 0;
        this.mensualidad1Lingual = 0;
        this.mensualidad2Lingual = 0;

        this.total1 = 0;
        this.total2 = 0;

        this.extras = new Array<any>();
        this.resumen = new Array<ResumenPresupuestoOrtodoncia>();
    }
}
