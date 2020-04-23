import {Component, OnDestroy, OnInit} from '@angular/core';
import {BoxesService} from '../../../../services/boxes.service';
import {ModalService} from '../../../../services/modal.service';
import {Subscription} from 'rxjs';
import {AlertService} from '../../../../services/alert.service';

@Component({
    selector: 'app-modal-delete',
    templateUrl: './modal-delete.component.html',
    styleUrls: ['./modal-delete.component.scss']
})
export class ModalDeleteComponent implements OnInit, OnDestroy {
    constructor(public modalService: ModalService, private boxesService: BoxesService, private alert: AlertService) {}

    deleteSub$: Subscription;

    ngOnInit(): void {}

    ngOnDestroy(): void {
        this.deleteSub$ && this.deleteSub$.unsubscribe();
    }

    delete() {
        this.deleteSub$ = this.boxesService.deleteBox(this.modalService.data.id).subscribe(() => {
            this.alert.warning('ALERT.BOX_DELETED', {box: this.modalService.data.title});
            this.modalService.close();
        });
    }

    cancel() {
        this.modalService.close();
    }
}
