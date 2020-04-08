import {Component, OnInit} from '@angular/core';
import {ColorThemeType, ThemesService} from './modules/themes/themes.service';
import {Constants} from './constants';
import {StorageDataI} from './interfaces/storage-data-interface';
import {TranslateService} from '@ngx-translate/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title: string = 'aptechka';
    menuBg: string = 'var(--color-app_bg-bg)';

    constructor(private themeService: ThemesService, private translate: TranslateService) {
        this.translate.setDefaultLang(Constants.DEFAULT_LANGUAGE);
    }

    ngOnInit(): void {
        this.initCurrentSettings();
    }

    initCurrentSettings() {
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
