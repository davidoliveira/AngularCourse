import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { IUserLogin } from './user-login';
import { IUserToken } from './user-token';
import { environment } from '../../../environments/environment';

@Injectable()
export class AccountService {

  constructor(private http: HttpClient) { }

  public signIn(model: IUserLogin): Observable<IUserToken> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };

    return this.http.post<IUserToken>(environment.apiUrl + '/Users/login', model, httpOptions);
  }
}
