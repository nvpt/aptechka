import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {Constants} from './constants';
import {ContentLayoutComponent} from './layouts/content-layout/content-layout.component';
import {DashboardPageComponent} from './pages/dashboard-page/dashboard-page.component';
import {SettingsPageComponent} from './pages/settings-page/settings-page.component';
import {AboutComponent} from './pages/about/about.component';

const routes: Routes = [
        {
            path: '', component: ContentLayoutComponent, children: [
                {path: '', component: DashboardPageComponent, pathMatch: 'full'},
                {
                    path: Constants.PATH.settings, component: SettingsPageComponent, children: [
                        {
                            path: Constants.SECTION.about, component: AboutComponent
                        }
                    ]
                }
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
