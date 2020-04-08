import {Injectable} from '@angular/core';
import {Constants, MenuItemI} from '../../../constants';

@Injectable({
    providedIn: 'root'
})
export class MenuService {
    opened: boolean = false;

    /*MENU*/
    menu: MenuItemI[] = [
        {
            title: 'MENU.DASHBOARD',
            path: Constants.PATH.dashboard,
            selected: true,
            breadcrumbs: [
                {
                    label: 'MENU.DASHBOARD',
                }
            ],

        },
        {
            title: 'MENU.SETTINGS',
            path: Constants.PATH.settings,
            selected: false,
            breadcrumbs: [
                {
                    label: 'MENU.DASHBOARD',
                    path: Constants.PATH.root
                },
                {
                    label: 'MENU.SETTINGS',
                }
            ],
            children: [
                {
                    title: 'MENU.ABOUT',
                    path: Constants.PATH.about,
                    selected: false,
                    breadcrumbs: [
                        {
                            label: 'MENU.HOME',
                            path: Constants.PATH.root
                        },
                        {
                            label: 'MENU.SETTINGS',
                            path: Constants.PATH.settings

                        },
                        {
                            label: 'MENU.ABOUT',
                        }
                    ],
                    children: [

                    ]
                },
            ]
        },
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
}
