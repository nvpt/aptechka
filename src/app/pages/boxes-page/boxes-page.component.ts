import {Component, OnInit} from '@angular/core';
import {BoxI} from '../../interfaces/box-interface';
import {Router} from '@angular/router';

import {BreadcrumbI, Constants} from '../../constants';

import {BoxesService} from '../../services/boxes.service';
import {BreadcrumbService} from '../../components/breadcrumb/breadcrumb.service';
import {AlertService} from '../../services/alert.service';
import {ModalService} from '../../services/modal.service';

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
    confirmation: boolean = false;

    constructor(
        public boxesService: BoxesService,
        public modalService: ModalService,
        private router: Router,
        private breadcrumbService: BreadcrumbService,
        private alert: AlertService
    ) {}

    ngOnInit(): void {
        this.breadcrumbService.renderBreadcrumbs(this.breadcrumbs);
    }

    deleteBox(box: BoxI): void {

        if(box.medicaments && box.medicaments.length){
            this.alert.danger('ALERT.BOX_NOT_EMPTY');
            return;
        }

        this.modalService.open({
            id: box.id,
            title: box.title
        });
    }

    addBox(): void {
        this.router.navigate([Constants.PATH.newBox]);
    }
}
