import { Component } from '@angular/core';
import { cilX } from '@coreui/icons';
import { IconSetService } from '@coreui/icons-angular';

@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  providers: [IconSetService]
})
export class ModalComponent {
    public opened: boolean = false;

    constructor(public iconSet: IconSetService) {
        iconSet.icons = {
            cilX
        };
    }

    /**
     * Altera o status do modal
     *
     * @public
     *
     * @return {void}
     */
    public toggleModal(): void {
        this.opened = !this.opened;
    }
}
