import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {Location} from '@angular/common';
import {Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {TranslateService} from '@ngx-translate/core';

import {BreadcrumbI, Constants} from '../../constants';

import {MenuService} from '../../modules/menu/menu-services/menu.service';
import {TargetGroupsService} from '../../services/target-groups.service';
import {BoxesService} from '../../services/boxes.service';
import {BreadcrumbService} from '../../components/breadcrumb/breadcrumb.service';
import {TargetGroupI} from '../../interfaces/target-group-interface';
import {BoxI} from '../../interfaces/box-interface';


@Component({
    selector: 'app-new-box-page',
    templateUrl: './new-box-page.component.html',
    styleUrls: ['./new-box-page.component.scss']
})
export class NewBoxPageComponent implements OnInit, OnDestroy {
    @ViewChild('titleInput') titleInput: ElementRef;

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
    translationSub$!: Subscription;

    constructor(public targetGroupsService: TargetGroupsService, private location: Location, private menuService: MenuService, private boxesService: BoxesService,
        private router: Router, private breadcrumbService: BreadcrumbService, private translateService: TranslateService) {
    }

    ngOnInit(): void {
        this.translationSub$ = this.translateService.get('BREADCRUMB.NEW_BOX').subscribe(translation => {
            this.breadcrumbs.push(<BreadcrumbI>{
                label: translation
            });
            this.breadcrumbService.renderBreadcrumbs(this.breadcrumbs);
        });

        this.menuService.hide();

        this.initForm();
        this.getTargetGroups();

        setTimeout(() => {
            this.titleInput && this.titleInput.nativeElement.focus();
            
            console.log('58 >>> this.form: ', this.form);
            
        }, 0);
    }

    ngOnDestroy() {
        this.translationSub$.unsubscribe();
        this.menuService.show();
    }

    initForm() {
        this.form = new FormGroup({
            title: new FormControl('', [Validators.required]),
            description: new FormControl(''),
            imgData: new FormControl(null),
            imgUrl: new FormControl(null, [Validators.required]),
            targetGroups: new FormArray([])
        });
    }

    cancelAdding() {
        this.location.back();
    }

    addImage(event: Event) {
        const imgData = (<HTMLInputElement>(event.target)).files[0];
        const reader = new FileReader();

        reader.onload = () => {
            this.form.patchValue({imgUrl: reader.result as string});
        };
        imgData && reader.readAsDataURL(imgData);

        this.form.patchValue({imgData});
        console.log('89 >>> this.form: ', this.form);
        
    }

    clearImg() {
        this.form.controls.imgData.reset();
        this.form.controls.imgData.updateValueAndValidity();
        this.form.patchValue({imgUrl: null});
        console.log('97 >>> this.form: ', this.form);
        
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

    saveBox() {
        this.submitted = true;

        if(this.form.invalid){
            return;
        }

        const newBox: BoxI = {
            id: new Date().getTime(),
            description: this.form.value.description,
            title: this.form.value.title,
            imgData: this.form.value.img,
            img: this.form.value.imgUrl,
            targetGroups: this.targetGroups,
            medicaments: [] //we can't add medicaments in new box yet
        };

        this.boxesService.addBox(newBox).subscribe(() => {
            this.router.navigate([Constants.PATH.dashboard]);
        });

    }
}
