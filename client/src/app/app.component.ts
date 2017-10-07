import {
	Component,
	HostBinding,
	OnInit,
	HostListener,
	ViewContainerRef,
	AfterViewInit
} from "@angular/core";
import { Title } from "@angular/platform-browser";
declare var $: any;
import { GlobalState } from "./app.state";
import { ConfigService } from "./shared/services/config/config.service";
import { PreloaderService } from "./shared/services/preloader/preloader.service";
import { SpinnerService } from "./shared/services/spinner/spinner.service";
import { ThemesService } from "./shared/services/themes/themes.service";
import { AlertMessage, AlertService } from "app/services/alert/alert.service";
import { NotificationsService } from "angular2-notifications";
@Component({
	selector: "app-root",
	templateUrl: './app.component.html',
	styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit, AfterViewInit {

	public options = {
		position: ["top", "right"],
		timeOut: 0,
		lastOnBottom: true
	}

	//App Left Sidebar Menu Open/Close Desktop
	@HostBinding("class.app_sidebar-menu-collapsed")
	get isApp_SidebarLeftCollapsed() {
		return this.config.appLayout.isApp_SidebarLeftCollapsed;
	}
	//Left Menu Sidebar Open/Close Tablet & Mobile
	@HostBinding("class.app_sidebar-left-open")
	get isApp_MobileSidebarLeftOpen() {
		return this.config.appLayout.isApp_MobileSidebarLeftOpen;
	}
	//App Right Sidebar Open/Close
	@HostBinding("class.sidebar-overlay-open")
	get isApp_SidebarRightOpen() {
		return this.config.appLayout.isApp_SidebarRightOpen;
	}

	//The constructor is called first time before the ngOnInit()
	//The constructor should only be used to initialize class members but shouldn't do actual "work".
	//So you should use constructor() to setup Dependency Injection and not much else.
	constructor(
		private _state: GlobalState,
		public config: ConfigService,
		private viewContainerRef: ViewContainerRef,
		private _spinner: SpinnerService,
		private titleService: Title,
		private themesService: ThemesService,
		private _alertService: AlertService,
		private _notificationsService: NotificationsService
	) {
		this._alertService.alertStatus.subscribe(
			(alert: AlertMessage) => {
				console.log("evento recibido");
				this.lanzarNotificacion(alert.show, alert.message, alert.status);
			}
		);

		this.themesService.setTheme('E');
	}

	lanzarNotificacion(isShow, msg, status) {
		if (isShow) {
			console.log("notificacion lanzada desde el app component");
			if ( status === 1 ) {
				this._notificationsService.success('Exito', msg, {
					timeOut: 3000,
					showProgressBar: true,
					pauseOnHover: true,
					clickToClose: true
				});
			}
			if ( status === 2 ) {
				this._notificationsService.error('Error', msg, {
					timeOut: 3000,
					showProgressBar: true,
					pauseOnHover: true,
					clickToClose: true
				});
			}
		}
	}

	public setTitle(newTitle: string) {
		this.titleService.setTitle(newTitle);
	}
	//called after the constructor and called  after the first ngOnChanges()
	//ngOnInit() is better place to "start" - it's where/when components' bindings are resolved.
	ngOnInit() {
		$(document).on("click", '[href="#"]', e => e.preventDefault());
	}
	//check if menu should reset on resize
	@HostListener("window:resize")
	public onWindowResize(): void {
		if (this._shouldMenuReset()) {
			this.config.appLayout.isApp_SidebarLeftCollapsed = false;
		}
	}

	private _shouldMenuReset(): boolean {
		return window.innerWidth <= this.config.breakpoint.desktopLG;
	}

	public ngAfterViewInit(): void {
		PreloaderService.load().then(values => {
			this._spinner.hide();
		});
	}
}
