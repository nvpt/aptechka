import {Component, OnDestroy, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {Router} from '@angular/router';

import {Constants} from '../../constants';

import {MenuService} from '../../modules/menu/menu-services/menu.service';

@Component({
    selector: 'app-not-found-page',
    templateUrl: './not-found-page.component.html',
    styleUrls: ['./not-found-page.component.scss']
})
export class NotFoundPageComponent implements OnInit, OnDestroy {
    constructor(private menuService: MenuService, private location: Location, private router: Router) {}

    ngOnInit(): void {
        this.menuService && this.menuService.hide();
    }

    ngOnDestroy(): void {
        this.menuService.show();
    }

    //used in localization
    goBack(event: Event): void {
        event.preventDefault();
        this.location.back();
    }

    //used in localization
    goHome(event: Event): void {
        event.preventDefault();
        this.router.navigate([Constants.PATH.root]);
    }
}
