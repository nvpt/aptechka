import {Injectable} from '@angular/core';
import {MenuItemI} from '../../../constants';
import {Observable, of} from 'rxjs';
import {menuMap} from '../menu-map';

@Injectable({
    providedIn: 'root'
})
export class MenuService {
    opened: boolean = false;
    hideMenu: boolean = false;

    /*MENU*/
    menu: MenuItemI[] = menuMap;

    constructor() {
    }

    open() {
        this.opened = true;
    }


    close() {
        this.opened = false;
    }

    toggle() {
        this.opened = !this.opened;
    }

    hide() {
        this.hideMenu = true;
    }

    show() {
        this.hideMenu = false;
    }

    defineCurrentMenuItem(menu: MenuItemI[], location: string): Observable<MenuItemI> {
        if (location === '/' || location === '') return of(null);

        for (let i = 0; i < menu.length; i++) {
            let menuItem = menu[i];

            if (`/${menuItem.path}` === location) {
                return of(menuItem);
            }

            if (menuItem.children) {
                return this.defineCurrentMenuItem(menuItem.children, location);
            }
        }
        return of(null);
    }
}
