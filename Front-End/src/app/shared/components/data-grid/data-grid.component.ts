import { Component, Input, OnInit } from '@angular/core';
import { cilPencil, cilTrash } from '@coreui/icons';
import { IconSetService } from '@coreui/icons-angular';

@Component({
  selector: 'data-grid',
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.scss'],
  providers: [IconSetService]
})
export class DataGridComponent implements OnInit {

    @Input() columns: Array<string> = [];

    constructor(public iconSet: IconSetService) {
        iconSet.icons = {
            cilPencil,
            cilTrash
        };
    }

    ngOnInit(): void {
    }
}
