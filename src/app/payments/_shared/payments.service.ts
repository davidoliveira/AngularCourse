import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../../environments/environment';
import { map } from 'rxjs/operators';

@Injectable()
export class PaymentsService {

  constructor(private http: HttpClient) { }

  public getPaymentById(id: number): Observable<Payment> {
    return this.http.get<any>(`${environment.apiUrl}/payments/${id}`);
  }

  public getAllPayments(condominiumId: number, pageId: number, pageSize: number): Observable<Payment[]> {
    const filter = {
      where: {condominiumId: condominiumId},
      skip: (pageId - 1) * pageSize,
      limit: pageSize
    };
    return this.http.get<Payment[]>(`${environment.apiUrl}/payments/?filter=${JSON.stringify(filter)}`);
  }

  public countPayments(condominiumId: number): Observable<Number> {
    const filter = {
      where: {condominiumId: condominiumId}
    };
    return this.http.get<Number>(`${environment.apiUrl}/payments/count?filter=${JSON.stringify(filter)}`).pipe(
      map((data: any) => data.count)
    );
  }
}
