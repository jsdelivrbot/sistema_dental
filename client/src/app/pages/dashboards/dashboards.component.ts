import {
	Component,
	ViewEncapsulation,
	ViewChild,
	OnInit,
	HostListener,
	ElementRef
} from "@angular/core";
import { GlobalState } from "../../app.state";
import { ConfigService } from "../../shared/services/config/config.service";
import { MdSidenav } from "@angular/material";

@Component({
	selector: ".content_inner_wrapper",
	templateUrl: "./dashboards.component.html",
	styleUrls: ["./dashboards.component.scss"],
	encapsulation: ViewEncapsulation.Emulated
})
export class DashboardsComponent implements OnInit {
	//Header Title
	title: string = "Dashboards";
	//Date
	currentDate: Date;

	//Toggle Sidebar
	@ViewChild("rightSidenav2") rightSidenav2: MdSidenav;
	navMode = "side";

	//Task List
	tasks = [
		{ taskId: 1, title: "add gulp script to project" },
		{ taskId: 2, title: "update style guide" },
		{ taskId: 3, title: "send over prototype to client" },
		{ taskId: 4, title: "complete Landing page" },
		{ taskId: 5, title: "complete SASS helper functions" },
		{ taskId: 6, title: " update icon sheet with @3x" },
		{ taskId: 7, title: "convert logo from png to svg" }
	];
	constructor(
		public config: ConfigService,
		private _elementRef: ElementRef,
		private _state: GlobalState
	) {
		this.currentDate = new Date();
	}

	ngOnInit() {
		if (window.innerWidth < this.config.breakpoint.desktopLG) {
			this.navMode = "over";
			this.rightSidenav2.opened = false;
		}
		if (window.innerWidth > this.config.breakpoint.desktopLG) {
			this.navMode = "side";
			this.rightSidenav2.open();
		}
	}

	@HostListener("window:resize", ["$event"])
	onResize(event) {
		if (event.target.innerWidth < this.config.breakpoint.desktopLG) {
			this.navMode = "over";
			this.rightSidenav2.close();
		}
		if (event.target.innerWidth > this.config.breakpoint.desktopLG) {
			this.navMode = "side";
			this.rightSidenav2.open();
		}
	}
}
