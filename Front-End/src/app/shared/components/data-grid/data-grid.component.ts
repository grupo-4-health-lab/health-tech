import { Component, Input } from '@angular/core';
import { cilPencil, cilTrash, cilThumbUp } from '@coreui/icons';
import { IconSetService } from '@coreui/icons-angular';

import { IDataGridAction, IDataGridColumn } from '../../interfaces/data-grid.interface';

@Component({
  selector: 'data-grid',
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.scss'],
  providers: [IconSetService]
})
export class DataGridComponent {
    @Input() columns: Array<IDataGridColumn> = [];
    @Input() rows: Array<any> = [];
    @Input() buttons: Array<IDataGridAction> = [];

    public isLowResolution: boolean = window.screen.availWidth <= 1024;

    constructor(public iconSet: IconSetService) {
        iconSet.icons = {
            cilThumbUp,
            cilPencil,
            cilTrash
        };
    }
}
