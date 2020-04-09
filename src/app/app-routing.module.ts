import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {Constants} from './constants';
import {ContentLayoutComponent} from './layouts/content-layout/content-layout.component';
import {DashboardPageComponent} from './pages/dashboard-page/dashboard-page.component';
import {SettingsPageComponent} from './pages/settings-page/settings-page.component';
import {AboutPageComponent} from './pages/about-page/about-page.component';
import {EmptyLayoutComponent} from './layouts/empty-layout/empty-layout.component';
import {NotFoundPageComponent} from './pages/not-found-page/not-found-page.component';

const routes: Routes = [
        {
            path: '', component: ContentLayoutComponent, children: [
                {path: '', component: DashboardPageComponent, pathMatch: 'full'},
                {path: Constants.PATH.settings, component: SettingsPageComponent},
                {path: Constants.PATH.about, component: AboutPageComponent}
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
