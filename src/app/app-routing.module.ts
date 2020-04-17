import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {Constants} from './constants';
import {ContentLayoutComponent} from './layouts/content-layout/content-layout.component';
import {DashboardPageComponent} from './pages/dashboard-page/dashboard-page.component';
import {SettingsPageComponent} from './pages/settings-page/settings-page.component';
import {AboutPageComponent} from './pages/about-page/about-page.component';
import {EmptyLayoutComponent} from './layouts/empty-layout/empty-layout.component';
import {NotFoundPageComponent} from './pages/not-found-page/not-found-page.component';
import {MedicamentsPageComponent} from './pages/medicaments-page/medicaments-page.component';
import {NewBoxComponent} from './pages/new-box/new-box.component';
import {EditBoxComponent} from './pages/edit-box/edit-box.component';

const routes: Routes = [
        {
            path: '', component: ContentLayoutComponent, children: [
                {path: '', component: DashboardPageComponent, pathMatch: 'full'},
                {path: Constants.PATH.newBox, component: NewBoxComponent},
                {path: `${Constants.PATH.editBox}/:boxId`, component: EditBoxComponent},
                {path: Constants.PATH.settings, component: SettingsPageComponent},//todo *** set as module?
                {path: Constants.PATH.about, component: AboutPageComponent},
                {path: Constants.PATH.medicaments, component: MedicamentsPageComponent},//todo *** set as module
            ]
        },
        {
            path: '**', component: EmptyLayoutComponent, children: [
                {path: '', component: NotFoundPageComponent}
            ]
        }
    ]
;

@NgModule({
    imports: [RouterModule.forRoot(routes, {
        paramsInheritanceStrategy: 'always'
    })],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
