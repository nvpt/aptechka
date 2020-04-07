import {Injectable} from '@angular/core';




@Injectable({
    providedIn: 'root'
})
export class ThemesService {
    themeColor: string;



    constructor() {
    }

    setTheme(color: string) {
        this.themeColor = color;
        document.documentElement.style.setProperty('--current-hue', `var(--${color}-hue)`);
    }
}
