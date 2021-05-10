// Module
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

// Components
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthComponent } from './auth.page';

// Internal routes
const routes: Routes = [
    {
        path: 'auth',
        component: AuthComponent,
        children: [
            {
                path: 'login',
                component: LoginComponent
            },
            {
                path: 'not-found',
                component: NotFoundComponent
            },
            {
                path: 'password-reset',
                loadChildren: () => import('./password-reset/password-reset.module').then(c => c.PasswordResetModule)
            }
        ]
    }
];

@NgModule({
    declarations: [
        LoginComponent,
        NotFoundComponent,
        AuthComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AuthModule { }
