import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';

import {ColorThemeType, ThemesService} from './modules/themes/themes.service';
import {MenuService} from './modules/menu/menu-services/menu.service';
import {BreadcrumbService} from './components/breadcrumb/breadcrumb.service';
import {Constants} from './constants';
import {StorageDataI} from './interfaces/storage-data-interface';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
    menuItemSub$: Subscription;
    title: string = 'aptechka';
    menuBg: string = 'var(--color-app_bg-bg)';

    constructor(private route: ActivatedRoute, private themeService: ThemesService, private translate: TranslateService, private menuService: MenuService, private router: Router, private breadcrumbService: BreadcrumbService) {
        this.translate.setDefaultLang(Constants.DEFAULT_LANGUAGE);
    }

    ngOnInit(): void {
        this.defineCurrentSettings();
        this.menuItemSub$ = this.menuService.defineCurrentMenuItem(this.menuService.menu, window.location.pathname).subscribe((menuItem) => {
            menuItem && this.breadcrumbService.renderBreadcrumbs(menuItem.breadcrumbs);
        });
    }

    ngOnDestroy(): void {
        this.menuItemSub$ && this.menuItemSub$.unsubscribe();
    }

    defineCurrentSettings() {
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
