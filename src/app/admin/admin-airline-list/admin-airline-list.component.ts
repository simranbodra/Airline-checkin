import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DataService } from 'src/app/core/services/data.service';
import { StoresService } from 'src/app/core/store/stores.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-admin-airline-list',
  templateUrl: './admin-airline-list.component.html',
  styleUrls: ['./admin-airline-list.component.scss']
})
export class AdminAirlineListComponent implements OnInit {
  public flightListData: any[] = [];
  public passengerData: any[] = [];
  public panelOpenedIndex: any;
  selectedFlightId = '';
  parentGroup = new FormGroup({});

  seatList: any;
  constructor(
    private dataService: DataService,
    private storesService: StoresService,
    public dialog: MatDialog) {

  }

  ngOnInit() {
    this.retriveFlightList();
    this.storesService.getFromStore('airlineList').subscribe((data: any[]) => {
      this.flightListData = data;
    });
  }

  retriveFlightList() {
    this.dataService.requestData('airlineList', '/apis');
  }

  getFlightDetails(flight: any, index: any) {
    this.selectedFlightId = flight.flightnumber;
    this.panelOpenedIndex = index;
    this.dataService.requestData('activePassengerData', '/passengers/' + flight.flightnumber);
    this.storesService.getFromStore('activePassengerData').subscribe((data) => {
      this.passengerData = data;
    });
  }

  saveServiceAndShopData() {
    if (this.parentGroup.dirty) {
      const url = environment.firebaseConfig.databaseURL + '/airlinelist/editedData';
      const body = {
        flightId: this.selectedFlightId,
        data: this.parentGroup.value
      };
      this.dataService.sendData(url, body);
    }
    this.parentGroup.reset();
  }

}
