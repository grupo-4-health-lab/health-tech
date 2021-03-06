// Module
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Page Components
import { CreateCollaboratorsComponent } from './create/create.page';
import { EditCollaboratorsComponent } from './edit/edit.page';
import { ListCollaboratorsComponent } from './list/list.page';

// Modules
import { IconModule } from '@coreui/icons-angular';
import { SharedModule } from 'src/app/shared/shared.module';

// Internal routes
const routes: Routes = [
    {
        path: '',
        component: ListCollaboratorsComponent
    },
    {
        path: 'create',
        component: CreateCollaboratorsComponent
    },
    {
        path: 'edit',
        component: EditCollaboratorsComponent
    },
    {
        path: 'list',
        redirectTo: '',
        pathMatch: 'prefix'
    }
];

@NgModule({
    declarations: [
        ListCollaboratorsComponent,
        CreateCollaboratorsComponent,
        EditCollaboratorsComponent
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
export class CollaboratorsModule { }
