import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

import {BreadcrumbI} from '../../constants';

@Injectable({
    providedIn: 'root'
})
export class BreadcrumbService {
    breadcrumbs$: Subject<BreadcrumbI[]> = new Subject<BreadcrumbI[]>();

    constructor() {
    }

    renderBreadcrumbs(breadcrumbs: BreadcrumbI[]) {
        if (breadcrumbs && breadcrumbs.length > 1) {
            this.breadcrumbs$.next(breadcrumbs);
        } else {
            this.hideBreadcrumbs();
        }
    }

    hideBreadcrumbs() {
        this.breadcrumbs$.next(null);
    }
}
