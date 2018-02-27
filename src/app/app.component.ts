import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, RouterEvent } from '@angular/router';
import { filter } from 'rxjs/operators';
import { AccountService } from './_shared/account/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public currentDate: Date;
  public hideHeaderMenu: boolean;
  public name: string = null;

  constructor(
      private router: Router
    , private accountService: AccountService
  ) {
    this.currentDate = new Date();
    this.hideHeaderMenu = true;
  }

  ngOnInit() {
    this.router.events.forEach((event: RouterEvent) => {
      if (event instanceof NavigationStart) {
        this.hideHeaderMenu = !this.accountService.isAuthenticated();
        if (this.accountService.isAuthenticated()) {
          this.accountService.getUserLoggedIn().subscribe((user: any) => {
            this.name = user.name;
          });
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
    this.accountService.signOut();
    this.router.navigate(['login']);
  }
}
