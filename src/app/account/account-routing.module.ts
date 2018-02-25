import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { AccountAuthGuard } from '../_shared/account/account-auth.guard';

const routes: Routes = [
  {
    path: 'create',  component: CreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [AccountAuthGuard]
})
export class AccountRoutingModule { }
