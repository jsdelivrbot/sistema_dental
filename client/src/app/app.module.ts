import { HashLocationStrategy, LocationStrategy } from "@angular/common";
import { BrowserModule, Title } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { AppComponent } from "./app.component";
import { AppState, InternalStateType } from "./app.service";
import { GlobalState } from "./app.state";
import { ServicesModule } from "./shared/services/services.module";
import { SharedModule } from "./shared/shared.module";
import { AppRoutingModule } from "./app.routing";
import { LayoutModule } from "app/layout/layout.module";
import { HttpClientModule } from "@angular/common/http";
import { AlertService } from "app/services/alert/alert.service";
import { ExamenService } from "app/services/examenes/examen.service";
import { NotificationsService, SimpleNotificationsModule } from "angular2-notifications";

// Application wide providers
const APP_PROVIDERS = [AppState, GlobalState, Title, {provide: LocationStrategy, useClass: HashLocationStrategy}];

export type StoreType = {
	state: InternalStateType;
	restoreInputValues: () => void;
	disposeOldHosts: () => void;
};

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		ReactiveFormsModule,
		BrowserAnimationsModule,
		ServicesModule,
		SimpleNotificationsModule.forRoot(),
		SharedModule.forRoot(),
		AppRoutingModule,
		HttpClientModule,
		LayoutModule
	],
	providers: [APP_PROVIDERS, AlertService, NotificationsService],
	bootstrap: [AppComponent]
})
export class AppModule {
	constructor(public appState: AppState) {}
}
