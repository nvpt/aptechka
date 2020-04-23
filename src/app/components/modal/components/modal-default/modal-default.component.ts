import {Component} from '@angular/core';
import {ModalService} from '../../../../services/modal.service';

@Component({
    selector: 'app-modal-default',
    templateUrl: './modal-default.component.html',
    styleUrls: ['./modal-default.component.scss']
})
export class ModalDefaultComponent {
    constructor(public modalService: ModalService) {}
}
