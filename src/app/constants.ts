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
    children?: MenuItemI[];
}

export class Constants {
    /*ROUTING*/
    public static readonly SECTION = Object.freeze({
        empty: '',
        root: '/',
        newBox: 'new-box',
        editBox: 'edit-box',
        medicaments: 'medicaments',
        newMedicament: 'new-medicament',
        editMedicament: 'edit-medicament',
        settings: 'settings',
        about: 'about',
        notFound: '404'
    });

    public static readonly PATH = Object.freeze({
        root: Constants.SECTION.root,
        dashboard: Constants.SECTION.root,
        newBox: Constants.SECTION.newBox,
        editBox: Constants.SECTION.editBox,
        medicaments: Constants.SECTION.medicaments,
        newMedicament: Constants.SECTION.newMedicament,
        editMedicament: Constants.SECTION.editMedicament,
        settings: Constants.SECTION.settings,
        about: `${Constants.SECTION.settings}/${Constants.SECTION.about}`,
        notFound: Constants.SECTION.notFound
    });

    /*LOCAL STORAGE*/
    public static readonly STORAGE_KEY: string = 'aptechka';

    /*LOCALIZATION*/
    public static readonly DEFAULT_LANGUAGE: LanguageType = 'en';
}
