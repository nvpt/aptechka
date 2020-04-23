import {Component, OnDestroy, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {Subscription} from 'rxjs';

import {BreadcrumbI, Constants} from '../../constants';

import {ColorThemeType, ThemesService} from '../../modules/themes/themes.service';
import {SettingsService} from '../../services/settings.service';
import {ImpactTypesService} from '../../services/impact-types.service';
import {TargetGroupsService} from '../../services/target-groups.service';
import {StorageDataI} from '../../interfaces/storage-data-interface';
import {ImpactTypeI} from '../../interfaces/impact-type-interface';
import {TargetGroupI} from '../../interfaces/target-group-interface';
import {BreadcrumbService} from '../../components/breadcrumb/breadcrumb.service';

export type LanguageType = 'ru' | 'en';

@Component({
    selector: 'app-settings-page',
    templateUrl: './settings-page.component.html',
    styleUrls: ['./settings-page.component.scss']
})
export class SettingsPageComponent implements OnInit, OnDestroy {
    breadcrumbs: BreadcrumbI[] = [
        {
            label: 'BREADCRUMB.HOME',
            path: Constants.PATH.root
        },
        {
            label: 'BREADCRUMB.SETTINGS'
        }
    ];
    currentColor!: ColorThemeType;
    currentLanguage!: LanguageType;

    impactTypes: ImpactTypeI[] = this.impactTypesService.impactTypes;
    impactErrors: string[] = [];
    impactTypeSearch: string = '';

    targetGroups: TargetGroupI[] = this.targetGroupsService.targetGroups;
    targetGroupsErrors: string[] = [];
    targetGroupSearch:string = '';

    private translateSub$: Subscription;

    constructor(
        public settingsService: SettingsService,
        private themeService: ThemesService,
        private translate: TranslateService,
        public impactTypesService: ImpactTypesService,
        public targetGroupsService: TargetGroupsService,
        private breadcrumbService: BreadcrumbService
    ) {}

    ngOnInit(): void {
        this.breadcrumbService.renderBreadcrumbs(this.breadcrumbs);
        this.initStorageData();
        this.getImpactTypes();
        this.getTargetGroups();
    }

    ngOnDestroy(): void {
        this.translateSub$ && this.translateSub$.unsubscribe();
    }

    initStorageData(): void {
        const storageData = localStorage.getItem(Constants.STORAGE_KEY);
        if (storageData) {
            const storageObject: StorageDataI = JSON.parse(storageData);

            this.currentColor = storageObject.color as ColorThemeType;
            this.currentLanguage = storageObject.lang ? <LanguageType>storageObject.lang : Constants.DEFAULT_LANGUAGE;
        }
    }

    selectTheme(event: Event): void {
        const colorTheme: ColorThemeType = (<HTMLInputElement>event.target).value as ColorThemeType;
        let saturation!: number;

        //here we may customize options for each color
        switch (colorTheme) {
            case 'orange':
                saturation = 80;
                break;
            default:
                saturation = this.themeService.defaultSaturation;
                break;
        }

        this.themeService.setSaturation(saturation);
        this.themeService.setHue(colorTheme);

        const storageData = localStorage.getItem(Constants.STORAGE_KEY);
        const storageObj: StorageDataI = storageData ? JSON.parse(storageData) : {};
        storageObj.color = colorTheme;
        storageObj.saturation = saturation;

        localStorage.setItem(Constants.STORAGE_KEY, JSON.stringify(storageObj));
    }

    selectLanguage(event: Event): void {
        const language = (<HTMLInputElement>event.target).value as LanguageType;

        this.translateSub$ = this.translate.use(language).subscribe(() => {
            const storageData = localStorage.getItem(Constants.STORAGE_KEY);
            const storageObj: StorageDataI = storageData ? JSON.parse(storageData) : {};
            storageObj.lang = language;

            localStorage.setItem(Constants.STORAGE_KEY, JSON.stringify(storageObj));
        });
    }

    changeInterval(event: Event): void {
        this.settingsService.warningInterval = Number((<HTMLInputElement>event.target).value);
    }

    /*Impact types*/
    getImpactTypes(): void {
        this.impactTypesService.getImpactTypes();
    }

    addImpactType(newImpactTitle: string): void {
        if (this.impactTypes.some((impact) => impact.title.toLowerCase() === newImpactTitle.toLowerCase())) {
            const error = 'ERROR.IMPACT_TYPE.ALREADY_EXISTS';
            this.impactErrors = [];
            this.impactErrors.unshift(error);
            return;
        }
        this.impactTypesService.addImpactType(newImpactTitle);
    }

    deleteImpactType(impactType: ImpactTypeI): void {
        this.impactTypesService.deleteImpactType(impactType);
    }

    /*Target groups*/
    getTargetGroups(): void {
        this.targetGroupsService.getTargetGroups();
    }

    addTargetGroup(newGroupTitle: string): void {
        if (
            this.targetGroupsService.targetGroups.some(
                (group) => group.title.toLowerCase() === newGroupTitle.toLowerCase()
            )
        ) {
            const error = 'ERROR.TARGET_GROUP.ALREADY_EXISTS';
            this.targetGroupsErrors = [];
            this.targetGroupsErrors.unshift(error);
            return;
        }
        this.targetGroupsService.addTargetGroup(newGroupTitle);
    }

    deleteTargetGroup(targetGroup: TargetGroupI): void {
        this.targetGroupsService.deleteTargetGroup(targetGroup);
    }
}
