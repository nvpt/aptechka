import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

export type AlertType = 'success' | 'warning' | 'danger';

export interface TranslateParamsI {[key: string]: string}

interface Alert {
    type: AlertType;
    text: string;
    translateParams?: TranslateParamsI
}

@Injectable({providedIn: 'root'})
export class AlertService {
    alert$: Subject<Alert> = new Subject<Alert>();

    success(text: string, translateParams: TranslateParamsI = null) {
        this.alert$.next({
            type: 'success',
            text,
            translateParams
        });
    }

    warning(text: string, translateParams: TranslateParamsI = null) {
        this.alert$.next({
            type: 'warning',
            text,
            translateParams
        });
    }

    danger(text: string, translateParams: TranslateParamsI = null) {
        this.alert$.next({
            type: 'danger',
            text,
            translateParams
        });
    }
}
