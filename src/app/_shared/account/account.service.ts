import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../../environments/environment';
import { map } from 'rxjs/operators';

import { IUserLogin } from './user-login';
import { IUserToken } from './user-token';
import { IUserCreate } from './user-create';
import { IUserCreated } from './user-created';

@Injectable()
export class AccountService {
  private TOKEN_KEY = 'TOKEN';

  constructor(private http: HttpClient) { }

  public signIn(model: IUserLogin): Observable<IUserToken> {
    return this.http.post<IUserToken>(environment.apiUrl + '/Users/Login', model).pipe(
      map((data: IUserToken) => {
        localStorage.setItem(this.TOKEN_KEY, JSON.stringify(data));
        return data;
      })
    );
  }

  public signOut(): void {
    localStorage.removeItem(this.TOKEN_KEY);

  }

  public getUserToken(): IUserToken {
    const token = localStorage.getItem(this.TOKEN_KEY);
    if (!token) {
      return null;
    }
    return JSON.parse(token) as IUserToken;
  }

  public isAuthenticated(): boolean {

    const token = this.getUserToken();

    // Check whether the token is expired and return
    // true or false
    //return !this.jwtHelper.isTokenExpired(token);
    return token != null;
  }

  public create(model: IUserCreate): Observable<IUserCreated> {
    return this.http.post<IUserCreated>(environment.apiUrl + '/Users', model);
  }

  // getUserLoggedIn(): Observable<IUserCreated> {
  //   //return this.http.post<IUserCreated>(environment.apiUrl + '/Users', model);
  // }
}
