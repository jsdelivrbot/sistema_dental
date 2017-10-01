// Angular
// https://angular.io/
import { NgModule, ModuleWithProviders } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

// Angular Material
// https://material.angular.io/
import {
	MdAutocompleteModule,
	MdButtonModule,
	MdButtonToggleModule,
	MdCardModule,
	MdCheckboxModule,
	MdChipsModule,
	MdCoreModule,
	MdDatepickerModule,
	MdDialogModule,
	MdExpansionModule,
	MdGridListModule,
	MdIconModule,
	MdInputModule,
	MdListModule,
	MdMenuModule,
	MdNativeDateModule,
	MdProgressBarModule,
	MdProgressSpinnerModule,
	MdRadioModule,
	MdRippleModule,
	MdSelectModule,
	MdSidenavModule,
	MdSliderModule,
	MdSlideToggleModule,
	MdSnackBarModule,
	MdTabsModule,
	MdToolbarModule,
	MdTooltipModule,
	StyleModule
} from "@angular/material";
import { NguUtilityModule } from "ngu-utility/ngu-utility.module";
import { MalihuScrollbarModule } from "ngx-malihu-scrollbar";
// ngx-bootstrap4
// http://valor-software.com/ngx-bootstrap/index-bs4.html#/
import { TabsModule } from "ngx-bootstrap/tabs";
import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { AlertModule } from "ngx-bootstrap/alert";
import { ModalModule } from "ngx-bootstrap/modal";
import { PopoverModule } from "ngx-bootstrap/popover";

// UI Shared Components
import { FooterComponent } from "../layout/footer/footer.component";
import { AppBackdropComponent } from "./components/app_backdrop/app_backdrop.component";

import {
	SmdFabSpeedDialActionsComponent,
	SmdFabSpeedDialComponent,
	SmdFabSpeedDialTriggerComponent
} from "./components/fab/index";
import { MomentModule } from 'angular2-moment';
import {NgxPaginationModule} from 'ngx-pagination';
import { DetallesPacienteComponent } from './components/detalles-paciente/detalles-paciente.component';
import { Ng2IziToastModule } from 'ng2-izitoast';
import { SimpleNotificationsModule } from "angular2-notifications";

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		MdAutocompleteModule,
		MdButtonModule,
		MdButtonToggleModule,
		MdCardModule,
		MdCheckboxModule,
		MdChipsModule,
		MdCoreModule,
		MdDatepickerModule,
		MdDialogModule,
		MdExpansionModule,
		MdGridListModule,
		MdIconModule,
		MdInputModule,
		MdListModule,
		MdMenuModule,
		MdNativeDateModule,
		MdProgressBarModule,
		MdProgressSpinnerModule,
		MdRadioModule,
		MdRippleModule,
		MdSelectModule,
		MdSidenavModule,
		MdSliderModule,
		MdSlideToggleModule,
		MdSnackBarModule,
		MdTabsModule,
		MdToolbarModule,
		MdTooltipModule,
		StyleModule,
		NguUtilityModule,
		BsDropdownModule.forRoot(),
		AlertModule.forRoot(),
		TabsModule.forRoot(),
		MalihuScrollbarModule.forRoot(),
		ModalModule.forRoot(),
		PopoverModule.forRoot(),
		MomentModule,
		NgxPaginationModule,
		Ng2IziToastModule,
	],
	declarations: [
		AppBackdropComponent,
		FooterComponent,
		SmdFabSpeedDialActionsComponent,
		SmdFabSpeedDialComponent,
		SmdFabSpeedDialTriggerComponent,
		DetallesPacienteComponent
	],
	exports: [
		CommonModule,
		FormsModule,
		MdAutocompleteModule,
		MdButtonModule,
		MdButtonToggleModule,
		MdCardModule,
		MdCheckboxModule,
		MdChipsModule,
		MdCoreModule,
		MdDatepickerModule,
		MdDialogModule,
		MdExpansionModule,
		MdGridListModule,
		MdIconModule,
		MdInputModule,
		MdListModule,
		MdMenuModule,
		MdNativeDateModule,
		MdProgressBarModule,
		MdProgressSpinnerModule,
		MdRadioModule,
		MdRippleModule,
		MdSelectModule,
		MdSidenavModule,
		MdSliderModule,
		MdSlideToggleModule,
		MdSnackBarModule,
		MdTabsModule,
		MdToolbarModule,
		MdTooltipModule,
		StyleModule,
		NguUtilityModule,
		AppBackdropComponent,
		FooterComponent,
		ReactiveFormsModule,
		TabsModule,
		BsDropdownModule,
		AlertModule,
		MalihuScrollbarModule,
		ModalModule,
		PopoverModule,
		SmdFabSpeedDialActionsComponent,
		SmdFabSpeedDialComponent,
		SmdFabSpeedDialTriggerComponent,
		MomentModule,
		NgxPaginationModule,
		DetallesPacienteComponent,
		Ng2IziToastModule,
	]
})
export class SharedModule {
	static forRoot(): ModuleWithProviders {
		return {
			ngModule: SharedModule
		};
	}
}
