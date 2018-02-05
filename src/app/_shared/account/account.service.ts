import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../../environments/environment';

import { IUserLogin } from './user-login';
import { IUserToken } from './user-token';
import { IUserCreate } from './user-create';
import { IUserCreated } from './user-created';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable()
export class AccountService {

  constructor(private http: HttpClient) { }

  public signIn(model: IUserLogin): Observable<IUserToken> {
    return this.http.post<IUserToken>(environment.apiUrl + '/Users/login', model, httpOptions);
  }

  public create(model: IUserCreate): Observable<IUserCreated> {
    return this.http.post<IUserCreated>(environment.apiUrl + '/Users', model, httpOptions);
  }
}
