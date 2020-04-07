import {Component, OnInit} from '@angular/core';
import {ColorThemeType, ThemesService} from '../../modules/themes/themes.service';
import {Constants} from '../../constants';
import {StorageDataI} from '../../interfaces/storage-data-interface';


@Component({
    selector: 'app-settings-page',
    templateUrl: './settings-page.component.html',
    styleUrls: ['./settings-page.component.scss']
})
export class SettingsPageComponent implements OnInit {
    currentColor!: ColorThemeType;

    constructor(private themeService: ThemesService) {
    }

    ngOnInit(): void {
        this.initStorageData();
    }

    initStorageData():void {
        const storageData = localStorage.getItem(Constants.STORAGE_KEY);
        if (storageData) {
            const storageObject: StorageDataI = JSON.parse(storageData);
            this.currentColor = storageObject.color as ColorThemeType;
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
                saturation = 50;
                break;
        }

        this.themeService.setSaturation(saturation);
        this.themeService.setHue(colorTheme);

        const storage: StorageDataI = {};
        storage.color = colorTheme;
        storage.saturation = saturation;

        localStorage.setItem(Constants.STORAGE_KEY, JSON.stringify(storage));
    }
}
