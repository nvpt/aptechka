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
    form!: FormGroup;
    imgUrl!: string;
    medicament!: MedicamentI;

    constructor(
        public targetGroupsService: TargetGroupsService,
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
                this.initForm();

                this.breadcrumbs.push(<BreadcrumbI>{
                    label: this.medicament.title
                });
                this.breadcrumbService.renderBreadcrumbs(this.breadcrumbs);
                this.getTargetGroups();
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

    isBoxContainTargetGroup(tg: TargetGroupI): boolean {
        return !!this.medicament.targetGroups.find((group) => group.id === tg.id);
    }

    updateMedicament() {
        this.medicamentsService
            .updateMedicament({
                ...this.medicament,
                title: this.form.value.title,
                imgData: this.form.value.imgData,
                img: this.imgUrl,
                targetGroups: this.targetGroups
            })
            .subscribe(() => {
                this.router.navigate([Constants.PATH.medicaments]);
            });
    }
}
