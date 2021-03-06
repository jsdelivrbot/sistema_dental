import {
	Component,
	ViewEncapsulation,
	ViewChild,
	OnInit,
	HostListener,
	ElementRef,
	Renderer,
	Inject
} from "@angular/core";
import { GlobalState } from "../../../app.state";
import { ConfigService } from "../../../shared/services/config/config.service";
import { MdSidenav } from "@angular/material";
import { TabsetComponent } from "ngx-bootstrap";
@Component({
	selector: ".content_inner_wrapper",
	templateUrl: "./left-side-nav-v1.component.html",
	styleUrls: ["./left-side-nav-v1.component.scss"],
	encapsulation: ViewEncapsulation.Emulated
})
export class LeftSideNavV1Component implements OnInit {
	@ViewChild("staticTabs") staticTabs: TabsetComponent;
	@ViewChild("leftSidenav1") leftSidenav1: MdSidenav;
	@ViewChild("menuTabs") private allMElementRef;
	navMode = "side";
	isActiveTab = false;
	tabLabels = [
		{ label: "Sidenav item 1" },
		{ label: "Sidenav item 2" },
		{ label: "Sidenav item 3" }
	];
	selectTab(tab_id: number, event) {
		this.staticTabs.tabs[tab_id].active = true;
	}

	constructor(
		@Inject(Renderer) private renderer: Renderer,
		public config: ConfigService,
		private _elementRef: ElementRef,
		private _state: GlobalState
	) {}
	ngAfterViewInit() {
		window.setTimeout(() =>
			this.renderer.invokeElementMethod(
				this.allMElementRef.nativeElement,
				"click",
				[]
			)
		);
	}
	ngOnInit() {
		if (window.innerWidth < this.config.breakpoint.desktop) {
			this.navMode = "over";
			this.leftSidenav1.opened = false;
		}
		if (window.innerWidth > this.config.breakpoint.desktop) {
			this.navMode = "side";
			this.leftSidenav1.open();
		}
	}

	@HostListener("window:resize", ["$event"])
	onResize(event) {
		if (event.target.innerWidth < this.config.breakpoint.desktop) {
			this.navMode = "over";
			this.leftSidenav1.close();
		}
		if (event.target.innerWidth > this.config.breakpoint.desktop) {
			this.navMode = "side";
			this.leftSidenav1.open();
		}
	}
}
