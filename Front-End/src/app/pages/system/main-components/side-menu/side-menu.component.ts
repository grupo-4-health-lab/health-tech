import { Component } from '@angular/core';
import { cilRoom, cilFork, cilGroup, cilExitToApp, cilHome } from '@coreui/icons';
import { IconSetService } from '@coreui/icons-angular';

@Component({
  selector: 'system-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
  providers: [IconSetService]
})
export class SideMenuComponent {
    constructor(public iconSet: IconSetService) {
        iconSet.icons = { cilRoom, cilFork, cilGroup, cilExitToApp, cilHome };
    }
}
