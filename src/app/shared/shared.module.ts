import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TranslateModule} from '@ngx-translate/core';

import {registerLocaleData} from '@angular/common';
import ruLocale from '@angular/common/locales/ru';

import {MenuModule} from '../modules/menu/menu.module';

import {ContentLayoutComponent} from '../layouts/content-layout/content-layout.component';
import {EmptyLayoutComponent} from '../layouts/empty-layout/empty-layout.component';

import {BoxesPageComponent} from '../pages/boxes-page/boxes-page.component';
import {TileComponent} from '../pages/boxes-page/components/tile/tile.component';
import {NewBoxPageComponent} from '../pages/new-box-page/new-box-page.component';
import {EditBoxPageComponent} from '../pages/edit-box-page/edit-box-page.component';
import {MedicamentsPageComponent} from '../pages/medicaments-page/medicaments-page.component';
import {NewMedicamentPageComponent} from '../pages/new-medicament-page/new-medicament-page.component';
import {SettingsPageComponent} from '../pages/settings-page/settings-page.component';
import {AboutPageComponent} from '../pages/about-page/about-page.component';
import {NotFoundPageComponent} from '../pages/not-found-page/not-found-page.component';

import {HeaderComponent} from '../components/header/header.component';
import {FooterComponent} from '../components/footer/footer.component';
import {MenuContentComponent} from '../components/menu-content/menu-content.component';
import {MenuBtnComponent} from '../components/menu-btn/menu-btn.component';
import {BreadcrumbComponent} from '../components/breadcrumb/breadcrumb.component';
import {PanelControlComponent} from '../components/panel-control/panel-control.component';
import { NewOptionComponent } from '../components/new-option/new-option.component';
import { CheckOptionComponent } from '../components/check-option/check-option.component';





registerLocaleData(ruLocale, 'ru');

@NgModule({
    declarations:[
        ContentLayoutComponent,
        EmptyLayoutComponent,
        BoxesPageComponent,
        TileComponent,
        NewBoxPageComponent,
        EditBoxPageComponent,
        MedicamentsPageComponent,
        NewMedicamentPageComponent,
        SettingsPageComponent,
        AboutPageComponent,
        NotFoundPageComponent,
        HeaderComponent,
        FooterComponent,
        MenuContentComponent,
        MenuBtnComponent,
        BreadcrumbComponent,
        PanelControlComponent,
        NewOptionComponent,
        CheckOptionComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        TranslateModule,
        MenuModule

    ],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        TranslateModule,
        MenuModule,
        RouterModule,
        ContentLayoutComponent,
        EmptyLayoutComponent,
        BoxesPageComponent,
        TileComponent,
        NewBoxPageComponent,
        EditBoxPageComponent,
        MedicamentsPageComponent,
        NewMedicamentPageComponent,
        SettingsPageComponent,
        AboutPageComponent,
        NotFoundPageComponent,
        HeaderComponent,
        FooterComponent,
        MenuContentComponent,
        MenuBtnComponent,
        BreadcrumbComponent,
        PanelControlComponent,
        NewOptionComponent,
        CheckOptionComponent
    ]
})
export class SharedModule {

}
