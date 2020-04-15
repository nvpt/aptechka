import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';

@Component({
    selector: 'app-new-option',
    templateUrl: './new-option.component.html',
    styleUrls: ['./new-option.component.scss']
})
export class NewOptionComponent implements OnInit {
    @ViewChild('inputField') inputField: ElementRef;
    @Input() errorMessages?: string[] = [];
    @Output() onAdd?: EventEmitter<string> = new EventEmitter<string>();

    edited: boolean = false;
    optionValue: string = null;

    constructor() {
    }

    ngOnInit(): void {
    }

    startCreation() {
        console.log('start creation');
        console.log('event');
        this.errorMessages = [];
        this.edited = true;
        setTimeout(() => {
            this.inputField && this.inputField.nativeElement.focus();
        }, 0);

    }

    cancelCreation() {
        this.edited = false;
    }

    finishCreation() {
        if (this.errorMessages.length) {
            return;
        }
        const inputValue = this.optionValue;

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
