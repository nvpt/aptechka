import {Component} from '@angular/core';
import {BreadcrumbService} from './breadcrumb.service';
import {Router} from '@angular/router';
import {BreadcrumbI, Constants} from '../../constants';
import {MenuService} from '../../modules/menu/menu-services/menu.service';

@Component({
    selector: 'app-breadcrumb',
    templateUrl: './breadcrumb.component.html',
    styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent {

    constructor(public menuService: MenuService, public router: Router, public breadcrumbService: BreadcrumbService) {
    }

    goTo(event: Event, breadcrumbPart: BreadcrumbI) {
        event.preventDefault();

        this.router.navigate([breadcrumbPart.path]).then(() => {

            if (breadcrumbPart.path === Constants.PATH.root) {
                this.breadcrumbService.hideBreadcrumbs();
            } else {
                this.menuService.defineCurrentMenuItem(this.menuService.menu, window.location.pathname)
                    .subscribe((menuItem) => {
                        menuItem && this.breadcrumbService.renderBreadcrumbs(menuItem.breadcrumbs);
                    });
            }

        });
    }
}
