class  DetalleExamenDentario {

  public num1: number;
  public num2: number;
  public idTratamiento: string;
  public nombreTratamiento: string;
  public cantidadTratamiento: number;
  public precioTratamiento: number;
}

export class ExamenOdontologiaGeneral {

  public hia_dental_actual: boolean;
  public hia_dental_actual_txt: string;
  public hia_dental_pasada: boolean;
  public hia_dental_pasada_txt: string;
  public hia_dental_higiene_oral: boolean;
  public hia_dental_higiene_oral_txt: string;
  public hia_dental_habitos: boolean;
  public hia_dental_habitos_txt: string;
  public hia_medica_ant_familiares: boolean;
  public hia_medica_ant_familiares_txt: string;
  public hia_medica_ant_personales: boolean;
  public hia_medica_ant_personales_txt: string;
  public hia_medica_enfermedades: boolean;
  public hia_medica_enfermedades_txt: string;
  public hia_medica_interconsulta: boolean;
  public hia_medica_interconsulta_txt: string;
  public examen_clinico_extraoral: boolean;
  public examen_clinico_extraoral_txt: string;
  public examen_clinico_intraoral: boolean;
  public examen_clinico_intraoral_txt: string;
  public examen_clinico_periodonto: boolean;
  public examen_clinico_periodonto_txt: string;
  public examen_dentario: Array<DetalleExamenDentario>;
  public oclusion: string;
  public implantes: string;
  public prot_fija_plural: string;
  public prot_removible: string;
  public oclusionTipo: string;
  public smv: string;
  public smh: string;
  public facetas_abfracciones: string;
  public mic_rc: string;
  public lat_der_t: string;
  public lat_derb: string;
  public lat_der_hb: string;
  public lat_izq_t: string;
  public lat_izq_b: string;
  public lat_izq_hb: string;
  public radiologico: string;
  public id: string;

  constructor() {
    this.hia_dental_actual = false;
    this.hia_dental_pasada = false;
    this.hia_dental_higiene_oral = false;
    this.hia_dental_habitos = false;

    this.hia_medica_ant_familiares = false;
    this.hia_medica_ant_personales = false;
    this.hia_medica_enfermedades = false;
    this.hia_medica_interconsulta = false;

    this.examen_clinico_extraoral = false;
    this.examen_clinico_intraoral = false;
    this.examen_clinico_periodonto = false;

    this.examen_dentario = new Array<DetalleExamenDentario>(32);
    for(let i = 0; i < this.examen_dentario.length; i++) {
      this.examen_dentario[i] = new DetalleExamenDentario();
    }
    this.examen_dentario[0].num1 = 1.1;
    this.examen_dentario[0].num2 = 8;
    this.examen_dentario[1].num1 = 2.1;
    this.examen_dentario[1].num2 = 9;
    this.examen_dentario[2].num1 = 1.2;
    this.examen_dentario[2].num2 = 7;
    this.examen_dentario[3].num1 = 2.2;
    this.examen_dentario[3].num2 = 10;
    this.examen_dentario[4].num1 = 1.3;
    this.examen_dentario[4].num2 = 6;
    this.examen_dentario[5].num1 = 2.3;
    this.examen_dentario[5].num2 = 11;
    this.examen_dentario[6].num1 = 1.4;
    this.examen_dentario[6].num2 = 5;
    this.examen_dentario[7].num1 = 2.4;
    this.examen_dentario[7].num2 = 12;
    this.examen_dentario[8].num1 = 1.5;
    this.examen_dentario[8].num2 = 4;
    this.examen_dentario[9].num1 = 2.5;
    this.examen_dentario[9].num2 = 13;
    this.examen_dentario[10].num1 = 1.6;
    this.examen_dentario[10].num2 = 3;
    this.examen_dentario[11].num1 = 2.6;
    this.examen_dentario[11].num2 = 14;
    this.examen_dentario[12].num1 = 1.7;
    this.examen_dentario[12].num2 = 2;
    this.examen_dentario[13].num1 = 2.7;
    this.examen_dentario[13].num2 = 15;
    this.examen_dentario[14].num1 = 1.8;
    this.examen_dentario[14].num2 = 1;
    this.examen_dentario[15].num1 = 2.8;
    this.examen_dentario[15].num2 = 16;
    this.examen_dentario[16].num1 = 4.1;
    this.examen_dentario[16].num2 = 24;
    this.examen_dentario[17].num1 = 3.1;
    this.examen_dentario[17].num2 = 25;
    this.examen_dentario[18].num1 = 4.2;
    this.examen_dentario[18].num2 = 23;
    this.examen_dentario[19].num1 = 3.2;
    this.examen_dentario[19].num2 = 26;
    this.examen_dentario[20].num1 = 4.3;
    this.examen_dentario[20].num2 = 22;
    this.examen_dentario[21].num1 = 3.3;
    this.examen_dentario[21].num2 = 27;
    this.examen_dentario[22].num1 = 4.4;
    this.examen_dentario[22].num2 = 21;
    this.examen_dentario[23].num1 = 3.4;
    this.examen_dentario[23].num2 = 28;
    this.examen_dentario[24].num1 = 4.5;
    this.examen_dentario[24].num2 = 20;
    this.examen_dentario[25].num1 = 3.5;
    this.examen_dentario[25].num2 = 29;
    this.examen_dentario[26].num1 = 4.6;
    this.examen_dentario[26].num2 = 19;
    this.examen_dentario[27].num1 = 3.6;
    this.examen_dentario[27].num2 = 30;
    this.examen_dentario[28].num1 = 4.7;
    this.examen_dentario[28].num2 = 18;
    this.examen_dentario[29].num1 = 3.7;
    this.examen_dentario[29].num2 = 31;
    this.examen_dentario[30].num1 = 4.8;
    this.examen_dentario[30].num2 = 17;
    this.examen_dentario[31].num1 = 3.8;
    this.examen_dentario[31].num2 = 32;
  }
}
