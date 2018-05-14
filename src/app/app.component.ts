import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, RouterEvent } from '@angular/router';
import { filter } from 'rxjs/operators';
import { AccountService } from './_shared/account/account.service';
import { debug, debuglog } from 'util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public hideHeaderMenu: boolean;
  public name: string = null;

  constructor(
      private router: Router
    , private accountService: AccountService
  ) {
    this.hideHeaderMenu = true;
  }

  ngOnInit() {
    this.router.events.forEach((event: RouterEvent) => {
      if (event instanceof NavigationStart) {
        this.hideHeaderMenu = !this.accountService.isAuthenticated();
        if (this.accountService.isAuthenticated()) {
          this.accountService.getUserLoggedIn().subscribe((user: User) => {
            this.name = user.name;
          }, ((error: any) => {

          }));
        }
      }
      // NavigationStart
      // NavigationEnd
      // NavigationCancel
      // NavigationError
      // RoutesRecognized
    });
  }

  signOut(): void {
    this.accountService.signOut().subscribe((response: any) => {
      this.router.navigate(['login']);
    }, ((error: any) => {

    }));
  }
}
