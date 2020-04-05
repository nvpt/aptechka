import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MenuLayoutComponent} from './layouts/menu-layout/menu-layout.component';


@NgModule({
    declarations: [MenuLayoutComponent],
    imports: [
        CommonModule
    ],
    exports: [
        MenuLayoutComponent
    ]
})
export class MenuModule {
}
