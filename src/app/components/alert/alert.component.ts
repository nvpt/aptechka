import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {AlertService, AlertType, TranslateParamsI} from './alert.service';
import {Subscription} from 'rxjs';

import {Constants} from '../../constants';

@Component({
    selector: 'app-alert',
    templateUrl: './alert.component.html',
    styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit, OnDestroy {
    @Input() delay: number = Constants.ALERT_DELAY;

    text: string = '';
    translateParams: TranslateParamsI;
    type: AlertType = 'success';
    alertSub$: Subscription;
    timeOut: any;

    constructor(private alertService: AlertService) {}

    ngOnInit(): void {
        this.alertSub$ = this.alertService.alert$.subscribe((alert) => {
            this.text = alert.text;
            this.type = alert.type;
            this.translateParams = alert.translateParams;

            this.timeOut = setTimeout(() => {
                clearTimeout(this.timeOut);
                this.text = '';
            }, this.delay);
        });
    }

    ngOnDestroy() {
        this.alertSub$ && this.alertSub$.unsubscribe();
    }

    closeAlert() {
        this.text = '';
    }
}
