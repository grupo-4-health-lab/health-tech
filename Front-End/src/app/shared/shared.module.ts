
// Module
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { ModalComponent } from './components/modal/modal.component';

// Modules
import { IconModule } from '@coreui/icons-angular';

@NgModule({
    declarations: [
        ModalComponent
    ],
    imports: [
        CommonModule,
        IconModule
    ],
    exports: [
        ModalComponent
    ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class SharedModule { }
