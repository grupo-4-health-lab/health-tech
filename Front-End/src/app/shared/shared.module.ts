
// Module
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { ModalComponent } from './components/modal/modal.component';
import { DataGridComponent } from './components/data-grid/data-grid.component';

// Modules
import { IconModule } from '@coreui/icons-angular';

@NgModule({
    declarations: [
        ModalComponent,
        DataGridComponent
    ],
    imports: [
        CommonModule,
        IconModule
    ],
    exports: [
        ModalComponent,
        DataGridComponent
    ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class SharedModule { }
