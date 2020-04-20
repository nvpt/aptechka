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
    targetGroups: TargetGroupI[] = [];
    form!: FormGroup;
    imgUrl!: string;
    box!: BoxI;

    constructor(
        public targetGroupsService: TargetGroupsService,
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

    ngOnDestroy() {
        this.menuService.show();
    }

    initForm() {
        this.form = new FormGroup({
            title: new FormControl(this.box.title, [Validators.required]),
            description: new FormControl(this.box.description),
            img: new FormControl(this.box.img),
            medicaments: new FormControl(this.box.medicamentsIds)
        });

        this.imgUrl = this.box.img;
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
        return !!this.box.targetGroups.find((group) => group.id === tg.id);
    }

    updateBox() {
        this.boxesService
            .updateBox({
                ...this.box,
                title: this.form.value.title,
                description: this.form.value.description,
                imgData: this.form.value.imgData,
                img: this.imgUrl,
                targetGroups: this.targetGroups
            })
            .subscribe(() => {
                this.location.back();
                // this.router.navigate([Constants.PATH.dashboard]);
            });
    }
}
