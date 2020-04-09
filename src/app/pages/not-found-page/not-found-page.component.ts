import {Component, OnDestroy, OnInit} from '@angular/core';
import {MenuService} from '../../modules/menu/menu-services/menu.service';
import {Location} from '@angular/common';
import {Router} from '@angular/router';
import {Constants} from '../../constants';

@Component({
    selector: 'app-not-found-page',
    templateUrl: './not-found-page.component.html',
    styleUrls: ['./not-found-page.component.scss']
})
export class NotFoundPageComponent implements OnInit, OnDestroy {
    constructor(private menuService: MenuService, private location: Location, private router: Router) {
    }

    ngOnInit(): void {
        this.menuService && this.menuService.hide();

    }

    ngOnDestroy(): void {
        this.menuService.show();
    }


    goBack(event: Event) {
        event.preventDefault();
        this.location.back();
    }

    goHome(event: Event) {
        event.preventDefault();
        this.router.navigate([Constants.PATH.root]);
    }

}
