import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormControlName } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';

/**
 * @title Chips with input
 */
@Component({
    selector: 'app-chip-list',
    templateUrl: 'chip-list.component.html',
    styleUrls: ['chip-list.component.scss'],
})
export class ChipListComponent implements OnInit {
    @Input() listProvided: any;
    @Input() placeHolder: any;
    @Input() controlName: any;
    @Input() parentForm: any;
    @Input() currentValues: any;
    @Input() disableAutoComple: any;
    chipListArr: any[] = [];
    visible = true;
    selectable = true;
    removable = true;
    addOnBlur = true;
    readonly separatorKeysCodes: number[] = [ENTER, COMMA];
    constructor() { }

    ngOnInit() {
        this.chipListArr = Object.assign([], this.currentValues);
        this.parentForm.addControl(this.controlName, new FormControl(this.currentValues));
    }

    add(event: MatChipInputEvent): void {
        const input = event.chipInput;
        const value = event.value;
        if ((value || '').trim() && !this.chipListArr.includes(value)) {
            this.chipListArr.push(value);
            this.parentForm.get(this.controlName).setValue(this.chipListArr);
            this.parentForm.get(this.controlName).markAsDirty();
        }
        if (input) {
            input.placeholder = '';
        }
    }

    remove(item: any): void {
        const index = this.chipListArr.indexOf(item);
        if (index >= 0) {
            this.chipListArr.splice(index, 1);
            this.parentForm.get(this.controlName).setValue(this.chipListArr);
            this.parentForm.get(this.controlName).markAsDirty();
        }
    }

    selected(event: MatAutocompleteSelectedEvent): void {
        if ((event.option.viewValue || '').trim() && !this.chipListArr.includes(event.option.viewValue)) {
            this.chipListArr.push(event.option.viewValue);
            this.parentForm.get(this.controlName).setValue(this.chipListArr);
            this.parentForm.get(this.controlName).markAsDirty();
        }
    }
}