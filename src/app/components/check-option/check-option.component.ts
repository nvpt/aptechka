import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';

@Component({
    selector: 'app-check-option',
    templateUrl: './check-option.component.html',
    styleUrls: ['./check-option.component.scss']
})
export class CheckOptionComponent implements OnInit {
    @ViewChild('inputField') inputField: ElementRef;

    @Input() canAdd?: boolean = false;
    @Input() canEdit?: boolean = true;

    @Input() checked?: boolean = false;

    @Output() onDelete: EventEmitter<any> = new EventEmitter<any>();
    @Output() onCheck: EventEmitter<any> = new EventEmitter<any>();

    // @Input() checked?: boolean = false;
    // @Output() checkedChange?: EventEmitter<any> = new EventEmitter<any>();
    @Input() optionValue?: string = null;
    @Output() optionValueChange: EventEmitter<any> = new EventEmitter<any>();

    editedNow: boolean = false;
    cachedValue: string = null;

    constructor() {}

    ngOnInit(): void {}

    edit() {
        this.cachedValue = this.optionValue;
        this.editedNow = true;
        setTimeout(() => {
            this.inputField && this.inputField.nativeElement.focus();
        }, 0);
    }

    delete() {
        this.onDelete.emit();
    }

    save() {
        const inputValue = this.inputField.nativeElement.value;

        this.optionValueChange.emit(inputValue);
        this.editedNow = false;
    }

    cancel() {
        this.optionValue = this.cachedValue;
        this.inputField.nativeElement.value = this.cachedValue;
        this.optionValueChange.emit(this.optionValue);
        this.editedNow = false;
    }

    toggle(event: KeyboardEvent | MouseEvent) {
        this.onCheck.emit(event);
    }

    keypressEdit(event: KeyboardEvent) {
        if ((<KeyboardEvent>event).key === 'Enter') {
            this.edit();
        }
    }

    keypressDelete(event: KeyboardEvent) {
        if ((<KeyboardEvent>event).key === 'Enter') {
            this.delete();
        }
    }

    keypressSave(event: KeyboardEvent) {
        if ((<KeyboardEvent>event).key === 'Enter') {
            this.save();
        } else if ((<KeyboardEvent>event).key === 'Escape') {
            this.cancel();
        }
    }

    keypressCancel(event: KeyboardEvent) {
        if ((<KeyboardEvent>event).key === 'Enter' || (<KeyboardEvent>event).key === 'Escape') {
            this.cancel();
        }
    }
}
