import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'collaborators-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss']
})
export class ListCollaboratorsComponent implements OnInit {
    public users: Array<{ name: string, field: string, email: string, cpf: string, state: string }> = [];

    constructor() { }

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
}
