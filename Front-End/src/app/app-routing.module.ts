// Modules
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { SystemComponent } from './pages/system/system.page';

import { AuthModule } from '../app/pages/auth/auth.module';

const routes: Routes = [
    {
        path: 'system',
        component: SystemComponent
    },
    {
        path: '',
        redirectTo: 'auth/login',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: 'auth/not-found',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [
        AuthModule,
        RouterModule.forRoot(routes),
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
