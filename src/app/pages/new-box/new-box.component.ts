import {Component, OnDestroy, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {MenuService} from '../../modules/menu/menu-services/menu.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'app-new-box',
    templateUrl: './new-box.component.html',
    styleUrls: ['./new-box.component.scss']
})
export class NewBoxComponent implements OnInit, OnDestroy {
    form: FormGroup;
    imgUrl: string;

    constructor(private location: Location, private menuService: MenuService) {
    }

    ngOnInit(): void {
        this.initForm();
        this.menuService.hide();
    }

    initForm() {
        this.form = new FormGroup({
            title: new FormControl('', [Validators.required]),
            place: new FormControl('', [Validators.required]),
            description: new FormControl(''),
            img: new FormControl(null),
            groups: new FormControl(['']),
            medicaments: new FormControl(['']),
        });
    }

    ngOnDestroy() {
        this.menuService.show();
    }

    cancelAdding() {
        this.location.back();
    }

    showPreview(event: Event) {
        const img = (<HTMLInputElement>(event.target)).files[0];
        
        const reader = new FileReader();

        reader.onload = () => {
            this.imgUrl = reader.result as string;
        };

        img && reader.readAsDataURL(img);

        this.form.patchValue({img});
        this.form.controls.img.updateValueAndValidity();

        console.log('56 >>> this.form.value: ', this.form.value);
        
    }

    clearPreview() {
        this.form.controls.img.reset();
        this.imgUrl = null;
        this.form.controls.img.updateValueAndValidity();
    }

    saveBox() {
        console.log('68 >>> this.form: ', this.form);
    }
}
