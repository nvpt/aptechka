import {Component, OnInit} from '@angular/core';
import {MedicamentsService} from '../../services/medicaments.service';
import {BoxI} from '../../interfaces/box-interface';
import {BoxesService} from '../../services/boxes.service';
import {Constants} from '../../constants';
import {StorageDataI} from '../../interfaces/storage-data-interface';

@Component({
    selector: 'app-medicaments-page',
    templateUrl: './medicaments-page.component.html',
    styleUrls: ['./medicaments-page.component.scss']
})
export class MedicamentsPageComponent implements OnInit {
    currentLanguage: string = Constants.DEFAULT_LANGUAGE;

    constructor(public medicamentsService: MedicamentsService, private boxesService: BoxesService) {
    }

    ngOnInit(): void {
        this.defineLanguage();
    }

    defineLanguage(): void {
        const storageData = localStorage.getItem(Constants.STORAGE_KEY);
        const storageObj: StorageDataI = storageData ? JSON.parse(storageData) : {};
        this.currentLanguage = storageObj.lang ? storageObj.lang : this.currentLanguage;
    }

    defineBox(boxId: number): BoxI {
        return this.boxesService.boxes.find(box => box.id === boxId);
    }
}
