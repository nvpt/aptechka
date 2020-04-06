export interface menuItem {
    title: string;
    path: string;
    nested?: boolean;
    selected?: boolean;
    children?: menuItem[];
}

export class Constants {

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

    public static readonly menuItems: menuItem[] = [
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
}
