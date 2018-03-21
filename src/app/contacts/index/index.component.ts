import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../_shared/contacts.service';
import { AccountService } from '../../_shared/account/account.service';

@Component({
  selector: 'app-contacts-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  public contacts: Contact[];
  public contactsCount: number;

  constructor(
    private contactsService: ContactsService
  , private accountService: AccountService
) { }

ngOnInit() {
  this.accountService.getUserLoggedIn().subscribe((user: User) => {
    this.getAllContacts(user.condominiumId);

    this.contactsService.countContacts(user.condominiumId).subscribe((total: number) => {
      this.contactsCount = total;
    });
  });
}

getAllContacts(condominiumId: number): void {
  this.contactsService.getAllContacts(condominiumId, 1, 10).subscribe((contacts: Contact[]) => {
    this.contacts = contacts;
  });
}

}
