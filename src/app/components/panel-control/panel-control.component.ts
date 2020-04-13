import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
    selector: 'app-panel-control',
    templateUrl: './panel-control.component.html',
    styleUrls: ['./panel-control.component.scss']
})
export class PanelControlComponent implements OnInit {

    @ViewChild('leftPart', {static: true}) leftPart: ElementRef;
    @ViewChild('centerPart', {static: true}) centerPart: ElementRef;
    @ViewChild('rightPart', {static: true}) rightPart: ElementRef;

    constructor() {
    }

    ngOnInit(): void {
        this.checkChildren(this.leftPart);
        this.checkChildren(this.centerPart);
        this.checkChildren(this.rightPart);
    }

    checkChildren(element: ElementRef): void {
        if (element.nativeElement.childNodes.length < 2) {
            element.nativeElement.classList.add('hide');
        }
    }
}
