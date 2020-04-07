import {Injectable} from '@angular/core';

export type ColorThemeType = 'red' | 'green' | 'blue' | 'yellow' | 'orange'

@Injectable({
    providedIn: 'root'
})
export class ThemesService {
    public static readonly DEFAULT_COLOR: ColorThemeType = 'yellow';
    public static readonly DEFAULT_SATURATION: number = 50;
    public static readonly RED: number = 360;
    public static readonly GREEN: number = 85;
    public static readonly BLUE: number = 240;
    public static readonly YELLOW: number = 60;
    public static readonly ORANGE: number = 32;

    constructor() {
    }

    /**
     * Should be called on OnInit method on the app-component
     */
    initColorTheme(color: ColorThemeType = ThemesService.DEFAULT_COLOR, saturation: number = ThemesService.DEFAULT_SATURATION) {
        this.initColorPalette();
        document.documentElement.style.setProperty('--current-hue', `var(--${color}-hue)`);
        document.documentElement.style.setProperty('--current-saturation', `var(--saturation-${saturation})`);
    }

    setSaturation(saturationValue: number) {
        document.documentElement.style.setProperty('--current-saturation', `var(--saturation-${saturationValue})`);
    }

    setHue(color: ColorThemeType) {
        document.documentElement.style.setProperty('--current-hue', `var(--${color}-hue)`);
    }


    initColorPalette() {
        const colorList = {
            ['--red-hue']: ThemesService.RED,
            ['--green-hue']: ThemesService.GREEN,
            ['--blue-hue']: ThemesService.BLUE,
            ['--yellow-hue']: ThemesService.YELLOW,
            ['--orange-hue']: ThemesService.ORANGE,
        };

        for (const colorListKey in colorList) {
            document.documentElement.style.setProperty(colorListKey, colorList[colorListKey]);
        }
    }
}
