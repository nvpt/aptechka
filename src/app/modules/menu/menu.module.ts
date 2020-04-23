import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MenuComponent} from './menu-component/menu.component';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
    declarations: [MenuComponent],
    imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule
    ],
    exports: [
        MenuComponent,
        BrowserModule,
        BrowserAnimationsModule
    ]
})
export class MenuModule {
}
