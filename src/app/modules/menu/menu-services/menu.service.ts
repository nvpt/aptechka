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
            ],
            children: [
                {
                    title: 'BREADCRUMB.ABOUT',
                    path: Constants.PATH.about,
                    selected: false,
                    breadcrumbs: [
                        {
                            label: 'BREADCRUMB.HOME',
                            path: Constants.PATH.root
                        },
                        {
                            label: 'BREADCRUMB.SETTINGS',
                            path: Constants.PATH.settings

                        },
                        {
                            label: 'BREADCRUMB.ABOUT',
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
