import {Component} from '@angular/core';
import {BreadcrumbService} from './breadcrumb.service';
import {Router} from '@angular/router';

import {BreadcrumbI} from '../../constants';

@Component({
    selector: 'app-breadcrumb',
    templateUrl: './breadcrumb.component.html',
    styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent {
    constructor(public router: Router, public breadcrumbService: BreadcrumbService) {}

    goTo(event: Event, breadcrumbPart: BreadcrumbI): void {
        event.preventDefault();

        this.router.navigate([breadcrumbPart.path]);
    }
}
