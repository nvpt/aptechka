import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';

import {Constants} from './constants';

import {ColorThemeType, ThemesService} from './modules/themes/themes.service';
import {StorageDataI} from './interfaces/storage-data-interface';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title: string = 'aptechka';
    menuBg: string = 'var(--color-app_bg-bg)';

    constructor(
        private route: ActivatedRoute,
        private themeService: ThemesService,
        private translate: TranslateService
    ) {
        translate.setDefaultLang(Constants.DEFAULT_LANGUAGE);
    }

    ngOnInit(): void {
        this.defineCurrentSettings();
    }

    defineCurrentSettings(): void {
        const storageData = localStorage.getItem(Constants.STORAGE_KEY);
        if (storageData) {
            const storageObj: StorageDataI = JSON.parse(storageData);

            this.themeService.initColorTheme(storageObj.color as ColorThemeType, storageObj.saturation);
            this.translate.use(storageObj.lang);
        } else {
            this.themeService.initColorTheme();
            this.translate.use(Constants.DEFAULT_LANGUAGE);
        }
    }
}
