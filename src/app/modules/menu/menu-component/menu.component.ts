import {Component, Input, OnInit} from '@angular/core';
import {MenuService} from '../menu-services/menu.service';
import {animate, state, style, transition, trigger} from '@angular/animations';

const MENU_OPEN_TIME: number = 200;
const MENU_CLOSE_TIME: number = 200;

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss'],
    animations: [
        trigger('toggleMenu', [
            state('start', style({left: '-300px'})),
            state('end', style({left: '0'})),
            transition('start => end', animate(`${MENU_OPEN_TIME}ms ease-in`)),
            transition('end => start', animate(`${MENU_CLOSE_TIME}ms ease-out`))
        ]),
        trigger('toggleMenuBg', [
            state('startBg', style({opacity: '0'})),
            state('endBg', style({opacity: '1'})),
            transition('startBg <=> endBg', animate(MENU_OPEN_TIME))
        ])
    ]
})
export class MenuComponent implements OnInit {
    @Input() bgColor?: string;

    menuAnimationState: string = 'start';
    menuBgAnimationState: string = 'startBg';

    constructor(public menuService: MenuService) {}

    toggle() {
        if (!this.menuService.opened) {
            this.open();
        } else {
            this.close();
        }
    }

    open() {
        setTimeout(() => {
            this.menuAnimationState = 'end';
            this.menuBgAnimationState = 'endBg';
        });

        this.menuService.toggle();
    }

    close() {
        this.menuAnimationState = 'start';
        this.menuBgAnimationState = 'startBg';

        setTimeout(() => {
            this.menuService.toggle();
        }, MENU_CLOSE_TIME);
    }



    ngOnInit(): void {}
}
