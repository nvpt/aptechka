import {Component, OnDestroy, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {Subscription} from 'rxjs';

import {Constants} from '../../constants';

import {ColorThemeType, ThemesService} from '../../modules/themes/themes.service';
import {SettingsService} from '../../services/settings.service';
import {ImpactTypesService} from '../../services/impact-types.service';
import {StorageDataI} from '../../interfaces/storage-data-interface';

import {ImpactTypeI} from '../../interfaces/impact-type-interface';

export type LanguageType = 'ru' | 'en';

@Component({
    selector: 'app-settings-page',
    templateUrl: './settings-page.component.html',
    styleUrls: ['./settings-page.component.scss']
})
export class SettingsPageComponent implements OnInit, OnDestroy {
    currentColor!: ColorThemeType;
    currentLanguage!: LanguageType;

    impactTypes: ImpactTypeI[] = this.impactTypeService.impactTypes;
    impactErrors: string[] = [];

    private translateSub$: Subscription;

    constructor(public settingsService: SettingsService, private themeService: ThemesService, private translate: TranslateService, public impactTypeService: ImpactTypesService) {
    }

    ngOnInit(): void {
        this.initStorageData();
        this.getImpactTypes();
    }

    ngOnDestroy(): void {
        this.translateSub$ && this.translateSub$.unsubscribe();
    }

    getImpactTypes() {
        this.impactTypeService.getImpactTypes();
    }

    initStorageData(): void {
        const storageData = localStorage.getItem(Constants.STORAGE_KEY);
        if (storageData) {
            const storageObject: StorageDataI = JSON.parse(storageData);

            this.currentColor = storageObject.color as ColorThemeType;
            this.currentLanguage = storageObject.lang
                ? <LanguageType>storageObject.lang
                : Constants.DEFAULT_LANGUAGE;
        }
    }

    selectTheme(event: Event) {
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

    selectLanguage(event: Event) {
        const language = (<HTMLInputElement>event.target).value as LanguageType;

        this.translateSub$ = this.translate.use(language).subscribe(() => {
            const storageData = localStorage.getItem(Constants.STORAGE_KEY);
            const storageObj: StorageDataI = storageData ? JSON.parse(storageData) : {};
            storageObj.lang = language;

            localStorage.setItem(Constants.STORAGE_KEY, JSON.stringify(storageObj));
        });
    }

    changeInterval(event: Event) {
        this.settingsService.warningInterval = Number((<HTMLInputElement>event.target).value);
    }

    /*Impact types*/
    addImpactType(impactTitle: string): void {
        if (this.impactTypes.some((impact) => (impact.title.toLowerCase() === impactTitle.toLowerCase()))) {
            const error = 'ERROR.IMPACT_TYPE.ALREADY_EXISTS';
            this.impactErrors = [];
            this.impactErrors.unshift(error);
            return;
        }
        this.impactTypeService.addImpactType(impactTitle);
    }

    deleteImpactType(impactType: ImpactTypeI) {
        this.impactTypeService.deleteImpactType(impactType);
    }
}
