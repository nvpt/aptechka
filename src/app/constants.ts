export interface MenuItemI {
    title: string;
    path: string;
    nested?: boolean;
    selected?: boolean;
    children?: MenuItemI[];
}

export class Constants {

    /*ROUTING*/
    public static readonly SECTION = Object.freeze({
        empty: '',
        root: '/',
        dashboard: 'dashboard',
        settings: 'settings',
    });

    public static readonly PATH = Object.freeze({
        dashboard: Constants.SECTION.dashboard,
        settings: Constants.SECTION.settings
    });

    /*MENU*/
    public static readonly menuItems: MenuItemI[] = [
        {
            title: 'Dashboard',
            path: Constants.PATH.dashboard,
            selected: true
        },
        {
            title: 'Settings',
            path: Constants.PATH.settings,
            selected: false
        },
    ];

    /*LOCAL STORAGE*/
    public static readonly STORAGE_KEY: string = 'aptechka';
}
