import {Component, OnDestroy, OnInit} from '@angular/core';
import {BoxI} from '../../interfaces/box-interface';
import {Router} from '@angular/router';

import {BreadcrumbI, Constants} from '../../constants';

import {BoxesService} from '../../services/boxes.service';
import {BreadcrumbService} from '../../components/breadcrumb/breadcrumb.service';
import {AlertService} from '../../services/alert.service';
import {ModalService} from '../../services/modal.service';
import {Subscription} from 'rxjs';

@Component({
    selector: 'app-boxes-page',
    templateUrl: './boxes-page.component.html',
    styleUrls: ['./boxes-page.component.scss']
})
export class BoxesPageComponent implements OnInit, OnDestroy {
    breadcrumbs: BreadcrumbI[] = [
        {
            label: 'BREADCRUMB.BOXES'
        }
    ];
    boxes: BoxI[] = this.boxesService.boxes;
    deleteSub$: Subscription;

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

    ngOnDestroy(): void {
        this.deleteSub$ && this.deleteSub$.unsubscribe();
    }

    confirmDelete(box: BoxI) {
        if (box.medicaments && box.medicaments.length) {
            this.alert.danger('ALERT.BOX_NOT_EMPTY');
            return;
        }

        this.modalService.open({
            id: box.id,
            title: box.title
        });
    }

    deleteBox(): void {
        this.deleteSub$ = this.boxesService.deleteBox(this.modalService.data.id).subscribe(() => {
            this.alert.warning('ALERT.BOX_DELETED', {box: this.modalService.data.title});
            this.modalService.close();
        });
    }

    addBox(): void {
        this.router.navigate([Constants.PATH.newBox]);
    }
}
