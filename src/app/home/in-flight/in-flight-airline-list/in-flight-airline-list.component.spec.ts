import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InFlightAirlineListComponent } from './in-flight-airline-list.component';
import { MatDialog } from '@angular/material/dialog';
import { StoresService } from 'src/app/core/store/stores.service';
import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DataService } from 'src/app/core/services/data.service';
import { of } from 'rxjs';

describe('DetailsSectionComponent', () => {
  let component: InFlightAirlineListComponent;
  let fixture: ComponentFixture<InFlightAirlineListComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [InFlightAirlineListComponent],
      providers: [
        { provide: DataService, useValue: {} },
        {
          provide: StoresService,
          useValue: {
            getFromStore: () => of(''),
          }
        },
        { provide: MatDialog, useValue: {} },
      ],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InFlightAirlineListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
