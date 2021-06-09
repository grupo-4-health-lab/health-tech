import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { cilPlus } from '@coreui/icons';
import { IconSetService } from '@coreui/icons-angular';

import { ModalComponent } from 'src/app/shared/components/modal/modal.component';

import { IDataGridAction, IDataGridColumn } from 'src/app/shared/interfaces/data-grid.interface';

@Component({
  selector: 'functions-risks-list',
  templateUrl: './list.page.html',
  providers: [IconSetService]
})
export class ListFunctionRiskComponent {
    @ViewChild(ModalComponent) modal: ModalComponent;

    public gridColumns: Array<IDataGridColumn> = [
        {
            key: 'field',
            label: 'Cargo'
        },
        {
            key: 'cbo',
            label: 'Código CBO'
        },
        {
            key: 'education',
            label: 'Grau de Escolaridade'
        },
        {
            key: 'experience',
            label: 'Experiência Necessária'
        },
        {
            key: 'review_date',
            label: 'Data de Revisão'
        }
    ];

    public gridRows: Array<any> = [
        {
            field: 'Senador',
            cbo: '1111-05',
            education: 'Pós Graduação e/ou MBA',
            experience: 'A partir de 10 anos',
            review_date: '21/04/2021'
        },
        {
            field: 'Gerente de marketing',
            cbo: '1423-15',
            education: 'Formação Superior completa + Especialização',
            experience: 'De 4 a 5 anos',
            review_date: '16/05/2021'
        },
        {
            field: 'Juiz do trabalho',
            cbo: '1113-45',
            education: 'Superior em curso ou Ensino Médio completo',
            experience: 'De 3 a 4 anos',
            review_date: '12/05/2021'
        },
        {
            field: 'Perito criminal',
            cbo: '2041-05',
            education: 'Formação Superior completa',
            experience: 'De 1 a 2 anos',
            review_date: '11/04/2021'
        }
    ];

    public gridActions: Array<IDataGridAction> = [
        {
            icon: 'cil-pencil',
            classes: 'secondary flat',
            label: 'Editar',
            handler: (job) => this.editJob(job)
        },
        {
            icon: 'cil-trash',
            classes: 'warn flat',
            label: 'Excluir',
            handler: ({ field }) => this.deleteJob(field)
        }
    ];

    public selectedJob: string = '';

    constructor(
        public iconSet: IconSetService,
        public router: Router
    ) {
        iconSet.icons = {
            cilPlus
        };
    }

    /**
     * Redireciona para edição de função
     *
     * @public
     *
     * @return {void}
     */
    public editJob(job: { field: string, cbo: string, education: string, experience: string, review_date: string }): void {
        this.router.navigateByUrl('system/functions/edit', { state: job });
    }

    /**
     * Abre modal para deleção de função
     *
     * @public
     *
     * @return {void}
     */
    public deleteJob(field: string): void {
        this.selectedJob = field;
        this.modal.toggleModal();
    }
}
