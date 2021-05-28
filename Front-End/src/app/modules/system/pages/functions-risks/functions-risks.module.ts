// Module
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Page Components
import { ListFunctionRiskComponent } from './list/list.page';
import { CreateFunctionRiskComponent } from './create/create.page';
import { EditFunctionRiskComponent } from './edit/edit.page';

// Modules
import { IconModule } from '@coreui/icons-angular';
import { SharedModule } from 'src/app/shared/shared.module';

// Internal routes
const routes: Routes = [
    {
        path: '',
        component: ListFunctionRiskComponent
    },
    {
        path: 'create',
        component: CreateFunctionRiskComponent
    },
    {
        path: 'edit',
        component: EditFunctionRiskComponent
    },
    {
        path: 'list',
        redirectTo: '',
        pathMatch: 'prefix'
    }
];

@NgModule({
    declarations: [
        ListFunctionRiskComponent,
        CreateFunctionRiskComponent,
        EditFunctionRiskComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(routes),
        IconModule
    ],
    exports: [
        RouterModule
    ]
})
export class FunctionsRisksModule { }
