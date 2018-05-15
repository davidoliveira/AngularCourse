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

  }

}
