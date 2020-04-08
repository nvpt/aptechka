import {Component} from '@angular/core';
import {Constants, MenuItemI} from '../../constants';
import {Router} from '@angular/router';
import {MenuService} from '../../modules/menu/menu-services/menu.service';
import {BreadcrumbService} from '../breadcrumb/breadcrumb.service';

@Component({
    selector: 'app-menu-content',
    templateUrl: './menu-content.component.html',
    styleUrls: ['./menu-content.component.scss']
})
export class MenuContentComponent {
    constants = Constants;

    constructor(private router: Router, public menuService: MenuService, private breadcrumbService: BreadcrumbService) {
    }

    goTo(event: Event, menuItem: MenuItemI) {
        event.preventDefault();

        this.menuService.close();
        this.router.navigate([menuItem.path]).then(() => {
            this.breadcrumbService.renderBreadcrumbs(menuItem.breadcrumbs);
        });
    }
}
