import {Component, OnInit} from '@angular/core';
import {BoxI} from '../../interfaces/box-interface';
import {Router} from '@angular/router';

import {BreadcrumbI, Constants} from '../../constants';

import {BoxesService} from '../../services/boxes.service';
import {BreadcrumbService} from '../../components/breadcrumb/breadcrumb.service';

@Component({
    selector: 'app-boxes-page',
    templateUrl: './boxes-page.component.html',
    styleUrls: ['./boxes-page.component.scss']
})
export class BoxesPageComponent implements OnInit {
    breadcrumbs: BreadcrumbI[] = [
        {
            label: 'BREADCRUMB.BOXES'
        }
    ];
    boxes: BoxI[] = this.boxesService.boxes;

    constructor(
        public boxesService: BoxesService,
        private router: Router,
        private breadcrumbService: BreadcrumbService
    ) {}

    ngOnInit(): void {
        this.breadcrumbService.renderBreadcrumbs(this.breadcrumbs);
    }

    deleteBox(box: BoxI): void {
        this.boxesService.deleteBox(box);
    }

    addBox(): void {
        this.router.navigate([Constants.PATH.newBox]);
    }
}
