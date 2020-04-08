import {Injectable} from '@angular/core';

import {BreadcrumbI} from '../../constants';

@Injectable({
    providedIn: 'root'
})
export class BreadcrumbService {
    breadcrumbs: BreadcrumbI[]

    renderBreadcrumbs(breadcrumbs: BreadcrumbI[]) {
        if (breadcrumbs && breadcrumbs.length > 1) {
            this.breadcrumbs = breadcrumbs;
        } else {
            this.hideBreadcrumbs();
        }
    }

    hideBreadcrumbs() {
        this.breadcrumbs = null;
    }
}
