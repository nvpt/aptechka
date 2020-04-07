import {Component, OnInit} from '@angular/core';
import {ColorThemeType, ThemesService} from '../../modules/themes/themes.service';


@Component({
    selector: 'app-settings-page',
    templateUrl: './settings-page.component.html',
    styleUrls: ['./settings-page.component.scss']
})
export class SettingsPageComponent implements OnInit {

    constructor(private themeService: ThemesService) {
    }

    ngOnInit(): void {
    }

    selectTheme(event: Event) {
        const colorTheme: ColorThemeType = (<HTMLInputElement>event.target).value as ColorThemeType;
        let saturation!: number;

        switch (colorTheme) {
            case 'orange':
                saturation = 80;
                break;
            default:
                saturation = 50;
                break;
        }

        this.themeService.setSaturation(saturation);
        this.themeService.setHue(colorTheme);
    }
}
