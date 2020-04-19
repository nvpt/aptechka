import {Constants, MenuItemI} from '../../constants';

export const menuMap: MenuItemI[] = [
    {//DASHBOARD
        title: 'BREADCRUMB.HOME',
        path: Constants.PATH.dashboard,
        selected: true,
        breadcrumbs: [
            {
                label: 'BREADCRUMB.BOXES',
            }
        ],

    },
    {//MEDICAMENTS
        title: 'BREADCRUMB.MEDICAMENTS',
        path: Constants.PATH.medicaments,
        selected: false,
        breadcrumbs: [
            {
                label: 'BREADCRUMB.HOME',
                path: Constants.PATH.root
            },
            {
                label: 'BREADCRUMB.MEDICAMENTS',
            }
        ]
    },
    {//SETTINGS
        title: 'BREADCRUMB.SETTINGS',
        path: Constants.PATH.settings,
        selected: false,
        breadcrumbs: [
            {
                label: 'BREADCRUMB.HOME',
                path: Constants.PATH.root
            },
            {
                label: 'BREADCRUMB.SETTINGS',
            }
        ]
    },
    {//ABOUT
        title: 'BREADCRUMB.ABOUT',
        path: Constants.PATH.about,
        selected: false,
        breadcrumbs: [
            {
                label: 'BREADCRUMB.HOME',
                path: Constants.PATH.root
            },
            {
                label: 'BREADCRUMB.ABOUT',
            }
        ]
    }
];