import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { cilPlus } from '@coreui/icons';
import { IconSetService } from '@coreui/icons-angular';

import { ModalComponent } from 'src/app/shared/components/modal/modal.component';

import { IDataGridAction, IDataGridColumn } from 'src/app/shared/interfaces/data-grid.interface';

@Component({
  selector: 'cipa-list',
  templateUrl: './list.page.html',
  providers: [IconSetService]
})
export class ListCipaComponent {

    @ViewChild('deleteCollaborator') deleteCollaboratorModal: ModalComponent;
    @ViewChild('deleteMeeting') deleteMeetingModal: ModalComponent;
    @ViewChild('designateCollaborator') designateModal: ModalComponent;

    /**
     * Configurações das colunas tabela de colaboradores CIPA
     *
     * @public
     *
     * @return {void}
     */
    public gridColumnsCIPA: Array<IDataGridColumn> = [
        {
            key: 'name',
            label: 'Nome'
        },
        {
            key: 'registry',
            label: 'Registro de funcionário'
        },
        {
            key: 'cpf',
            label: 'CPF'
        },
        {
            key: 'email',
            label: 'E-mail'
        },
        {
            key: 'date',
            label: 'Data de início'
        }
    ];

    /**
     * Configurações das linhas tabela de colaboradores CIPA
     *
     * @public
     *
     * @return {void}
     */
    public gridRowsCIPA: Array<any> = [
        {
            name: 'João Augusto',
            registry: '6985375',
            email: 'joao.augusto@gmail.com',
            cpf: '123.456.789-01',
            date: '16/07/2021'
        },
        {
            name: 'Marcos Vinícius',
            registry: '7452570',
            email: 'marcos111@hotmail.com',
            cpf: '987.654.321-09',
            date: '13/06/2021'
        },
        {
            name: 'Daniel de Souza',
            registry: '3987288',
            email: 'danizinho1998@yahoo.com.br',
            cpf: '485.172.943-32',
            date: '21/07/2021'
        },
        {
            name: 'Carolina das Neves',
            registry: '7807860',
            email: 'carol.neves09@gmail.com',
            cpf: '891.751.426-81',
            date: '07/06/2021'
        }
    ];

    /**
     * Configurações da coluna de ações tabela de colaboradores CIPA
     *
     * @public
     *
     * @return {void}
     */
    public gridActionsCIPA: Array<IDataGridAction> = [
        {
        icon: 'cil-thumb-up',
        classes: 'primary flat',
        label: 'Indicar',
        handler: ({ name }) => this.designateCipaUser(name)
        },
        {
        icon: 'cil-pencil',
        classes: 'secondary flat',
        label: 'Editar',
        handler: (cipaUser) => this.editCipaUser(cipaUser)
        },
        {
        icon: 'cil-trash',
        classes: 'warn flat',
        label: 'Excluir',
        handler: ({ name }) => this.deleteCipaUser(name)
        }
    ];

    /**
     * Configurações das colunas tabela de reuniões CIPA
     *
     * @public
     *
     * @return {void}
     */
    public gridColumnsCIPAMeeting: Array<IDataGridColumn> = [
        {
            key: 'name',
            label: 'Nome'
        },
        {
            key: 'description',
            label: 'Descrição'
        },
        {
            key: 'date',
            label: 'Data'
        }
    ];

    /**
     * Configurações das linhas tabela de reuniões CIPA
     *
     * @public
     *
     * @return {void}
     */
    public gridRowsCIPAMeeting: Array<any> = [
        {
            name: 'Reunião de RH',
            description: 'Discutiremos se iremos, de fato, despedir o Lucas',
            date: '16/06/2021'
        },
        {
            name: 'Reunião de Marketing',
            description: 'Precisamos definir uma abordagem melhor para marketing',
            date: '13/06/2021'
        },
        {
            name: 'Reunião de Negócios',
            description: 'Decidir se iremos nos fundir ao grupo Ânima',
            date: '21/06/2021'
        },
        {
            name: 'Reunião Estratégica',
            description: 'Discutir como e onde podemos melhorar',
            date: '11/06/2021'
        }
    ];

    /**
     * Configurações da coluna de ações tabela de reuniões CIPA
     *
     * @public
     *
     * @return {void}
     */
    public gridActionsCIPAMeeting: Array<IDataGridAction> = [
        {
        icon: 'cil-pencil',
        classes: 'secondary flat',
        label: 'Editar',
        handler: (cipaMeeting) => this.editCipaMeeting(cipaMeeting)
        },
        {
        icon: 'cil-trash',
        classes: 'warn flat',
        label: 'Excluir',
        handler: ({ name }) => this.deleteCipaMeeting(name)
        }
    ];

    public selectedCipaUser: string = '';

    public selectedCipaMeeting: string = '';

    constructor(
        public iconSet: IconSetService,
        public router: Router
    ) {
        iconSet.icons = {
            cilPlus
        };
    }

    /**
     * Redireciona para edição de usuário CIPA
     *
     * @public
     *
     * @return {void}
     */
    public editCipaUser(cipaUser: { name: string, registry: string, email: string, cpf: string, date: string }): void {
        this.router.navigateByUrl('system/cipa-collaborators/edit', { state: cipaUser });
    }

    /**
     * Abre modal para deleção de usuário CIPA
     *
     * @public
     *
     * @return {void}
     */
    public deleteCipaUser(name: string): void {
        this.selectedCipaUser = name;
        this.deleteCollaboratorModal.toggleModal();
    }

    /**
     * Abre modal para indicar de usuário CIPA
     *
     * @public
     *
     * @return {void}
     */
    public designateCipaUser(name: string): void {
        this.selectedCipaUser = name;
        this.designateModal.toggleModal();
    }

    /**
     * Redireciona para edição de reunião CIPA
     *
     * @public
     *
     * @return {void}
     */
     public editCipaMeeting(cipaMeeting: { name: string, description: string, date: string }): void {
        this.router.navigateByUrl('system/cipa-meetings/edit-meeting', { state: cipaMeeting });
    }

    /**
     * Abre modal para deleção de reunião CIPA
     *
     * @public
     *
     * @return {void}
     */
    public deleteCipaMeeting(name: string): void {
        this.selectedCipaMeeting = name;
        this.deleteMeetingModal.toggleModal();
    }
}
