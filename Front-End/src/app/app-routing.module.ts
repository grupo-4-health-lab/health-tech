// Modules
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { PasswordResetComponent } from './pages/password-reset/password-reset.page';
import { LoginComponent } from './pages/login/login.page';
import { NotFoundComponent } from './pages/not-found/not-found.page';
import { SystemComponent } from './pages/system/system.page';

const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path: 'password-reset',
        component: PasswordResetComponent,
    },
    {
        path: 'system',
        component: SystemComponent
    },
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: '**',
        component: NotFoundComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
