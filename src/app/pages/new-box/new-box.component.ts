import {Component, OnDestroy, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {MenuService} from '../../modules/menu/menu-services/menu.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {TargetGroupsService} from '../../services/target-groups.service';
import {TargetGroupI} from '../../interfaces/target-group-interface';
import {NewBoxI} from '../../interfaces/box-interface';
import {BoxesService} from '../../services/boxes.service';
import {Router} from '@angular/router';
import {Constants} from '../../constants';

@Component({
    selector: 'app-new-box',
    templateUrl: './new-box.component.html',
    styleUrls: ['./new-box.component.scss']
})
export class NewBoxComponent implements OnInit, OnDestroy {
    form: FormGroup;
    imgUrl: string;
    targetGroups: TargetGroupI[] = [];

    constructor(public targetGroupsService: TargetGroupsService, private location: Location, private menuService: MenuService, private boxesService: BoxesService,
        private router: Router) {
    }

    ngOnInit(): void {
        this.menuService.hide();
        this.initForm();
        this.getTargetGroups();
    }

    initForm() {
        this.form = new FormGroup({
            title: new FormControl('', [Validators.required]),
            description: new FormControl(''),
            img: new FormControl(null),
            medicaments: new FormControl([]),
        });
    }

    ngOnDestroy() {
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

    clearPreview() {
        this.form.controls.img.reset();
        this.imgUrl = null;
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

        console.log('91 >>> event: ', event);

        console.log('91 >>> targetGroup: ', targetGroup);

    }


    saveBox() {
        console.log('68 >>> this.form: ', this.form);
        const box: NewBoxI = {
            id: new Date().getTime(),
            description: this.form.value.description,
            title: this.form.value.title,
            newImg: this.form.value.img,
            targetGroups: this.targetGroups,
            medicamentsId: this.form.value.medicamentsId
        };

        this.boxesService.addBox(box);
        this.router.navigate([Constants.PATH.dashboard])

    }
}
