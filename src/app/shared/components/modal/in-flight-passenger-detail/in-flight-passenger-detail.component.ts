import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DataService } from 'src/app/core/services/data.service';

@Component({
  selector: 'app-in-flight-passenger-detail',
  templateUrl: './in-flight-passenger-detail.component.html',
  styleUrls: ['./in-flight-passenger-detail.component.scss'],
})
export class InflightpassengerDetailComponent {
  confirmButtonText;
  passengerDetails;
  servicesModified = {};
  seatList = [];
  parentGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<InflightpassengerDetailComponent>,
    private dataService: DataService
  ) {
    if (data.passengerDetails) {
      this.passengerDetails = data.passengerDetails;
    }
    this.parentGroup = new FormGroup({
      specialMeal: new FormControl(this.passengerDetails.specialMeal),
      serviceList: new FormControl(this.passengerDetails.serviceList),
      shopItems: new FormControl(this.passengerDetails.shopItems)
    });

    this.confirmButtonText = 'Submit';
  }

  checkIsValid() {
    return this.data.edit && !Object.keys(this.servicesModified).length;
  }

  onConfirmClick(): void {
    const body = {
      passport: this.passengerDetails.passport,
      flightId: this.passengerDetails.flightId,
      data: this.parentGroup.value,
    };
    const url = '/passengers/editedData';
    this.dataService
      .sendData(url, body)
      .subscribe(() => {
        this.dataService.requestData(
          'activePassengerData',
          '/passengers/' +
          this.passengerDetails.flightId
        );
      });
    this.dialogRef.close(true);
  }

  onCancel() {
    this.dialogRef.close();
  }
}
