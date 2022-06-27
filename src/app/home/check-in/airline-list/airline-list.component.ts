import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DataService } from 'src/app/core/services/data.service';
import { StoresService } from 'src/app/core/store/stores.service';

@Component({
  selector: 'app-airline-list',
  templateUrl: './airline-list.component.html',
  styleUrls: ['./airline-list.component.scss']
})
export class AirlineListComponent implements OnInit {
  public flightListData: any[] = [];
  public passengerData: any[] = [];
  public panelOpenedIndex: any;
  currentToggleValue: any;
  seatList: any;
  constructor(
    private dataService: DataService,
    public dialog: MatDialog, private storesService: StoresService) { }

  ngOnInit() {
    this.storesService.getFromStore('airlineList').subscribe((data) => {
      this.flightListData = data;
    });
  }

  getFlightDetails(flight: any, index: any) {
    this.panelOpenedIndex = index;
    this.dataService.requestData('activePassengerData', '/passengers/' + flight.flightnumber);
    this.storesService.getFromStore('activePassengerData').subscribe((data) => {
      this.passengerData = data;
    });
  }

  toggleState(event: any) {
    this.currentToggleValue = !this.currentToggleValue;
  }

  displayToggleState(value: boolean) {
    return value ? 'Switch to view seat map layout' : 'Switch to view passengers list';
  }
}
