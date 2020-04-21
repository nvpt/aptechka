import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {BreadcrumbI, Constants} from '../../constants';

import {MedicamentsService} from '../../services/medicaments.service';
import {BoxesService} from '../../services/boxes.service';
import {BreadcrumbService} from '../../components/breadcrumb/breadcrumb.service';
import {BoxI} from '../../interfaces/box-interface';
import {StorageDataI} from '../../interfaces/storage-data-interface';

@Component({
    selector: 'app-medicaments-page',
    templateUrl: './medicaments-page.component.html',
    styleUrls: ['./medicaments-page.component.scss']
})
export class MedicamentsPageComponent implements OnInit {
    breadcrumbs: BreadcrumbI[] = [
        {
            label: 'BREADCRUMB.HOME',
            path: Constants.PATH.root
        },
        {
            label: 'BREADCRUMB.MEDICAMENTS'
        }
    ];
    currentLanguage: string = Constants.DEFAULT_LANGUAGE;

    constructor(
        public medicamentsService: MedicamentsService,
        private route: ActivatedRoute,
        private boxesService: BoxesService,
        private router: Router,
        private breadcrumbService: BreadcrumbService
    ) {}

    ngOnInit(): void {
        this.defineLanguage();
        this.breadcrumbService.renderBreadcrumbs(this.breadcrumbs);
    }

    defineLanguage(): void {
        const storageData = localStorage.getItem(Constants.STORAGE_KEY);
        const storageObj: StorageDataI = storageData ? JSON.parse(storageData) : {};

        this.currentLanguage = storageObj.lang ? storageObj.lang : this.currentLanguage;
    }

    defineBox(boxId: number): BoxI {
        return this.boxesService.boxes.find((box) => box.id === boxId);
    }

    editMedicament(medicamentId: number): void {
        this.router.navigate([`${Constants.PATH.editMedicament}/${medicamentId}`]);
    }

    editBox(boxId: number): void {
        this.router.navigate([`${Constants.PATH.editBox}/${boxId}`]);
    }
}
