import { Injectable, Injector } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { AccountService } from './account.service';
import 'rxjs/add/operator/catch';

@Injectable()
export class AccountTokenInterceptor implements HttpInterceptor {
    private accountService: AccountService = null;

    constructor(
        private injector: Injector
    ) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        if (this.accountService == null) {
            this.accountService = this.injector.get(AccountService) as AccountService;
        }

        if (this.accountService.isAuthenticated()) {
          request = request.clone({
            setHeaders: {
                Authorization: `${this.accountService.getUserToken().id}`
            }
          });
        }

        return next.handle(request).catch((res) => {
          if (res.status === 401 || res.status === 403) {
            const router = this.injector.get(Router) as Router;
            router.navigate(['login']);
          }
          return Observable.throw(res);
        });
    }
}
