import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {Constants} from './constants';
import {ContentLayoutComponent} from './layouts/content.layout/content.layout.component';
import {DashboardPageComponent} from './pages/dashboard.page/dashboard.page.component';

console.log('7 >>> Constants.PATH.dashboard: ', Constants.PATH.dashboard);

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
