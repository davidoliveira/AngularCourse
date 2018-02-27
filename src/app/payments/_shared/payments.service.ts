import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../../environments/environment';

@Injectable()
export class PaymentsService {

  constructor(private http: HttpClient) { }

  public getPaymentById(id: number): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/payments/${id}`);
  }
}
