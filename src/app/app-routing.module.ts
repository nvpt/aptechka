import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {Constants} from './constants';
import {ContentLayoutComponent} from './layouts/content-layout/content-layout.component';
import {BoxesPageComponent} from './pages/boxes-page/boxes-page.component';
import {SettingsPageComponent} from './pages/settings-page/settings-page.component';
import {AboutPageComponent} from './pages/about-page/about-page.component';
import {EmptyLayoutComponent} from './layouts/empty-layout/empty-layout.component';
import {NotFoundPageComponent} from './pages/not-found-page/not-found-page.component';
import {MedicamentsPageComponent} from './pages/medicaments-page/medicaments-page.component';
import {NewBoxPageComponent} from './pages/new-box-page/new-box-page.component';
import {EditBoxPageComponent} from './pages/edit-box-page/edit-box-page.component';
import {EditMedicamentPageComponent} from './pages/edit-medicament-page/edit-medicament-page.component';
import {NewMedicamentPageComponent} from './pages/new-medicament-page/new-medicament-page.component';

const routes: Routes = [
    {
        path: '',
        component: ContentLayoutComponent,
        children: [
            {path: '', component: BoxesPageComponent, pathMatch: 'full'},
            {path: Constants.PATH.newBox, component: NewBoxPageComponent},
            {path: `${Constants.PATH.editBox}/:boxId`, component: EditBoxPageComponent},
            {path: Constants.PATH.settings, component: SettingsPageComponent}, //todo *** set as module?
            {path: Constants.PATH.about, component: AboutPageComponent},
            {path: Constants.PATH.medicaments, component: MedicamentsPageComponent},
            {path: Constants.PATH.newMedicament, component: NewMedicamentPageComponent},
            {path: `${Constants.PATH.editMedicament}/:medicamentId`, component: EditMedicamentPageComponent}
        ]
    },
    {
        path: '**', component: EmptyLayoutComponent, children: [
            {path: '', component: NotFoundPageComponent}
        ]
    },
    // {
    //     path: '**',
    //     component: EmptyLayoutComponent,
    //     children: [{path: '', component: NotFoundPageComponent}]
        // redirectTo: Constants.PATH.notFound
    // },
    // {
    //     path: Constants.PATH.notFound,
    //     component: EmptyLayoutComponent,
    //     children: [{path: '', component: NotFoundPageComponent}]
    // }
];
@NgModule({
    imports: [
        RouterModule.forRoot(routes, {
            paramsInheritanceStrategy: 'always'
        })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}
