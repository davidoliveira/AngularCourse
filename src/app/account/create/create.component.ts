import { Component, OnInit } from '@angular/core';
import { UserCreate } from '../../_shared/account/user-create';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  public model = new UserCreate('das', 'das');

  constructor() { }

  ngOnInit() {
  }

}
