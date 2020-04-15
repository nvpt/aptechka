import {Component, OnInit} from '@angular/core';
import {BoxI} from '../../interfaces/box-interface';
import {Router} from '@angular/router';
import {Constants} from '../../constants';
import {BoxesService} from '../../services/boxes.service';

@Component({
    selector: 'app-dashboard-page',
    templateUrl: './dashboard-page.component.html',
    styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit {
    boxes: BoxI[] = this.boxesService.boxes;

    constructor(private router: Router, public boxesService: BoxesService) {
    }

    ngOnInit(): void {
    }

    deleteBox(box: BoxI):void{
        this.boxesService.deleteBox(box)
    }

    addBox() {
        this.router.navigate([Constants.PATH.newBox]);
    }
}
