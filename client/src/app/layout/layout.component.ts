import { Component, ViewEncapsulation, ElementRef, OnInit, HostBinding, AfterViewInit, ViewChild } from '@angular/core';
import { GlobalState } from '../app.state';

import { ConfigService } from '../shared/services/config/config.service';
import { Router, Event, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
@Component({
	selector: 'app-layout',
	templateUrl: './layout.component.html',
	styleUrls: ['./layout.component.scss'],
	encapsulation: ViewEncapsulation.Emulated,
})
export class LayoutComponent implements OnInit, AfterViewInit {

	constructor(
		public config: ConfigService,
		private _elementRef: ElementRef,
		private _state: GlobalState,
		private _router: Router,
	) {
	}

	ngOnInit() {
	}

	ngAfterViewInit(): void {

	}


}
