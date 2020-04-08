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
            title: 'Dashboard',
            path: Constants.PATH.dashboard,
            selected: true,
            breadcrumbs: [
                {
                    label: 'Dashboard',
                }
            ],

        },
        {
            title: 'Settings',
            path: Constants.PATH.settings,
            selected: false,
            breadcrumbs: [
                {
                    label: 'Home',
                    path: Constants.PATH.root
                },
                {
                    label: 'Settings',
                }
            ],
            children: [
                {
                    title: 'About',
                    path: Constants.PATH.about,
                    selected: false,
                    breadcrumbs: [
                        {
                            label: 'Home',
                            path: Constants.PATH.root
                        },
                        {
                            label: 'Settings',
                            path: Constants.PATH.settings

                        },
                        {
                            label: 'About',
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
