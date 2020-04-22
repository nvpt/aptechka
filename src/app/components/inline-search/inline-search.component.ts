import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Subject} from 'rxjs';

@Component({
    selector: 'app-inline-search',
    templateUrl: './inline-search.component.html',
    styleUrls: ['./inline-search.component.scss']
})
export class InlineSearchComponent implements OnInit {
    @ViewChild('inputField') inputField: ElementRef;
    @Input() search: string;
    @Output() searchChange: EventEmitter<string> = new EventEmitter<string>();

    search$: Subject<any> = new Subject<any>()

    constructor() {
    }

    ngOnInit(): void {

    }

    clear() {
        this.searchChange.emit('');
    }

    focus() {
        this.inputField.nativeElement.focus();
    }
}
