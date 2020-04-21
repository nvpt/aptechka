import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {BreadcrumbI, Constants} from '../../constants';
import {TargetGroupI} from '../../interfaces/target-group-interface';
import {ImpactTypeI} from '../../interfaces/impact-type-interface';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MedicamentI} from '../../interfaces/medicament-interface';
import {TargetGroupsService} from '../../services/target-groups.service';
import {ImpactTypesService} from '../../services/impact-types.service';
import {BoxesService} from '../../services/boxes.service';
import {Location} from '@angular/common';
import {ActivatedRoute, Router} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';
import {MenuService} from '../../modules/menu/menu-services/menu.service';
import {MedicamentsService} from '../../services/medicaments.service';
import {BreadcrumbService} from '../../components/breadcrumb/breadcrumb.service';
import {BoxI} from '../../interfaces/box-interface';
import {Subscription} from 'rxjs';

@Component({
    selector: 'app-new-medicament-page',
    templateUrl: './new-medicament-page.component.html',
    styleUrls: ['./new-medicament-page.component.scss']
})
export class NewMedicamentPageComponent implements OnInit, OnDestroy {
    @ViewChild('titleInput') titleInput: ElementRef;

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
    targetGroups: TargetGroupI[] = [];
    impactTypes: ImpactTypeI[] = [];
    form!: FormGroup;
    imgUrl!: string;
    medicament!: MedicamentI;
    translationSub$!: Subscription;

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
    ) {}

    ngOnInit(): void {
        this.translationSub$ = this.translateService.get('BREADCRUMB.NEW_MEDICAMENT').subscribe(translation => {
            this.breadcrumbs.push(<BreadcrumbI>{
                label: translation
            });
            this.breadcrumbService.renderBreadcrumbs(this.breadcrumbs);
        });

        this.menuService.hide();

        this.initForm();
        this.getTargetGroups();
        this.getImpactTypes();
        setTimeout(() => {
            this.titleInput && this.titleInput.nativeElement.focus();
        }, 0);
    }

    ngOnDestroy(): void {
        this.translationSub$.unsubscribe();
        this.menuService.show();
    }

    initForm(): void {
        // let dp = new DatePipe(this.translateService.currentLang);
        // let mask = 'yyyy-MM-dd';

        this.form = new FormGroup({
            title: new FormControl(null, [Validators.required]),
            description: new FormControl(null),
            issueDate: new FormControl(null),
            expiryDate: new FormControl(null, [
                Validators.required
            ]),
            img: new FormControl(null),
            boxId: new FormControl(null, [Validators.required])
        });

        // this.imgUrl = this.medicament.img;
    }

    cancelAdding(): void {
        this.location.back();
    }

    addImage(event: Event): void {
        const img = (<HTMLInputElement>event.target).files[0];
        const reader = new FileReader();

        reader.onload = () => {
            this.imgUrl = reader.result as string;
        };
        img && reader.readAsDataURL(img);

        this.form.patchValue({img});
    }

    clearImg(): void {
        this.imgUrl = null;
        this.form.controls.img.reset();
        this.form.controls.img.updateValueAndValidity();
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


    updateMedicament(): void {
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

    /*Boxes*/
    selectBox(event: any, box: BoxI) {
        this.medicament.boxId = box.id;
    }

    isBoxUsed(boxId: number): boolean {
        return this.medicament && this.medicament.boxId === boxId;
    }

    saveMedicament() {

    }
}
