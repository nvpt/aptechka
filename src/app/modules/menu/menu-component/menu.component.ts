import {Component, Input, OnInit} from '@angular/core';
import {MenuService} from '../menu-services/menu.service';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
    @Input() bgColor?: string;

    constructor(public menuService: MenuService) {
    }

    ngOnInit(): void {
    }

}
