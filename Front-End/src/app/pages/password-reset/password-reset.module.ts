// Module
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

// Components
import { SendEmailComponent } from './send-email/send-email.component';
import { ApplyCodeComponent } from './apply-code/apply-code.component';
import { PasswordResetComponent } from './password-reset.page';


@NgModule({
  declarations: [
    SendEmailComponent,
    ApplyCodeComponent,
    PasswordResetComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class PasswordResetModule { }
