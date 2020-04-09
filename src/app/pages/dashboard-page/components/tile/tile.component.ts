import {Input, Component, OnInit} from '@angular/core';
import {BoxI} from '../../../../interfaces/box-interface';

@Component({
    selector: 'app-tile',
    templateUrl: './tile.component.html',
    styleUrls: ['./tile.component.scss']
})
export class TileComponent implements OnInit {
    @Input() box?: BoxI;

    constructor() {
    }

    ngOnInit(): void {
    }

}
