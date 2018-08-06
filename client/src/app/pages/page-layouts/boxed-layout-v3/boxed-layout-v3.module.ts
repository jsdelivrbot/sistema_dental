import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BoxedV3Component } from './boxed-layout-v3.component';
import { SharedModule } from '../../../shared/shared.module';


const BoxedV3_ROUTE = [
    { path: '', component: BoxedV3Component },
];

@NgModule({
	  declarations: [BoxedV3Component],
    imports: [
			CommonModule,
			SharedModule,
			RouterModule.forChild(BoxedV3_ROUTE)
    ]
  
})
export class BoxedV3Module { }
