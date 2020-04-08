import {Component, OnInit} from '@angular/core';
import {MenuService} from '../../modules/menu/menu-services/menu.service';

@Component({
    selector: 'app-menu-btn',
    templateUrl: './menu-btn.component.html',
    styleUrls: ['./menu-btn.component.scss']
})
export class MenuBtnComponent implements OnInit {

    constructor(public menuService: MenuService) {
    }

    toggleMenu(): void {
        this.menuService.toggle();
    }

}
