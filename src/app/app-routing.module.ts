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
import {ImpactTypesPageComponent} from './pages/impact-types-page/impact-types-page.component';
import {PlacesPageComponent} from './pages/places-page/places-page.component';
import {TargetGroupsPageComponent} from './pages/target-groups-page/target-groups-page.component';
import {NewBoxComponent} from './pages/new-box/new-box.component';

const routes: Routes = [
        {
            path: '', component: ContentLayoutComponent, children: [
                {path: '', component: DashboardPageComponent, pathMatch: 'full'},
                {path: Constants.PATH.newBox, component: NewBoxComponent},
                {path: Constants.PATH.settings, component: SettingsPageComponent},
                {path: Constants.PATH.about, component: AboutPageComponent},
                {path: Constants.PATH.medicaments, component: MedicamentsPageComponent},
                {path: Constants.PATH.places, component: PlacesPageComponent},
                {path: Constants.PATH.targetGroups, component: TargetGroupsPageComponent},
                {path: Constants.PATH.impactTypes, component: ImpactTypesPageComponent}
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
