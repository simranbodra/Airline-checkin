import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { CheckInComponent } from './check-in/check-in.component';
import { InFlightComponent } from './in-flight/in-flight.component';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';
import { InFlightAirlineListComponent } from './in-flight/in-flight-airline-list/in-flight-airline-list.component';
import { AirlineListComponent } from './check-in/airline-list/airline-list.component';



@NgModule({
  declarations: [
    HomeComponent,
    CheckInComponent,
    InFlightComponent,
    InFlightAirlineListComponent,
    AirlineListComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
