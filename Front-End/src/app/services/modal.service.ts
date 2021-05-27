import { Injectable } from '@angular/core';

import { IModalButton } from './../shared/interfaces/modal.interface';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
    public isOpen: boolean = false;

    constructor() { }

    public async open(title: string, description: string, buttons: Array<IModalButton>): Promise<void> {

    }
}
