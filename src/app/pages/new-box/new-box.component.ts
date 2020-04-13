import {Component, OnDestroy, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {MenuService} from '../../modules/menu/menu-services/menu.service';

@Component({
    selector: 'app-new-box',
    templateUrl: './new-box.component.html',
    styleUrls: ['./new-box.component.scss']
})
export class NewBoxComponent implements OnInit, OnDestroy {

    constructor(private location: Location, private menuService: MenuService) {
    }

    ngOnInit(): void {
        this.menuService.hide();
    }

    ngOnDestroy() {
        this.menuService.show();
    }

    cancelAdding() {
        this.location.back();
    }
}
