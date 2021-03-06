import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {switchMap} from 'rxjs/operators';
import {Location, DatePipe} from '@angular/common';
import {ActivatedRoute, Router} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';

import {BreadcrumbI, Constants} from '../../constants';

import {TargetGroupsService} from '../../services/target-groups.service';
import {MenuService} from '../../modules/menu/menu-services/menu.service';
import {BreadcrumbService} from '../../components/breadcrumb/breadcrumb.service';
import {MedicamentsService} from '../../services/medicaments.service';
import {TargetGroupI} from '../../interfaces/target-group-interface';
import {ImpactTypesService} from '../../services/impact-types.service';
import {MedicamentI} from '../../interfaces/medicament-interface';
import {ImpactTypeI} from '../../interfaces/impact-type-interface';
import {BoxesService} from '../../services/boxes.service';
import {BoxI} from '../../interfaces/box-interface';

@Component({
    selector: 'app-edit-medicament-page',
    templateUrl: './edit-medicament-page.component.html',
    styleUrls: ['./edit-medicament-page.component.scss']
})
export class EditMedicamentPageComponent implements OnInit, OnDestroy {
    breadcrumbs: BreadcrumbI[] = [
        {
            label: 'BREADCRUMB.HOME',
            path: Constants.PATH.root
        },
        {
            label: 'BREADCRUMB.MEDICAMENTS',
            path: Constants.PATH.medicaments
        }
    ];
    form!: FormGroup;
    submitted: boolean = false;
    targetGroups: TargetGroupI[] = [];
    targetGroupSearch: string = '';
    impactTypes: ImpactTypeI[] = [];
    impactTypeSearch: string = '';
    boxSearch: string = '';
    medicament!: MedicamentI;

    constructor(
        public targetGroupsService: TargetGroupsService,
        public impactTypesService: ImpactTypesService,
        public boxesService: BoxesService,
        private location: Location,
        private route: ActivatedRoute,
        private router: Router,
        private translateService: TranslateService,
        private menuService: MenuService,
        private medicamentsService: MedicamentsService,
        private breadcrumbService: BreadcrumbService
    ) {
    }

    ngOnInit(): void {
        this.menuService.hide();

        this.route.params
            .pipe(
                switchMap((params) => {
                    return this.medicamentsService.getMedicamentById(params.medicamentId);
                })
            )
            .subscribe((medicament: MedicamentI) => {
                this.medicament = medicament;
                this.targetGroups = medicament.targetGroups;
                this.impactTypes = medicament.impactTypes;

                this.breadcrumbs.push(<BreadcrumbI>{
                    label: this.medicament.title
                });
                this.breadcrumbService.renderBreadcrumbs(this.breadcrumbs);

                this.initForm();
                this.getTargetGroups();
                this.getImpactTypes();
            });
    }

    ngOnDestroy(): void {
        this.menuService.show();
    }

    initForm(): void {
        let dp = new DatePipe(this.translateService.currentLang);
        let mask = 'yyyy-MM-dd';

        this.form = new FormGroup({
            title: new FormControl(this.medicament.title, [Validators.required]),
            description: new FormControl(this.medicament.description),
            issueDate: new FormControl(dp.transform(new Date(this.medicament.issueDate), mask)),
            expiryDate: new FormControl(dp.transform(new Date(this.medicament.expiryDate), mask), [
                Validators.required
            ]),
            imgData: new FormControl(this.medicament.imgData),
            imgUrl: new FormControl(this.medicament.img, [Validators.required]),
            boxId: new FormControl(this.medicament.boxId, [Validators.required])
        });
    }

    cancelAdding(): void {
        this.location.back();
    }

    addImage(event: Event): void {
        const imgData = (<HTMLInputElement>event.target).files[0];
        const reader = new FileReader();

        reader.onload = () => {
            this.form.patchValue({imgUrl: reader.result as string});
        };
        imgData && reader.readAsDataURL(imgData);

        this.form.patchValue({imgData});
    }

    clearImg(): void {
        this.form.controls.imgData.reset();
        this.form.controls.imgData.updateValueAndValidity();
        this.form.controls.imgUrl.reset();
        this.form.controls.imgUrl.updateValueAndValidity();
    }

    /*Target groups*/
    getTargetGroups(): void {
        this.targetGroupsService.getTargetGroups();
    }

    toggleTargetGroup(event: MouseEvent, targetGroup: TargetGroupI): void {
        const checked: boolean = (<HTMLInputElement>event.target).checked;

        if (checked) {
            if (this.targetGroups.every((group) => group.id !== targetGroup.id)) {
                this.targetGroups.push(targetGroup);
            }
        } else {
            this.targetGroups = [...this.targetGroups.filter((group) => group.id !== targetGroup.id)];
        }
    }

    isMedicamentContainTargetGroup(tg: TargetGroupI): boolean {
        return !!this.medicament.targetGroups.find((group) => group.id === tg.id);
    }

    /*Impact types*/
    getImpactTypes(): void {
        this.impactTypesService.getImpactTypes();
    }

    toggleImpactType(event: MouseEvent, impactType: ImpactTypeI): void {
        const checked: boolean = (<HTMLInputElement>event.target).checked;

        if (checked) {
            if (this.impactTypes.every((impact) => impact.id !== impactType.id)) {
                this.impactTypes.push(impactType);
            }
        } else {
            this.impactTypes = [...this.impactTypes.filter((impact) => impact.id !== impactType.id)];
        }
    }

    isMedicamentContainImpactType(it: TargetGroupI): boolean {
        return !!this.medicament.impactTypes.find((impact) => impact.id === it.id);
    }

    updateMedicament(): void {
        this.submitted = true;

        if (this.form.invalid) {
            return;
        }

        this.medicamentsService
            .updateMedicament({
                ...this.medicament,
                title: this.form.value.title,
                description: this.form.value.description,
                issueDate: this.form.value.issueDate,
                expiryDate: this.form.value.expiryDate,
                imgData: this.form.value.imgData,
                img: this.form.value.imgUrl,
                targetGroups: this.targetGroups,
                impactTypes: this.impactTypes
            })
            .subscribe(() => {
                this.location.back();
                // this.router.navigate([Constants.PATH.medicaments]);
            });
    }

    /*Boxes*/
    selectBox(event: any, box: BoxI): void {
        this.medicament.boxId = box.id;
        this.boxesService.replaceMedicament(this.medicament, box.id); // todo *** temp on front
    }

    isBoxUsed(boxId: number): boolean {
        return this.medicament.boxId === boxId;
    }
}
