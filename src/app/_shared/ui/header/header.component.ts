import { Component, OnInit, Input } from '@angular/core';
import { Router, RouterEvent, NavigationStart } from '@angular/router';
import { AccountService } from '../../account/account.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public hideHeaderMenu = true;
  public name: string = null;

  constructor(
      private router: Router
    , private accountService: AccountService) { }

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
