import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Location} from '@angular/common';
import {ActivatedRoute, Router} from '@angular/router';

import {Constants} from '../../constants';

import {MenuService} from '../../modules/menu/menu-services/menu.service';
import {TargetGroupsService} from '../../services/target-groups.service';
import {BoxesService} from '../../services/boxes.service';
import {TargetGroupI} from '../../interfaces/target-group-interface';
import {BoxI} from '../../interfaces/box-interface';
import {Subscription} from 'rxjs';


@Component({
    selector: 'app-edit-box',
    templateUrl: './edit-box.component.html',
    styleUrls: ['./edit-box.component.scss']
})
export class EditBoxComponent implements OnInit, OnDestroy {
    @ViewChild('titleInput') titleInput: ElementRef;

    form: FormGroup;
    imgUrl: string;
    box!: BoxI;
    targetGroups: TargetGroupI[] = [];
    routeSub$: Subscription;

    constructor(public targetGroupsService: TargetGroupsService, private location: Location, private route: ActivatedRoute, private menuService: MenuService, private boxesService: BoxesService,
        private router: Router) {
    }

    ngOnInit(): void {
        this.menuService.hide();

        this.routeSub$ = this.route.params.subscribe(params => {
            this.box = this.boxesService.boxes.find(box => {
                return box.id === Number(params.boxId);
            });
            this.initForm();
            this.getTargetGroups();
        });


        setTimeout(() => {
            this.titleInput && this.titleInput.nativeElement.focus();
        }, 0);
    }

    initForm() {
        this.form = new FormGroup({
            title: new FormControl(this.box.title, [Validators.required]),
            description: new FormControl(this.box.description),
            img: new FormControl(this.box.img),
            medicaments: new FormControl(this.box.medicamentsIds),
        });

        this.imgUrl = this.box.img;
    }

    ngOnDestroy() {
        this.routeSub$.unsubscribe();
        this.menuService.show();
    }

    cancelAdding() {
        this.location.back();
    }

    addImage(event: Event) {
        const img = (<HTMLInputElement>(event.target)).files[0];
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
            if (this.targetGroups.every((group) => (group.id !== targetGroup.id))) {
                this.targetGroups.push(targetGroup);
            }
        } else {
            this.targetGroups = [...this.targetGroups.filter((group) => (group.id !== targetGroup.id))];
        }
    }

    isBoxContainTargetGroup(tg: TargetGroupI): boolean {
        return !!this.box.targetGroups.find(group => group.id === tg.id);
    }


    updateBox() {
        this.boxesService.updateBox({
            ...this.box,
            title: this.form.value.title,
            description: this.form.value.description,
            imgData: this.form.value.imgData,
            img: this.imgUrl,
            targetGroups: this.targetGroups
        }).subscribe(() => {
                this.router.navigate([Constants.PATH.dashboard]);
            }
        );

    }
}
