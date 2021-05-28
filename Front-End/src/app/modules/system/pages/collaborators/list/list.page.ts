import { Component, OnInit, ViewChild } from '@angular/core';
import { cilPencil, cilTrash } from '@coreui/icons';
import { IconSetService } from '@coreui/icons-angular';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';

@Component({
  selector: 'collaborators-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
  providers: [IconSetService]
})
export class ListCollaboratorsComponent implements OnInit {
    @ViewChild(ModalComponent) modal: ModalComponent;

    public users: Array<{ name: string, field: string, email: string, cpf: string, state: string }> = [];
    public selectedUser: string = '';

    constructor(public iconSet: IconSetService) {
        iconSet.icons = {
            cilPencil,
            cilTrash
        };
    }

    ngOnInit(): void {
        this.users = [
            {
                name: 'João Augusto',
                field: 'Gerente de Setor',
                email: 'joao.augusto@gmail.com',
                cpf: '123.456.789-01',
                state: 'Minas Gerais'
            },
            {
                name: 'Marcos Vinícius',
                field: 'Enfermeiro',
                email: 'marcos111@hotmail.com',
                cpf: '987.654.321-09',
                state: 'São Paulo'
            },
            {
                name: 'Daniel de Souza',
                field: 'Médico Plantonista',
                email: 'danizinho1998@yahoo.com.br',
                cpf: '485.172.943-32',
                state: 'Minas Gerais'
            },
            {
                name: 'Carolina das Neves',
                field: 'Secretária',
                email: 'carol.neves09@gmail.com',
                cpf: '891.751.426-81',
                state: 'Minas Gerais'
            }
        ];
    }

    public deleteUser(name: string): void {
        this.selectedUser = name;
        this.modal.toggleModal();
    }
}
