import {Constants, MenuItemI} from '../../constants';

export const menuMap: MenuItemI[] = [
    {//DASHBOARD
        title: 'BREADCRUMB.DASHBOARD',
        path: Constants.PATH.dashboard,
        selected: true,
        breadcrumbs: [
            {
                label: 'BREADCRUMB.DASHBOARD',
            }
        ],

    },
    {//MEDICAMENTS
        title: 'BREADCRUMB.MEDICAMENTS',
        path: Constants.PATH.medicaments,
        selected: false,
        breadcrumbs: [
            {
                label: 'BREADCRUMB.DASHBOARD',
                path: Constants.PATH.root
            },
            {
                label: 'BREADCRUMB.MEDICAMENTS',
            }
        ]
    },
    {//PHARM-GROUPS
        title: 'BREADCRUMB.PHARMS',
        path: Constants.PATH.pharmGroups,
        selected: false,
        breadcrumbs: [
            {
                label: 'BREADCRUMB.DASHBOARD',
                path: Constants.PATH.root
            },
            {
                label: 'BREADCRUMB.PHARMS',
            }
        ]
    },
    {//SETTINGS
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
        ]
    },
    {//ABOUT
        title: 'BREADCRUMB.ABOUT',
        path: Constants.PATH.about,
        selected: false,
        breadcrumbs: [
            {
                label: 'BREADCRUMB.DASHBOARD',
                path: Constants.PATH.root
            },
            {
                label: 'BREADCRUMB.ABOUT',
            }
        ]
    }
];