import { Component } from '@angular/core';
import { cilRoom, cilFork, cilGroup, cilExitToApp, cilHome, cilHamburgerMenu } from '@coreui/icons';
import { IconSetService } from '@coreui/icons-angular';

@Component({
    selector: 'system-side-menu',
    templateUrl: './side-menu.component.html',
    styleUrls: ['./side-menu.component.scss'],
    providers: [IconSetService]
})
export class SideMenuComponent {
    /** Flag de menu aberto */
    public opened: boolean = false;

    constructor(
        public iconSet: IconSetService
    ) {
        iconSet.icons = {
            cilRoom,
            cilFork,
            cilGroup,
            cilExitToApp,
            cilHome,
            cilHamburgerMenu
        };
    }

    /**
     * Altera o status do menu
     *
     * @public
     *
     * @return {void}
     */
    public toggleMenu(): void {
        this.opened = !this.opened;
    }

    /**
     * Fecha o menu, caso aberto
     *
     * @public
     *
     * @return {void}
     */
    public changeRoute(): void {
        if (this.opened) {
            this.opened = false;
        }
    }
}
