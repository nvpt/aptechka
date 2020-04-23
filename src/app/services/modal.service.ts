import {Injectable} from '@angular/core';

export interface ModalDataI {
    id: number;
    title?: string;
}

@Injectable({
    providedIn: 'root'
})
export class ModalService {
    showModal: boolean = false;
    data: ModalDataI = <ModalDataI>{};

    constructor() {}

    open(data: ModalDataI) {
        this.data.id = data.id;
        this.data.title = data.title;
        this.showModal = true;
    }

    close() {
        this.data = <ModalDataI>{};
        this.showModal = false;
    }
}
