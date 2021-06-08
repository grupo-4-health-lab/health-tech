import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { cilPlus } from '@coreui/icons';
import { IconSetService } from '@coreui/icons-angular';

import { ModalComponent } from 'src/app/shared/components/modal/modal.component';

import { IDataGridAction, IDataGridColumn } from 'src/app/shared/interfaces/data-grid.interface';

@Component({
  selector: 'collaborators-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
  providers: [IconSetService]
})
export class ListCollaboratorsComponent {
    @ViewChild(ModalComponent) modal: ModalComponent;

    public gridColumns: Array<IDataGridColumn> = [
        {
            key: 'name',
            label: 'Nome'
        },
        {
            key: 'field',
            label: 'Cargo'
        },
        {
            key: 'email',
            label: 'E-mail'
        },
        {
            key: 'cpf',
            label: 'CPF'
        },
        {
            key: 'city',
            label: 'Cidade'
        }
    ];

    public gridRows: Array<any> = [
        {
            name: 'João Augusto',
            field: 'Gerente de Setor',
            email: 'joao.augusto@gmail.com',
            cpf: '123.456.789-01',
            city: 'Belo Horizonte'
        },
        {
            name: 'Marcos Vinícius',
            field: 'Enfermeiro',
            email: 'marcos111@hotmail.com',
            cpf: '987.654.321-09',
            city: 'São Paulo'
        },
        {
            name: 'Daniel de Souza',
            field: 'Médico Plantonista',
            email: 'danizinho1998@yahoo.com.br',
            cpf: '485.172.943-32',
            city: 'Belo Horizonte'
        },
        {
            name: 'Carolina das Neves',
            field: 'Secretária',
            email: 'carol.neves09@gmail.com',
            cpf: '891.751.426-81',
            city: 'Belo Horizonte'
        }
    ];

    public gridActions: Array<IDataGridAction> = [
        {
            icon: 'cil-pencil',
            classes: 'secondary flat',
            label: 'Editar',
            handler: (user) => this.editUser(user)
        },
        {
            icon: 'cil-trash',
            classes: 'warn flat',
            label: 'Excluir',
            handler: ({ name }) => this.deleteUser(name)
        }
    ];

    public selectedUser: string = '';

    constructor(
        public iconSet: IconSetService,
        public router: Router
    ) {
        iconSet.icons = {
            cilPlus
        };
    }

    /**
     * Redireciona para edição de usuário
     *
     * @public
     *
     * @return {void}
     */
    public editUser(user: { name: string, field: string, email: string, cpf: string, city: string }): void {
        this.router.navigateByUrl('system/collaborators/edit', { state: user });
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
