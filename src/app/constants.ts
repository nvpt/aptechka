import {LanguageType} from './pages/settings-page/settings-page.component';

export interface BreadcrumbI {
    label: string;
    path?: string;
}

export interface MenuItemI {
    title: string;
    path: string;
    nested?: boolean;
    selected?: boolean;
    breadcrumbs?: BreadcrumbI[]
    children?: MenuItemI[];
}

export class Constants {

    /*ROUTING*/
    public static readonly SECTION = Object.freeze({
        empty: '',
        root: '/',
        settings: 'settings',
    });

    public static readonly PATH = Object.freeze({
        root: Constants.SECTION.root,
        dashboard: Constants.SECTION.root,
        settings: Constants.SECTION.settings
    });

    /*MENU*/
    public static readonly menuItems: MenuItemI[] = [
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
        },
    ];

    /*LOCAL STORAGE*/
    public static readonly STORAGE_KEY: string = 'aptechka';

    /*LOCALIZATION*/
    public static readonly DEFAULT_LANGUAGE: LanguageType = 'en';
}
