import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {BreadcrumbI, Constants} from '../../constants';

import {MedicamentsService} from '../../services/medicaments.service';
import {BoxesService} from '../../services/boxes.service';
import {BreadcrumbService} from '../../components/breadcrumb/breadcrumb.service';
import {BoxI} from '../../interfaces/box-interface';
import {StorageDataI} from '../../interfaces/storage-data-interface';
import {AlertService} from '../../services/alert.service';
import {ModalService} from '../../services/modal.service';
import {Subscription} from 'rxjs';
import {MedicamentI} from '../../interfaces/medicament-interface';

@Component({
    selector: 'app-medicaments-page',
    templateUrl: './medicaments-page.component.html',
    styleUrls: ['./medicaments-page.component.scss']
})
export class MedicamentsPageComponent implements OnInit, OnDestroy {
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
    deleteSub$: Subscription;

    constructor(
        public medicamentsService: MedicamentsService,
        public modalService: ModalService,
        private route: ActivatedRoute,
        private boxesService: BoxesService,
        private router: Router,
        private breadcrumbService: BreadcrumbService,
        private alert: AlertService
    ) {}

    ngOnInit(): void {
        this.defineLanguage();
        this.breadcrumbService.renderBreadcrumbs(this.breadcrumbs);
    }

    ngOnDestroy(): void {
        this.deleteSub$ && this.deleteSub$.unsubscribe();
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

    addMedicament() {
        this.router.navigate([Constants.PATH.newMedicament]);
    }

    confirmDelete(medicament: MedicamentI) {

        this.modalService.open({
            id: medicament.id,
            title: medicament.title
        });
    }

    deleteMedicament(): void {
        this.deleteSub$ = this.medicamentsService.deleteMedicament(this.modalService.data.id).subscribe(() => {
            this.alert.warning('ALERT.MEDICAMENT_DELETED', {medicament: this.modalService.data.title});
            this.modalService.close();
        });
    }
}
