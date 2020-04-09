import {Injectable} from '@angular/core';
import {Constants, MenuItemI} from '../../../constants';
import {Observable, of} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class MenuService {
    opened: boolean = false;
    hideMenu: boolean = false;

    /*MENU*/
    menu: MenuItemI[] = [
        {
            title: 'BREADCRUMB.DASHBOARD',
            path: Constants.PATH.dashboard,
            selected: true,
            breadcrumbs: [
                {
                    label: 'BREADCRUMB.DASHBOARD',
                }
            ],

        },
        {
            title: 'BREADCRUMB.MEDICAMENTS',
            path: Constants.PATH.medicaments,
            selected: false,
            breadcrumbs: [
                {
                    label: 'BREADCRUMB.DASHBOARD',
                    path: Constants.PATH.root
                },
                {
                    label: 'BREADCRUMB.MEDICAMENTS',
                }
            ]
        },
        {
            title: 'BREADCRUMB.PHARM_GROUPS',
            path: Constants.PATH.pharmGroups,
            selected: false,
            breadcrumbs: [
                {
                    label: 'BREADCRUMB.DASHBOARD',
                    path: Constants.PATH.root
                },
                {
                    label: 'BREADCRUMB.PHARM_GROUPS',
                }
            ]
        },
        {
            title: 'BREADCRUMB.SETTINGS',
            path: Constants.PATH.settings,
            selected: false,
            breadcrumbs: [
                {
                    label: 'BREADCRUMB.DASHBOARD',
                    path: Constants.PATH.root
                },
                {
                    label: 'BREADCRUMB.SETTINGS',
                }
            ]
        },
        {
            title: 'BREADCRUMB.ABOUT',
            path: Constants.PATH.about,
            selected: false,
            breadcrumbs: [
                {
                    label: 'BREADCRUMB.DASHBOARD',
                    path: Constants.PATH.root
                },
                {
                    label: 'BREADCRUMB.ABOUT',
                }
            ]
        }
    ];

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

    hide(){
        this.hideMenu = true;
    }

    show(){
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
