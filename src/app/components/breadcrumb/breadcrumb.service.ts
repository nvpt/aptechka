import {Injectable} from '@angular/core';

import {BreadcrumbI} from '../../constants';

@Injectable({
    providedIn: 'root'
})
export class BreadcrumbService {
    breadcrumbs: BreadcrumbI[];

    renderBreadcrumbs(breadcrumbs: BreadcrumbI[]): void {
        if (breadcrumbs && breadcrumbs.length > 1) {
            this.breadcrumbs = breadcrumbs;
        } else {
            this.breadcrumbs = null;
        }
    }
}
