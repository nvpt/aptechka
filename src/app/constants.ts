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
        places: 'places',
        targetGroups: 'target-groups',
        impactTypes: 'impact-types',
        about: 'about',
        newBox: 'new-box',
    });

    public static readonly PATH = Object.freeze({
        root: Constants.SECTION.root,
        dashboard: Constants.SECTION.root,
        newBox: Constants.SECTION.newBox,
        medicaments: Constants.SECTION.medicaments,
        places: Constants.SECTION.places,
        targetGroups: Constants.SECTION.targetGroups,
        impactTypes: Constants.SECTION.impactTypes,
        settings: Constants.SECTION.settings,
        about: `${Constants.SECTION.settings}/${Constants.SECTION.about}`,
    });


    /*LOCAL STORAGE*/
    public static readonly STORAGE_KEY: string = 'aptechka';

    /*LOCALIZATION*/
    public static readonly DEFAULT_LANGUAGE: LanguageType = 'en';
}
