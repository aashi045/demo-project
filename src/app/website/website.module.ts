import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebsiteRoutingModule } from './website-routing.module';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [LoginComponent, ForgetPasswordComponent, SignupComponent],
  imports: [
    CommonModule,
    WebsiteRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class WebsiteModule {}
