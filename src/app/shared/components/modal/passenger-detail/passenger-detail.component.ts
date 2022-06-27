import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
// import { send } from 'process';
import { DataService } from 'src/app/core/services/data.service';

@Component({
  selector: 'app-passenger-detail',
  templateUrl: './passenger-detail.component.html',
  styleUrls: ['./passenger-detail.component.scss'],
})
export class PassengerDetailComponent {
  confirmButtonText: any;
  passengerDetails: any;
  servicesModified: any = {};
  seatList = [];
  parentGroup: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<PassengerDetailComponent>,
    private dataService: DataService
  ) {
    if (data.passengerDetails) {
      this.passengerDetails = data.passengerDetails;
    }
    if (this.passengerDetails.checkedIn) {
      this.confirmButtonText = 'Undo Checked-In';
    } else {
      this.confirmButtonText = 'Check-In';
    }
    if (data.edit) {
      this.parentGroup = new FormGroup({
        seatNumber: new FormControl(
          this.passengerDetails.seatNumber,
          Validators.pattern('[a-fA-F]{1}(20|[0-1][0-9]|[0-9])')
        ),
      });
      this.confirmButtonText = 'Submit';
    }
  }

  modifiedServices(key: any, value: any, isformcontrol?: any) {
    if (!isformcontrol) {
      if (value !== this.passengerDetails[key]) {
        this.servicesModified[key] = value;
      } else {
        delete this.servicesModified[key];
      }
    } else if (this.servicesModified[key]) {
      delete this.servicesModified[key];
    }
  }

  checkIsValid() {
    return this.data.edit && !Object.keys(this.servicesModified).length;
  }

  onConfirmClick(): void {
    let body: any;
    let url;
    if (this.data.edit) {
      body = {
        passport: this.passengerDetails.passport,
        flightId: this.passengerDetails.flightId,
        data: this.servicesModified,
      };
      // url = '/passengers/editedData';
      url = '/passengers/';
    } else {
      body = {
        passport: this.passengerDetails.passport,
        flightId: this.passengerDetails.flightId,
        checkedIn: !this.passengerDetails.checkedIn,
      };
      url = '/passengers/checkedIn';
    }
    let sendData: any = {};
    Object.keys(this.data.passengerDetails).forEach((key) => {
      sendData[key] = this.data.passengerDetails[key];
    });
    Object.keys(body.data).forEach((key) => {
      sendData[key] = body.data[key];
    });
    this.dataService.updateData(url + body.flightId + "/" +sendData['pid'], sendData).subscribe(() => {
      this.dataService.requestData(
        'activePassengerData',
        '/passengers/' + this.passengerDetails.flightId 
      );
    });
    this.dialogRef.close(true);
  }

  onCancel() {
    this.dialogRef.close();
  }
}
