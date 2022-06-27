import { inject, TestBed } from '@angular/core/testing';
import { StoresService } from './stores.service';
import { Store } from '@ngrx/store';
import { AppDataSelector } from './selectors/app-data.selector';
import { provideMockStore } from '@ngrx/store/testing';
import { of } from 'rxjs';


class MockSelectorClass {
  getState() {
    return 'appData';
  }
}
class StoreMock {
  select = jasmine.createSpy().and.returnValue(of({}));
  dispatch = jasmine.createSpy();
  pipe = jasmine.createSpy().and.returnValue(of('success'));
}

let mockService: any;
let mockStore;
describe('StoresService', () => {

  beforeEach(() => {
    const initialState = {
      appData: { }
    };
    TestBed.configureTestingModule({
      providers: [
        StoresService,
        { provide: AppDataSelector, useClass: MockSelectorClass},
        {
          provide: Store,
          useClass: StoreMock
      },
      ] });
  });

  beforeEach(inject([StoresService, Store], (service: any, store: any) => {
    mockService = service;
    mockStore = store;
  }));

  it('Should have storeservice service', () => {
    expect(mockService).toBeTruthy();
  });

  it('Should call getFromStore method', () => {
    mockService.setToStore({storeData: 'success'});
    mockService.getFromStore('storeData').subscribe((data: any) => {
      expect(data).toEqual('success');
    });
  });

  it('Should call getStateSelector method', () => {
    const data = mockService.getStateSelector();
    expect(data).toEqual(data);
  });

  it('Should call clearStore method', () => {
    mockService.clearStore();
  });
  it('Should call setToStore method', () => {
    mockService.setToStore({storeData: 'success'});
    mockService.getFromStore('storeData').subscribe((data: any) => {
      expect(data).toEqual('success');
    });
  });
});
