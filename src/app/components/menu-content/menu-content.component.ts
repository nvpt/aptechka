import {Component, OnInit} from '@angular/core';
import {Constants, MenuItemI} from '../../constants';
import {Router} from '@angular/router';
import {MenuService} from '../../modules/menu-services/menu.service';

@Component({
    selector: 'app-menu-content',
    templateUrl: './menu-content.component.html',
    styleUrls: ['./menu-content.component.scss']
})
export class MenuContentComponent implements OnInit {
    constants = Constants;

    constructor(private router: Router, private menuService: MenuService) {
    }

    ngOnInit(): void {
    }

    goToSection(event: MouseEvent, menuItem: MenuItemI) {
        event.preventDefault();
        this.menuService.close();
        this.router.navigate(['/', menuItem.path]);
    }
}
