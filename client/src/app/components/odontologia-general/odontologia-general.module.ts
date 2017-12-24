import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {OdontologiaGeneralRoutingModule} from "./odontologia-general.routing";
import {SharedModule} from "../../shared/shared.module";
import { ExamenGeneralComponent } from './examen-general/examen-general.component';
import { EditarExamenGeneralComponent } from './editar-examen-general/editar-examen-general.component';

@NgModule({
  imports: [
    CommonModule,
    OdontologiaGeneralRoutingModule,
    SharedModule
  ],
  declarations: [ExamenGeneralComponent, EditarExamenGeneralComponent]
})
export class OdontologiaGeneralModule { }
