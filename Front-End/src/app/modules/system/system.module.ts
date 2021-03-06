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
                path: 'absences',
                loadChildren: () => import('./pages/absences/absences.module').then(c => c.AbsencesModule)
            },
            {
                path: 'functions',
                loadChildren: () => import('./pages/functions-risks/functions-risks.module').then(c => c.FunctionsRisksModule)
            },
            {
                path: 'vaccines',
                loadChildren: () => import('./pages/vaccines/vaccines.module').then(c => c.VaccinesModule)
            },
            {
                path: 'cipa-collaborators',
                loadChildren: () => import('./pages/cipa-collaborators/cipa-collaborators.module').then(c => c.CipaCollaboratorsModule)
            },
            {
                path: 'cipa-meetings',
                loadChildren: () => import('./pages/cipa-meetings/cipa-meetings.module').then(c => c.CipaMeetingsModule)
            },
            {
                path: 'compulsory-training',
                loadChildren: () => import('./pages/compulsory-training/compulsory-training.module').then(c => c.CompulsoryTrainingModule)
            },
            {
                path: 'epis',
                loadChildren: () => import('./pages/epis/epis.module').then(c => c.EpisModule)
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
        RouterModule.forChild(routes),
        IconModule
    ],
    exports: [
        RouterModule
    ]
})
export class SystemModule { }
