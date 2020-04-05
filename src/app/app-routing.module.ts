import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {Constants} from './constants';
import {ContentLayoutComponent} from './layouts/content-layout/content-layout.component';
import {DashboardPageComponent} from './pages/dashboard-page/dashboard-page.component';

const routes: Routes = [
        {
            path: '', redirectTo: Constants.PATH.dashboard, pathMatch: 'full'
        },
        {
            path: Constants.PATH.dashboard, component: ContentLayoutComponent,
            children: [
                {
                    path: '', component: DashboardPageComponent
                }
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
