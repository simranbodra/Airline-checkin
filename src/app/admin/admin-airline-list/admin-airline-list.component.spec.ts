import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAirlineListComponent } from './admin-airline-list.component';
import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { of } from 'rxjs/internal/observable/of';
import { MatDialog } from '@angular/material/dialog';
import { DataService } from 'src/app/core/services/data.service';
import { StoresService } from 'src/app/core/store/stores.service';

export class MatDialogStub {
  result = true;
  setResult(val: boolean) {
    this.result = val;
  }
  open() {
    return { afterClosed: () => of(this.result) };
  }
  close() {
    return { afterClosed: () => of(this.result) };
  }
  afterClosed() {
    return of(true);
  }
}

describe('DetailsSectionComponent', () => {
  let component: AdminAirlineListComponent;
  let fixture: ComponentFixture<AdminAirlineListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AdminAirlineListComponent],
      providers: [
        { provide: MatDialog, useClass: MatDialogStub },
        {
          provide: DataService,
          useValue: {
            requestData: () => of('')
          }
        },
        {
          provide: StoresService,
          useValue: {
            getFromStore: () => of(''),
          }
        }
      ],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAirlineListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
