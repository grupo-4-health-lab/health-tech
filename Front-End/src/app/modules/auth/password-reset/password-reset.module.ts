// Module
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

// Components
import { SendEmailComponent } from './send-email/send-email.component';
import { ApplyCodeComponent } from './apply-code/apply-code.component';

// Internal routes
const routes: Routes = [
    {
        path: ':code',
        component: ApplyCodeComponent
    },
    {
        path: '',
        component: SendEmailComponent
    }
];

@NgModule({
    declarations: [
        SendEmailComponent,
        ApplyCodeComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class PasswordResetModule { }
