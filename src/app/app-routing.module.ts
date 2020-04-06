import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {Constants} from './constants';
import {ContentLayoutComponent} from './layouts/content-layout/content-layout.component';
import {DashboardPageComponent} from './pages/dashboard-page/dashboard-page.component';
import {SettingsPageComponent} from './pages/settings-page/settings-page.component';

const routes: Routes = [
        {
            path: '', component: ContentLayoutComponent, children: [
                {path: '', redirectTo: Constants.PATH.dashboard, pathMatch: 'full'},
                {path: Constants.PATH.dashboard, component: DashboardPageComponent},
                {path: Constants.PATH.settings, component: SettingsPageComponent}
            ]
        }
    ]
;

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
