import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { StoresService } from '../store/stores.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private https: HttpClient, private storesService: StoresService) { }
  options = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  requestData(key: any, url: any) {
    this.https.get(environment.firebaseConfig.databaseURL + url + '.json').subscribe((data) => {
      this.storesService.setToStore({[key] : data});
    });
  }


  getUserRole(userData: any, loginMode: any): Observable<any> {
    const profile = {
      email: userData.email,
      firstname: userData.firstName,
      lastname: userData.lastName,
      role: loginMode
    };
    return this.https.post(
      `${environment.firebaseConfig.databaseURL}/users.json`,
      JSON.stringify(profile),
      this.options
    );
  }

  sendData(url: any, body: any) {
    return this.https.post(environment.firebaseConfig.databaseURL + url + '.json', body, this.options);
  }

  updateData(url: any, body: any) {
    return this.https.put(environment.firebaseConfig.databaseURL + url + '.json', body, this.options);
  }
}
