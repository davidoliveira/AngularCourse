import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AccountAuthGuard } from './_shared/account/account-auth.guard';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'account',
    loadChildren: 'app/account/account.module#AccountModule'
  },
  {
    path: 'contacts',
    loadChildren: 'app/contacts/contacts.module#ContactsModule',
    canActivate: [AccountAuthGuard],
    data: {
      expectedRole: 'admin'
    }
  },
  {
    path: 'payments',
    loadChildren: 'app/payments/payments.module#PaymentsModule',
    canActivate: [AccountAuthGuard],
    data: {
      expectedRole: 'admin'
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AccountAuthGuard]
})
export class AppRoutingModule { }
