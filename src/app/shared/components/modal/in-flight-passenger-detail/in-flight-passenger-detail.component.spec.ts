import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InflightpassengerDetailComponent } from './in-flight-passenger-detail.component';
import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataService } from 'src/app/core/services/data.service';

describe('passengerDetailComponent', () => {
  let component: InflightpassengerDetailComponent;
  let fixture: ComponentFixture<InflightpassengerDetailComponent>;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      declarations: [InflightpassengerDetailComponent],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} },
        { provide: DataService, useValue: {} },
        {
          provide: MAT_DIALOG_DATA,
          useValue: {
            passengerDetails: {
              checkedIn: true
            },
            flightData: {
              ancillaryServiceList: ['assf', 'sdfs']
            }
          },
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InflightpassengerDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
