import {Component, OnInit} from '@angular/core';
import {ThemesService} from './modules/themes/themes.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
    menuBg: string = 'var(--color-app_bg-bg)';

    constructor(private themeService: ThemesService) {
    }
    ngOnInit(): void {
        this.themeService.initDefaultTheme();
    }

}
