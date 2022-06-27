import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/core/services/data.service';

@Component({
  selector: 'app-check-in',
  templateUrl: './check-in.component.html',
  styleUrls: ['./check-in.component.scss']
})
export class CheckInComponent implements OnInit {
  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.retriveFlightList();
  }

  retriveFlightList() {
   this.dataService.requestData('airlineList', '/apis');
  }

}
