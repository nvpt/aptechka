import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
    selector: 'app-new-option',
    templateUrl: './new-option.component.html',
    styleUrls: ['./new-option.component.scss']
})
export class NewOptionComponent implements OnInit {
    @ViewChild('inputField') inputField: ElementRef;
    @Input() optionLabel?: string = 'option'
    @Output() onAdd?: EventEmitter<string> = new EventEmitter<string>();

    opened: boolean = false;

    constructor() {
    }

    ngOnInit(): void {
    }

    startCreation(event: KeyboardEvent | MouseEvent) {
        if (event.type === 'keydown' && (<KeyboardEvent>event).key === 'Enter' ||
            event.type === 'click') {
            this.opened = true;
            setTimeout(() => {
                this.inputField && this.inputField.nativeElement.focus();
            }, 0)
        }

    }

    cancelCreation(event: KeyboardEvent | MouseEvent) {
        if (event.type === 'keydown' && (<KeyboardEvent>event).key === 'Enter' ||
            event.type === 'click') {

            this.opened = false;
        }
    }

    finishCreation(event: KeyboardEvent | MouseEvent) {
        if (event.type === 'keydown' && (<KeyboardEvent>event).key === 'Enter' ||
            event.type === 'click') {

            const inputValue = this.inputField.nativeElement.value
            this.onAdd.emit(inputValue);
            this.opened = false;
        }
    }

}
