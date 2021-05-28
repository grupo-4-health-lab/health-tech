// Module
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Page Components
import { CreateAbsencesComponent } from './create/create.page';
import { EditAbsencesComponent } from './edit/edit.page';
import { ListAbsencesComponent } from './list/list.page';

// Modules
import { IconModule } from '@coreui/icons-angular';
import { SharedModule } from 'src/app/shared/shared.module';

// Internal routes
const routes: Routes = [
    {
        path: '',
        component: ListAbsencesComponent
    },
    {
        path: 'create',
        component: CreateAbsencesComponent
    },
    {
        path: 'edit',
        component: EditAbsencesComponent
    },
    {
        path: 'list',
        redirectTo: '',
        pathMatch: 'prefix'
    }
];

@NgModule({
    declarations: [
        CreateAbsencesComponent,
        EditAbsencesComponent,
        ListAbsencesComponent
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
export class AbsencesModule { }
