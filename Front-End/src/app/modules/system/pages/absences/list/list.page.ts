import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { cilPencil, cilTrash, cilPlus } from '@coreui/icons';
import { IconSetService } from '@coreui/icons-angular';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';

@Component({
  selector: 'absence-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
  providers: [IconSetService]
})
export class ListAbsencesComponent implements OnInit {

    @ViewChild(ModalComponent) modal: ModalComponent;

    public users: Array<{ name: string, type: string, date_begin: string, date_end: string }> = [];
    public selectedUser: string = '';

    constructor(
        public iconSet: IconSetService,
        public router: Router
    ) {
        iconSet.icons = {
            cilPencil,
            cilTrash,
            cilPlus
        };
    }

    ngOnInit(): void {
        this.users = [
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
    }

    /**
     * Redireciona para edição de usuário
     *
     * @public
     *
     * @return {void}
     */
    public editUser(user: { name: string, type: string, date_begin: string, date_end: string }): void {
        this.router.navigateByUrl('system/absences/edit', { state: user });
    }

    /**
     * Abre modal para deleção de usuário
     *
     * @public
     *
     * @return {void}
     */
    public deleteUser(name: string): void {
        this.selectedUser = name;
        this.modal.toggleModal();
    }
}
