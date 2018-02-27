import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../../environments/environment';
import { map } from 'rxjs/operators';

import { IUserLogin } from './models/user-login';
import { IUserToken } from './models/user-token';
import { IUserCreate } from './models/user-create';
import { IUserCreated } from './models/user-created';

@Injectable()
export class AccountService {
  private TOKEN_KEY = 'TOKEN';

  constructor(private http: HttpClient) { }

  public signIn(model: IUserLogin): Observable<IUserToken> {
    return this.http.post<IUserToken>(`${environment.apiUrl}/users/login`, model).pipe(
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
    return !this.isTokenExpired(token);
  }

  public create(model: IUserCreate): Observable<IUserCreated> {
    return this.http.post<IUserCreated>(`${environment.apiUrl}/users`, model);
  }

  private isTokenExpired(token: IUserToken): boolean {
    if (token != null) {
      const expiresAt = new Date(token.created).getTime() + (token.ttl * 1000);
      return expiresAt < new Date().getTime();
    }
    return true;
  }

  getUserById(id: number): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/users/${id}`);
  }

  getUserLoggedIn(): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/users/${this.getUserToken().userId}`);
  }
}
