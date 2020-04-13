import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';

import {MenuModule} from './modules/menu/menu.module';

import {AppComponent} from './app.component';
import {ContentLayoutComponent} from './layouts/content-layout/content-layout.component';
import {DashboardPageComponent} from './pages/dashboard-page/dashboard-page.component';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {SharedModule} from './shared/shared.module';
import {MenuContentComponent} from './components/menu-content/menu-content.component';
import {SettingsPageComponent} from './pages/settings-page/settings-page.component';
import {HttpClient} from '@angular/common/http';
import {MenuBtnComponent} from './components/menu-btn/menu-btn.component';
import {BreadcrumbComponent} from './components/breadcrumb/breadcrumb.component';
import {AboutPageComponent} from './pages/about-page/about-page.component';
import {MedicamentsPageComponent} from './pages/medicaments-page/medicaments-page.component';
import {PharmGroupsPageComponent} from './pages/pharm-groups-page/pharm-groups-page.component';
import {EmptyLayoutComponent} from './layouts/empty-layout/empty-layout.component';
import {NotFoundPageComponent} from './pages/not-found-page/not-found-page.component';
import {TileComponent} from './pages/dashboard-page/components/tile/tile.component';
import {PlacesPageComponent} from './pages/places-page/places-page.component';
import {TargetGroupsPageComponent} from './pages/target-groups-page/target-groups-page.component';
import {PanelControlComponent} from './components/panel-control/panel-control.component';
import {NewMedicamentComponent} from './pages/new-medicament/new-medicament.component';
import {NewBoxComponent} from './pages/new-box/new-box.component';

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
}

@NgModule({
    declarations: [
        AppComponent,
        ContentLayoutComponent,
        DashboardPageComponent,
        HeaderComponent,
        FooterComponent,
        MenuContentComponent,
        SettingsPageComponent,
        MenuBtnComponent,
        BreadcrumbComponent,
        AboutPageComponent,
        MedicamentsPageComponent,
        PharmGroupsPageComponent,
        EmptyLayoutComponent,
        NotFoundPageComponent,
        TileComponent,
        PlacesPageComponent,
        TargetGroupsPageComponent,
        PanelControlComponent,
        NewMedicamentComponent,
        NewBoxComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        MenuModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            },
            defaultLanguage: 'en'
        }),
        SharedModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
