import {Component, OnInit} from '@angular/core';
import {boxesMock} from './boxes-mock';
import {BoxI} from '../../interfaces/box-interface';
import {Router} from '@angular/router';
import {Constants} from '../../constants';

@Component({
    selector: 'app-dashboard-page',
    templateUrl: './dashboard-page.component.html',
    styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit {
    boxes: BoxI[] = boxesMock;

    constructor(private router: Router) {
    }

    ngOnInit(): void {
    }

    addBox() {
        this.router.navigate([Constants.PATH.newBox]);
    }
}
