import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

export class AlertMessage {
    public show: boolean;
    public message: string;
    public status: number;
}

@Injectable()
export class AlertService {
    public alertStatus: BehaviorSubject<AlertMessage> = new BehaviorSubject<AlertMessage>({ show: false, message: null, status: 0 });

    showAlert(isShow: boolean, msg: string, status: number) {
        console.log("mostrar mensaje");
        const alertObj: AlertMessage = { show: isShow, message: msg, status: status};
        this.alertStatus.next(alertObj);
    }
}
