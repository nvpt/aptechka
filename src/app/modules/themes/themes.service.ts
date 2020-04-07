import {Injectable} from '@angular/core';

export type ColorThemeType = 'red' | 'green' | 'blue' | 'yellow' | 'orange' //should have the same hue in css-variables

@Injectable({
    providedIn: 'root'
})
export class ThemesService {
    defaultColor: ColorThemeType = 'yellow';
    defaultSaturation: number = 50;

    constructor() {
    }

    initDefaultTheme() {
        document.documentElement.style.setProperty('--current-hue', `var(--${this.defaultColor}-hue)`);
        document.documentElement.style.setProperty('--current-saturation', `var(--saturation-${this.defaultSaturation})`);
    }

    setSaturation(saturationValue: number) {
        document.documentElement.style.setProperty('--current-saturation', `var(--saturation-${saturationValue})`);
    }

    setHue(color: ColorThemeType) {
        document.documentElement.style.setProperty('--current-hue', `var(--${color}-hue)`);
    }
}
