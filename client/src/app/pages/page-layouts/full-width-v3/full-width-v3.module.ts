import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FullWidthV3Component } from './full-width-v3.component';
import { SharedModule } from '../../../shared/shared.module';


const FullWidthV3_ROUTE = [
    { path: '', component: FullWidthV3Component },
];

@NgModule({
	  declarations: [FullWidthV3Component],
    imports: [
			CommonModule,
			SharedModule,
			RouterModule.forChild(FullWidthV3_ROUTE)
    ]
  
})
export class FullWidthV3Module { }
