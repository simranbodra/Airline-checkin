import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPassengerComponent } from './new-passenger.component';
import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataService } from 'src/app/core/services/data.service';

describe('passengerDetailComponent', () => {
  let component: NewPassengerComponent;
  let fixture: ComponentFixture<NewPassengerComponent>;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      declarations: [NewPassengerComponent],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        { provide: MatDialogRef, useValue: {} },
        { provide: DataService, useValue: {} },
        {
          provide: MAT_DIALOG_DATA,
          useValue: {
            passengerDetails: {
              checkedIn: true,
              birthdate: Date.now(),
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
    fixture = TestBed.createComponent(NewPassengerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
