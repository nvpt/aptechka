import {Injectable} from '@angular/core';

export type ColorThemeType = 'red' | 'green' | 'blue' | 'yellow' | 'orange' //should have the same hue in css-variables

@Injectable({
    providedIn: 'root'
})
export class ThemesService {
    themeColor: ColorThemeType = 'yellow';
    themeSaturation: number = 50;

    constructor() {
    }

    /**
     * Should be called on OnInit method on the app-component
     */
    initDefaultTheme() {
        document.documentElement.style.setProperty('--current-hue', `var(--${this.themeColor}-hue)`);
        document.documentElement.style.setProperty('--current-saturation', `var(--saturation-${this.themeSaturation})`);
    }

    setSaturation(saturationValue: number) {
        document.documentElement.style.setProperty('--current-saturation', `var(--saturation-${saturationValue})`);
    }

    setHue(color: ColorThemeType) {
        document.documentElement.style.setProperty('--current-hue', `var(--${color}-hue)`);
    }
}
