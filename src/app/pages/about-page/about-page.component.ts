import {Component, OnInit} from '@angular/core';

import {BreadcrumbI, Constants} from '../../constants';

import {BreadcrumbService} from '../../components/breadcrumb/breadcrumb.service';

@Component({
    selector: 'app-about-page',
    templateUrl: './about-page.component.html',
    styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent implements OnInit {
    breadcrumbs: BreadcrumbI[] = [
        {
            label: 'BREADCRUMB.HOME',
            path: Constants.PATH.root
        },
        {
            label: 'BREADCRUMB.ABOUT'
        }
    ];

    constructor(private breadcrumbService: BreadcrumbService) {}

    ngOnInit(): void {
        this.breadcrumbService.renderBreadcrumbs(this.breadcrumbs);
    }
}
