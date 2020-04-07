import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ThemesService {
    theme: string;



    constructor() {
    }

    setTheme(color: string) {
        this.theme = color;
    }
}
