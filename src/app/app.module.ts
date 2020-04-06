import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';

import {MenuModule} from './modules/menu/menu.module';

import {AppComponent} from './app.component';
import {ContentLayoutComponent} from './layouts/content-layout/content-layout.component';
import {DashboardPageComponent} from './pages/dashboard-page/dashboard-page.component';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {SharedModule} from './shared/shared.module';
import { MenuContentComponent } from './components/menu-content/menu-content.component';
import { SettingsPageComponent } from './pages/settings-page/settings-page.component';

@NgModule({
    declarations: [
        AppComponent,
        ContentLayoutComponent,
        DashboardPageComponent,
        HeaderComponent,
        FooterComponent,
        MenuContentComponent,
        SettingsPageComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MenuModule,
        SharedModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
