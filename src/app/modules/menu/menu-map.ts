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
    {//PLACES
        title: 'BREADCRUMB.PLACES',
        path: Constants.PATH.places,
        selected: false,
        breadcrumbs: [
            {
                label: 'BREADCRUMB.DASHBOARD',
                path: Constants.PATH.root
            },
            {
                label: 'BREADCRUMB.PLACES',
            }
        ]
    },
    {//TARGET-GROUPS
        title: 'BREADCRUMB.TARGET_GROUPS',
        path: Constants.PATH.targetGroups,
        selected: false,
        breadcrumbs: [
            {
                label: 'BREADCRUMB.DASHBOARD',
                path: Constants.PATH.root
            },
            {
                label: 'BREADCRUMB.TARGET_GROUPS',
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