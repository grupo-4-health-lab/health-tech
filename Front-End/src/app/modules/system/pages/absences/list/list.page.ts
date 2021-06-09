import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { cilPlus } from '@coreui/icons';
import { IconSetService } from '@coreui/icons-angular';

import { ModalComponent } from 'src/app/shared/components/modal/modal.component';

import { IDataGridAction, IDataGridColumn } from 'src/app/shared/interfaces/data-grid.interface';

@Component({
  selector: 'absence-list',
  templateUrl: './list.page.html',
  providers: [IconSetService]
})
export class ListAbsencesComponent {
    @ViewChild(ModalComponent) modal: ModalComponent;

    public gridColumns: Array<IDataGridColumn> = [
        {
            key: 'name',
            label: 'Nome'
        },
        {
            key: 'type',
            label: 'Tipo'
        },
        {
            key: 'date_begin',
            label: 'Data de Início'
        },
        {
            key: 'date_end',
            label: 'Data de Término'
        }
    ];

    public gridRows: Array<any> = [
        {
            name: 'João Augusto',
            type: 'Feriado',
            date_begin: '20/05/2021',
            date_end: '28/05/2021'
        },
        {
            name: 'Marcos Vinícius',
            type: 'Enfermidade',
            date_begin: '18/04/2021',
            date_end: '20/05/2021'
        },
        {
            name: 'Daniel de Souza',
            type: 'Licença',
            date_begin: '19/05/2021',
            date_end: '21/05/2021'
        },
        {
            name: 'Carolina das Neves',
            type: 'Acidente',
            date_begin: '02/03/2021',
            date_end: '05/04/2021'
        }
    ];

    public gridActions: Array<IDataGridAction> = [
        {
            icon: 'cil-pencil',
            classes: 'secondary flat',
            label: 'Editar',
            handler: (user) => this.editAbsence(user)
        },
        {
            icon: 'cil-trash',
            classes: 'warn flat',
            label: 'Excluir',
            handler: ({ name }) => this.deleteAbsence(name)
        }
    ];

    public selectedAbsence: string = '';

    constructor(
        public iconSet: IconSetService,
        public router: Router
    ) {
        iconSet.icons = {
            cilPlus
        };
    }

    /**
     * Redireciona para edição de ausência
     *
     * @public
     *
     * @return {void}
     */
    public editAbsence(absence: { name: string, type: string, date_begin: string, date_end: string }): void {
        this.router.navigateByUrl('system/absences/edit', { state: absence });
    }

    /**
     * Abre modal para deleção de ausência
     *
     * @public
     *
     * @return {void}
     */
    public deleteAbsence(name: string): void {
        this.selectedAbsence = name;
        this.modal.toggleModal();
    }
}
