import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';

@Component({
    selector: 'app-editable-option',
    templateUrl: './editable-option.component.html',
    styleUrls: ['./editable-option.component.scss']
})
export class EditableOptionComponent implements OnInit {
    @ViewChild('inputField') inputField: ElementRef;
    @Input() canAdd?: boolean = false;
    @Input() canEdit?: boolean = true;
    @Input() optionValue?: string = null;
    @Output() optionValueChange: EventEmitter<any> = new EventEmitter<any>();
    @Output() onDelete: EventEmitter<any> = new EventEmitter<any>();
    @Output() onCheck: EventEmitter<any> = new EventEmitter<any>();

    editedNow: boolean = false;
    cachedValue: string = null;

    constructor() {
    }

    ngOnInit(): void {
    }

    edit(event: KeyboardEvent | MouseEvent) {
        if (event.type === 'keydown' && (<KeyboardEvent>event).key === 'Enter' ||
            event.type === 'click') {
            this.cachedValue = this.optionValue;
            this.editedNow = true;
            setTimeout(() => {
                this.inputField && this.inputField.nativeElement.focus();
            }, 0);
        }
    }

    delete(event: KeyboardEvent | MouseEvent) {
        if (event.type === 'keydown' && (<KeyboardEvent>event).key === 'Enter' ||
            event.type === 'click') {
            this.onDelete.emit();
        }
    }

    check(event: KeyboardEvent | MouseEvent) {

        this.onCheck.emit(event);
    }

    cancel(event: KeyboardEvent | MouseEvent) {
        if (event.type === 'keydown' &&
            (
                ((<KeyboardEvent>event).key === 'Enter') ||
                ((<KeyboardEvent>event).key === 'Escape')
            ) ||
            event.type === 'click') {
            this.optionValue = this.cachedValue;
            this.inputField.nativeElement.value = this.cachedValue;
            this.optionValueChange.emit(this.optionValue);
            this.editedNow = false;
        }
    }

    save(event: KeyboardEvent | MouseEvent) {
        if (event.type === 'keydown' && (<KeyboardEvent>event).key === 'Enter' ||
            event.type === 'click') {
            const inputValue = this.inputField.nativeElement.value;

            this.optionValueChange.emit(inputValue);
            this.editedNow = false;
        }
    }
}
