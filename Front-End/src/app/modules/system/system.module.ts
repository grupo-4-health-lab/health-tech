// Module
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgApexchartsModule } from 'ng-apexcharts';

// Components
import { HeaderTitleComponent } from './components/header-title/header-title.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { SystemComponent } from './system.page';

// Child Components
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ChartBoxComponent } from './pages/dashboard/chart-box/chart-box.component';

// Modules
import { IconModule } from '@coreui/icons-angular';
import { CollaboratorsModule } from './pages/collaborators/collaborators.module';

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
                path: 'collaborators',
                loadChildren: () => import('./pages/collaborators/collaborators.module').then(c => c.CollaboratorsModule)
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
        DashboardComponent,
        ChartBoxComponent,
        SystemComponent
    ],
    imports: [
        CommonModule,
        NgApexchartsModule,
        CollaboratorsModule,
        RouterModule.forChild(routes),
        IconModule
    ],
    exports: [
        RouterModule,
        CollaboratorsModule
    ]
})
export class SystemModule { }
