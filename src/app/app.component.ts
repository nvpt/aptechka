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
        translate.setDefaultLang('en');
        translate.use('en');
    }

    ngOnInit(): void {
        this.initColorTheme();
    }

    initColorTheme() {
        const storageData = localStorage.getItem(Constants.STORAGE_KEY);
        if (storageData) {
            const storageObj: StorageDataI = JSON.parse(storageData);
            this.themeService.initColorTheme(storageObj.color as ColorThemeType, storageObj.saturation);
        } else {
            this.themeService.initColorTheme();
        }
    }

}
