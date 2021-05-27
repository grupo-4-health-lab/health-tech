
// Modules
import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

// Module Components
import { AuthModule } from './modules/auth/auth.module';
import { SystemModule } from './modules/system/system.module';

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
        RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
