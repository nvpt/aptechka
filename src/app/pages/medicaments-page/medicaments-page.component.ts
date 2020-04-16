import {Component, OnInit} from '@angular/core';
import {MedicamentsService} from '../../services/medicaments.service';
import {BoxI} from '../../interfaces/box-interface';
import {BoxesService} from '../../services/boxes.service';

@Component({
    selector: 'app-medicaments-page',
    templateUrl: './medicaments-page.component.html',
    styleUrls: ['./medicaments-page.component.scss']
})
export class MedicamentsPageComponent implements OnInit {

    constructor(public medicamentsService: MedicamentsService, private boxesService: BoxesService) {
    }

    ngOnInit(): void {
    }


    defineBox(boxId: number): BoxI {
        return this.boxesService.boxes.find(box => box.id === boxId);
    }
}
