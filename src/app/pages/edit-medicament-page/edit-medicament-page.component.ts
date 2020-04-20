import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {switchMap} from 'rxjs/operators';
import {Location} from '@angular/common';
import {ActivatedRoute, Router} from '@angular/router';

import {BreadcrumbI, Constants} from '../../constants';

import {TargetGroupsService} from '../../services/target-groups.service';
import {MenuService} from '../../modules/menu/menu-services/menu.service';
import {BreadcrumbService} from '../../components/breadcrumb/breadcrumb.service';
import {MedicamentsService} from '../../services/medicaments.service';
import {TargetGroupI} from '../../interfaces/target-group-interface';
import {MedicamentI} from '../../interfaces/medicament-interface';
import {ImpactTypeI} from '../../interfaces/impact-type-interface';
import {ImpactTypesService} from '../../services/impact-types.service';

@Component({
    selector: 'app-edit-medicament-page',
    templateUrl: './edit-medicament-page.component.html',
    styleUrls: ['./edit-medicament-page.component.scss']
})
export class EditMedicamentPageComponent implements OnInit, OnDestroy {
    breadcrumbs: BreadcrumbI[] = [
        {
            label: 'BREADCRUMB.MEDICAMENTS',
            path: Constants.PATH.medicaments
        }
    ];
    targetGroups: TargetGroupI[] = [];
    impactTypes: ImpactTypeI[] = [];
    form!: FormGroup;
    imgUrl!: string;
    medicament!: MedicamentI;

    constructor(
        public targetGroupsService: TargetGroupsService,
        public impactTypesService: ImpactTypesService,
        private location: Location,
        private route: ActivatedRoute,
        private menuService: MenuService,
        private medicamentsService: MedicamentsService,
        private router: Router,
        private breadcrumbService: BreadcrumbService
    ) {}

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

    ngOnDestroy() {
        this.menuService.show();
    }

    initForm() {
        this.form = new FormGroup({
            title: new FormControl(this.medicament.title, [Validators.required]),
            description: new FormControl(this.medicament.description),
            issueDate: new FormControl(this.medicament.issueDate),
            expiryDate: new FormControl(this.medicament.expiryDate),
            img: new FormControl(this.medicament.img),
            boxId: new FormControl(this.medicament.boxId)
        });

        // this.imgUrl = this.medicament.img;
    }

    cancelAdding() {
        this.location.back();
    }

    addImage(event: Event) {
        const img = (<HTMLInputElement>event.target).files[0];
        const reader = new FileReader();

        reader.onload = () => {
            this.imgUrl = reader.result as string;
        };
        img && reader.readAsDataURL(img);

        this.form.patchValue({img});
    }

    clearImg() {
        this.imgUrl = null;
        this.form.controls.img.reset();
        this.form.controls.img.updateValueAndValidity();
    }

    /*Target groups*/
    getTargetGroups() {
        this.targetGroupsService.getTargetGroups();
    }

    toggleTargetGroup(event: MouseEvent, targetGroup: TargetGroupI) {
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
    getImpactTypes() {
        this.impactTypesService.getImpactTypes();
    }

    toggleImpactType(event: MouseEvent, impactType: ImpactTypeI) {
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

    updateMedicament() {
        this.medicamentsService
            .updateMedicament({
                ...this.medicament,
                title: this.form.value.title,
                description: this.form.value.description,
                issueDate: this.form.value.issueDate,
                expiryDate: this.form.value.expiryDate,
                imgData: this.form.value.imgData,
                img: this.imgUrl,
                targetGroups: this.targetGroups,
                impactTypes: this.impactTypes
            })
            .subscribe(() => {
                this.router.navigate([Constants.PATH.medicaments]);
            });
    }
}
