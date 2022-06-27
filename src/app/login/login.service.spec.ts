import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { SocialAuthService } from 'angularx-social-login';
import { DataService } from '../core/services/data.service';
import { StoresService } from '../core/store/stores.service';

import { LoginService } from './login.service';

describe('LoginService', () => {
  let service: LoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        LoginService,
        {
          provide: Router,
          useValue: {
            navigateByUrl: () => '',
          },
        },
        { provide: DataService, useValue: {} },
        { provide: SocialAuthService, useValue: {} }
      ]
    });
    service = TestBed.inject(LoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

// describe('LoginService', () => {
//   let service: LoginService;
//   beforeEach(() =>
//     TestBed.configureTestingModule({
//       providers: [
//         // {
//         //   provide: AngularFireAuth,
//         //   useValue: { auth: { signInWithPopup: of() } },
//         // },
//         // {
//         //   provide: CookieService,
//         //   useValue: {
//         //     get: () => '',
//         //     deleteAll: () => '',
//         //   },
//         // },
//         { provide: DataService, useValue: {} },
//         {
//           provide: Router,
//           useValue: {
//             navigateByUrl: () => '',
//           },
//         },
//       ],
//     })
//   );

//   beforeEach(() => {
//     service = TestBed.get(LoginService);
//   });

//   it('should be created', () => {
//     expect(service).toBeTruthy();
//   });

//   it('should get the role', () => {
//     const spyonCookieService = spyOn(
//       TestBed.get(StoresService),
//       'get'
//     ).and.returnValue('user');
//     const retValue = service.getRole;
//     expect(spyonCookieService).toHaveBeenCalledWith('role');
//     expect(retValue).toEqual('user');
//   });

//   it('should get the name', () => {
//     const spyonCookieService = spyOn(
//       TestBed.get(StoresService),
//       'get'
//     ).and.returnValue('name');
//     const retValue = service.getName;
//     expect(spyonCookieService).toHaveBeenCalledWith('name');
//     expect(retValue).toEqual('name');
//   });

//   it('should clear cookie', () => {
//     const spyonCookieService = spyOn(TestBed.get(StoresService), 'deleteAll');
//     service.clearCookie();
//     expect(spyonCookieService).toHaveBeenCalled();
//   });
// });
