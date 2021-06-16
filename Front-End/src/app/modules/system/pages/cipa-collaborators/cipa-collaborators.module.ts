// Module
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Page Components
import { CreateCipaComponent } from './create/create.page';
import { EditCipaComponent } from './edit/edit.page';
import { ListCipaComponent } from './list/list.page';

// Modules
import { IconModule } from '@coreui/icons-angular';
import { SharedModule } from 'src/app/shared/shared.module';

// Internal routes
const routes: Routes = [
    {
        path: '',
        component: ListCipaComponent
    },
    {
        path: 'create',
        component: CreateCipaComponent
    },
    {
        path: 'edit',
        component: EditCipaComponent
    },
    {
        path: 'list',
        redirectTo: '',
        pathMatch: 'prefix'
    }
];

@NgModule({
    declarations: [
        ListCipaComponent,
        CreateCipaComponent,
        EditCipaComponent
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
export class CipaCollaboratorsModule { }
