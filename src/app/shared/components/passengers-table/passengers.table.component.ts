import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { NewPassengerComponent } from '../modal/new-passenger/new-passenger.component';
import { PassengerDetailComponent } from '../modal/passenger-detail/passenger-detail.component';

@Component({
  selector: 'app-passengers-table',
  templateUrl: './passengers.table.component.html',
  styleUrls: ['./passengers.table.component.scss'],
})

export class PassengersTableComponent implements OnInit, OnChanges {
  @Input() tableData: any;
  @Input() adminUse: any;
  @Input() flightData: any;
  displayedColumns = [
    'firstName',
    'lastName',
    'passport',
    'birthdate',
    'address',
    'flightId',
    'seatNumber',
    'checkedIn',
    'infants',
    'wheelChair',
    'ancillaryServices',
    'editDetails'
  ];
  rowData: MatTableDataSource<any> = new MatTableDataSource();
  filterList: any[] = [];
  checkedInFilterList = [
    { key: 'checkedIn', value: 'Checked In' },
    { key: 'notCheckedIn', value: 'Not Checked In' },
    { key: 'infants', value: 'Infants' },
    { key: 'wheelChair', value: 'Wheel Chair' }
  ];
  adminFilterList = [
    { key: 'passport', value: 'Empty passport' },
    { key: 'address', value: 'Empty address' },
    { key: 'birthdate', value: 'Empty birth date' },
  ];
  defaultFilter: any;
  constructor(private dialog: MatDialog) { }

  ngOnInit() {
    this.rowData.filterPredicate = (data: any, filter: string) => {
      const filterKey = Object.keys(JSON.parse(filter))[0];
      return data[filterKey] === Object.values(JSON.parse(filter))[0];
    };
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['tableData'].currentValue) {
      this.tableData = changes['tableData'].currentValue;
      const tempArr: any[] = [];
      Object.entries(this.tableData).forEach((passengersData: any) => {
        let sendData: any = {};
      Object.keys(passengersData[1]).forEach((key) => {
      sendData[key] = passengersData[1][key];
    });
    sendData['pid'] = passengersData[0];
        tempArr.push(sendData);
      });
      this.rowData = new MatTableDataSource(tempArr);
      this.filterList = this.adminUse ? this.adminFilterList : this.checkedInFilterList;
    }
  }

  editpassengerDetails(rowData: any) {
    if (this.adminUse) {
      this.dialog.open(NewPassengerComponent, {
        data: { ['passengerDetails']: rowData, ['flightData']: this.flightData },
      });
    } else {
      this.dialog.open(PassengerDetailComponent, {
        data: { ['passengerDetails']: rowData, ['edit']: true },
      });
    }
  }

  filterData(event: any) {
    const filterValues: any = {};
    if (event.value === 'notCheckedIn') {
      // tslint:disable-next-line:no-string-literal
      filterValues['checkedIn'] = false;
    } else {
      filterValues[event.value] = this.adminUse ? '' : true;
    }
    this.rowData.filter = JSON.stringify(filterValues);
    console.log(filterValues);
  }

  clearFilter(event: any) {
    this.defaultFilter = '';
    this.rowData.filter = '';
    event.stopPropagation();
  }
}
