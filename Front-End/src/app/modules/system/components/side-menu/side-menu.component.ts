import { Component } from '@angular/core';
import { cilCalendar, cilRoom, cilFork, cilGroup, cilExitToApp, cilHome, cilHamburgerMenu, cilDrop, cilClipboard, cilTask, cilShieldAlt } from '@coreui/icons';
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
            cilHamburgerMenu,
            cilDrop,
            cilClipboard,
            cilTask,
            cilShieldAlt,
            cilCalendar
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
