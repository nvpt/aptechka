import {Component} from '@angular/core';
import {Router} from '@angular/router';

import {Constants, MenuItemI} from '../../constants';

import {MenuService} from '../../modules/menu/menu-services/menu.service';

@Component({
    selector: 'app-menu-content',
    templateUrl: './menu-content.component.html',
    styleUrls: ['./menu-content.component.scss']
})
export class MenuContentComponent {
    constants = Constants;

    constructor(
        private router: Router,
        public menuService: MenuService,
    ) {}

    goTo(event: Event, menuItem: MenuItemI): void {
        event.preventDefault();

        this.menuService.close();
        this.router.navigate([menuItem.path]);
    }
}
