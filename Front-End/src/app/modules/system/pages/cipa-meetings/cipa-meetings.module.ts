// Module
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Page Components
import { CipaMeetingsComponent } from './meetings/meetings.page';
import { CreateCipaMeetingComponent } from './create-meeting/create-meeting.page';
import { EditCipaMeetingComponent } from './edit-meeting/edit-meeting.page';

// Modules
import { IconModule } from '@coreui/icons-angular';
import { SharedModule } from 'src/app/shared/shared.module';
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
//import interactionPlugin from '@fullcalendar/interaction';

// Internal routes
const routes: Routes = [
    {
        path: '',
        component: CipaMeetingsComponent
    },
    {
        path: 'create-meeting',
        component: CreateCipaMeetingComponent
    },
    {
        path: 'edit-meeting',
        component: EditCipaMeetingComponent
    },
    {
        path: 'meetings',
        redirectTo: '',
        pathMatch: 'prefix'
    }
];

FullCalendarModule.registerPlugins([
    dayGridPlugin
]);

@NgModule({
    declarations: [
        CipaMeetingsComponent,
        CreateCipaMeetingComponent,
        EditCipaMeetingComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(routes),
        FullCalendarModule,
        IconModule
    ],
    exports: [
        RouterModule
    ]
})
export class CipaMeetingsModule { }
