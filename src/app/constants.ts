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
        medicaments: 'medicaments',
        pharmGroups: 'pharms',
        about: 'about',
    });

    public static readonly PATH = Object.freeze({
        root: Constants.SECTION.root,
        dashboard: Constants.SECTION.root,
        medicaments: Constants.SECTION.medicaments,
        pharmGroups: Constants.SECTION.pharmGroups,
        settings: Constants.SECTION.settings,
        about: `${Constants.SECTION.settings}/${Constants.SECTION.about}`,
    });


    /*LOCAL STORAGE*/
    public static readonly STORAGE_KEY: string = 'aptechka';

    /*LOCALIZATION*/
    public static readonly DEFAULT_LANGUAGE: LanguageType = 'en';
}
