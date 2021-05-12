
// Modules
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Module Components
import { AuthModule } from '../app/pages/auth/auth.module';
import { SystemModule } from './pages/system/system.module';

const routes: Routes = [
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
        SystemModule,
        RouterModule.forRoot(routes),
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
