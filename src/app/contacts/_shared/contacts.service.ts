import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

@Injectable()
export class ContactsService {

  constructor(private http: HttpClient) { }

  public countContacts(condominiumId: number): Observable<Number> {
    const filter = {
      where: {condominiumId: condominiumId}
    };
    return this.http.get<Number>(`${environment.apiUrl}/contacts/count?filter=${JSON.stringify(filter)}`).pipe(
      map((data: any) => data.count)
    );
  }

    public getAllContacts(condominiumId: number, pageId: number, pageSize: number): Observable<Contact[]> {
      const filter = {
        where: {condominiumId: condominiumId},
        skip: (pageId - 1) * pageSize,
        limit: pageSize
      };
      return this.http.get<Contact[]>(`${environment.apiUrl}/contacts/?filter=${JSON.stringify(filter)}`);
    }

}
