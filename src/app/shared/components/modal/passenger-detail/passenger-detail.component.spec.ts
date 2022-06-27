import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PassengerDetailComponent } from './passenger-detail.component';
import { MatDialog, MatDialogModule, MatDialogRef, MAT_DIALOG_DATA, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { DataService } from 'src/app/core/services/data.service';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { of } from 'rxjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { LoginService } from 'src/app/login/login.service';

describe('passengerDetailComponent', () => {
  let component: PassengerDetailComponent;
  let fixture: ComponentFixture<PassengerDetailComponent>;

  const mockDialogRef = jasmine.createSpyObj('MatDialogRef', [
    'close',
  ]);

  beforeEach(async() => {
    TestBed.configureTestingModule({
      declarations: [PassengerDetailComponent],
      imports: [
        MatDialogModule,
      ],
      providers: [
        { provide: MatDialogRef, useValue: { close: (dialogResult: any) => { }   } },
        {
          provide: DataService,
          useValue: {
            requestData: () => of(''),
          }
        },
        {
          provide: MAT_DIALOG_DATA,
          useValue: {
            passengerDetails: {
            },
          },
        },
      ],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
    });
    TestBed.overrideModule(BrowserDynamicTestingModule, {
      set: {
        entryComponents: [PassengerDetailComponent],
      }
    });
    TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PassengerDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
