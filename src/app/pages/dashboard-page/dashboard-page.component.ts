import {Component, OnInit} from '@angular/core';
import {boxesMock} from './boxes-mock';
import {BoxI} from '../../interfaces/box-interface';

@Component({
    selector: 'app-dashboard-page',
    templateUrl: './dashboard-page.component.html',
    styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit {
    boxes: BoxI[] = boxesMock;

    constructor() {
    }

    ngOnInit(): void {
    }

}
