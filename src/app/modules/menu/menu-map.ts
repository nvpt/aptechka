import {Constants, MenuItemI} from '../../constants';

export const menuMap: MenuItemI[] = [
    {
        //BOXES
        title: 'BREADCRUMB.BOXES',
        path: Constants.PATH.dashboard,
        selected: true
    },
    {
        //MEDICAMENTS
        title: 'BREADCRUMB.MEDICAMENTS',
        path: Constants.PATH.medicaments,
        selected: false
    },
    {
        //SETTINGS
        title: 'BREADCRUMB.SETTINGS',
        path: Constants.PATH.settings,
        selected: false
    },
    {
        //ABOUT
        title: 'BREADCRUMB.ABOUT',
        path: Constants.PATH.about,
        selected: false
    }
];
