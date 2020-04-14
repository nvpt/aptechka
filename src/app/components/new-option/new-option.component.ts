import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';

@Component({
    selector: 'app-new-option',
    templateUrl: './new-option.component.html',
    styleUrls: ['./new-option.component.scss']
})
export class NewOptionComponent implements OnInit {
    @ViewChild('inputField') inputField: ElementRef;
    @Output() onAdd?: EventEmitter<string> = new EventEmitter<string>();

    edited: boolean = false;

    constructor() {
    }

    ngOnInit(): void {
    }

    startCreation(event: KeyboardEvent | MouseEvent) {
        if (event.type === 'keydown' && (<KeyboardEvent>event).key === 'Enter' ||
            event.type === 'click') {
            this.edited = true;
            setTimeout(() => {
                this.inputField && this.inputField.nativeElement.focus();
            }, 0);
        }

    }

    cancelCreation(event: KeyboardEvent | MouseEvent) {
        if (event.type === 'keydown' &&
            (
                ((<KeyboardEvent>event).key === 'Enter') ||
                ((<KeyboardEvent>event).key === 'Escape')
            ) ||
            event.type === 'click') {

            this.edited = false;
        }
    }

    finishCreation(event: KeyboardEvent | MouseEvent) {
        if (event.type === 'keydown' && (<KeyboardEvent>event).key === 'Enter' ||
            event.type === 'click') {

            const inputValue = this.inputField.nativeElement.value;
            this.onAdd.emit(inputValue);
            this.edited = false;
        }
    }

}
