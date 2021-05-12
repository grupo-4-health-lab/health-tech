// Module
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

// Components
import { HeaderTitleComponent } from './main-components/header-title/header-title.component';
import { MainContentComponent } from './main-components/main-content/main-content.component';
import { SideMenuComponent } from './main-components/side-menu/side-menu.component';
import { SystemComponent } from './system.page';

// Child Components
import { DashboardComponent } from './components/dashboard/dashboard.component';

// Modules
import { IconModule } from '@coreui/icons-angular';

// Internal routes
const routes: Routes = [
    {
        path: 'system',
        component: SystemComponent,
        children: [
            {
                path: 'dashboard',
                component: DashboardComponent
            },
            {
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'full'
            }
        ]
    }
];
@NgModule({
    declarations: [
        HeaderTitleComponent,
        MainContentComponent,
        SideMenuComponent,
        SystemComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        IconModule
    ],
    exports: [
        RouterModule
    ]
})
export class SystemModule { }
