import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ModalService} from '../../../services/modal.service';

@Component({
    selector: 'app-modal-delete',
    templateUrl: './modal-delete.component.html',
    styleUrls: ['./modal-delete.component.scss']
})
export class ModalDeleteComponent {
    @Output() onDelete?: EventEmitter<any> = new EventEmitter<any>();
    @Output() onCancel?: EventEmitter<any> = new EventEmitter<any>();
    @Input() text?: string = '';
    @Input() translateParams?: {[key: string]: string};

    constructor(public modalService: ModalService) {}

    delete() {
        this.onDelete.emit();
    }

    cancel() {
        this.onCancel.emit();
        this.modalService.close();
    }
}
