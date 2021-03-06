import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Location} from '@angular/common';
import {ActivatedRoute, Params, Router} from '@angular/router';

import {BreadcrumbI, Constants} from '../../constants';

import {MenuService} from '../../modules/menu/menu-services/menu.service';
import {TargetGroupsService} from '../../services/target-groups.service';
import {BoxesService} from '../../services/boxes.service';
import {BreadcrumbService} from '../../components/breadcrumb/breadcrumb.service';
import {TargetGroupI} from '../../interfaces/target-group-interface';
import {BoxI} from '../../interfaces/box-interface';
import {switchMap} from 'rxjs/operators';
import {MedicamentsService} from '../../services/medicaments.service';

@Component({
    selector: 'app-edit-box-page',
    templateUrl: './edit-box-page.component.html',
    styleUrls: ['./edit-box-page.component.scss']
})
export class EditBoxPageComponent implements OnInit, OnDestroy {
    breadcrumbs: BreadcrumbI[] = [
        {
            label: 'BREADCRUMB.BOXES',
            path: Constants.PATH.root
        }
    ];
    form!: FormGroup;
    submitted: boolean = false;
    targetGroups: TargetGroupI[] = [];
    targetGroupSearch: string = '';
    medicamentSearch: string = '';
    box!: BoxI;

    constructor(
        public targetGroupsService: TargetGroupsService,
        public medicamentsService: MedicamentsService,
        private location: Location,
        private route: ActivatedRoute,
        private menuService: MenuService,
        private boxesService: BoxesService,
        private router: Router,
        private breadcrumbService: BreadcrumbService
    ) {}

    ngOnInit(): void {
        this.menuService.hide();

        this.route.params
            .pipe(
                switchMap((params: Params) => {
                    return this.boxesService.getBoxById(params.boxId);
                })
            )
            .subscribe((box: BoxI) => {
                this.box = box;
                this.targetGroups = box.targetGroups;

                this.breadcrumbs.push(<BreadcrumbI>{
                    label: this.box.title
                });
                this.breadcrumbService.renderBreadcrumbs(this.breadcrumbs);

                this.initForm();
                this.getTargetGroups();
            });
    }

    ngOnDestroy(): void {
        this.menuService.show();
    }

    initForm(): void {
        this.form = new FormGroup({
            title: new FormControl(this.box.title, [Validators.required]),
            description: new FormControl(this.box.description),
            imgData: new FormControl(this.box.imgData),
            imgUrl: new FormControl(this.box.img, [Validators.required]),
            medicaments: new FormControl(this.box.medicaments)
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

    isBoxContainTargetGroup(tg: TargetGroupI): boolean {
        return !!this.box.targetGroups.find((group) => group.id === tg.id);
    }

    updateBox(): void {
        this.submitted = true;

        if (this.form.invalid) {
            return;
        }

        this.boxesService
            .updateBox({
                ...this.box,
                title: this.form.value.title,
                description: this.form.value.description,
                imgData: this.form.value.imgData,
                img: this.form.value.imgUrl,
                targetGroups: this.targetGroups
            })
            .subscribe(() => {
                this.location.back();
                // this.router.navigate([Constants.PATH.dashboard]);
            });
    }

    goToMedicament(medId: number): void {
        console.log('151');
        
        this.router.navigate([`${Constants.PATH.editMedicament}/${medId}`]);
    }
}
