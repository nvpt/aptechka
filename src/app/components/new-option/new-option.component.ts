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

    startCreation() {
        console.log('start creation');
        console.log('event');

        this.edited = true;
        setTimeout(() => {
            this.inputField && this.inputField.nativeElement.focus();
        }, 0);

    }

    cancelCreation() {
        this.edited = false;
    }

    finishCreation() {
        const inputValue = this.inputField.nativeElement.value;

        this.onAdd.emit(inputValue);
        this.edited = false;
    }

    keypressStartCreation(event: KeyboardEvent) {
        if ((<KeyboardEvent>event).key === 'Enter') {
            this.startCreation();
        }
    }

    keypressFinishCreation(event: KeyboardEvent) {
        if ((<KeyboardEvent>event).key === 'Enter') {
            this.finishCreation();
        } else if ((<KeyboardEvent>event).key === 'Escape') {
            this.cancelCreation();
        }
    }

    keypressCancelCreation(event: KeyboardEvent) {
        if ((<KeyboardEvent>event).key === 'Enter' || (<KeyboardEvent>event).key === 'Escape') {
            this.cancelCreation();
        }
    }

}
