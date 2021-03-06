import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';

@Component({
    selector: 'app-radio-option',
    templateUrl: './radio-option.component.html',
    styleUrls: ['./radio-option.component.scss']
})
export class RadioOptionComponent implements OnInit {
    @ViewChild('inputField') inputField: ElementRef;

    @Input() id: string = "1";
    @Input() radioGroupName: string = 'radio-option';
    @Input() canAdd?: boolean = false;
    @Input() canEdit?: boolean = true;
    @Input() checked?: boolean = false;

    @Output() onDelete: EventEmitter<any> = new EventEmitter<any>();
    @Output() onCheck: EventEmitter<any> = new EventEmitter<any>();

    @Input() optionValue?: string = null;
    @Output() optionValueChange: EventEmitter<any> = new EventEmitter<any>();

    editedNow: boolean = false;
    cachedValue: string = null;

    constructor() {}

    ngOnInit(): void {}

    edit(): void {
        this.cachedValue = this.optionValue;
        this.editedNow = true;
        setTimeout(() => {
            this.inputField && this.inputField.nativeElement.focus();
        }, 0);
    }

    delete(): void {
        this.onDelete.emit();
    }

    save(): void {
        const inputValue = this.inputField.nativeElement.value;

        this.optionValueChange.emit(inputValue);
        this.editedNow = false;
    }

    cancel(): void {
        this.optionValue = this.cachedValue;
        this.inputField.nativeElement.value = this.cachedValue;
        this.optionValueChange.emit(this.optionValue);
        this.editedNow = false;
    }

    toggle(event: KeyboardEvent | MouseEvent): void {
        this.onCheck.emit(event);
    }

    keypressEdit(event: KeyboardEvent): void {
        if ((<KeyboardEvent>event).key === 'Enter') {
            this.edit();
        }
    }

    keypressDelete(event: KeyboardEvent): void {
        if ((<KeyboardEvent>event).key === 'Enter') {
            this.delete();
        }
    }

    keypressSave(event: KeyboardEvent): void {
        if ((<KeyboardEvent>event).key === 'Enter') {
            this.save();
        } else if ((<KeyboardEvent>event).key === 'Escape') {
            this.cancel();
        }
    }

    keypressCancel(event: KeyboardEvent): void {
        if ((<KeyboardEvent>event).key === 'Enter' || (<KeyboardEvent>event).key === 'Escape') {
            this.cancel();
        }
    }

}
