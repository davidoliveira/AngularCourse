import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { NgbModule, NgbDateAdapter } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SharedModule } from './_shared/shared.module';
import { AccountTokenInterceptor } from './_shared/account/account-token.interceptor';
import { NgbDateNativeAdapter } from './_shared/ui/NgbDateNativeAdapter';
import { MyErrorHandler } from './_shared/error-handler';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    SharedModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AccountTokenInterceptor,
      multi: true
    },
    {provide: NgbDateAdapter, useClass: NgbDateNativeAdapter}
    //,{provide: ErrorHandler, useClass: MyErrorHandler}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
